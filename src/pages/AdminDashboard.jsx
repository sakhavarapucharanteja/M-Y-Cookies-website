
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./AdminDashboard.css";


const SERVER_URL =
  import.meta.env.VITE_API_BASE_URL || "http://localhost:5000";

const API_URL = `${SERVER_URL}/api/products`;


const initialForm = {
  name: "",
  description: "",
  price: "",
  prices: [
    { weight: "100 grams", price: "" },
    { weight: "250 grams", price: "" },
    { weight: "500 grams", price: "" },
    { weight: "1 kg", price: "" },
  ],
  useWeightOptions: false,
  category: "",
  image: "",
  stock: "",
  featured: false,
};

function getImageUrl(image) {
  if (!image) return "";

  // Already an absolute URL
  if (image.startsWith("http://") || image.startsWith("https://")) {
    return image;
  }

  // Relative path from the backend, e.g. /uploads/image.jpg
  return `${SERVER_URL}${image.startsWith("/") ? "" : "/"}${image}`;
}

function AdminDashboard() {
  const navigate = useNavigate();

  const [products, setProducts] = useState([]);
  const [form, setForm] = useState(initialForm);
  const [editingId, setEditingId] = useState(null);
  const [showForm, setShowForm] = useState(false);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [message, setMessage] = useState("");
  const [deleteProduct, setDeleteProduct] = useState(null);
  const [deleting, setDeleting] = useState(false);

  const [imageFile, setImageFile] = useState(null);
  const [imagePreview, setImagePreview] = useState("");

  // Get JWT authorization headers
  const getAuthConfig = () => {
    const token = localStorage.getItem("adminToken");

    return {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
  };

  // Logout admin
  const handleLogout = () => {
    localStorage.removeItem("adminToken");
    localStorage.removeItem("adminInfo");

    navigate("/admin/login", { replace: true });
  };

  // Handle unauthorized or forbidden requests
  const handleAuthError = (error) => {
    if (
      error.response?.status === 401 ||
      error.response?.status === 403
    ) {
      handleLogout();
      return true;
    }

    return false;
  };

  // Fetch products from MongoDB
  const fetchProducts = async () => {
    try {
      setLoading(true);

      const response = await axios.get(API_URL);

      setProducts(response.data);
    } catch (error) {
      console.error("Error fetching products:", error);

      setMessage("Unable to load products. Check your backend.");
    } finally {
      setLoading(false);
    }
  };

  // Load products when dashboard opens
  useEffect(() => {
    fetchProducts();
  }, []);

  // Handle text, number, select, and checkbox inputs
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    setForm((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };


  // Handle weight-based price changes
    const handleWeightPriceChange = (weight, value) => {
    setForm((prev) => ({
        ...prev,
        prices: prev.prices.map((item) =>
        item.weight === weight
            ? { ...item, price: value }
            : item
        ),
    }));
    };

  // Handle image selection
  const handleImageChange = (e) => {
    const file = e.target.files?.[0];

    if (!file) return;

    if (!file.type.startsWith("image/")) {
      setMessage("Please select a valid image file.");
      e.target.value = "";
      return;
    }

    // Frontend image size limit: 5 MB
    if (file.size > 5 * 1024 * 1024) {
      setMessage("Image size must be less than 5 MB.");
      e.target.value = "";
      return;
    }

    setImageFile(file);
    setImagePreview(URL.createObjectURL(file));
    setMessage("");
  };

  // Open add product form
  const handleAdd = () => {
    setForm({ ...initialForm });
    setEditingId(null);
    setImageFile(null);
    setImagePreview("");
    setShowForm(true);
    setMessage("");
  };

  // Open edit product form
  const handleEdit = (product) => {
  const defaultWeights = [
    "100 grams",
    "250 grams",
    "500 grams",
    "1 kg",
  ];

  const existingPrices = Array.isArray(product.prices)
    ? product.prices
    : [];

  setForm({
    name: product.name || "",
    description: product.description || "",
    price: product.price ?? "",
    prices: defaultWeights.map((weight) => {
      const existing = existingPrices.find(
        (item) => item.weight === weight
      );

      return {
        weight,
        price: existing?.price ?? "",
      };
    }),
    useWeightOptions: existingPrices.length > 0,
    category: product.category || "",
    image: product.image || "",
    stock: product.stock ?? 0,
    featured: product.featured || false,
  });

  setImageFile(null);
  setImagePreview(getImageUrl(product.image));

  setEditingId(product._id);
  setShowForm(true);
  setMessage("");
};

  // Close add/edit modal
  const closeForm = () => {
    setShowForm(false);
    setForm({ ...initialForm });
    setEditingId(null);
    setImageFile(null);
    setImagePreview("");
  };

  // Save product: Add or Edit
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setSaving(true);
      setMessage("");

      const productData = new FormData();

      productData.append("name", form.name.trim());
      productData.append("description", form.description.trim());

      const validPrices = form.useWeightOptions
        ? form.prices
            .filter(
                (item) =>
                item.price !== "" &&
                Number(item.price) >= 0
            )
            .map((item) => ({
                weight: item.weight,
                price: Number(item.price),
            }))
        : [];

        // Validate weight prices
        if (form.useWeightOptions && validPrices.length === 0) {
        setMessage("Please enter at least one package price.");
        setSaving(false);
        return;
        }

        // Keep the lowest weight-option price as the base price
        const basePrice = form.useWeightOptions
        ? Math.min(...validPrices.map((item) => item.price))
        : Number(form.price);

        productData.append("price", basePrice);

        // Send weight-based pricing to backend
        productData.append(
        "prices",
        JSON.stringify(validPrices)
        );
      productData.append("category", form.category);
      productData.append("stock", Number(form.stock));
      productData.append("featured", String(form.featured));

      // Existing image path when editing without a new image
      productData.append("existingImage", form.image || "");

      // Add selected image file, if any
      if (imageFile) {
        productData.append("image", imageFile);
      }

      const authConfig = getAuthConfig();

      if (editingId) {
        // Update existing product
        await axios.put(
          `${API_URL}/${editingId}`,
          productData,
          authConfig
        );

        setMessage("Product updated successfully!");
      } else {
        // Add new product
        await axios.post(
          API_URL,
          productData,
          authConfig
        );

        setMessage("Product added successfully!");
      }

      closeForm();

      await fetchProducts();
    } catch (error) {
      console.error("Error saving product:", error);

      if (handleAuthError(error)) {
        return;
      }

      setMessage(
        error.response?.data?.message || "Failed to save product."
      );
    } finally {
      setSaving(false);
    }
  };

  // Open delete confirmation modal
  const handleDelete = (product) => {
    setDeleteProduct(product);
  };

  // Confirm and delete product
  const confirmDelete = async () => {
    if (!deleteProduct) return;

    try {
      setDeleting(true);
      setMessage("");

      await axios.delete(
        `${API_URL}/${deleteProduct._id}`,
        getAuthConfig()
      );

      setMessage("Product deleted successfully!");
      setDeleteProduct(null);

      await fetchProducts();
    } catch (error) {
      console.error("Error deleting product:", error);

      if (handleAuthError(error)) {
        return;
      }

      setMessage(
        error.response?.data?.message || "Failed to delete product."
      );
    } finally {
      setDeleting(false);
    }
  };

  // Close delete confirmation modal
  const closeDeleteModal = () => {
    if (!deleting) {
      setDeleteProduct(null);
    }
  };

  // Filter products
  const filteredProducts = products.filter((product) =>
    (product.name || "")
      .toLowerCase()
      .includes(search.toLowerCase())
  );

  // Dashboard statistics
  const totalStock = products.reduce(
    (total, product) => total + Number(product.stock || 0),
    0
  );

  const featuredCount = products.filter(
    (product) => product.featured
  ).length;

  return (
    <div className="admin-container">
      {/* Sidebar */}
      <aside className="admin-sidebar">
        <div className="admin-brand">
          <span className="brand-icon">🥗</span>

          <div>
            <h2>M &amp; Y</h2>
            <p>Homemade Foods</p>
          </div>
        </div>

        <nav className="admin-nav">
          <a href="#dashboard" className="active">
            <span>▦</span> Dashboard
          </a>

          <a href="#products">
            <span>🛍</span> Products
          </a>
        </nav>

        <div className="sidebar-bottom">
          <p>Admin Panel</p>
          <small>Manage your homemade foods</small>
        </div>
      </aside>

      {/* Main Content */}
      <main className="admin-main">
        <header className="admin-header">
          <div>
            <h1>Admin Dashboard</h1>
            <p>Manage your products and store inventory.</p>
          </div>

          <div className="admin-header-actions">
            <button
              className="add-product-btn"
              onClick={handleAdd}
            >
              + Add Product
            </button>

            <button
              className="admin-logout-btn"
              onClick={handleLogout}
            >
              Logout
            </button>
          </div>
        </header>

        {/* Dashboard Stats */}
        <section className="admin-stats" id="dashboard">
          <div className="stat-card">
            <div className="stat-icon purple">🛍</div>

            <div>
              <p>Total Products</p>
              <h2>{products.length}</h2>
            </div>
          </div>

          <div className="stat-card">
            <div className="stat-icon green">📦</div>

            <div>
              <p>Total Stock</p>
              <h2>{totalStock}</h2>
            </div>
          </div>

          <div className="stat-card">
            <div className="stat-icon orange">⭐</div>

            <div>
              <p>Featured Products</p>
              <h2>{featuredCount}</h2>
            </div>
          </div>
        </section>

        {/* Products */}
        <section className="admin-products" id="products">
          <div className="products-heading">
            <div>
              <h2>Products</h2>
              <p>Manage all your homemade food products.</p>
            </div>

            <input
              type="text"
              placeholder="Search products..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="product-search"
            />
          </div>

          {message && (
            <div className="admin-message">
              {message}
            </div>
          )}

          {loading ? (
            <p className="admin-loading">Loading products...</p>
          ) : filteredProducts.length === 0 ? (
            <div className="empty-products">
              <div className="empty-icon">🛍</div>

              <h3>No products found</h3>
              <p>Add your first homemade food product.</p>

              <button onClick={handleAdd}>
                + Add Your First Product
              </button>
            </div>
          ) : (
            <div className="product-table-wrapper">
              <table className="product-table">
                <thead>
                  <tr>
                    <th>Product</th>
                    <th>Category</th>
                    <th>Price</th>
                    <th>Stock</th>
                    <th>Featured</th>
                    <th>Actions</th>
                  </tr>
                </thead>

                <tbody>
                  {filteredProducts.map((product) => (
                    <tr key={product._id}>
                      <td>
                        <div className="product-info">
                          {product.image ? (
                            <img
                              src={getImageUrl(product.image)}
                              alt={product.name}
                              className="product-thumbnail"
                            />
                          ) : (
                            <div className="product-placeholder">
                              🥗
                            </div>
                          )}

                          <div>
                            <strong>{product.name}</strong>
                            <p>{product.description}</p>
                          </div>
                        </div>
                      </td>

                      <td>{product.category}</td>

                      <td>
                        {product.prices?.length > 0 ? (
                            <div>
                            <strong>From ₹{product.price}</strong>
                            <small style={{ display: "block", color: "#888" }}>
                                {product.prices.length} sizes
                            </small>
                            </div>
                        ) : (
                            `₹${product.price}`
                        )}
                     </td>

                      <td>
                        <span
                          className={
                            product.stock > 0
                              ? "stock-badge"
                              : "stock-badge out-of-stock"
                          }
                        >
                          {product.stock}
                        </span>
                      </td>

                      <td>
                        {product.featured ? "⭐ Yes" : "No"}
                      </td>

                      <td>
                        <div className="product-actions">
                          <button
                            className="edit-btn"
                            onClick={() => handleEdit(product)}
                          >
                            Edit
                          </button>

                          <button
                            className="delete-btn"
                            onClick={() => handleDelete(product)}
                          >
                            Delete
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </section>
      </main>

      {/* Add / Edit Product Modal */}
      {showForm && (
        <div className="admin-modal-overlay">
          <div className="admin-modal">
            <div className="modal-heading">
              <div>
                <h2>
                  {editingId ? "Edit Product" : "Add New Product"}
                </h2>

                <p>Enter your homemade food product details.</p>
              </div>

              <button
                type="button"
                className="modal-close"
                onClick={closeForm}
                aria-label="Close"
              >
                ×
              </button>
            </div>

            <form onSubmit={handleSubmit}>
              <label>Product Name</label>

              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Homemade Mango Pickle"
                required
              />

              <label>Description</label>

              <textarea
                name="description"
                value={form.description}
                onChange={handleChange}
                placeholder="Describe your product..."
                required
              />

              {/* PRICING TYPE */}

<div className="pricing-mode-section">

  <label className="featured-checkbox">
    <input
      type="checkbox"
      checked={form.useWeightOptions}
      onChange={(e) =>
        setForm((prev) => ({
          ...prev,
          useWeightOptions: e.target.checked,
        }))
      }
    />

    Enable Multiple Weight Options
  </label>

  {form.useWeightOptions ? (

    <div className="weight-pricing-box">

      <h3>Package Sizes & Prices</h3>

      <p>Enter the selling price for each package.</p>

      {form.prices.map((item) => (

        <div className="weight-price-row" key={item.weight}>

          <label>{item.weight}</label>

          <div className="weight-price-input">
            <span>₹</span>

            <input
            type="number"
            min="0"
            step="0.01"
            placeholder="Enter price"
            value={item.price}
            onChange={(e) =>
                handleWeightPriceChange(item.weight, e.target.value)
            }
            />
          </div>

        </div>

      ))}

    </div>

  ) : (

    <div>
      <label>Price (₹)</label>

      <input
        type="number"
        name="price"
        value={form.price}
        onChange={handleChange}
        min="0"
        step="0.01"
        required
      />
    </div>

  )}

</div>

{/* STOCK */}
<label>Stock</label>

<input
  type="number"
  name="stock"
  min="0"
  value={form.stock}
  onChange={handleChange}
  placeholder="Enter available stock"
/>

              <label>Category</label>

              <select
                name="category"
                value={form.category}
                onChange={handleChange}
                required
              >
                <option value="">Select Category</option>
                <option value="Pickles">Pickles</option>
                <option value="Sweets">Sweets</option>
                <option value="Snacks">Snacks</option>
                <option value="Powders">Powders</option>
                <option value="Homemade Foods">Homemade Foods</option>
                <option value="Other">Other</option>
              </select>

              {/* Direct Image Upload */}
              <label>Product Image</label>

              <input
                type="file"
                accept="image/*"
                onChange={handleImageChange}
              />

              {imagePreview && (
                <div className="image-preview-container">
                  <img
                    src={imagePreview}
                    alt="Product preview"
                    className="product-image-preview"
                  />

                  <button
                    type="button"
                    className="remove-image-btn"
                    onClick={() => {
                      setImageFile(null);
                      setImagePreview("");

                      setForm((prev) => ({
                        ...prev,
                        image: "",
                      }));
                    }}
                  >
                    Remove Image
                  </button>
                </div>
              )}

              <label className="featured-checkbox">
                <input
                  type="checkbox"
                  name="featured"
                  checked={form.featured}
                  onChange={handleChange}
                />

                Featured Product
              </label>

              <div className="modal-actions">
                <button
                  type="button"
                  className="cancel-btn"
                  onClick={closeForm}
                  disabled={saving}
                >
                  Cancel
                </button>

                <button
                  type="submit"
                  className="save-btn"
                  disabled={saving}
                >
                  {saving
                    ? "Saving..."
                    : editingId
                    ? "Update Product"
                    : "Save Product"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Delete Confirmation Modal */}
      {deleteProduct && (
        <div
          className="delete-modal-overlay"
          onClick={closeDeleteModal}
        >
          <div
            className="delete-modal"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="delete-modal-header">
              <div className="delete-modal-icon">
                <span>🗑️</span>
              </div>

              <div>
                <h2>Delete Product?</h2>
                <p>This action cannot be undone.</p>
              </div>
            </div>

            <div className="delete-modal-content">
              <p>
                Are you sure you want to delete{" "}
                <strong>{deleteProduct.name}</strong> from your inventory?
              </p>
            </div>

            <div className="delete-modal-actions">
              <button
                type="button"
                className="delete-cancel-btn"
                onClick={closeDeleteModal}
                disabled={deleting}
              >
                Cancel
              </button>

              <button
                type="button"
                className="delete-confirm-btn"
                onClick={confirmDelete}
                disabled={deleting}
              >
                {deleting ? "Deleting..." : "Delete Product"}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default AdminDashboard;


import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ArrowRight, MessageCircle } from "lucide-react";
import "./Products.css";

const API_URL = "http://localhost:5000/api/products";
const IMAGE_BASE_URL = "http://localhost:5000";

const categoryOrder = [
  "Healthy Laddus",
  "Healthy Nutrition",
  "Chocolates",
  "Dry Fruits Chocolates",
  "Cookies",
  "Tiffins & Snacks",
];

function Products() {
  const navigate = useNavigate();

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  // Fetch all products from MongoDB
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch(API_URL);

        if (!response.ok) {
          throw new Error("Failed to fetch products");
        }

        const data = await response.json();

        setProducts(Array.isArray(data) ? data : []);
      } catch (error) {
        console.error("Error fetching products:", error);
        setError("Unable to load products. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  // Group products by category
  const groupedProducts = categoryOrder.map((category) => ({
    category,
    products: products.filter(
      (product) => product.category === category
    ),
  }));

  // Include categories that are not listed in categoryOrder
  const additionalCategories = [
    ...new Set(
      products
        .map((product) => product.category)
        .filter(
          (category) =>
            category && !categoryOrder.includes(category)
        )
    ),
  ];

  const allGroupedProducts = [
    ...groupedProducts,
    ...additionalCategories.map((category) => ({
      category,
      products: products.filter(
        (product) => product.category === category
      ),
    })),
  ].filter((group) => group.products.length > 0);

  // Build image URL
  const getImageUrl = (image) => {
    if (!image) {
      return "/placeholder-product.png";
    }

    if (image.startsWith("http://") || image.startsWith("https://")) {
      return image;
    }

    return `${IMAGE_BASE_URL}${image.startsWith("/") ? "" : "/"}${image}`;
  };

  return (
    <div className="products-page">

      {/* PAGE HEADER */}

      <section className="products-page-header">

        <span className="eyebrow">
          OUR HOMEMADE COLLECTION
        </span>

        <h1>
          Something Delicious For
          <span> Everyone</span>
        </h1>

        <p>
          Explore our freshly prepared homemade sweets,
          healthy treats, delicious chocolates and snacks.
        </p>

      </section>

      {/* PRODUCTS BY CATEGORY */}

      <section className="products-page-content">

        {loading && (
          <p className="products-message">
            Loading products...
          </p>
        )}

        {error && (
          <p className="products-message">
            {error}
          </p>
        )}

        {!loading && !error && products.length === 0 && (
          <p className="products-message">
            No products available at the moment.
          </p>
        )}

        {!loading &&
          !error &&
          allGroupedProducts.map(
            ({ category, products: categoryProducts }) => (

              <div
                className="product-category-section"
                key={category}
              >

                {/* CATEGORY TITLE */}

                <div className="product-category-header">

                  <h2>{category}</h2>

                  <div className="category-line"></div>

                </div>

                {/* CATEGORY PRODUCTS */}

                <div className="product-grid">

                  {categoryProducts.map((product) => (

                    <div
                      className="product-card"
                      key={product._id}
                      onClick={() =>
                        navigate(`/product/${product._id}`)
                      }
                      style={{ cursor: "pointer" }}
                    >

                      {/* PRODUCT IMAGE */}

                      <div className="product-image">

                        <img
                          src={getImageUrl(product.image)}
                          alt={product.name}
                          loading="lazy"
                        />

                        <div className="product-category">
                          {product.category}
                        </div>

                      </div>

                      {/* PRODUCT INFORMATION */}

                      <div className="product-info">

                        <h3>{product.name}</h3>

                        <p>{product.description}</p>

                        <div className="product-bottom">

                          <div className="price">

                            <span>
                              Starting from
                            </span>

                            <strong>
                              ₹{product.price}
                            </strong>

                          </div>

                          <button
                            className="product-order-btn"
                            onClick={(e) => {
                              e.stopPropagation();

                              navigate(
                                `/product/${product._id}`
                              );
                            }}
                          >

                            <MessageCircle size={18} />

                            View

                          </button>

                        </div>

                      </div>

                    </div>

                  ))}

                </div>

              </div>
            )
          )}

        {/* BACK BUTTON */}

        <div className="products-back-button">

          <Link
            to="/"
            className="secondary-btn"
          >

            <ArrowRight
              size={19}
              style={{
                transform: "rotate(180deg)",
              }}
            />

            Back to Home

          </Link>

        </div>

      </section>

    </div>
  );
}

export default Products;

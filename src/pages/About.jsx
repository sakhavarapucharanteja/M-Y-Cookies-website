import { Link } from "react-router-dom";

import {
  Heart,
  Star,
  MessageCircle,
  Leaf,
  Sparkles,
  Award,
  Gift,
  ArrowRight,
  Briefcase,
  Plane,
  GraduationCap,
  Home,
  Car,
  CheckCircle,
  MapPin,
} from "lucide-react";

/* =========================================================
   STALL IMAGES & VIDEO
========================================================= */

import stall1 from "../images/stall1.jpeg";
import stall1_1 from "../images/stall1.1.jpeg";
import stall1_2 from "../images/stall1.2.jpeg";

import stall2 from "../images/stall2.jpeg";
import stall2_1 from "../images/stall2.1.jpeg";
import stall2Video from "../images/stall2v.mp4";


function About() {

  /* =========================================================
     WHY CHOOSE US
  ========================================================= */

  const values = [
    {
      icon: <Heart size={28} fill="currentColor" />,
      title: "Made With Care",
      description:
        "Every M&Y product is prepared at home with care, attention and the goodness of homemade food.",
    },

    {
      icon: <Leaf size={28} />,
      title: "Wholesome Ingredients",
      description:
        "We carefully prepare our products using quality ingredients such as dry fruits, nuts, seeds and other wholesome ingredients.",
    },

    {
      icon: <Sparkles size={28} />,
      title: "Nutrition Made Easy",
      description:
        "We bring together nutritious ingredients in convenient snack options that are easy to enjoy during your busy day.",
    },

    {
      icon: <Award size={28} />,
      title: "A Better Snack Choice",
      description:
        "Our focus is on creating homemade and wholesome snack options as a better alternative to typical junk-food choices.",
    },
  ];


  /* =========================================================
     BUSY LIFESTYLE
  ========================================================= */

  const lifestylePoints = [
    {
      icon: <Briefcase size={22} />,
      title: "Working Long Hours",
    },

    {
      icon: <Plane size={22} />,
      title: "Travelling",
    },

    {
      icon: <GraduationCap size={22} />,
      title: "Studying",
    },

    {
      icon: <Home size={22} />,
      title: "Managing a Family",
    },

    {
      icon: <Car size={22} />,
      title: "On the Go",
    },
  ];


  /* =========================================================
     OUR PROMISE
  ========================================================= */

  const promisePoints = [
    "Quality ingredients",
    "Homemade preparation",
    "Convenient everyday snacking",
    "Better alternatives to typical junk-food choices",
    "Making nutritious eating easier for busy lifestyles",
  ];


  return (
    <div className="page-container about-page">


      {/* =====================================================
          HERO ABOUT SECTION
      ===================================================== */}

      <section className="about-section about-hero-section">

        <div className="about-visual">

          <div className="about-circle">
            🌿
          </div>

          <div className="about-small-card">

            <Star
              size={20}
              fill="currentColor"
            />

            <span>
              Healthy & Homemade
            </span>

          </div>

        </div>


        <div className="about-content">

          <span className="eyebrow">
            ABOUT M&Y HOMEMADE FOODS
          </span>

          <h2>
            Making Everyday Nutrition Simple, Healthy & Convenient
          </h2>

          <p>
            At M&Y Homemade Foods, we believe that healthy eating should not
            be complicated or time-consuming.
          </p>

          <p>
            In today’s busy lifestyle, it can be easy to reach for convenient
            and highly processed snacks whenever hunger strikes.
          </p>

          <p>
            That’s why we started M&Y Homemade Foods — with a simple purpose:
            to make everyday nutrition easy, convenient, tasty and accessible.
          </p>

          <Link
            to="/contact"
            className="primary-btn"
          >
            <MessageCircle size={20} />
            Contact Us
          </Link>

        </div>

      </section>


      {/* =====================================================
          WHY M&Y HOMEMADE FOODS
      ===================================================== */}

      <section className="about-story">

        <div className="about-story-content">

          <span className="eyebrow">
            WHY M&Y HOMEMADE FOODS?
          </span>

          <h2>
            Homemade Goodness Made Convenient
          </h2>

          <p>
            We carefully prepare our homemade food products using quality
            ingredients that can be part of a balanced diet, including dry
            fruits, nuts, seeds and other wholesome ingredients.
          </p>

          <p>
            Our goal is to bring together a variety of nutritious ingredients
            in convenient snack options, so you don't have to spend extra time
            preparing and combining different ingredients every day.
          </p>

          <p>
            We believe that good food should be easy to enjoy, especially when
            life gets busy.
          </p>

        </div>


        <div className="story-highlight">

          <div className="story-highlight-icon">
            <Leaf size={42} />
          </div>

          <h3>
            Nutrition Made Easy
          </h3>

          <p>
            Wholesome homemade snack options designed to fit easily into your
            everyday lifestyle.
          </p>

        </div>

      </section>


      {/* =====================================================
          OUR EXPERIENCE
      ===================================================== */}

      <section className="about-experience">


        {/* EXPERIENCE HEADER */}

        <div className="experience-header">

          <span className="eyebrow">
            OUR JOURNEY
          </span>

          <h2>
            From Our Kitchen to the Community
          </h2>

          <p>
            Our journey goes beyond preparing homemade food.
            We love meeting people, sharing our products and
            bringing wholesome homemade choices closer to the community.
          </p>

        </div>


        {/* =================================================
            BASAVATARAMAKAM INDO-AMERICAN CANCER HOSPITAL
        ================================================= */}

        <div className="experience-location">


          {/* LOCATION TITLE */}

          <div className="experience-location-header">

            <div className="experience-location-icon">
              <MapPin size={25} />
            </div>

            <div>

              <h3>
                Basavatarakam Indo-American Cancer Hospital
              </h3>

              <p>
                Banjara Hills, Hyderabad
              </p>

            </div>

          </div>


          {/* GALLERY */}

          <div className="experience-gallery">


            {/* IMAGE 1 */}

            <div className="experience-photo">

              <img
                src={stall1}
                alt="M&Y Homemade Foods stall at Basavatarakam Indo-American Cancer Hospital, Banjara Hills"
              />

              <span className="experience-photo-label">
                Our Homemade Food Stall
              </span>

            </div>


            {/* IMAGE 2 */}

            <div className="experience-photo">

              <img
                src={stall1_1}
                alt="M&Y Homemade Foods products at Basavatarakam Indo-American Cancer Hospital"
              />

            </div>


            {/* IMAGE 3 */}

            <div className="experience-photo">

              <img
                src={stall1_2}
                alt="M&Y Homemade Foods stall experience at Banjara Hills"
              />

            </div>

          </div>


          {/* DESCRIPTION */}

          <p className="experience-description">

            We had the opportunity to set up our homemade food stall
            at Basavatarakam Indo-American Cancer Hospital & Research
            Institute, Banjara Hills, where we showcased our homemade
            products and connected directly with visitors.

          </p>

        </div>


        {/* =================================================
            MODERN OFFICERS WELFARE ASSOCIATION
        ================================================= */}

        <div className="experience-location modern-officers-location">


          {/* LOCATION TITLE */}

          <div className="experience-location-header">

            <div className="experience-location-icon">
              <MapPin size={25} />
            </div>

            <div>

              <h3>
                Modern Officers Welfare Association
              </h3>

              <p>
                Secunderabad, Telangana
              </p>

            </div>

          </div>


          {/* GALLERY */}

          <div className="experience-gallery experience-gallery-three">


            {/* IMAGE 1 */}

            <div className="experience-photo">

              <img
                src={stall2}
                alt="M&Y Homemade Foods stall at Modern Officers Welfare Association, Secunderabad"
              />

              <span className="experience-photo-label">
                Homemade Food Stall
              </span>

            </div>


            {/* IMAGE 2 */}

            <div className="experience-photo">

              <img
                src={stall2_1}
                alt="M&Y Homemade Foods products at Modern Officers Welfare Association"
              />

            </div>


            {/* VIDEO */}

            <div className="experience-photo experience-video">

              <video
                src={stall2Video}
                autoPlay
                muted
                loop
                playsInline
                preload="auto"
                aria-label="M&Y Homemade Foods stall experience at Modern Officers Welfare Association, Secunderabad"
              />

              <span className="experience-photo-label">
                Stall Experience
              </span>

            </div>

          </div>


          {/* DESCRIPTION */}

          <p className="experience-description">

            We also had the opportunity to set up our stall at the
            Modern Officers Welfare Association in Secunderabad,
            showcasing a variety of homemade food and snack options
            and connecting with the local community.

          </p>

        </div>

      </section>


      {/* =====================================================
          MADE FOR BUSY LIFESTYLES
      ===================================================== */}

      <section className="about-values">


        <div className="values-heading">

          <span className="eyebrow">
            MADE FOR BUSY LIFESTYLES
          </span>

          <h2>
            A Better Choice When Hunger Strikes
          </h2>

          <p>
            We understand how difficult it can be to maintain healthy eating
            habits when you have a busy schedule.
          </p>

        </div>


        <div className="values-grid">

          {lifestylePoints.map((item) => (

            <div
              className="value-card"
              key={item.title}
            >

              <div className="value-icon">
                {item.icon}
              </div>

              <h3>
                {item.title}
              </h3>

              <p>
                Convenient homemade snacks that can fit into your everyday
                routine.
              </p>

            </div>

          ))}

        </div>


        <div className="about-busy-text">

          <p>
            Simply keep your favourite M&Y snacks in your bag, office, car or
            at home and enjoy them whenever you need a quick bite.
          </p>

        </div>

      </section>


      {/* =====================================================
          CHOOSE BETTER
      ===================================================== */}

      <section className="about-story">


        <div className="story-highlight">

          <div className="story-highlight-icon">
            <Sparkles size={42} />
          </div>

          <h3>
            Choose Better
          </h3>

          <p>
            When hunger strikes, having a wholesome homemade snack nearby can
            make choosing better a little easier.
          </p>

        </div>


        <div className="about-story-content">

          <span className="eyebrow">
            CHOOSE BETTER THAN JUNK
          </span>

          <h2>
            Keep a Better Choice Within Reach
          </h2>

          <p>
            We believe that when hunger strikes, you should have a better
            choice available.
          </p>

          <p>
            Instead of automatically reaching for chips, biscuits or other
            typical junk-food options, you can keep a wholesome homemade snack
            within reach.
          </p>

          <p>
            Our products are created to help make that better choice simple,
            convenient and delicious.
          </p>

        </div>

      </section>


      {/* =====================================================
          WHY CHOOSE US
      ===================================================== */}

      <section className="about-values">

        <div className="values-heading">

          <span className="eyebrow">
            WHY CHOOSE US
          </span>

          <h2>
            Healthy Choices. Homemade Goodness.
          </h2>

          <p>
            Simple ingredients, homemade preparation and convenient snack
            options for everyday life.
          </p>

        </div>


        <div className="values-grid">

          {values.map((value) => (

            <div
              className="value-card"
              key={value.title}
            >

              <div className="value-icon">
                {value.icon}
              </div>

              <h3>
                {value.title}
              </h3>

              <p>
                {value.description}
              </p>

            </div>

          ))}

        </div>

      </section>


      {/* =====================================================
          PHILOSOPHY
      ===================================================== */}

      <section className="about-promise">


        <div className="promise-icon">

          <Heart
            size={45}
            fill="currentColor"
          />

        </div>


        <div className="promise-content">

          <span className="eyebrow light">
            OUR PHILOSOPHY
          </span>

          <h2>
            Small Everyday Choices Matter
          </h2>

          <p>
            We strongly believe that prevention is better than cure. A healthy
            lifestyle starts with the small choices we make every day —
            including what we choose to eat when we are hungry.
          </p>

          <p>
            We cannot always control how busy our day becomes, but we can make
            better choices about the food we keep around us.
          </p>

          <p>
            That is the philosophy behind M&Y Homemade Foods.
          </p>

        </div>

      </section>


      {/* =====================================================
          OUR PROMISE
      ===================================================== */}

      <section className="about-story">


        <div className="about-story-content">

          <span className="eyebrow">
            OUR PROMISE
          </span>

          <h2>
            Making Healthy Eating Easier
          </h2>

          <p>
            At M&Y Homemade Foods, we want to make wholesome food a regular
            part of your everyday routine, not something you choose only when
            you have extra time.
          </p>


          <div className="about-promise-list">

            {promisePoints.map((point) => (

              <div
                className="about-promise-item"
                key={point}
              >

                <CheckCircle size={20} />

                <span>
                  {point}
                </span>

              </div>

            ))}

          </div>

        </div>


        <div className="story-highlight">

          <div className="story-highlight-icon">
            <Gift size={42} />
          </div>

          <h3>
            Our Promise
          </h3>

          <p>
            Quality ingredients, homemade preparation and wholesome snack
            options made for your everyday lifestyle.
          </p>

        </div>

      </section>


      {/* =====================================================
          CTA
      ===================================================== */}

      <section className="about-cta">

        <span className="eyebrow">
          M&Y HOMEMADE FOODS
        </span>

        <h2>
          A Better Choice for Everyday Snacking
        </h2>

        <p>
          Our journey began with one simple thought:
        </p>

        <p className="about-quote">
          “When you are hungry, you should have a better choice ready.”
        </p>

        <p>
          So, we created M&Y Homemade Foods to bring you homemade, wholesome
          snack options that you can easily include in your everyday lifestyle.
        </p>

        <h3 className="about-tagline">
          Eat Better. Snack Smarter. Make Nutrition a Daily Habit.
        </h3>


        <div className="about-cta-buttons">

          <Link
            to="/products"
            className="primary-btn"
          >
            Explore Products
            <ArrowRight size={19} />
          </Link>


          <Link
            to="/contact"
            className="secondary-btn"
          >
            Contact Us
          </Link>

        </div>

      </section>


    </div>
  );
}

export default About;
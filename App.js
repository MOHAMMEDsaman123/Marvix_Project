import React, { useState } from "react";
import "./style.css";
export default function App() {
  return (
    <div className="app-container">
      <div className="navbar">
        <div className="h2">MyBuilder</div>
        <div className="nav-links">
          <span>Post a Job</span>
          <span>Login</span>
          <span>Sign up as a tradesperson</span>
        </div>
      </div>

      <div className="hero">
        <div className="hero-content">
          <h1>The reliable way to hire a tradesperson</h1>
          <p>What is your job?</p>
          <div className="search-box">
            <input type="text" placeholder="For example: painting" />
            <button>→</button>
          </div>
        </div>
        <div className="image-container">
          <img src="./one.jpg" alt="Tradesperson at work" />
        </div>
      </div>
      <HowToHireSection />
      <ReliableWaySection />
      <PopularTrades />
      <ReviewsSection />
      <LinksFooter />
      <AdditionalLinks />
      <Footer />
    </div>
  );
}
function HowToHireSection() {
  return (
    <div className="how-to-section">
      <h2>How to hire the right tradesperson</h2>
      <div className="steps-container">
        <div className="step">
          <img src="./eigh.svg" alt="Step 1: Post your job for free" />
          <h3>STEP 1</h3>
          <p>Post your job for free</p>
        </div>
        <div className="step">
          <img src="./nine.svg" alt="Step 2: Tradespeople respond" />
          <h3>STEP 2</h3>
          <p>Tradespeople respond</p>
        </div>
        <div className="step">
          <img src="./ten.png" alt="Step 3: Review profiles and choose" />
          <h3>STEP 3</h3>
          <p>Review profiles and choose</p>
        </div>
      </div>
    </div>
  );
}

function ReliableWaySection() {
  return (
    <div className="reliable-way-section">
      <div className="reliable-way-container">
        <div className="reliable-way-text">
          <h2>Why MyBuilder is the reliable way</h2>
          <p>
            Hiring a tradesperson when you need one isn’t always easy. MyBuilder
            is the reliable way, helping you hire the right tradesperson for
            your job.
          </p>

          <div className="reliable-way-point">
            <div className="reliable-way-icon">
              <h4>The tradespeople you need</h4>
            </div>
            <p>
              Post your job for free to access tradespeople with the skills you
              need and get responses from those who want to do it. You choose
              who you want to chat with.
            </p>
          </div>

          <div className="reliable-way-point">
            <div className="reliable-way-icon">
              <h4>Genuine customer reviews</h4>
            </div>
            <p>
              Thanks to our robust feedback system, you can read genuine reviews
              from previous customers, allowing you to make an informed choice
              about who to hire.
            </p>
          </div>

          <div className="reliable-way-point">
            <div className="reliable-way-icon">
              <h4>You’re in control</h4>
            </div>
            <p>
              Review profiles, work history and feedback before making a
              decision about who to chat with. Only tradespeople you have chosen
              can contact you.
            </p>
          </div>
        </div>

        <div className="reliable-way-image">
          <img src="./two.jpg" alt="Why MyBuilder is reliable" />
        </div>
      </div>
    </div>
  );
}
function PopularTrades() {
  const services = [
    {
      title: "Painting & Decorating",
      description:
        "Thinking about giving your space a fresh, new look? Our guides will not only provide pricing in...",
      image: "./three.jpg",
      count: "45543 painters & decorators",
    },
    {
      title: "Plumbing",
      description:
        "Curious about the cost of plumbing services? Dive into our comprehensive guides to find pricing...",
      image: "./four.jpg",
      count: "29560 plumbers",
    },
    {
      title: "Gardening & Landscaping",
      description:
        "Dreaming of a garden that captivates and soothes? Our detailed guides will provide pricing info...",
      image: "./five.jpg",
      count: "22237 gardeners",
    },
  ];

  return (
    <div className="services-container">
      <h2>Popular Trades</h2>
      <div className="services-grid">
        {services.map((service, index) => (
          <div key={index} className="service-card">
            <img src={service.image} alt={service.title} />
            <h3>{service.title}</h3>
            <p>
              {service.description} <a href="#">Learn more</a>
            </p>
            <p className="service-count">{service.count} in The UK</p>
            <button className="view-all-btn">View all</button>
          </div>
        ))}
      </div>
    </div>
  );
}

function ReviewsSection() {
  const reviews = [
    {
      title: "Worktop replacement",
      rating: "★★★★★",
      content: "Best in the game!",
      author: "Edvinas Mickevicius",
    },
    {
      title: "Ridge tiles repair",
      rating: "★★★★★",
      content: "Excellent job, quick, tidy, reliable.",
      author: "Jones roofing",
    },
    {
      title: "Retile bathroom",
      rating: "★★★★★",
      content: "Lovely guy, kept me up to date with every step.",
      author: "V&Sh painting",
    },
    {
      title: "Wood panels fitting",
      rating: "★★★★★",
      content: "Ted did great work, very cautious and meticulous.",
      author: "Excess Joinery",
    },
  ];

  return (
    <div className="reviews-section">
      <div className="review-container">
        <div className="review-box">
          <h2>Millions of genuine reviews</h2>
          <p>Reviews on MyBuilder are written by customers like you.</p>
          <button
            style={{
              backgroundColor: "#6b21a8",
              color: "white",
              padding: "10px 20px",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer",
            }}
          >
            Post your job
          </button>
        </div>
        <div className="reviews-carousel">
          {reviews.map((review, index) => (
            <div key={index} className="review-card">
              <h3>{review.title}</h3>
              <p>{review.rating}</p>
              <p>"{review.content}"</p>
              <p>
                <strong>{review.author}</strong>
              </p>
            </div>
          ))}
        </div>
      </div>
      <div className="post-job-banner">
        <h2>Post your job now</h2>
      </div>
    </div>
  );
}

function LinksFooter() {
  return (
    <div className="links-footer">
      <div className="links-footer-container">
        <div className="links-footer-group">
          <h4>Get Started</h4>
          <a href="#">Post a job</a>
          <a href="#">How it works</a>
          <a href="#">Find trades</a>
          <a href="#">Customer helpdesk</a>
          <a href="#">Ask a tradesperson</a>
        </div>

        <div className="links-footer-group">
          <h4>For Tradespeople</h4>
          <a href="#">Register as tradesperson</a>
          <a href="#">Quality requirements</a>
          <a href="#">Reviews policy</a>
          <a href="#">Tradespeople helpdesk</a>
        </div>

        <div className="links-footer-group">
          <h4>Company</h4>
          <a href="#">About us</a>
          <a href="#">Press and media</a>
          <a href="#">Vacancies</a>
          <a href="#">Become a partner</a>
        </div>

        <div className="links-footer-group">
          <h4>Explore</h4>
          <a href="#">Trades</a>
          <a href="#">Services</a>
          <a href="#">Projects</a>
          <a href="#">Cities</a>
          <a href="#">Pricing guides</a>
        </div>
      </div>

      <div className="app-links">
        <img src="./six.png" alt="Download on the App Store" />
        <img src="./seven.jpg" alt="Get it on Google Play" />
      </div>

      <div className="footer-bottom">© 2008-2025 MyBuilder Limited</div>
    </div>
  );
}

function AdditionalLinks() {
  return (
    <div className="additional-links-section">
      <div className="links-container">
        <div className="links-group">
          <h4>Find tradespeople in your area</h4>
          <p>
            London | Manchester | Glasgow | Bristol | Birmingham | Nottingham |
            Leeds | Liverpool | Sheffield | Edinburgh | Leicester | Stockport |
            Newcastle Upon Tyne | Milton Keynes | Derby | Reading | Coventry |
            Stoke On Trent | Northampton | Cambridge | More cities +
          </p>
        </div>
        <div className="links-group">
          <h4>Our tradespeople's professions</h4>
          <p>
            Handymen | Painters and Decorators | Builders | Landscape Gardeners
            | Carpenters | Plasterers | Tilers | Flooring Fitters | Fencers |
            Bricklayers | Bathroom Fitters | Window Fitters | Kitchen Fitters |
            Fascias and Soffits Installers | Gas Engineers | Roofers | Fireplace
            Installers | More trades +
          </p>
        </div>
      </div>
    </div>
  );
}

function Footer() {
  return (
    <footer className="footer">
      © 2025 MyBuilder Clone. All rights reserved.
    </footer>
  );
}

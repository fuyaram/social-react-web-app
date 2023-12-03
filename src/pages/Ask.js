import React from 'react';
import '../pages/Ask.css'; 

const Ask = () => {
  return (
    <div className="ask-container">
      <div className="title-box">
        <h1>Special Offers 2023 diwali</h1>
      </div>
      <div className="offer-cards">
        {/* Render multiple offer pack cards */}
        <div className="offer-card">
          <img src="https://img.freepik.com/free-vector/gradient-creative-gamification-illustration_52683-79883.jpg?size=626&ext=jpg&ga=GA1.1.1552493246.1695719923&semt=ais" alt="Offer 1" />
          <h2>Master Digital Marketing:</h2>
          <p>"Unlock the secrets of digital marketing with our comprehensive course. Elevate your career and conquer the online business world!"</p>
          <div className="price">
            <span className="discounted-price">$19.99</span>
            <span className="original-price">$29.99</span>
          </div>
        </div>
        {/* Add more offer cards here */}
      </div>
    </div>
  );
};

export default Ask;

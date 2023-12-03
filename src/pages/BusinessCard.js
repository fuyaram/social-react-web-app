import React from "react";
import "../pages/BusinessCard.css";

const BusinessCard = ({ business }) => {
  const { banner, logo, name, title, services, pricePerHour, pricePerMinute } = business;

  return (
    <div className="business-card">
      <img className="banner" src={banner} alt="Banner" />
      <img className="logo" src={logo} alt="Logo" />
      <h2>{name}</h2>
      <p>{title}</p>
      <div className="services">
        {services.map((service, index) => (
          <span key={index} className="tag">
            #{service}
          </span>
        ))}
      </div>
      <p>Price: ${pricePerHour}/hour - ${pricePerMinute}/minute</p>
      <div className="buttons">
        <button className="chat-button">Chat</button>
        <button className="call-button">Call</button>
      </div>
    </div>
  );
};

export default BusinessCard;

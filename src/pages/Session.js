import React from "react";
import BusinessCard from "./BusinessCard";

const businesses = [
  // Sample business card data
  {
    banner: "https://media.istockphoto.com/id/1413837275/photo/abstract-it-design-background-with-a-tilted-triangular-grid-surface-and-python-computer.webp?b=1&s=170667a&w=0&k=20&c=niNjthAGYXZ9zF8a5d9klfKftbd4Ih_F0jWKP4N3DNM=",
    logo: "https://plus.unsplash.com/premium_photo-1675080431524-3e7c85323972?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bWFuJTIwZmFjZXxlbnwwfHwwfHx8MA%3D%3D",
    name: "devlopment Q&A",
    title: "marton",
    services: ["web devlopment", "dsa"],
    pricePerHour: 50,
    pricePerMinute: 1,
  },
  {
    banner: "https://plus.unsplash.com/premium_photo-1682140993556-f263e434000b?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8Y29kaW5nfGVufDB8fDB8fHww",
    logo: "https://plus.unsplash.com/premium_photo-1675080431524-3e7c85323972?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bWFuJTIwZmFjZXxlbnwwfHwwfHx8MA%3D%3D",
    name: "devlopment Q&A",
    title: "marton",
    services: ["web devlopment", "dsa"],
    pricePerHour: 50,
    pricePerMinute: 1,
  },
  {
    banner: "https://images.unsplash.com/photo-1503252947848-7338d3f92f31?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8Y29kaW5nfGVufDB8fDB8fHww",
    logo: "https://plus.unsplash.com/premium_photo-1675080431524-3e7c85323972?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bWFuJTIwZmFjZXxlbnwwfHwwfHx8MA%3D%3D",
    name: "devlopment Q&A",
    title: "marton",
    services: ["web devlopment", "dsa"],
    pricePerHour: 50,
    pricePerMinute: 1,
  },
  {
    banner: "https://plus.unsplash.com/premium_photo-1682140999442-e9e2a5f55be6?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGNvZGluZ3xlbnwwfHwwfHx8MA%3D%3D",
    logo: "https://plus.unsplash.com/premium_photo-1675080431524-3e7c85323972?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bWFuJTIwZmFjZXxlbnwwfHwwfHx8MA%3D%3D",
    name: "devlopment Q&A",
    title: "marton",
    services: ["web devlopment", "dsa"],
    pricePerHour: 50,
    pricePerMinute: 1,
  },
  {
    banner: "https://images.unsplash.com/photo-1562813733-b31f71025d54?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGNvZGluZ3xlbnwwfHwwfHx8MA%3D%3D",
    logo: "https://plus.unsplash.com/premium_photo-1675080431524-3e7c85323972?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bWFuJTIwZmFjZXxlbnwwfHwwfHx8MA%3D%3D",
    name: "devlopment Q&A",
    title: "marton",
    services: ["web devlopment", "dsa"],
    pricePerHour: 50,
    pricePerMinute: 1,
  },
  {
    banner: "https://media.istockphoto.com/id/1401980646/photo/3d-rendered-classic-sculpture-metaverse-avatar-with-network-of-low-poly-glowing-purple-lines.webp?b=1&s=170667a&w=0&k=20&c=nLf9fDcHVLZ9bPijP5QQrj0apVLdPXITVF6EAMqj1rg=",
    logo: "https://plus.unsplash.com/premium_photo-1675080431524-3e7c85323972?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bWFuJTIwZmFjZXxlbnwwfHwwfHx8MA%3D%3D",
    name: "devlopment Q&A",
    title: "marton",
    services: ["web devlopment", "dsa"],
    pricePerHour: 50,
    pricePerMinute: 1,
  },
  {
    banner: "https://media.istockphoto.com/id/1442990932/photo/computer-woman-programmer-and-man-training-for-coding-cyber-security-or-software-on-computer.webp?b=1&s=170667a&w=0&k=20&c=67D7gNk7D8DR_gP-fms2FrLlFF0qh1jYOgrPEDcfvrw=",
    logo: "https://plus.unsplash.com/premium_photo-1675080431524-3e7c85323972?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bWFuJTIwZmFjZXxlbnwwfHwwfHx8MA%3D%3D",
    name: "devlopment Q&A",
    title: "marton",
    services: ["web devlopment", "dsa"],
    pricePerHour: 50,
    pricePerMinute: 1,
  },
  
];

const Session = () => {
  return (
    <div className="session-page">
      {businesses.map((business, index) => (
        <BusinessCard key={index} business={business} />
      ))}
    </div>
  );
};

export default Session;

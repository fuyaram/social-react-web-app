import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../pages/Trending.css';
import { FaFire } from 'react-icons/fa';

// Function to generate star ratings
const renderStars = (rating) => {
  const stars = [];
  for (let i = 0; i < rating; i++) {
    stars.push(<span key={i}>★</span>);
  }
  return stars;
};

const posts = [
  {
    id: 1,
    user: {
      name: 'John Doe',
      username: 'john_doe900',
      avatar: 'https://plus.unsplash.com/premium_photo-1671656333460-793292581bc6?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8aHVtYW4lMjBmYWNlfGVufDB8fDB8fHww',
      rating: 5, // Rating out of 5
    },
    text: 'Explore India dynamic job market over two days, highlighting challenges, opportunities, and evolving trends in diverse sectors. Whats your experience?',
    image: 'https://images.pexels.com/photos/6457544/pexels-photo-6457544.jpeg?auto=compress&cs=tinysrgb&w=400', // URL of the image
    time: '2 hours ago',
  },
  {
    id: 2,
    user: {
      name: 'Jane Smith',
      username: 'jane_smith123',
      avatar: 'https://plus.unsplash.com/premium_photo-1671656333460-793292581bc6?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8aHVtYW4lMjBmYWNlfGVufDB8fDB8fHww',
      rating: 4, // Rating out of 5
    },
    text: 'Just had an amazing dinner at the new restaurant downtown! Highly recommended!',
    image: 'https://images.pexels.com/photos/6457544/pexels-photo-6457544.jpeg?auto=compress&cs=tinysrgb&w=400', // URL of the image
    time: '5 hours ago',
  },
  {
    id: 1,
    user: {
      name: 'John Doe',
      username: 'john_doe900',
      avatar: 'https://plus.unsplash.com/premium_photo-1671656333460-793292581bc6?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8aHVtYW4lMjBmYWNlfGVufDB8fDB8fHww',
      rating: 5, // Rating out of 5
    },
    text: 'Explore India dynamic job market over two days, highlighting challenges, opportunities, and evolving trends in diverse sectors. Whats your experience?',
    image: 'https://images.pexels.com/photos/6457544/pexels-photo-6457544.jpeg?auto=compress&cs=tinysrgb&w=400', // URL of the image
    time: '2 hours ago',
  },
  {
    id: 2,
    user: {
      name: 'Jane Smith',
      username: 'jane_smith123',
      avatar: 'https://plus.unsplash.com/premium_photo-1671656333460-793292581bc6?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8aHVtYW4lMjBmYWNlfGVufDB8fDB8fHww',
      rating: 4, // Rating out of 5
    },
    text: 'Just had an amazing dinner at the new restaurant downtown! Highly recommended!',
    image: 'https://images.pexels.com/photos/6457544/pexels-photo-6457544.jpeg?auto=compress&cs=tinysrgb&w=400', // URL of the image
    time: '5 hours ago',
  },
  {
    id: 1,
    user: {
      name: 'John Doe',
      username: 'john_doe900',
      avatar: 'https://plus.unsplash.com/premium_photo-1671656333460-793292581bc6?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8aHVtYW4lMjBmYWNlfGVufDB8fDB8fHww',
      rating: 5, // Rating out of 5
    },
    text: 'Explore India dynamic job market over two days, highlighting challenges, opportunities, and evolving trends in diverse sectors. Whats your experience?',
    image: 'https://images.pexels.com/photos/6457544/pexels-photo-6457544.jpeg?auto=compress&cs=tinysrgb&w=400', // URL of the image
    time: '2 hours ago',
  },
  {
    id: 2,
    user: {
      name: 'Jane Smith',
      username: 'jane_smith123',
      avatar: 'https://plus.unsplash.com/premium_photo-1671656333460-793292581bc6?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8aHVtYW4lMjBmYWNlfGVufDB8fDB8fHww',
      rating: 4, // Rating out of 5
    },
    text: 'Just had an amazing dinner at the new restaurant downtown! Highly recommended!',
    image: 'https://images.pexels.com/photos/6457544/pexels-photo-6457544.jpeg?auto=compress&cs=tinysrgb&w=400', // URL of the image
    time: '5 hours ago',
  },
  {
    id: 1,
    user: {
      name: 'John Doe',
      username: 'john_doe900',
      avatar: 'https://plus.unsplash.com/premium_photo-1671656333460-793292581bc6?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8aHVtYW4lMjBmYWNlfGVufDB8fDB8fHww',
      rating: 5, // Rating out of 5
    },
    text: 'Explore India dynamic job market over two days, highlighting challenges, opportunities, and evolving trends in diverse sectors. Whats your experience?',
    image: 'https://images.pexels.com/photos/6457544/pexels-photo-6457544.jpeg?auto=compress&cs=tinysrgb&w=400', // URL of the image
    time: '2 hours ago',
  },
  {
    id: 2,
    user: {
      name: 'Jane Smith',
      username: 'jane_smith123',
      avatar: 'https://plus.unsplash.com/premium_photo-1671656333460-793292581bc6?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8aHVtYW4lMjBmYWNlfGVufDB8fDB8fHww',
      rating: 4, // Rating out of 5
    },
    text: 'Just had an amazing dinner at the new restaurant downtown! Highly recommended!',
    image: 'https://images.pexels.com/photos/6457544/pexels-photo-6457544.jpeg?auto=compress&cs=tinysrgb&w=400', // URL of the image
    time: '5 hours ago',
  },
  {
    id: 1,
    user: {
      name: 'John Doe',
      username: 'john_doe900',
      avatar: 'https://plus.unsplash.com/premium_photo-1671656333460-793292581bc6?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8aHVtYW4lMjBmYWNlfGVufDB8fDB8fHww',
      rating: 5, // Rating out of 5
    },
    text: 'Explore India dynamic job market over two days, highlighting challenges, opportunities, and evolving trends in diverse sectors. Whats your experience?',
    image: 'https://images.pexels.com/photos/6457544/pexels-photo-6457544.jpeg?auto=compress&cs=tinysrgb&w=400', // URL of the image
    time: '2 hours ago',
  },
  {
    id: 2,
    user: {
      name: 'Jane Smith',
      username: 'jane_smith123',
      avatar: 'https://plus.unsplash.com/premium_photo-1671656333460-793292581bc6?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8aHVtYW4lMjBmYWNlfGVufDB8fDB8fHww',
      rating: 4, // Rating out of 5
    },
    text: 'Just had an amazing dinner at the new restaurant downtown! Highly recommended!',
    image: 'https://images.pexels.com/photos/6457544/pexels-photo-6457544.jpeg?auto=compress&cs=tinysrgb&w=400', // URL of the image
    time: '5 hours ago',
  },
  {
    id: 1,
    user: {
      name: 'John Doe',
      username: 'john_doe900',
      avatar: 'https://plus.unsplash.com/premium_photo-1671656333460-793292581bc6?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8aHVtYW4lMjBmYWNlfGVufDB8fDB8fHww',
      rating: 5, // Rating out of 5
    },
    text: 'Explore India dynamic job market over two days, highlighting challenges, opportunities, and evolving trends in diverse sectors. Whats your experience?',
    image: 'https://images.pexels.com/photos/6457544/pexels-photo-6457544.jpeg?auto=compress&cs=tinysrgb&w=400', // URL of the image
    time: '2 hours ago',
  },
  {
    id: 2,
    user: {
      name: 'Jane Smith',
      username: 'jane_smith123',
      avatar: 'https://plus.unsplash.com/premium_photo-1671656333460-793292581bc6?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8aHVtYW4lMjBmYWNlfGVufDB8fDB8fHww',
      rating: 4, // Rating out of 5
    },
    text: 'Just had an amazing dinner at the new restaurant downtown! Highly recommended!',
    image: 'https://images.pexels.com/photos/6457544/pexels-photo-6457544.jpeg?auto=compress&cs=tinysrgb&w=400', // URL of the image
    time: '5 hours ago',
  },
];

const Trending = () => {
  return (
    <div className="container">
      {posts.map((post) => (
        <div className="tweet-card" key={post.id}>
          <div className="user-info">
            <img src={post.user.avatar} alt="User Avatar" className="avatar" />
            <div className="user-details">
              <h5>
                {post.user.name} <FaFire style={{ color: 'red' }} />
              </h5>
              <span>@{post.user.username}</span>
              <div className="user-rating">{renderStars(post.user.rating)}</div>
            </div>
          </div>
          <p className="tweet-text">{post.text}</p>
          {post.image && <img src={post.image} alt="Post" className="tweet-image" />}
          <p className="post-time">{post.time}</p>
        </div>
      ))}
    </div>
  );
};

export default Trending;

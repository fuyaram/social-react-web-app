import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../pages/Propeers.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle, faStar } from '@fortawesome/free-solid-svg-icons';

const posts = [
  {
    id: 1,
    user: {
      name: 'John Doe',
      username: 'john_doe900',
      avatar: 'https://plus.unsplash.com/premium_photo-1671656333460-793292581bc6?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8aHVtYW4lMjBmYWNlfGVufDB8fDB8fHww',
      verified: true, // Add this property to indicate a verified user
      starred: true, // Add this property to indicate a starred user
    },
    text: 'Explore India dynamic job market over two days, highlighting challenges, opportunities, and evolving trends in diverse sectors. Whats your experience?',
    image: 'https://images.pexels.com/photos/6457544/pexels-photo-6457544.jpeg?auto=compress&cs=tinysrgb&w=400',
    time: '2 hours ago',
  },
  {
    id: 1,
    user: {
      name: 'John Doe',
      username: 'john_doe900',
      avatar: 'https://plus.unsplash.com/premium_photo-1671656333460-793292581bc6?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8aHVtYW4lMjBmYWNlfGVufDB8fDB8fHww',
      verified: true, // Add this property to indicate a verified user
      starred: true, // Add this property to indicate a starred user
    },
    text: 'Explore India dynamic job market over two days, highlighting challenges, opportunities, and evolving trends in diverse sectors. Whats your experience?',
    image: 'https://images.pexels.com/photos/6457544/pexels-photo-6457544.jpeg?auto=compress&cs=tinysrgb&w=400',
    time: '2 hours ago',
  },
  {
    id: 1,
    user: {
      name: 'John Doe',
      username: 'john_doe900',
      avatar: 'https://plus.unsplash.com/premium_photo-1671656333460-793292581bc6?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8aHVtYW4lMjBmYWNlfGVufDB8fDB8fHww',
      verified: true, // Add this property to indicate a verified user
      starred: true, // Add this property to indicate a starred user
    },
    text: 'Explore India dynamic job market over two days, highlighting challenges, opportunities, and evolving trends in diverse sectors. Whats your experience?',
    image: 'https://images.pexels.com/photos/6457544/pexels-photo-6457544.jpeg?auto=compress&cs=tinysrgb&w=400',
    time: '2 hours ago',
  },
  {
    id: 1,
    user: {
      name: 'John Doe',
      username: 'john_doe900',
      avatar: 'https://plus.unsplash.com/premium_photo-1671656333460-793292581bc6?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8aHVtYW4lMjBmYWNlfGVufDB8fDB8fHww',
      verified: true, // Add this property to indicate a verified user
      starred: true, // Add this property to indicate a starred user
    },
    text: 'Explore India dynamic job market over two days, highlighting challenges, opportunities, and evolving trends in diverse sectors. Whats your experience?',
    image: 'https://images.pexels.com/photos/6457544/pexels-photo-6457544.jpeg?auto=compress&cs=tinysrgb&w=400',
    time: '2 hours ago',
  },
  {
    id: 1,
    user: {
      name: 'John Doe',
      username: 'john_doe900',
      avatar: 'https://plus.unsplash.com/premium_photo-1671656333460-793292581bc6?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8aHVtYW4lMjBmYWNlfGVufDB8fDB8fHww',
      verified: true, // Add this property to indicate a verified user
      starred: true, // Add this property to indicate a starred user
    },
    text: 'Explore India dynamic job market over two days, highlighting challenges, opportunities, and evolving trends in diverse sectors. Whats your experience?',
    image: 'https://images.pexels.com/photos/6457544/pexels-photo-6457544.jpeg?auto=compress&cs=tinysrgb&w=400',
    time: '2 hours ago',
  },
  {
    id: 1,
    user: {
      name: 'John Doe',
      username: 'john_doe900',
      avatar: 'https://plus.unsplash.com/premium_photo-1671656333460-793292581bc6?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8aHVtYW4lMjBmYWNlfGVufDB8fDB8fHww',
      verified: true, // Add this property to indicate a verified user
      starred: true, // Add this property to indicate a starred user
    },
    text: 'Explore India dynamic job market over two days, highlighting challenges, opportunities, and evolving trends in diverse sectors. Whats your experience?',
    image: 'https://images.pexels.com/photos/6457544/pexels-photo-6457544.jpeg?auto=compress&cs=tinysrgb&w=400',
    time: '2 hours ago',
  },
  {
    id: 1,
    user: {
      name: 'John Doe',
      username: 'john_doe900',
      avatar: 'https://plus.unsplash.com/premium_photo-1671656333460-793292581bc6?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8aHVtYW4lMjBmYWNlfGVufDB8fDB8fHww',
      verified: true, // Add this property to indicate a verified user
      starred: true, // Add this property to indicate a starred user
    },
    text: 'Explore India dynamic job market over two days, highlighting challenges, opportunities, and evolving trends in diverse sectors. Whats your experience?',
    image: 'https://images.pexels.com/photos/6457544/pexels-photo-6457544.jpeg?auto=compress&cs=tinysrgb&w=400',
    time: '2 hours ago',
  },
  {
    id: 1,
    user: {
      name: 'John Doe',
      username: 'john_doe900',
      avatar: 'https://plus.unsplash.com/premium_photo-1671656333460-793292581bc6?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8aHVtYW4lMjBmYWNlfGVufDB8fDB8fHww',
      verified: true, // Add this property to indicate a verified user
      starred: true, // Add this property to indicate a starred user
    },
    text: 'Explore India dynamic job market over two days, highlighting challenges, opportunities, and evolving trends in diverse sectors. Whats your experience?',
    image: 'https://images.pexels.com/photos/6457544/pexels-photo-6457544.jpeg?auto=compress&cs=tinysrgb&w=400',
    time: '2 hours ago',
  },
  
];

const Propeers = () => {
  return (
    <div className="container">
      {posts.map((post) => (
        <div className="tweet-card" key={post.id}>
          <div className="user-info">
            <img src={post.user.avatar} alt="User Avatar" className="avatar" />
            <div className="user-details">
              <h5>
                {post.user.name}
                {post.user.verified && <FontAwesomeIcon icon={faCheckCircle} className="verified-icon" />}
                {post.user.starred && <FontAwesomeIcon icon={faStar} className="star-icon" />}
              </h5>
              <span>@{post.user.username}</span>
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

export default Propeers;

import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Home.css';
import ImageCarousel from './pages/ImageCarousel';
const posts = [
  {
    id: 1,
    user: {
      name: 'John Doe',
      username: 'john_doe900',
      badges: ['fas fa-certificate', 'fas fa-star'],
      avatar: 'https://plus.unsplash.com/premium_photo-1671656333460-793292581bc6?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8aHVtYW4lMjBmYWNlfGVufDB8fDB8fHww',
    },
    text: 'Explore India dynamic job market over two days, highlighting challenges, opportunities, and evolving trends in diverse sectors. Whats your experience?',
    image: 'https://images.pexels.com/photos/6457544/pexels-photo-6457544.jpeg?auto=compress&cs=tinysrgb&w=400', // URL of the image
    time: '2 hours ago',
  },
  {
    id: 1,
    user: {
      name: 'John Doe',
      username: 'john_doe900',
      badges: ['fas fa-certificate', 'fas fa-star'],
      avatar: 'https://plus.unsplash.com/premium_photo-1671656333460-793292581bc6?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8aHVtYW4lMjBmYWNlfGVufDB8fDB8fHww',
    },
    text: 'Explore India dynamic job market over two days, highlighting challenges, opportunities, and evolving trends in diverse sectors. Whats your experience?',
    image: 'https://images.pexels.com/photos/6457544/pexels-photo-6457544.jpeg?auto=compress&cs=tinysrgb&w=400', // URL of the image
    time: '2 hours ago',
  },
  {
    id: 1,
    user: {
      name: 'John Doe',
      username: 'john_doe900',
      badges: ['fas fa-certificate', 'fas fa-star'],
      avatar: 'https://plus.unsplash.com/premium_photo-1671656333460-793292581bc6?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8aHVtYW4lMjBmYWNlfGVufDB8fDB8fHww',
    },
    text: 'Explore India dynamic job market over two days, highlighting challenges, opportunities, and evolving trends in diverse sectors. Whats your experience?',
    image: 'https://images.pexels.com/photos/6457544/pexels-photo-6457544.jpeg?auto=compress&cs=tinysrgb&w=400', // URL of the image
    time: '2 hours ago',
  },
  {
    id: 1,
    user: {
      name: 'John Doe',
      username: 'john_doe900',
      badges: ['fas fa-certificate', 'fas fa-star'],
      avatar: 'https://plus.unsplash.com/premium_photo-1671656333460-793292581bc6?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8aHVtYW4lMjBmYWNlfGVufDB8fDB8fHww',
    },
    text: 'Explore India dynamic job market over two days, highlighting challenges, opportunities, and evolving trends in diverse sectors. Whats your experience?',
    image: 'https://images.pexels.com/photos/6457544/pexels-photo-6457544.jpeg?auto=compress&cs=tinysrgb&w=400', // URL of the image
    time: '2 hours ago',
  },
  {
    id: 1,
    user: {
      name: 'John Doe',
      username: 'john_doe900',
      badges: ['fas fa-certificate', 'fas fa-star'],
      avatar: 'https://plus.unsplash.com/premium_photo-1671656333460-793292581bc6?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8aHVtYW4lMjBmYWNlfGVufDB8fDB8fHww',
    },
    text: 'Explore India dynamic job market over two days, highlighting challenges, opportunities, and evolving trends in diverse sectors. Whats your experience?',
    image: 'https://images.pexels.com/photos/6457544/pexels-photo-6457544.jpeg?auto=compress&cs=tinysrgb&w=400', // URL of the image
    time: '2 hours ago',
  },
  {
    id: 1,
    user: {
      name: 'John Doe',
      username: 'john_doe900',
      badges: ['fas fa-certificate', 'fas fa-star'],
      avatar: 'https://plus.unsplash.com/premium_photo-1671656333460-793292581bc6?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8aHVtYW4lMjBmYWNlfGVufDB8fDB8fHww',
    },
    text: 'Explore India dynamic job market over two days, highlighting challenges, opportunities, and evolving trends in diverse sectors. Whats your experience?',
    image: 'https://images.pexels.com/photos/6457544/pexels-photo-6457544.jpeg?auto=compress&cs=tinysrgb&w=400', // URL of the image
    time: '2 hours ago',
  },
  {
    id: 1,
    user: {
      name: 'John Doe',
      username: 'john_doe900',
      badges: ['fas fa-certificate', 'fas fa-star'],
      avatar: 'https://plus.unsplash.com/premium_photo-1671656333460-793292581bc6?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8aHVtYW4lMjBmYWNlfGVufDB8fDB8fHww',
    },
    text: 'Explore India dynamic job market over two days, highlighting challenges, opportunities, and evolving trends in diverse sectors. Whats your experience?',
    image: 'https://images.pexels.com/photos/6457544/pexels-photo-6457544.jpeg?auto=compress&cs=tinysrgb&w=400', // URL of the image
    time: '2 hours ago',
  },
  {
    id: 1,
    user: {
      name: 'John Doe',
      username: 'john_doe900',
      badges: ['fas fa-certificate', 'fas fa-star'],
      avatar: 'https://plus.unsplash.com/premium_photo-1671656333460-793292581bc6?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8aHVtYW4lMjBmYWNlfGVufDB8fDB8fHww',
    },
    text: 'Explore India dynamic job market over two days, highlighting challenges, opportunities, and evolving trends in diverse sectors. Whats your experience?',
    image: 'https://images.pexels.com/photos/6457544/pexels-photo-6457544.jpeg?auto=compress&cs=tinysrgb&w=400', // URL of the image
    time: '2 hours ago',
  },
  {
    id: 1,
    user: {
      name: 'John Doe',
      username: 'john_doe900',
      badges: ['fas fa-certificate', 'fas fa-star'],
      avatar: 'https://plus.unsplash.com/premium_photo-1671656333460-793292581bc6?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8aHVtYW4lMjBmYWNlfGVufDB8fDB8fHww',
    },
    text: 'Explore India dynamic job market over two days, highlighting challenges, opportunities, and evolving trends in diverse sectors. Whats your experience?',
    image: 'https://images.pexels.com/photos/6457544/pexels-photo-6457544.jpeg?auto=compress&cs=tinysrgb&w=400', // URL of the image
    time: '2 hours ago',
  },
  {
    id: 1,
    user: {
      name: 'John Doe',
      username: 'john_doe900',
      badges: ['fas fa-certificate', 'fas fa-star'],
      avatar: 'https://plus.unsplash.com/premium_photo-1671656333460-793292581bc6?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8aHVtYW4lMjBmYWNlfGVufDB8fDB8fHww',
    },
    text: 'Explore India dynamic job market over two days, highlighting challenges, opportunities, and evolving trends in diverse sectors. Whats your experience?',
    image: 'https://images.pexels.com/photos/6457544/pexels-photo-6457544.jpeg?auto=compress&cs=tinysrgb&w=400', // URL of the image
    time: '2 hours ago',
  },
  {
    id: 1,
    user: {
      name: 'John Doe',
      username: 'john_doe900',
      badges: ['fas fa-certificate', 'fas fa-star'],
      avatar: 'https://plus.unsplash.com/premium_photo-1671656333460-793292581bc6?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8aHVtYW4lMjBmYWNlfGVufDB8fDB8fHww',
    },
    text: 'Explore India dynamic job market over two days, highlighting challenges, opportunities, and evolving trends in diverse sectors. Whats your experience?',
    image: 'https://images.pexels.com/photos/6457544/pexels-photo-6457544.jpeg?auto=compress&cs=tinysrgb&w=400', // URL of the image
    time: '2 hours ago',
  },
  {
    id: 1,
    user: {
      name: 'John Doe',
      username: 'john_doe900',
      badges: ['fas fa-certificate', 'fas fa-star'],
      avatar: 'https://plus.unsplash.com/premium_photo-1671656333460-793292581bc6?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8aHVtYW4lMjBmYWNlfGVufDB8fDB8fHww',
    },
    text: 'Explore India dynamic job market over two days, highlighting challenges, opportunities, and evolving trends in diverse sectors. Whats your experience?',
    image: 'https://images.pexels.com/photos/6457544/pexels-photo-6457544.jpeg?auto=compress&cs=tinysrgb&w=400', // URL of the image
    time: '2 hours ago',
  },
  {
    id: 1,
    user: {
      name: 'John Doe',
      username: 'john_doe900',
      badges: ['fas fa-certificate', 'fas fa-star'],
      avatar: 'https://plus.unsplash.com/premium_photo-1671656333460-793292581bc6?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8aHVtYW4lMjBmYWNlfGVufDB8fDB8fHww',
    },
    text: 'Explore India dynamic job market over two days, highlighting challenges, opportunities, and evolving trends in diverse sectors. Whats your experience?',
    image: 'https://images.pexels.com/photos/6457544/pexels-photo-6457544.jpeg?auto=compress&cs=tinysrgb&w=400', // URL of the image
    time: '2 hours ago',
  },
];

const Home = () => {
  return (
   <>
   
   <ImageCarousel />
   <div className="container">
      {posts.map((post) => (
        <div className="tweet-card" key={post.id}>
          <div className="user-info">
            <img src={post.user.avatar} alt="User Avatar" className="avatar" />
            <div className="user-details">
              <h5>
                {post.user.name}{' '}
                {post.user.badges.map((badge, index) => (
                  <i key={index} className={badge}></i>
                ))}
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
   
   
   
   
   </>
  );
};

export default Home;

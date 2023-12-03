import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../pages/Post.css';

const Post = () => {
  const [tweetText, setTweetText] = useState('');
  const [tweetImage, setTweetImage] = useState('');
  const [posts, setPosts] = useState([]);

  const handleTextChange = (e) => {
    setTweetText(e.target.value);
  };

  const handleImageChange = (e) => {
    setTweetImage(URL.createObjectURL(e.target.files[0]));
  };

  const handleTweetSubmit = (e) => {
    e.preventDefault();
    const newPost = {
      id: posts.length + 1,
      user: {
        name: 'finsh',
        username: 'ohooh-nmm',
        avatar: 'https://i.pinimg.com/236x/43/30/6f/43306f7959ce1126715351a9c33d8d7f.jpg',
      },
      text: tweetText,
      image: tweetImage,
      time: 'just now',
    };
    setPosts([newPost, ...posts]);
    setTweetText('');
    setTweetImage('');
  };

  return (
    <div className="container">
      {/* Tweet Form */}
      <form className="mb-3" onSubmit={handleTweetSubmit}>
        <div className="form-group">
          <textarea
            className="form-control"
            rows="3"
            placeholder="What's happening?"
            value={tweetText}
            onChange={handleTextChange}
            required
          ></textarea>
        </div>
        <div className="form-group">
          <input type="file" className="form-control-file" onChange={handleImageChange} />
        </div>
        <button type="submit" className="btn btn-primary">
          Tweet
        </button>
      </form>

      {/* Display Tweets */}
      {posts.map((post) => (
        <div className="tweet-card" key={post.id}>
          <div className="user-info">
            <img src={post.user.avatar} alt="User Avatar" className="avatar" />
            <div className="user-details">
              <h5>{post.user.name}</h5>
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

export default Post;

import React from 'react';
import '../pages/Posts.css'; // Add CSS for styling

const images = [
  { title: '"A leading multinational corporation with sustained growth and global expansion, poised for continued success in a dynamic corporate landscape."', url: 'https://images.pexels.com/photos/4385547/pexels-photo-4385547.jpeg?auto=compress&cs=tinysrgb&w=600' },
  { title: '"A leading multinational corporation with sustained growth and global expansion, poised for continued success in a dynamic corporate landscape."', url: 'https://images.pexels.com/photos/6804595/pexels-photo-6804595.jpeg?auto=compress&cs=tinysrgb&w=600' },
];

const Posts= () => {
  return (
    <div className="gallery">
      {images.map((image, index) => (
        <div key={index} className="gallery-item">
          <img src={image.url} alt={image.title} />
          <h3>{image.title}</h3>
        </div>
      ))}
    </div>
  );
};

export default Posts;

import React from 'react';
import { Link } from 'react-router-dom';
import './Profile.css';

const Profile = ({ bannerUrl, profilePictureUrl }) => {
  return (
    <div className="profile-container">
      <div className="profile-banner" style={{ backgroundImage: `url(${bannerUrl})` }}></div>
      <div className="profile-content">
        <div className="profile-header">
          <div className="profile-picture" style={{ backgroundImage: `url(${profilePictureUrl})` }}></div>
          <div className="profile-info">
            <h1>parik jain</h1>
            <p>@parik_jain</p>
            <p>the founder of ProPeers.</p>
            <div className="social-links">
              <a href="#user-social-media-link">portfolio</a>
            </div>
          </div>
        </div>
        <div className="profile-menu">
          <Link to="/posts">Posts</Link>
          <Link to="/photos">Photos</Link>
          <Link to="/videos">Videos</Link>
        </div>
        <div className="profile-content-main">
          {/* Content (posts, photos, videos) goes here */}
        </div>
      </div>
    </div>
  );
};

const UserProfilePage = () => {
  // URLs for the banner and profile picture images
  const bannerUrl = 'https://images.unsplash.com/photo-1458819714733-e5ab3d536722?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGl0JTIwYmFubmVyJTIwd2hpdGUlMjBwbmd8ZW58MHx8MHx8fDA%3D';
  const profilePictureUrl = 'https://media.licdn.com/dms/image/D4D22AQG_MUyxkXe1Gw/feedshare-shrink_800/0/1691754858620?e=1700697600&v=beta&t=UJ2DdywcKS_4mXTY0IOlZ4IORXOG8KblKSEmqAHXors';

  return (
    <div>
      <Profile bannerUrl={bannerUrl} profilePictureUrl={profilePictureUrl} />
    </div>
  );
};

export default UserProfilePage;

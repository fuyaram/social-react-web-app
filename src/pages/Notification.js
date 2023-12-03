import React from "react";
import "../pages/Notification.css";

const notificationsData = [
  {
    id: 1,
    userId: "user123",
    message: "You have a new message.",
    time: "10:30 AM",
    userLogo: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fG1hbiUyMGZhY2V8ZW58MHx8MHx8fDA%3D",
  },
  {
    id: 2,
    userId: "user456",
    message: "New friend request.",
    time: "11:45 AM",
    userLogo: "https://media.istockphoto.com/id/1278978817/photo/portrait-of-happy-mature-man-smiling.webp?b=1&s=170667a&w=0&k=20&c=-G50QM8y40HoN7k6lh1TL3ZFxASPYpIs_DJxo5FkEK0=",
  },
  {
    id: 1,
    userId: "user123",
    message: "You have a new message.",
    time: "10:30 AM",
    userLogo: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fG1hbiUyMGZhY2V8ZW58MHx8MHx8fDA%3D",
  },
  {
    id: 2,
    userId: "user456",
    message: "New friend request.",
    time: "11:45 AM",
    userLogo: "https://media.istockphoto.com/id/1278978817/photo/portrait-of-happy-mature-man-smiling.webp?b=1&s=170667a&w=0&k=20&c=-G50QM8y40HoN7k6lh1TL3ZFxASPYpIs_DJxo5FkEK0=",
  },
  {
    id: 1,
    userId: "user123",
    message: "You have a new message.",
    time: "10:30 AM",
    userLogo: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fG1hbiUyMGZhY2V8ZW58MHx8MHx8fDA%3D",
  },
  {
    id: 2,
    userId: "user456",
    message: "New friend request.",
    time: "11:45 AM",
    userLogo: "https://media.istockphoto.com/id/1278978817/photo/portrait-of-happy-mature-man-smiling.webp?b=1&s=170667a&w=0&k=20&c=-G50QM8y40HoN7k6lh1TL3ZFxASPYpIs_DJxo5FkEK0=",
  },
  {
    id: 1,
    userId: "user123",
    message: "You have a new message.",
    time: "10:30 AM",
    userLogo: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fG1hbiUyMGZhY2V8ZW58MHx8MHx8fDA%3D",
  },
  {
    id: 2,
    userId: "user456",
    message: "New friend request.",
    time: "11:45 AM",
    userLogo: "https://media.istockphoto.com/id/1278978817/photo/portrait-of-happy-mature-man-smiling.webp?b=1&s=170667a&w=0&k=20&c=-G50QM8y40HoN7k6lh1TL3ZFxASPYpIs_DJxo5FkEK0=",
  },
  {
    id: 1,
    userId: "user123",
    message: "You have a new message.",
    time: "10:30 AM",
    userLogo: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fG1hbiUyMGZhY2V8ZW58MHx8MHx8fDA%3D",
  },
  {
    id: 2,
    userId: "user456",
    message: "New friend request.",
    time: "11:45 AM",
    userLogo: "https://media.istockphoto.com/id/1278978817/photo/portrait-of-happy-mature-man-smiling.webp?b=1&s=170667a&w=0&k=20&c=-G50QM8y40HoN7k6lh1TL3ZFxASPYpIs_DJxo5FkEK0=",
  },
  {
    id: 1,
    userId: "user123",
    message: "You have a new message.",
    time: "10:30 AM",
    userLogo: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fG1hbiUyMGZhY2V8ZW58MHx8MHx8fDA%3D",
  },
  {
    id: 2,
    userId: "user456",
    message: "New friend request.",
    time: "11:45 AM",
    userLogo: "https://media.istockphoto.com/id/1278978817/photo/portrait-of-happy-mature-man-smiling.webp?b=1&s=170667a&w=0&k=20&c=-G50QM8y40HoN7k6lh1TL3ZFxASPYpIs_DJxo5FkEK0=",
  },
  {
    id: 1,
    userId: "user123",
    message: "You have a new message.",
    time: "10:30 AM",
    userLogo: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fG1hbiUyMGZhY2V8ZW58MHx8MHx8fDA%3D",
  },
  {
    id: 2,
    userId: "user456",
    message: "New friend request.",
    time: "11:45 AM",
    userLogo: "https://media.istockphoto.com/id/1278978817/photo/portrait-of-happy-mature-man-smiling.webp?b=1&s=170667a&w=0&k=20&c=-G50QM8y40HoN7k6lh1TL3ZFxASPYpIs_DJxo5FkEK0=",
  },
  {
    id: 1,
    userId: "user123",
    message: "You have a new message.",
    time: "10:30 AM",
    userLogo: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fG1hbiUyMGZhY2V8ZW58MHx8MHx8fDA%3D",
  },
  {
    id: 2,
    userId: "user456",
    message: "New friend request.",
    time: "11:45 AM",
    userLogo: "https://media.istockphoto.com/id/1278978817/photo/portrait-of-happy-mature-man-smiling.webp?b=1&s=170667a&w=0&k=20&c=-G50QM8y40HoN7k6lh1TL3ZFxASPYpIs_DJxo5FkEK0=",
  },
  {
    id: 1,
    userId: "user123",
    message: "You have a new message.",
    time: "10:30 AM",
    userLogo: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fG1hbiUyMGZhY2V8ZW58MHx8MHx8fDA%3D",
  },
  {
    id: 2,
    userId: "user456",
    message: "New friend request.",
    time: "11:45 AM",
    userLogo: "https://media.istockphoto.com/id/1278978817/photo/portrait-of-happy-mature-man-smiling.webp?b=1&s=170667a&w=0&k=20&c=-G50QM8y40HoN7k6lh1TL3ZFxASPYpIs_DJxo5FkEK0=",
  },
  {
    id: 1,
    userId: "user123",
    message: "You have a new message.",
    time: "10:30 AM",
    userLogo: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fG1hbiUyMGZhY2V8ZW58MHx8MHx8fDA%3D",
  },
  {
    id: 2,
    userId: "user456",
    message: "New friend request.",
    time: "11:45 AM",
    userLogo: "https://media.istockphoto.com/id/1278978817/photo/portrait-of-happy-mature-man-smiling.webp?b=1&s=170667a&w=0&k=20&c=-G50QM8y40HoN7k6lh1TL3ZFxASPYpIs_DJxo5FkEK0=",
  },
  {
    id: 1,
    userId: "user123",
    message: "You have a new message.",
    time: "10:30 AM",
    userLogo: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fG1hbiUyMGZhY2V8ZW58MHx8MHx8fDA%3D",
  },
  {
    id: 2,
    userId: "user456",
    message: "New friend request.",
    time: "11:45 AM",
    userLogo: "https://media.istockphoto.com/id/1278978817/photo/portrait-of-happy-mature-man-smiling.webp?b=1&s=170667a&w=0&k=20&c=-G50QM8y40HoN7k6lh1TL3ZFxASPYpIs_DJxo5FkEK0=",
  },
  {
    id: 1,
    userId: "user123",
    message: "You have a new message.",
    time: "10:30 AM",
    userLogo: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fG1hbiUyMGZhY2V8ZW58MHx8MHx8fDA%3D",
  },
  {
    id: 2,
    userId: "user456",
    message: "New friend request.",
    time: "11:45 AM",
    userLogo: "https://media.istockphoto.com/id/1278978817/photo/portrait-of-happy-mature-man-smiling.webp?b=1&s=170667a&w=0&k=20&c=-G50QM8y40HoN7k6lh1TL3ZFxASPYpIs_DJxo5FkEK0=",
  },
];

const Notification = () => {
  return (
    <div className="notifications-container">
      {notificationsData.map((notification) => (
        <div className="notification-item" key={notification.id}>
          <img
            className="user-logo"
            src={notification.userLogo}
            alt={`Logo of ${notification.userId}`}
          />
          <div className="notification-content">
            <span className="user-id">{notification.userId}</span>
            <span className="message">{notification.message}</span>
            <span className="time">{notification.time}</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Notification;

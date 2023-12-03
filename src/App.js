import React from 'react';
import './App.css';
import { Routes, Route} from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import Home from './Home';
import Ask from './pages/Ask';
import Notification from './pages/Notification';
import Profile from './pages/Profile';
import Propeers from './pages/Propeers';
import Session from './pages/Session';
import Trending from './pages/Trending';
import Sms from './pages/Sms';
import All from './pages/All';
import Post from './pages/Post';
import Videos from './pages/Videos';
import Photos from './pages/Photos';
import Posts from './pages/Posts';

function App() {
  return (
    <>
    <Navbar />
    <Routes>
      <Route exact path='/' element={<Home />}></Route>
      <Route exact path='/videos' element={<Videos />}></Route>
      <Route exact path='/photos' element={<Photos />}></Route>
      <Route exact path='/posts' element={<Posts />}></Route>
      <Route path='/post' element={<Post />}></Route>
      <Route path='/all' element={<All />}></Route>
      <Route path='/sms' element={<Sms />}></Route>
      <Route path='/Ask' element={<Ask />}></Route>
      <Route path='/Notification' element={<Notification />}></Route>
      <Route path='/profile' element={<Profile />}></Route>
      <Route path='/propeers' element={<Propeers />}></Route>
      <Route path='/session' element={<Session />}></Route>
      <Route path='/trending' element={<Trending />}></Route>
      </Routes>
    <Footer />
    </>
  );
}

export default App;

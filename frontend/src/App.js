import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

import Home from './components/Home';
import BlogList from './components/BlogList';
import BlogPage from './components/BlogPage'; 
import VideoList from './components/VideoList';
import VideoPage from './components/VideoPage'; 
import AboutUs from './components/AboutUs';
import ContactUs from './components/ContactUs';

import Header from './components/Header';
import Footer from './components/Footer';

import Chatbot from './components/Chatbot';
import './styles/Chatbot.css';
import config from './chatbot/config';

import MessageParser from './chatbot/MessageParser';
import ActionProvider from './chatbot/ActionProvider';

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/blog" element={<BlogList />} />
          <Route path="/blog/:id" element={<BlogPage />} />
          <Route path="/video" element={<VideoList />} />
          <Route path="/video/:id" element={<VideoPage />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/contactus" element={<ContactUs />} />
        </Routes>
        <div className="chatbot-container">
          <Chatbot
            config={config}
            messageParser={MessageParser}
            actionProvider={ActionProvider}
          />
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

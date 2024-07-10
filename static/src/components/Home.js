import React from 'react';
import Hero from './Hero';
import BlogList from './BlogList';
import VideoList from './VideoList';
import CategoryList from './CategoryList';

function Home() {
  return (
    <div>
      <Hero />
      <CategoryList />
      <BlogList limit={3} />
      <VideoList limit={3} />
    </div>
  );
}

export default Home;

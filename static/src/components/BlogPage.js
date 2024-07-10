import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getBlogById, getBlogsByCategory } from '../services/api';
import BlogHeader from './BlogHeader';
import BlogContent from './BlogContent';
import Sidebar from './Sidebar';
import styled from 'styled-components';

const Section = styled.section`
  padding: 50px 0;
`;

const Row = styled.div`
  display: flex;
  gap: 20px; 
`;

const BlogPage = () => {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);
  const [relatedPosts, setRelatedPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const blogData = await getBlogById(id);
        setBlog(blogData);

        const allBlogs = await getBlogsByCategory(blogData.category.id);
        const related = allBlogs.filter(b => b.id !== blogData.id).slice(0, 4);
        setRelatedPosts(related);
      } catch (error) {
        console.error('Error fetching blog:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchBlog();
  }, [id]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!blog) {
    return <div>Blog not found</div>;
  }

  return (
    <div>
      <BlogHeader breadcrumbs={[
        { label: 'ዋና ገፅ', link: '/' },
        { label: 'የግብርና ትምርት በጽሑፍ', link: '/blog' },
        { label: `የግብርና ትምርት በጽሑፍ - ${blog.category.name}`, link: `/blog/category/${blog.category.id}` },
        { label: blog.title, link: `/blog/${blog.id}` }
      ]} />
      <Section className="ftco-section ftco-no-pt ftco-no-pb">
        <div className="container">
          <Row>
            <BlogContent content={blog} />
            <Sidebar relatedPosts={relatedPosts} />
          </Row>
        </div>
      </Section>
    </div>
  );
};

export default BlogPage;

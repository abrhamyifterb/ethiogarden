import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { getBlogs } from '../services/api';
import BlogEntry from './BlogEntry';
import Pagination from './Pagination'; 

const BlogListContainer = styled.div`
  padding: 50px 0; 
`;

const HeadingSection = styled.div`
  margin-top: 75px; 
  text-align: center;
  padding-bottom: 20px;

  .subheading {
    font-size: 1.2em;
    color: #6c757d;
    margin-bottom: 10px;
  }

  h3 {
    font-size: 2.5em;
    font-weight: bold;
    margin-bottom: 20px;
    color: #343a40;
  }
`;

function BlogList({ limit = Infinity }) {
  const [blogs, setBlogs] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const blogsPerPage = 6; 

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await getBlogs();
        setBlogs(response.slice(0, limit));
      } catch (error) {
        console.error('Error fetching blogs:', error);
      }
    };

    fetchBlogs();
  }, [limit]);

  const indexOfLastBlog = currentPage * blogsPerPage;
  const indexOfFirstBlog = indexOfLastBlog - blogsPerPage;
  const currentBlogs = blogs.slice(indexOfFirstBlog, indexOfLastBlog);

  const totalPages = Math.ceil(blogs.length / blogsPerPage);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <BlogListContainer className="container" >
      <div className="row justify-content-center pb-4">
        <HeadingSection className="col-md-12 heading-section text-center ftco-animate">
          <span className="subheading"></span>
          <h3 className="mb-4">የጽሑፍ ጋርደኒንግ</h3>
        </HeadingSection>
      </div>
      <div className="row d-flex">
        {currentBlogs.map(blog => (
          <BlogEntry key={blog.id} blog={blog} />
        ))}
      </div>
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        paginate={paginate}
      />
    </BlogListContainer>
  );
}

export default BlogList;

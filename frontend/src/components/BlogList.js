import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import { getBlogs, getBlogsByCategory } from '../services/api';
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

const NoDataMessage = styled.div`
  text-align: center;
  margin-top: 50px;
  color: #777;
  font-size: 1.5em;
`;

function BlogList({ limit = Infinity }) {
  const { id: categoryId } = useParams(); 
  const [blogs, setBlogs] = useState([]);
  const [blogCategoryName, setblogCategoryName] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const blogsPerPage = 6; 

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        let response;
        if (categoryId) {
          response = await getBlogsByCategory(categoryId);
          setblogCategoryName(response[0].category.name)
        } else {
          response = await getBlogs();
          setblogCategoryName("");
        }
        setBlogs(response.slice(0, limit));
      } catch (error) {
        console.error('Error fetching blogs:', error);
      }
    };

    fetchBlogs();
  }, [limit, categoryId]);

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
          <h3 className="mb-4">የግብርና ትምርት በጽሑፍ {blogCategoryName ? "-" :""} {blogCategoryName}</h3>
        </HeadingSection>
      </div>
      <div className="row d-flex">
        {currentBlogs.length === 0 ? (
          <NoDataMessage>ምንም ትምህርታዊ ብሎጎች አልተገኙም - በቅርብ ቀን</NoDataMessage>
        ) : (
          currentBlogs.map(blog => (
            <BlogEntry key={blog.id} blog={blog} />
          ))
        )}
      </div>
      {currentBlogs.length > 0 && (
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          paginate={paginate}
        />
      )}
    </BlogListContainer>
  );
}

export default BlogList;
import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const SidebarItemContainer = styled.div`
  margin-bottom: 20px;
  padding: 15px;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0,0,0,0.1);
  display: flex;
  align-items: center;

  .sidebar-item-image {
    width: 60px;
    height: 60px;
    border-radius: 10px;
    margin-right: 15px;
    background-size: cover;
    background-position: center;
  }

  .sidebar-item-content {
    display: flex;
    flex-direction: column;
  }

  .sidebar-item-title {
    font-weight: bold;
    margin-bottom: 5px;
    font-size: 14px;
  }

  .sidebar-item-meta {
    font-size: 12px;
    color: #777;
    margin-bottom: 5px;
  }

  .sidebar-item-excerpt {
    font-size: 12px;
    line-height: 1.4;
  }

  a {
    color: #66b032;
    text-decoration: none;
    &:hover {
      text-decoration: underline;
    }
  }
`;

function extractYouTubeVideoId(url) {
  const regex = /(?:youtube\.com\/(?:[^/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?/\s]{11})/;
  const match = url.match(regex);
  return match ? match[1] : null;
}

function stripTags(html) {
  const parser = new DOMParser();
  const doc = parser.parseFromString(html, 'text/html');
  return doc.body.textContent;
}

const SidebarItem = ({ item, isVideo }) => {
  const videoId = isVideo ? extractYouTubeVideoId(item.video_url) : null;
  const imageUrl = isVideo
    ? videoId ? `https://img.youtube.com/vi/${videoId}/0.jpg` : 'static/images/default-thumbnail.png'
    : item.image ? item.image : 'static/images/default-thumbnail.png';

  const linkTo = isVideo ? `/video/${item.id}` : `/blog/${item.id}`;
  const descriptionWithoutTags = item.excerpt ? item.excerpt.substring(0, 50) : item.description ? stripTags(item.description.substring(0, 50)) : ''
  return (
    <SidebarItemContainer>
      <div
        className="sidebar-item-image"
        style={{ backgroundImage: `url(${imageUrl})` }}
      ></div>
      <div className="sidebar-item-content">
        <Link to={linkTo}>
          <div className="sidebar-item-title">{item.title}</div>
        </Link>
        <div className="sidebar-item-meta">
          <span className="fa fa-calendar mr-2"></span>  {new Date(item.published_date).toLocaleDateString()}
          <span style={{ marginLeft: '10px' }} className="fa fa-user mr-2"></span>  {item.author ?? "Admin"}
        </div>
        <div className="sidebar-item-excerpt">{descriptionWithoutTags}...</div>
      </div>
    </SidebarItemContainer>
  );
};

export default SidebarItem;

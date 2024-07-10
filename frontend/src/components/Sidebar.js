import React from 'react';
import styled from 'styled-components';
import SidebarItem from './SidebarItem';

const SidebarContainer = styled.div`
  padding: 30px;
  background-color: #f8f9fa;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0,0,0,0.1);
  flex: 1; /* Make Sidebar narrower */
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;

const SidebarTitle = styled.h3`
  margin-bottom: 20px;
  font-weight: bold;
`;

const Sidebar = ({ relatedPosts, isVideo }) => {
  return (
    <SidebarContainer className="sidebar ftco-animate pl-md-4 py-md-5">
      <SidebarTitle>ተዛማጅ ልጥፎች</SidebarTitle>
      {relatedPosts.map(item => (
        <SidebarItem key={item.id} item={item} isVideo={isVideo} />
      ))}
    </SidebarContainer>
  );
};

export default Sidebar;

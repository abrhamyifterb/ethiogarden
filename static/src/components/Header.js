import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { getHeader, getCategory } from '../services/api';
import styled from 'styled-components';

const Navbar = styled.nav`
  background: #f3f6f4;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 1000;
  padding: 1rem 0;
  transition: background 0.3s ease;
`;

const Logo = styled.img`
  height: 80px;

  @media (max-width: 768px) {
    height: 60px;
  }
`;

const NavContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

const NavList = styled.ul`
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;

  @media (max-width: 768px) {
    flex-direction: column;
    width: 100%;
    display: ${props => (props.open ? 'block' : 'none')};
    background: #f3f6f4;
    position: absolute;
    top: 100%;
    left: 0;
    padding: 1rem 0;
  }
`;

const NavItem = styled.li`
  margin-left: 2rem;
  position: relative;

  &:hover {
    transform: translateY(-2px);
    transition: transform 0.3s ease;
  }

  &:hover::after {
    content: '';
    position: absolute;
    width: 100%;
    height: 2px;
    background: #66b032;
    bottom: -5px;
    left: 0;
    transition: all 0.3s ease;
  }

  @media (max-width: 768px) {
    margin-left: 0;
    margin-bottom: 1rem;
    padding: 0.5rem 0;
  }
`;

const NavLink = styled(Link)`
  color: #000;
  text-decoration: none;
  font-size: 1rem;
  position: relative;
  transition: color 0.3s ease;

  &:hover,
  &.active {
    color: #66b032 !important;
  }

  &.active::after {
    content: '';
    position: absolute;
    width: 100%;
    height: 2px;
    background: #66b032;
    bottom: -5px;
    left: 0;
    transition: all 0.3s ease;
  }
`;

const DropdownMenu = styled.ul`
  display: none;
  position: absolute;
  background: #f3f6f4;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
  top: 100%;
  left: 0;
  list-style: none;
  padding: 0;
  margin: 0;
  z-index: 1000;

  ${NavItem}:hover & {
    display: block;
  }

  @media (max-width: 768px) {
    position: static;
    display: block;
  }
`;

const DropdownItem = styled.li`
  padding: 0.5rem 1rem;
  min-width: 228px;

  a {
    color: #000;
    text-decoration: none;
    font-size: 1rem;
    transition: color 0.3s ease;

    &:hover {
      color: #66b032;
    }
  }
`;

const TogglerButton = styled.button`
  background: none;
  border: none;
  color: #000;
  font-size: 1.5rem;
  display: none;

  &:focus {
    outline: none;
  }

  @media (max-width: 768px) {
    display: block;
    position: absolute;
    right: 1rem;
  }
`;

const CollapseContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 100%;

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }
`;

function Header() {
  const [header, setHeader] = useState(null);
  const [loading, setLoading] = useState(true);
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);
  const [categories, setCategories] = useState([]);
  const menuRef = useRef(null);

  const handleClickOutside = (event) => {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      setMenuOpen(false);
    }
  };

  useEffect(() => {
    const fetchHeader = async () => {
      try {
        const data = await getHeader();
        setHeader(data);
      } catch (error) {
        console.error('Error fetching header data:', error);
      } finally {
        setLoading(false);
      }
    };

    const fetchCategories = async () => {
      try {
        const data = await getCategory();
        setCategories(data);
      } catch (error) {
        console.error('Error fetching categories:', error);
      }
    };

    fetchHeader();
    fetchCategories();

    if (menuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [menuOpen]);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <Navbar className="navbar navbar-expand-lg navbar-dark">
      <div className="container">
        <NavContainer>
          <Link to="/" className="nav-link"><Logo src={header.logo} alt="Afrisync" /></Link>
          <TogglerButton
            className="navbar-toggler"
            type="button"
            aria-controls="ftco-nav"
            aria-expanded={menuOpen}
            aria-label="Toggle navigation"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <span className="icon fa fa-bars" style={{ color: '#111' }}></span>
          </TogglerButton>
          <CollapseContainer className={`collapse navbar-collapse ${menuOpen ? 'show' : ''}`} id="ftco-nav" ref={menuRef}>
            <NavList open={menuOpen} className="navbar-nav ml-auto">
              <NavItem className="nav-item"><NavLink to="/" className={`nav-link ${location.pathname === '/' ? 'active' : ''}`}>ዋና ገፅ</NavLink></NavItem>
              <NavItem className="nav-item"><NavLink to="/aboutus" className={`nav-link ${location.pathname === '/aboutus' ? 'active' : ''}`}>ሰለ እኛ</NavLink></NavItem>
              <NavItem className="nav-item">
                <NavLink to="/blog" className={`nav-link ${location.pathname.startsWith('/blog') ? 'active' : ''}`}>የግብርና ትምርት በጽሑፍ</NavLink>
                <DropdownMenu>
                  {categories.map(category => (
                    <DropdownItem key={category.id}><Link to={`/blog/category/${category.id}`}>{category.name}</Link></DropdownItem>
                  ))}
                </DropdownMenu>
              </NavItem>
              <NavItem className="nav-item">
                <NavLink to="/video" className={`nav-link ${location.pathname.startsWith('/video') ? 'active' : ''}`}>የግብርና ትምርት በቪድዮ</NavLink>
                <DropdownMenu>
                  {categories.map(category => (
                    <DropdownItem key={category.id}><Link to={`/video/category/${category.id}`}>{category.name}</Link></DropdownItem>
                  ))}
                </DropdownMenu>
              </NavItem>
              <NavItem className="nav-item"><NavLink to="/contactus" className={`nav-link ${location.pathname === '/contactus' ? 'active' : ''}`}>ያግኙን</NavLink></NavItem>
            </NavList>
          </CollapseContainer>
        </NavContainer>
      </div>
    </Navbar>
  );
}

export default Header;

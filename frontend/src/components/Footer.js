import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getFooter } from '../services/api';
import styled from 'styled-components';

const FooterSection = styled.footer`
  background: linear-gradient(135deg, #008001 0%, #66b032 100%);
  padding: 5rem 0;
  color: #fff;

  .ftco-footer-widget {
    margin-bottom: 5rem;

    @media (max-width: 768px) {
      margin-bottom: 2rem;
      text-align: center;
    }
  }

  .ftco-heading-2 {
    font-size: 20px;
    margin-bottom: 1.5rem;
    font-weight: bold;
    color: #fff;
  }

  .nav-item .nav-link {
    color: #fff;
    font-size: 14px;
    margin-bottom: 10px;

    &:hover {
      color: #000;
      text-decoration: underline;
    }

    @media (max-width: 768px) {
      margin-bottom: 5px;
    }
  }

  .block-23 ul li {
    margin-bottom: 1rem;
    display: flex;
    align-items: center;
    color: #fff;

    .icon {
      margin-right: 10px;
    }

    .text {
      color: #fff;
      font-size: 14px;
    }

    a:hover .text {
      color: #000;
    }

    @media (max-width: 768px) {
      justify-content: center;
    }
  }

  .text-center {
    color: #fff;
    font-size: 14px;
    padding-top: 2rem;
  }
`;

function Footer() {
  const [footer, setFooter] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchFooter = async () => {
      try {
        const data = await getFooter();
        setFooter(data);
      } catch (error) {
        console.error('Error fetching about us data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchFooter();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <FooterSection className="ftco-footer ftco-no-pt">
      <div className="container">
        <div className="row mb-5">
          <div className="col-md pt-5">
            <div className="ftco-footer-widget pt-md-5 mb-4">
              <h2 className="ftco-heading-2">ስለ እኛ</h2>
              <p>{footer.moto}</p>
            </div>
          </div>
          <div className="col-md pt-5">
            <div className="ftco-footer-widget pt-md-5 mb-4 ml-md-5">
              <h2 className="ftco-heading-2">አሰሳ</h2>
              <ul className="list-unstyled">
                <li className="nav-item active"><Link to="/" className="nav-link">ዋና ገፅ</Link></li>
                <li className="nav-item"><Link to="/aboutus" className="nav-link">ሰለ እኛ</Link></li>
                <li className="nav-item"><Link to="/blog" className="nav-link">የግብርና ትምርት በጽሑፍ</Link></li>
                <li className="nav-item"><Link to="/video" className="nav-link">የግብርና ትምርት በቪድዮ</Link></li>
              </ul>
            </div>
          </div>
          <div className="col-md pt-5">
            <div className="ftco-footer-widget pt-md-5 mb-4">
              <h2 className="ftco-heading-2">ያግኙን</h2>
              <div className="block-23 mb-3">
                <ul className="list-unstyled">
                  <li><span className="icon fa fa-map-marker"></span><span className="text"> {footer.address} </span></li>
                  <li><span className="icon fa fa-phone"></span><span className="text"> {footer.phone}</span></li>
                  <li><span className="icon fa fa-envelope"></span><span className="text"> {footer.email}</span></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12 text-center">
            <p>&copy; {new Date().getFullYear()} All rights reserved | Afrisync</p>
          </div>
        </div>
      </div>
    </FooterSection>
  );
}

export default Footer;

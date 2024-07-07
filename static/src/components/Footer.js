import React from 'react';
import { Link } from 'react-router-dom';
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
  return (
    <FooterSection className="ftco-footer ftco-no-pt">
      <div className="container">
        <div className="row mb-5">
          <div className="col-md pt-5">
            <div className="ftco-footer-widget pt-md-5 mb-4">
              <h2 className="ftco-heading-2">ስለ እኛ</h2>
              <p>በየቀኑ የ ጋርደኒንግ እውቀት ያግኙ። የራስዎ ምግብ ይመገቡ አከባቢዎ ያሳምሩ።</p>
            </div>
          </div>
          <div className="col-md pt-5">
            <div className="ftco-footer-widget pt-md-5 mb-4 ml-md-5">
              <h2 className="ftco-heading-2">ናቪጌሽን</h2>
              <ul className="list-unstyled">
                <li className="nav-item active"><Link to="/" className="nav-link">ዋና ገፅ</Link></li>
                <li className="nav-item"><Link to="/aboutus" className="nav-link">ሰለ እኛ</Link></li>
                <li className="nav-item"><Link to="/blog" className="nav-link">የጽሑፍ ጋርደኒንግ</Link></li>
                <li className="nav-item"><Link to="/video" className="nav-link">የቪድዮ ጋርደኒንግ</Link></li>
              </ul>
            </div>
          </div>
          <div className="col-md pt-5">
            <div className="ftco-footer-widget pt-md-5 mb-4">
              <h2 className="ftco-heading-2">ያግኙን</h2>
              <div className="block-23 mb-3">
                <ul className="list-unstyled">
                  <li><span className="icon fa fa-map-marker"></span><span className="text"> Bole, Addisababa, Ethiopia</span></li>
                  <li><span className="icon fa fa-phone"></span><span className="text"> +251925064450</span></li>
                  <li><span className="icon fa fa-envelope"></span><span className="text"> info@gardening.com</span></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12 text-center">
            <p>&copy; {new Date().getFullYear()} All rights reserved | EthioGardening</p>
          </div>
        </div>
      </div>
    </FooterSection>
  );
}

export default Footer;

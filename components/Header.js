import React, { useEffect } from 'react';
import Link from 'next/link';

const Header = () => (
  <div className="header container">
    <Link href="/">
      <a>
        <h1 className="nav-title">
          Jonathan
          <span className="last-name"> Park </span>
        </h1>
      </a>
    </Link>
    <div className="navigation">
      <Link href="https://blog.jonathanpark.ca">
        <a className="nav-item"> Blog </a>
      </Link>
    </div>
    <style jsx>
      {`
          .header {
            display: flex;
            height: 96px;
          }
          .navigation {
            flex-grow: 1;
            max-width: 100%;
            background-color: white;
            display: flex;
            justify-content: flex-end;
            padding: 8px;
            align-items: center;
          }
          .nav-title {
            color: black;
            text-decoration: none;
            margin: 0;
            padding: 8px 0;
            font-size: 32px;
            line-height: 88px;
            font-weight: normal;
          }
          .nav-item {
            font-weight: normal;
            color: black;
            text-decoration: none;
            font-size: 24px;
            padding: 24px 8px 8px 8px;
          }
          @media (max-width: 576px) {
            .last-name {
              display: none;
            }

            .nav-item {
              font-size: 20px;
            }
          }
        `}
    </style>
  </div>
);

export default Header;

import { useEffect } from 'react'
import Link from "next/link";
import ReactMarkdown from "react-markdown";

const BlogList = (props) => {

  function truncateSummary(content) {
    return content.slice(0, 200).trimEnd();
  }

  function reformatDate(fullDate) {
    const date = new Date(fullDate)
    return date.toDateString().slice(4);
  }

  return (
    <>
      <ul className="list">
        {props.allBlogs.map(post => (
          <Link
            key={post.slug}
            href={{ pathname: `/blog/${post.slug}` }}
          >
            <a>
            <li>
              <div className="blog-info">
                <h2>{post.document.data.title}</h2>
                <h3> {reformatDate(post.document.data.date)}</h3>
                <div className='description'>
                  <p>{post.document.data.description}</p>
                </div>
              </div>
            </li>
            </a>
          </Link>
        ))}
      </ul>
      <style jsx>
        {`
          a:hover {
            opacity: 1;
          }
          a:hover li img {
            opacity: 0.8;
            transition: opacity 0.3s ease;
          }
          a:hover li .blog-info h2, a:hover li .blog-info h3, a:hover li .blog-info div {
            transform: translateX(10px);
            transition: transform 0.5s ease-out;
          }
          a:hover li .blog-info h2 {
            color: #2a7ae2;
          }
          .blog-info {
            display: flex;
            max-width: 900px;
            width: 100%;
            flex-direction: column;
            justify-content: center;
            padding: 16px 8px;
            transform: translateX(0px);
            transition: transform 0.3s ease-in;
            border-bottom: 1px solid #ebebeb;
            transition: padding 0.1s ease-in;
          }

          .blog-info h2, .blog-info h3, .blog-info div {
            transform: translateX(0px);
            transition: transform 0.5s ease-out;
          }

          .blog-info h3 {
            font-size: 20px;
            color: #a0a0a0;
          }
          .blog-info .description {
            font-size: 12px;
            max-width: 900px;
            margin: 0;
          }
          li {
            opacity: inherit;
            display: flex;
            justify-content: center;
            flex-direction: column;
            margin-bottom: 0;
          }
          h2 {
            margin-bottom: 8px;
          }
          h3 {
            margin-bottom: 16px;
          }

          @media (min-width: 768px) {
            li {
              max-height: 250px;
              flex-direction: row;
            }

            .blog__info {
              min-width: 70%;
            }

            .blog-info .description {
              font-size: 16px;
            }
          }
          @media (min-width: 1280px) {
            .blog-info {
              padding: 24px;
            }
            h3 {
              margin-bottom: 20px;
            }
          }
        `}
      </style>
    </>
  );
};

export default BlogList

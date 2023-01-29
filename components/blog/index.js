// import React from 'react'
// import matter from 'gray-matter'
// import Head from 'next/head'
// import BlogList from "../../components/BlogComponents/BlogList";
// import { blogIndex } from "../../components/meta-descriptions"
//
// import { getSlug } from '../../utils/utils'
//
// const Index = (props) => {
//   return (
//     <>
//       <Head>
//         <title>Jonathan Park Blog</title>
//         <meta name="description" content={blogIndex} />
//       </Head>
//       <section className="container blog">
//         <h1 className="list-header"> Posts </h1>
//         <BlogList allBlogs={props.allBlogs}/>
//         <style jsx>
//         {`
//             .list-header {
//                 margin: 48px auto 32px auto;
//                 max-width: 900px;
//             }
//             @media(min-width: 768px){
//                 .list-header {
//                 }
//             }
//         `}
//         </style>
//       </section>
//     </>
//   );
// };
//
// export default Index;
//
// Index.getInitialProps = async () => {
//   // get posts & context from folder
//   const posts = (context => {
//
//     const keys = context.keys();
//     const values = keys.map(context);
//     const data = keys.map((key, index) => {
//       // Create slug from filename
//       const slug = getSlug(key);
//       const value = values[index];
//       // Parse yaml metadata & markdownbody in document
//       const document = matter(value.default);
//       return {
//         date: new Date(document.data.date),
//         document,
//         slug
//       };
//     });
//     // order so that newest is first item in the Array
//     // IMPORTANT -> Different than how its implemented in [pid].js
//     return data.sort((a,b) => b.date - a.date);
//   })(require.context('../../public/posts', true, /\.md$/));
//
//   return {
//     allBlogs: posts,
//   }
// }

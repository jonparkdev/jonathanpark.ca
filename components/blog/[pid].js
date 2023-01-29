// import PropTypes from 'prop-types'
// import matter from 'gray-matter'
// import ReactMarkdown from 'react-markdown'
// import Head from 'next/head'
// import MarkdownRenderer from '../../components/BlogComponents/MarkdownRenderer'
// import SwitchPost from '../../components/BlogComponents/SwitchPost'
// import Bibliography from '../../components/BlogComponents/Bibliography'
// import { getSlug } from '../../utils/utils'
//
// const Cite = require('citation-js')
// const math = require("remark-math")
//
// const BlogPost = props => {
//   const { index, frontmatter, markdownBody, postList, bibliographyHtml } = props
//   const reformatDate = fullDate => {
//     const date = new Date(fullDate)
//     return date.toDateString().slice(4)
//   }
//
//   return (
//     <>
//       <Head>
//         <title> {frontmatter.title} </title>
//         <meta name="description" content={frontmatter.description} />
//         <link
//         rel="stylesheet"
//         href="https://cdn.jsdelivr.net/npm/katex@0.11.0/dist/katex.min.css"
//         integrity="sha384-BdGj8xC2eZkQaxoQ8nSLefg4AV4/AwB3Fj+8SUSo7pnKP6Eoy18liIKTPn9oBYNG"
//         crossOrigin="anonymous"/>
//       </Head>
//       <div className='container'>
//         <article className='blog-post'>
//           <div className='header'>
//             <h1>{frontmatter.title}</h1>
//             <h3>{reformatDate(frontmatter.date)}</h3>
//           </div>
//           <SwitchPost index={index} posts={postList} />
//           <div className="body">
//             <MarkdownRenderer source={markdownBody} />
//           </div>
//           <SwitchPost index={index} posts={postList}/>
//           {bibliographyHtml && <Bibliography bibliography={bibliographyHtml} />}
//         </article>
//         <style jsx>
//           {`
//             .blog-post {
//               max-width: 800px;
//               margin: 0 auto;
//             }
//             .blog-post:last-child {
//               margin-bottom: 2em;
//             }
//             .blog-post .header {
//               padding: 24px 0;
//             }
//             .blog-post .header h1, .blog-post .header h3{
//               margin: 0;
//             }
//             .blog-post .header h3 {
//               color: #a0a0a0;
//               font-size: 20px;
//             }
//
//             @media (max-width: 576px){
//               .blog-post .header h1 {
//                 font-size: 32px;
//               }
//             }
//             @media (min-width: 768px) {
//               .blog-post .header {
//                 text-align: center;
//               }
//               .blog-post .header {
//                 padding: 24px 20px;
//                 margin-top: 48px;
//               }
//             }
//
//             `}
//         </style>
//       </div>
//     </>
//   )
// }
//
// BlogPost.getInitialProps = async (context) => {
//   const { pid } = context.query
//
//   const posts = (context => {
//
//    const keys = context.keys();
//    const values = keys.map(context);
//    const data = keys.map((key, index) => {
//      // Create slug from filename
//      const slug = getSlug(key)
//      const value = values[index]
//      // Parse yaml metadata & markdownbody in document
//      const document = matter(value.default);
//
//      return {
//        date: new Date(document.data.date),
//        document,
//        slug
//      };
//    });
//    // sort so that the newest is the last index in Array
//    return data.sort((a,b) => a.date - b.date);
//  })(require.context("../../public/posts", true, /\.md$/));
//   const postList = posts.map(post => post.slug)
//   const index = postList.indexOf(pid)
//   const frontmatter = posts[index].document.data
//   const markdownBody = posts[index].document.content
//
//   const blogPostProps = {
//     postList,
//     index,
//     frontmatter,
//     markdownBody
//   }
//
//   /* try...catch to determine if blogpost has a bibliography */
//   let bibliographyRaw;
//   try {
//     // get raw json
//     bibliographyRaw = await import(`../../public/posts/bibliographies/${pid}.json`)
//   } catch(error) {
//     return { ...blogPostProps }
//   }
//   // construct Cite object for processing
//   let bibliographyData = new Cite(bibliographyRaw.default)
//   // process object into html
//   const bibliographyHtml = bibliographyData.format('bibliography', {
//     format: 'html',
//     template: 'apa'
//   })
//
//   return {
//     ...blogPostProps,
//     bibliographyHtml
//   }
// }
//
// BlogPost.propTypes = {
//   index: PropTypes.number.isRequired,
//   frontmatter: PropTypes.object.isRequired,
//   markdownBody: PropTypes.string.isRequired,
//   postList: PropTypes.array.isRequired,
//   bibliographyHtml: PropTypes.string
// }
//
// BlogPost.defaultProps = {
//   bibliographyHtml: null,
// }
//
// export default BlogPost

import { getAllArticles } from '@/lib/getAllArticles';

//pages/sitemap.xml.js
const EXTERNAL_DATA_URL = 'https://jonathanpark.ca';

function generateSiteMap(articles) {
  return `<?xml version="1.0" encoding="UTF-8"?>
   <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
     <url>
       <loc>https://jonathanpark.ca</loc>
     </url>
     <url>
       <loc>https://jonathanpark.ca/about</loc>
     </url>
     <url>
      <loc>https://jonathanpark.ca/tech</loc>
     </url>
     <url>
      <loc>https://jonathanpark.ca/articles</loc>
     </url>
     ${articles
       .map(({ slug }) => {
         return `
       <url>
           <loc>${`${EXTERNAL_DATA_URL}/articles/${slug}`}</loc>
       </url>
     `;
       })
       .join('')}
   </urlset>
 `;
}

function SiteMap() {
  // getServerSideProps will do the heavy lifting
}

export async function getServerSideProps({ res }) {
  const articles = (await getAllArticles()).map(({ component, ...meta }) => meta);

  // We generate the XML sitemap with the posts data
  const sitemap = generateSiteMap(articles);

  res.setHeader('Content-Type', 'text/xml');
  // we send the XML to the browser
  res.write(sitemap);
  res.end();

  return {
    props: {},
  };
}

export default SiteMap;

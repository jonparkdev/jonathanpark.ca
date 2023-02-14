export default function handler(req, res) {
  res.send(`# Allow all crawlers
User-agent: *
Allow: /`);
}

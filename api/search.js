export default async function handler(req, res) {
  const { q } = req.query;
  const response = await fetch(`https://export.arxiv.org/api/query?search_query=all:${encodeURIComponent(q)}&start=0&max_results=5`);
  const xml = await response.text();
  res.setHeader('Content-Type', 'application/xml');
  res.status(200).send(xml);
}

export default function handler(req, res) {
  if (req.method === 'POST') {
    // Just respond with no content for speed test
    res.status(204).end();
  } else {
    res.status(405).send('Method Not Allowed');
  }
}

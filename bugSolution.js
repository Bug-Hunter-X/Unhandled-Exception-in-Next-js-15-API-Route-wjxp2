```javascript
// pages/api/hello.js
export default async function handler(req, res) {
  try {
    const data = JSON.parse(req.body);
    // ... process data ...
    res.status(200).json({ name: 'John Doe' });
  } catch (error) {
    if (error instanceof SyntaxError) {
      res.status(400).json({ error: 'Invalid JSON' });
    } else {
      console.error('Error processing request:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  }
}
```
```javascript
// pages/api/hello.js
export default function handler(req, res) {
  // Missing error handling
  const data = JSON.parse(req.body);
  // ... process data ...
  res.status(200).json({ name: 'John Doe' });
}
```
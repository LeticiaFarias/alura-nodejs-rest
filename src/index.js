const customExpress = require('./config/customExpress');

const app = customExpress();

app.listen(3002, () =>
  console.log('🚀 Server running at http://localhost:3002')
);

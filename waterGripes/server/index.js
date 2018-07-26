const port =  process.env.port || 3000;
const app = require('./server');
  
app.listen(port, () => console.log(`Water Gripes listening on port ${port}!`));

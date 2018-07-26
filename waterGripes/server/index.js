const port =  80 || process.env.PORT || 3000;
const app = require('./server');
  
app.listen(port, () => console.log(`Water Gripes listening on port ${port}!`));

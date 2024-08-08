const express = require('express');
const app = express();
const db = require('./db');
const swaggerSpec = require('./Swagger');
const swaggerUi = require('swagger-ui-express'); // Import swagger-ui-express
const helmet = require('helmet');
const userRoutes = require('./routes/User');
const bodyParser = require('body-parser');




app.use(
    helmet.contentSecurityPolicy({
      directives: {
        defaultSrc: ["'self'"],
        scriptSrc: ["'self'", "'unsafe-inline'"],
        styleSrc: ["'self'", "'unsafe-inline'", 'https://fonts.googleapis.com'],
        imgSrc: ["'self'", 'data:', 'https://online.swagger.io'],
        fontSrc: ["'self'", 'https://fonts.gstatic.com'],
        connectSrc: ["'self'", 'https://online.swagger.io'],
      },
    })
  );



app.use(bodyParser.json());

// Use the routes
app.use('/api', userRoutes);

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

app.listen(3000,()=>{
    console.log('server started');
})
require('dotenv').config();
const express = require('express');
const cors = require('cors');


const carRoutes = require('./routes/car');
const userRoutes = require('./routes/car');
const commentRoutes = require ('./routes/comment');
const sequelize = require('./services/database-setup');
const { setupRelations, initializeDatabase } = require('./services/database')
const { apiPort } = require('./config');


//Init aplication
const app = express();



// parsers
app.use(express.json());
app.use(express.urlencoded({ extended: true}));

// cors
app.use(cors());

// fetch
app.use((req, res, next) => {
    req.fetched = {};
    next();
});

//Setting up routes
app.use('/auth', authRoutes);
app.use('/api', userRoutes);
app.use('/api', commentRoutes);
app.use('/api', carRoutes);

// balancer
app.use('/hc', (req, res, next) => {
    res.status(200).json({});
});

// error route
app.use((err, req, res, next) => {
    console.log(`\n${err.message}\n`);
    const statusCode = err.statusCode || 500;
    const message = err.message || 'Error occured';
    res.status(statusCode).json({ message: message});
});

// setup database relations
setupRelations();

(async () => {
    try {
        await sequelize.sync()

        await initializeDatabase();
        app.listen(apiPort);
        console.log(`Server is running at port ${apiPort}`)
    } catch (err) {
        console.log(err);
    }
})();

module.exports = app;
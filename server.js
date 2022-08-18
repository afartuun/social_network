const express = require('express');
const app = express();
const mongoose = require('mongoose');
const router = require('./routes/index');
api = require('./routes');
app.use('/api', api);

const PORT = process.env.PORT || 3001;

mongoose.connect('mongodb://localhost/social_network', {useNewUrlParser: true, UseUnifiedTopology: true});
const db = mongoose.connection
db.on('error', (error) => console.error(error))
db.once('open', () => console.log('Connected to databse'));

app.use(express.urlencoded({extended: true}));
app.use(express.json());

mongoose.set('debug', true);


app.listen(PORT, () => console.log('Server Started'));

// process.env.DATABASE_URL
// , useFindAndModify: false


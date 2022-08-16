const express = require('express');
const app = express();
const mongoose = require('mongoose');
app.use('./routes');

const PORT = process.env.PORT || 3000;

mongoose.connect(process.env.DATABASE_URL, {useNewUrlParser: true, useFindAndModify: false, UseUnifiedTopology: true});
const db = mongoose.connection
db.on('error', (error) => console.error(error))
db.once('open', () => console.log('Connected to databse'));

app.use(express.json());
app.use(express.urlencoded({extended: true}));

mongoose.set('debug', true);


app.listen(PORT, () => console.log('Server Started'));
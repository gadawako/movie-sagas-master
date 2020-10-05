const express = require('express');
const pool = require('../modules/pool');
const Router = express.Router();


Router.get('/:id', (req, res) => {
   let id = req.params.id; console.log('this is movie id',id)
   let query = `SELECT name FROM movies JOIN movie_genres ON movies.id=movie_genres.movie_id JOIN genres ON movie_genres.genre_id=genres.id WHERE movies.id = $1` 
   pool.query(query, [id]).then( result =>
     { console.log(result.rows) 
      res.send(result.rows); 
    }).catch(err => { console.log(err); res.sendStatus(500); })
    }) 
    module.exports = Router;
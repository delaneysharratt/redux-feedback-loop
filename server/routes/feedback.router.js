const express = require('express');
const router = express.Router();

const pool = require('../modules/pool');

router.post('/', (req, res) => {
  let feedbackEntry = req.body;
  console.log('Adding feedback...', feedbackEntry);
  let queryText = `INSERT INTO "feedback" ("feeling", "understanding", "support", "comments")
                    VALUES ($1, $2, $3, $4);`;
  pool
    .query(queryText, [
      feedbackEntry.feeling,
      feedbackEntry.understanding,
      feedbackEntry.support,
      feedbackEntry.comments
    ])
    .then(result => {
      res.sendStatus(201);
    })
    .catch(err => {
      console.log('Error adding feedback');
      res.sendStatus(500);
    });
});

router.get('/', (req, res) => {
  pool
    .query(`SELECT * FROM "feedback";`)
    .then(result => {
      res.send(result.rows);
    })
    .catch(err => {
      console.log('Error getting feedback');
      res.sendStatus(500);
    });
});

router.delete('/:id', (req, res) => {
  let queryText = `DELETE FROM "feedback" WHERE "id" = $1;`;
  pool
    .query(queryText, [req.params.id])
    .then(result => {
      console.log('Entry deleted');
      res.sendStatus(204);
    })
    .catch(err => {
      console.log(err);
      res.sendStatus(500);
    });
});

module.exports = router;

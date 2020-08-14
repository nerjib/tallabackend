const express = require('express');
const moment = require ('moment')
const router = express.Router();
const db = require('../dbs/index');

router.get('/local', async (req, res) => {
  const getAllQ = 'select reports.uid, count(reports.uid), users.last_name, users.first_name, projects.title from reports left join users on reports.uid=users.id left join projects on reports.pid=projects.id where reports.uid=projects.local_id group by reports.uid, users.first_name,users.last_name,projects.title order by users.last_name asc';
  try {
    // const { rows } = qr.query(getAllQ);
    const { rows } = await db.query(getAllQ);
    return res.status(201).send(rows);
  } catch (error) {
    if (error.routine === '_bt_check_unique') {
      return res.status(400).send({ message: 'User with that EMAIL already exist' });
    }
    return res.status(400).send(`${error} jsh`);
  }
});

router.get('/local/bylot', async (req, res) => {
    const getAllQ = 'select reports.uid, count(reports.uid), users.first_name, users.last_name, projects.title,projects.lot, projects.pstatus from reports left join users on reports.uid=users.id left join projects on reports.pid=projects.id where reports.uid=projects.local_id group by reports.uid, users.first_name,users.last_name,projects.title,projects.lot,projects.pstatus order by users.last_name asc';
    try {
      // const { rows } = qr.query(getAllQ);
      const { rows } = await db.query(getAllQ);
      return res.status(201).send(rows);
    } catch (error) {
      if (error.routine === '_bt_check_unique') {
        return res.status(400).send({ message: 'User with that EMAIL already exist' });
      }
      return res.status(400).send(`${error} jsh`);
    }
  });

  router.get('/state', async (req, res) => {
    const getAllQ = 'select weeklyreports.uid,users.last_name,users.first_name,count(weeklyreports.uid),projects.title from weeklyreports left join users on weeklyreports.uid=users.id left join projects on weeklyreports.pid=projects.id where users.id=projects.state_id and weeklyreports.complete=$1 group by weeklyreports.uid,users.last_name,users.first_name,projects.title order by users.last_name asc';
    try {
      // const { rows } = qr.query(getAllQ);
      const { rows } = await db.query(getAllQ,[1]);
      return res.status(201).send(rows);
    } catch (error) {
      if (error.routine === '_bt_check_unique') {
        return res.status(400).send({ message: 'User with that EMAIL already exist' });
      }
      return res.status(400).send(`${error} jsh`);
    }
  });
  router.get('/state/bylot', async (req, res) => {
    const getAllQ = 'select weeklyreports.uid,users.last_name,users.first_name,count(weeklyreports.uid),projects.title,projects.lot from weeklyreports left join users on weeklyreports.uid=users.id left join projects on weeklyreports.pid=projects.id where users.id=projects.state_id and weeklyreports.complete=$1 group by weeklyreports.uid,users.last_name,users.first_name,projects.title, projects.lot order by users.last_name asc';
    try {
      // const { rows } = qr.query(getAllQ);
      const { rows } = await db.query(getAllQ, [1]);
      return res.status(201).send(rows);
    } catch (error) {
      if (error.routine === '_bt_check_unique') {
        return res.status(400).send({ message: 'User with that EMAIL already exist' });
      }
      return res.status(400).send(`${error} jsh`);
    }
  });


module.exports = router;

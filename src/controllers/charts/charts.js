const express = require('express');
const moment = require ('moment')
const router = express.Router();

router.post('/:text', async (req, res) => {
  const getAllQ = 'SELECT * FROM reports where complete=$1 order by id desc';
  /*try {
    // const { rows } = qr.query(getAllQ);
    const { rows } = await db.query(getAllQ, ['1']);
    return res.status(201).send(rows);
  } catch (error) {
    if (error.routine === '_bt_check_unique') {
      return res.status(400).send({ message: 'User with that EMAIL already exist' });
    }
    return res.status(400).send(`${error} jsh`);

  }*/
  let word=(req.params.text).toLowerCase()
  if(word==('hello'||'hi')){
  return res.status(201).send('Hi');
}
else if (word=='thank you'){
return res.status(201).send('You are welcome');
}
else{
      return res.status(201).send('Come again');

}
});
  
module.exports = router;

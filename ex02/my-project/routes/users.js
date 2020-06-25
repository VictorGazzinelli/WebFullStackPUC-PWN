var express = require('express');
var router = express.Router();
let users = [];

/* GET users listing. */
router.get('/', function(req, res, next) {
  console.log('users', users)
  res.statusCode = 200
  res.send({ users: users});
});

router.post('/', (req, res) => {
  let user = req.body;
  users.push(user);
  console.log('users', users)
  res.statusCode = 200
  res.send({ idUser: users.indexOf(user) + 1})
});

router.delete('/:email', (req, res) => {
  console.log('email', req.params);
  let user = users.find( item => item.Email === req.params.email)
  console.log('user', user)
  users = users.filter( item => item !== user);
  console.log('users', users)
  if(user){
    res.statusCode = 200
    res.send({ user: user});
  }
  else{
    res.statusCode = 400
    res.send({ message: "email nao encontrado"});
  }
});


// router.post(​'/'​, (req, res) => {
//     //  users.items.push(req.body);
//      res.send(​'Ok!'​); 
//     //  console.log('users',users);
// });

module.exports = router;

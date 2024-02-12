const User = require('../models/user');

const getUsers = (req, res) => {
  // Get all users
  User.find({})
  .then(user => {
      res.status(200).send(user);
  })
  .catch(e => {
      res.status(500).send(e.message);
  });

};

const getUser = (req, res) => {
  const { user_id } = req.params;
  User.findById(user_id)
      .then(user => {
          res.status(200).send(user);
      })
      .catch(e => {
          res.status(500).send(e.message);
      });
    
    
};

const createUser = (req, res) => {
  // Create new user
        // return User.create({...request.body}).then(
        //   () => {response.status(201).send(user)}
        // )
        const data = req.body;
        User.create(data)
            .then(user => {
                res.status(201).send(user);
            })
            .catch(e => {
                res.status(500).send(e.message);
            });

};

const updateUser = (req, res) => {
  // Update user
  const { user_id } = req.params;
  const data = req.body;
  User.findByIdAndUpdate(user_id, data, { new: true, runValidators: true })
      .then(user => {
          res.status(200).send(user);
      })
      .catch(e => {
          res.status(500).send(e.message);
      });

};
const deleteUser = (req, res) => {
  // Delete user
  const { user_id } = req.params;
  User.findByIdAndDelete(user_id)
      .then(user => {
          res.status(200).send("Done");
      })
      .catch(e => {
          res.status(500).send(e.message);
      });
  
};

module.exports = {
  getUsers,
  getUser,
  createUser,
  updateUser,
  deleteUser,
};

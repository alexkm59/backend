const Book = require('../models/book');

const getBooks = (req, res) => {
  // Get all Books
  Book.find({})
  .then(book => {
      res.status(200).send(book);
  })
  .catch(e => {
      res.status(500).send(e.message);
  });

};

const getBook = (req, res) => {
  const { book_id } = req.params;
  Book.findById(book_id)
      .then(book => {
          res.status(200).send(book);
      })
      .catch(e => {
          res.status(500).send(e.message);
      });
    
    
};

const createBook = (req, res) => {
  // Create new book
     
        const data = req.body;
        Book.create(data)
            .then(book => {
                res.status(201).send(book);
            })
            .catch(e => {
                res.status(500).send(e.message);
            });

};

const updateBook = (req, res) => {
  // Update user
  const { book_id } = req.params;
  const data = req.body;
  Book.findByIdAndUpdate(book_id, data, { new: true, runValidators: true })
      .then(book => {
          res.status(200).send(book);
      })
      .catch(e => {
          res.status(500).send(e.message);
      });

};
const deleteBook = (req, res) => {
  // Delete book
  const { book_id } = req.params;
  User.findByIdAndDelete(book_id)
      .then(book => {
          res.status(200).send("Done");
      })
      .catch(e => {
          res.status(500).send(e.message);
      });
  
};

module.exports = {
  getBooks,
  getBook,
  createBook,
  updateBook,
  deleteBook,
};
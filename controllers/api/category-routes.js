const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint


// find ALL Categories
router.get('/', (req, res) => {
  Category.findAll({
    // order: [['category_name', 'ASC']],
    attributes:
      [['id', 'category_id'], 'category_name'],
    include:
    {
      model: Product,
      attributes:
        [['id', 'product_id'], 'product_name', 'price', 'stock']
    }
  })
    .then(categoryData => res.json(categoryData))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});


// Find ONE Category
router.get('/:id', (req, res) => {
  // find one category by its `id` value
  Category.findOne({
    where: { id: req.params.id },
    attributes:
      [['id', 'category_id']],
    include:
    {
      model: Product,
      attributes:
        [['id', 'product_id'], 'product_name', 'price', 'stock']
    },
  })
    .then(categoryData => {
      if (!categoryData) {
        res.status(404).json({ message: 'No category with that ID found.' });
        return;
      }
      res.json(categoryData);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});


// MAKE  new Category
router.post('/', (req, res) => {
  Category.create({
    category_name: req.body.category_name
  })
    .then(categoryData => res.json(categoryData))
    .catch(err => {
      console.log(err);
      res.status(400).json(err);
    })

});

// UPDATE a category by its `id` value
router.put('/:id', (req, res) => {

});


// DELETE a category by its `id` value
router.delete('/:id', (req, res) => {

});



module.exports = router;

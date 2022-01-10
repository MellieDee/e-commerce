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
      // Can uncomment this line to remove category_id redundancy
      // attributes:
      //   [['id', 'product_id'], 'product_name', 'price', 'stock']
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
    // attributes:
    //   [['id', 'category_id'], 'category_name'],
    include:
    {
      model: Product,
      // Can uncomment this line to remove category_id redundancy
      // attributes:
      //   [['id', 'product_id'], 'product_name', 'price', 'stock']
    },
  })
    .then(categoryData => {
      if (!categoryData) {
        res.status(404).json({ message: 'No category found with that ID' });
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
  //expects:{"category_name": "name"}
  Category.update(req.body, {
    where: {
      id: req.params.id
    },
  })
    .then(categoryData => {
      if (!categoryData) {
        res.status(404), json({ message: 'No category found with that ID' });
        return;
      }
      res.json(categoryData);

    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});


// DELETE ONE category by ID
router.delete('/:id', (req, res) => {
  Category.destroy({
    where: {
      id: req.params.id
    }
  })
    .then(categoryData => {
      if (!categoryData) {
        res.status(404).json({ message: 'No category found with that ID.' })
        return;
      }
      res.json(categoryData);
    })
});



module.exports = router;

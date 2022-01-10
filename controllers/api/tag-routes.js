const router = require('express').Router();
const { Tag, Product, ProductTag, Category } = require('../../models');
const { rawAttributes } = require('../../models/Product');


// find ALL Tags
router.get('/', (req, res) => {
  Tag.findAll({
    attributes: [['id', 'tag_id'], 'tag_name'],
    include: [
      {
        model: Product,
        attributes:
          [['id', 'product_id'], 'product_name', 'price', 'stock'],
        through: {
          attributes: ['id', 'product_id', 'tag_id'],
        },
        include:
        {
          model: Category,
          attributes:
            [['id', 'cat_id'], ['category_name', 'cat_name']]
        }
      }
    ],
  })
    .then(tagData => res.json(tagData))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    })
});


// find ONE Tag by ID
router.get('/:id', (req, res) => {
  Tag.findOne({
    where: {
      id: req.params.id
    },
    attributes: [['id', 'tag_id'], 'tag_name'],
    include: [
      {
        model: Product,
        attributes:
          [['id', 'product_id'], 'product_name', 'price', 'stock'],
        through: {
          attributes: ['id', 'product_id', 'tag_id'],
        },
        include:
        {
          model: Category,
          attributes:
            [['id', 'cat_id'], ['category_name', 'cat_name']]
        }
      }
    ],
  })
    .then(dbUserData => {
      if (!dbUserData) {
        res.status(404).json({ message: 'No tag found with that ID' });
        return;
      }
      res.json(dbUserData);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    })
});



// create NEW Tag
router.post('/', (req, res) => {
  //req.body should look like this  --> { tag_name: "purple", productIds: [1, 2, 5] }

  Tag.create(req.body)
    .then((tag) => {
      // if there's product tags, we need to create pairings to bulk create in the ProductTag model

      if (req.body.productIds.length) {
        const productTagIdArr = req.body.productIds.map((product_id) => {
          return {
            tag_id: tag.id,
            product_id,
          };
        })
        return ProductTag.bulkCreate(productTagIdArr)
      }
      // if no products, just respond
      res.status(200).json(tag)
    })
    .then((productTagIds) => res.status(200).json(productTagIds))
    .catch(err => {
      console.log(err);
      res.status(400).json(err);
    });
});


// UPDATE Tag by ID
router.put('/:id', (req, res) => {
  //expects:{"tag_name": "name"}
  Tag.update(req.body, {
    where: {
      id: req.params.id,
    },
  })
    .then(tagData => {
      if (!tagData) {
        res.status(404).json({ message: 'No tag found with that ID' });
        return;
      }
      res.json(tagData);

    });
})


// DELETE ONE Tag by ID
router.delete('/:id', (req, res) => {
  Tag.destroy({
    where: {
      id: req.params.id
    }
  })
    .then(tagData => {
      if (!tagData) {
        res.status(404).json({ message: 'No tag found with that ID.' });
        return;
      }
      res.json(tagData);
    })
});

module.exports = router;

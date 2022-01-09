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
          attributes: [],
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


// find ONE Tag
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
          attributes: [],
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



// create NEW Tag
router.post('/', (req, res) => {

  /* req.body should look like this...
  {
   tag_name: "purple",
    productIds: [1, 2, 5]
  }
*/
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

router.put('/:id', (req, res) => {
  // update a tag's name by its `id` value
});

router.delete('/:id', (req, res) => {
  // delete on tag by its `id` value
});

module.exports = router;

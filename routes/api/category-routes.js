const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', async (req, res) => {
  // find all categories
  // be sure to include its associated Products
    // Category.findAll()
    const categories = await Category.findAll ({
      include: {
        model: Product,
        attributes: ['id', 'product_name', 'price', 'stock', 'category_id']
      }
    });
    
    res.json(categories);
});

router.get('/:id', async (req, res) => {
  // find one category by its `id` value
  // be sure to include its associated Products
  // Category.findByPK(req.params.id)
});

router.post('/', async (req, res) => {
  // create a new category
  //Category.create(req.body)  
});

router.put('/:id', async (req, res) => {
  // update a category by its `id` value
  // Category.update(req.body, {
  // where: { id: req.params.id}
  // })
});

router.delete('/:id', async (req, res) => {
  // delete a category by its `id` value
  // Category.destroy(req.body, {
  //   where: { id: req.params.id}
  // })
});

module.exports = router;

// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

// Products belongsTo Category
// MANY TO ONE will have a foreign key in the product referencing the category_id
Product.belongsTo(Category, {
  foreignKey: 'category_id',
  // as: 'productCategory'
});
// Categories have many Products
// ONE TO MANY
Category.hasMany(Product, {
  foreignKey: 'category_id',
  // sets the category to null within each product
  // OnDelete: 'SET NULL',
  // as: 'CategoryProducts'
});

// Products belongToMany Tags (through ProductTag)
Product.belongsToMany(Tag, {
  through: ProductTag,
  foreignKey: 'tag_id'
});
// Tags belongToMany Products (through ProductTag)
Tag.belongsToMany(Product, {
  through: ProductTag,
  foreignKey: 'tag_id'
});


module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};

import db from "../../database/db.js";
import Product from "../../schemas/Product.js";

const getProducts = async (req, res, next) => {
  try {
    let products = [];
    let productsByWordsToMatch = [];
    let productIds = new Set();

    if (req.query.category) {
      products = await Product.find({ category: req.query.category });
    } else if (req.query.filter) {
      let filter = req.query.filter;

      productsByWordsToMatch = await Product.find({
        wordsToMatch: { $regex: filter, $options: "i" },
      });

      let searchFields = ['category', 'type', 'brand', 'fullname'];
      for (let field of searchFields) {
        let foundProducts = await Product.find({
          [field]: { $regex: filter, $options: "i" },
        });
        foundProducts.forEach((product) => {
          if (!productIds.has(product._id.toString())) {
            productIds.add(product._id.toString());
            products.push(product);
          }
        });
      }

      productsByWordsToMatch.forEach((element) => {
        if (!productIds.has(element._id.toString())) {
          productIds.add(element._id.toString());
          products.push(element);
        }
      });
    } else if (req.query.product) {
      let product = await Product.findOne({ name: req.query.product });
      if (product && !productIds.has(product._id.toString())) {
        productIds.add(product._id.toString());
        products.push(product);
      }
    } else {
      products = await Product.find();
    }

    res.send(products);
  } catch (error) {
    next(error);
  }
};

export default getProducts;
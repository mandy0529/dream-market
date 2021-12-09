// domain : domain/.netlify/functions/products
const Airtable = require('airtable-node');

const airtable = new Airtable({apiKey: process.env.API_KEY})
  .base(process.env.AIR_BASE)
  .table('products');

exports.handler = async (event, context, cb) => {
  const {id} = event.queryStringParameters;

  // single product api
  if (id) {
    try {
      const product = await airtable.retrieve(id);
      console.log(product, 'single product');

      if (product.error) {
        return {
          statusCode: 404,
          body: `no product with id ${id}`,
        };
      }

      const {
        id: singleProductId,
        fields: {img, price, description, category, stock, title},
      } = product;

      const image = img.map((item) => {
        const {id: imgId, url, filename} = item;
        return {imgId, url, filename};
      });

      const singleProduct = {
        singleProductId,
        title,
        category,
        description,
        price,
        stock,
        image,
      };

      return {
        statusCode: 200,
        body: JSON.stringify(singleProduct),
      };
    } catch (error) {
      return {
        statusCode: 500,
        body: 'single product server error',
      };
    }
  }

  // all products api
  try {
    const {records} = await airtable.list();
    const product = records.map((item) => {
      const {
        id,
        fields: {price, description, category, stock, title, img},
      } = item;

      const image = img.map((item) => {
        const {id: imgId, url, filename} = item;
        return {imgId, url, filename};
      });

      return {
        id,
        title,
        category,
        description,
        price,
        stock,
        img: image,
      };
    });

    return {
      statusCode: 200,
      body: JSON.stringify(product),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: 'all product server error',
    };
  }
};

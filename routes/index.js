const express = require('express');
const router = express.Router();
const checkoutResponse = require('../data/checkout.json');
const phoneInfo = require('../data/phone-info.json');
const franchises = require('../data/franchises.json');
const countries5GB = require('../data/countries-5gb.json');
const countries10GB = require('../data/countries-10gb.json');
const countries20GB = require('../data/countries-20gb.json');
const summary = require('../data/summary.json');

const delay = ms => new Promise(resolve => setTimeout(resolve, ms));

// Get checkout response
router.get('/checkout', async (req, res, next) => {
  res.json(checkoutResponse);
});
// Get user info
router.get('/product-info/phone/info',  async (req, res, next) => {
  res.json(phoneInfo);
});

// List franchises
router.get('/product-info/list/franquia-dados', async (req, res, next) => {
  res.json(franchises);
});

// Get franchise by id
router.get('/product-info/:id', async (req, res, next) => {
  const {id} = req.params;
  const franchise = franchises.find(({product_id}) => product_id === id);
  await delay(1000);
  res.json(franchise);
});

// Get countries by franchise id
router.get('/product-info/country/:franchiseId', async (req, res, next) => {
  const {franchiseId} = req.params;
  await delay(3000);
  switch (franchiseId) {
    case 'FRANQUIA5GB':
      res.json(countries5GB);
      break;
    case 'FRANQUIA10GB':
      res.json(countries10GB);
      break;
    case 'FRANQUIA20GB':
      res.json(countries20GB);
      break;
  }
});

// Delete all items from cart
router.delete('/shopping-cart/all', (req, res, next) => {
  res.json({});
});

// Delete item from cart
router.delete('/shopping-cart/entries/:productId', async (req, res, next) => {
  const {id} = req.params;
  await delay(1000);
  res.json({
    total_amount: {
      value: 29
    }
  });
});

// Get summary
router.get('/shopping-cart/summary/info', (req, res, next) => {
  res.json(summary);
});

// Create travel date
router.post('/shopping-cart/travel-date', async (req, res, next) => {
  await delay(1000);
  res.json({});
});

// Create entry
router.post('/shopping-cart/entries', async (req, res, next) => {
  await delay(1000);
  res.json({
    "total_amount": {
      "value": 100
    }
  });
});

module.exports = router;

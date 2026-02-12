import { lastMinuteDeals } from '../data/db.js';

export const getDeals = (req, res) => {
  const { search, sortBy } = req.query;
  
  let filtered = [...lastMinuteDeals];

  if (search) {
    const searchLower = search.toLowerCase();
    filtered = filtered.filter(d =>
      d.title.toLowerCase().includes(searchLower) ||
      d.destination.toLowerCase().includes(searchLower)
    );
  }

  if (sortBy === 'discount') {
    filtered.sort((a, b) => {
      const discountA = parseInt(a.discount);
      const discountB = parseInt(b.discount);
      return discountB - discountA;
    });
  }

  if (sortBy === 'price') {
    filtered.sort((a, b) => {
      const priceA = parseInt(a.discountedPrice.replace(/[^0-9]/g, ''));
      const priceB = parseInt(b.discountedPrice.replace(/[^0-9]/g, ''));
      return priceA - priceB;
    });
  }

  res.sendSuccess(filtered, 'Deals retrieved successfully');
};

export const getDealById = (req, res) => {
  const { id } = req.params;
  const deal = lastMinuteDeals.find(d => d.id === parseInt(id));

  if (!deal) {
    return res.sendError('Deal not found', 404);
  }

  res.sendSuccess({
    ...deal,
    description: 'Limited time offer - Book now!',
    hotelIncluded: true,
    mealsIncluded: true,
    transportIncluded: true
  }, 'Deal retrieved successfully');
};

export const getSpecialOffers = (req, res) => {
  // Return deals with highest discounts as special offers
  const specialOffers = [...lastMinuteDeals].sort((a, b) => {
    return parseInt(b.discount) - parseInt(a.discount);
  }).slice(0, 3);

  res.sendSuccess(specialOffers, 'Special offers retrieved successfully');
};

export const getHotDeals = (req, res) => {
  // Return deals ending soonest
  const hotDeals = [...lastMinuteDeals].filter(d => d.validity.includes('1 day'));
  
  if (hotDeals.length === 0) {
    return res.sendSuccess(lastMinuteDeals.slice(0, 2), 'Hot deals retrieved');
  }

  res.sendSuccess(hotDeals, 'Hot deals retrieved successfully');
};

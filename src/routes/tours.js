import { tourPackages } from '../data/db.js';

export const getTours = (req, res) => {
  const { search, duration, maxPrice, minPrice } = req.query;
  
  let filtered = [...tourPackages];

  if (search) {
    const searchLower = search.toLowerCase();
    filtered = filtered.filter(t =>
      t.name.toLowerCase().includes(searchLower) ||
      t.destinations.some(d => d.toLowerCase().includes(searchLower)) ||
      t.description.toLowerCase().includes(searchLower)
    );
  }

  if (duration) {
    filtered = filtered.filter(t => t.duration.includes(duration));
  }

  if (minPrice || maxPrice) {
    filtered = filtered.filter(t => {
      const price = parseInt(t.price.replace(/[^0-9]/g, ''));
      if (minPrice && price < parseInt(minPrice)) return false;
      if (maxPrice && price > parseInt(maxPrice)) return false;
      return true;
    });
  }

  res.sendSuccess(filtered, 'Tours retrieved successfully');
};

export const getTourById = (req, res) => {
  const { id } = req.params;
  const tour = tourPackages.find(t => t.id === parseInt(id));

  if (!tour) {
    return res.sendError('Tour not found', 404);
  }

  // Add related tours
  const related = tourPackages
    .filter(t => 
      t.destinations.some(d => tour.destinations.includes(d)) && 
      t.id !== tour.id
    )
    .slice(0, 3);

  res.sendSuccess({
    ...tour,
    relatedTours: related,
    itinerary: [
      { day: 1, title: 'Arrival', description: 'Arrive and settle in' },
      { day: 2, title: 'Main Attractions', description: 'Visit main attractions' },
      { day: 3, title: 'Exploration', description: 'Explore the region' }
    ]
  }, 'Tour retrieved successfully');
};

export const getToursByDestination = (req, res) => {
  const { destination } = req.params;
  const filtered = tourPackages.filter(t =>
    t.destinations.some(d => d.toLowerCase() === destination.toLowerCase())
  );

  if (filtered.length === 0) {
    return res.sendError('No tours found for this destination', 404);
  }

  res.sendSuccess(filtered, 'Tours for destination retrieved successfully');
};

export const searchTours = (req, res) => {
  const { query } = req.query;
  
  if (!query || query.trim() === '') {
    return res.sendError('Search query is required', 400);
  }

  const results = tourPackages.filter(t =>
    t.name.toLowerCase().includes(query.toLowerCase()) ||
    t.destinations.some(d => d.toLowerCase().includes(query.toLowerCase()))
  );

  res.sendSuccess(results, `Found ${results.length} tours`);
};

import { destinations } from '../data/db.js';

export const getDestinations = (req, res) => {
  const { search, rating, state } = req.query;
  
  let filtered = [...destinations];

  if (search) {
    const searchLower = search.toLowerCase();
    filtered = filtered.filter(d =>
      d.name.toLowerCase().includes(searchLower) ||
      d.state.toLowerCase().includes(searchLower) ||
      d.description.toLowerCase().includes(searchLower)
    );
  }

  if (rating) {
    const minRating = parseFloat(rating);
    filtered = filtered.filter(d => d.rating >= minRating);
  }

  if (state) {
    filtered = filtered.filter(d => d.state.toLowerCase() === state.toLowerCase());
  }

  res.sendSuccess(filtered, 'Destinations retrieved successfully');
};

export const getDestinationById = (req, res) => {
  const { id } = req.params;
  const destination = destinations.find(d => d.id === parseInt(id));

  if (!destination) {
    return res.sendError('Destination not found', 404);
  }

  // Add related destinations
  const related = destinations
    .filter(d => d.state === destination.state && d.id !== destination.id)
    .slice(0, 3);

  res.sendSuccess({
    ...destination,
    relatedDestinations: related
  }, 'Destination retrieved successfully');
};

export const getDestinationsByState = (req, res) => {
  const { state } = req.params;
  const filtered = destinations.filter(d => d.state.toLowerCase() === state.toLowerCase());

  if (filtered.length === 0) {
    return res.sendError('No destinations found for this state', 404);
  }

  res.sendSuccess(filtered, 'Destinations for state retrieved successfully');
};

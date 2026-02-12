import { testimonials } from '../data/db.js';

export const getTestimonials = (req, res) => {
  const { minRating, sort } = req.query;
  
  let filtered = [...testimonials];

  if (minRating) {
    const rating = parseInt(minRating);
    filtered = filtered.filter(t => t.rating >= rating);
  }

  if (sort === 'rating-high') {
    filtered.sort((a, b) => b.rating - a.rating);
  }

  if (sort === 'rating-low') {
    filtered.sort((a, b) => a.rating - b.rating);
  }

  res.sendSuccess(filtered, 'Testimonials retrieved successfully');
};

export const getTestimonialById = (req, res) => {
  const { id } = req.params;
  const testimonial = testimonials.find(t => t.id === parseInt(id));

  if (!testimonial) {
    return res.sendError('Testimonial not found', 404);
  }

  res.sendSuccess(testimonial, 'Testimonial retrieved successfully');
};

export const getTopRatedTestimonials = (req, res) => {
  const topRated = [...testimonials]
    .filter(t => t.rating >= 4)
    .sort((a, b) => b.rating - a.rating)
    .slice(0, 5);

  res.sendSuccess(topRated, 'Top rated testimonials retrieved');
};

export const submitTestimonial = (req, res) => {
  const { name, location, rating, text, destination } = req.body;

  if (!name || !location || !rating || !text || !destination) {
    return res.sendError('All fields are required', 400);
  }

  if (rating < 1 || rating > 5) {
    return res.sendError('Rating must be between 1 and 5', 400);
  }

  const newTestimonial = {
    id: testimonials.length + 1,
    name,
    location,
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300',
    rating,
    text,
    destination
  };

  testimonials.push(newTestimonial);

  res.sendSuccess(newTestimonial, 'Testimonial submitted successfully', 201);
};

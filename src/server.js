import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { corsMiddleware, errorHandler, responseFormatter } from './middleware/index.js';
import * as destinationRoutes from './routes/destinations.js';
import * as tourRoutes from './routes/tours.js';
import * as guideRoutes from './routes/guides.js';
import * as dealRoutes from './routes/deals.js';
import * as testimonialRoutes from './routes/testimonials.js';
import * as blogRoutes from './routes/blog.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(corsMiddleware);
app.use(responseFormatter);

// Health check route
app.get('/api/health', (req, res) => {
  res.sendSuccess({
    status: 'OK',
    timestamp: new Date().toISOString(),
    message: 'Travel Booking API is running'
  }, 'Server is healthy');
});

// ========== DESTINATIONS ROUTES ==========
app.get('/api/destinations', destinationRoutes.getDestinations);
app.get('/api/destinations/:id', destinationRoutes.getDestinationById);
app.get('/api/destinations/state/:state', destinationRoutes.getDestinationsByState);

// ========== TOURS ROUTES ==========
app.get('/api/tours', tourRoutes.getTours);
app.get('/api/tours/search', tourRoutes.searchTours);
app.get('/api/tours/:id', tourRoutes.getTourById);
app.get('/api/tours/destination/:destination', tourRoutes.getToursByDestination);

// ========== GUIDES ROUTES ==========
app.get('/api/guides', guideRoutes.getGuides);
app.get('/api/guides/specializations', guideRoutes.getSpecializations);
app.get('/api/guides/languages', guideRoutes.getAvailableLanguages);
app.get('/api/guides/specialization/:specialization', guideRoutes.getGuidesBySpecialization);
app.get('/api/guides/:id', guideRoutes.getGuideById);

// ========== DEALS ROUTES ==========
app.get('/api/deals', dealRoutes.getDeals);
app.get('/api/deals/special-offers', dealRoutes.getSpecialOffers);
app.get('/api/deals/hot-deals', dealRoutes.getHotDeals);
app.get('/api/deals/:id', dealRoutes.getDealById);

// ========== TESTIMONIALS ROUTES ==========
app.get('/api/testimonials', testimonialRoutes.getTestimonials);
app.get('/api/testimonials/top-rated', testimonialRoutes.getTopRatedTestimonials);
app.get('/api/testimonials/:id', testimonialRoutes.getTestimonialById);
app.post('/api/testimonials', testimonialRoutes.submitTestimonial);

// ========== BLOG ROUTES ==========
app.get('/api/blog', blogRoutes.getBlogPosts);
app.get('/api/blog/latest', blogRoutes.getLatestBlogPosts);
app.get('/api/blog/categories', blogRoutes.getBlogCategories);
app.get('/api/blog/search', blogRoutes.searchBlogPosts);
app.get('/api/blog/:id', blogRoutes.getBlogPostById);

// 404 handler
app.use((req, res) => {
  res.sendError('Route not found', 404);
});

// Error handling middleware
app.use(errorHandler);

// Start server
app.listen(PORT, () => {
  console.log(`🚀 Travel Booking API Server is running on http://localhost:${PORT}`);
  console.log(`📍 Health check: http://localhost:${PORT}/api/health`);
  console.log(`📚 API Documentation: Available at /api endpoints`);
});

export default app;

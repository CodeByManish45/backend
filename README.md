# Travel Booking Backend API

A comprehensive RESTful API for a travel booking platform built with Node.js and Express.

## Features

- ✅ Destinations Management API
- ✅ Tour Packages Management API  
- ✅ Tour Guides Management API
- ✅ Deals & Offers API
- ✅ Testimonials API
- ✅ Blog Posts API
- ✅ Search and Filter Functionality
- ✅ CORS Enabled for Frontend Integration
- ✅ Standardized Response Format

## Project Structure

```
backend/
├── src/
│   ├── server.js              # Main Express server
│   ├── middleware/
│   │   └── index.js           # CORS, error handling, response formatter
│   ├── routes/
│   │   ├── destinations.js    # Destination endpoints
│   │   ├── tours.js           # Tour package endpoints
│   │   ├── guides.js          # Guide endpoints
│   │   ├── deals.js           # Deals endpoints
│   │   ├── testimonials.js    # Testimonial endpoints
│   │   └── blog.js            # Blog post endpoints
│   └── data/
│       └── db.js              # Mock database
├── package.json
├── .env                       # Environment variables
└── README.md
```

## Installation

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Setup Steps

1. Navigate to backend directory:
```bash
cd backend
```

2. Install dependencies:
```bash
npm install
```

3. Create `.env` file (already created):
```
PORT=5000
NODE_ENV=development
```

4. Start the server:
```bash
npm run dev
```

The server will run on `http://localhost:5000`

## API Endpoints

### Health Check
- `GET /api/health` - Check API health status

### Destinations
- `GET /api/destinations` - Get all destinations with optional filters
- `GET /api/destinations/:id` - Get destination details by ID
- `GET /api/destinations/state/:state` - Get destinations by state

Query Parameters:
- `search` - Search destinations by name, state, or description
- `rating` - Filter by minimum rating (e.g., 4.5)
- `state` - Filter by state name

Example:
```
GET /api/destinations?search=taj&rating=4.5
```

### Tours
- `GET /api/tours` - Get all tour packages with optional filters
- `GET /api/tours/:id` - Get tour details by ID
- `GET /api/tours/destination/:destination` - Get tours by destination
- `GET /api/tours/search` - Search tours

Query Parameters:
- `search` - Search tours by name or destination
- `duration` - Filter by duration (e.g., "5 Days / 4 Nights")
- `minPrice`, `maxPrice` - Filter by price range

Example:
```
GET /api/tours?search=golden&duration=5 Days
```

### Guides
- `GET /api/guides` - Get all guides with optional filters
- `GET /api/guides/:id` - Get guide details by ID
- `GET /api/guides/specializations` - Get all specializations
- `GET /api/guides/languages` - Get available languages
- `GET /api/guides/specialization/:specialization` - Get guides by specialization

Query Parameters:
- `search` - Search guides by name or specialization
- `specialization` - Filter by specialization
- `language` - Filter by language

Example:
```
GET /api/guides?specialization=Adventure+Trekking
```

### Deals
- `GET /api/deals` - Get all deals
- `GET /api/deals/:id` - Get deal by ID
- `GET /api/deals/special-offers` - Get top special offers
- `GET /api/deals/hot-deals` - Get deals ending soon

Query Parameters:
- `search` - Search deals by title or destination
- `sortBy` - Sort by "discount" or "price"

### Testimonials
- `GET /api/testimonials` - Get all testimonials
- `GET /api/testimonials/:id` - Get testimonial by ID
- `GET /api/testimonials/top-rated` - Get top-rated testimonials
- `POST /api/testimonials` - Submit new testimonial

Query Parameters:
- `minRating` - Filter by minimum rating
- `sort` - Sort by "rating-high" or "rating-low"

Request body for POST:
```json
{
  "name": "John Doe",
  "location": "USA",
  "rating": 5,
  "text": "Amazing experience!",
  "destination": "Golden Triangle Tour"
}
```

### Blog
- `GET /api/blog` - Get all blog posts
- `GET /api/blog/:id` - Get blog post by ID
- `GET /api/blog/latest` - Get latest blog posts
- `GET /api/blog/categories` - Get all categories
- `GET /api/blog/search` - Search blog posts

Query Parameters:
- `search` - Search by title, excerpt, or content
- `category` - Filter by category
- `limit` - Limit number of results
- `query` - Search term (for /search endpoint)

## Response Format

All API responses follow a standardized format:

### Success Response (200)
```json
{
  "success": true,
  "message": "Success message",
  "data": {
    // Response data
  }
}
```

### Error Response (4xx/5xx)
```json
{
  "success": false,
  "message": "Error message",
  "data": null
}
```

## CORS Configuration

The API is configured to accept requests from any origin. This can be modified in `src/middleware/index.js`:

```javascript
res.header('Access-Control-Allow-Origin', '*'); // Change '*' to specific origin
```

## Environment Variables

Create a `.env` file in the root:

```
PORT=5000              # Server port
NODE_ENV=development   # Environment (development/production)
```

## Development

### Available Scripts

- `npm run dev` - Start server with auto-reload (using Node watch mode)
- `npm start` - Start server in production mode

### Adding New Endpoints

1. Create a route file in `src/routes/`
2. Export handler functions
3. Import and register in `src/server.js`

Example:
```javascript
// src/routes/newFeature.js
export const getNewFeature = (req, res) => {
  // Handler logic
  res.sendSuccess(data, 'Success message');
};
```

```javascript
// In src/server.js
import * as newFeatureRoutes from './routes/newFeature.js';
app.get('/api/new-feature', newFeatureRoutes.getNewFeature);
```

## Testing with curl

```bash
# Health check
curl http://localhost:5000/api/health

# Get all destinations
curl http://localhost:5000/api/destinations

# Get specific destination
curl http://localhost:5000/api/destinations/1

# Search tours
curl "http://localhost:5000/api/tours?search=golden"

# Get guides by specialization
curl "http://localhost:5000/api/guides?specialization=Heritage+%26+History"
```

## Frontend Integration

The frontend is configured to connect to this API. Update the API URL in the frontend `.env`:

```
VITE_API_URL=http://localhost:5000/api
```

See `src/utils/api.js` for the API client implementation.

## Troubleshooting

### Port Already in Use
Change the PORT in `.env`:
```
PORT=5001
```

### CORS Errors
Ensure the API server is running and CORS is properly configured.

### No Data Returned
- Check the API endpoint URL
- Verify the request parameters
- Check the server console for errors

## Future Enhancements

- [ ] Database integration (MongoDB/PostgreSQL)
- [ ] User authentication (JWT)
- [ ] Booking management
- [ ] Payment processing
- [ ] Email notifications
- [ ] Admin dashboard API
- [ ] Advanced search with Elasticsearch

## License

MIT

## Support

For issues and questions, please contact the development team.

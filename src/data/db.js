// Mock database for the travel booking application
export const destinations = [
  {
    id: 1,
    name: 'Taj Mahal, Agra',
    state: 'Uttar Pradesh',
    image: 'https://images.unsplash.com/photo-1585403132915-c3400ca199e7?w=800',
    description: 'The symbol of love and one of the Seven Wonders of the World',
    rating: 4.9,
    reviews: 2345,
    price: 'From ₹5,000',
    shortDesc: 'Iconic white marble mausoleum'
  },
  {
    id: 2,
    name: 'Jaipur City Palace',
    state: 'Rajasthan',
    image: 'https://images.unsplash.com/photo-1599661046289-e31897846ca8?w=800',
    description: 'The Pink City with stunning palaces and vibrant culture',
    rating: 4.7,
    reviews: 1890,
    price: 'From ₹4,500',
    shortDesc: 'Architectural marvel in the Pink City'
  },
  {
    id: 3,
    name: 'Varanasi Ghats',
    state: 'Uttar Pradesh',
    image: 'https://images.unsplash.com/photo-1512070679280-08b17f5548f4?w=800',
    description: 'Spiritual and cultural heart of India',
    rating: 4.6,
    reviews: 1567,
    price: 'From ₹3,500',
    shortDesc: 'Sacred ghats along the Ganges River'
  },
  {
    id: 4,
    name: 'Goa Beaches',
    state: 'Goa',
    image: 'https://images.unsplash.com/photo-1599661046289-e31897846ca8?w=800',
    description: 'Tropical paradise with golden beaches',
    rating: 4.8,
    reviews: 2100,
    price: 'From ₹6,000',
    shortDesc: 'Sun, sand, and sea adventure'
  },
  {
    id: 5,
    name: 'Kerala Backwaters',
    state: 'Kerala',
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800',
    description: 'Serene backwaters and houseboat experience',
    rating: 4.9,
    reviews: 2050,
    price: 'From ₹7,000',
    shortDesc: 'Tranquil water and natural beauty'
  },
  {
    id: 6,
    name: 'Manali Mountain Resort',
    state: 'Himachal Pradesh',
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800',
    description: 'Adventure and mountain beauty combined',
    rating: 4.7,
    reviews: 1678,
    price: 'From ₹8,000',
    shortDesc: 'Adventure hub in the mountains'
  },
  {
    id: 7,
    name: 'Udaipur City of Lakes',
    state: 'Rajasthan',
    image: 'https://images.unsplash.com/photo-1516105645335-a7f63c90ab1f?w=800',
    description: 'Romantic destination with stunning architecture',
    rating: 4.8,
    reviews: 1923,
    price: 'From ₹5,500',
    shortDesc: 'Venice of India - city of palaces'
  },
  {
    id: 8,
    name: 'Darjeeling Tea Gardens',
    state: 'West Bengal',
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800',
    description: 'Famous tea gardens with scenic views',
    rating: 4.6,
    reviews: 1289,
    price: 'From ₹4,000',
    shortDesc: 'Tea plantations and mountain views'
  }
];

export const tourPackages = [
  {
    id: 1,
    name: 'Golden Triangle Tour',
    duration: '5 Days / 4 Nights',
    destinations: ['Delhi', 'Agra', 'Jaipur'],
    price: '₹15,999',
    originalPrice: '₹24,999',
    image: 'https://images.unsplash.com/photo-1585403132915-c3400ca199e7?w=800',
    rating: 4.8,
    reviews: 456,
    includes: ['Hotel', 'Breakfast', 'Guided Tours', 'Transport'],
    description: 'Explore the iconic Golden Triangle covering Taj Mahal, Red Fort, and City Palace'
  },
  {
    id: 2,
    name: 'Rajasthan Royal Tour',
    duration: '7 Days / 6 Nights',
    destinations: ['Jaipur', 'Jodhpur', 'Udaipur'],
    price: '₹22,999',
    originalPrice: '₹35,999',
    image: 'https://images.unsplash.com/photo-1599661046289-e31897846ca8?w=800',
    rating: 4.7,
    reviews: 342,
    includes: ['Hotel', 'All Meals', 'Palace Tours', 'Camel Safari'],
    description: 'Experience the royal heritage and desert culture of Rajasthan'
  },
  {
    id: 3,
    name: 'Kerala Backwater Paradise',
    duration: '6 Days / 5 Nights',
    destinations: ['Kochi', 'Alleppey', 'Munnar'],
    price: '₹18,999',
    originalPrice: '₹28,999',
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800',
    rating: 4.9,
    reviews: 523,
    includes: ['Houseboat', 'Resort', 'Backwater Cruise', 'Tea Estate Tour'],
    description: 'Relax in the serene backwaters and lush green landscapes'
  },
  {
    id: 4,
    name: 'Goa Beach Holiday',
    duration: '4 Days / 3 Nights',
    destinations: ['Goa'],
    price: '₹12,999',
    originalPrice: '₹19,999',
    image: 'https://images.unsplash.com/photo-1599661046289-e31897846ca8?w=800',
    rating: 4.6,
    reviews: 389,
    includes: ['Beach Resort', 'Water Sports', 'Sunset Cruise', 'Local Tours'],
    description: 'Enjoy sun, sand, and adventure in tropical Goa'
  },
  {
    id: 5,
    name: 'Himalayan Adventure',
    duration: '8 Days / 7 Nights',
    destinations: ['Manali', 'Leh', 'Ladakh'],
    price: '₹28,999',
    originalPrice: '₹42,999',
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800',
    rating: 4.8,
    reviews: 287,
    includes: ['Mountain Resort', 'Trekking', 'Adventure Activities', 'Scenic Drives'],
    description: 'Thrilling mountain adventure with adventure activities and stunning landscapes'
  },
  {
    id: 6,
    name: 'Spiritual India Journey',
    duration: '5 Days / 4 Nights',
    destinations: ['Varanasi', 'Bodhgaya', 'Sarnath'],
    price: '₹11,999',
    originalPrice: '₹18,999',
    image: 'https://images.unsplash.com/photo-1512070679280-08b17f5548f4?w=800',
    rating: 4.7,
    reviews: 312,
    includes: ['Spiritual Stays', 'Guided Tours', 'Meditation', 'Aarti Ceremony'],
    description: 'Connect with the spiritual heart of India'
  }
];

export const lastMinuteDeals = [
  {
    id: 1,
    title: 'Surprise Weekend Getaway',
    originalPrice: '₹18,000',
    discountedPrice: '₹8,999',
    discount: '50%',
    validity: 'Ends in 2 days',
    destination: 'Goa',
    duration: '3 Days'
  },
  {
    id: 2,
    title: 'Agra Express Deal',
    originalPrice: '₹12,000',
    discountedPrice: '₹6,499',
    discount: '46%',
    validity: 'Ends in 1 day',
    destination: 'Agra',
    duration: '2 Days'
  },
  {
    id: 3,
    title: 'Jaipur City Break',
    originalPrice: '₹15,000',
    discountedPrice: '₹7,999',
    discount: '47%',
    validity: 'Ends in 3 days',
    destination: 'Jaipur',
    duration: '2 Days'
  },
  {
    id: 4,
    title: 'Backwater Bliss',
    originalPrice: '₹22,000',
    discountedPrice: '₹11,999',
    discount: '45%',
    validity: 'Ends in 2 days',
    destination: 'Kerala',
    duration: '4 Days'
  }
];

export const guides = [
  {
    id: 1,
    name: 'Rajesh Kumar',
    specialization: 'Heritage & History',
    experience: '12 Years',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300',
    languages: ['English', 'Hindi', 'Spanish'],
    rating: 4.9,
    reviews: 234,
    bio: 'Expert guide for historical monuments and ancient Indian history'
  },
  {
    id: 2,
    name: 'Priya Sharma',
    specialization: 'Adventure & Trekking',
    experience: '8 Years',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300',
    languages: ['English', 'Hindi', 'French'],
    rating: 4.8,
    reviews: 198,
    bio: 'Professional trekking guide for mountain expeditions and adventure activities'
  },
  {
    id: 3,
    name: 'Arun Patel',
    specialization: 'Ayurveda & Wellness',
    experience: '15 Years',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=300',
    languages: ['English', 'Hindi', 'German'],
    rating: 4.7,
    reviews: 187,
    bio: 'Certified Ayurveda practitioner and wellness expert'
  },
  {
    id: 4,
    name: 'Neha Singh',
    specialization: 'Cultural Tours',
    experience: '10 Years',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300',
    languages: ['English', 'Hindi', 'Portuguese'],
    rating: 4.9,
    reviews: 221,
    bio: 'Cultural heritage specialist with deep knowledge of Indian traditions'
  }
];

export const testimonials = [
  {
    id: 1,
    name: 'Sarah Thompson',
    location: 'USA',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=300',
    rating: 5,
    text: 'Amazing experience! The Golden Triangle tour was perfectly organized. All guides were professional and friendly.',
    destination: 'Golden Triangle Tour'
  },
  {
    id: 2,
    name: 'Michel Dubois',
    location: 'France',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300',
    rating: 5,
    text: 'Incredible value for money. The Kerala backwaters experience was unforgettable and truly magical.',
    destination: 'Kerala Backwater Paradise'
  },
  {
    id: 3,
    name: 'Emma Wilson',
    location: 'UK',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300',
    rating: 4,
    text: 'Great tour package with excellent customer service. Would definitely recommend to friends!',
    destination: 'Rajasthan Royal Tour'
  },
  {
    id: 4,
    name: 'Carlos Rodriguez',
    location: 'Spain',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=300',
    rating: 5,
    text: 'Best trip of my life! The Himalayan adventure was thrilling and safe. Highly recommended!',
    destination: 'Himalayan Adventure'
  }
];

export const blogPosts = [
  {
    id: 1,
    title: 'Top 10 Reasons to Visit India in 2026',
    author: 'Travel Expert',
    date: 'Mar 15, 2026',
    category: 'Travel Guide',
    image: 'https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=800',
    excerpt: 'Discover why India should be on your travel bucket list...',
    content: 'India is a country of incredible diversity, culture, and adventure. From the snow-capped Himalayas to the tropical beaches of Goa, India offers something for everyone. Visit iconic landmarks, experience world-class hospitality, and immerse yourself in rich traditions.'
  },
  {
    id: 2,
    title: 'Best Time to Visit India\'s Destinations',
    author: 'Weather Guide',
    date: 'Mar 12, 2026',
    category: 'Travel Tips',
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800',
    excerpt: 'Learn about the best seasons to visit India...',
    content: 'October to March is the best time to visit most Indian destinations. The weather is pleasant, ideal for outdoor activities and sightseeing. Avoid the summer months (April-June) as it can be extremely hot and the monsoon season (July-September) brings heavy rainfall.'
  },
  {
    id: 3,
    title: 'Must-Try Indian Cuisines Around the Country',
    author: 'Food Blogger',
    date: 'Mar 10, 2026',
    category: 'Food & Culture',
    image: 'https://images.unsplash.com/photo-1588166524941-3bf0c00748d4?w=800',
    excerpt: 'Explore the diverse flavors of India...',
    content: 'Indian cuisine is as diverse as the country itself. Each region has its own unique flavors and cooking styles. From North Indian curries to South Indian dosas, from Goan seafood to Rajasthani dal, every destination offers a culinary adventure.'
  },
  {
    id: 4,
    title: 'Budget Travel Tips for India',
    author: 'Budget Traveler',
    date: 'Mar 8, 2026',
    category: 'Travel Tips',
    image: 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=800',
    excerpt: 'Travel India on a budget without compromising on experience...',
    content: 'India is incredibly budget-friendly. You can stay in comfortable accommodations, eat delicious food, and explore amazing destinations without spending too much. Book tours in advance, travel during off-season, and use local transport for best deals.'
  }
];

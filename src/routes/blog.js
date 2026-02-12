import { blogPosts } from '../data/db.js';

export const getBlogPosts = (req, res) => {
  const { category, search, limit } = req.query;
  
  let filtered = [...blogPosts];

  if (search) {
    const searchLower = search.toLowerCase();
    filtered = filtered.filter(b =>
      b.title.toLowerCase().includes(searchLower) ||
      b.excerpt.toLowerCase().includes(searchLower) ||
      b.content.toLowerCase().includes(searchLower)
    );
  }

  if (category) {
    filtered = filtered.filter(b =>
      b.category.toLowerCase() === category.toLowerCase()
    );
  }

  if (limit) {
    filtered = filtered.slice(0, parseInt(limit));
  }

  res.sendSuccess(filtered, 'Blog posts retrieved successfully');
};

export const getBlogPostById = (req, res) => {
  const { id } = req.params;
  const post = blogPosts.find(b => b.id === parseInt(id));

  if (!post) {
    return res.sendError('Blog post not found', 404);
  }

  // Add related posts
  const related = blogPosts
    .filter(b => b.category === post.category && b.id !== post.id)
    .slice(0, 3);

  res.sendSuccess({
    ...post,
    relatedPosts: related
  }, 'Blog post retrieved successfully');
};

export const getBlogCategories = (req, res) => {
  const categories = [...new Set(blogPosts.map(b => b.category))];
  res.sendSuccess(categories, 'Categories retrieved successfully');
};

export const getLatestBlogPosts = (req, res) => {
  const latest = [...blogPosts]
    .sort((a, b) => new Date(b.date) - new Date(a.date))
    .slice(0, 5);

  res.sendSuccess(latest, 'Latest blog posts retrieved');
};

export const searchBlogPosts = (req, res) => {
  const { query } = req.query;

  if (!query || query.trim() === '') {
    return res.sendError('Search query is required', 400);
  }

  const results = blogPosts.filter(b =>
    b.title.toLowerCase().includes(query.toLowerCase()) ||
    b.excerpt.toLowerCase().includes(query.toLowerCase()) ||
    b.content.toLowerCase().includes(query.toLowerCase())
  );

  res.sendSuccess(results, `Found ${results.length} blog posts`);
};

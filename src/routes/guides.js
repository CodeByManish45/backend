import { guides } from '../data/db.js';

export const getGuides = (req, res) => {
  const { specialization, language, search } = req.query;
  
  let filtered = [...guides];

  if (search) {
    const searchLower = search.toLowerCase();
    filtered = filtered.filter(g =>
      g.name.toLowerCase().includes(searchLower) ||
      g.specialization.toLowerCase().includes(searchLower) ||
      g.bio.toLowerCase().includes(searchLower)
    );
  }

  if (specialization) {
    filtered = filtered.filter(g =>
      g.specialization.toLowerCase() === specialization.toLowerCase()
    );
  }

  if (language) {
    filtered = filtered.filter(g =>
      g.languages.some(l => l.toLowerCase() === language.toLowerCase())
    );
  }

  res.sendSuccess(filtered, 'Guides retrieved successfully');
};

export const getGuideById = (req, res) => {
  const { id } = req.params;
  const guide = guides.find(g => g.id === parseInt(id));

  if (!guide) {
    return res.sendError('Guide not found', 404);
  }

  // Add related guides by specialization
  const related = guides
    .filter(g => g.specialization === guide.specialization && g.id !== guide.id)
    .slice(0, 2);

  res.sendSuccess({
    ...guide,
    relatedGuides: related,
    availability: {
      nextAvailable: '2026-03-20',
      hourlyRate: '₹500',
      dailyRate: '₹3000',
      reviews: [
        { rating: 5, comment: 'Excellent guide, very knowledgeable' },
        { rating: 5, comment: 'Best experience ever' }
      ]
    }
  }, 'Guide retrieved successfully');
};

export const getGuidesBySpecialization = (req, res) => {
  const { specialization } = req.params;
  const filtered = guides.filter(g =>
    g.specialization.toLowerCase() === specialization.toLowerCase()
  );

  if (filtered.length === 0) {
    return res.sendError('No guides found for this specialization', 404);
  }

  res.sendSuccess(filtered, 'Guides retrieved successfully');
};

export const getAvailableLanguages = (req, res) => {
  const languages = [...new Set(guides.flatMap(g => g.languages))];
  res.sendSuccess(languages, 'Available languages retrieved');
};

export const getSpecializations = (req, res) => {
  const specializations = [...new Set(guides.map(g => g.specialization))];
  res.sendSuccess(specializations, 'Specializations retrieved');
};

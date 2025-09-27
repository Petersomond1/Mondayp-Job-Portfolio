// Search database mapping skills/technologies to portfolio locations
export const searchDatabase = [
  // Frontend Technologies
  { term: "React", location: "Skills Cards - Hearts Ace", link: "#cards-section", cardSuit: "hearts", description: "Modern React development with hooks and state management" },
  { term: "React.js", location: "Skills Cards - Hearts Ace", link: "#cards-section", cardSuit: "hearts", description: "Modern React development with hooks and state management" },
  { term: "JavaScript", location: "Skills Cards - Hearts Jack", link: "#cards-section", cardSuit: "hearts", description: "ES6+, async/await, DOM manipulation" },
  { term: "ES6", location: "Skills Cards - Hearts Jack", link: "#cards-section", cardSuit: "hearts", description: "Modern JavaScript features and syntax" },
  { term: "CSS", location: "Skills Cards - Hearts Queen", link: "#cards-section", cardSuit: "hearts", description: "Responsive design and modern CSS frameworks" },
  { term: "Tailwind", location: "Skills Cards - Hearts Queen", link: "#cards-section", cardSuit: "hearts", description: "Utility-first CSS framework" },
  { term: "HTML5", location: "Skills Cards - Hearts King", link: "#cards-section", cardSuit: "hearts", description: "Semantic markup and modern web standards" },
  { term: "Frontend", location: "Skills Cards - Hearts Suite", link: "#cards-section", cardSuit: "hearts", description: "All frontend technologies and skills" },

  // Backend Technologies
  { term: "Node.js", location: "Skills Cards - Spades Ace", link: "#cards-section", cardSuit: "spades", description: "Server-side JavaScript development" },
  { term: "Express", location: "Skills Cards - Spades Ace", link: "#cards-section", cardSuit: "spades", description: "Web framework for Node.js" },
  { term: "Database", location: "Skills Cards - Spades Jack", link: "#cards-section", cardSuit: "spades", description: "MongoDB, MySQL, database design" },
  { term: "MongoDB", location: "Skills Cards - Spades Jack", link: "#cards-section", cardSuit: "spades", description: "NoSQL database management" },
  { term: "MySQL", location: "Skills Cards - Spades Jack", link: "#cards-section", cardSuit: "spades", description: "Relational database management" },
  { term: "SQL", location: "Skills Cards - Spades Jack", link: "#cards-section", cardSuit: "spades", description: "Database querying and management" },
  { term: "AWS", location: "Skills Cards - Spades Queen", link: "#cards-section", cardSuit: "spades", description: "Cloud deployment and infrastructure" },
  { term: "Cloud", location: "Skills Cards - Spades Queen", link: "#cards-section", cardSuit: "spades", description: "Cloud services and deployment" },
  { term: "API", location: "Skills Cards - Spades King", link: "#cards-section", cardSuit: "spades", description: "RESTful APIs and authentication" },
  { term: "REST", location: "Skills Cards - Spades King", link: "#cards-section", cardSuit: "spades", description: "RESTful API development" },
  { term: "Authentication", location: "Skills Cards - Spades King", link: "#cards-section", cardSuit: "spades", description: "JWT and secure backend practices" },
  { term: "Backend", location: "Skills Cards - Spades Suite", link: "#cards-section", cardSuit: "spades", description: "All backend technologies and skills" },

  // Projects
  { term: "E-Commerce", location: "Projects Cards - Diamonds Ace", link: "#cards-section", cardSuit: "diamonds", description: "Full-stack shopping platform" },
  { term: "Shopping", location: "Projects Cards - Diamonds Ace", link: "#cards-section", cardSuit: "diamonds", description: "E-commerce application with payment integration" },
  { term: "Payment", location: "Projects Cards - Diamonds Ace", link: "#cards-section", cardSuit: "diamonds", description: "Payment integration and processing" },
  { term: "Task Manager", location: "Projects Cards - Diamonds Jack", link: "#cards-section", cardSuit: "diamonds", description: "React-based productivity application" },
  { term: "Productivity", location: "Projects Cards - Diamonds Jack", link: "#cards-section", cardSuit: "diamonds", description: "Task management and team collaboration" },
  { term: "Portfolio", location: "Projects Cards - Diamonds Queen", link: "#cards-section", cardSuit: "diamonds", description: "This responsive portfolio website" },
  { term: "Weather App", location: "Projects Cards - Diamonds King", link: "#cards-section", cardSuit: "diamonds", description: "API-integrated weather application" },
  { term: "Projects", location: "Projects Cards - Diamonds Suite", link: "#cards-section", cardSuit: "diamonds", description: "All project demonstrations" },

  // Experience & Soft Skills
  { term: "Leadership", location: "Experience Cards - Clubs Ace", link: "#cards-section", cardSuit: "clubs", description: "Team leadership and mentoring" },
  { term: "Team Lead", location: "Experience Cards - Clubs Ace", link: "#cards-section", cardSuit: "clubs", description: "Leading development teams" },
  { term: "Mentoring", location: "Experience Cards - Clubs Ace", link: "#cards-section", cardSuit: "clubs", description: "Mentoring junior developers" },
  { term: "Client Relations", location: "Experience Cards - Clubs Jack", link: "#cards-section", cardSuit: "clubs", description: "Client communication and project delivery" },
  { term: "Communication", location: "Experience Cards - Clubs Jack", link: "#cards-section", cardSuit: "clubs", description: "Client and stakeholder communication" },
  { term: "Code Review", location: "Experience Cards - Clubs Queen", link: "#cards-section", cardSuit: "clubs", description: "Code quality and best practices" },
  { term: "Best Practices", location: "Experience Cards - Clubs Queen", link: "#cards-section", cardSuit: "clubs", description: "Development standards and practices" },
  { term: "Agile", location: "Experience Cards - Clubs King", link: "#cards-section", cardSuit: "clubs", description: "Agile methodology and sprint planning" },
  { term: "Scrum", location: "Experience Cards - Clubs King", link: "#cards-section", cardSuit: "clubs", description: "Scrum framework and iterative development" },
  { term: "Experience", location: "Experience Cards - Clubs Suite", link: "#cards-section", cardSuit: "clubs", description: "All professional experience" },

  // Additional Navigation Links
  { term: "Home", location: "Home Section", link: "#home", description: "Portfolio homepage and introduction" },
  { term: "About", location: "About Section", link: "#about", description: "About me and background" },
  { term: "Skills", location: "Skills Cards Section", link: "#cards-section", description: "Technical skills and expertise" },
  { term: "Contact", location: "Contact Section", link: "#contact", description: "Contact information and links" },
  { term: "Resume", location: "Resume/CV Section", link: "#resume", description: "Download resume or CV" },
  { term: "GitHub", location: "Portfolio Links", link: "#contact", description: "GitHub repositories and projects" },
  { term: "LinkedIn", location: "Social Links", link: "#contact", description: "Professional LinkedIn profile" },

  // Technical Skills
  { term: "Git", location: "Version Control Skills", link: "#cards-section", description: "Version control and collaboration" },
  { term: "GitHub", location: "Version Control Skills", link: "#cards-section", description: "Code repository management" },
  { term: "Responsive Design", location: "CSS Skills - Hearts Queen", link: "#cards-section", cardSuit: "hearts", description: "Mobile-first responsive development" },
  { term: "Mobile", location: "CSS Skills - Hearts Queen", link: "#cards-section", cardSuit: "hearts", description: "Mobile application development" },
  { term: "Testing", location: "Development Practices", link: "#cards-section", description: "Unit testing and quality assurance" },
  { term: "Debugging", location: "Development Practices", link: "#cards-section", description: "Problem solving and debugging" },
  { term: "Performance", location: "Optimization Skills", link: "#cards-section", description: "Performance optimization and tuning" },
  { term: "Security", location: "Backend Security", link: "#cards-section", cardSuit: "spades", description: "Security best practices and implementation" },

  // Frameworks and Libraries
  { term: "Express.js", location: "Backend Framework - Spades", link: "#cards-section", cardSuit: "spades", description: "Node.js web framework" },
  { term: "Bootstrap", location: "CSS Framework Skills", link: "#cards-section", cardSuit: "hearts", description: "CSS framework for responsive design" },
  { term: "jQuery", location: "JavaScript Libraries", link: "#cards-section", cardSuit: "hearts", description: "DOM manipulation library" },
  { term: "Webpack", location: "Build Tools", link: "#cards-section", description: "Module bundling and build optimization" },
  { term: "NPM", location: "Package Management", link: "#cards-section", description: "Node package management" },

  // Database Management
  { term: "Database Design", location: "Database Skills - Spades Jack", link: "#cards-section", cardSuit: "spades", description: "Database architecture and design" },
  { term: "Indexing", location: "Database Optimization - Spades Jack", link: "#cards-section", cardSuit: "spades", description: "Database performance optimization" },
  { term: "Queries", location: "Database Skills - Spades Jack", link: "#cards-section", cardSuit: "spades", description: "Complex database queries and optimization" },

  // Deployment and DevOps
  { term: "Deployment", location: "Cloud Skills - Spades Queen", link: "#cards-section", cardSuit: "spades", description: "Application deployment and hosting" },
  { term: "Serverless", location: "Cloud Architecture - Spades Queen", link: "#cards-section", cardSuit: "spades", description: "Serverless functions and architecture" },
  { term: "CI/CD", location: "DevOps Practices", link: "#cards-section", description: "Continuous integration and deployment" },
  { term: "Docker", location: "Containerization Skills", link: "#cards-section", description: "Container technology and deployment" }
];

// Function to search through the database
export const searchSkills = (searchTerm) => {
  if (!searchTerm || searchTerm.length < 2) return [];

  const lowercaseSearch = searchTerm.toLowerCase();

  return searchDatabase.filter(item =>
    item.term.toLowerCase().includes(lowercaseSearch) ||
    item.description.toLowerCase().includes(lowercaseSearch) ||
    item.location.toLowerCase().includes(lowercaseSearch)
  ).slice(0, 8); // Limit to 8 results for better UX
};

// Function to get exact matches first, then partial matches
export const searchSkillsRanked = (searchTerm) => {
  if (!searchTerm || searchTerm.length < 2) return [];

  const lowercaseSearch = searchTerm.toLowerCase();

  // Exact matches first
  const exactMatches = searchDatabase.filter(item =>
    item.term.toLowerCase() === lowercaseSearch
  );

  // Partial matches
  const partialMatches = searchDatabase.filter(item =>
    item.term.toLowerCase() !== lowercaseSearch &&
    (item.term.toLowerCase().includes(lowercaseSearch) ||
     item.description.toLowerCase().includes(lowercaseSearch))
  );

  return [...exactMatches, ...partialMatches].slice(0, 8);
};
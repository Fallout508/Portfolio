
import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Mail, Phone, Instagram, Search } from "lucide-react";

// Profile information
const profileInfo = {
  name: "Freelance Developer",
  email: "jaydogvermont@gmail.com",
  phone: "+238 983 4323",
  instagram: "@thereallemonsqueeze",
  experience: "10+ years",
  profileImage: "/lovable-uploads/25598825-54ef-490d-b8ea-37a72c310592.png"
};

// Portfolio projects
const allProjects = [
  {
    id: "finance-assistant",
    title: "AI-Powered Personal Finance Assistant",
    description: "An intelligent application that analyzes spending patterns, optimizes investments, and provides personalized financial advice.",
    longDescription: "This AI-powered finance assistant uses machine learning algorithms to analyze user spending habits, identify savings opportunities, and provide tailored investment recommendations. The platform includes intuitive dashboards, automated expense categorization, and predictive analytics to help users achieve their financial goals.",
    image: "https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
    category: "AI & Finance",
    technologies: ["React", "Python", "TensorFlow", "MongoDB", "AWS"],
    features: [
      "Personalized financial insights and recommendations",
      "Automated expense tracking and categorization",
      "Investment portfolio analysis and optimization",
      "Goal-based savings plans and progress tracking",
      "Secure data integration with banking institutions"
    ]
  },
  {
    id: "health-tech",
    title: "Health Tech Platform",
    description: "A comprehensive platform that combines wearable data, medical records, and AI to create personalized health recommendations.",
    longDescription: "This health technology platform integrates data from wearable devices, electronic health records, and user inputs to provide a holistic view of individual health. The system uses advanced AI algorithms to analyze patterns, predict potential health issues, and offer personalized recommendations for improving wellness outcomes.",
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
    category: "Healthcare",
    technologies: ["React Native", "Node.js", "Python", "PostgreSQL", "Google Cloud"],
    features: [
      "Wearable device integration and data synchronization",
      "Electronic health record access and management",
      "AI-powered health analytics and predictive diagnostics",
      "Personalized health recommendations and action plans",
      "Secure and compliant medical data handling"
    ]
  },
  {
    id: "workflow-automation",
    title: "Enterprise Workflow Automation",
    description: "A suite of tools that automate repetitive business processes, increasing efficiency and reducing human error.",
    longDescription: "This enterprise workflow automation system streamlines business operations by automating routine tasks, approval processes, and document management. With custom workflows, role-based access controls, and comprehensive analytics, the platform helps organizations improve productivity, reduce operational costs, and minimize errors.",
    image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
    category: "Business",
    technologies: ["Angular", "Java", "Spring Boot", "MySQL", "Docker", "Kubernetes"],
    features: [
      "Drag-and-drop workflow designer",
      "Role-based permissions and approvals",
      "Document processing and management",
      "Integration with existing enterprise systems",
      "Real-time analytics and performance metrics"
    ]
  },
  {
    id: "ar-shopping",
    title: "AR Shopping Experience",
    description: "An immersive platform allowing users to visualize products in their space before purchasing, enhancing buying confidence.",
    longDescription: "This augmented reality shopping platform enables customers to visualize furniture, decor, and other products in their own spaces before making a purchase. Using advanced AR technology, the application accurately renders 3D models at scale, allowing users to see exactly how items will look and fit in their environment.",
    image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
    category: "AR & Retail",
    technologies: ["Unity", "ARKit", "ARCore", "React", "Node.js", "MongoDB"],
    features: [
      "Real-time product visualization in user environment",
      "Accurate scaling and dimension representation",
      "Product customization within AR view",
      "Social sharing of AR visualizations",
      "Seamless integration with e-commerce platforms"
    ]
  },
  {
    id: "expert-marketplace",
    title: "On-Demand Expert Marketplace",
    description: "A platform connecting people with specialists in niche fields via video chat for real-time consultation and problem-solving.",
    longDescription: "This on-demand expert marketplace connects users with specialists across various domains for instant video consultations. The platform features a sophisticated matching algorithm to pair users with the most relevant experts, secure video conferencing, and integrated payment processing for a seamless experience.",
    image: "https://images.unsplash.com/photo-1558222218-b7b54eede3f3?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
    category: "Marketplace",
    technologies: ["React", "Node.js", "WebRTC", "Redis", "PostgreSQL", "AWS"],
    features: [
      "Expert profile verification and rating system",
      "Real-time availability and scheduling",
      "High-quality video consultation infrastructure",
      "Secure payment processing and escrow services",
      "Post-consultation feedback and review system"
    ]
  },
  {
    id: "data-analytics",
    title: "Enterprise Data Analytics Platform",
    description: "A powerful suite of tools helping businesses make sense of their complex data for informed decision-making.",
    longDescription: "This comprehensive data analytics platform transforms raw business data into actionable insights through advanced visualization, automated reporting, and predictive analytics. Designed for enterprise needs, the system integrates with multiple data sources to provide a unified view of business performance and identify growth opportunities.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
    category: "Data Analytics",
    technologies: ["React", "Python", "Django", "PostgreSQL", "TensorFlow", "D3.js"],
    features: [
      "Interactive dashboards and data visualizations",
      "Automated report generation and distribution",
      "Advanced analytics and predictive modeling",
      "Multi-source data integration and ETL processes",
      "Custom alert systems and anomaly detection"
    ]
  },
  {
    id: "real-estate",
    title: "Real Estate Investment Analytics",
    description: "A platform that helps investors identify undervalued properties and predict market trends using data analysis.",
    longDescription: "This real estate analytics platform uses machine learning to analyze property data, market trends, and economic indicators to identify investment opportunities. The system provides detailed property valuation, ROI projections, and risk assessments to help investors make data-driven decisions and maximize returns.",
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
    category: "Real Estate",
    technologies: ["Vue.js", "Python", "Flask", "PostgreSQL", "Scikit-learn", "Mapbox"],
    features: [
      "Property value prediction and analysis",
      "Market trend visualization and forecasting",
      "Investment opportunity scoring and ranking",
      "Comprehensive property and neighborhood data",
      "Portfolio performance tracking and management"
    ]
  },
  {
    id: "defi-tools",
    title: "Decentralized Finance (DeFi) Tools",
    description: "A suite of user-friendly interfaces for complex blockchain operations and decentralized finance management.",
    longDescription: "This DeFi platform simplifies complex blockchain interactions through an intuitive interface, allowing users to manage crypto assets, participate in liquidity pools, and access decentralized financial services without extensive technical knowledge. The system prioritizes security, transparency, and user experience.",
    image: "https://images.unsplash.com/photo-1639762681057-408e52192e55?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
    category: "Blockchain",
    technologies: ["React", "Ethers.js", "Solidity", "The Graph", "IPFS", "Web3.js"],
    features: [
      "Multi-chain wallet integration and management",
      "Liquidity pool investment and yield farming",
      "Token swap and decentralized exchange access",
      "Smart contract interaction and deployment",
      "Real-time market data and analytics"
    ]
  }
];

// Categories for filtering
const categories = ["All", "AI & Finance", "Healthcare", "Business", "AR & Retail", "Marketplace", "Data Analytics", "Real Estate", "Blockchain"];

const Projects = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");

  // Filter projects based on search term and category
  const filteredProjects = allProjects.filter(project => {
    const matchesSearch = project.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          project.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = activeCategory === "All" || project.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen w-full overflow-x-hidden">
      {/* Navigation */}
      <nav className="py-4 px-6 bg-white/80 backdrop-blur-md sticky top-0 z-50 shadow-sm">
        <div className="container mx-auto flex items-center justify-between">
          <div className="flex items-center">
            <div className="w-10 h-10 rounded-full overflow-hidden mr-2">
              <img 
                src={profileInfo.profileImage} 
                alt="Profile" 
                className="w-full h-full object-cover"
              />
            </div>
            <span className="font-semibold text-lg">Freelance Dev</span>
          </div>
          <div className="hidden md:flex space-x-6">
            <Link to="/" className="hover:text-accent-dark transition-colors">Home</Link>
            <Link to="/about" className="hover:text-accent-dark transition-colors">About</Link>
            <Link to="/services" className="hover:text-accent-dark transition-colors">Services</Link>
            <Link to="/projects" className="hover:text-accent-dark transition-colors font-medium">Projects</Link>
            <Link to="/blog" className="hover:text-accent-dark transition-colors">Blog</Link>
            <Link to="/contact" className="hover:text-accent-dark transition-colors">Contact</Link>
          </div>
          <Link 
            to="/contact" 
            className="bg-soft-black text-white px-4 py-2 rounded-lg text-sm font-medium hover-lift hidden md:block"
          >
            Hire Me
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-soft-gray py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="text-4xl md:text-5xl font-semibold mb-6 text-gradient">My Projects</h1>
            <p className="text-lg text-gray-600 mb-8">
              Explore my portfolio of innovative digital solutions that solve real business problems and deliver tangible results.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Project Filters */}
      <section className="container mx-auto px-4 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-12">
          <div className="relative w-full md:w-auto">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search projects..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 pr-4 py-3 w-full md:w-80 rounded-lg border border-gray-200 focus:outline-none focus:border-soft-black transition-colors"
            />
          </div>
          <div className="flex flex-wrap justify-center gap-2 w-full md:w-auto">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-4 py-2 rounded-lg text-sm transition-colors ${
                  activeCategory === category
                    ? "bg-soft-black text-white"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.length > 0 ? (
            filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="glass-panel overflow-hidden rounded-xl hover-lift flex flex-col h-full"
              >
                <div className="h-48 overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                  />
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <span className="text-xs font-medium text-gray-500 mb-2">{project.category}</span>
                  <h3 className="font-semibold text-xl mb-2">{project.title}</h3>
                  <p className="text-gray-600 text-sm mb-4 flex-grow">{project.description}</p>
                  <Link to={`/projects/${project.id}`} className="text-soft-black font-medium flex items-center mt-auto">
                    View Details
                    <ArrowRight className="ml-1 w-4 h-4" />
                  </Link>
                </div>
              </motion.div>
            ))
          ) : (
            <div className="col-span-full text-center py-12">
              <p className="text-gray-500 text-lg">No projects found matching your criteria. Try adjusting your search or filters.</p>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-soft-gray py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-semibold mb-6">Have a Project in Mind?</h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            I'm always open to discussing new projects and how I can help bring your ideas to life.
          </p>
          <Link 
            to="/contact" 
            className="bg-soft-black text-white px-6 py-3 rounded-lg font-medium inline-flex items-center hover-lift"
          >
            Let's Talk
            <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-soft-black text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 rounded-full overflow-hidden mr-2 border border-gray-700">
                  <img 
                    src={profileInfo.profileImage} 
                    alt="Profile" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <span className="font-medium">Freelance Developer</span>
              </div>
              <p className="text-gray-400 text-sm">
                Specialized in crafting high-quality websites, bots, and AI agent automations.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-medium mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li><Link to="/" className="text-gray-400 hover:text-white transition-colors">Home</Link></li>
                <li><Link to="/about" className="text-gray-400 hover:text-white transition-colors">About</Link></li>
                <li><Link to="/services" className="text-gray-400 hover:text-white transition-colors">Services</Link></li>
                <li><Link to="/projects" className="text-gray-400 hover:text-white transition-colors">Projects</Link></li>
                <li><Link to="/blog" className="text-gray-400 hover:text-white transition-colors">Blog</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-medium mb-4">Services</h4>
              <ul className="space-y-2">
                <li><Link to="/services#websites" className="text-gray-400 hover:text-white transition-colors">Website Development</Link></li>
                <li><Link to="/services#maintenance" className="text-gray-400 hover:text-white transition-colors">Website Maintenance</Link></li>
                <li><Link to="/services#bots" className="text-gray-400 hover:text-white transition-colors">Custom Bot Creation</Link></li>
                <li><Link to="/services#ai" className="text-gray-400 hover:text-white transition-colors">AI Agent Automation</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-medium mb-4">Contact</h4>
              <div className="space-y-2">
                <div className="flex items-center">
                  <Mail className="w-4 h-4 mr-2 text-gray-400" />
                  <span className="text-gray-400">{profileInfo.email}</span>
                </div>
                <div className="flex items-center">
                  <Phone className="w-4 h-4 mr-2 text-gray-400" />
                  <span className="text-gray-400">{profileInfo.phone}</span>
                </div>
                <div className="flex items-center">
                  <Instagram className="w-4 h-4 mr-2 text-gray-400" />
                  <span className="text-gray-400">{profileInfo.instagram}</span>
                </div>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center">
            <p className="mb-2">© {new Date().getFullYear()} Freelance Programming Services</p>
            <p className="text-gray-400 text-sm">All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Projects;

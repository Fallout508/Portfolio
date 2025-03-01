
import { motion } from "framer-motion";
import { Code, Bot, Cpu, Wrench, Mail, Phone, Instagram, ArrowRight, Zap, Shield, BarChart } from "lucide-react";
import { Link } from "react-router-dom";

// Profile information
const profileInfo = {
  name: "Freelance Developer",
  email: "jaydogvermont@gmail.com",
  phone: "+238 983 4323",
  instagram: "@thereallemonsqueeze",
  experience: "10+ years",
  profileImage: "/lovable-uploads/25598825-54ef-490d-b8ea-37a72c310592.png"
};

// Main services
const mainServices = [
  {
    id: "websites",
    icon: <Code className="w-10 h-10" />,
    title: "Website Development",
    description: "From simple landing pages to complex web applications, I design and develop responsive, user-friendly websites tailored to your specific needs.",
    features: [
      "Custom design and development",
      "Responsive and mobile-friendly interfaces",
      "E-commerce functionality",
      "Content management systems",
      "Performance optimization",
      "SEO best practices"
    ],
    image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
  },
  {
    id: "maintenance",
    icon: <Wrench className="w-10 h-10" />,
    title: "Website Maintenance",
    description: "Keep your online presence secure, up-to-date, and functioning optimally with comprehensive maintenance services.",
    features: [
      "Regular updates and security patches",
      "Performance monitoring and optimization",
      "Content updates and management",
      "Backup and recovery solutions",
      "Technical support and troubleshooting",
      "Analytics and reporting"
    ],
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
  },
  {
    id: "bots",
    icon: <Bot className="w-10 h-10" />,
    title: "Custom Bot Creation",
    description: "Automate interactions, improve customer service, and streamline processes with tailored bot solutions for your business needs.",
    features: [
      "Chatbots for customer service",
      "Task automation bots",
      "Social media bots",
      "Data collection and processing bots",
      "Integration with existing systems",
      "Analytics and performance tracking"
    ],
    image: "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
  },
  {
    id: "ai",
    icon: <Cpu className="w-10 h-10" />,
    title: "AI Agent Automation",
    description: "Leverage artificial intelligence to automate complex tasks, analyze data, and make informed decisions for your business.",
    features: [
      "AI-powered workflow automation",
      "Intelligent data analysis and reporting",
      "Predictive modeling and forecasting",
      "Natural language processing applications",
      "Machine learning integrations",
      "Custom AI agent development"
    ],
    image: "https://images.unsplash.com/photo-1555774698-0b77e0d5fac6?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
  }
];

// Additional services
const additionalServices = [
  {
    icon: <Zap className="w-6 h-6" />,
    title: "Performance Optimization",
    description: "Improve the speed and responsiveness of your web applications for better user experience and higher conversion rates."
  },
  {
    icon: <Shield className="w-6 h-6" />,
    title: "Security Audits",
    description: "Comprehensive security assessments to identify and address vulnerabilities in your web applications."
  },
  {
    icon: <BarChart className="w-6 h-6" />,
    title: "Data Analytics Integration",
    description: "Implement powerful analytics tools to gather insights about user behavior and business performance."
  }
];

const Services = () => {
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
            <Link to="/services" className="hover:text-accent-dark transition-colors font-medium">Services</Link>
            <Link to="/projects" className="hover:text-accent-dark transition-colors">Projects</Link>
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
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto"
          >
            <h1 className="text-4xl md:text-5xl font-semibold mb-6 text-gradient">Professional Services</h1>
            <p className="text-lg text-gray-600 mb-8">
              I offer a comprehensive range of programming services designed to help businesses leverage technology to achieve their goals. From website development to AI automation, I deliver high-quality solutions tailored to your specific needs.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Services */}
      <section className="container mx-auto px-4 py-20">
        <h2 className="section-title">Core Services</h2>
        <div className="space-y-24">
          {mainServices.map((service, index) => (
            <div 
              key={service.id} 
              id={service.id}
              className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-12`}
            >
              <motion.div
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="w-full md:w-1/2"
              >
                <div className="glass-panel p-8 rounded-2xl">
                  <div className="bg-white rounded-full w-16 h-16 flex items-center justify-center mb-6 shadow-md">
                    {service.icon}
                  </div>
                  <h3 className="text-2xl font-semibold mb-4">{service.title}</h3>
                  <p className="text-gray-600 mb-6">{service.description}</p>
                  <h4 className="font-medium mb-4">What's included:</h4>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start">
                        <ArrowRight className="w-5 h-5 mr-2 text-gray-400 flex-shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: index % 2 === 0 ? 20 : -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="w-full md:w-1/2"
              >
                <div className="aspect-video overflow-hidden rounded-xl shadow-lg">
                  <img 
                    src={service.image} 
                    alt={service.title} 
                    className="w-full h-full object-cover"
                  />
                </div>
              </motion.div>
            </div>
          ))}
        </div>
      </section>

      {/* Additional Services */}
      <section className="bg-soft-gray py-20">
        <div className="container mx-auto px-4">
          <h2 className="section-title">Additional Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {additionalServices.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="glass-panel p-8 rounded-2xl hover-lift"
              >
                <div className="bg-white rounded-lg w-12 h-12 flex items-center justify-center mb-6 shadow-md">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How I Work */}
      <section className="container mx-auto px-4 py-20">
        <h2 className="section-title">How I Work</h2>
        <div className="max-w-3xl mx-auto">
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="glass-panel p-8 rounded-2xl relative"
            >
              <div className="absolute -left-4 top-8 bg-soft-black text-white w-8 h-8 rounded-full flex items-center justify-center font-semibold">1</div>
              <h3 className="text-xl font-semibold mb-3">Consultation & Requirements</h3>
              <p className="text-gray-600">
                We begin with a thorough consultation to understand your business objectives, target audience, and specific requirements. This helps me develop a clear picture of what needs to be accomplished.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="glass-panel p-8 rounded-2xl relative"
            >
              <div className="absolute -left-4 top-8 bg-soft-black text-white w-8 h-8 rounded-full flex items-center justify-center font-semibold">2</div>
              <h3 className="text-xl font-semibold mb-3">Planning & Proposal</h3>
              <p className="text-gray-600">
                I'll develop a detailed proposal outlining the scope, timeline, and cost of your project. Once approved, we'll create a roadmap to guide the development process.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="glass-panel p-8 rounded-2xl relative"
            >
              <div className="absolute -left-4 top-8 bg-soft-black text-white w-8 h-8 rounded-full flex items-center justify-center font-semibold">3</div>
              <h3 className="text-xl font-semibold mb-3">Development & Implementation</h3>
              <p className="text-gray-600">
                I follow an iterative development process, building your solution piece by piece and providing regular updates. This allows for feedback and adjustments throughout the process.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              className="glass-panel p-8 rounded-2xl relative"
            >
              <div className="absolute -left-4 top-8 bg-soft-black text-white w-8 h-8 rounded-full flex items-center justify-center font-semibold">4</div>
              <h3 className="text-xl font-semibold mb-3">Testing & Quality Assurance</h3>
              <p className="text-gray-600">
                Before delivery, I conduct thorough testing to ensure everything works perfectly. This includes functional testing, performance optimization, and security checks.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
              className="glass-panel p-8 rounded-2xl relative"
            >
              <div className="absolute -left-4 top-8 bg-soft-black text-white w-8 h-8 rounded-full flex items-center justify-center font-semibold">5</div>
              <h3 className="text-xl font-semibold mb-3">Deployment & Support</h3>
              <p className="text-gray-600">
                Once everything is ready, I'll handle the deployment process and provide any necessary training. Ongoing support ensures your solution continues to perform optimally.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-soft-gray py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-semibold mb-6">Ready to Get Started?</h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Let's discuss your project requirements and how my services can help you achieve your business goals.
          </p>
          <Link 
            to="/contact" 
            className="bg-soft-black text-white px-6 py-3 rounded-lg font-medium inline-flex items-center hover-lift"
          >
            Contact Me
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

export default Services;


import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Code, Bot, Cpu, Wrench, Mail, Phone, Instagram, Calendar, Clock, Check } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { Link } from "react-router-dom";

// Profile information
const profileInfo = {
  name: "Freelance Developer",
  email: "jaydogvermont@gmail.com",
  phone: "+238 983 4323",
  instagram: "@thereallemonsqueeze",
  experience: "10+ years",
  profileImage: "/lovable-uploads/25598825-54ef-490d-b8ea-37a72c310592.png"
}

// Services provided
const services = [
  {
    icon: <Code className="w-6 h-6" />,
    title: "Website Development",
    description: "Building and enhancing web solutions tailored to your specific needs."
  },
  {
    icon: <Wrench className="w-6 h-6" />,
    title: "Website Maintenance",
    description: "Keeping your sites secure, functional, and up-to-date."
  },
  {
    icon: <Bot className="w-6 h-6" />,
    title: "Custom Bot Creation",
    description: "Designing bots for automation, customer service, or other specialized purposes."
  },
  {
    icon: <Cpu className="w-6 h-6" />,
    title: "AI Agent Automation",
    description: "Implementing intelligent automations to streamline your business processes."
  }
];

// Retainer packages
const packages = [
  {
    title: "Basic Retainer",
    hours: 10,
    price: "$900/month",
    rate: "$90/hour",
    discount: "10% discount",
    bestFor: "Small projects, ongoing maintenance, or periodic updates."
  },
  {
    title: "Standard Retainer",
    hours: 20,
    price: "$1,700/month",
    rate: "$85/hour",
    discount: "15% discount",
    bestFor: "Medium-sized projects or regular development needs."
  },
  {
    title: "Premium Retainer",
    hours: 40,
    price: "$3,200/month",
    rate: "$80/hour",
    discount: "20% discount",
    bestFor: "Large-scale projects or extensive automation work."
  }
];

// Benefits of retainer
const benefits = [
  "Priority service - jump to the front of the line for scheduling and support",
  "Cost savings with discounted rates compared to one-off project fees",
  "Flexibility to allocate hours across any service based on current needs",
  "Guaranteed availability of dedicated time each month"
];

// Portfolio projects
const portfolioProjects = [
  {
    id: 1,
    title: "AI-Powered Personal Finance Assistant",
    description: "An intelligent application that analyzes spending patterns, optimizes investments, and provides personalized financial advice.",
    image: "https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
    category: "AI & Finance",
    link: "/projects/finance-assistant"
  },
  {
    id: 2,
    title: "Health Tech Platform",
    description: "A comprehensive platform that combines wearable data, medical records, and AI to create personalized health recommendations.",
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
    category: "Healthcare",
    link: "/projects/health-tech"
  },
  {
    id: 3,
    title: "Enterprise Workflow Automation",
    description: "A suite of tools that automate repetitive business processes, increasing efficiency and reducing human error.",
    image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
    category: "Business",
    link: "/projects/workflow-automation"
  },
  {
    id: 4,
    title: "AR Shopping Experience",
    description: "An immersive platform allowing users to visualize products in their space before purchasing, enhancing buying confidence.",
    image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
    category: "AR & Retail",
    link: "/projects/ar-shopping"
  },
  {
    id: 5,
    title: "On-Demand Expert Marketplace",
    description: "A platform connecting people with specialists in niche fields via video chat for real-time consultation and problem-solving.",
    image: "https://images.unsplash.com/photo-1558222218-b7b54eede3f3?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
    category: "Marketplace",
    link: "/projects/expert-marketplace"
  },
  {
    id: 6,
    title: "Enterprise Data Analytics Platform",
    description: "A powerful suite of tools helping businesses make sense of their complex data for informed decision-making.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
    category: "Data Analytics",
    link: "/projects/data-analytics"
  }
];

const Index = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const { toast } = useToast();

  const handleContact = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message sent!",
      description: "Thank you for your interest. I'll be in touch soon.",
    });
    setName("");
    setEmail("");
    setMessage("");
  };

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
      <section className="container mx-auto px-4 pt-20 pb-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto"
        >
          <div className="w-32 h-32 rounded-full overflow-hidden mx-auto mb-6 border-4 border-white shadow-lg">
            <img 
              src={profileInfo.profileImage} 
              alt="Profile" 
              className="w-full h-full object-cover"
            />
          </div>
          <span className="inline-block px-3 py-1 text-sm font-medium bg-soft-gray rounded-full mb-8 animate-fade-in">
            {profileInfo.experience} of Professional Experience
          </span>
          <h1 className="text-5xl md:text-6xl font-semibold mb-6 leading-tight text-gradient">
            Freelance Programming Services
          </h1>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Specialized in crafting high-quality websites, bots, and AI agent automations through flexible retainer packages.
          </p>
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="bg-soft-black text-white px-8 py-4 rounded-lg font-medium inline-flex items-center hover-lift"
          >
            Get In Touch
            <ArrowRight className="ml-2 w-5 h-5" />
          </motion.a>
        </motion.div>
      </section>

      {/* About Section with Profile Picture */}
      <section className="bg-soft-gray py-20">
        <div className="container mx-auto px-4">
          <h2 className="section-title">About Me</h2>
          <div className="flex flex-col md:flex-row items-center justify-center gap-12">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="w-full md:w-1/3"
            >
              <div className="aspect-square overflow-hidden rounded-xl shadow-lg">
                <img 
                  src={profileInfo.profileImage} 
                  alt="Profile" 
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="w-full md:w-1/2"
            >
              <div className="glass-panel p-8 rounded-2xl">
                <h3 className="text-2xl font-semibold mb-4">Professional Experience</h3>
                <p className="text-gray-600 mb-6">
                  With a decade of programming expertise, I specialize in crafting high-quality websites, bots, and AI agent automations. 
                  Through my retainer packages, I offer clients a reliable way to secure my services on an ongoing basis. 
                  By opting for a retainer, you gain priority access to my skills at discounted rates, ensuring consistent support for your projects.
                </p>
                <div className="flex flex-col space-y-3">
                  <div className="flex items-center">
                    <Mail className="w-5 h-5 mr-3 text-gray-400" />
                    <span>{profileInfo.email}</span>
                  </div>
                  <div className="flex items-center">
                    <Phone className="w-5 h-5 mr-3 text-gray-400" />
                    <span>{profileInfo.phone}</span>
                  </div>
                  <div className="flex items-center">
                    <Instagram className="w-5 h-5 mr-3 text-gray-400" />
                    <span>{profileInfo.instagram}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="container mx-auto px-4 py-20">
        <h2 className="section-title">Services Included</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
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
        <div className="mt-12 text-center text-gray-600">
          <p>These services can be mixed and matched within your allotted hours, offering maximum flexibility.</p>
        </div>
      </section>

      {/* Packages Section */}
      <section className="bg-soft-gray py-20">
        <div className="container mx-auto px-4">
          <h2 className="section-title">Retainer Packages</h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            I've structured three retainer tiers to accommodate various project sizes and budgets. Each package provides a set number of hours per month at a discounted rate compared to my standard $100/hour fee.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {packages.map((pkg, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="package-card"
              >
                <h3 className="package-title">{pkg.title}</h3>
                <div className="flex items-center mb-4">
                  <Clock className="w-5 h-5 mr-2 text-gray-400" />
                  <span className="text-lg">{pkg.hours} hours per month</span>
                </div>
                <p className="package-price">{pkg.price}</p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start">
                    <Check className="w-5 h-5 mr-2 text-green-500 flex-shrink-0 mt-0.5" />
                    <span>Equivalent to {pkg.rate}</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="w-5 h-5 mr-2 text-green-500 flex-shrink-0 mt-0.5" />
                    <span>{pkg.discount}</span>
                  </li>
                </ul>
                <div className="pt-4 border-t border-gray-200">
                  <h4 className="font-medium mb-2">Best For:</h4>
                  <p className="text-gray-600">{pkg.bestFor}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="container mx-auto px-4 py-20">
        <h2 className="section-title">Benefits of the Retainer</h2>
        <div className="max-w-3xl mx-auto">
          <div className="glass-panel p-8 rounded-2xl">
            <ul className="space-y-4">
              {benefits.map((benefit, index) => (
                <motion.li 
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-start"
                >
                  <Check className="w-5 h-5 mr-3 text-green-500 flex-shrink-0 mt-1" />
                  <span>{benefit}</span>
                </motion.li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Portfolio Highlights */}
      <section className="bg-soft-gray py-20">
        <div className="container mx-auto px-4">
          <h2 className="section-title">Featured Projects</h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Explore my latest high-impact projects designed to solve real business problems and generate significant revenue.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {portfolioProjects.slice(0, 6).map((project) => (
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
                  <Link to={project.link} className="text-soft-black font-medium flex items-center mt-auto">
                    View Project
                    <ArrowRight className="ml-1 w-4 h-4" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link 
              to="/projects" 
              className="bg-soft-black text-white px-6 py-3 rounded-lg font-medium inline-flex items-center hover-lift"
            >
              View All Projects
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section id="contact" className="container mx-auto px-4 py-20">
        <h2 className="section-title">Get In Touch</h2>
        <div className="max-w-2xl mx-auto glass-panel p-8 rounded-2xl">
          <div className="flex items-center justify-center mb-6">
            <div className="w-16 h-16 rounded-full overflow-hidden mr-4 shadow-md">
              <img 
                src={profileInfo.profileImage} 
                alt="Profile" 
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <h3 className="font-semibold text-lg">Freelance Developer</h3>
              <p className="text-gray-600">Ready to assist with your programming needs</p>
            </div>
          </div>
          <div className="flex flex-col md:flex-row gap-8 mb-8">
            <div className="flex items-center">
              <Mail className="w-5 h-5 mr-3 text-gray-400" />
              <span>{profileInfo.email}</span>
            </div>
            <div className="flex items-center">
              <Phone className="w-5 h-5 mr-3 text-gray-400" />
              <span>{profileInfo.phone}</span>
            </div>
            <div className="flex items-center">
              <Instagram className="w-5 h-5 mr-3 text-gray-400" />
              <span>{profileInfo.instagram}</span>
            </div>
          </div>
          <form onSubmit={handleContact}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                <input
                  id="name"
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:border-soft-black transition-colors"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                <input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:border-soft-black transition-colors"
                  required
                />
              </div>
            </div>
            <div className="mb-6">
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
              <textarea
                id="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                rows={5}
                className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:border-soft-black transition-colors"
                required
              ></textarea>
            </div>
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              className="bg-soft-black text-white px-6 py-3 rounded-lg font-medium hover-lift w-full"
            >
              Send Message
            </motion.button>
          </form>
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

export default Index;

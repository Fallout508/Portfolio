
import { motion } from "framer-motion";
import { Clock, Award, BookOpen, Users, ArrowRight, Mail, Phone, Instagram } from "lucide-react";
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

// Career timeline
const timeline = [
  {
    year: "2022-Present",
    title: "Senior Freelance Developer",
    description: "Working with various clients on complex web applications, AI integrations, and automation solutions."
  },
  {
    year: "2019-2022",
    title: "Lead Web Developer",
    description: "Led development of enterprise-level web applications with focus on performance and scalability."
  },
  {
    year: "2016-2019",
    title: "Full-Stack Developer",
    description: "Built comprehensive solutions from database design to frontend implementation for various clients."
  },
  {
    year: "2013-2016",
    title: "Frontend Specialist",
    description: "Specialized in creating responsive and interactive user interfaces for web applications."
  }
];

// Skills
const skills = [
  { category: "Frontend", items: ["React", "Vue.js", "Angular", "TypeScript", "Tailwind CSS"] },
  { category: "Backend", items: ["Node.js", "Python", "PHP", "Ruby", "Java"] },
  { category: "Database", items: ["MongoDB", "PostgreSQL", "MySQL", "Firebase", "Redis"] },
  { category: "Tools", items: ["Git", "Docker", "AWS", "CI/CD", "Testing"] },
  { category: "AI/ML", items: ["TensorFlow", "PyTorch", "LangChain", "OpenAI API", "Bot Frameworks"] }
];

const About = () => {
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
            <Link to="/about" className="hover:text-accent-dark transition-colors font-medium">About</Link>
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
      <section className="bg-soft-gray py-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-center gap-12">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
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
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="w-full md:w-1/2"
            >
              <h1 className="text-4xl md:text-5xl font-semibold mb-4 text-gradient">About Me</h1>
              <p className="text-gray-600 mb-6">
                As a seasoned developer with over a decade of experience, I've dedicated my career to mastering the art of programming 
                and creating innovative solutions that solve real-world problems. My journey has taken me through various 
                technologies and frameworks, allowing me to build a diverse skill set that enables me to tackle any challenge.
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                <div className="glass-panel p-4 rounded-xl text-center">
                  <Clock className="w-6 h-6 mx-auto mb-2 text-gray-700" />
                  <span className="block font-semibold">10+ Years</span>
                  <span className="text-sm text-gray-600">Experience</span>
                </div>
                <div className="glass-panel p-4 rounded-xl text-center">
                  <Award className="w-6 h-6 mx-auto mb-2 text-gray-700" />
                  <span className="block font-semibold">50+</span>
                  <span className="text-sm text-gray-600">Projects</span>
                </div>
                <div className="glass-panel p-4 rounded-xl text-center">
                  <BookOpen className="w-6 h-6 mx-auto mb-2 text-gray-700" />
                  <span className="block font-semibold">15+</span>
                  <span className="text-sm text-gray-600">Technologies</span>
                </div>
                <div className="glass-panel p-4 rounded-xl text-center">
                  <Users className="w-6 h-6 mx-auto mb-2 text-gray-700" />
                  <span className="block font-semibold">100+</span>
                  <span className="text-sm text-gray-600">Clients</span>
                </div>
              </div>
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
            </motion.div>
          </div>
        </div>
      </section>

      {/* Experience Timeline */}
      <section className="container mx-auto px-4 py-20">
        <h2 className="section-title">Professional Journey</h2>
        <div className="max-w-3xl mx-auto">
          {timeline.map((item, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="flex mb-12 relative"
            >
              {index < timeline.length - 1 && (
                <div className="absolute top-10 left-[19px] w-1 h-full bg-gray-200 z-0"></div>
              )}
              <div className="bg-soft-gray rounded-full w-10 h-10 flex items-center justify-center flex-shrink-0 z-10">
                <div className="bg-white w-4 h-4 rounded-full"></div>
              </div>
              <div className="ml-6">
                <span className="inline-block px-3 py-1 text-xs font-medium bg-soft-gray rounded-full mb-2">
                  {item.year}
                </span>
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Skills Section */}
      <section className="bg-soft-gray py-20">
        <div className="container mx-auto px-4">
          <h2 className="section-title">Skills & Expertise</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8">
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="glass-panel p-6 rounded-2xl"
              >
                <h3 className="text-lg font-semibold mb-4 text-center">{skill.category}</h3>
                <ul className="space-y-2">
                  {skill.items.map((item, idx) => (
                    <li key={idx} className="text-gray-600 text-center py-1 border-b border-gray-100 last:border-0">
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="container mx-auto px-4 py-20">
        <h2 className="section-title">My Philosophy</h2>
        <div className="max-w-3xl mx-auto glass-panel p-8 rounded-2xl">
          <div className="flex justify-center mb-8">
            <div className="w-20 h-1 bg-gray-200 rounded-full"></div>
          </div>
          <p className="text-gray-700 text-lg text-center mb-4">
            "I believe that great technology should be both powerful and accessible. 
            My goal is to bridge the gap between complex technical solutions and user-friendly experiences."
          </p>
          <p className="text-gray-600 text-center">
            I approach each project with a commitment to excellence, a passion for innovation, and a focus on delivering 
            real value. Whether building websites, creating bots, or implementing AI automations, I ensure that every 
            solution is tailored to meet specific needs while maintaining the highest standards of quality and performance.
          </p>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-soft-gray py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-semibold mb-6">Ready to Work Together?</h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            I'm currently accepting new projects and would love to discuss how I can help bring your ideas to life.
          </p>
          <Link 
            to="/contact" 
            className="bg-soft-black text-white px-6 py-3 rounded-lg font-medium inline-flex items-center hover-lift"
          >
            Get In Touch
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

export default About;

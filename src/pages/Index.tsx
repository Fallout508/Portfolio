
import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Laptop, Shield, Zap } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const features = [
  {
    icon: <Laptop className="w-6 h-6" />,
    title: "Intuitive Design",
    description: "Experience seamless interaction with our thoughtfully crafted interface."
  },
  {
    icon: <Shield className="w-6 h-6" />,
    title: "Secure Platform",
    description: "Your data is protected with state-of-the-art security measures."
  },
  {
    icon: <Zap className="w-6 h-6" />,
    title: "Lightning Fast",
    description: "Optimized performance for the smoothest user experience."
  }
];

const Index = () => {
  const [email, setEmail] = useState("");
  const { toast } = useToast();

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Thank you for subscribing!",
      description: "We'll keep you updated with our latest news.",
    });
    setEmail("");
  };

  return (
    <div className="min-h-screen w-full overflow-hidden">
      {/* Hero Section */}
      <section className="container mx-auto px-4 pt-20 pb-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto"
        >
          <span className="inline-block px-3 py-1 text-sm font-medium bg-soft-gray rounded-full mb-8 animate-fade-in">
            Welcome to the future
          </span>
          <h1 className="text-5xl md:text-6xl font-semibold mb-6 leading-tight">
            Create Beautiful Digital Experiences
          </h1>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Discover a new way of building digital products with our innovative platform.
          </p>
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="bg-soft-black text-white px-8 py-4 rounded-lg font-medium inline-flex items-center hover-lift"
          >
            Get Started
            <ArrowRight className="ml-2 w-5 h-5" />
          </motion.button>
        </motion.div>
      </section>

      {/* Features Section */}
      <section className="bg-soft-gray py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="glass-panel p-8 rounded-2xl hover-lift"
              >
                <div className="bg-white rounded-lg w-12 h-12 flex items-center justify-center mb-6">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="container mx-auto px-4 py-24">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="max-w-xl mx-auto text-center"
        >
          <h2 className="text-3xl font-semibold mb-6">Stay Updated</h2>
          <p className="text-gray-600 mb-8">
            Subscribe to our newsletter for the latest updates and insights.
          </p>
          <form onSubmit={handleSubscribe} className="flex gap-4">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:border-soft-black transition-colors"
              required
            />
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              className="bg-soft-black text-white px-6 py-3 rounded-lg font-medium hover-lift"
            >
              Subscribe
            </motion.button>
          </form>
        </motion.div>
      </section>
    </div>
  );
};

export default Index;


import { useParams, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { ChevronLeft, ExternalLink, Github } from "lucide-react";

// Sample project data - this would typically come from an API
const projectsData = [
  {
    id: "1",
    title: "AI-Powered Personal Finance Assistant",
    description: "An intelligent financial assistant that analyzes spending patterns, optimizes investments, and provides personalized financial advice.",
    longDescription: "Our AI-Powered Personal Finance Assistant is a cutting-edge solution that leverages machine learning algorithms to provide users with personalized financial guidance. The platform integrates with users' bank accounts, credit cards, and investment portfolios to offer a comprehensive view of their financial health. Through sophisticated data analysis, the assistant identifies spending patterns, suggests budget optimizations, and recommends investment strategies tailored to individual goals and risk tolerances. Features include automated expense categorization, anomaly detection for unusual transactions, predictive cash flow analysis, and goal-based savings recommendations.",
    image: "/placeholder.svg",
    technologies: ["React", "TensorFlow.js", "Node.js", "MongoDB", "AWS"],
    features: [
      "Personalized financial advice based on spending history",
      "Investment portfolio optimization",
      "Automated budget creation and management",
      "Predictive analysis for future expenses",
      "Secure bank account integration"
    ],
    demoUrl: "https://example.com/demo",
    githubUrl: "https://github.com/example/finance-assistant",
    category: "Finance",
  },
  {
    id: "2",
    title: "Health Tech Platform",
    description: "A comprehensive health platform that combines wearable data, medical records, and AI to create personalized health recommendations.",
    longDescription: "Our Health Tech Platform represents a paradigm shift in personal healthcare management. By integrating data from wearable devices, electronic medical records, and user inputs, the platform creates a holistic view of an individual's health status. Advanced AI algorithms analyze this data to identify patterns, potential health risks, and opportunities for improvement. The platform offers personalized workout routines, nutrition plans, and preventative health measures based on each user's unique profile. The system also facilitates secure communication between patients and healthcare providers, allowing for remote consultations and continuous monitoring of chronic conditions.",
    image: "/placeholder.svg",
    technologies: ["React Native", "Python", "Django", "PostgreSQL", "Google Cloud"],
    features: [
      "Wearable device integration for real-time health monitoring",
      "AI-driven health insights and recommendations",
      "Personalized fitness and nutrition planning",
      "Secure medical record storage and sharing",
      "Telemedicine capabilities"
    ],
    demoUrl: "https://example.com/health-demo",
    githubUrl: "https://github.com/example/health-platform",
    category: "Healthcare",
  },
  {
    id: "3",
    title: "Enterprise Workflow Automation",
    description: "A suite of tools designed to automate repetitive business processes, increasing efficiency and reducing human error.",
    longDescription: "Our Enterprise Workflow Automation platform transforms how businesses manage their internal processes. By identifying repetitive tasks across departments, the system creates automated workflows that drastically reduce manual intervention. The platform includes a drag-and-drop workflow designer, allowing non-technical users to create sophisticated process automations without coding knowledge. Integrations with popular business tools ensure seamless data flow between systems, while robust analytics provide insights into process efficiencies and bottlenecks. The solution scales from small teams to enterprise-wide deployments, with role-based access controls and audit logging for compliance requirements.",
    image: "/placeholder.svg",
    technologies: ["Angular", "Spring Boot", "Kubernetes", "RabbitMQ", "Elasticsearch"],
    features: [
      "Visual workflow designer for non-technical users",
      "Process analytics and optimization recommendations",
      "Integration with existing enterprise systems",
      "Automated document processing and data extraction",
      "Role-based access control and audit logging"
    ],
    demoUrl: "https://example.com/workflow-demo",
    githubUrl: "https://github.com/example/workflow-automation",
    category: "Enterprise",
  },
  {
    id: "4",
    title: "AR Shopping Experience",
    description: "An augmented reality solution that allows users to visualize products in their space before purchasing.",
    longDescription: "Our AR Shopping Experience revolutionizes e-commerce by bringing products into customers' homes before purchase. Using advanced augmented reality technology, the platform allows users to visualize furniture, décor, appliances, and other products in their actual living spaces. The AR engine accurately represents product dimensions, colors, and textures, providing a realistic preview that reduces purchase uncertainty and return rates. The solution includes an SDK for e-commerce platforms to easily integrate AR capabilities, as well as analytics tools to track user engagement and conversion impact. The technology works across mobile devices without requiring specialized hardware, making it accessible to a broad consumer base.",
    image: "/placeholder.svg",
    technologies: ["ARKit", "ARCore", "Unity", "Swift", "Kotlin"],
    features: [
      "Realistic 3D product visualization in real environments",
      "Accurate size and scale representation",
      "Product customization within AR (colors, finishes, etc.)",
      "Social sharing of AR visualizations",
      "Integration with major e-commerce platforms"
    ],
    demoUrl: "https://example.com/ar-demo",
    githubUrl: "https://github.com/example/ar-shopping",
    category: "Retail",
  },
  {
    id: "5",
    title: "On-Demand Expert Marketplace",
    description: "A platform connecting users with specialists in niche fields via video chat for instant consultation and problem-solving.",
    longDescription: "Our On-Demand Expert Marketplace connects individuals and businesses with specialized experts across diverse fields through seamless video consultations. The platform enables users to find qualified professionals based on expertise, availability, ratings, and price points. The scheduling system accommodates both immediate assistance and future appointments, while the secure video conferencing solution includes collaborative features such as screen sharing, document markup, and recording capabilities. A sophisticated matchmaking algorithm ensures optimal expert-client pairings, while the built-in payment system handles transactions, including escrow services for larger projects. The marketplace supports multiple languages and operates globally, creating opportunities for experts worldwide.",
    image: "/placeholder.svg",
    technologies: ["Vue.js", "WebRTC", "Ruby on Rails", "Redis", "AWS"],
    features: [
      "Real-time expert availability tracking",
      "Secure video consultation with collaborative tools",
      "AI-powered expert matching system",
      "In-platform payment processing",
      "Comprehensive rating and review system"
    ],
    demoUrl: "https://example.com/expert-demo",
    githubUrl: "https://github.com/example/expert-marketplace",
    category: "Service",
  },
  {
    id: "6",
    title: "Enterprise Data Analytics Platform",
    description: "A comprehensive solution helping businesses make sense of their complex data through visualization and AI-powered insights.",
    longDescription: "Our Enterprise Data Analytics Platform transforms raw business data into actionable intelligence through sophisticated processing, visualization, and machine learning capabilities. The platform connects to multiple data sources, including databases, APIs, and file systems, to create a unified data lake. Built-in ETL tools clean and normalize the data, while the analytics engine applies statistical models and machine learning algorithms to uncover patterns and insights. The intuitive dashboard builder allows users to create custom visualizations and reports without technical expertise. Real-time monitoring capabilities alert stakeholders to significant data changes or anomalies, while the secure sharing system ensures sensitive information remains protected.",
    image: "/placeholder.svg",
    technologies: ["Python", "Apache Spark", "TensorFlow", "D3.js", "Docker"],
    features: [
      "Multi-source data integration and normalization",
      "Advanced analytics with predictive modeling",
      "Customizable dashboard creation",
      "Automated insight generation and alerting",
      "Granular access controls for data security"
    ],
    demoUrl: "https://example.com/analytics-demo",
    githubUrl: "https://github.com/example/data-analytics",
    category: "Enterprise",
  },
  {
    id: "7",
    title: "Real Estate Investment Analytics",
    description: "A platform that helps investors identify undervalued properties and predict market trends through advanced data analysis.",
    longDescription: "Our Real Estate Investment Analytics platform transforms property investment through data-driven decision making. The system aggregates information from multiple sources, including property listings, public records, economic indicators, and demographic data, to create comprehensive market analyses. Proprietary algorithms identify potentially undervalued properties based on comparison metrics, location trends, and future development plans. The platform provides ROI projections for different investment scenarios, including fix-and-flip, rental income, and long-term appreciation. Interactive mapping features visualize neighborhood trends and property values, while notification systems alert users to new opportunities matching their investment criteria. The solution caters to individual investors, investment groups, and real estate investment trusts.",
    image: "/placeholder.svg",
    technologies: ["React", "Python", "PostGIS", "TensorFlow", "AWS"],
    features: [
      "Automated property undervaluation identification",
      "Market trend prediction using machine learning",
      "Investment scenario modeling and ROI analysis",
      "Geographic information system (GIS) integration",
      "Custom investment opportunity alerts"
    ],
    demoUrl: "https://example.com/realestate-demo",
    githubUrl: "https://github.com/example/realestate-analytics",
    category: "Finance",
  },
  {
    id: "8",
    title: "Decentralized Finance (DeFi) Tools",
    description: "A suite of user-friendly interfaces for complex blockchain operations, making DeFi accessible to mainstream users.",
    longDescription: "Our Decentralized Finance Tools suite bridges the gap between complex blockchain technologies and everyday users, making cryptocurrency financial services accessible to non-technical audiences. The platform provides intuitive interfaces for common DeFi operations, including token swapping, liquidity provision, yield farming, and borrowing/lending. Behind the simple UI, sophisticated smart contract interactions handle the complex blockchain operations securely. The system includes wallet management with enhanced security features, real-time market data and historical performance metrics, and automated risk assessment for different DeFi protocols. Educational resources integrated throughout the platform help users understand the financial concepts and risks involved, promoting responsible participation in the DeFi ecosystem.",
    image: "/placeholder.svg",
    technologies: ["Solidity", "Web3.js", "React", "Node.js", "IPFS"],
    features: [
      "Simplified interfaces for complex DeFi operations",
      "Multi-chain support across major blockchain networks",
      "Automated yield optimization strategies",
      "Real-time gas fee estimation and optimization",
      "Comprehensive transaction history and tax reporting"
    ],
    demoUrl: "https://example.com/defi-demo",
    githubUrl: "https://github.com/example/defi-tools",
    category: "Finance",
  },
];

const ProjectDetail = () => {
  const { id } = useParams<{ id: string }>();
  const project = projectsData.find((p) => p.id === id);

  if (!project) {
    return (
      <div className="container mx-auto py-12 text-center">
        <h1 className="text-3xl font-bold mb-6">Project Not Found</h1>
        <p className="mb-6">The project you're looking for doesn't exist or has been removed.</p>
        <Button asChild>
          <Link to="/projects">Back to Projects</Link>
        </Button>
      </div>
    );
  }

  return (
    <div className="container mx-auto py-12">
      <div className="mb-8">
        <Button asChild variant="outline" size="sm">
          <Link to="/projects" className="flex items-center">
            <ChevronLeft className="mr-2 h-4 w-4" />
            Back to Projects
          </Link>
        </Button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <h1 className="text-4xl font-bold mb-4">{project.title}</h1>
          <div className="mb-6">
            <Badge className="mr-2">{project.category}</Badge>
          </div>
          
          <div className="aspect-video bg-gray-100 rounded-lg mb-8 overflow-hidden">
            <img 
              src={project.image} 
              alt={project.title} 
              className="w-full h-full object-cover"
            />
          </div>

          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-semibold mb-4">Overview</h2>
              <p className="text-gray-700 whitespace-pre-line">{project.longDescription}</p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4">Key Features</h2>
              <ul className="space-y-2">
                {project.features.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4">Technologies Used</h2>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, index) => (
                  <Badge key={index} variant="secondary">
                    {tech}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div>
          <Card>
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-4">Project Links</h3>
              
              <div className="space-y-4">
                <Button asChild className="w-full" variant="default">
                  <a href={project.demoUrl} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center">
                    <ExternalLink className="mr-2 h-4 w-4" />
                    View Demo
                  </a>
                </Button>
                
                <Button asChild className="w-full" variant="outline">
                  <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center">
                    <Github className="mr-2 h-4 w-4" />
                    Source Code
                  </a>
                </Button>
              </div>

              <Separator className="my-6" />

              <h3 className="text-xl font-semibold mb-4">Interested in this project?</h3>
              <p className="text-gray-600 mb-4">Contact us to learn more about how we can build a similar solution for your business.</p>
              
              <Button asChild className="w-full">
                <Link to="/contact">Contact Us</Link>
              </Button>
            </CardContent>
          </Card>

          <Card className="mt-6">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-4">Related Projects</h3>
              <div className="space-y-4">
                {projectsData
                  .filter(p => p.id !== id && p.category === project.category)
                  .slice(0, 3)
                  .map(relatedProject => (
                    <div key={relatedProject.id} className="group">
                      <Link to={`/projects/${relatedProject.id}`} className="block group-hover:text-blue-600 font-medium">
                        {relatedProject.title}
                      </Link>
                      <p className="text-sm text-gray-500 truncate">{relatedProject.description}</p>
                    </div>
                  ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;

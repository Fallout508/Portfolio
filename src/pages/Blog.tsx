
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";

// Sample blog posts data
const blogPosts = [
  {
    id: 1,
    title: "The Future of AI in Personal Finance",
    excerpt: "How AI-powered assistants are revolutionizing the way we manage our money and make financial decisions.",
    date: "May 15, 2023",
    author: "Alex Johnson",
    authorAvatar: "/placeholder.svg",
    category: "Finance",
    tags: ["AI", "Finance", "Technology"]
  },
  {
    id: 2,
    title: "Building Scalable Enterprise Solutions",
    excerpt: "Best practices for creating workflow automation tools that can grow with your business needs.",
    date: "June 3, 2023",
    author: "Samantha Lee",
    authorAvatar: "/placeholder.svg",
    category: "Enterprise",
    tags: ["Automation", "Scalability", "Business"]
  },
  {
    id: 3,
    title: "AR Shopping: The New Retail Frontier",
    excerpt: "How augmented reality is transforming the online shopping experience and boosting conversion rates.",
    date: "July 12, 2023",
    author: "Michael Chen",
    authorAvatar: "/placeholder.svg",
    category: "Retail",
    tags: ["AR", "E-commerce", "Customer Experience"]
  },
];

const Blog = () => {
  return (
    <div className="container mx-auto py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Our Blog</h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Insights, news and perspectives from our team of experts
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogPosts.map((post) => (
          <Card key={post.id} className="h-full flex flex-col">
            <CardHeader>
              <div className="flex items-center gap-2 mb-2">
                <Badge variant="outline">{post.category}</Badge>
                <span className="text-sm text-gray-500">{post.date}</span>
              </div>
              <CardTitle className="text-2xl">{post.title}</CardTitle>
              <CardDescription className="text-base mt-2">
                {post.excerpt}
              </CardDescription>
            </CardHeader>
            <CardContent className="flex-grow">
              <div className="flex flex-wrap gap-2">
                {post.tags.map((tag) => (
                  <Badge key={tag} variant="secondary" className="text-xs">
                    {tag}
                  </Badge>
                ))}
              </div>
            </CardContent>
            <CardFooter className="border-t pt-4 flex justify-between items-center">
              <div className="flex items-center gap-2">
                <Avatar className="h-8 w-8">
                  <AvatarImage src={post.authorAvatar} alt={post.author} />
                  <AvatarFallback>{post.author.substring(0, 2)}</AvatarFallback>
                </Avatar>
                <span className="text-sm">{post.author}</span>
              </div>
              <Button size="sm" variant="outline">
                Read More
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>

      <div className="mt-12 text-center">
        <Button asChild>
          <Link to="/">Back to Home</Link>
        </Button>
      </div>
    </div>
  );
};

export default Blog;

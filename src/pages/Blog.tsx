import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Analytics from "@/components/Analytics";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const Blog = () => {
  const featuredPost = {
    title: "The Future of AI in Recruitment: Trends for 2025",
    excerpt: "Discover how artificial intelligence is revolutionizing the hiring process and what it means for HR professionals.",
    author: "Sarah Johnson",
    date: "March 15, 2025",
    category: "AI & Technology",
    readTime: "8 min read",
    image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?w=800&h=400&fit=crop"
  };

  const blogPosts = [
    {
      id: 1,
      title: "Building a Diverse Team: Best Practices",
      excerpt: "Learn effective strategies to create and maintain a diverse, inclusive workplace culture.",
      author: "Michael Chen",
      date: "March 12, 2025",
      category: "Diversity & Inclusion",
      readTime: "6 min read"
    },
    {
      id: 2,
      title: "Remote Hiring: The Complete Guide",
      excerpt: "Everything you need to know about hiring and onboarding remote employees in 2025.",
      author: "Emma Williams",
      date: "March 10, 2025",
      category: "Remote Work",
      readTime: "10 min read"
    },
    {
      id: 3,
      title: "Reducing Bias in Interview Process",
      excerpt: "Practical tips to minimize unconscious bias and create fairer hiring decisions.",
      author: "David Martinez",
      date: "March 8, 2025",
      category: "Best Practices",
      readTime: "7 min read"
    },
    {
      id: 4,
      title: "Employee Retention Strategies That Work",
      excerpt: "Data-driven approaches to keep your top talent engaged and committed.",
      author: "Lisa Anderson",
      date: "March 5, 2025",
      category: "HR Strategy",
      readTime: "9 min read"
    },
    {
      id: 5,
      title: "The ROI of HR Technology Investment",
      excerpt: "How modern HR tools deliver measurable business value and improve outcomes.",
      author: "James Wilson",
      date: "March 3, 2025",
      category: "Technology",
      readTime: "5 min read"
    },
    {
      id: 6,
      title: "Candidate Experience: Why It Matters",
      excerpt: "Creating positive candidate experiences that strengthen your employer brand.",
      author: "Sarah Johnson",
      date: "March 1, 2025",
      category: "Recruitment",
      readTime: "6 min read"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      <Analytics />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="pt-24 pb-12 px-4 animate-fade-in">
          <div className="container mx-auto max-w-4xl text-center space-y-4">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold">
              QuixHR Blog
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
              Insights, trends, and best practices for modern HR professionals
            </p>
          </div>
        </section>

        {/* Featured Post */}
        <section className="py-12 px-4">
          <div className="container mx-auto max-w-6xl">
            <Card className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="grid md:grid-cols-2 gap-0">
                <div 
                  className="h-64 md:h-auto bg-cover bg-center"
                  style={{ backgroundImage: `url(${featuredPost.image})` }}
                />
                <CardHeader className="flex flex-col justify-center p-8">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
                    <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-xs font-medium">
                      Featured
                    </span>
                    <span className="px-3 py-1 bg-muted rounded-full text-xs">
                      {featuredPost.category}
                    </span>
                  </div>
                  <CardTitle className="text-2xl md:text-3xl mb-3">
                    {featuredPost.title}
                  </CardTitle>
                  <CardDescription className="text-base mb-4">
                    {featuredPost.excerpt}
                  </CardDescription>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground mb-6">
                    <span>{featuredPost.author}</span>
                    <span className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {featuredPost.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      {featuredPost.readTime}
                    </span>
                  </div>
                  <Button className="w-fit">
                    Read Article <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </CardHeader>
              </div>
            </Card>
          </div>
        </section>

        {/* Blog Grid */}
        <section className="py-12 px-4">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-3xl font-bold mb-8">Recent Articles</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {blogPosts.map((post) => (
                <Card key={post.id} className="flex flex-col hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
                      <span className="px-3 py-1 bg-muted rounded-full text-xs">
                        {post.category}
                      </span>
                    </div>
                    <CardTitle className="text-xl mb-2">
                      {post.title}
                    </CardTitle>
                    <CardDescription>
                      {post.excerpt}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="flex-1 flex flex-col justify-end">
                    <div className="flex items-center gap-3 text-xs text-muted-foreground mb-4">
                      <span>{post.author}</span>
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3 h-3" />
                        {post.date}
                      </span>
                    </div>
                    <Button variant="ghost" className="w-fit p-0 h-auto hover:bg-transparent">
                      Read more <ArrowRight className="w-4 h-4 ml-1" />
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Pagination */}
            <div className="flex justify-center gap-2 mt-12">
              <Button variant="outline" disabled>Previous</Button>
              <Button variant="outline" className="bg-primary text-primary-foreground">1</Button>
              <Button variant="outline">2</Button>
              <Button variant="outline">3</Button>
              <Button variant="outline">Next</Button>
            </div>
          </div>
        </section>

        {/* Newsletter CTA */}
        <section className="py-20 px-4 bg-muted/30">
          <div className="container mx-auto max-w-4xl text-center space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold">
              Never Miss an Update
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Subscribe to our newsletter for the latest HR insights delivered directly to your inbox.
            </p>
            <Button size="lg" asChild>
              <Link to="/#newsletter">Subscribe Now</Link>
            </Button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Blog;

import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Analytics from "@/components/Analytics";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Clock, MessageSquare } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Link } from "react-router-dom";

const contactSchema = z.object({
  name: z.string().trim().min(2, "Name must be at least 2 characters").max(100, "Name must be less than 100 characters"),
  email: z.string().trim().email("Invalid email address").max(255, "Email must be less than 255 characters"),
  company: z.string().trim().max(100, "Company name must be less than 100 characters").optional(),
  message: z.string().trim().min(10, "Message must be at least 10 characters").max(1000, "Message must be less than 1000 characters")
});

type ContactFormData = z.infer<typeof contactSchema>;

const Contact = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema)
  });

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      toast({
        title: "Message sent!",
        description: "We'll get back to you within 24 hours.",
      });
      
      reset();
    } catch (error) {
      toast({
        title: "Error",
        description: "Something went wrong. Please try again.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Analytics />
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4">
        <div className="container mx-auto max-w-4xl text-center space-y-6">
          <h1 className="animate-fade-in">Get in Touch</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: "100ms" }}>
            Have questions about QuixHR? We're here to help. Reach out to our team and we'll respond within 24 hours.
          </p>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Contact Form */}
            <Card className="lg:col-span-2 p-8 border-2 animate-fade-in">
              <h2 className="text-2xl font-semibold mb-6">Send us a message</h2>
              
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="name">Name *</Label>
                  <Input
                    id="name"
                    placeholder="Your full name"
                    {...register("name")}
                    className={errors.name ? "border-destructive" : ""}
                  />
                  {errors.name && (
                    <p className="text-sm text-destructive">{errors.name.message}</p>
                  )}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Email *</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="your.email@company.com"
                    {...register("email")}
                    className={errors.email ? "border-destructive" : ""}
                  />
                  {errors.email && (
                    <p className="text-sm text-destructive">{errors.email.message}</p>
                  )}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="company">Company</Label>
                  <Input
                    id="company"
                    placeholder="Your company name (optional)"
                    {...register("company")}
                    className={errors.company ? "border-destructive" : ""}
                  />
                  {errors.company && (
                    <p className="text-sm text-destructive">{errors.company.message}</p>
                  )}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Message *</Label>
                  <Textarea
                    id="message"
                    placeholder="Tell us how we can help you..."
                    rows={6}
                    {...register("message")}
                    className={errors.message ? "border-destructive" : ""}
                  />
                  {errors.message && (
                    <p className="text-sm text-destructive">{errors.message.message}</p>
                  )}
                </div>

                <Button 
                  type="submit" 
                  size="lg" 
                  className="w-full"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </Button>
              </form>
            </Card>

            {/* Contact Info */}
            <div className="space-y-6 animate-fade-in" style={{ animationDelay: "100ms" }}>
              <Card className="p-6 space-y-4">
                <div className="w-12 h-12 bg-foreground text-background rounded-lg flex items-center justify-center">
                  <Mail className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-semibold">Email Us</h3>
                <p className="text-muted-foreground">
                  hello@quixhr.com
                </p>
                <p className="text-sm text-muted-foreground">
                  For general inquiries and support
                </p>
              </Card>

              <Card className="p-6 space-y-4">
                <div className="w-12 h-12 bg-foreground text-background rounded-lg flex items-center justify-center">
                  <Clock className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-semibold">Response Time</h3>
                <p className="text-muted-foreground">
                  Within 24 hours
                </p>
                <p className="text-sm text-muted-foreground">
                  Monday - Friday, 9AM - 6PM IST
                </p>
              </Card>

              <Card className="p-6 space-y-4">
                <div className="w-12 h-12 bg-foreground text-background rounded-lg flex items-center justify-center">
                  <MessageSquare className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-semibold">Quick Questions?</h3>
                <p className="text-sm text-muted-foreground">
                  Check our{" "}
                  <Link to="/#pricing" className="underline hover:text-foreground transition-colors">
                    pricing FAQ
                  </Link>
                  {" "}for instant answers
                </p>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Enterprise CTA */}
      <section className="py-16 px-4 bg-muted/20">
        <div className="container mx-auto max-w-3xl text-center space-y-6">
          <h2 className="text-3xl font-semibold">Looking for Enterprise Solutions?</h2>
          <p className="text-lg text-muted-foreground">
            Get dedicated support, custom integrations, and volume pricing for large teams
          </p>
          <Button size="lg" asChild>
            <a href="mailto:enterprise@quixhr.com">Contact Enterprise Sales</a>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;

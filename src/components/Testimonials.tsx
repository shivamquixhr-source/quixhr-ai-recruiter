import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

const testimonials = [
  {
    quote: "QuixHR reduced our time-to-hire by 60%. The AI filtering is incredibly accurate.",
    author: "Sarah Chen",
    role: "Head of HR, TechVentures",
    initials: "SC"
  },
  {
    quote: "Finally, all our applications in one place. No more juggling between platforms.",
    author: "Michael Kumar",
    role: "Talent Lead, GrowthCo",
    initials: "MK"
  },
  {
    quote: "The Kanban pipeline view transformed how we collaborate on hiring decisions.",
    author: "Emma Wilson",
    role: "HR Director, InnovateLabs",
    initials: "EW"
  }
];

const logos = [
  { name: "TechVentures", width: "w-24" },
  { name: "GrowthCo", width: "w-28" },
  { name: "InnovateLabs", width: "w-32" },
  { name: "StartupHub", width: "w-24" },
  { name: "ScaleUp", width: "w-20" },
];

const Testimonials = () => {
  return (
    <section className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center space-y-4 mb-12">
          <h2>Trusted by HR leaders</h2>
          <p className="text-xl text-muted-foreground">
            Join hundreds of companies modernizing their hiring
          </p>
        </div>

        {/* Company Logos */}
        <div className="flex flex-wrap justify-center items-center gap-8 mb-16 opacity-60">
          {logos.map((logo, index) => (
            <div 
              key={index} 
              className={`${logo.width} h-8 bg-muted rounded flex items-center justify-center text-xs font-medium animate-fade-in`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {logo.name}
            </div>
          ))}
        </div>

        {/* Testimonials */}
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index}
              className="border-border hover:shadow-lg transition-all animate-fade-in"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <CardContent className="pt-6 space-y-4">
                <p className="text-sm leading-relaxed">"{testimonial.quote}"</p>
                <div className="flex items-center gap-3">
                  <Avatar className="h-10 w-10 bg-primary/10">
                    <AvatarFallback className="text-xs font-medium">
                      {testimonial.initials}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="font-semibold text-sm">{testimonial.author}</div>
                    <div className="text-xs text-muted-foreground">{testimonial.role}</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

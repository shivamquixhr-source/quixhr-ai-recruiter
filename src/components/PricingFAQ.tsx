import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "How does QuixHR manage applications from many job portals?",
    answer: "QuixHR provides one smart link per job. All applications from LinkedIn, Naukri, or anywhere, flow into your single QuixHR dashboard."
  },
  {
    question: "What makes QuixHR's AI resume screening unique?",
    answer: "Our AI analyzes resumes against your full Job Description, not just keywords. It gives clear 'Green,' 'Yellow,' 'Red' rankings with specific reasons."
  },
  {
    question: "How does QuixHR simplify the hiring pipeline for teams?",
    answer: "Our Kanban-style pipeline lets HR drag-and-drop candidates. Managers get real-time visibility, eliminating constant updates and guesswork."
  },
  {
    question: "Can QuixHR help optimize our job posting strategy?",
    answer: "Yes. Our analytics dashboard shows which job portals deliver the best candidates, helping you optimize spend and recruitment strategy."
  },
  {
    question: "Is QuixHR suitable for faster hiring in growing Indian teams?",
    answer: "Absolutely. QuixHR automates screening and centralizes applications, empowering growing Indian teams to hire top talent faster and more efficiently."
  }
];

const PricingFAQ = () => {
  return (
    <section className="py-16 px-4">
      <div className="container mx-auto max-w-3xl">
        <div className="text-center space-y-3 mb-12">
          <h2 className="text-3xl font-semibold">Frequently asked questions</h2>
          <p className="text-lg text-muted-foreground">
            Everything you need to know about pricing and plans
          </p>
        </div>

        <Accordion type="single" collapsible className="space-y-3">
          {faqs.map((faq, index) => (
            <AccordionItem 
              key={index} 
              value={`item-${index}`}
              className="border border-border rounded-lg px-6 animate-fade-in"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              <AccordionTrigger className="text-left text-base font-medium py-5 hover:no-underline">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-base text-muted-foreground leading-relaxed pb-5">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default PricingFAQ;

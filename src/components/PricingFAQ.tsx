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
    answer: ""
  },
  {
    question: "Can I switch plans later?",
    answer: "Absolutely! You can upgrade or downgrade your plan at any time. Changes take effect immediately."
  },
  {
    question: "Do you offer refunds?",
    answer: "We offer a 14-day money-back guarantee on all paid plans. If you're not satisfied, we'll refund your payment in full."
  },
  {
    question: "Is my data secure?",
    answer: "Yes, we use bank-level encryption and are SOC2 compliant. Your candidate data is never shared with third parties."
  },
  {
    question: "Can I try before buying?",
    answer: "Yes! Start with our Free plan to explore QuixHR. Upgrade when you're ready for more features."
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

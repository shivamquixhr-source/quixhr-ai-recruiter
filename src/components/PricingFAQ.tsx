import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Can I cancel anytime?",
    answer: "Yes, you can cancel your subscription at any time. There are no cancellation fees or long-term contracts."
  },
  {
    question: "What happens when I exceed my application limit?",
    answer: "You'll receive a notification when approaching your limit. You can upgrade to a higher plan or wait until next month's reset."
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
        <div className="text-center space-y-4 mb-12">
          <h3>Frequently asked questions</h3>
          <p className="text-muted-foreground">
            Everything you need to know about pricing and plans
          </p>
        </div>

        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem 
              key={index} 
              value={`item-${index}`}
              className="border border-border rounded-lg px-6 animate-fade-in"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              <AccordionTrigger className="text-left hover:no-underline">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
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

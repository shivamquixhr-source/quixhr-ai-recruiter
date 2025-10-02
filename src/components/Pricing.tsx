import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Check } from "lucide-react";
import { useState } from "react";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";

const plans = [
  {
    name: "Free",
    priceMonthly: "₹0",
    priceYearly: "₹0",
    period: "/month",
    description: "Perfect for trying out QuixHR",
    features: [
      "Centralized link (1-2 portals)",
      "Up to 100 applications/month",
      "1 Kanban pipeline",
      "Basic AI filter (Green/Red)",
      "1 HR seat",
      "Email support",
    ],
    cta: "Start Free",
    popular: false,
  },
  {
    name: "Starter",
    priceMonthly: "₹2,499",
    priceYearly: "₹1,999",
    period: "/month",
    description: "For growing teams",
    features: [
      "Unlimited job postings",
      "Up to 1,000 applications/month",
      "Full AI filtering (Green/Yellow/Red)",
      "3 Kanban boards",
      "Up to 3 managers",
      "Email + chat support",
      "CSV import & basic API",
    ],
    cta: "Start Trial",
    popular: false,
  },
  {
    name: "Growth",
    priceMonthly: "₹7,999",
    priceYearly: "₹6,399",
    period: "/month",
    description: "Most popular choice",
    features: [
      "Everything in Starter",
      "Unlimited applications",
      "Advanced analytics dashboard",
      "Multi-team collaboration",
      "Role-based permissions",
      "Priority support",
      "Onboarding session included",
    ],
    cta: "Start Trial",
    popular: true,
  },
  {
    name: "Enterprise",
    priceMonthly: "Custom",
    priceYearly: "Custom",
    period: "",
    description: "For large organizations",
    features: [
      "Full API & HRIS integrations",
      "Dedicated onboarding",
      "SSO & advanced security",
      "Custom ML models",
      "Volume discounts",
      "Dedicated account manager",
      "SLA guarantees",
    ],
    cta: "Contact Sales",
    popular: false,
  },
];

const Pricing = () => {
  const [isYearly, setIsYearly] = useState(false);

  return (
    <section id="pricing" className="py-20 px-4">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center space-y-6 mb-12">
          <h2>Simple, transparent pricing</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Choose the plan that fits your hiring needs
          </p>
          
          {/* Pricing Toggle */}
          <div className="flex items-center justify-center gap-3 pt-4">
            <Label htmlFor="pricing-toggle" className={!isYearly ? "font-semibold" : "text-muted-foreground"}>
              Monthly
            </Label>
            <Switch
              id="pricing-toggle"
              checked={isYearly}
              onCheckedChange={setIsYearly}
            />
            <Label htmlFor="pricing-toggle" className={isYearly ? "font-semibold" : "text-muted-foreground"}>
              Yearly
            </Label>
            {isYearly && (
              <span className="ml-2 text-sm font-medium px-2 py-1 rounded-full bg-green-500/10 text-green-600 border border-green-500/20">
                Save 20%
              </span>
            )}
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {plans.map((plan, index) => (
            <Card
              key={index}
              className={`relative border-border hover:shadow-lg transition-all ${
                plan.popular ? "border-2 border-primary shadow-premium scale-105" : ""
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="bg-primary text-primary-foreground text-xs font-medium px-3 py-1 rounded-full shadow-lg">
                    Most Popular
                  </span>
                </div>
              )}
              
              <CardHeader>
                <CardTitle className="text-lg">{plan.name}</CardTitle>
                <CardDescription>{plan.description}</CardDescription>
                <div className="pt-4">
                  <span className="text-4xl font-bold">
                    {isYearly ? plan.priceYearly : plan.priceMonthly}
                  </span>
                  <span className="text-muted-foreground">{plan.period}</span>
                  {isYearly && plan.priceYearly !== "Custom" && plan.priceYearly !== "₹0" && (
                    <div className="text-xs text-muted-foreground mt-1">
                      Billed yearly
                    </div>
                  )}
                </div>
              </CardHeader>

              <CardContent className="space-y-4">
                <Button 
                  className="w-full" 
                  variant={plan.popular ? "hero" : "outline"}
                >
                  {plan.cta}
                </Button>

                <ul className="space-y-3 pt-4">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-sm">
                      <Check className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Analytics from "@/components/Analytics";
import { Card } from "@/components/ui/card";

const TermsOfService = () => {
  const sections = [
    {
      id: "acceptance",
      title: "1. Acceptance of Terms",
      content: `By accessing and using QuixHR's services, you accept and agree to be bound by these Terms of Service. If you do not agree to these terms, you should not use our services.

These terms constitute a legally binding agreement between you and QuixHR, Inc. ("QuixHR", "we", "us", or "our"). Your use of our services is also governed by our Privacy Policy, which is incorporated into these terms by reference.`
    },
    {
      id: "description",
      title: "2. Description of Service",
      content: `QuixHR provides an AI-powered recruitment and hiring platform that enables organizations to:

• Screen and evaluate candidate resumes automatically
• Manage job postings and applicant tracking
• Conduct initial candidate assessments
• Analyze hiring data and generate insights
• Collaborate with team members on hiring decisions

We reserve the right to modify, suspend, or discontinue any aspect of our services at any time, with or without notice.`
    },
    {
      id: "user-accounts",
      title: "3. User Accounts and Registration",
      content: `To use our services, you must create an account and provide accurate, complete, and current information. You are responsible for:

• Maintaining the confidentiality of your account credentials
• All activities that occur under your account
• Notifying us immediately of any unauthorized use
• Ensuring that your use complies with all applicable laws and regulations

You may not:
• Share your account with others
• Use another user's account without permission
• Create multiple accounts for fraudulent purposes
• Use automated means to create accounts`
    },
    {
      id: "acceptable-use",
      title: "4. Acceptable Use Policy",
      content: `You agree to use our services only for lawful purposes and in accordance with these terms. You agree not to:

• Violate any applicable laws or regulations
• Infringe upon the rights of others, including intellectual property rights
• Upload or transmit malicious code, viruses, or harmful content
• Attempt to gain unauthorized access to our systems or other users' accounts
• Interfere with or disrupt the integrity or performance of our services
• Use our services to discriminate against candidates based on protected characteristics
• Scrape, mine, or extract data from our platform without authorization
• Reverse engineer or attempt to extract source code from our services`
    },
    {
      id: "payment",
      title: "5. Payment and Subscriptions",
      content: `Certain features of our services require payment. By subscribing to a paid plan:

• You agree to pay all fees associated with your selected subscription tier
• Fees are billed in advance on a monthly or annual basis
• All payments are non-refundable except as required by law
• We reserve the right to change our pricing with 30 days' notice
• You authorize us to charge your payment method automatically
• You are responsible for all applicable taxes

If payment fails, we may suspend or terminate your access to paid features.`
    },
    {
      id: "intellectual-property",
      title: "6. Intellectual Property Rights",
      content: `All content, features, and functionality of our services, including but not limited to text, graphics, logos, software, and algorithms, are owned by QuixHR and are protected by copyright, trademark, and other intellectual property laws.

**Your Content**: You retain ownership of any content you upload to our platform, such as job descriptions and candidate data. By uploading content, you grant us a limited license to use, store, and process it solely to provide our services.

**Feedback**: If you provide us with feedback or suggestions, we may use them without any obligation to you.`
    },
    {
      id: "data-privacy",
      title: "7. Data Privacy and Protection",
      content: `We are committed to protecting your data and complying with applicable data protection laws, including GDPR and CCPA.

• We process personal data in accordance with our Privacy Policy
• You are responsible for obtaining necessary consents from candidates
• You must use our services in compliance with employment and anti-discrimination laws
• We implement appropriate technical and organizational security measures
• You agree to promptly report any security incidents or data breaches

For detailed information about how we handle data, please review our Privacy Policy.`
    },
    {
      id: "warranties",
      title: "8. Warranties and Disclaimers",
      content: `OUR SERVICES ARE PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED.

We do not warrant that:
• Our services will be uninterrupted, timely, secure, or error-free
• The results obtained from using our services will be accurate or reliable
• Any defects in our services will be corrected
• Our AI algorithms will make perfect hiring decisions

You use our services at your own risk. We are not responsible for hiring decisions made using our platform.`
    },
    {
      id: "limitation",
      title: "9. Limitation of Liability",
      content: `TO THE MAXIMUM EXTENT PERMITTED BY LAW, QUIXHR SHALL NOT BE LIABLE FOR:

• Any indirect, incidental, special, consequential, or punitive damages
• Loss of profits, data, use, goodwill, or other intangible losses
• Damages resulting from unauthorized access to or alteration of your content
• Damages resulting from your reliance on our services
• Any hiring decisions or employment-related disputes

Our total liability for all claims related to our services shall not exceed the amount you paid us in the twelve months preceding the claim.`
    },
    {
      id: "indemnification",
      title: "10. Indemnification",
      content: `You agree to indemnify, defend, and hold harmless QuixHR, its officers, directors, employees, and agents from any claims, liabilities, damages, losses, and expenses, including reasonable attorneys' fees, arising out of or in any way connected with:

• Your use of our services
• Your violation of these terms
• Your violation of any rights of another party
• Your employment practices or hiring decisions
• Content you upload or transmit through our services`
    },
    {
      id: "termination",
      title: "11. Termination",
      content: `We may terminate or suspend your account and access to our services immediately, without prior notice, for any reason, including:

• Breach of these terms
• Fraudulent, illegal, or harmful activity
• Non-payment of fees
• At our sole discretion

You may cancel your account at any time through your account settings. Upon termination:
• Your right to use our services will immediately cease
• We may delete your data in accordance with our data retention policy
• Provisions that by their nature should survive termination will remain in effect`
    },
    {
      id: "governing-law",
      title: "12. Governing Law and Disputes",
      content: `These terms are governed by the laws of the State of California, without regard to its conflict of law provisions.

Any disputes arising out of or relating to these terms or our services shall be resolved through:

1. **Informal Negotiation**: First, contact us to attempt to resolve the dispute informally
2. **Binding Arbitration**: If negotiation fails, disputes will be resolved through binding arbitration in San Francisco, California
3. **Class Action Waiver**: You agree to resolve disputes on an individual basis and waive the right to participate in class actions

You may opt out of arbitration by notifying us in writing within 30 days of creating your account.`
    },
    {
      id: "general",
      title: "13. General Provisions",
      content: `**Entire Agreement**: These terms constitute the entire agreement between you and QuixHR regarding our services.

**Amendments**: We may modify these terms at any time. We will notify you of material changes via email or through our platform. Continued use of our services constitutes acceptance of modified terms.

**Severability**: If any provision of these terms is found to be unenforceable, the remaining provisions will remain in full effect.

**Waiver**: Our failure to enforce any right or provision will not constitute a waiver of that right or provision.

**Assignment**: You may not assign these terms without our consent. We may assign these terms to any affiliate or successor.`
    },
    {
      id: "contact",
      title: "14. Contact Information",
      content: `If you have questions about these Terms of Service, please contact us:

**Email**: legal@quixhr.com
**Address**: QuixHR, Inc., 123 Tech Street, San Francisco, CA 94105
**Phone**: +1 (555) 123-4567

For technical support, please visit our Help Center or email support@quixhr.com.`
    }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      <Analytics />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="pt-24 pb-12 px-4 animate-fade-in">
          <div className="container mx-auto max-w-4xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
              Terms of Service
            </h1>
            <p className="text-lg text-muted-foreground">
              Last Updated: March 1, 2025
            </p>
          </div>
        </section>

        {/* Table of Contents */}
        <section className="pb-8 px-4">
          <div className="container mx-auto max-w-4xl">
            <Card className="p-6">
              <h2 className="text-xl font-semibold mb-4">Table of Contents</h2>
              <nav className="space-y-2">
                {sections.map((section) => (
                  <a
                    key={section.id}
                    href={`#${section.id}`}
                    className="block text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {section.title}
                  </a>
                ))}
              </nav>
            </Card>
          </div>
        </section>

        {/* Content Sections */}
        <section className="pb-20 px-4">
          <div className="container mx-auto max-w-4xl space-y-12">
            {sections.map((section) => (
              <div key={section.id} id={section.id} className="scroll-mt-24">
                <h2 className="text-2xl md:text-3xl font-bold mb-4">
                  {section.title}
                </h2>
                <div className="prose prose-gray max-w-none">
                  <p className="text-muted-foreground whitespace-pre-line leading-relaxed">
                    {section.content}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default TermsOfService;

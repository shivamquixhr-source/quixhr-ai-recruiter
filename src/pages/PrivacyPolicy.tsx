import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Analytics from "@/components/Analytics";
import { Card } from "@/components/ui/card";

const PrivacyPolicy = () => {
  const sections = [
    {
      id: "information-collection",
      title: "1. Information We Collect",
      content: `We collect information you provide directly to us when you create an account, use our services, or communicate with us. This includes:
      
• Personal information such as name, email address, and company details
• Account credentials and authentication data
• Candidate information and resumes you upload to our platform
• Usage data and analytics about how you interact with our services
• Payment and billing information when you subscribe to our services`
    },
    {
      id: "how-we-use",
      title: "2. How We Use Your Information",
      content: `We use the information we collect to:

• Provide, maintain, and improve our recruitment platform services
• Process transactions and send related information
• Send technical notices, updates, security alerts, and support messages
• Respond to your comments, questions, and customer service requests
• Analyze usage patterns to enhance user experience
• Detect, prevent, and address technical issues and fraudulent activity
• Comply with legal obligations and enforce our terms of service`
    },
    {
      id: "data-security",
      title: "3. Data Security",
      content: `We implement appropriate technical and organizational measures to protect your personal data against unauthorized access, alteration, disclosure, or destruction. These measures include:

• Encryption of data in transit and at rest using industry-standard protocols
• Regular security assessments and penetration testing
• Access controls and authentication mechanisms
• Employee training on data protection and security best practices
• Regular backups and disaster recovery procedures

However, no method of transmission over the internet or electronic storage is 100% secure, and we cannot guarantee absolute security.`
    },
    {
      id: "your-rights",
      title: "4. Your Rights",
      content: `You have certain rights regarding your personal data:

• **Access**: You can request access to the personal data we hold about you
• **Correction**: You can request that we correct inaccurate personal data
• **Deletion**: You can request that we delete your personal data
• **Portability**: You can request a copy of your data in a machine-readable format
• **Objection**: You can object to our processing of your personal data
• **Restriction**: You can request that we restrict processing of your personal data

To exercise these rights, please contact us at privacy@quixhr.com.`
    },
    {
      id: "cookies",
      title: "5. Cookies and Tracking",
      content: `We use cookies and similar tracking technologies to collect and track information about your use of our services. Cookies are small data files stored on your device.

We use the following types of cookies:

• **Essential cookies**: Required for the operation of our services
• **Analytics cookies**: Help us understand how users interact with our platform
• **Preference cookies**: Remember your settings and preferences
• **Marketing cookies**: Used to deliver relevant advertisements

You can control cookies through your browser settings, but disabling certain cookies may limit your use of our services.`
    },
    {
      id: "third-party",
      title: "6. Third-Party Services",
      content: `We may share your information with third-party service providers who perform services on our behalf, including:

• Cloud hosting and infrastructure providers
• Payment processors and billing services
• Analytics and monitoring tools
• Customer support and communication platforms
• Email delivery services

These third parties are contractually obligated to protect your data and use it only for the purposes we specify.`
    },
    {
      id: "data-retention",
      title: "7. Data Retention",
      content: `We retain your personal data for as long as necessary to fulfill the purposes outlined in this Privacy Policy, unless a longer retention period is required or permitted by law.

When you close your account, we will delete or anonymize your personal data within 90 days, except where we are required to retain it for legal or regulatory purposes.`
    },
    {
      id: "international",
      title: "8. International Data Transfers",
      content: `Your information may be transferred to and processed in countries other than your country of residence. These countries may have data protection laws that differ from those in your country.

We ensure that such transfers comply with applicable data protection laws and implement appropriate safeguards, such as Standard Contractual Clauses approved by the European Commission.`
    },
    {
      id: "children",
      title: "9. Children's Privacy",
      content: `Our services are not directed to individuals under the age of 16. We do not knowingly collect personal information from children. If you become aware that a child has provided us with personal data, please contact us, and we will take steps to delete such information.`
    },
    {
      id: "changes",
      title: "10. Changes to This Policy",
      content: `We may update this Privacy Policy from time to time. We will notify you of any material changes by posting the new Privacy Policy on this page and updating the "Last Updated" date.

We encourage you to review this Privacy Policy periodically for any changes. Your continued use of our services after any modifications indicates your acceptance of the updated Privacy Policy.`
    },
    {
      id: "contact",
      title: "11. Contact Us",
      content: `If you have any questions about this Privacy Policy or our data practices, please contact us at:

**Email**: privacy@quixhr.com
**Address**: QuixHR, Inc., 123 Tech Street, San Francisco, CA 94105
**Phone**: +1 (555) 123-4567

For data protection inquiries in the European Union, you may also contact our Data Protection Officer at dpo@quixhr.com.`
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
              Privacy Policy
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

export default PrivacyPolicy;

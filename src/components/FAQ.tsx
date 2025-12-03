import { motion } from "framer-motion";
import { MessageSquare } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
  const faqs = [
    {
      question: "What services does your agency offer?",
      answer: "We offer a comprehensive range of digital marketing services, including Google Advertising, Meta/Instagram Advertising, Email Marketing, and SMS Marketing. Our goal is to provide tailored solutions to meet your specific needs and objectives."
    },
    {
      question: "How do I know which digital marketing strategies are right for my business?",
      answer: "Our team of experts conducts a thorough analysis of your business, industry, target audience, and competitors to determine the most effective strategies for your unique situation. We then work closely with you to develop an aggressively scaling strategy that aligns with your goals and budget."
    },
    {
      question: "What sets your agency apart from others?",
      answer: "At Ascend, we pride ourselves on our commitment to excellence, innovation, and client satisfaction. Our team of experienced professionals brings a wealth of knowledge and expertise to every project, ensuring that we deliver outstanding results and exceed our clients' expectations."
    },
    {
      question: "How long does it take to see results from digital marketing efforts?",
      answer: "The timeline for seeing results can vary depending on factors such as your industry, competition, budget, and the specific strategies employed. However, our goal is always to deliver tangible results as quickly as possible while also focusing on long-term growth and sustainability."
    },
    {
      question: "How much does digital marketing services cost?",
      answer: "The cost of our services can vary depending on factors such as the scope of the project, the services required, and the level of customization. We offer flexible pricing options to accommodate businesses of all sizes and budgets, and we always strive to provide maximum value for our clients' investment."
    },
    {
      question: "Do you provide reports and analytics to track progress?",
      answer: "Yes, we provide regular reports and analytics to track the progress of your campaigns and measure key performance indicators. These reports include detailed insights and actionable recommendations to help you understand the impact of our efforts and make informed decisions moving forward."
    }
  ];

  return (
    <section className="py-24 bg-background relative overflow-hidden">
      <div className="container mx-auto px-6 max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/5 mb-6">
            <MessageSquare className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">FAQ</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold">
            Questions? <span className="text-primary">We've Got Answers</span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
        >
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-card/50 backdrop-blur border border-border rounded-xl px-6 data-[state=open]:border-primary/30"
              >
                <AccordionTrigger className="text-left text-foreground hover:no-underline py-5">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-5">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQ;

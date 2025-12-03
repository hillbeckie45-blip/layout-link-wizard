import { motion } from "framer-motion";
import { Shield, Users, Clock, Target } from "lucide-react";

const TeamSection = () => {
  const features = [
    {
      icon: Shield,
      title: "Battle-Tested",
      description: "Aggressively scaling 500+ verticals"
    },
    {
      icon: Users,
      title: "Industry Leaders",
      description: "Ex Meta and Ex Google employees"
    },
    {
      icon: Clock,
      title: "Lightning Fast",
      description: "The days of drawn out onboarding are over due to our rapid onboarding and campaign build out"
    },
    {
      icon: Target,
      title: "Performance Obsessed",
      description: "Every metric matters"
    }
  ];

  return (
    <section className="py-24 bg-background relative overflow-hidden">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/5 mb-6">
            <Users className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">About Ascend</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            The Team That <span className="text-primary">Makes Magic Happen</span>
          </h2>
          <p className="text-muted-foreground max-w-3xl mx-auto text-lg mb-4">
            We're not your typical agency. While others are playing it safe with "proven strategies," we're out here treating every campaign like a blockbuster movie premiere - except instead of red carpets, we're rolling out <span className="text-primary font-semibold">conversion-optimized masterpieces</span>.
          </p>
          <p className="text-muted-foreground/70 max-w-3xl mx-auto">
            Our team doesn't just understand digital marketing - we live and breathe it. We're the people who get genuinely excited about a 0.2% CTR improvement and celebrate ROAS increases like they're championship wins.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-card/50 backdrop-blur border border-border rounded-2xl p-6 hover:border-primary/30 transition-all duration-300 hover:shadow-[0_0_30px_hsl(var(--primary)/0.1)]"
            >
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center mb-4 border border-primary/20">
                <feature.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-bold text-foreground mb-2">{feature.title}</h3>
              <p className="text-sm text-muted-foreground">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;

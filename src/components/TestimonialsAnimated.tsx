"use client";

import { TestimonialsColumn } from "@/components/ui/testimonials-columns";
import { motion } from "framer-motion";

const testimonials: Array<{
  text: string;
  image: string;
  name: string;
  role: string;
  type: "photo" | "initial" | "logo";
}> = [
  {
    text: "These guys literally changed the game for us. Our ROAS went from barely breaking even to 4.8x in like 3 months. My boss thinks I'm a genius now lol",
    image: "",
    name: "Sarah M.",
    role: "Marketing Director",
    type: "initial"
  },
  {
    text: "No cap, best decision we made was switching to Ascend. Our Instagram engagement went crazy and sales followed. They actually know what they're doing fr fr",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    name: "Jake Thompson",
    role: "E-commerce Owner",
    type: "photo"
  },
  {
    text: "The way they optimized our ad spend was *chef's kiss*. We're spending less and making more. It's giving efficiency.",
    image: "",
    name: "NovaBrand Co",
    role: "DTC Brand",
    type: "logo"
  },
  {
    text: "Went from 'we need to cut marketing budget' to 'let's scale this' real quick. The team is super responsive and they actually understand Gen Z consumers",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    name: "Emily Chen",
    role: "Brand Manager",
    type: "photo"
  },
  {
    text: "Our TikTok ads were flopping hard before these guys stepped in. Now we're literally going viral and converting. Main character energy fr",
    image: "",
    name: "Marcus D.",
    role: "Creative Director",
    type: "initial"
  },
  {
    text: "10/10 would recommend. They took our small skincare brand and helped us compete with the big players. Revenue up 340% this year alone",
    image: "",
    name: "GlowUp Beauty",
    role: "Skincare Brand",
    type: "logo"
  },
  {
    text: "The reporting dashboard they set up is so clean. Finally can show my team real data instead of vibes. Numbers don't lie and neither do they",
    image: "https://randomuser.me/api/portraits/men/67.jpg",
    name: "David Park",
    role: "CEO",
    type: "photo"
  },
  {
    text: "Lowkey was skeptical at first but these results speak for themselves. Email open rates doubled, click-through went crazy. Absolutely unhinged growth",
    image: "",
    name: "Ava R.",
    role: "Growth Lead",
    type: "initial"
  },
  {
    text: "They helped us crack the Meta algorithm when everyone else was struggling. Our CPM dropped and conversions went up. It's giving success story",
    image: "",
    name: "StreetWear Supply",
    role: "Fashion Brand",
    type: "logo"
  }
];

const firstColumn = testimonials.slice(0, 3);
const secondColumn = testimonials.slice(3, 6);
const thirdColumn = testimonials.slice(6, 9);

const TestimonialsAnimated = () => {
  return (
    <section className="bg-background my-20 relative">
      <div className="container z-10 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          className="flex flex-col items-center justify-center max-w-[540px] mx-auto"
        >
          <div className="flex justify-center">
            <div className="border py-1 px-4 rounded-lg bg-primary/20 border-primary/30">
              <span className="text-primary text-sm font-medium">Our Clients</span>
            </div>
          </div>

          <h2 className="text-xl sm:text-2xl lg:text-4xl xl:text-5xl font-bold tracking-tighter mt-5 text-center md:text-7xl">
            Don't Just Take <span className="text-primary">Our Word For It</span>
          </h2>
        </motion.div>

        <div className="flex justify-center gap-6 mt-10 [mask-image:linear-gradient(to_bottom,transparent,black_25%,black_75%,transparent)] max-h-[740px] overflow-hidden">
          <TestimonialsColumn testimonials={firstColumn} duration={15} />
          <TestimonialsColumn testimonials={secondColumn} className="hidden md:block" duration={19} />
          <TestimonialsColumn testimonials={thirdColumn} className="hidden lg:block" duration={17} />
        </div>
      </div>
    </section>
  );
};

export default TestimonialsAnimated;

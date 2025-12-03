"use client";
import React from "react";
import { motion } from "framer-motion";

type Testimonial = {
  text: string;
  image: string;
  name: string;
  role: string;
  type?: "photo" | "initial" | "logo";
};

const getInitials = (name: string) => {
  return name.split(' ').map(n => n[0]).join('').toUpperCase().slice(0, 2);
};

const Avatar = ({ testimonial }: { testimonial: Testimonial }) => {
  const { image, name, type = "photo" } = testimonial;
  
  if (type === "photo" && image) {
    return (
      <img
        width={40}
        height={40}
        src={image}
        alt={name}
        className="h-10 w-10 rounded-full object-cover"
      />
    );
  }
  
  if (type === "logo") {
    return (
      <div className="h-10 w-10 rounded-lg bg-gradient-to-br from-primary/20 to-primary/40 flex items-center justify-center border border-primary/30">
        <span className="text-xs font-bold text-primary">{getInitials(name)}</span>
      </div>
    );
  }
  
  // Default to initials
  return (
    <div className="h-10 w-10 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
      <span className="text-sm font-bold text-primary-foreground">{getInitials(name)}</span>
    </div>
  );
};

export const TestimonialsColumn = (props: {
  className?: string;
  testimonials: Testimonial[];
  duration?: number;
}) => {
  return (
    <div className={props.className}>
      <motion.div
        animate={{
          translateY: "-50%",
        }}
        transition={{
          duration: props.duration || 10,
          repeat: Infinity,
          ease: "linear",
          repeatType: "loop",
        }}
        className="flex flex-col gap-6 pb-6 bg-background"
      >
        {[
          ...new Array(2).fill(0).map((_, index) => (
            <React.Fragment key={index}>
              {props.testimonials.map((testimonial, i) => (
                <div className="p-10 rounded-3xl border shadow-lg shadow-primary/10 max-w-xs w-full" key={i}>
                  <div>{testimonial.text}</div>
                  <div className="flex items-center gap-2 mt-5">
                    <Avatar testimonial={testimonial} />
                    <div className="flex flex-col">
                      <div className="font-medium tracking-tight leading-5">{testimonial.name}</div>
                      <div className="leading-5 opacity-60 tracking-tight">{testimonial.role}</div>
                    </div>
                  </div>
                </div>
              ))}
            </React.Fragment>
          )),
        ]}
      </motion.div>
    </div>
  );
};

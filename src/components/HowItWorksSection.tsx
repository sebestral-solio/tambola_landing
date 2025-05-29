"use client"

import { motion } from "framer-motion"

const steps = [
  {
    id: "choose",
    title: "Choose Game",
    description: "Browse our collection and find a game that matches your mood.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="m21 17-3.5-3.5M13.5 17H17" />
        <path d="M17 13.5V17" />
        <rect width="11" height="11" x="3" y="3" rx="2" />
        <path d="m7 8 2-2" />
        <path d="m7 12 4-4" />
        <path d="m3 12 4-4" />
        <path d="M12 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-6a2 2 0 0 1 2-2h.5" />
      </svg>
    )
  },
  {
    id: "play",
    title: "Play Instantly",
    description: "No downloads needed. Jump right into the action with just one click.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="5 3 19 12 5 21 5 3" />
      </svg>
    )
  },
  {
    id: "win",
    title: "Win & Enjoy",
    description: "Compete, win rewards, and have fun with friends and colleagues.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6" />
        <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18" />
        <path d="M4 22h16" />
        <path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22" />
        <path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22" />
        <path d="M18 2H6v7a6 6 0 0 0 12 0V2Z" />
      </svg>
    )
  }
]

// Sample user avatars for the community section
const userAvatars = [
  { id: "A1", image: "/avatars/avatar1.webp" },
  { id: "B2", image: "/avatars/avatar2.jpg" },
  { id: "C3", image: "/avatars/avatar3.jpg" },
  { id: "D4", image: "/avatars/avatar4.webp" },
  { id: "E5", image: "/avatars/avatar5.jpg" },
  { id: "F6", image: "/avatars/avatar6.jpg" },
  { id: "G7", image: "/avatars/avatar7.jpg" },
  { id: "H8", image: "/avatars/avatar8.jpg" }
]

const StepCard = ({ step, index }: { step: typeof steps[0], index: number }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, delay: index * 0.2 }}
      viewport={{ once: true }}
      className="flex flex-col items-center text-center p-6"
    >
      <div className="relative mb-6">
        <div className="absolute inset-0 bg-primary/20 rounded-full animate-pulse" />
        <div className="relative h-24 w-24 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white">
          {step.icon}
        </div>
        <div className="absolute top-0 right-0 h-8 w-8 rounded-full bg-accent flex items-center justify-center font-bold text-white">
          {index + 1}
        </div>
      </div>
      <h3 className="text-xl font-bold mb-3">{step.title}</h3>
      <p className="text-foreground/70">{step.description}</p>
    </motion.div>
  )
}

const HowItWorksSection = () => {
  return (
    <section id="how-it-works" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <h2 className="text-3xl md:text-5xl font-bungee mb-4">
            How <span className="text-gradient">It Works</span>
          </h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            Getting started with WorkPlay is easy! Follow these simple steps.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {steps.map((step, index) => (
            <StepCard key={step.id} step={step} index={index} />
          ))}
        </div>

        <div className="relative mt-24 max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="glass-panel p-8 text-center"
          >
            <h3 className="text-2xl font-bold mb-4">Join thousands of players already on WorkPlay</h3>
            <p className="text-foreground/70 mb-6">
              Our community is growing fast! Don't miss out on the fun and excitement.
            </p>
            <div className="flex flex-wrap justify-center gap-2 mb-4">
              {userAvatars.map((avatar) => (
                <div
                  key={avatar.id}
                  className="h-10 w-10 rounded-full bg-gradient-to-br from-primary/80 to-secondary/80 flex items-center justify-center text-white text-sm font-bold"
                >
                  <img src={avatar.image} alt={`Avatar ${avatar.id}`} className="w-full h-full object-cover rounded-full" />
                </div>
              ))}
              <div className="h-10 w-10 rounded-full bg-muted flex items-center justify-center text-foreground/70 text-sm font-bold">
                +2k
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default HowItWorksSection

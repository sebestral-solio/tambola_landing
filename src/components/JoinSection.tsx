"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { openLoginModal } from "@/components/GamesSection"

const JoinSection = () => {
  return (
    <section id="join" className="py-24 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-primary/10 via-transparent to-secondary/10" />
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 0.5, x: 0 }}
          transition={{ duration: 1.5 }}
          viewport={{ once: true }}
          className="absolute bottom-0 -left-20 h-[300px] w-[300px] rounded-full bg-primary/20 blur-3xl"
        />
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 0.5, x: 0 }}
          transition={{ duration: 1.5 }}
          viewport={{ once: true }}
          className="absolute top-0 -right-20 h-[300px] w-[300px] rounded-full bg-secondary/20 blur-3xl"
        />
      </div>

      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="glass-panel p-10 md:p-16 text-center"
          >
            <h2 className="text-3xl md:text-5xl font-bungee mb-6">
              Ready to <span className="text-gradient">Play</span>?
            </h2>
            <p className="text-xl text-foreground/80 mb-8 max-w-2xl mx-auto">
              Join WorkPlay today and dive into a world of exciting games designed to bring fun to your workday!
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4 mb-12">
              <Button
                size="lg"
                className="px-8 py-6 text-lg rounded-xl bg-gradient-to-r from-primary to-secondary hover:opacity-90 transition-all"
                onClick={() => window.location.href = "https://games.republicofengineers.com/lander"}
              >
                Join WorkPlay Today
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="px-8 py-6 text-lg rounded-xl border-2"
                onClick={() => {
                  document.getElementById('games')?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                Explore Games
              </Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
              {["Unlimited Access", "New Games Monthly", "Play with Friends"].map((feature, index) => (
                <motion.div
                  key={`feature-${feature}`}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-center gap-3"
                >
                  <div className="h-10 w-10 rounded-full bg-primary/20 flex items-center justify-center text-primary">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M20 6 9 17l-5-5" />
                    </svg>
                  </div>
                  <span className="font-medium">{feature}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <h3 className="text-xl md:text-2xl font-bold mb-3">
            More Games Coming Soon
          </h3>
          <p className="text-foreground/70">
            Our team is working on new exciting games to expand the WorkPlay universe!
          </p>

          <div className="flex flex-wrap justify-center gap-4 mt-8">
            {["Puzzle Masters", "Memory Match", "Quiz Showdown", "Trivia Time"].map((game) => (
              <div
                key={game}
                className="pill-badge px-4 py-2 rounded-full bg-gradient-to-r from-muted to-muted/50 text-foreground/70 font-medium"
              >
                {game}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default JoinSection

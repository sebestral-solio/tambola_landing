"use client"

import { useState, useRef, useEffect } from "react"
import { motion } from "framer-motion"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

// Game data
const games = [
  {
    id: "tambola",
    name: "Tambola",
    description: "Classic number-calling game with exciting prizes!",
    image: "/images/tambola.png",
    color: "from-primary/80 to-secondary/80",
  },
  {
    id: "scream4icecream",
    name: "Scream4Icecream",
    description: "Get loud and win some sweet virtual treats!",
    image: "/images/scream.jpg",
    color: "from-secondary/80 to-tertiary/80",
  },
  {
    id: "stop10",
    name: "Stop@10",
    description: "Strategy game that tests your luck and timing!",
    image: "/images/stopper.png",
    color: "from-tertiary/80 to-primary/80",
  },
  {
    id: "mystery-box",
    name: "Mystery Box",
    description: "Unlock surprises and win amazing rewards!",
    image: "/images/mystery.avif",
    color: "from-primary/80 to-tertiary/80",
  },
  {
    id: "color-clash",
    name: "Color Clash",
    description: "Fast-paced color matching game with a twist!",
    image: "/images/color.png",
    color: "from-secondary/80 to-primary/80",
  },
  {
    id: "word-wizards",
    name: "Word Wizards",
    description: "Test your vocabulary in this magical word game!",
    image: "/images/word_wizards.jpg",
    color: "from-tertiary/80 to-secondary/80",
  },
]

// Event bus for login modal
interface LoginModalEvent {
  open: boolean;
}

export const LoginEventBus = {
  _callbacks: [] as ((event: LoginModalEvent) => void)[],
  subscribe(callback: (event: LoginModalEvent) => void) {
    this._callbacks.push(callback);
    return () => {
      this._callbacks = this._callbacks.filter(cb => cb !== callback);
    };
  },
  emit(event: LoginModalEvent) {
    for (const callback of this._callbacks) {
      callback(event);
    }
  }
};

export const openLoginModal = () => {
  LoginEventBus.emit({ open: true });
};

const GameCard = ({ game }: { game: typeof games[0] }) => {
  const [imgError, setImgError] = useState(false)
  return (
    <motion.div
      whileHover={{ y: -10 }}
      className="game-card flex flex-col min-w-[280px] max-w-[280px] h-[350px] mx-2 sm:mx-4"
    >
      <div className="rounded-xl overflow-hidden h-[180px] mb-3">
        {(!imgError && game.image) ? (
          <img
            src={game.image}
            alt={game.name}
            className="w-full h-full object-cover"
            onError={() => setImgError(true)}
          />
        ) : (
          <div
            className={`w-full h-full bg-gradient-to-br ${game.color} flex items-center justify-center p-4`}
          >
            <span className="font-bungee text-4xl text-white">{game.name.charAt(0)}</span>
          </div>
        )}
      </div>
      <div className="flex flex-col flex-grow p-4">
        <h3 className="text-xl font-bold mb-2">{game.name}</h3>
        <p className="text-sm text-foreground/70 mb-4 flex-grow">{game.description}</p>
        <Button
          className="w-full bg-gradient-to-r from-primary to-secondary hover:opacity-90"
          onClick={() => window.location.href = "https://games.republicofengineers.com/lander"}
        >
          Play Now
        </Button>
      </div>
    </motion.div>
  )
}

const GamesSection = () => {
  const viewportRef = useRef<HTMLDivElement>(null)
  const [isDragging, setIsDragging] = useState(false)
  const [startX, setStartX] = useState(0)
  const [scrollPosition, setScrollPosition] = useState(0)

  const handleMouseDown = (e: React.MouseEvent) => {
    if (!viewportRef.current) return
    setIsDragging(true)
    setStartX(e.pageX - viewportRef.current.offsetLeft)
    setScrollPosition(viewportRef.current.scrollLeft)
  }

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !viewportRef.current) return
    const x = e.pageX - viewportRef.current.offsetLeft
    const walk = (x - startX) * 2 // Scroll speed multiplier
    viewportRef.current.scrollLeft = scrollPosition - walk
  }

  const scrollToLeft = () => {
    if (viewportRef.current) {
      viewportRef.current.scrollBy({
        left: -300,
        behavior: 'smooth'
      });
    }
  }

  const scrollToRight = () => {
    if (viewportRef.current) {
      viewportRef.current.scrollBy({
        left: 300,
        behavior: 'smooth'
      });
    }
  }

  return (
    <section id="games" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="mb-12 text-center"
        >
          <h2 className="text-3xl md:text-5xl font-bungee mb-4">
            Trending <span className="text-gradient">Games</span>
          </h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            Discover our most popular games that everyone is playing right now!
          </p>
        </motion.div>

        <div className="relative">
          {/* Left scroll indicator */}
          <div className="absolute left-0 top-1/2 -translate-y-1/2 z-10">
            <div
              className="h-12 w-12 flex items-center justify-center bg-background/80 backdrop-blur-sm rounded-full shadow-lg cursor-pointer hover:bg-muted transition-colors"
              onClick={scrollToLeft}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="m15 18-6-6 6-6"/>
              </svg>
            </div>
          </div>

          {/* Right scroll indicator */}
          <div className="absolute right-0 top-1/2 -translate-y-1/2 z-10">
            <div
              className="h-12 w-12 flex items-center justify-center bg-background/80 backdrop-blur-sm rounded-full shadow-lg cursor-pointer hover:bg-muted transition-colors"
              onClick={scrollToRight}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="m9 18 6-6-6-6"/>
              </svg>
            </div>
          </div>

          <ScrollArea
            className="w-full pb-6 px-2"
            viewportRef={viewportRef}
          >
            <div
              className="flex space-x-4 sm:space-x-6 py-4 px-2 w-max"
              onMouseDown={handleMouseDown}
              onMouseUp={() => setIsDragging(false)}
              onMouseLeave={() => setIsDragging(false)}
              onMouseMove={handleMouseMove}
            >
              {games.map((game) => (
                <GameCard key={game.id} game={game} />
              ))}

              <div className="game-card flex flex-col min-w-[280px] max-w-[280px] h-[350px] mx-2 sm:mx-4 items-center justify-center">
                <div className="h-24 w-24 rounded-full bg-muted flex items-center justify-center mb-6">
                  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 2a10 10 0 1 0 10 10H12V2Z" />
                    <path d="M22 12c0-5.523-4.477-10-10-10v10h10Z" />
                  </svg>
                </div>
                <p className="text-lg font-bold mb-2">More Games</p>
                <p className="text-sm text-foreground/70 text-center mb-4 px-4">
                  Many more games to discover on WorkPlay!
                </p>
              </div>
            </div>
          </ScrollArea>
        </div>
      </div>
    </section>
  )
}

export default GamesSection

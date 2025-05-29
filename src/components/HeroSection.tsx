// "use client"

// import { motion } from "framer-motion"
// import { Button } from "@/components/ui/button"
// import { openLoginModal } from "@/components/GamesSection"

// const HeroSection = () => {
//   const scrollToGames = () => {
//     const gamesSection = document.getElementById("games")
//     if (gamesSection) {
//       gamesSection.scrollIntoView({ behavior: "smooth" })
//     }
//   }

//   return (
//     <section className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden">
//       {/* Animated Background Elements */}
//       <div className="absolute inset-0 -z-10 overflow-hidden">
//         <motion.div
//           className="absolute -right-20 -top-20 h-[30rem] w-[30rem] rounded-full bg-primary/10"
//           initial={{ opacity: 0, scale: 0.8 }}
//           animate={{ opacity: 1, scale: 1 }}
//           transition={{ duration: 1.5, ease: "easeOut" }}
//         />
//         <motion.div
//           className="absolute left-1/3 top-1/4 h-24 w-24 rounded-full bg-secondary/20 animate-float"
//           initial={{ opacity: 0, y: 50 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 1, delay: 0.5 }}
//         />
//         <motion.div
//           className="absolute left-10 bottom-20 h-40 w-40 rounded-full bg-tertiary/20 animate-float-delayed"
//           initial={{ opacity: 0, y: 50 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 1, delay: 0.8 }}
//         />
//         <motion.div
//           className="absolute right-1/4 bottom-10 h-16 w-16 rounded-full bg-secondary/20"
//           initial={{ opacity: 0, y: 50 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 1, delay: 1.2 }}
//         />
//       </div>

//       <div className="container mx-auto px-4">
//         <div className="max-w-3xl mx-auto text-center">
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.7 }}
//           >
//             <h1 className="text-4xl md:text-6xl font-bungee mb-6 tracking-tight">
//               <span className="text-gradient">Play Your Way</span> at WorkPlay!
//             </h1>
//           </motion.div>

//           <motion.div
//             initial={{ opacity: 0, y: 30 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.7, delay: 0.2 }}
//           >
//             <p className="text-xl text-foreground/80 mb-8">
//               A world of endless games to explore! Join the fun with our vibrant collection of interactive games.
//             </p>
//           </motion.div>

//           <motion.div
//             className="flex flex-col sm:flex-row items-center justify-center gap-4"
//             initial={{ opacity: 0, y: 30 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.7, delay: 0.4 }}
//           >
//             <Button
//               size="lg"
//               onClick={() => window.location.href = "https://games.republicofengineers.com/lander"}
//               className="px-8 py-6 text-lg rounded-xl bg-gradient-to-r from-primary to-secondary hover:opacity-90 transition-all"
//             >
//               Start Playing
//             </Button>
//             <Button
//               size="lg"
//               variant="outline"
//               className="px-8 py-6 text-lg rounded-xl border-2"
//               onClick={scrollToGames}
//             >
//               Learn More
//             </Button>
//           </motion.div>
//         </div>
//       </div>
//     </section>
//   )
// }

// export default HeroSection

"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { openLoginModal } from "@/components/GamesSection"

const HeroSection = () => {
  const scrollToGames = () => {
    const gamesSection = document.getElementById("games")
    if (gamesSection) {
      gamesSection.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden">

      {/* Hero Content */}
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <h1 className="text-4xl md:text-6xl font-bungee mb-6 tracking-tight">
              <span className="text-gradient">Play Your Way</span> at WorkPlay!
            </h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <p className="text-xl text-foreground/80 mb-8">
              A world of endless games to explore! Join the fun with our vibrant collection of interactive games.
            </p>
          </motion.div>

          <motion.div
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
          >
            <Button
              size="lg"
              onClick={() => window.location.href = "https://games.republicofengineers.com/lander"}
              className="px-8 py-6 text-lg rounded-xl bg-gradient-to-r from-primary to-secondary hover:opacity-90 transition-all"
            >
              Start Playing
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="px-8 py-6 text-lg rounded-xl border-2"
              onClick={scrollToGames}
            >
              Learn More
            </Button>
          </motion.div>
        </div>
      </div>

      {/* Falling Images Area */}
      <div className="relative mt-20 h-[500px] overflow-hidden">
        {/* White Fade Top */}
        <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-[#FAF9FB] to-transparent z-10" />
       
        {/* Falling Images */}
        <div className="absolute inset-0 -z-10">
          <img src="/images/color.png" className="falling-image" />
          <img src="/images/mystery.avif" className="falling-image" />
          <img src="/images/scream.jpg" className="falling-image" />
          <img src="/images/stopper.png" className="falling-image" />
          <img src="/images/tambola.png" className="falling-image" />
          <img src="/images/word_wizards.jpg" className="falling-image" />
          <img src="/images/color.png" className="falling-image" />
          <img src="/images/mystery.avif" className="falling-image" />
          <img src="/images/scream.jpg" className="falling-image" />
          <img src="/images/stopper.png" className="falling-image" />
          <img src="/images/tambola.png" className="falling-image" />
          <img src="/images/word_wizards.jpg" className="falling-image" />
        </div>

        {/* White Fade Bottom */}
        <div className="bottom-curve" />
        {/* <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-[#FAF9FB] to-transparent z-10 bottom-curve" /> */}
      </div>

      {/* Background Dots (optional if you want to keep) */}
      <div className="absolute inset-0 -z-20 overflow-hidden">
        <motion.div
          className="absolute -right-20 -top-20 h-[30rem] w-[30rem] rounded-full bg-primary/10"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        />
        <motion.div
          className="absolute left-1/3 top-1/4 h-24 w-24 rounded-full bg-secondary/20 animate-float"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        />
        <motion.div
          className="absolute left-10 bottom-20 h-40 w-40 rounded-full bg-tertiary/20 animate-float-delayed"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
        />
        <motion.div
          className="absolute right-1/4 bottom-10 h-16 w-16 rounded-full bg-secondary/20"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.2 }}
        />
      </div>

      {/* Falling Images Animation */}
      <style jsx>{`
       .falling-image {
  position: absolute;
  top: -100px;
  width: 200px;
  height: 200px;
  border-radius: 30px;
  overflow: hidden; /* <--- important to clip corners */
  object-fit: cover; /* <--- better than contain for border-radius */
  opacity: 1;
  animation: fall linear infinite;
  filter: contrast(2);
}



        @keyframes fall {
          0% {
            transform: translateY(-100px) translateX(0px);
            opacity: 1;
          }
          100% {
            transform: translateY(600px) translateX(50px);
            opacity: 1;
          }
        }

        .falling-image:nth-child(1) {
          left: 10%;
          animation-duration: 10s;
          animation-delay: 0s;
        }
        .falling-image:nth-child(2) {
          left: 30%;
          animation-duration: 12s;
          animation-delay: 2s;
        }
        .falling-image:nth-child(3) {
          left: 50%;
          animation-duration: 9s;
          animation-delay: 4s;
        }
        .falling-image:nth-child(4) {
          left: 70%;
          animation-duration: 14s;
          animation-delay: 1s;
        }
        .falling-image:nth-child(5) {
          left: 90%;
          animation-duration: 11s;
          animation-delay: 3s;
        }
        .falling-image:nth-child(6) {
          left: 20%;
          animation-duration: 13s;
          animation-delay: 5s;
        }
         

.bottom-curve {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 500px;
  box-shadow: 
  inset 0 100px 60px rgba(255, 255, 255, 1),
    inset 0 -80px 60px rgba(255, 255, 255, 1), /* inner shadow towards bottom */
    0 0 0px 180px #fff, /* solid bottom-left outer shadow */
    0 0 0px 120px #fff, /* solid bottom-right outer shadow */
    0 10px 40px rgba(0, 0, 0, 0.6); /* outer drop shadow */
  border-top-left-radius: 50% 40%;
  border-top-right-radius: 50% 40%;
  z-index: 2;
  pointer-events: none;
}

      `}</style>
    </section>
  )
}

export default HeroSection

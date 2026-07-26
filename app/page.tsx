"use client";

import React from "react";
import { motion, Variants } from "framer-motion";
import { Music, Video, Disc, Sparkles, ExternalLink, Gamepad2, Image as ImageIcon } from "lucide-react";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 260,
      damping: 20,
    },
  },
};

export default function TsuAWebsite() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100 selection:bg-indigo-500 selection:text-white px-4 py-12 md:py-20 flex justify-center">
      <motion.div
        className="w-full max-w-2xl space-y-8"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* HERO SECTION */}
        <motion.section variants={itemVariants} className="text-center space-y-4">
          <div className="relative inline-block">
            <div className="w-24 h-24 md:w-28 md:h-28 rounded-full bg-gradient-to-tr from-indigo-500 via-purple-500 to-pink-500 p-[3px] shadow-lg shadow-indigo-500/20">
              <div className="w-full h-full rounded-full bg-slate-900 flex items-center justify-center overflow-hidden">
                {/* Replace this icon with an <img> tag if you want a profile photo: */}
                {/* <img src="/avatar.png" alt="Tsu_a" className="w-full h-full object-cover" /> */}
                <Sparkles className="w-10 h-10 text-indigo-400 animate-pulse" />
              </div>
            </div>
          </div>
          <div className="space-y-2">
            <h1 className="text-3xl md:text-4xl font-bold tracking-tight bg-gradient-to-r from-white via-slate-200 to-slate-400 bg-clip-text text-transparent">
              Tsu_a
            </h1>
            <p className="text-slate-400 text-sm md:text-base max-w-md mx-auto">
              Music Production • Pixel Art • Game Development
            </p>
          </div>
        </motion.section>

        {/* FEATURED MUSIC & VIDEO */}
        <motion.section variants={itemVariants} className="space-y-4">
          <h2 className="text-xs uppercase font-semibold tracking-wider text-slate-500 flex items-center gap-2">
            <Disc className="w-4 h-4 text-indigo-400" /> Featured Music & Videos
          </h2>

          <div className="grid gap-4">
            {/* Spotify Track Embed - Replace the ID after track/ with your Spotify track ID */}
            <motion.div
              whileHover={{ scale: 1.01 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="p-1 rounded-2xl bg-slate-900/80 border border-slate-800 shadow-lg backdrop-blur-sm"
            >
              <iframe
                style={{ borderRadius: "12px" }}
                src="https://open.spotify.com/embed/track/4cOdK2wGLETKBW3PvgPWqT?utm_source=generator&theme=0"
                width="100%"
                height="152"
                frameBorder="0"
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                loading="lazy"
                title="Spotify Embed"
              ></iframe>
            </motion.div>

            {/* YouTube Embed - Replace video ID after embed/ with your YouTube video ID */}
            <motion.div
              whileHover={{ scale: 1.01 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="p-3 rounded-2xl bg-slate-900/80 border border-slate-800 shadow-lg backdrop-blur-sm space-y-3"
            >
              <div className="flex items-center justify-between px-1">
                <span className="text-xs font-medium text-red-400 flex items-center gap-1.5">
                  <Video className="w-4 h-4" /> Latest Music Video
                </span>
                <ExternalLink className="w-3.5 h-3.5 text-slate-500" />
              </div>
              <div className="aspect-video w-full rounded-xl overflow-hidden bg-slate-950">
                <iframe
                  className="w-full h-full"
                  src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                  title="YouTube video player"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </motion.div>
          </div>
        </motion.section>

        {/* PIXEL ART & GAME GALLERY */}
        <motion.section variants={itemVariants} className="space-y-4">
          <h2 className="text-xs uppercase font-semibold tracking-wider text-slate-500 flex items-center gap-2">
            <ImageIcon className="w-4 h-4 text-purple-400" /> Gallery & Projects
          </h2>
          <div className="grid grid-cols-2 gap-3">
            {[
              { title: "Pixel Artwork 1", icon: ImageIcon },
              { title: "Isometric Environment", icon: ImageIcon },
              { title: "Game Dev Log", icon: Gamepad2 },
              { title: "Music Visualizer", icon: Music },
            ].map((item, idx) => (
              <motion.div
                key={idx}
                whileHover={{ scale: 1.03 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="aspect-square rounded-xl bg-slate-900 border border-slate-800 flex flex-col items-center justify-center relative overflow-hidden group cursor-pointer p-4 text-center"
              >
                <item.icon className="w-8 h-8 text-slate-600 group-hover:text-indigo-400 transition-colors mb-2" />
                <span className="text-xs font-medium text-slate-400 group-hover:text-slate-200 transition-colors">
                  {item.title}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* SOCIAL LINKS */}
        <motion.section variants={itemVariants} className="pt-4">
          <div className="flex flex-wrap justify-center gap-3">
            {[
              { name: "Spotify", url: "#", color: "hover:border-green-500/50 hover:text-green-400" },
              { name: "YouTube", url: "#", color: "hover:border-red-500/50 hover:text-red-400" },
              { name: "SoundCloud", url: "#", color: "hover:border-orange-500/50 hover:text-orange-400" },
              { name: "Twitter / X", url: "#", color: "hover:border-sky-500/50 hover:text-sky-400" },
            ].map((platform) => (
              <motion.a
                key={platform.name}
                href={platform.url}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.98 }}
                className={`px-4 py-2 rounded-full border border-slate-800 bg-slate-900/50 text-xs font-medium text-slate-400 transition-colors ${platform.color}`}
              >
                {platform.name}
              </motion.a>
            ))}
          </div>
        </motion.section>
      </motion.div>
    </main>
  );
}
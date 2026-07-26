"use client";

import React from "react";
import { motion, Variants } from "framer-motion";
import { Disc, Sparkles, ExternalLink, Music2, Radio, Mic2 } from "lucide-react";

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
                {/* To use your own photo, place avatar.png in public/ and uncomment line below: */}
                {/* <img src="/avatar.png" alt="Tsu_a" className="w-full h-full object-cover" /> */}
                <Sparkles className="w-10 h-10 text-indigo-400 animate-pulse" />
              </div>
            </div>
          </div>
          <div className="space-y-2">
            <h1 className="text-3xl md:text-4xl font-bold tracking-tight bg-gradient-to-r from-white via-slate-200 to-slate-400 bg-clip-text text-transparent">
              Tsu_a
            </h1>
            <p className="text-slate-400 text-sm md:text-base max-w-md mx-auto flex items-center justify-center gap-1.5">
              <Mic2 className="w-4 h-4 text-indigo-400" /> Singer & Songwriter
            </p>
          </div>
        </motion.section>

        {/* ARTIST MUSIC PROFILES */}
        <motion.section variants={itemVariants} className="space-y-4">
          <h2 className="text-xs uppercase font-semibold tracking-wider text-slate-500 flex items-center gap-2">
            <Disc className="w-4 h-4 text-indigo-400" /> Official Music Profiles
          </h2>

          <div className="grid gap-3">
            {[
              {
                platform: "Spotify",
                url: "https://open.spotify.com/artist/7w53gbB814NivmsMnnGoBw?si=FW4SqDw4QxWoZ6ux9uhE4Q",
                desc: "Listen to official singles & discography",
                badge: "Spotify",
                color: "hover:border-green-500/50 hover:bg-green-500/10 text-green-400",
                icon: Music2,
              },
              {
                platform: "Apple Music",
                url: "https://music.apple.com/in/artist/tsu-a/6793347338",
                desc: "Stream lossless audio releases",
                badge: "Apple Music",
                color: "hover:border-pink-500/50 hover:bg-pink-500/10 text-pink-400",
                icon: Disc,
              },
              {
                platform: "Amazon Music",
                url: "https://music.amazon.in/artists/B0H9XF96Q1/tsu-a",
                desc: "Stream on Amazon Music Unlimited",
                badge: "Amazon Music",
                color: "hover:border-cyan-500/50 hover:bg-cyan-500/10 text-cyan-400",
                icon: Radio,
              },
              {
                platform: "YouTube Music",
                url: "https://music.youtube.com/@tusharsundi",
                desc: "Subscribe for music uploads & official releases",
                badge: "YouTube",
                color: "hover:border-red-500/50 hover:bg-red-500/10 text-red-400",
                icon: ExternalLink,
              },
            ].map((item, idx) => (
              <motion.a
                key={idx}
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.01, y: -2 }}
                whileTap={{ scale: 0.99 }}
                className={`p-4 rounded-2xl bg-slate-900/80 border border-slate-800 shadow-lg backdrop-blur-sm flex items-center justify-between transition-all group ${item.color}`}
              >
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-xl bg-slate-950 border border-slate-800 text-slate-300 group-hover:text-white transition-colors">
                    <item.icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-slate-200 group-hover:text-white transition-colors">
                      {item.platform}
                    </h3>
                    <p className="text-xs text-slate-400">{item.desc}</p>
                  </div>
                </div>
                <ExternalLink className="w-4 h-4 text-slate-500 group-hover:text-slate-200 transition-colors" />
              </motion.a>
            ))}
          </div>
        </motion.section>

        {/* SOCIAL & COMMUNITY LINKS */}
        <motion.section variants={itemVariants} className="pt-2">
          <h2 className="text-xs uppercase font-semibold tracking-wider text-slate-500 text-center mb-3">
            Connect
          </h2>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              { name: "SoundCloud", url: "https://soundcloud.com/YOUR_HANDLE", color: "hover:border-orange-500/50 hover:text-orange-400" },
              { name: "Instagram", url: "https://instagram.com/YOUR_HANDLE", color: "hover:border-pink-500/50 hover:text-pink-400" },
              { name: "Twitter / X", url: "https://x.com/YOUR_HANDLE", color: "hover:border-sky-500/50 hover:text-sky-400" },
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
"use client";

import React, { useState, useRef } from "react";
import { motion, Variants, AnimatePresence } from "framer-motion";
import {
  Disc,
  Sparkles,
  ExternalLink,
  Music2,
  Radio,
  Mic2,
  Play,
  Pause,
  Share2,
  Check,
  Volume2,
  VolumeX,
  Mail,
  Copy,
  Send,
} from "lucide-react";

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
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [copiedShare, setCopiedShare] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  const contactEmail = "your.email@example.com"; // Replace with your actual email address

  const audioRef = useRef<HTMLAudioElement | null>(null);

  const togglePlay = () => {
    if (!audioRef.current) return;
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  const toggleMute = () => {
    if (!audioRef.current) return;
    audioRef.current.muted = !isMuted;
    setIsMuted(!isMuted);
  };

  const handleShare = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopiedShare(true);
    setTimeout(() => setCopiedShare(false), 2000);
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(contactEmail);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  return (
    <main className="min-h-screen bg-rose-50/40 text-slate-800 selection:bg-pink-200 selection:text-slate-900 px-4 py-12 md:py-20 flex justify-center pb-28">
      {/* Hidden Audio Element for Snippet Preview */}
      <audio
        ref={audioRef}
        src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3"
        onEnded={() => setIsPlaying(false)}
      />

      <motion.div
        className="w-full max-w-2xl space-y-8"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* HERO SECTION */}
        <motion.section variants={itemVariants} className="text-center space-y-4 relative">
          {/* Quick Share Button */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleShare}
            className="absolute right-0 top-0 p-2.5 rounded-full bg-white/80 border border-purple-200/60 text-slate-600 hover:text-purple-600 shadow-sm transition-colors flex items-center gap-1.5 text-xs font-medium backdrop-blur-sm"
            title="Share Profile"
          >
            {copiedShare ? <Check className="w-4 h-4 text-emerald-500" /> : <Share2 className="w-4 h-4" />}
            <span className="hidden sm:inline">{copiedShare ? "Copied!" : "Share"}</span>
          </motion.button>

          <div className="relative inline-block">
            <div className="w-24 h-24 md:w-28 md:h-28 rounded-full bg-gradient-to-tr from-pink-300 via-purple-300 to-indigo-300 p-[3px] shadow-lg shadow-purple-200/50">
              <div className="w-full h-full rounded-full bg-white flex items-center justify-center overflow-hidden">
                <Sparkles className="w-10 h-10 text-purple-400 animate-pulse" />
              </div>
            </div>
          </div>
          <div className="space-y-2">
            <h1 className="text-3xl md:text-4xl font-bold tracking-tight bg-gradient-to-r from-purple-700 via-pink-600 to-indigo-600 bg-clip-text text-transparent">
              Tsu_a
            </h1>
            <p className="text-slate-500 text-sm md:text-base max-w-md mx-auto flex items-center justify-center gap-1.5 font-medium">
              <Mic2 className="w-4 h-4 text-purple-400" /> Singer & Songwriter
            </p>
          </div>
        </motion.section>

        {/* LATEST RELEASE SPOTLIGHT CARD */}
        <motion.section variants={itemVariants}>
          <div className="p-4 rounded-2xl bg-gradient-to-r from-purple-100/80 via-white to-pink-100/80 border border-purple-200/70 shadow-sm backdrop-blur-sm flex items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-purple-200/60 border border-purple-300/50 flex items-center justify-center text-purple-600 shrink-0">
                <Disc className={`w-6 h-6 ${isPlaying ? "animate-spin" : ""}`} />
              </div>
              <div>
                <span className="text-[10px] uppercase font-bold tracking-wider text-purple-600 bg-purple-200/50 px-2 py-0.5 rounded-full border border-purple-300/40">
                  Latest Single Preview
                </span>
                <h3 className="text-sm font-semibold text-slate-800 mt-1">Featured Release Title</h3>
                <p className="text-xs text-slate-500">Press play to listen to a preview snippet</p>
              </div>
            </div>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={togglePlay}
              className="p-3 rounded-full bg-purple-400 hover:bg-purple-500 text-white shadow-md shadow-purple-300/50 shrink-0 transition-colors"
            >
              {isPlaying ? <Pause className="w-5 h-5 fill-current" /> : <Play className="w-5 h-5 fill-current ml-0.5" />}
            </motion.button>
          </div>
        </motion.section>

        {/* ARTIST MUSIC PROFILES */}
        <motion.section variants={itemVariants} className="space-y-4">
          <h2 className="text-xs uppercase font-semibold tracking-wider text-slate-400 flex items-center gap-2">
            <Disc className="w-4 h-4 text-purple-400" /> Official Music Profiles
          </h2>

          <div className="grid gap-3">
            {[
              {
                platform: "Spotify",
                url: "https://open.spotify.com/artist/7w53gbB814NivmsMnnGoBw?si=FW4SqDw4QxWoZ6ux9uhE4Q",
                desc: "Listen to official singles & discography",
                color: "hover:border-emerald-300 hover:bg-emerald-50/60 text-emerald-600",
                icon: Music2,
              },
              {
                platform: "Apple Music",
                url: "https://music.apple.com/in/artist/tsu-a/6793347338",
                desc: "Stream lossless audio releases",
                color: "hover:border-rose-300 hover:bg-rose-50/60 text-rose-500",
                icon: Disc,
              },
              {
                platform: "Amazon Music",
                url: "https://music.amazon.in/artists/B0H9XF96Q1/tsu-a",
                desc: "Stream on Amazon Music Unlimited",
                color: "hover:border-sky-300 hover:bg-sky-50/60 text-sky-600",
                icon: Radio,
              },
              {
                platform: "YouTube Music",
                url: "https://music.youtube.com/@tusharsundi",
                desc: "Subscribe for music uploads & official releases",
                color: "hover:border-amber-300 hover:bg-amber-50/60 text-amber-600",
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
                className={`p-4 rounded-2xl bg-white/90 border border-purple-100 shadow-sm flex items-center justify-between transition-all group ${item.color}`}
              >
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-xl bg-purple-50/80 border border-purple-100 text-purple-500 group-hover:scale-105 transition-all">
                    <item.icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-slate-800 transition-colors">
                      {item.platform}
                    </h3>
                    <p className="text-xs text-slate-500">{item.desc}</p>
                  </div>
                </div>
                <ExternalLink className="w-4 h-4 text-slate-400 group-hover:text-slate-600 transition-colors" />
              </motion.a>
            ))}
          </div>
        </motion.section>

        {/* COLLABORATIONS & INQUIRIES SECTION */}
        <motion.section variants={itemVariants} className="space-y-4">
          <h2 className="text-xs uppercase font-semibold tracking-wider text-slate-400 flex items-center gap-2">
            <Mail className="w-4 h-4 text-pink-400" /> Collaborations & Booking
          </h2>

          <div className="p-5 rounded-2xl bg-white/90 border border-purple-100 shadow-sm space-y-4">
            <div>
              <h3 className="text-sm font-semibold text-slate-800">Work With Me</h3>
              <p className="text-xs text-slate-500 mt-0.5">
                For vocal features, songwriting inquiries, mixing, or booking, drop an email below.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-2.5">
              <a
                href={`mailto:${contactEmail}?subject=Collaboration%20Inquiry%20-%20Tsu_a`}
                className="w-full sm:w-auto flex-1 px-4 py-3 rounded-xl bg-purple-400 hover:bg-purple-500 text-white text-xs font-semibold flex items-center justify-center gap-2 transition-colors shadow-sm shadow-purple-300/40"
              >
                <Send className="w-4 h-4" /> Send Email
              </a>

              <button
                onClick={handleCopyEmail}
                className="w-full sm:w-auto px-4 py-3 rounded-xl bg-purple-50 hover:bg-purple-100/70 border border-purple-200/60 text-slate-700 text-xs font-medium flex items-center justify-center gap-2 transition-colors"
              >
                {copiedEmail ? <Check className="w-4 h-4 text-emerald-500" /> : <Copy className="w-4 h-4 text-purple-400" />}
                {copiedEmail ? "Email Copied!" : "Copy Email"}
              </button>
            </div>
          </div>
        </motion.section>

        {/* SOCIAL & COMMUNITY LINKS */}
        <motion.section variants={itemVariants} className="pt-2">
          <h2 className="text-xs uppercase font-semibold tracking-wider text-slate-400 text-center mb-3">
            Connect
          </h2>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              { name: "Instagram", url: "https://instagram.com/tusharsundi", color: "hover:border-pink-300 hover:text-pink-600 hover:bg-pink-50/50" },
            ].map((platform) => (
              <motion.a
                key={platform.name}
                href={platform.url}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.98 }}
                className={`px-4 py-2 rounded-full border border-purple-100 bg-white/80 text-xs font-medium text-slate-600 shadow-sm transition-colors ${platform.color}`}
              >
                {platform.name}
              </motion.a>
            ))}
          </div>
        </motion.section>
      </motion.div>

      {/* STICKY BOTTOM AUDIO CONTROL BAR */}
      <AnimatePresence>
        {isPlaying && (
          <motion.div
            initial={{ y: 80, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 80, opacity: 0 }}
            className="fixed bottom-4 left-1/2 -translate-x-1/2 w-[90%] max-w-md bg-white/95 border border-purple-200/80 p-3 rounded-2xl shadow-xl backdrop-blur-md flex items-center justify-between gap-3 z-50"
          >
            <div className="flex items-center gap-3 overflow-hidden">
              <div className="w-9 h-9 rounded-lg bg-purple-100 border border-purple-200 flex items-center justify-center text-purple-600 shrink-0">
                <Music2 className="w-5 h-5 animate-bounce" />
              </div>
              <div className="truncate">
                <p className="text-xs font-semibold text-slate-800 truncate">Now Playing Snippet</p>
                <p className="text-[10px] text-slate-500 truncate">Tsu_a - Featured Single</p>
              </div>
            </div>

            <div className="flex items-center gap-2 shrink-0">
              <button
                onClick={toggleMute}
                className="p-2 rounded-lg text-slate-500 hover:text-slate-800 transition-colors"
              >
                {isMuted ? <VolumeX className="w-4 h-4 text-rose-400" /> : <Volume2 className="w-4 h-4" />}
              </button>
              <button
                onClick={togglePlay}
                className="p-2 rounded-lg bg-purple-400 text-white shadow-md shadow-purple-300/50"
              >
                <Pause className="w-4 h-4 fill-current" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}
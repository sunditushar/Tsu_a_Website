"use client";

import React, { useState, useRef } from "react";
import { motion, Variants, AnimatePresence } from "framer-motion";
import {
  Disc,
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
  X,
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
  const [imgError, setImgError] = useState(false);
  const [showMailModal, setShowMailModal] = useState(false);

  const contactEmail = "sunditushar@gmail.com";

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

  const gmailComposeUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${contactEmail}&su=Collaboration%20Inquiry%20-%20Tsu_a`;
  const mailtoUrl = `mailto:${contactEmail}?subject=Collaboration%20Inquiry%20-%20Tsu_a`;

  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-950 to-slate-900 text-slate-100 selection:bg-emerald-300 selection:text-slate-900 px-4 py-12 md:py-20 flex justify-center pb-28 relative overflow-hidden">
      {/* BACKGROUND FLOATING PASTEL CIRCLES & TRIANGLES */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
        <motion.div
          animate={{ y: [0, -20, 0], x: [0, 15, 0] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-10 -left-10 w-56 h-56 md:w-72 md:h-72 rounded-full bg-emerald-400/10 blur-3xl"
        />

        <motion.div
          animate={{ y: [0, 25, 0], rotate: [0, 45, 0] }}
          transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-20 right-[5%] w-16 h-16 md:w-24 md:h-24 border-[8px] border-emerald-300/20 rounded-2xl"
        />

        <motion.div
          animate={{ y: [0, -30, 0], x: [0, -10, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/3 -left-12 w-48 h-48 rounded-full bg-teal-300/10 blur-3xl"
        />

        <motion.div
          animate={{ y: [0, -25, 0], rotate: [0, -30, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-2/3 right-8 w-20 h-20 border-[8px] border-teal-300/20 rounded-2xl"
        />

        <motion.div
          animate={{ y: [0, 20, 0], x: [0, 20, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-20 left-[8%] w-16 h-16 rounded-full bg-emerald-300/20 blur-xl"
        />
      </div>

      {/* Hidden Audio Element for Snippet Preview */}
      <audio
        ref={audioRef}
        src="/preview.wav"
        onEnded={() => setIsPlaying(false)}
      />

      <motion.div
        className="w-full max-w-2xl space-y-8 relative z-10"
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
            className="absolute right-0 top-0 p-2.5 rounded-full bg-white/90 border border-emerald-200/80 text-slate-700 hover:text-emerald-700 shadow-md transition-colors flex items-center gap-1.5 text-xs font-semibold backdrop-blur-sm"
            title="Share Profile"
          >
            {copiedShare ? <Check className="w-4 h-4 text-emerald-600" /> : <Share2 className="w-4 h-4" />}
            <span className="hidden sm:inline">{copiedShare ? "Copied!" : "Share"}</span>
          </motion.button>

          {/* PROFILE PICTURE CONTAINER */}
          <div className="relative inline-block">
            <div className="w-28 h-28 md:w-32 md:h-32 rounded-full bg-gradient-to-tr from-emerald-300 via-teal-200 to-pink-200 p-[3px] shadow-xl shadow-emerald-500/10">
              <div className="w-full h-full rounded-full bg-slate-900 flex items-center justify-center overflow-hidden relative">
                {!imgError ? (
                  <img
                    src="/Tsu_a profile1.jpeg"
                    alt=""
                    className="w-full h-full object-cover"
                    onError={() => setImgError(true)}
                  />
                ) : (
                  <span className="text-3xl font-bold text-emerald-300">T</span>
                )}
              </div>
            </div>
          </div>

          <div className="space-y-2">
            <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight text-white drop-shadow-[0_2px_12px_rgba(16,185,129,0.3)]">
              Tsu_a
            </h1>
            <p className="text-emerald-200/90 text-sm md:text-base max-w-md mx-auto flex items-center justify-center gap-1.5 font-medium">
              <Mic2 className="w-4 h-4 text-emerald-300" /> Singer & Songwriter
            </p>
          </div>
        </motion.section>

        {/* LATEST RELEASE SPOTLIGHT CARD */}
        <motion.section variants={itemVariants}>
          <div className="p-4 rounded-2xl bg-gradient-to-r from-emerald-100/90 via-white to-teal-100/90 border border-emerald-200 shadow-lg backdrop-blur-md flex items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-emerald-200/80 border border-emerald-300 flex items-center justify-center text-emerald-800 shrink-0">
                <Disc className={`w-6 h-6 ${isPlaying ? "animate-spin" : ""}`} />
              </div>
              <div>
                <span className="text-[10px] uppercase font-bold tracking-wider text-emerald-800 bg-emerald-200/70 px-2 py-0.5 rounded-full border border-emerald-300/60">
                  Latest Single Preview
                </span>
                <h3 className="text-sm font-bold text-slate-900 mt-1">Featured Release Title</h3>
                <p className="text-xs text-slate-600 font-medium">Press play to listen to a preview snippet</p>
              </div>
            </div>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={togglePlay}
              className="p-3 rounded-full bg-emerald-500 hover:bg-emerald-600 text-white shadow-md shadow-emerald-400/30 shrink-0 transition-colors"
            >
              {isPlaying ? <Pause className="w-5 h-5 fill-current" /> : <Play className="w-5 h-5 fill-current ml-0.5" />}
            </motion.button>
          </div>
        </motion.section>

        {/* ARTIST MUSIC PROFILES */}
        <motion.section variants={itemVariants} className="space-y-4">
          <h2 className="text-xs uppercase font-bold tracking-wider text-emerald-300 flex items-center gap-2">
            <Disc className="w-4 h-4 text-emerald-400" /> Official Music Profiles
          </h2>

          <div className="grid gap-3">
            {[
              {
                platform: "Spotify",
                url: "https://open.spotify.com/artist/7w53gbB814NivmsMnnGoBw?si=FW4SqDw4QxWoZ6ux9uhE4Q",
                desc: "Listen to official singles & discography",
                color: "hover:border-emerald-300 hover:bg-emerald-50/90 text-emerald-700",
                icon: Music2,
              },
              {
                platform: "Apple Music",
                url: "https://music.apple.com/in/artist/tsu-a/6793347338",
                desc: "Stream lossless audio releases",
                color: "hover:border-rose-300 hover:bg-rose-50/90 text-rose-600",
                icon: Disc,
              },
              {
                platform: "Amazon Music",
                url: "https://music.amazon.in/artists/B0H9XF96Q1/tsu-a",
                desc: "Stream on Amazon Music Unlimited",
                color: "hover:border-sky-300 hover:bg-sky-50/90 text-sky-600",
                icon: Radio,
              },
              {
                platform: "YouTube Music",
                url: "https://music.youtube.com/@tusharsundi",
                desc: "Subscribe for music uploads & official releases",
                color: "hover:border-amber-300 hover:bg-amber-50/90 text-amber-600",
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
                className={`p-4 rounded-2xl bg-white/95 border border-emerald-100/90 shadow-md flex items-center justify-between transition-all group ${item.color}`}
              >
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-xl bg-emerald-50 border border-emerald-100 text-emerald-600 group-hover:scale-105 transition-all">
                    <item.icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-slate-900 transition-colors">
                      {item.platform}
                    </h3>
                    <p className="text-xs text-slate-600 font-medium">{item.desc}</p>
                  </div>
                </div>
                <ExternalLink className="w-4 h-4 text-slate-400 group-hover:text-slate-700 transition-colors" />
              </motion.a>
            ))}
          </div>
        </motion.section>

        {/* COLLABORATIONS & INQUIRIES SECTION */}
        <motion.section variants={itemVariants} className="space-y-4">
          <h2 className="text-xs uppercase font-bold tracking-wider text-emerald-300 flex items-center gap-2">
            <Mail className="w-4 h-4 text-emerald-400" /> Collaborations & Booking
          </h2>

          <div className="p-5 rounded-2xl bg-white/95 border border-emerald-100/90 shadow-md space-y-4">
            <div>
              <h3 className="text-sm font-bold text-slate-900">Work With Me</h3>
              <p className="text-xs text-slate-600 font-medium mt-0.5">
                For vocal features, songwriting inquiries, mixing, or booking, drop an email below.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-2.5">
              <button
                onClick={() => setShowMailModal(true)}
                className="w-full sm:w-auto flex-1 px-4 py-3 rounded-xl bg-emerald-500 hover:bg-emerald-600 text-white text-xs font-semibold flex items-center justify-center gap-2 transition-colors shadow-md shadow-emerald-200"
              >
                <Send className="w-4 h-4" /> Send Email
              </button>

              <button
                onClick={handleCopyEmail}
                className="w-full sm:w-auto px-4 py-3 rounded-xl bg-emerald-50 hover:bg-emerald-100/80 border border-emerald-200 text-slate-800 text-xs font-semibold flex items-center justify-center gap-2 transition-colors"
              >
                {copiedEmail ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4 text-emerald-600" />}
                {copiedEmail ? "Email Copied!" : "Copy Email"}
              </button>
            </div>
          </div>
        </motion.section>

        {/* SOCIAL & COMMUNITY LINKS */}
        <motion.section variants={itemVariants} className="pt-2">
          <h2 className="text-xs uppercase font-bold tracking-wider text-emerald-300 text-center mb-3">
            Connect
          </h2>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              { name: "Instagram", url: "https://instagram.com/tusharsundi", color: "hover:border-pink-300 hover:text-pink-600 hover:bg-pink-50/80" },
            ].map((platform) => (
              <motion.a
                key={platform.name}
                href={platform.url}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.98 }}
                className={`px-4 py-2 rounded-full border border-emerald-100/90 bg-white/95 text-xs font-semibold text-slate-700 shadow-md transition-colors ${platform.color}`}
              >
                {platform.name}
              </motion.a>
            ))}
          </div>
        </motion.section>
      </motion.div>

      {/* EMAIL OPTION POPUP MODAL */}
      <AnimatePresence>
        {showMailModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-slate-950/70 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              className="bg-white rounded-2xl p-6 max-w-sm w-full space-y-4 shadow-2xl relative border border-emerald-100 text-slate-900"
            >
              <button
                onClick={() => setShowMailModal(false)}
                className="absolute right-4 top-4 text-slate-400 hover:text-slate-600 p-1"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="text-center space-y-1 pt-2">
                <h3 className="text-base font-bold text-slate-900">Send Email to Tsu_a</h3>
                <p className="text-xs text-slate-500 font-medium">{contactEmail}</p>
              </div>

              <div className="grid gap-2.5 pt-2">
                <a
                  href={gmailComposeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setShowMailModal(false)}
                  className="w-full p-3 rounded-xl bg-red-50 hover:bg-red-100/80 border border-red-200 text-red-700 font-semibold text-xs flex items-center justify-between transition-colors"
                >
                  <span className="flex items-center gap-2">
                    <Mail className="w-4 h-4 text-red-600" /> Open in Gmail Web
                  </span>
                  <ExternalLink className="w-4 h-4 opacity-60" />
                </a>

                <a
                  href={mailtoUrl}
                  onClick={() => setShowMailModal(false)}
                  className="w-full p-3 rounded-xl bg-emerald-50 hover:bg-emerald-100/80 border border-emerald-200 text-emerald-800 font-semibold text-xs flex items-center justify-between transition-colors"
                >
                  <span className="flex items-center gap-2">
                    <Send className="w-4 h-4 text-emerald-600" /> Default Mail App (Outlook/Apple Mail)
                  </span>
                  <ExternalLink className="w-4 h-4 opacity-60" />
                </a>

                <button
                  onClick={() => {
                    handleCopyEmail();
                    setShowMailModal(false);
                  }}
                  className="w-full p-3 rounded-xl bg-slate-100 hover:bg-slate-200/80 border border-slate-200 text-slate-800 font-semibold text-xs flex items-center justify-between transition-colors"
                >
                  <span className="flex items-center gap-2">
                    <Copy className="w-4 h-4 text-slate-600" /> Copy Email Address
                  </span>
                  {copiedEmail ? <Check className="w-4 h-4 text-emerald-600" /> : null}
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* STICKY BOTTOM AUDIO CONTROL BAR */}
      <AnimatePresence>
        {isPlaying && (
          <motion.div
            initial={{ y: 80, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 80, opacity: 0 }}
            className="fixed bottom-4 left-1/2 -translate-x-1/2 w-[90%] max-w-md bg-white/95 border border-emerald-200 p-3 rounded-2xl shadow-2xl backdrop-blur-md flex items-center justify-between gap-3 z-50"
          >
            <div className="flex items-center gap-3 overflow-hidden">
              <div className="w-9 h-9 rounded-lg bg-emerald-100 border border-emerald-200 flex items-center justify-center text-emerald-700 shrink-0">
                <Music2 className="w-5 h-5 animate-bounce" />
              </div>
              <div className="truncate">
                <p className="text-xs font-bold text-slate-900 truncate">Now Playing Snippet</p>
                <p className="text-[10px] text-slate-600 font-medium truncate">Tsu_a - Featured Single</p>
              </div>
            </div>

            <div className="flex items-center gap-2 shrink-0">
              <button
                onClick={toggleMute}
                className="p-2 rounded-lg text-slate-600 hover:text-slate-900 transition-colors"
              >
                {isMuted ? <VolumeX className="w-4 h-4 text-rose-500" /> : <Volume2 className="w-4 h-4" />}
              </button>
              <button
                onClick={togglePlay}
                className="p-2 rounded-lg bg-emerald-500 text-white shadow-md shadow-emerald-200"
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
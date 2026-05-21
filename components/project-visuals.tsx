"use client";

import { motion } from "framer-motion";

// Chess Board Visualization
export function ChessBoardVisual() {
  return (
    <div className="relative w-full h-full flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Grid background */}
      <svg className="absolute inset-0 w-full h-full opacity-30" viewBox="0 0 400 400">
        <defs>
          <pattern id="grid" width="50" height="50" patternUnits="userSpaceOnUse">
            <path d="M 50 0 L 0 0 0 50" fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="1"/>
          </pattern>
        </defs>
        <rect width="400" height="400" fill="url(#grid)" />
      </svg>

      {/* Animated chess pieces */}
      <div className="relative w-48 h-48">
        {[...Array(4)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-6 h-6 rounded-full bg-gradient-to-b from-blue-400 to-blue-600"
            animate={{
              y: [0, -20, 0],
              opacity: [0.5, 1, 0.5],
            }}
            transition={{
              duration: 2.5 + i * 0.3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            style={{
              left: `${20 + i * 30}%`,
              top: `${30 + (i % 2) * 40}%`,
              boxShadow: "0 0 20px rgba(96, 165, 250, 0.6)",
            }}
          />
        ))}
      </div>

      {/* Glow effect */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-blue-500/10" />
    </div>
  );
}

// Arcade Game Visualization
export function ArcadeGameVisual() {
  return (
    <div className="relative w-full h-full flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-purple-900/20 to-slate-900">
      {/* Falling objects animation */}
      <div className="relative w-full h-full">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-4 h-4 rounded-sm bg-gradient-to-b from-amber-300 to-orange-500"
            animate={{
              y: [-40, 320],
              rotate: [0, 180],
            }}
            transition={{
              duration: 2 + i * 0.2,
              repeat: Infinity,
              delay: i * 0.15,
              ease: "linear",
            }}
            style={{
              left: `${10 + (i % 4) * 25}%`,
              boxShadow: "0 0 12px rgba(251, 191, 36, 0.6)",
            }}
          />
        ))}
      </div>

      {/* Score display */}
      <motion.div
        className="absolute top-8 right-8 text-2xl font-bold bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent"
        animate={{ scale: [1, 1.1, 1] }}
        transition={{ duration: 0.5, repeat: Infinity, delay: 1 }}
      >
        1,250
      </motion.div>

      {/* Glow background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-orange-500/5" />
    </div>
  );
}

// Dashboard Analytics Visualization
export function DashboardVisual() {
  return (
    <div className="relative w-full h-full flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Grid lines */}
      <svg className="absolute inset-0 w-full h-full opacity-20" viewBox="0 0 400 300">
        <defs>
          <linearGradient id="lineGrad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="rgba(59, 130, 246, 0.2)" />
            <stop offset="50%" stopColor="rgba(59, 130, 246, 0.8)" />
            <stop offset="100%" stopColor="rgba(59, 130, 246, 0.2)" />
          </linearGradient>
        </defs>
        <line x1="0" y1="150" x2="400" y2="150" stroke="url(#lineGrad)" strokeWidth="2" />
      </svg>

      {/* Animated bars */}
      <div className="relative w-64 h-40 flex items-end justify-center gap-4">
        {[30, 60, 45, 75, 50, 70].map((height, i) => (
          <motion.div
            key={i}
            className="flex-1 bg-gradient-to-t from-blue-500 to-cyan-400 rounded-sm"
            initial={{ height: 0 }}
            animate={{ height: `${height}%` }}
            transition={{
              duration: 0.8,
              delay: i * 0.1,
              repeat: Infinity,
              repeatDelay: 1,
              ease: "easeInOut",
            }}
            style={{
              boxShadow: "0 0 16px rgba(59, 130, 246, 0.6)",
            }}
          />
        ))}
      </div>

      {/* Glow */}
      <div className="absolute inset-0 bg-gradient-to-t from-blue-500/10 to-transparent" />
    </div>
  );
}

// Map Route Visualization
export function MapRouteVisual() {
  return (
    <div className="relative w-full h-full flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-green-900/20 to-slate-900">
      {/* Map grid */}
      <svg className="absolute inset-0 w-full h-full opacity-30" viewBox="0 0 400 400">
        <defs>
          <pattern id="mapGrid" width="40" height="40" patternUnits="userSpaceOnUse">
            <path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(34, 197, 94, 0.2)" strokeWidth="1"/>
          </pattern>
        </defs>
        <rect width="400" height="400" fill="url(#mapGrid)" />
      </svg>

      {/* Route line animation */}
      <motion.svg className="absolute inset-0 w-full h-full" viewBox="0 0 400 400">
        <motion.path
          d="M 80 320 Q 200 200 320 80"
          fill="none"
          stroke="url(#routeGrad)"
          strokeWidth="3"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 3, repeat: Infinity }}
          strokeDasharray="1000"
          strokeDashoffset="1000"
        />
        <defs>
          <linearGradient id="routeGrad" x1="0%" y1="100%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="rgba(34, 197, 94, 0.8)" />
            <stop offset="100%" stopColor="rgba(34, 197, 94, 0.2)" />
          </linearGradient>
        </defs>
      </motion.svg>

      {/* Moving vehicle */}
      <motion.div
        className="absolute w-6 h-6 bg-gradient-to-b from-green-400 to-emerald-500 rounded-full"
        animate={{
          x: [80, 200, 320],
          y: [320, 200, 80],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        style={{
          boxShadow: "0 0 20px rgba(34, 197, 94, 0.8)",
        }}
      />

      {/* Glow */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-green-500/5" />
    </div>
  );
}

// IoT Device Visualization
export function IoTDeviceVisual() {
  return (
    <div className="relative w-full h-full flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-purple-900/20 to-slate-900">
      {/* Central device */}
      <motion.div
        className="relative w-24 h-24 border-2 border-purple-500 rounded-lg bg-gradient-to-br from-purple-500/20 to-purple-600/10 flex items-center justify-center"
        animate={{ scale: [1, 1.05, 1] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <motion.div
          className="w-12 h-12 border border-purple-400 rounded-md flex items-center justify-center text-xs font-bold text-purple-300"
          animate={{ rotate: 360 }}
          transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
        >
          IoT
        </motion.div>
      </motion.div>

      {/* Orbiting particles */}
      {[...Array(3)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-3 h-3 bg-purple-400 rounded-full"
          animate={{ rotate: 360 }}
          transition={{
            duration: 4 + i * 0.5,
            repeat: Infinity,
            ease: "linear",
          }}
          style={{
            top: "50%",
            left: "50%",
            marginTop: -6,
            marginLeft: -6,
          }}
        >
          <motion.div
            className="absolute w-3 h-3 bg-purple-400 rounded-full"
            style={{
              x: `${60 + i * 20}px`,
              boxShadow: "0 0 12px rgba(168, 85, 247, 0.8)",
            }}
          />
        </motion.div>
      ))}

      {/* Glow */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-purple-500/10" />
    </div>
  );
}

// Donation Platform Visualization
export function DonationVisual() {
  return (
    <div className="relative w-full h-full flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-rose-900/20 to-slate-900">
      {/* Animated particles rising */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-3 h-3 rounded-full bg-gradient-to-b from-rose-400 to-pink-500"
          animate={{
            y: [-50, -320],
            opacity: [1, 0],
          }}
          transition={{
            duration: 2.5,
            repeat: Infinity,
            delay: i * 0.3,
            ease: "easeOut",
          }}
          style={{
            left: `${20 + (i % 3) * 30}%`,
            boxShadow: "0 0 12px rgba(244, 114, 182, 0.6)",
          }}
        />
      ))}

      {/* Heart icon */}
      <motion.div
        className="text-4xl"
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ duration: 1.5, repeat: Infinity }}
      >
        ❤️
      </motion.div>

      {/* Glow */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-rose-500/10" />
    </div>
  );
}

// Engineering Blueprint Visualization
export function EngineeringVisual() {
  return (
    <div className="relative w-full h-full flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 to-slate-950">
      {/* Blueprint grid */}
      <svg className="absolute inset-0 w-full h-full opacity-40" viewBox="0 0 400 400">
        <defs>
          <pattern id="blueprint" width="30" height="30" patternUnits="userSpaceOnUse">
            <path d="M 30 0 L 0 0 0 30" fill="none" stroke="rgba(34, 211, 238, 0.3)" strokeWidth="0.5"/>
            <circle cx="0" cy="0" r="1" fill="rgba(34, 211, 238, 0.4)"/>
          </pattern>
        </defs>
        <rect width="400" height="400" fill="url(#blueprint)" />
      </svg>

      {/* Animated measurement lines */}
      <svg className="absolute inset-0 w-full h-full" viewBox="0 0 400 400">
        <motion.line
          x1="50" y1="200" x2="350" y2="200"
          stroke="rgba(34, 211, 238, 0.6)"
          strokeWidth="2"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 2, repeat: Infinity, repeatDelay: 1 }}
        />
        <motion.line
          x1="200" y1="50" x2="200" y2="350"
          stroke="rgba(34, 211, 238, 0.6)"
          strokeWidth="2"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 2, repeat: Infinity, delay: 0.5, repeatDelay: 1 }}
        />
      </svg>

      {/* Center point */}
      <motion.div
        className="absolute w-4 h-4 bg-cyan-400 rounded-full"
        style={{ top: "50%", left: "50%", marginTop: -8, marginLeft: -8 }}
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ duration: 1, repeat: Infinity }}
      />

      {/* Glow */}
      <div className="absolute inset-0 bg-gradient-to-b from-cyan-500/10 to-transparent" />
    </div>
  );
}

// Generic Loading Pulse
export function DefaultVisual() {
  return (
    <div className="relative w-full h-full flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 to-slate-950">
      <motion.div
        className="w-16 h-16 border-2 border-slate-600 border-t-blue-500 rounded-full"
        animate={{ rotate: 360 }}
        transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
      />
    </div>
  );
}

// Map project ID to visual component
export function ProjectVisual({ projectId }: { projectId: string }) {
  const visualMap: Record<string, () => React.ReactNode> = {
    // Dashboard/Admin visuals
    "hr-solution": () => <DashboardVisual />,
    "data-sync": () => <DashboardVisual />,
    "document-portal": () => <DashboardVisual />,
    "clinical-trial": () => <DashboardVisual />,
    "lease-management": () => <DashboardVisual />,
    "windows-service": () => <DashboardVisual />,
    
    // Specialized visuals
    "intelligent-chessboard": () => <ChessBoardVisual />,
    "catch-it-game": () => <ArcadeGameVisual />,
    "store-management": () => <DashboardVisual />,
    "structural-design": () => <EngineeringVisual />,
    
    // Default
    default: () => <DefaultVisual />,
  };

  const Visual = visualMap[projectId] || visualMap["default"];

  return (
    <motion.div
      className="relative w-full h-full"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <Visual />
    </motion.div>
  );
}

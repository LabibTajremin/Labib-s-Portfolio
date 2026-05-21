"use client";

import { motion } from "framer-motion";

// HR Dashboard Visualization - Employee Cards and Forms
export function HRDashboardVisual() {
  return (
    <div className="relative w-full h-full flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900/20 to-slate-900">
      {/* Grid background */}
      <div className="absolute inset-0 opacity-20" style={{
        backgroundImage: "linear-gradient(rgba(59,130,246,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(59,130,246,0.1) 1px, transparent 1px)",
        backgroundSize: "30px 30px"
      }} />

      {/* Animated employee cards */}
      <div className="relative w-48 h-32">
        {[0, 1, 2].map((i) => (
          <motion.div
            key={i}
            className="absolute w-12 h-16 rounded-lg bg-gradient-to-b from-blue-400 to-blue-600 border border-blue-300/50"
            animate={{
              y: [0, -8, 0],
              opacity: [0.6, 1, 0.6],
            }}
            transition={{
              duration: 2 + i * 0.3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            style={{
              left: `${i * 50}px`,
              top: `${Math.sin(i) * 20}px`,
              boxShadow: "0 0 16px rgba(59, 130, 246, 0.6)",
            }}
          >
            <div className="w-full h-1/3 bg-white/20 rounded-t-md" />
            <div className="w-full h-2/3 flex items-end justify-center pb-2">
              <div className="w-2 h-2 rounded-full bg-yellow-300" />
            </div>
          </motion.div>
        ))}
      </div>

      {/* Animated checkmarks for attendance */}
      {[...Array(4)].map((_, i) => (
        <motion.div
          key={`check-${i}`}
          className="absolute text-lg"
          animate={{
            scale: [0, 1, 0],
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            delay: i * 0.4,
          }}
          style={{
            right: `${10 + i * 15}px`,
            top: `${20 + i * 20}px`,
            color: '#10b981'
          }}
        >
          ✓
        </motion.div>
      ))}

      {/* Glow effect */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-blue-500/10" />
    </div>
  );
}

// Data Sync System - Multiple databases syncing
export function DataSyncVisual() {
  return (
    <div className="relative w-full h-full flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-emerald-900/20 to-slate-900">
      {/* Source and target databases */}
      <div className="relative w-56 h-32 flex items-center justify-between">
        {/* Source DB */}
        <motion.div
          className="w-12 h-20 rounded border-2 border-emerald-500 bg-emerald-500/20 flex flex-col items-center justify-center"
          animate={{ scale: [1, 1.05, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="w-6 h-1 bg-emerald-400 mb-1 rounded" />
          <div className="w-6 h-1 bg-emerald-400 mb-1 rounded" />
          <div className="w-6 h-1 bg-emerald-400 rounded" />
        </motion.div>

        {/* Animated sync arrows */}
        <div className="flex-1 flex justify-center relative h-1">
          {[0, 1, 2].map((i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-gradient-to-r from-emerald-400 to-cyan-400 rounded-full"
              animate={{
                x: [-60, 60],
                opacity: [0, 1, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                delay: i * 0.5,
              }}
              style={{
                boxShadow: "0 0 8px rgba(16, 185, 129, 0.6)",
              }}
            />
          ))}
          <motion.svg className="absolute w-40 h-1" viewBox="0 0 200 20" style={{ y: -10 }}>
            <motion.line
              x1="0" y1="10" x2="200" y2="10"
              stroke="rgba(16, 185, 129, 0.3)"
              strokeWidth="1"
              strokeDasharray="5,5"
              initial={{ strokeDashoffset: 0 }}
              animate={{ strokeDashoffset: -10 }}
              transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
            />
          </motion.svg>
        </div>

        {/* Target DB */}
        <motion.div
          className="w-12 h-20 rounded border-2 border-cyan-500 bg-cyan-500/20 flex flex-col items-center justify-center"
          animate={{ scale: [1, 1.05, 1] }}
          transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
        >
          <div className="w-6 h-1 bg-cyan-400 mb-1 rounded" />
          <div className="w-6 h-1 bg-cyan-400 mb-1 rounded" />
          <div className="w-6 h-1 bg-cyan-400 rounded" />
        </motion.div>
      </div>

      {/* Glow */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-emerald-500/10" />
    </div>
  );
}

// Document Portal - Animated documents and folders
export function DocumentPortalVisual() {
  return (
    <div className="relative w-full h-full flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-orange-900/20 to-slate-900">
      {/* Animated documents floating */}
      <div className="relative w-40 h-40">
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-8 h-10 rounded-sm bg-gradient-to-b from-orange-300 to-orange-500 border border-orange-400/50 flex items-center justify-center"
            animate={{
              y: [0, -20, 0],
              x: [0, Math.sin(i * 1.2) * 15, 0],
              rotate: [0, 5, -5, 0],
            }}
            transition={{
              duration: 3 + i * 0.3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            style={{
              left: `${20 + i * 15}px`,
              top: `${10 + (i % 2) * 20}px`,
              boxShadow: "0 0 12px rgba(234, 179, 8, 0.5)",
            }}
          >
            <div className="text-[10px] font-bold text-white/80">📄</div>
          </motion.div>
        ))}
      </div>

      {/* Lock icon indicating security */}
      <motion.div
        className="absolute bottom-8 text-sm"
        animate={{ scale: [1, 1.15, 1] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        🔒
      </motion.div>

      {/* Glow */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-orange-500/10" />
    </div>
  );
}

// Clinical Trial - Test tubes and data
export function ClinicalTrialVisual() {
  return (
    <div className="relative w-full h-full flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-red-900/20 to-slate-900">
      {/* Test tubes */}
      <div className="relative w-48 h-40 flex items-end justify-center gap-4">
        {[30, 50, 70, 55, 40].map((height, i) => (
          <motion.div
            key={i}
            className="w-6 rounded-b-lg border-2 border-red-400 bg-red-500/30 flex items-end justify-center overflow-hidden"
            style={{ height: `${height}%` }}
          >
            <motion.div
              className="w-full bg-gradient-to-t from-red-500 to-red-400"
              initial={{ height: 0 }}
              animate={{ height: "100%" }}
              transition={{
                duration: 1,
                delay: i * 0.15,
                repeat: Infinity,
                repeatDelay: 1.5,
                ease: "easeInOut",
              }}
            />
          </motion.div>
        ))}
      </div>

      {/* Scientific beaker symbol */}
      <motion.div
        className="absolute top-8 text-2xl"
        animate={{ rotate: [0, 5, -5, 0] }}
        transition={{ duration: 3, repeat: Infinity }}
      >
        ⚗️
      </motion.div>

      {/* Glow */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-red-500/10" />
    </div>
  );
}

// Lease Management - Animated forms and documents
export function LeaseManagementVisual() {
  return (
    <div className="relative w-full h-full flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-purple-900/20 to-slate-900">
      {/* Animated form fields */}
      <div className="relative w-40 h-48 space-y-3 p-4">
        {[...Array(4)].map((_, i) => (
          <motion.div
            key={i}
            className="h-3 rounded bg-gradient-to-r from-purple-400 to-purple-600"
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            transition={{
              duration: 0.8,
              delay: i * 0.2,
              repeat: Infinity,
              repeatDelay: 1,
            }}
          />
        ))}
        {/* Submit button */}
        <motion.div
          className="h-6 rounded bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center text-xs font-bold text-white mt-4"
          animate={{ scale: [1, 1.05, 1] }}
          transition={{ duration: 1.5, repeat: Infinity, delay: 1 }}
        >
          Submit
        </motion.div>
      </div>

      {/* Glow */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-purple-500/10" />
    </div>
  );
}

// Windows Service - File processing animation
export function WindowsServiceVisual() {
  return (
    <div className="relative w-full h-full flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Input folder */}
      <motion.div
        className="absolute left-4 top-1/2 transform -translate-y-1/2 w-8 h-6 rounded bg-gradient-to-b from-yellow-400 to-yellow-600 flex items-center justify-center"
        animate={{ scale: [1, 1.1, 1] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <span className="text-xs">📁</span>
      </motion.div>

      {/* Processing arrows */}
      {[0, 1, 2].map((i) => (
        <motion.div
          key={i}
          className="absolute h-0.5 bg-gradient-to-r from-cyan-400 to-blue-500"
          style={{ width: "40%", top: `${35 + i * 15}%`, left: "20%" }}
          animate={{ scaleX: [0, 1, 0], opacity: [0, 1, 0] }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            delay: i * 0.5,
          }}
        />
      ))}

      {/* Processing icon */}
      <motion.div
        className="absolute text-xl"
        animate={{ rotate: 360 }}
        transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
      >
        ⚙️
      </motion.div>

      {/* Output folder */}
      <motion.div
        className="absolute right-4 top-1/2 transform -translate-y-1/2 w-8 h-6 rounded bg-gradient-to-b from-green-400 to-green-600 flex items-center justify-center"
        animate={{ scale: [1, 1.1, 1] }}
        transition={{ duration: 2, repeat: Infinity, delay: 0.3 }}
      >
        <span className="text-xs">✓</span>
      </motion.div>

      {/* Glow */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-cyan-500/10" />
    </div>
  );
}

// Store Management - Inventory items animation
export function StoreManagementVisual() {
  return (
    <div className="relative w-full h-full flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-indigo-900/20 to-slate-900">
      {/* Inventory shelf with items */}
      <div className="relative w-48 h-40 flex flex-col justify-around">
        {[0, 1, 2].map((shelf) => (
          <div key={shelf} className="flex gap-2 items-center">
            {[0, 1, 2, 3].map((item) => (
              <motion.div
                key={`${shelf}-${item}`}
                className="w-6 h-8 rounded-sm bg-gradient-to-b from-indigo-400 to-indigo-600 border border-indigo-300/50"
                animate={{
                  y: [0, -4, 0],
                }}
                transition={{
                  duration: 1.5 + (shelf * 4 + item) * 0.1,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                style={{
                  boxShadow: "0 0 10px rgba(99, 102, 241, 0.5)",
                }}
              />
            ))}
          </div>
        ))}
      </div>

      {/* Plus icon for adding items */}
      <motion.div
        className="absolute top-6 right-8 text-sm"
        animate={{ scale: [1, 1.2, 1], rotate: [0, 90, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        ➕
      </motion.div>

      {/* Glow */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-indigo-500/10" />
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
    // Project-specific visuals
    "hr-solution": () => <HRDashboardVisual />,
    "data-sync": () => <DataSyncVisual />,
    "document-portal": () => <DocumentPortalVisual />,
    "clinical-trial": () => <ClinicalTrialVisual />,
    "lease-management": () => <LeaseManagementVisual />,
    "windows-service": () => <WindowsServiceVisual />,
    "store-management": () => <StoreManagementVisual />,
    
    // Specialized game/hardware visuals
    "intelligent-chessboard": () => <ChessBoardVisual />,
    "catch-it-game": () => <ArcadeGameVisual />,
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

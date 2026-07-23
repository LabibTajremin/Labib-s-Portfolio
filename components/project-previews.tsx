"use client";

import { motion } from "framer-motion";
import React from "react";
import { Car, Crown, Heart, CheckCircle2, Circle, GraduationCap, Wallet, ShoppingCart, CalendarCheck, Globe2, Palette, Flame, Star, Send } from "lucide-react";

// Shared macOS-style window chrome — gives every preview the feel of a real
// app screenshot instead of a flat illustration.
function WindowChrome({ title }: { title: string }) {
  return (
    <div className="-mx-6 -mt-6 mb-4 flex items-center gap-2 border-b border-white/10 bg-black/30 px-4 py-2.5 backdrop-blur-sm">
      <div className="flex gap-1.5">
        <span className="h-2.5 w-2.5 rounded-full bg-red-500/70" />
        <span className="h-2.5 w-2.5 rounded-full bg-amber-500/70" />
        <span className="h-2.5 w-2.5 rounded-full bg-emerald-500/70" />
      </div>
      <div className="ml-2 flex-1 truncate rounded-md bg-white/5 px-3 py-1 text-center text-[10px] font-medium tracking-wide text-slate-500">
        {title}
      </div>
    </div>
  );
}

// PROJECT 1: HR SOLUTION PLATFORM
export function HRSolutionPreview() {
  return (
    <div className="w-full h-full bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 p-6 flex flex-col overflow-hidden">
      <WindowChrome title="app.hrplatform.io/dashboard" />
      <div className="mb-5">
        <h2 className="text-xl font-bold text-white mb-1">HR Dashboard</h2>
        <p className="text-slate-400 text-xs">Multi-Tenant Enterprise HR Management</p>
      </div>

      <motion.div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-6">
        {[
          { label: "Total Employees", value: "245", color: "from-blue-600 to-blue-400" },
          { label: "Attendance Rate", value: "94.2%", color: "from-green-600 to-green-400" },
          { label: "Pending Leaves", value: "12", color: "from-amber-600 to-amber-400" },
          { label: "Payroll Ready", value: "100%", color: "from-purple-600 to-purple-400" },
        ].map((card, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 * i }}
            className={`bg-gradient-to-br ${card.color} bg-opacity-20 backdrop-blur-sm border border-white/10 rounded-lg p-3`}
          >
            <p className="text-slate-300 text-[11px] mb-2">{card.label}</p>
            <motion.p className="text-xl font-bold text-white" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 + 0.1 * i }}>
              {card.value}
            </motion.p>
          </motion.div>
        ))}
      </motion.div>

      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }} className="bg-slate-800/40 backdrop-blur-sm border border-white/10 rounded-lg overflow-hidden flex-1">
        <div className="px-4 py-3 border-b border-white/10 bg-slate-900/50">
          <h3 className="text-white font-semibold text-sm">Daily Attendance</h3>
        </div>
        <div className="p-4 space-y-3">
          {["Sarah Johnson", "Mike Chen", "Emma Davis", "Alex Rodriguez"].map((name, i) => (
            <motion.div key={i} initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.7 + 0.1 * i }} className="flex items-center justify-between py-2 px-3 bg-slate-900/50 rounded border border-white/5">
              <span className="text-slate-300 text-sm">{name}</span>
              <motion.span animate={{ scale: [1, 1.1, 1] }} transition={{ duration: 0.5, delay: 1 + 0.1 * i }} className="flex items-center gap-1.5 text-green-400 text-xs font-semibold">
                <CheckCircle2 className="h-3.5 w-3.5" /> Checked-in
              </motion.span>
            </motion.div>
          ))}
        </div>
      </motion.div>

      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.2 }} className="mt-4 p-3 bg-amber-500/10 border border-amber-500/30 rounded text-xs text-amber-200">
        Leave Request: <span className="font-semibold">Pending Manager Approval</span>
      </motion.div>
    </div>
  );
}

// PROJECT 2: MULTI-TENANT DATA SYNC
export function MultiTenantSyncPreview() {
  return (
    <div className="w-full h-full bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 p-6 flex flex-col overflow-hidden">
      <WindowChrome title="sync.dashboard.internal" />
      <div className="mb-5">
        <h2 className="text-xl font-bold text-white mb-1">Sync Dashboard</h2>
        <p className="text-slate-400 text-xs">Multi-Tenant Data Synchronization</p>
      </div>

      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }} className="space-y-2.5 mb-5">
        {["Acme Corp", "TechStart Inc", "Global Solutions"].map((tenant, i) => (
          <motion.div key={i} initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.5 + 0.15 * i }} className="bg-slate-800/40 border border-indigo-500/30 rounded-lg p-3.5 cursor-pointer hover:bg-slate-800/60 transition-all">
            <div className="flex items-center justify-between">
              <span className="text-white font-semibold text-sm">{tenant}</span>
              <motion.div animate={{ scale: [1, 1.2, 1] }} transition={{ delay: 0.8 + 0.2 * i, duration: 2, repeat: Infinity }} className="w-2 h-2 rounded-full bg-cyan-400" />
            </div>
            <p className="text-slate-400 text-[11px] mt-1.5">Status: Syncing...</p>
          </motion.div>
        ))}
      </motion.div>

      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.8 }} className="bg-slate-800/40 border border-white/10 rounded-lg p-4 flex-1 flex flex-col">
        <h3 className="text-white font-semibold text-sm mb-4">Data Flow Pipeline</h3>
        <div className="flex items-center justify-between flex-1">
          {["API Source", "Sync Engine", "Tenant DB"].map((stage, i) => (
            <React.Fragment key={i}>
              <div className="bg-slate-900/50 border border-indigo-500/50 rounded px-4 py-2">
                <p className="text-slate-300 text-xs font-semibold">{stage}</p>
              </div>
              {i < 2 && <motion.div animate={{ x: [0, 8, 0] }} transition={{ duration: 1.5, repeat: Infinity, delay: 0.3 * i }} className="flex-1 flex justify-center">
                <div className="w-8 h-0.5 bg-gradient-to-r from-cyan-500 to-cyan-400" />
              </motion.div>}
            </React.Fragment>
          ))}
        </div>
      </motion.div>

      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.2 }} className="mt-4 bg-slate-900/50 border border-white/10 rounded p-3 text-xs text-slate-300">
        <p className="text-green-400 mb-1 flex items-center gap-1.5"><CheckCircle2 className="h-3.5 w-3.5" /> Acme Corp: 1,240 records synced</p>
        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.5 }} className="text-cyan-400 mb-1">
          Syncing: TechStart Inc (847/1100)
        </motion.p>
        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.8 }} className="text-slate-400">
          Queued: Global Solutions
        </motion.p>
      </motion.div>
    </div>
  );
}

// PROJECT 3: DOCUMENT SHARING
export function DocumentPortalPreview() {
  return (
    <div className="w-full h-full bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 p-6 flex flex-col overflow-hidden">
      <WindowChrome title="portal.documents.app" />
      <div className="mb-5">
        <h2 className="text-xl font-bold text-white mb-1">Documents</h2>
        <p className="text-slate-400 text-xs">Secure Document Sharing Portal</p>
      </div>

      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }} className="flex gap-2 mb-5 text-sm">
        {["Home", "Contracts", "Reports"].map((folder, i) => (
          <motion.button key={i} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 + 0.1 * i }} className={`px-3 py-1.5 rounded ${i === 1 ? "bg-blue-600/40 border border-blue-500/50 text-blue-300" : "bg-slate-800/40 border border-white/10 text-slate-300"}`}>
            {folder}
          </motion.button>
        ))}
      </motion.div>

      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6 }} className="grid grid-cols-2 gap-3 flex-1">
        {[
          { name: "Contract_2024.pdf", type: "PDF", color: "from-red-600 to-red-400", size: "2.4 MB" },
          { name: "Budget_Report.xlsx", type: "XLS", color: "from-green-600 to-green-400", size: "1.8 MB" },
          { name: "Proposal.docx", type: "DOC", color: "from-blue-600 to-blue-400", size: "856 KB" },
          { name: "Audit_2024.pdf", type: "PDF", color: "from-red-600 to-red-400", size: "3.2 MB" },
        ].map((doc, i) => (
          <motion.div key={i} initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.8 + 0.1 * i }} className="bg-slate-800/40 border border-white/10 rounded-lg p-4 cursor-pointer hover:border-white/30 transition-all">
            <motion.div className={`bg-gradient-to-br ${doc.color} h-10 rounded mb-3 flex items-center justify-center text-white font-bold text-xs`} whileHover={{ scale: 1.05 }}>
              {doc.type}
            </motion.div>
            <p className="text-slate-300 text-xs font-semibold truncate">{doc.name}</p>
            <p className="text-slate-500 text-xs mt-1">{doc.size}</p>
          </motion.div>
        ))}
      </motion.div>

      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.3 }} className="mt-4 p-3 bg-blue-500/10 border border-blue-500/30 rounded text-xs text-blue-200">
        Protected: Shared with 3 users
      </motion.div>
    </div>
  );
}

// PROJECT 4: CLINICAL TRIAL
export function ClinicalTrialPreview() {
  return (
    <div className="w-full h-full bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 p-6 flex flex-col overflow-hidden">
      <WindowChrome title="trials.clinicalops.net" />
      <div className="mb-5">
        <h2 className="text-xl font-bold text-white mb-1">Trial Management</h2>
        <p className="text-slate-400 text-xs">Clinical Study Tracking System</p>
      </div>

      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }} className="mb-5 bg-slate-800/40 border border-white/10 rounded-lg p-4">
        <h3 className="text-white font-semibold text-sm mb-4">Study Phase Progress</h3>
        <div className="flex items-center justify-between gap-2">
          {["Screening", "Enrollment", "Treatment", "Follow-up", "Complete"].map((phase, i) => (
            <motion.div key={i} className="flex flex-col items-center flex-1">
              <motion.div animate={{ scale: [1, 1.15, 1] }} transition={{ delay: 0.6 + 0.15 * i, duration: 1 }} className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold mb-2 ${i <= 2 ? "bg-sky-500/40 border border-sky-500 text-sky-300" : "bg-slate-700/40 border border-white/20 text-slate-400"}`}>
                {i + 1}
              </motion.div>
              <p className="text-xs text-slate-400 text-center">{phase}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>

      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.8 }} className="grid grid-cols-3 gap-3 mb-5">
        {[
          { label: "Enrolled", value: "847", color: "sky" },
          { label: "Active", value: "756", color: "green" },
          { label: "Completed", value: "89", color: "purple" },
        ].map((stat, i) => (
          <motion.div key={i} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1 + 0.15 * i }} className="bg-slate-800/40 border border-white/10 rounded p-3 text-center">
            <p className="text-slate-400 text-xs">{stat.label}</p>
            <motion.p className="text-lg font-bold text-white mt-1" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.2 + 0.1 * i }}>
              {stat.value}
            </motion.p>
          </motion.div>
        ))}
      </motion.div>

      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.2 }} className="bg-slate-800/40 border border-white/10 rounded-lg p-4 flex-1">
        <h3 className="text-white font-semibold text-sm mb-3">Reported Events</h3>
        <div className="space-y-2">
          {[
            { event: "Mild Nausea", count: "23" },
            { event: "Mild Headache", count: "18" },
          ].map((item, i) => (
            <motion.div key={i} initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 1.4 + 0.15 * i }} className="flex items-center justify-between text-xs">
              <span className="text-slate-300">{item.event}</span>
              <motion.div className="px-2 py-1 rounded bg-blue-500/20 border border-blue-500/40 text-blue-300" animate={{ scale: [1, 1.05, 1] }} transition={{ delay: 1.6 + 0.2 * i, duration: 0.5 }}>
                {item.count} cases
              </motion.div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}

// PROJECT 5: LEASE MANAGEMENT
export function LeaseManagementPreview() {
  return (
    <div className="w-full h-full bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 p-6 flex flex-col overflow-hidden">
      <WindowChrome title="lease.originate.io" />
      <div className="mb-5">
        <h2 className="text-xl font-bold text-white mb-1">Lease Origination</h2>
        <p className="text-slate-400 text-xs">OutSystems Lease Management System</p>
      </div>

      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }} className="mb-5 flex gap-2 justify-between">
        {["Property", "Tenant", "Terms", "Review", "Submit"].map((step, i) => (
          <motion.div key={i} className="flex-1">
            <motion.div className={`h-1 rounded-full mb-2 ${i <= 2 ? "bg-purple-500" : "bg-slate-700"}`} initial={{ width: "0%" }} animate={{ width: i <= 2 ? "100%" : "0%" }} transition={{ delay: 0.5 + 0.1 * i, duration: 0.5 }} />
            <p className="text-xs text-slate-400 text-center">{step}</p>
          </motion.div>
        ))}
      </motion.div>

      <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.8 }} className="bg-slate-800/40 border border-white/10 rounded-lg p-4 flex-1 flex flex-col">
        <h3 className="text-white font-semibold text-sm mb-4">Property Information</h3>
        <div className="space-y-3">
          {[
            { label: "Property Address", value: "123 Commercial Ave, Suite 500" },
            { label: "Property Type", value: "Office Space" },
            { label: "Square Footage", value: "5,500 sq ft" },
            { label: "Annual Rent", value: "USD 275,000" },
          ].map((field, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1 + 0.1 * i }} className="bg-slate-900/50 rounded p-3 border border-white/5">
              <p className="text-slate-400 text-xs mb-1">{field.label}</p>
              <p className="text-slate-200 text-sm font-semibold">{field.value}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>

      <motion.button initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.5 }} whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className="mt-4 w-full bg-gradient-to-r from-purple-600 to-purple-500 hover:from-purple-500 hover:to-purple-400 text-white font-semibold py-2 rounded-lg transition-all">
        Continue to Next Step
      </motion.button>
    </div>
  );
}

// PROJECT 6: WINDOWS SERVICE
export function WindowsServicePreview() {
  return (
    <div className="w-full h-full bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 p-6 flex flex-col overflow-hidden font-mono text-sm">
      <WindowChrome title="FileProcessingService.exe — Console" />
      <div className="mb-4">
        <h2 className="text-lg font-bold text-white mb-1">File Processing Service</h2>
        <p className="text-slate-400 text-xs">.NET Core Windows Service Monitor</p>
      </div>

      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }} className="bg-slate-800/40 border border-white/10 rounded p-3 mb-4">
        <div className="flex items-center justify-between text-xs">
          <span className="text-slate-400">Service Status:</span>
          <motion.span animate={{ opacity: [1, 0.6, 1] }} transition={{ duration: 1.5, repeat: Infinity }} className="flex items-center gap-1.5 text-green-400 font-bold">
            <Circle className="h-2 w-2 fill-current" /> Running
          </motion.span>
        </div>
        <div className="flex items-center justify-between text-xs mt-2">
          <span className="text-slate-400">Uptime:</span>
          <span className="text-slate-300">14h 23m 45s</span>
        </div>
      </motion.div>

      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6 }} className="bg-slate-900/80 border border-green-500/30 rounded p-3 flex-1 overflow-hidden text-green-400 flex flex-col text-xs">
        <div className="space-y-1">
          <p>[14:45:23] Connected to FTP server</p>
          <p>[14:45:24] Scanning for new files...</p>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1 }}>
            [14:45:25] Found 12 new files
          </motion.p>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.5 }}>
            [14:45:26] Downloading: Report_Q1_2024.xml
          </motion.p>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2 }} className="text-yellow-400">
            [14:45:29] Processing XML...
          </motion.p>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2.5 }}>
            [14:45:31] Parsed 1,240 records
          </motion.p>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 3 }}>
            [14:45:33] Database sync completed
          </motion.p>
        </div>
      </motion.div>

      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 3.2 }} className="mt-4 grid grid-cols-3 gap-2 text-xs">
        {[
          { label: "Files Processed", value: "2,847" },
          { label: "Success Rate", value: "99.8%" },
          { label: "Next Run", value: "15:00" },
        ].map((stat, i) => (
          <div key={i} className="bg-slate-800/40 border border-white/10 rounded p-2 text-center">
            <p className="text-slate-400">{stat.label}</p>
            <p className="text-green-400 font-bold">{stat.value}</p>
          </div>
        ))}
      </motion.div>
    </div>
  );
}

// PROJECT 7: STRUCTURAL DESIGN
export function StructuralDesignPreview() {
  return (
    <div className="w-full h-full bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 p-6 flex flex-col overflow-hidden">
      <WindowChrome title="civilproject.app/calculator" />
      <div className="mb-5">
        <h2 className="text-xl font-bold text-white mb-1">Beam Calculator</h2>
        <p className="text-slate-400 text-xs">Structural Design Automation</p>
      </div>

      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }} className="bg-slate-800/40 border border-white/10 rounded-lg p-4 mb-4">
        <h3 className="text-white font-semibold text-sm mb-3">Input Parameters</h3>
        <div className="space-y-2">
          {[
            { label: "Span Length (m)", value: "6.5", valid: true },
            { label: "Live Load (kN/m)", value: "12.5", valid: true },
            { label: "Material", value: "Steel Grade 250", valid: true },
          ].map((param, i) => (
            <motion.div key={i} initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.5 + 0.1 * i }} className="flex items-center justify-between bg-slate-900/50 rounded p-2 border border-white/5">
              <span className="text-slate-300 text-xs">{param.label}</span>
              <div className="flex items-center gap-2">
                <span className="text-slate-200 text-sm font-semibold">{param.value}</span>
                {param.valid && (
                  <motion.span animate={{ scale: [1, 1.2, 1] }} transition={{ delay: 0.8 + 0.15 * i, duration: 0.5 }} className="text-green-400">
                    <CheckCircle2 className="h-3.5 w-3.5" />
                  </motion.span>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1 }} className="bg-slate-800/40 border border-cyan-500/30 rounded-lg p-4 flex-1">
        <h3 className="text-white font-semibold text-sm mb-4">Calculated Results</h3>
        <div className="space-y-3">
          {[
            { label: "Bending Moment", value: 63.28, unit: "kNm" },
            { label: "Shear Force", value: 40.63, unit: "kN" },
            { label: "Deflection", value: 12.4, unit: "mm" },
          ].map((result, i) => (
            <motion.div key={i} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.3 + 0.15 * i }} className="bg-slate-900/50 rounded p-3 border border-cyan-500/30">
              <p className="text-slate-400 text-xs mb-1">{result.label}</p>
              <motion.p className="text-cyan-300 text-lg font-bold" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.5 + 0.15 * i }}>
                {result.value} <span className="text-xs text-cyan-400">{result.unit}</span>
              </motion.p>
            </motion.div>
          ))}
        </div>
      </motion.div>

      <motion.button initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2 }} className="mt-4 w-full bg-cyan-600 hover:bg-cyan-500 text-white font-semibold py-2 rounded-lg transition-all">
        Export to Excel
      </motion.button>
    </div>
  );
}

// PROJECT 8: GETLIFT
export function GetLiftPreview() {
  return (
    <div className="w-full h-full bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 p-6 flex flex-col overflow-hidden">
      <WindowChrome title="getlift.app/ride" />
      <div className="mb-5">
        <h2 className="text-xl font-bold text-white mb-1">GetLift</h2>
        <p className="text-slate-400 text-xs">Ride-Sharing Platform</p>
      </div>

      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }} className="relative bg-gradient-to-br from-slate-800 to-slate-900 border border-white/10 rounded-lg flex-1 mb-4 overflow-hidden flex items-center justify-center">
        <div className="absolute inset-0 opacity-30" style={{ backgroundImage: "linear-gradient(rgba(148,163,184,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(148,163,184,0.1) 1px, transparent 1px)", backgroundSize: "40px 40px" }} />

        <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 0.6 }} className="absolute w-8 h-8 bg-green-500 rounded-full border-2 border-green-300 flex items-center justify-center" style={{ left: "30%", top: "40%" }}>
          <div className="w-2 h-2 bg-white rounded-full" />
        </motion.div>

        <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 0.8 }} className="absolute w-8 h-8 bg-red-500 rounded-full border-2 border-red-300 flex items-center justify-center" style={{ right: "25%", top: "30%" }}>
          <div className="w-2 h-2 bg-white rounded-full" />
        </motion.div>

        <motion.div animate={{ left: ["30%", "75%"], top: ["40%", "30%"] }} transition={{ delay: 1.5, duration: 2 }} className="absolute flex h-7 w-7 items-center justify-center rounded-full bg-yellow-500 shadow-[0_0_16px_rgba(234,179,8,0.6)]">
          <Car className="h-4 w-4 text-slate-900" />
        </motion.div>
      </motion.div>

      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }} className="bg-slate-800/60 border border-white/10 rounded-lg p-4">
        <div className="flex items-center justify-between mb-4">
          <div>
            <p className="text-white font-semibold">Driver Arriving</p>
            <motion.p className="text-amber-400 text-sm font-bold" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2 }}>
              4:32 minutes
            </motion.p>
          </div>
          <div className="text-right">
            <p className="text-slate-400 text-xs">Fare</p>
            <p className="text-white font-semibold">285 BDT</p>
          </div>
        </div>
        <div className="flex items-center gap-3 p-2 bg-slate-900/50 rounded border border-white/5">
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-blue-600" />
          <div className="flex-1">
            <p className="text-white text-sm font-semibold">Karim Ahmed</p>
            <p className="text-slate-400 text-xs">Toyota Corolla - 2024</p>
          </div>
          <p className="text-yellow-400 text-sm">4.9</p>
        </div>
      </motion.div>
    </div>
  );
}

// PROJECT 9: CHESS BOARD
export function ChessBoardPreview() {
  return (
    <div className="w-full h-full bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 p-6 flex flex-col overflow-hidden">
      <WindowChrome title="chessboard.local/game" />
      <div className="mb-4">
        <h2 className="text-xl font-bold text-white mb-1">Chess Board</h2>
        <p className="text-slate-400 text-xs">IoT-Enabled AI Chess System</p>
      </div>

      <div className="flex gap-4 flex-1">
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }} className="flex-1 bg-amber-950/40 border border-amber-700/50 rounded-lg p-4 flex items-center justify-center">
          <div className="grid grid-cols-8 gap-0 border-2 border-amber-700">
            {Array.from({ length: 64 }).map((_, i) => {
              const row = Math.floor(i / 8);
              const col = i % 8;
              const isLight = (row + col) % 2 === 0;
              return (
                <motion.div key={i} className={`w-6 h-6 ${isLight ? "bg-amber-100/20" : "bg-amber-900/40"} border border-amber-700/30`} animate={{ opacity: isLight ? [0.2, 0.4, 0.2] : [0.4, 0.6, 0.4] }} transition={{ duration: 2, repeat: Infinity, delay: (i % 8) * 0.03 }} />
              );
            })}
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.6 }} className="w-40 bg-slate-800/40 border border-white/10 rounded-lg p-4 flex flex-col">
          <h3 className="text-white font-semibold text-sm mb-4">AI Analysis</h3>
          <div className="mb-4">
            <p className="text-slate-400 text-xs mb-2">Thinking...</p>
            <motion.div animate={{ scale: [1, 1.2, 1] }} transition={{ duration: 1, repeat: Infinity }}>
              <Crown className="h-6 w-6 text-amber-300" />
            </motion.div>
          </div>

          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.5 }} className="bg-slate-900/50 rounded p-2 mb-4 text-center">
            <p className="text-slate-400 text-xs">Best Move</p>
            <p className="text-cyan-300 font-bold">Nf3-e5</p>
          </motion.div>

          <motion.button initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2 }} className="w-full bg-cyan-600 hover:bg-cyan-500 text-white text-xs font-semibold py-2 rounded transition-all">
            Execute
          </motion.button>

          <div className="mt-4 pt-4 border-t border-white/10">
            <p className="text-slate-400 text-xs mb-2">Nodes Analyzed</p>
            <motion.p className="text-green-400 font-bold text-sm" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2.5 }}>
              2.4M
            </motion.p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

// PROJECT 10: VENDING MACHINE
export function VendingMachinePreview() {
  return (
    <div className="w-full h-full bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 p-6 flex flex-col overflow-hidden">
      <WindowChrome title="vending.iot.local/monitor" />
      <div className="mb-5">
        <h2 className="text-xl font-bold text-white mb-1">Smart Vending</h2>
        <p className="text-slate-400 text-xs">IoT Connected Vending System</p>
      </div>

      <div className="flex gap-4 flex-1">
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }} className="flex-1 bg-gradient-to-b from-slate-800 to-slate-900 border-2 border-cyan-500/30 rounded-lg p-4 flex flex-col">
          <div className="text-center mb-4">
            <motion.p className="text-cyan-300 font-semibold text-sm" animate={{ opacity: [1, 0.6, 1] }} transition={{ duration: 1.5, repeat: Infinity }}>
              RFID Ready
            </motion.p>
          </div>

          <div className="grid grid-cols-2 gap-2 flex-1">
            {[
              { name: "Coffee", price: "30", stock: 5 },
              { name: "Water", price: "20", stock: 12 },
              { name: "Chips", price: "35", stock: 8 },
              { name: "Candy", price: "25", stock: 0 },
            ].map((item, i) => (
              <motion.div key={i} initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.5 + 0.1 * i }} className={`bg-slate-700/50 rounded p-2 text-center border ${item.stock > 0 ? "border-white/10" : "border-red-500/50"}`}>
                <p className="text-white text-xs font-semibold">{item.name}</p>
                <p className="text-slate-400 text-xs">{item.price}</p>
                <p className={`text-xs mt-1 ${item.stock > 0 ? "text-green-400" : "text-red-400"}`}>
                  {item.stock > 0 ? `${item.stock} left` : "Out"}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.6 }} className="w-48 bg-slate-800/40 border border-white/10 rounded-lg p-4 flex flex-col">
          <h3 className="text-white font-semibold text-sm mb-4">Monitor</h3>

          <div className="space-y-3 flex-1">
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.8 }} className="bg-slate-900/50 rounded p-2">
              <p className="text-slate-400 text-xs">Status</p>
              <motion.p className="text-green-400 font-bold text-sm" animate={{ opacity: [1, 0.6, 1] }} transition={{ duration: 1, repeat: Infinity }}>
                Online
              </motion.p>
            </motion.div>

            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1 }} className="bg-slate-900/50 rounded p-2">
              <p className="text-slate-400 text-xs">Today Sales</p>
              <p className="text-cyan-300 font-bold text-sm">1,250 BDT</p>
            </motion.div>

            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.2 }} className="bg-slate-900/50 rounded p-2">
              <p className="text-slate-400 text-xs">WiFi Signal</p>
              <p className="text-green-400 font-bold text-sm">80%</p>
            </motion.div>
          </div>

          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.5 }} className="mt-4 pt-4 border-t border-white/10 text-center">
            <p className="text-slate-400 text-xs">Last Sync</p>
            <p className="text-green-400 text-xs">2 min ago</p>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}

// PROJECT 11: CATCH IT GAME
export function CatchItPreview() {
  return (
    <div className="w-full h-full bg-gradient-to-br from-slate-950 via-purple-950/20 to-slate-950 p-6 flex flex-col overflow-hidden">
      <WindowChrome title="catchit.game/play" />
      <div className="mb-4">
        <h2 className="text-xl font-bold text-white mb-1">Catch It Game</h2>
        <p className="text-slate-400 text-xs">Dynamic Game Engine</p>
      </div>

      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }} className="relative bg-gradient-to-b from-slate-800 to-slate-900 border border-white/10 rounded-lg flex-1 overflow-hidden flex items-center justify-center mb-4">
        <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }} className="absolute top-4 right-4 bg-amber-500/20 border border-amber-500/50 rounded px-4 py-2 z-10">
          <p className="text-amber-300 text-sm">Score</p>
          <motion.p className="text-amber-400 text-2xl font-bold" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1 }}>
            1,250
          </motion.p>
        </motion.div>

        {[0, 1, 2, 3].map((i) => (
          <motion.div key={i} animate={{ y: [-40, 360] }} transition={{ duration: 2 + i * 0.3, repeat: Infinity, delay: i * 0.25, ease: "linear" }} className="absolute h-5 w-5 rounded-full bg-gradient-to-b from-amber-300 to-orange-500" style={{ left: `${15 + (i % 4) * 25}%`, boxShadow: "0 0 12px rgba(251, 191, 36, 0.6)" }} />
        ))}

        <motion.div animate={{ x: [-60, 60, -60] }} transition={{ duration: 4, repeat: Infinity }} className="absolute bottom-8 h-3 w-16 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 shadow-[0_0_16px_rgba(34,211,238,0.5)]" />
      </motion.div>

      <div className="grid grid-cols-3 gap-2">
        {[
          { label: "Caught", value: "42" },
          { label: "Missed", value: "5" },
          { label: "Accuracy", value: "89%" },
        ].map((stat, i) => (
          <motion.div key={i} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.8 + 0.1 * i }} className="bg-slate-800/40 border border-white/10 rounded p-2 text-center">
            <p className="text-slate-400 text-xs">{stat.label}</p>
            <p className="text-white font-bold text-sm">{stat.value}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

// PROJECT 12: STORE MANAGEMENT
export function StoreManagementPreview() {
  return (
    <div className="w-full h-full bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 p-6 flex flex-col overflow-hidden">
      <WindowChrome title="inventory.storeops.app" />
      <div className="mb-5">
        <h2 className="text-xl font-bold text-white mb-1">Inventory Manager</h2>
        <p className="text-slate-400 text-xs">Store Management System</p>
      </div>

      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }} className="grid grid-cols-3 gap-3 mb-5">
        {[
          { label: "Total Products", value: "1,240", color: "blue" },
          { label: "Low Stock", value: "34", color: "red" },
          { label: "Total Value", value: "2.4M BDT", color: "green" },
        ].map((card, i) => (
          <motion.div key={i} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 + 0.1 * i }} className="bg-slate-800/40 border border-white/10 rounded-lg p-3">
            <p className="text-slate-400 text-xs">{card.label}</p>
            <motion.p className="text-white text-lg font-bold mt-1" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.8 + 0.1 * i }}>
              {card.value}
            </motion.p>
          </motion.div>
        ))}
      </motion.div>

      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.8 }} className="bg-slate-800/40 border border-white/10 rounded-lg overflow-hidden flex-1 flex flex-col">
        <div className="bg-slate-900/50 px-4 py-3 border-b border-white/10">
          <h3 className="text-white font-semibold text-sm">Stock Levels by Category</h3>
        </div>

        <div className="overflow-y-auto flex-1">
          {[
            { category: "Electronics", items: 234, value: "892K BDT", status: "Optimal" },
            { category: "Clothing", items: 456, value: "654K BDT", status: "Optimal" },
            { category: "Home & Garden", items: 89, value: "234K BDT", status: "Low Stock" },
            { category: "Books", items: 34, value: "45K BDT", status: "Critical" },
          ].map((row, i) => (
            <motion.div key={i} initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 1 + 0.1 * i }} className={`px-4 py-3 border-b border-white/5 flex items-center justify-between ${i % 2 ? "bg-slate-900/30" : ""}`}>
              <div className="flex-1">
                <p className="text-slate-200 font-semibold text-sm">{row.category}</p>
                <p className="text-slate-400 text-xs">{row.items} items</p>
              </div>
              <div className="text-right">
                <p className="text-slate-300 text-sm">{row.value}</p>
                <motion.p className={`text-xs font-semibold ${row.status === "Optimal" ? "text-green-400" : row.status === "Low Stock" ? "text-yellow-400" : "text-red-400"}`} animate={{ opacity: [1, 0.6, 1] }} transition={{ duration: 1.5, repeat: Infinity, delay: 0.2 * i }}>
                  {row.status}
                </motion.p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}

// PROJECT 13: DONATION PLATFORM
export function DonationPlatformPreview() {
  return (
    <div className="w-full h-full bg-gradient-to-br from-slate-950 via-rose-950/20 to-slate-950 p-6 flex flex-col overflow-hidden">
      <WindowChrome title="pothoshishuralo.org" />
      <div className="mb-5">
        <h2 className="text-xl font-bold text-white mb-1">Potho Shishur Alo</h2>
        <p className="text-slate-400 text-xs">Donation Platform for Street Children</p>
      </div>

      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }} className="grid grid-cols-3 gap-3 mb-5">
        {[
          { label: "Children Helped", value: "1,250" },
          { label: "Funds Raised", value: "8.4M BDT" },
          { label: "Active Campaigns", value: "42" },
        ].map((stat, i) => (
          <motion.div key={i} initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.5 + 0.1 * i }} className="bg-slate-800/40 border border-white/10 rounded-lg p-4 text-center">
            <motion.p className="text-white text-xl font-bold mb-1" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.8 + 0.1 * i }}>
              {stat.value}
            </motion.p>
            <p className="text-slate-400 text-xs">{stat.label}</p>
          </motion.div>
        ))}
      </motion.div>

      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.9 }} className="space-y-3 flex-1 overflow-y-auto">
        {[
          { name: "Winter Support 2024", raised: "2.4M", goal: "3M", progress: 80 },
          { name: "Education Fund", raised: "1.8M", goal: "2M", progress: 90 },
          { name: "Healthcare Initiative", raised: "1.2M", goal: "2.5M", progress: 48 },
        ].map((campaign, i) => (
          <motion.div key={i} initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 1.1 + 0.15 * i }} className="bg-slate-800/40 border border-white/10 rounded-lg p-4">
            <div className="flex items-center justify-between mb-2">
              <p className="text-white font-semibold text-sm">{campaign.name}</p>
              <p className="text-rose-300 text-sm font-bold">{campaign.progress}%</p>
            </div>
            <div className="bg-slate-900/50 rounded-full h-2 mb-2 overflow-hidden">
              <motion.div className="h-full bg-gradient-to-r from-rose-500 to-pink-400" initial={{ width: 0 }} animate={{ width: `${campaign.progress}%` }} transition={{ delay: 1.4 + 0.15 * i, duration: 0.8 }} />
            </div>
            <div className="flex items-center justify-between text-xs text-slate-400">
              <span>{campaign.raised} of {campaign.goal}</span>
              <motion.span className="flex items-center gap-1 text-rose-400" animate={{ opacity: [1, 0.5, 1] }} transition={{ duration: 1, repeat: Infinity }}>
                <Heart className="h-3 w-3 fill-current" />
              </motion.span>
            </div>
          </motion.div>
        ))}
      </motion.div>

      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.6 }} className="mt-4 bg-slate-800/40 border border-white/10 rounded-lg p-3">
        <p className="text-white font-semibold text-sm mb-2">Recent Donations</p>
        {[
          "Anonymous donated 1,000 BDT",
          "Rahman Hassan donated 500 BDT",
          "Farah Iqbal donated 250 BDT",
        ].map((donation, i) => (
          <motion.p key={i} initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 1.8 + 0.1 * i }} className="text-slate-300 text-xs mb-1">
            {donation}
          </motion.p>
        ))}
      </motion.div>
    </div>
  );
}

// PROJECT: MULTI-TENANT ACADEMIC LAB PLATFORM
export function AcademicLabPreview() {
  const tenants = ["Bio Lab", "Robotics Lab", "AI Lab"];
  const gallery = [
    "from-indigo-500/70 to-violet-600/40",
    "from-cyan-500/60 to-indigo-600/40",
    "from-fuchsia-500/50 to-indigo-600/40",
    "from-violet-500/60 to-blue-600/40",
  ];
  return (
    <div className="w-full h-full bg-gradient-to-br from-slate-950 via-indigo-950/40 to-slate-950 p-6 flex flex-col overflow-hidden">
      <WindowChrome title="lab-platform-chi.vercel.app" />

      {/* Tenant switcher */}
      <div className="mb-4 flex items-center gap-2">
        {tenants.map((tenant, i) => (
          <motion.span
            key={tenant}
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 * i }}
            className={`rounded-full px-3 py-1.5 text-[11px] font-semibold ${
              i === 0
                ? "bg-indigo-500/30 text-indigo-100 border border-indigo-400/40"
                : "bg-white/5 text-slate-400 border border-white/10"
            }`}
          >
            {tenant}
          </motion.span>
        ))}
      </div>

      {/* Mini site preview */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.25 }}
        className="rounded-xl border border-white/10 bg-slate-900/60 p-4 mb-4"
      >
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-1.5">
            <GraduationCap className="h-3.5 w-3.5 text-indigo-300" />
            <span className="text-[10px] font-semibold text-slate-300">bio-lab.lab.edu</span>
          </div>
          <div className="flex gap-2 text-[9px] text-slate-500">
            <span>Research</span><span>People</span><span>Contact</span>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="mb-1 h-4 w-3/4 rounded bg-gradient-to-r from-indigo-300 to-violet-300"
        />
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mb-3 h-2.5 w-1/2 rounded bg-slate-700"
        />

        <div className="grid grid-cols-4 gap-2">
          {gallery.map((g, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.6 + i * 0.1 }}
              className={`aspect-square rounded-md bg-gradient-to-br ${g}`}
            />
          ))}
        </div>
      </motion.div>

      {/* Live stats */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1 }}
        className="grid grid-cols-3 gap-3 mb-4"
      >
        {[
          { label: "Papers", value: "24" },
          { label: "Members", value: "18" },
          { label: "Funding", value: "$2.4M" },
        ].map((stat, i) => (
          <div key={stat.label} className="rounded-lg border border-white/10 bg-indigo-500/10 px-3 py-2 text-center">
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.1 + i * 0.1 }}
              className="text-base font-bold text-white"
            >
              {stat.value}
            </motion.p>
            <p className="text-[9px] text-indigo-300">{stat.label}</p>
          </div>
        ))}
      </motion.div>

      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.3 }} className="flex-1 rounded-lg border border-white/10 bg-slate-800/40 p-4">
        <p className="text-white text-sm font-semibold mb-3">Admin — Publications</p>
        {["RLS tenant isolation verified", "New paper published", "Gallery synced to S3"].map((item, i) => (
          <motion.div key={item} initial={{ opacity: 0, x: -14 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 1.5 + i * 0.12 }} className="flex items-center gap-2 text-xs text-slate-300 mb-2">
            <motion.span animate={{ scale: [1, 1.25, 1] }} transition={{ duration: 1, repeat: Infinity, delay: i * 0.3 }}>
              <CheckCircle2 className="h-3.5 w-3.5 text-indigo-400" />
            </motion.span>
            {item}
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}

// PROJECT: KHOROCH EXPENSE TRACKER
export function KhorochPreview() {
  const categories = [
    { label: "Food", value: 62, color: "from-amber-500 to-orange-400" },
    { label: "Transport", value: 38, color: "from-blue-500 to-cyan-400" },
    { label: "Bills", value: 74, color: "from-rose-500 to-pink-400" },
  ];
  return (
    <div className="w-full h-full bg-gradient-to-br from-slate-950 via-emerald-950/30 to-slate-950 p-6 flex flex-col overflow-hidden">
      <WindowChrome title="khoroch.app" />
      <div className="mb-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Wallet className="h-5 w-5 text-emerald-400" />
          <h2 className="text-xl font-bold text-white">Khoroch</h2>
        </div>
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-[11px] font-semibold text-emerald-300"
        >
          ৳12,450 left
        </motion.span>
      </div>

      {/* Chat-style expense entry */}
      <div className="mb-4 space-y-2">
        <motion.div
          initial={{ opacity: 0, x: 16 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.1 }}
          className="ml-auto max-w-[80%] rounded-2xl rounded-tr-sm bg-slate-700/60 px-3.5 py-2 text-xs text-slate-100"
        >
          lunch e 500 taka খরচ হলো
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.6 }}
          animate={{ opacity: [0, 1, 1, 0] }}
          transition={{ delay: 0.5, duration: 0.9, times: [0, 0.3, 0.8, 1] }}
          className="flex w-fit items-center gap-1 rounded-2xl rounded-tl-sm bg-emerald-500/15 px-3 py-2"
        >
          {[0, 1, 2].map((i) => (
            <motion.span
              key={i}
              className="h-1.5 w-1.5 rounded-full bg-emerald-400"
              animate={{ opacity: [0.3, 1, 0.3] }}
              transition={{ duration: 0.9, repeat: Infinity, delay: i * 0.15 }}
            />
          ))}
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: -16 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 1.3 }}
          className="flex items-start gap-1.5 max-w-[85%] rounded-2xl rounded-tl-sm bg-emerald-500/15 border border-emerald-500/20 px-3.5 py-2 text-xs text-emerald-100"
        >
          <Send className="mt-0.5 h-3 w-3 flex-shrink-0 text-emerald-400" />
          Got it — ৳500 added to <span className="font-semibold">Food</span>
        </motion.div>
      </div>

      <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.6 }} className="mb-5 flex items-center justify-between rounded-lg bg-slate-800/50 border border-white/10 px-4 py-2.5">
        <span className="text-xs text-slate-300">Food · ৳500 · 2:14 PM</span>
        <span className="rounded-md bg-emerald-500/20 px-2 py-1 text-[10px] font-semibold text-emerald-300">Confirmed</span>
      </motion.div>

      <div className="flex-1 space-y-3">
        {categories.map((c, i) => (
          <motion.div key={c.label} initial={{ opacity: 0, x: -16 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 1.8 + i * 0.15 }}>
            <div className="flex justify-between text-[11px] text-slate-400 mb-1">
              <span>{c.label}</span><span>{c.value}%</span>
            </div>
            <div className="h-2 rounded-full bg-slate-800/60 overflow-hidden">
              <motion.div className={`h-full bg-gradient-to-r ${c.color}`} initial={{ width: 0 }} animate={{ width: `${c.value}%` }} transition={{ delay: 2 + i * 0.15, duration: 0.8 }} />
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

// PROJECT: MULTI-TENANT E-COMMERCE SAAS
export function EcommerceSaasPreview() {
  const products = [
    { name: "Linen Shirt", price: "$42", gradient: "from-violet-500/60 to-purple-600/30" },
    { name: "Canvas Tote", price: "$18", gradient: "from-cyan-500/50 to-violet-600/30" },
    { name: "Desk Lamp", price: "$65", gradient: "from-fuchsia-500/50 to-violet-600/30" },
  ];
  const tenants = ["shop-alpha", "shop-beta", "shop-gamma"];
  return (
    <div className="w-full h-full bg-gradient-to-br from-slate-950 via-violet-950/30 to-slate-950 p-6 flex flex-col overflow-hidden">
      <WindowChrome title="shop-alpha.myshop.io" />

      <div className="mb-4 flex items-center gap-2">
        {tenants.map((t, i) => (
          <motion.span
            key={t}
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.08 * i }}
            className={`rounded-full px-3 py-1.5 text-[11px] font-semibold ${
              i === 0
                ? "bg-violet-500/30 text-violet-100 border border-violet-400/40"
                : "bg-white/5 text-slate-400 border border-white/10"
            }`}
          >
            {t}
          </motion.span>
        ))}
      </div>

      {/* Storefront preview */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="mb-4 rounded-xl border border-white/10 bg-slate-900/60 p-4"
      >
        <div className="mb-3 flex items-center justify-between">
          <div className="flex items-center gap-1.5">
            <ShoppingCart className="h-3.5 w-3.5 text-violet-300" />
            <span className="text-[11px] font-semibold text-slate-300">New Arrivals</span>
          </div>
          <span className="text-[9px] text-slate-500">12 items</span>
        </div>
        <div className="grid grid-cols-3 gap-2">
          {products.map((p, i) => (
            <motion.div
              key={p.name}
              initial={{ opacity: 0, scale: 0.85 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.35 + i * 0.1 }}
              className="rounded-lg border border-white/10 bg-white/5 p-1.5"
            >
              <div className={`mb-1.5 aspect-square rounded-md bg-gradient-to-br ${p.gradient}`} />
              <p className="truncate text-[9px] text-slate-300">{p.name}</p>
              <p className="text-[10px] font-bold text-white">{p.price}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>

      <div className="grid grid-cols-2 gap-3 mb-5">
        {[
          { label: "Active Tenants", value: "48" },
          { label: "MRR", value: "$12.4k" },
        ].map((stat, i) => (
          <motion.div key={stat.label} initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.8 + i * 0.12 }} className="rounded-lg border border-white/10 bg-violet-500/10 p-3">
            <p className="text-[11px] text-slate-400">{stat.label}</p>
            <p className="text-lg font-bold text-white">{stat.value}</p>
          </motion.div>
        ))}
      </div>
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.1 }} className="flex-1 rounded-lg border border-white/10 bg-slate-800/40 p-4">
        <p className="text-white text-sm font-semibold mb-3">Checkout Sessions</p>
        {["shop-alpha · Stripe payment succeeded", "shop-beta · Cart updated", "shop-gamma · Plan upgraded to Pro"].map((row, i) => (
          <motion.div key={row} initial={{ opacity: 0, x: -14 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 1.3 + i * 0.12 }} className="flex items-center gap-2 text-xs text-slate-300 mb-2">
            <motion.span animate={{ scale: [1, 1.3, 1] }} transition={{ duration: 1, repeat: Infinity, delay: i * 0.2 }} className="h-1.5 w-1.5 rounded-full bg-violet-400" />
            {row}
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}

// PROJECT: MOMENTUM PRODUCTIVITY DASHBOARD
export function MomentumPreview() {
  const bars = [40, 65, 50, 80, 60, 90, 45];
  const dayLabels = ["S", "M", "T", "W", "T", "F", "S"];
  const completedDays = [1, 2, 4, 5, 8, 9, 10, 12, 13, 14, 15, 17, 18];
  const today = 18;
  const tasks = [
    { label: "Morning workout", done: true, tag: null as string | null },
    { label: "Write blog post", done: false, tag: "High" },
    { label: "Review pull requests", done: false, tag: "Medium" },
  ];
  const tagColor: Record<string, string> = {
    High: "bg-rose-500/20 text-rose-300 border-rose-500/30",
    Medium: "bg-amber-500/20 text-amber-300 border-amber-500/30",
  };

  return (
    <div className="w-full h-full bg-gradient-to-br from-slate-950 via-cyan-950/30 to-slate-950 p-6 flex flex-col overflow-hidden">
      <WindowChrome title="productive-calender.vercel.app/dashboard" />
      <div className="mb-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <CalendarCheck className="h-5 w-5 text-cyan-400" />
          <h2 className="text-xl font-bold text-white">Momentum</h2>
        </div>
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3 }}
          className="flex items-center gap-1 rounded-full border border-orange-500/30 bg-orange-500/10 px-2.5 py-1"
        >
          <Flame className="h-3 w-3 text-orange-400" />
          <span className="text-[10px] font-bold text-orange-300">12 day streak</span>
        </motion.div>
      </div>

      <div className="grid grid-cols-7 gap-1.5 mb-1 text-center">
        {dayLabels.map((d, i) => (
          <span key={i} className="text-[9px] font-medium text-slate-500">{d}</span>
        ))}
      </div>
      <div className="grid grid-cols-7 gap-1.5 mb-5">
        {Array.from({ length: 21 }).map((_, i) => {
          const day = i + 1;
          const isDone = completedDays.includes(day);
          const isToday = day === today;
          return (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.6 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.01 * i }}
              className={`relative flex aspect-square items-center justify-center rounded-md text-[9px] font-semibold ${
                isDone ? "bg-cyan-500/70 text-white" : "bg-slate-800/60 text-slate-500"
              } ${isToday ? "ring-2 ring-cyan-300" : ""}`}
            >
              {day}
              {isDone && (
                <motion.span
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.02 * i + 0.2 }}
                  className="absolute -right-1 -top-1 flex h-3 w-3 items-center justify-center rounded-full bg-emerald-400"
                >
                  <CheckCircle2 className="h-2.5 w-2.5 text-slate-950" />
                </motion.span>
              )}
            </motion.div>
          );
        })}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
        className="mb-4 rounded-lg border border-white/10 bg-slate-800/40 p-3"
      >
        {tasks.map((task, i) => (
          <motion.div
            key={task.label}
            initial={{ opacity: 0, x: -14 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.7 + i * 0.12 }}
            className="mb-2 flex items-center justify-between last:mb-0"
          >
            <div className="flex items-center gap-2">
              {task.done ? (
                <CheckCircle2 className="h-3.5 w-3.5 text-cyan-400" />
              ) : (
                <Circle className="h-3.5 w-3.5 text-slate-600" />
              )}
              <span className={`text-xs ${task.done ? "text-slate-500 line-through" : "text-slate-200"}`}>
                {task.label}
              </span>
            </div>
            {task.tag && (
              <span className={`rounded-full border px-2 py-0.5 text-[9px] font-semibold ${tagColor[task.tag]}`}>
                {task.tag}
              </span>
            )}
          </motion.div>
        ))}
      </motion.div>

      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1 }} className="flex-1 rounded-lg border border-white/10 bg-slate-800/40 p-4 flex items-end gap-2">
        {bars.map((h, i) => (
          <motion.div
            key={i}
            initial={{ height: 0 }}
            animate={{ height: `${h}%` }}
            transition={{ delay: 1.1 + i * 0.08, duration: 0.7 }}
            whileHover={{ scaleY: 1.05 }}
            className="flex-1 rounded-t-sm bg-gradient-to-t from-cyan-500 to-blue-400"
          />
        ))}
      </motion.div>
    </div>
  );
}

// PROJECT: STUDY ABROAD UNIVERSITY HUB
export function StudyAbroadPreview() {
  const universities = [
    { name: "University of Toronto", flag: "🇨🇦", rating: 4.7, tuition: "$45k/yr", selected: true },
    { name: "TU Munich", flag: "🇩🇪", rating: 4.5, tuition: "€500/yr", selected: true },
    { name: "National University of Singapore", flag: "🇸🇬", rating: 4.6, tuition: "$38k/yr", selected: false },
  ];
  return (
    <div className="w-full h-full bg-gradient-to-br from-slate-950 via-sky-950/30 to-slate-950 p-6 flex flex-col overflow-hidden">
      <WindowChrome title="study-abroad-university-hub" />
      <div className="mb-4 flex items-center gap-2">
        <Globe2 className="h-5 w-5 text-sky-400" />
        <h2 className="text-xl font-bold text-white">Universities</h2>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="mb-4 rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-[11px] text-slate-500"
      >
        Search universities, countries, programs...
      </motion.div>

      <div className="space-y-2.5 flex-1">
        {universities.map((uni, i) => (
          <motion.div
            key={uni.name}
            initial={{ opacity: 0, x: -18 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: i * 0.15 }}
            className="rounded-lg border border-white/10 bg-sky-500/10 px-4 py-2.5"
          >
            <div className="flex items-center justify-between">
              <span className="flex items-center gap-1.5 text-xs text-slate-200">
                <span>{uni.flag}</span>
                {uni.name}
              </span>
              <motion.button
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.3 + i * 0.15 }}
                className={`flex items-center gap-1 rounded-full border px-2 py-0.5 text-[9px] font-semibold ${
                  uni.selected
                    ? "border-sky-400/50 bg-sky-500/25 text-sky-200"
                    : "border-white/15 text-slate-500"
                }`}
              >
                {uni.selected && <CheckCircle2 className="h-2.5 w-2.5" />}
                Compare
              </motion.button>
            </div>
            <div className="mt-1.5 flex items-center gap-3 text-[9px] text-slate-400">
              <span className="flex items-center gap-0.5">
                <Star className="h-2.5 w-2.5 fill-amber-400 text-amber-400" /> {uni.rating}
              </span>
              <span>{uni.tuition} tuition</span>
            </div>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8 }}
        className="mt-4 flex items-center justify-between rounded-lg border border-sky-400/30 bg-sky-500/15 px-4 py-2.5"
      >
        <span className="text-[11px] font-medium text-sky-100">2 universities selected</span>
        <span className="rounded-md bg-sky-400/90 px-2.5 py-1 text-[10px] font-bold text-slate-950">Compare Now</span>
      </motion.div>
    </div>
  );
}

// PROJECT: MAAPKATHI STUDIO
export function MaapkathiStudioPreview() {
  const projects = [
    { name: "Nordé Rebrand", gradient: "from-fuchsia-500/50 to-purple-600/30" },
    { name: "Aurelia Studio", gradient: "from-cyan-500/40 to-fuchsia-600/30" },
    { name: "Loop Motion", gradient: "from-violet-500/50 to-purple-600/30", featured: true },
  ];
  return (
    <div className="w-full h-full bg-gradient-to-br from-slate-950 via-fuchsia-950/30 to-slate-950 p-6 flex flex-col overflow-hidden">
      <WindowChrome title="studio-showcase.app" />
      <div className="mb-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Palette className="h-5 w-5 text-fuchsia-400" />
          <h2 className="text-xl font-bold text-white">Studio Showcase</h2>
        </div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="flex items-center gap-1 rounded-full border border-white/10 bg-white/5 p-0.5 text-[9px] font-semibold"
        >
          <span className="rounded-full bg-fuchsia-500/30 px-2 py-1 text-fuchsia-100">SaaS</span>
          <span className="px-2 py-1 text-slate-500">Self-hosted</span>
        </motion.div>
      </div>

      <div className="grid grid-cols-3 gap-3 mb-5">
        {projects.map((p, i) => (
          <motion.div
            key={p.name}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.12 }}
            whileHover={{ scale: 1.03 }}
            className={`group/proj relative aspect-square overflow-hidden rounded-lg bg-gradient-to-br ${p.gradient} border border-white/10`}
          >
            {p.featured && (
              <span className="absolute left-1 top-1 rounded bg-black/50 px-1.5 py-0.5 text-[7px] font-bold text-fuchsia-200">
                Featured
              </span>
            )}
            <motion.div
              initial={{ opacity: 0 }}
              whileHover={{ opacity: 1 }}
              className="absolute inset-0 flex items-end bg-black/50 p-1.5 opacity-0 transition-opacity group-hover/proj:opacity-100"
            >
              <span className="text-[8px] font-semibold text-white">{p.name}</span>
            </motion.div>
          </motion.div>
        ))}
      </div>

      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.45 }} className="flex-1 rounded-lg border border-white/10 bg-slate-800/40 p-4">
        <p className="text-white text-sm font-semibold mb-3">Deployment Mode</p>
        {["SaaS · multi-tenant hosted", "Self-hosted · license verified offline", "88 unit · 18 integration · 8 E2E passing"].map((row, i) => (
          <motion.div key={row} initial={{ opacity: 0, x: -14 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.65 + i * 0.12 }} className="flex items-center gap-2 text-xs text-slate-300 mb-2">
            <CheckCircle2 className="h-3.5 w-3.5 text-fuchsia-400" /> {row}
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}

"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  HRSolutionPreview,
  MultiTenantSyncPreview,
  DocumentPortalPreview,
  ClinicalTrialPreview,
  LeaseManagementPreview,
  WindowsServicePreview,
  StructuralDesignPreview,
  GetLiftPreview,
  ChessBoardPreview,
  VendingMachinePreview,
  CatchItPreview,
  StoreManagementPreview,
  DonationPlatformPreview,
} from "@/components/project-previews";

const projects = [
  { id: 1, name: "HR Solution Platform", Component: HRSolutionPreview },
  { id: 2, name: "Multi-Tenant Data Sync", Component: MultiTenantSyncPreview },
  { id: 3, name: "Document Sharing Portal", Component: DocumentPortalPreview },
  { id: 4, name: "Clinical Trial Management", Component: ClinicalTrialPreview },
  { id: 5, name: "Lease Management System", Component: LeaseManagementPreview },
  { id: 6, name: "Windows Service", Component: WindowsServicePreview },
  { id: 7, name: "Structural Design", Component: StructuralDesignPreview },
  { id: 8, name: "GetLift - Ride-Sharing", Component: GetLiftPreview },
  { id: 9, name: "Intelligent Chess Board", Component: ChessBoardPreview },
  { id: 10, name: "IoT Vending Machine", Component: VendingMachinePreview },
  { id: 11, name: "Catch It Game", Component: CatchItPreview },
  { id: 12, name: "Store Management", Component: StoreManagementPreview },
  { id: 13, name: "Donation Platform", Component: DonationPlatformPreview },
];

export default function PreviewShowcase() {
  const [selectedId, setSelectedId] = useState(1);
  const selected = projects.find((p) => p.id === selectedId)!;
  const Component = selected.Component;

  return (
    <div className="w-screen h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 flex">
      {/* Sidebar */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        className="w-64 bg-slate-900/80 border-r border-white/10 p-4 overflow-y-auto"
      >
        <h2 className="text-white font-bold text-lg mb-6">Project Previews</h2>
        <div className="space-y-2">
          {projects.map((project, idx) => (
            <motion.button
              key={project.id}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: idx * 0.05 }}
              onClick={() => setSelectedId(project.id)}
              className={`w-full text-left px-4 py-3 rounded-lg transition-all ${
                selectedId === project.id
                  ? "bg-blue-600 text-white font-semibold"
                  : "text-slate-300 hover:bg-slate-800/50"
              }`}
            >
              <span className="text-sm">{project.id}.</span> {project.name}
            </motion.button>
          ))}
        </div>

        <div className="mt-8 pt-8 border-t border-white/10 text-xs text-slate-400">
          <p className="mb-4 font-semibold">Recording Tips:</p>
          <ul className="space-y-2 list-disc list-inside">
            <li>Use OBS or Camtasia</li>
            <li>Record at 1920×1080</li>
            <li>Let each animation complete (8-10 sec)</li>
            <li>Export as MP4 then convert to GIF</li>
            <li>Use ffmpeg: ffmpeg -i video.mp4 -vf fps=10 output.gif</li>
          </ul>
        </div>
      </motion.div>

      {/* Preview Area */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="flex-1 p-8 flex flex-col"
      >
        {/* Header */}
        <div className="mb-6">
          <motion.h1
            key={selected.name}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-3xl font-bold text-white mb-2"
          >
            {selected.name}
          </motion.h1>
          <p className="text-slate-400">
            Project #{selected.id} of {projects.length}
          </p>
        </div>

        {/* Preview Component */}
        <motion.div
          key={selected.id}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="flex-1 bg-gradient-to-br from-slate-800 to-slate-900 rounded-xl border border-white/10 overflow-hidden shadow-2xl"
        >
          <Component />
        </motion.div>

        {/* Controls */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mt-6 flex items-center justify-between bg-slate-800/50 rounded-lg p-4 border border-white/10"
        >
          <div className="text-slate-400 text-sm">
            Recording Preview {selected.id}/{projects.length}
          </div>
          <div className="flex gap-3">
            <button
              onClick={() =>
                setSelectedId(
                  selectedId === 1 ? projects.length : selectedId - 1
                )
              }
              className="px-4 py-2 bg-slate-700 hover:bg-slate-600 text-white rounded-lg transition-all text-sm font-semibold"
            >
              ← Previous
            </button>
            <button
              onClick={() =>
                setSelectedId(selectedId === projects.length ? 1 : selectedId + 1)
              }
              className="px-4 py-2 bg-blue-600 hover:bg-blue-500 text-white rounded-lg transition-all text-sm font-semibold"
            >
              Next →
            </button>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}

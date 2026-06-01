"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X, Github, ExternalLink, ArrowRight } from "lucide-react";
import type { Project } from "@/types";
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

const projectPreviewMap: Record<string, () => React.ReactNode> = {
  "hr-solution": () => <HRSolutionPreview />,
  "data-sync": () => <MultiTenantSyncPreview />,
  "document-portal": () => <DocumentPortalPreview />,
  "clinical-trial": () => <ClinicalTrialPreview />,
  "lease-management": () => <LeaseManagementPreview />,
  "windows-service": () => <WindowsServicePreview />,
  "structural-design": () => <StructuralDesignPreview />,
  "getlift": () => <GetLiftPreview />,
  "intelligent-chessboard": () => <ChessBoardPreview />,
  "iot-vending-machine": () => <VendingMachinePreview />,
  "catch-it-game": () => <CatchItPreview />,
  "store-management": () => <StoreManagementPreview />,
  "potho-shishur-alo": () => <DonationPlatformPreview />,
};

export function ProjectDetailModal({
  project,
  isOpen,
  onClose,
}: {
  project: Project | null;
  isOpen: boolean;
  onClose: () => void;
}) {
  if (!project) return null;

  const PreviewComponent = projectPreviewMap[project.id];

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm"
          />

          {/* Modal Container */}
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 pointer-events-none">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.3, type: "spring", stiffness: 300, damping: 30 }}
              className="pointer-events-auto w-full max-w-5xl max-h-[90vh] rounded-2xl border border-white/20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 shadow-2xl overflow-hidden flex flex-col"
            >
              {/* Close Button */}
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={onClose}
                className="absolute top-6 right-6 z-10 rounded-full bg-white/10 p-2 backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-colors"
              >
                <X className="h-5 w-5 text-white" />
              </motion.button>

              {/* Content */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 h-full">
                {/* Preview Section */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 }}
                  className="relative h-96 lg:h-full min-h-96 bg-gradient-to-br from-slate-950 to-slate-900 border-b lg:border-b-0 lg:border-r border-white/10 flex items-center justify-center"
                >
                  {PreviewComponent ? PreviewComponent() : null}
                </motion.div>

                {/* Details Section */}
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.15 }}
                  className="p-8 lg:p-10 flex flex-col overflow-y-auto max-h-[calc(90vh-2rem)]"
                >
                  {/* Header */}
                  <div className="mb-6">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="text-4xl">{project.emoji}</span>
                      <div className="flex-1">
                        <motion.h2
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.2 }}
                          className="text-2xl lg:text-3xl font-bold text-white"
                        >
                          {project.title}
                        </motion.h2>
                        <motion.p
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ delay: 0.25 }}
                          className="text-sm text-slate-400 mt-1"
                        >
                          {project.status === "featured" && "⭐ Featured Project"}
                          {project.status === "production" && "✓ In Production"}
                          {project.status === "archived" && "📦 Archived"}
                        </motion.p>
                      </div>
                    </div>
                  </div>

                  {/* Description */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3 }}
                    className="mb-6"
                  >
                    <p className="text-base leading-relaxed text-slate-300 mb-3">
                      {project.longDescription}
                    </p>
                    <p className="text-sm text-slate-400">
                      <span className="font-semibold text-slate-300">Role:</span> {project.role}
                    </p>
                  </motion.div>

                  {/* Features */}
                  {project.features && project.features.length > 0 && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.35 }}
                      className="mb-6 border-y border-white/10 py-4"
                    >
                      <p className="font-semibold text-slate-300 mb-3">Key Features</p>
                      <ul className="space-y-2">
                        {project.features.map((feature, idx) => (
                          <motion.li
                            key={feature}
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.4 + idx * 0.05 }}
                            className="flex items-start gap-2 text-sm text-slate-400"
                          >
                            <span className="text-cyan-400 mt-1">▸</span>
                            <span>{feature}</span>
                          </motion.li>
                        ))}
                      </ul>
                    </motion.div>
                  )}

                  {/* Technologies */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.45 }}
                    className="mb-6"
                  >
                    <p className="font-semibold text-slate-300 mb-3">Technologies</p>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <motion.span
                          key={tech}
                          whileHover={{ scale: 1.05, y: -2 }}
                          className="px-3 py-1 rounded-lg bg-white/8 text-slate-300 text-xs font-medium border border-white/20 hover:bg-white/12 hover:border-white/30 transition-all"
                        >
                          {tech}
                        </motion.span>
                      ))}
                    </div>
                  </motion.div>

                  {/* Actions */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                    className="mt-auto flex gap-3 pt-4"
                  >
                    {project.githubUrl && (
                      <motion.a
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-white/10 hover:bg-white/15 border border-white/20 hover:border-white/30 text-slate-300 text-sm font-semibold transition-all"
                      >
                        <Github className="h-4 w-4" />
                        GitHub
                      </motion.a>
                    )}
                    {project.liveUrl && (
                      <motion.a
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-gradient-to-r from-blue-500/20 to-cyan-500/20 hover:from-blue-500/30 hover:to-cyan-500/30 border border-blue-400/30 hover:border-blue-400/50 text-white text-sm font-semibold transition-all"
                      >
                        <ExternalLink className="h-4 w-4" />
                        Live Demo
                      </motion.a>
                    )}
                  </motion.div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
}

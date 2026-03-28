import React from "react";
import { projects } from "../config/projectConfig.ts";
import { ProjectCard } from "../components/ProjectCard.tsx";
import { motion } from "motion/react";

export const Home: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <header className="text-center mb-16">
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl font-extrabold text-gray-900 mb-4"
          >
            ML Platform Explorer 🚀
          </motion.h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Select a project to explore machine learning predictions and real-time data analysis.
          </p>
        </header>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        <footer className="mt-24 text-center text-gray-400 text-sm">
          <p>© 2026 ML Platform Explorer. Built for scalability.</p>
        </footer>
      </div>
    </div>
  );
};

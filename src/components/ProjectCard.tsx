import React from "react";
import { Link } from "react-router-dom";
import { motion } from "motion/react";

interface ProjectCardProps {
  project: {
    name: string;
    icon: string;
    description: string;
    route: string;
  };
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100 hover:border-blue-500 transition-all cursor-pointer"
    >
      <Link to={project.route} className="block">
        <div className="text-4xl mb-4">{project.icon}</div>
        <h3 className="text-xl font-bold text-gray-800 mb-2">{project.name}</h3>
        <p className="text-gray-600 text-sm">{project.description}</p>
      </Link>
    </motion.div>
  );
};

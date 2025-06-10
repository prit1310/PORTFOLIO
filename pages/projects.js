"use client"

import Layout from "../components/Layout"
import Image from "next/image"
import { useState } from "react"
import { projects } from "../data/projects"

export default function Projects({ allProjects, categories }) {
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [filteredProjects, setFilteredProjects] = useState(allProjects)

  const handleCategoryFilter = (category) => {
    setSelectedCategory(category)
    if (category === "All") {
      setFilteredProjects(allProjects)
    } else {
      setFilteredProjects(allProjects.filter((project) => project.category === category))
    }
  }

  return (
    <Layout title="Projects - Prit Senjaliya">
      <div className="pt-16 sm:pt-20">
        {/* Hero Section */}
        <section className="section-padding bg-gradient-to-br from-blue-50/50 via-purple-50/30 to-pink-50/50 dark:from-gray-900/50 dark:via-blue-900/20 dark:to-purple-900/30">
          <div className="max-w-7xl mx-auto text-center">
            <div className="inline-flex items-center px-3 py-2 sm:px-4 sm:py-2 bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900/30 dark:to-purple-900/30 rounded-full text-xs sm:text-sm font-medium text-blue-700 dark:text-blue-300 mb-6 sm:mb-8">
              <span className="mr-2">✨</span>
              Portfolio Showcase
            </div>

            <h1 className="hero-title text-gray-900 dark:text-white mb-4 sm:mb-6">
              My <span className="gradient-text">Projects</span>
            </h1>
            <p className="body-large text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed">
              Explore my collection of projects that showcase my skills in full-stack development and
              problem-solving. Each project represents a unique challenge and learning experience.
            </p>
          </div>
        </section>

        {/* Filter Section */}
        <section className="py-8 sm:py-12 bg-white/30 dark:bg-gray-900/30 backdrop-blur-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-center mb-6 sm:mb-8">
              <div className="inline-flex items-center px-3 py-2 sm:px-4 sm:py-2 bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900/30 dark:to-purple-900/30 rounded-full text-xs sm:text-sm font-medium text-blue-700 dark:text-blue-300 mr-3 sm:mr-4">
                <span className="mr-2 icon-filter"></span>
                Filter by Category
              </div>
            </div>
            <div className="flex flex-wrap justify-center gap-2 sm:gap-4">
              {["All", ...categories].map((category) => (
                <button
                  key={category}
                  onClick={() => handleCategoryFilter(category)}
                  className={`px-3 py-2 sm:px-4 md:px-6 sm:py-3 rounded-lg sm:rounded-xl font-medium transition-all duration-300 text-xs sm:text-sm md:text-base ${
                    selectedCategory === category
                      ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg"
                      : "bg-white/50 dark:bg-gray-800/50 text-gray-700 dark:text-gray-300 hover:bg-white/80 dark:hover:bg-gray-800/80"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Projects Grid */}
        <section className="section-padding">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {filteredProjects.map((project, index) => (
                <div
                  key={project.id}
                  className="card card-hover group overflow-hidden"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="relative overflow-hidden rounded-lg sm:rounded-xl mb-4 sm:mb-6">
                    <Image
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      width={400}
                      height={250}
                      className="w-full h-48 sm:h-56 md:h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                    {/* Category badge */}
                    <div className="absolute top-3 sm:top-4 right-3 sm:right-4">
                      <span className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-2 py-1 sm:px-3 sm:py-1 rounded-full text-xs sm:text-sm font-medium">
                        {project.category}
                      </span>
                      {project.featured && (
                        <div className="absolute -top-1 sm:-top-2 -right-1 sm:-right-2 w-3 h-3 sm:w-4 sm:h-4 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full animate-pulse"></div>
                      )}
                    </div>
                  </div>

                  <div className="space-y-3 sm:space-y-4">
                    <div className="flex items-center justify-between">
                      <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                        {project.title}
                      </h3>
                    </div>

                    <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-sm sm:text-base">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-1.5 sm:gap-2">
                      {project.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="inline-flex items-center px-2 py-1 sm:px-3 sm:py-1 bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900/30 dark:to-purple-900/30 text-blue-800 dark:text-blue-200 text-xs sm:text-sm rounded-full font-medium"
                        >
                          <span className="mr-1 icon-tag"></span>
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div className="flex items-center justify-between pt-3 sm:pt-4 border-t border-gray-200 dark:border-gray-700">
                      <div className="flex space-x-2 sm:space-x-3">
                        {project.liveUrl && (
                          <a
                            href={project.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors duration-300 font-medium text-xs sm:text-sm"
                          >
                            Live Demo
                          </a>
                        )}
                        {project.githubUrl && (
                          <a
                            href={project.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-600 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300 transition-colors duration-300 font-medium text-xs sm:text-sm"
                          >
                            Source Code
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {filteredProjects.length === 0 && (
              <div className="text-center py-16 sm:py-20">
                <div className="text-4xl sm:text-6xl mb-4 sm:mb-6">🔍</div>
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-3 sm:mb-4">
                  No Projects Found
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm sm:text-base">
                  No projects match the selected category. Try selecting a different category.
                </p>
              </div>
            )}
          </div>
        </section>
      </div>
    </Layout>
  )
}

// Static generation
export async function getStaticProps() {
  // Get all projects
  const allProjects = projects.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))

  // Get unique categories
  const categories = [...new Set(projects.map((project) => project.category))]

  return {
    props: {
      allProjects,
      categories,
    },
    revalidate: 3600, // Regenerate every hour
  }
}

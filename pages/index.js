import Layout from "../components/Layout";
import Link from "next/link";
import Image from "next/image";
import { projects, skills, testimonials, personalInfo } from "../data/projects";
import { ArrowRight, Download } from "lucide-react";
import {
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaDocker,
  FaServer,
} from "react-icons/fa";
import {
  SiNextdotjs,
  SiMongodb,
  SiTypescript,
  SiTailwindcss,
  SiPostgresql,
  SiFirebase,
  SiExpress,
  SiGraphql,
  SiFramer,
} from "react-icons/si";

export default function Home({
  featuredProjects,
  topSkills,
  // clientTestimonials,
}) {
  const iconMap = {
    FaReact: <FaReact />,
    FaNodeJs: <FaNodeJs />,
    FaGitAlt: <FaGitAlt />,
    FaDocker: <FaDocker />,
    FaServer: <FaServer />,
    SiNextdotjs: <SiNextdotjs />,
    SiMongodb: <SiMongodb />,
    SiTypescript: <SiTypescript />,
    SiTailwindcss: <SiTailwindcss />,
    SiPostgresql: <SiPostgresql />,
    SiFirebase: <SiFirebase />,
    SiExpress: <SiExpress />,
    SiGraphql: <SiGraphql />,
    SiFramer: <SiFramer />,
  };

  return (
    <Layout>
      {/* Animated Background */}
      <div className="particles">
        {[...Array(10)].map((_, i) => (
          <div
            key={i}
            className="particle"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 8}s`,
              animationDuration: `${8 + Math.random() * 4}s`,
            }}
          />
        ))}
      </div>

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16 sm:pt-20">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 via-purple-50/30 to-pink-50/50 dark:from-gray-900/50 dark:via-blue-900/20 dark:to-purple-900/30"></div>

        <div className="max-w-7xl mx-auto section-padding relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            <div className="text-center lg:text-left animate-slide-left order-2 lg:order-1">
              <div className="inline-flex items-center px-3 py-2 sm:px-4 sm:py-2 bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900/30 dark:to-purple-900/30 rounded-full text-xs sm:text-sm font-medium text-blue-700 dark:text-blue-300 mb-6 sm:mb-8 backdrop-blur-sm">
                <span className="mr-2">✨</span>
                Welcome to my digital world
              </div>

              <h1 className="text-2xl sm:text-3xl md:text-5xl lg:text-7xl font-bold text-gray-900 dark:text-white mb-8 leading-tight whitespace-nowrap">
                Hi, I'm{" "}
                <span className="gradient-text animate-glow">
                  {personalInfo.name}
                </span>
              </h1>

              <div className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-gray-600 dark:text-gray-300 mb-4 sm:mb-6 font-light">
                <span className="inline-block animate-float">
                  {personalInfo.title.split(" & ")[0]}
                </span>
                <span className="mx-2 sm:mx-4 text-blue-500">•</span>
                <span
                  className="inline-block animate-float"
                  style={{ animationDelay: "2s" }}
                >
                  {personalInfo.title.split(" & ")[1]}
                </span>
              </div>

              <p className="body-large text-gray-600 dark:text-gray-400 mb-8 sm:mb-12 max-w-2xl leading-relaxed mx-auto lg:mx-0">
                {personalInfo.bio}
              </p>

              <div className="flex flex-col sm:flex-row gap-6 justify-center lg:justify-start">
                <Link
                  href="/projects"
                  className="btn-primary group flex items-center gap-2"
                >
                  <span>View My Work</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                </Link>

                <a
                  href="/Prit senjaliya - Resume.pdf"
                  download="PritSenjaliya-FullStackDeveloper"
                  className="btn-secondary group flex items-center gap-2"
                >
                  <Download className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
                  <span>Download CV</span>
                </a>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-4 sm:gap-8 mt-12 sm:mt-16 pt-6 sm:pt-8 border-t border-gray-200 dark:border-gray-700">
                <div className="text-center">
                  <div className="text-xl sm:text-2xl md:text-3xl font-bold gradient-text">
                    {personalInfo.projectsCompleted}
                  </div>
                  <div className="text-gray-600 dark:text-gray-400 text-xs sm:text-sm">
                    Projects
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-xl sm:text-2xl md:text-3xl font-bold gradient-text">
                    {personalInfo.experience}
                  </div>
                  <div className="text-gray-600 dark:text-gray-400 text-xs sm:text-sm">
                    Years Exp
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-xl sm:text-2xl md:text-3xl font-bold gradient-text">
                    {personalInfo.satisfactionRate}
                  </div>
                  <div className="text-gray-600 dark:text-gray-400 text-xs sm:text-sm">
                    Satisfaction
                  </div>
                </div>
              </div>
            </div>

            <div className="flex justify-center lg:justify-end animate-slide-right order-1 lg:order-2">
              <div className="relative group">
                <div className="absolute -inset-2 sm:-inset-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full blur-xl sm:blur-2xl opacity-30 group-hover:opacity-50 transition-opacity duration-500"></div>
                <div className="relative">
                  <Image
                    src="/pritSenjaliya.jpg?height=400&width=400"
                    alt={personalInfo.name}
                    width={400}
                    height={400}
                    className="w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 lg:w-[400px] lg:h-[400px] rounded-full shadow-2xl hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-blue-600/20 to-purple-600/20"></div>

                  {/* Floating elements */}
                  <div className="absolute -top-2 -right-2 sm:-top-4 sm:-right-4 w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-xl sm:rounded-2xl flex items-center justify-center animate-float shadow-lg">
                    <span className="text-white text-lg sm:text-2xl">⚡</span>
                  </div>
                  <div
                    className="absolute -bottom-2 -left-2 sm:-bottom-4 sm:-left-4 w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-r from-pink-500 to-red-500 rounded-xl sm:rounded-2xl flex items-center justify-center animate-float shadow-lg"
                    style={{ animationDelay: "1s" }}
                  >
                    <span className="text-white text-lg sm:text-2xl">❤️</span>
                  </div>
                  <div
                    className="absolute top-1/2 -left-4 sm:-left-8 w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-green-400 to-blue-500 rounded-lg sm:rounded-xl flex items-center justify-center animate-float shadow-lg"
                    style={{ animationDelay: "2s" }}
                  >
                    <span className="text-white text-base sm:text-xl">⭐</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="section-padding bg-white/50 dark:bg-gray-900/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 sm:mb-16 md:mb-20 animate-slide-up">
            <div className="inline-flex items-center px-3 py-2 sm:px-4 sm:py-2 bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900/30 dark:to-purple-900/30 rounded-full text-xs sm:text-sm font-medium text-blue-700 dark:text-blue-300 mb-4 sm:mb-6">
              <span className="mr-2">⚡</span>
              Technologies & Skills
            </div>
            <h2 className="section-title text-gray-900 dark:text-white mb-4 sm:mb-6">
              Technologies I <span className="gradient-text">Master</span>
            </h2>
            <p className="body-large text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              I'm proficient in a comprehensive range of modern web technologies
              and frameworks
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 sm:gap-6">
            {topSkills.map((skill, index) => (
              <div
                key={skill.name}
                className="card card-hover group cursor-pointer"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div
                  className={`w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-gradient-to-r ${skill.color} rounded-xl sm:rounded-2xl mx-auto mb-3 sm:mb-4 flex items-center justify-center text-lg sm:text-xl md:text-2xl group-hover:scale-110 transition-transform duration-300 shadow-lg`}
                >
                  {iconMap[skill.icon]}
                </div>
                <h3 className="font-bold text-gray-900 dark:text-white text-center group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300 text-sm sm:text-base">
                  {skill.name}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 sm:mb-16 md:mb-20">
            <h2 className="section-title text-gray-900 dark:text-white mb-4 sm:mb-6">
              Featured <span className="gradient-text">Projects</span>
            </h2>
            <p className="body-large text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              Here are some of my best work that showcase my skills and
              creativity
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-8 sm:mb-12">
            {featuredProjects.map((project, index) => (
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
                </div>

                <div className="space-y-3 sm:space-y-4">
                  <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-sm sm:text-base">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-1.5 sm:gap-2">
                    {project.technologies.slice(0, 5).map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-2 py-1 sm:px-3 sm:py-1 bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900/30 dark:to-purple-900/30 text-blue-800 dark:text-blue-200 text-xs sm:text-sm rounded-full font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link href="/projects" className="btn-primary group">
              <span>View All Projects</span>
              <span className="ml-2 icon-arrow-right group-hover:translate-x-1 transition-transform duration-300"></span>
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      {/* <section className="section-padding bg-white/50 dark:bg-gray-900/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 sm:mb-16 md:mb-20">
            <h2 className="section-title text-gray-900 dark:text-white mb-4 sm:mb-6">
              What Clients <span className="gradient-text">Say</span>
            </h2>
            <p className="body-large text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              Don't just take my word for it - here's what my clients have to
              say about working with me
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {clientTestimonials.map((testimonial, index) => (
              <div
                key={testimonial.id}
                className="card card-hover group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-center mb-4 sm:mb-6">
                  <span className="text-blue-500 mr-3 text-xl sm:text-2xl">
                    "
                  </span>
                  <div className="star-rating">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <span key={i} className="star"></span>
                    ))}
                  </div>
                </div>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4 sm:mb-6 italic text-sm sm:text-base">
                  "{testimonial.content}"
                </p>
                <div className="flex items-center">
                  <Image
                    src={testimonial.avatar || "/placeholder.svg"}
                    alt={testimonial.name}
                    width={40}
                    height={40}
                    className="w-10 h-10 sm:w-12 sm:h-12 rounded-full mr-3 sm:mr-4"
                  />
                  <div>
                    <h4 className="font-bold text-gray-900 dark:text-white text-sm sm:text-base">
                      {testimonial.name}
                    </h4>
                    <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">
                      {testimonial.role} at {testimonial.company}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <div className="animate-slide-up">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-4 sm:mb-6">
              Let's Create Something
              <br />
              <span className="text-yellow-300">Amazing Together</span>
            </h2>
            <p className="body-large text-blue-100 mb-8 sm:mb-12 max-w-3xl mx-auto leading-relaxed">
              Ready to bring your ideas to life? I'm always excited about new
              challenges and opportunities to create exceptional digital
              experiences.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center px-6 py-4 sm:px-8 md:px-10 sm:py-5 bg-white text-blue-600 rounded-xl sm:rounded-2xl hover:bg-gray-100 transition-all duration-300 font-bold text-sm sm:text-base md:text-lg shadow-2xl hover:shadow-white/25 group"
              >
                <span>Get In Touch</span>
                <span className="ml-2 icon-arrow-right group-hover:translate-x-1 transition-transform duration-300"></span>
              </Link>
              <Link
                href="/projects"
                className="inline-flex items-center px-6 py-4 sm:px-8 md:px-10 sm:py-5 border-2 border-white text-white rounded-xl sm:rounded-2xl hover:bg-white hover:text-blue-600 transition-all duration-300 font-bold text-sm sm:text-base md:text-lg group"
              >
                <span>View Projects</span>
                <span className="ml-2 text-lg sm:text-xl md:text-2xl group-hover:rotate-12 transition-transform duration-300">
                  ✨
                </span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}

// Static generation - no dynamic rendering
export async function getStaticProps() {
  // Get featured projects
  const featuredProjects = projects
    .filter((project) => project.featured)
    .slice(0, 3);

  // Get top skills
  const topSkills = skills.slice(0, 12);

  // Get testimonials
  // const clientTestimonials = testimonials;

  return {
    props: {
      featuredProjects,
      topSkills,
      // clientTestimonials,
    },
    // Regenerate the page at most once every hour
    revalidate: 3600,
  };
}

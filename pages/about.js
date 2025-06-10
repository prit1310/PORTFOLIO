import Layout from "../components/Layout";
import Image from "next/image";
import { personalInfo, skills } from "../data/projects";
import {
  FaLaptopCode,
  FaServer,
  FaUsers,
  FaRocket,
  FaStar,
  FaBolt,
  FaCode,
} from "react-icons/fa";
import { FaReact, FaNodeJs, FaGitAlt, FaDocker } from "react-icons/fa";
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

export default function About({
  userInfo,
  userSkills,
  timeline,
  achievements,
}) {
  const features = [
    {
      icon: <FaLaptopCode className="text-3xl text-blue-600" />,
      title: "Clean Code",
      description:
        "I write maintainable, scalable, and well-documented code following best practices.",
    },
    {
      icon: <FaServer className="text-3xl text-purple-600" />,
      title: "DevOps",
      description:
        "Implementing CI/CD pipelines, infrastructure automation, and cloud management.",
    },
    {
      icon: <FaBolt className="text-3xl text-yellow-500" />,
      title: "Performance",
      description:
        "Optimizing applications for speed, efficiency, and excellent performance.",
    },
    {
      icon: <FaUsers className="text-3xl text-green-600" />,
      title: "Collaboration",
      description:
        "Working effectively in teams and communicating clearly with stakeholders.",
    },
  ];

  const iconMap1 = {
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

  const iconMap = {
    FaRocket: <FaRocket className="text-3xl" />,
    FaStar: <FaStar className="text-3xl" />,
    FaBolt: <FaBolt className="text-3xl" />,
    FaCode: <FaCode className="text-3xl" />,
  };

  return (
    <Layout title="About - Prit Senjaliya">
      <div className="pt-16 sm:pt-20">
        {/* Hero Section */}
        <section className="section-padding bg-gradient-to-br from-blue-50/50 via-purple-50/30 to-pink-50/50 dark:from-gray-900/50 dark:via-blue-900/20 dark:to-purple-900/30">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
              <div className="animate-slide-left order-2 lg:order-1 text-center lg:text-left">
                <h1 className="hero-title text-gray-900 dark:text-white mb-4 sm:mb-6">
                  About <span className="gradient-text">Me</span>
                </h1>
                <p className="body-large text-gray-600 dark:text-gray-400 mb-4 sm:mb-6 leading-relaxed">
                  {userInfo.bio}
                </p>
                <p className="body-medium text-gray-600 dark:text-gray-400 mb-6 sm:mb-8 leading-relaxed">
                  When I'm not coding, you can find me exploring new
                  technologies or enjoying a good cup of coffee while reading
                  about the latest trends in web development.
                </p>

                <div className="grid grid-cols-2 gap-4 sm:gap-6">
                  {achievements.map((achievement, index) => (
                    <div key={index} className="card text-center">
                      <div className={`${achievement.color} mb-2`}>
                        {iconMap[achievement.icon]}
                      </div>
                      <div className="text-lg font-bold gradient-text">
                        {achievement.value}
                      </div>
                      <div className="text-gray-600 dark:text-gray-400 text-xs sm:text-sm">
                        {achievement.label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex justify-center animate-slide-right order-1 lg:order-2">
                <div className="relative">
                  <Image
                    src="/home.jpeg?height=500&width=400"
                    alt="Prit Senjaliya working"
                    width={400}
                    height={500}
                    className="w-64 h-80 sm:w-80 sm:h-96 md:w-96 md:h-[500px] rounded-xl sm:rounded-2xl shadow-2xl"
                  />
                  <div className="absolute inset-0 rounded-xl sm:rounded-2xl bg-gradient-to-tr from-blue-600/10 to-purple-600/10"></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section className="section-padding">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="section-title text-gray-900 dark:text-white mb-4 sm:mb-6">
                My <span className="gradient-text">Skills</span>
              </h2>
              <p className="body-large text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
                Here's a breakdown of my technical skills and proficiency levels
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {userSkills.map((skill, index) => (
                <div key={skill.name} className="card card-hover group">
                  <div className="flex items-center mb-3 sm:mb-4">
                    <div
                      className={`w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r ${skill.color} rounded-lg sm:rounded-xl flex items-center justify-center text-lg sm:text-xl mr-3 sm:mr-4 group-hover:scale-110 transition-transform duration-300`}
                    >
                      {iconMap1[skill.icon]}
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-bold text-base sm:text-lg text-gray-900 dark:text-white truncate">
                        {skill.name}
                      </h3>
                      <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">
                        {skill.category}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="section-padding bg-white/50 dark:bg-gray-900/50 backdrop-blur-sm">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="section-title text-gray-900 dark:text-white mb-4 sm:mb-6">
                What I Bring to the <span className="gradient-text">Table</span>
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
              {features.map((feature, index) => (
                <div key={index} className="card card-hover text-center group">
                  <div className="w-16 h-16 sm:w-18 sm:h-18 md:w-20 md:h-20 rounded-xl sm:rounded-2xl flex items-center justify-center mx-auto mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300 text-2xl sm:text-3xl md:text-4xl">
                    {feature.icon}
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white mb-3 sm:mb-4">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-sm sm:text-base">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Timeline Section */}
        <section className="section-padding">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="section-title text-gray-900 dark:text-white mb-4 sm:mb-6">
                My <span className="gradient-text">Journey</span>
              </h2>
            </div>

            <div className="max-w-4xl mx-auto">
              <div className="space-y-8 sm:space-y-12">
                {timeline.map((item, index) => (
                  <div key={index} className="flex items-start">
                    <div className="flex flex-col items-center mr-4 sm:mr-8 flex-shrink-0">
                      <div className="w-4 h-4 sm:w-6 sm:h-6 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full shadow-lg"></div>
                      {index < timeline.length - 1 && (
                        <div className="w-0.5 h-16 sm:h-24 bg-gradient-to-b from-blue-600 to-purple-600 mt-2 sm:mt-4"></div>
                      )}
                    </div>
                    <div className="card card-hover flex-1 min-w-0">
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-3 sm:mb-4">
                        <div className="text-xs sm:text-sm font-medium text-blue-600 dark:text-blue-400 bg-blue-100 dark:bg-blue-900/30 px-2 py-1 sm:px-3 sm:py-1 rounded-full mb-2 sm:mb-0 self-start">
                          {item.year}
                        </div>
                        <div className="text-xs sm:text-sm text-gray-500 dark:text-gray-400">
                          {item.duration}
                        </div>
                      </div>
                      <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 dark:text-white mb-2">
                        {item.title}
                      </h3>
                      <div className="text-blue-600 dark:text-blue-400 font-medium mb-3 text-sm sm:text-base">
                        {item.company}
                      </div>
                      <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-sm sm:text-base">
                        {item.description}
                      </p>
                      {item.achievements && (
                        <ul className="mt-3 sm:mt-4 space-y-1 sm:space-y-2">
                          {item.achievements.map((achievement, achIndex) => (
                            <li
                              key={achIndex}
                              className="flex items-start text-gray-600 dark:text-gray-400 text-sm sm:text-base"
                            >
                              <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full mr-2 sm:mr-3 mt-2 flex-shrink-0"></div>
                              <span>{achievement}</span>
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
}

// Static generation
export async function getStaticProps() {
  const userInfo = personalInfo;

  const userSkills = skills;

  const timeline = [
    {
      year: "2022",
      title: "Higher Secondary Certificate (HSC)",
      company: "Narayani Public School",
      duration: "2021 - 2022",
      description:
        "Completed HSC with a focus on Science (PCM group), developing a strong foundation in mathematics and programming.",
      achievements: [
        "Secured distinction in board exams",
        "Achieved 87.72 percentile in board exams",
      ],
    },
    {
      year: "2022 - Present",
      title: "Bachelor of Information Technology",
      company: "Gandhinagar University",
      duration: "2020 - Present",
      description:
        "Currently pursuing a Bachelor's degree in Information Technology with a focus on full stack development and AI.",
      achievements: [
        "Co-coordinator and committee head in university tech fest",
        "Lead developer group in TechXtreme 2K25",
        "Intern at Aryamind Technologies private limited and contributor to multiple web projects",
      ],
    },
  ];

  const achievements = [
    {
      icon: "FaRocket",
      value: userInfo.projectsCompleted,
      label: "Projects Completed",
      color: "text-blue-500",
    },
    {
      icon: "FaStar",
      value: userInfo.satisfactionRate,
      label: "Client Satisfaction",
      color: "text-yellow-500",
    },
    {
      icon: "FaBolt",
      value: userInfo.responseTime,
      label: "Response Time",
      color: "text-green-500",
    },
    {
      icon: "FaCode",
      value: "2000+",
      label: "Hours of Coding",
      color: "text-orange-500",
    },
  ];

  return {
    props: {
      userInfo,
      userSkills,
      timeline,
      achievements,
    },
    revalidate: 3600,
  };
}

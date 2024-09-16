"use client";

import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaFigma,
  FaNodeJs,
} from "react-icons/fa";

import {
  SiTailwindcss,
  SiNextdotjs,
  SiPhp,
  SiLaravel,
  SiVuedotjs,
  SiElasticsearch,
  SiMongodb,
  SiMysql,
} from "react-icons/si";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { ScrollArea } from "@/components/ui/scroll-area";
import { motion } from "framer-motion";

const about = {
  title: "About me",
  description:
    "I'm a software developer with over a decade of experience, specializing in backend development with PHP and Laravel. I enjoy solving complex problems and building high-performance solutions. Outside of work, I'm a big fan of Street Fighter, which, much like coding, requires strategy and adaptability — skills I bring to both.",
  info: [
    {
      fieldName: "Name",
      fieldValue: "Diego Felix",
    },
    {
      fieldName: "Experience",
      fieldValue: "15 years",
    },
    {
      fieldName: "Nationality",
      fieldValue: "Brazilian",
    },
    {
      fieldName: "Email",
      fieldValue: "contato@diegofelix.com.br",
    },
    {
      fieldName: "Languages",
      fieldValue: "Portuguese, English",
    },
  ],
};

// experience data
const experience = {
  icon: "/assets/resume/bagde.svg",
  title: "My experience",
  description:
    "This section highlights my professional journey, showcasing key roles and projects that have shaped my skills. From backend engineering to leading technical teams, each experience has deepened my expertise in delivering high-performance solutions.",
  items: [
    {
      company: "Leroy Merlin",
      position: "Tech Leader",
      duration: "2016 - Present",
    },
    {
      company: "Makrosystems - Unico",
      position: "Web Developer",
      duration: "2012 - 2016",
    },
    {
      company: "Metacore",
      position: "Web/Game Developer",
      duration: "2010 - 2012",
    },
    {
      company: "PHP Programmer",
      position: "Telefonica - Vivo",
      duration: "2009 - 2010",
    },
  ],
};

// education data
const education = {
  icon: "/assets/resume/cap.svg",
  title: "My education",
  description:
    "My education has laid the groundwork for my career in software development, complemented by continuous learning in the latest technologies and methodologies.",
  items: [
    {
      instituition: "Strides",
      degree: "Tech Manager",
      duration: "2024",
    },
    {
      instituition: "MongoDB University",
      degree: "MongoDB for Developers",
      duration: "2017",
    },
    {
      instituition: "Impacta - College of Technology (FIT)",
      degree: "Systems Analysis",
      duration: "2009 - 2011",
    },
    {
      instituition: "Microcamp",
      degree: "Diploma in Hardware",
      duration: "2005 - 2007",
    },
  ],
};

// skills data
const skills = {
  title: "My skills",
  description:
    "Here is a list of the main technologies I work with regularly, enabling me to deliver high-quality projects. Additionally, I'm expanding my knowledge in some modern frontend frameworks.",
  skillList: [
    {
      icon: <SiPhp />,
      name: "php",
    },
    {
      icon: <SiLaravel />,
      name: "laravel",
    },
    {
      icon: <SiElasticsearch />,
      name: "elasticsearch",
    },
    {
      icon: <SiMongodb />,
      name: "mongodb",
    },
    {
      icon: <FaJs />,
      name: "javascript",
    },
    {
      icon: <FaHtml5 />,
      name: "html 5",
    },
    {
      icon: <FaCss3 />,
      name: "css 3",
    },
    {
      icon: <FaReact />,
      name: "react",
    },
    {
      icon: <SiNextdotjs />,
      name: "nextjs",
    },
    {
      icon: <SiMysql />,
      name: "mysql",
    },
  ],
};

const Resume = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
    >
      <div className="container mx-auto">
        <Tabs
          defaultValue="experience"
          className="flex flex-col xl:flex-row gap-[60px]"
        >
          <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
            <TabsTrigger value="experience">Experience</TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
            <TabsTrigger value="about">About me</TabsTrigger>
          </TabsList>

          <div className="min-h-[70vh] w-full">
            <TabsContent value="experience" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{experience.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {experience.description}
                </p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {experience.items.map((item, index) => (
                      <li
                        key={index}
                        className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                      >
                        <span className="text-accent">{item.duration}</span>
                        <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">
                          {item.position}
                        </h3>
                        <div className="flex items-center gap-3">
                          <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                          <p>{item.company}</p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>
            <TabsContent value="education" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{education.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {education.description}
                </p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {education.items.map((item, index) => (
                      <li
                        key={index}
                        className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                      >
                        <span className="text-accent">{item.duration}</span>
                        <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">
                          {item.degree}
                        </h3>
                        <div className="flex items-center gap-3">
                          <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                          <p>{item.instituition}</p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>
            <TabsContent value="skills" className="w-full">
              <div className="flex flex-col gap-[30px]">
                <div className="flex flex-col gap-[30px] text-center xl:text-left">
                  <h3 className="text-4xl font-bold">{skills.title}</h3>
                  <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                    {skills.description}
                  </p>
                  <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-[30px]">
                    {skills.skillList.map((skill, index) => {
                      return (
                        <li key={index}>
                          <TooltipProvider delayDuration={100}>
                            <Tooltip>
                              <TooltipTrigger className="w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center group">
                                <div className="text-6xl group-hover:text-accent transition-all duration-300">
                                  {skill.icon}
                                </div>
                              </TooltipTrigger>
                              <TooltipContent>
                                <p className="capitalize">{skill.name}</p>
                              </TooltipContent>
                            </Tooltip>
                          </TooltipProvider>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </div>
            </TabsContent>
            <TabsContent
              value="about"
              className="w-full text-center xl:text-left"
            >
              <div className="flex flex-col gap-[30px]">
                <h3 className="text-4xl font-bold">{about.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {about.description}
                </p>
                <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[620px] mx-auto xl:mx-0">
                  {about.info.map((item, index) => (
                    <li
                      key="index"
                      className="flex items-center justify-center xl:justify-start gap-4"
                    >
                      <span className="text-white/60">{item.fieldName}</span>
                      <span className="text-xl">{item.fieldValue}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  );
};

export default Resume;

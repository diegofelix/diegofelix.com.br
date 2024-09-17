"use client";

import { motion } from "framer-motion";
import { React, useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import { BsArrowUpRight, BsGithub } from "react-icons/bs";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@radix-ui/react-tooltip";

import Link from "next/link";
import Image from "next/image";
import WorkSliderButtons from "@/components/WorkSliderButtons";

const projects = [
  {
    num: "01",
    category: "Tech Leader",
    title: "Leroy Merlin",
    description:
      "Led and contributed to major projects such as click-and-collect, marketplace integration, search engine optimization, discount engine, and retail media initiatives. Currently, I'm a Tech Leader guiding teams towards high-quality software delivery.",
    stack: [
      { name: "PHP" },
      { name: "Laravel" },
      { name: "Elasticsearch" },
      { name: "MongoDB" },
    ],
    image: "/assets/work/leroymerlin.png",
    live: "https://www.leroymerlin.com.br",
    github: "",
  },
  {
    num: "02",
    category: "Fullstack",
    title: "Makrosystems",
    description:
      "Developed two key projects: the main website and a fully customized dashboard for clients and security teams, providing intuitive management tools.",
    stack: [
      { name: "PHP" },
      { name: "Laravel" },
      { name: "Vue.js" },
      { name: "MySQL" },
    ],
    image: "/assets/work/makrosystems.png",
    live: "https://makrosystems.com.br",
    github: "",
  },
  {
    num: "03",
    category: "Fullstack",
    title: "Bradent",
    description:
      "Built a comprehensive appointment management system for dental clinics, including patient records, scheduling, and treatment history management.",
    stack: [
      { name: "PHP" },
      { name: "HTML" },
      { name: "CSS" },
      { name: "Javascript (jQuery)" },
    ],
    image: "/assets/work/bradent.png",
    live: "http://bradent.com.br/",
    github: "",
  },
  {
    num: "04",
    category: "Fullstack",
    title: "Telefonica - Call Center System",
    description:
      "Developed a comprehensive call center system used by customer service teams. The system includes call management, call history tracking, and agent performance monitoring, optimizing workflow and enhancing service efficiency.",
    stack: [
      { name: "PHP" },
      { name: "HTML" },
      { name: "CSS" },
      { name: "SQL Server" },
    ],
    image: "/assets/work/telefonica.png",
    live: "https://www.vivo.com.br/",
    github: "",
  },
];

const Work = () => {
  const [project, setProject] = useState(projects[0]);

  const handleSlideChange = (swiper) => {
    const currentSlide = swiper.activeIndex;
    setProject(projects[currentSlide]);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row xl:gap-[30px]">
          <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
            <div className="flex flex-col gap-[30px] h-[50%]">
              <div className="text-8xl leading-none font-extrabold text-transparent text-outline">
                {project.num}
              </div>
              <div>
                <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize">
                  {project.title}
                </h2>
                <h3 className="text-sm py-1 font-bold leading-none text-white/70 group-hover:text-accent transition-all duration-500 uppercase">
                  {project.category}
                </h3>
              </div>

              <p className="text-white/60">{project.description}</p>
              <ul className="flex gap-4 flex-wrap">
                {project.stack.map((item, index) => {
                  return (
                    <li key={index} className="text-xl text-accent">
                      {item.name}
                      {/* remove the last comma */}
                      {index !== project.stack.length - 1 && ","}
                    </li>
                  );
                })}
              </ul>
              <div className="border border-white/20"></div>
              <div className="flex items-center gap-4">
                <Link href={project.live}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                        <BsArrowUpRight className="text-white text-3xl group-hover:text-accent" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Live project</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
                {project.github && (
                  <Link href={project.github}>
                    <TooltipProvider delayDuration={100}>
                      <Tooltip>
                        <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                          <BsGithub className="text-white text-3xl group-hover:text-accent" />
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>Github repository</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </Link>
                )}
              </div>
            </div>
          </div>
          <div className="w-full xl:w-[50%]">
            <Swiper
              spaceBetween={30}
              slidesPerView={1}
              className="xl:h-[520px] mb-12"
              onSlideChange={handleSlideChange}
            >
              {projects.map((project, index) => {
                return (
                  <SwiperSlide key={index} className="w-full">
                    <div className="h-[460px] relative group flex justify-center items-center bg-pink-50/20">
                      <div className="absolute top-0 bottom-0 w-full h-full bg-black/10 z-10"></div>
                      <div className="relative w-full h-full">
                        <Image
                          src={project.image}
                          alt={project.title}
                          fill
                          className="object-cover"
                        ></Image>
                      </div>
                    </div>
                  </SwiperSlide>
                );
              })}
              <WorkSliderButtons
                containerStyles="flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none"
                buttonStyles="bg-accent hover:bg-accent-hover text-primary text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all"
              />
            </Swiper>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Work;

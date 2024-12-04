import React from "react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";
import DoctorAppointment from "../public/DoctorAppointment.PNG";
import KanbanBoard from "../public/KanbanBoard.PNG";
import MathRiddle from "../public/MathRiddle.PNG";
import QuizApp from "../public/QuizApp.PNG";
import ReactWeatherApp from "../public/ReactWeatherAPp.PNG";
import TodoFirebase from "../public/TodoFirebase.PNG";
import LMS from "../public/LMS.PNG";

const projectObj = [
  {
    id: 1,
    title: "Math Riddle Game",
    description:
      "Created using HTML, CSS, and JavaScript. A fun game for solving math riddles.",
    img: MathRiddle,
  },
  {
    id: 2,
    title: "Doctor Appointment System",
    description:
      "Developed with Next.js, Tailwind CSS, and Next Auth. Cloudinary integration for images is pending.",
    img: DoctorAppointment,
  },
  {
    id: 3,
    title: "Learning Management System",
    description:
      "Built using Next.js, Tailwind CSS, and Next Auth. Image functionality to be added via Cloudinary.",
    img: LMS,
  },
  {
    id: 4,
    title: "Quiz App",
    description:
      "A fully responsive quiz application made with HTML, CSS, and JavaScript.",
    img: QuizApp,
  },
  {
    id: 5,
    title: "Todo With Firebase",
    description:
      "A task management app built with React.js and Firebase for real-time updates.",
    img: TodoFirebase,
  },
  {
    id: 6,
    title: "Kanban Board",
    description: "Created a functional Kanban board using pure JavaScript.",
    img: KanbanBoard,
  },
  {
    id: 7,
    title: "Weather App With React Js",
    description:
      "Developed using React.js, Tailwind CSS, and Context API for state management.",
    img: ReactWeatherApp,
  },
];

const Projects = () => {
  return (
    <div id="projects" className="px-5 py-8 md:py-24">
      <div className="flex flex-wrap items-center justify-evenly gap-10">
        {projectObj.map((item) => {
          return (
            <Card
              key={item.id}
              className="w-full sm:w-[340px] flex flex-col transition-all cursor-pointer items-center gap-2 shadow-xl hover:scale-105 hover:shadow-2xl"
            >
              <CardHeader>
                <Image
                  width={190}
                  height={190}
                  src={item.img}
                  alt="skill image"
                />
              </CardHeader>
              <CardContent className="flex items-center flex-col gap-2">
                <h3 className="font-bold text-xl">{item.title}</h3>
                <p className="font-normal text-gray-300 line-clamp-2">
                  {item.description}
                </p>
              </CardContent>
              <CardFooter className="w-full items-center justify-center">
                <Link href={`projectDetail/${item.id}`}>
                  <button className="w-full transition-colors bg-black text-white border border-black px-5 rounded-lg font-semibold hover:bg-white hover:text-black p-2">
                    More Detail
                  </button>
                </Link>
              </CardFooter>
            </Card>
          );
        })}
      </div>
    </div>
  );
};

export default Projects;

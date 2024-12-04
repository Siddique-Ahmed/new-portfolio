import React from "react";
import DoctorAppointment from "../public/DoctorAppointment.PNG";
import KanbanBoard from "../public/KanbanBoard.PNG";
import MathRiddle from "../public/MathRiddle.PNG";
import QuizApp from "../public/QuizApp.PNG";
import ReactWeatherApp from "../public/ReactWeatherAPp.PNG";
import TodoFirebase from "../public/TodoFirebase.PNG";
import LMS from "../public/LMS.PNG";
import Image from "next/image";

const ProjectDetail = ({ id }) => {
  const currentProjectId = id;

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

  const filterProject = projectObj.filter((item)=> item.id == currentProjectId)

  console.log(filterProject);
  

  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center">
      <section className="text-gray-600 body-font overflow-hidden">
        <div className="container px-5 py-24 mx-auto">
          {filterProject.map((item)=>{
            return(
          <div className="lg:w-4/5 mx-auto flex flex-wrap">
            <Image
            width={230}
            height={230}
              alt="ecommerce"
              className="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded"
              src={item.img}
            />
            <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
              <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">{item.title}</h1>
              <p className="leading-relaxed">{item.description}</p>
            </div>
          </div>
            )
          })}
        </div>
      </section>
    </div>
  );
};

export default ProjectDetail;

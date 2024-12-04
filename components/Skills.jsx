import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import Image from "next/image";
import HTML from "../public/HTML.png";
import Css from "../public/CSS.png";
import Javascript from "../public/Javascript.png";
import Bootstrap from "../public/Botstrap.png";
import TailwindCss from "../public/TailwindCss.png";
import ReactJs from "../public/React.png";
import NextJs from "../public/NextJs.png";
import Mongodb from "../public/Mongodb.png";
import Typescripts from "../public/Typescript.png";
import Link from "next/link";

const Skills = () => {
  const skillsObj = [
    {
      title: "HTML",
      image: HTML,
    },
    {
      title: "CSS",
      image: Css,
    },
    {
      title: "Javascript",
      image: Javascript,
    },
    {
      title: "Bootstrap",
      image: Bootstrap,
    },
    {
      title: "Tailwind Css",
      image: TailwindCss,
    },
    {
      title: "React JS",
      image: ReactJs,
    },
    {
      title: "Next Js",
      image: NextJs,
    },
    {
      title: "Mongo DB",
      image: Mongodb,
    },
    {
      title: "Typescript",
      image: Typescripts,
    },
  ];

  return (
    <div id="skills" className="px-5 py-8 md:py-24">
      <div className="flex flex-wrap items-center justify-evenly gap-10">
        {skillsObj.map((item, ind) => {
          return (
            <Card
              key={ind}
              className="w-full  sm:w-[240px] flex flex-col transition-all cursor-pointer items-center shadow-lg hover:scale-105 hover:shadow-2xl"
            >
              <CardHeader>
                <Image
                  width={120}
                  src={item.image}
                  alt="skill image"
                />
              </CardHeader>
              <CardContent>
                <h3 className="font-bold text-2xl">{item.title}</h3>
              </CardContent>
              <CardFooter className="w-full items-center justify-center">
                <Link href={"https://www.w3schools.com/html/"} target="blank">
                  <button className="w-full transition-colors bg-black text-white border border-black px-5 rounded-lg font-semibold hover:bg-white hover:text-black p-2">
                    See Detail
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

export default Skills;

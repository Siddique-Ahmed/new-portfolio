import React from "react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import Image from "next/image";
import pic from "../public/html.jpeg";
import Link from "next/link";

const Projects = () => {
  return (
    <div className="bg-white px-5 py-8 md:py-24">
      <div className="flex flex-wrap items-center justify-evenly gap-10">
        <Card className="w-full sm:w-[340px] flex flex-col transition-all cursor-pointer items-center gap-2 shadow-xl hover:scale-105 hover:shadow-2xl">
          <CardHeader>
            <Image width={190} height={190} src={pic} alt="skill image" />
          </CardHeader>
          <CardContent className="flex items-center flex-col gap-2">
            <h3 className="font-bold text-2xl">Kanban Board</h3>
            <p className="font-normal text-gray-300 line-clamp-2">This is the first project of my coding style it is increase my coding test and also se the klahdsl halsdn nalsnokjasdkj akjdfh asdfkj</p>
          </CardContent>
          <CardFooter className="w-full items-center justify-center">
            <Link href={"https://www.w3schools.com/html/"} target="blank">
              <button className="w-full transition-colors bg-black text-white border border-black px-5 rounded-lg font-semibold hover:bg-white hover:text-black p-2">
                More Detail
              </button>
            </Link>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
};

export default Projects;

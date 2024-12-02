import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import pic from "../public/html.jpeg";
import Link from "next/link";

const Skills = () => {
  return (
    <div id="skills" className="px-5 py-8 md:py-24">
      <div className="flex flex-wrap items-center justify-evenly gap-10">
        <Card className="w-full sm:w-[240px] flex flex-col transition-all cursor-pointer items-center gap-2 shadow-lg hover:scale-105 hover:shadow-2xl">
          <CardHeader>
            <Image width={190} height={190} src={pic} alt="skill image" />
          </CardHeader>
          <CardContent>
            <h3 className="font-bold text-2xl">HTML</h3>
          </CardContent>
          <CardFooter className="w-full items-center justify-center">
            <Link href={"https://www.w3schools.com/html/"} target="blank">
            <button className="w-full transition-colors bg-black text-white border border-black px-5 rounded-lg font-semibold hover:bg-white hover:text-black p-2">See Detail</button>
            </Link>
          </CardFooter>
        </Card>
        <Card className="w-full sm:w-[240px] flex flex-col transition-all cursor-pointer items-center gap-2 shadow-lg hover:scale-105 hover:shadow-2xl">
          <CardHeader>
            <Image width={190} height={190} src={pic} alt="skill image" />
          </CardHeader>
          <CardContent>
            <h3 className="font-bold text-2xl">HTML</h3>
          </CardContent>
          <CardFooter className="w-full items-center justify-center">
            <Link href={"https://www.w3schools.com/html/"} target="blank">
            <button className="w-full transition-colors bg-black text-white border border-black px-5 rounded-lg font-semibold hover:bg-white hover:text-black p-2">See Detail</button>
            </Link>
          </CardFooter>
        </Card>
        <Card className="w-full sm:w-[240px] flex flex-col transition-all cursor-pointer items-center gap-2 shadow-lg hover:scale-105 hover:shadow-2xl">
          <CardHeader>
            <Image width={190} height={190} src={pic} alt="skill image" />
          </CardHeader>
          <CardContent>
            <h3 className="font-bold text-2xl">HTML</h3>
          </CardContent>
          <CardFooter className="w-full items-center justify-center">
            <Link href={"https://www.w3schools.com/html/"} target="blank">
            <button className="w-full transition-colors bg-black text-white border border-black px-5 rounded-lg font-semibold hover:bg-white hover:text-black p-2">See Detail</button>
            </Link>
          </CardFooter>
        </Card>
        <Card className="w-full sm:w-[240px] flex flex-col transition-all cursor-pointer items-center gap-2 shadow-lg hover:scale-105 hover:shadow-2xl">
          <CardHeader>
            <Image width={190} height={190} src={pic} alt="skill image" />
          </CardHeader>
          <CardContent>
            <h3 className="font-bold text-2xl">HTML</h3>
          </CardContent>
          <CardFooter className="w-full items-center justify-center">
            <Link href={"https://www.w3schools.com/html/"} target="blank">
            <button className="w-full transition-colors bg-black text-white border border-black px-5 rounded-lg font-semibold hover:bg-white hover:text-black p-2">See Detail</button>
            </Link>
          </CardFooter>
        </Card>

      </div>
    </div>
  );
};

export default Skills;

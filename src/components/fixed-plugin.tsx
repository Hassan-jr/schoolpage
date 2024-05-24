"use client";
import Image from "next/image";
import { Button } from "@material-tailwind/react";

export function FixedPlugin() {
  return (
    <a href="https://www.relsoftonline.com" target="_blank">
      <Button
        color="white"
        size="sm"
        className="!fixed bottom-4 right-4 flex gap-1 pl-2 items-center border border-blue-gray-50"
      >
        <Image
          width={512}
          height={512}
          className="w-5 h-5 object-contain"
          alt="Material Tailwind"
          src="https://www.relsoftonline.com/wp-content/uploads/2022/12/01.png"
        />{" "}
        ISLAMIC SCHOOL PRO BY RELSOFT
      </Button>
    </a>
  );
}

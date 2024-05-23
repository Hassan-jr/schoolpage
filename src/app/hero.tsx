"use client";

import Image from "next/image";
import { Button, Typography, Card } from "@material-tailwind/react";

function Hero() {
  return (
    <div className="!flex h-[55vh] w-full items-center justify-between px-10">
      <Image
        width={1200}
        height={1200}
        src="/image/image8.jpg"
        alt="bg-img"
        className="absolute inset-0 ml-auto w-[920px] h-[780px] rounded-bl-[100px] object-cover object-center"
      />
      <div className="container mx-auto mt-28 pt-26" >
        <div className="grid grid-cols-12 text-center lg:text-left">
          <Card className="col-span-full rounded-xl border border-white bg-white/90 py-10 p-8 shadow-lg shadow-black/10 backdrop-blur-sm backdrop-saturate-200 xl:col-span-7">
            <Typography
              variant="h2"
              color="blue-gray"
              className="lg:text-5xl !leading-snug text-3xl lg:max-w-3xl"
            >
              Unleashing the academic with excellence learning and advanced memorization!
            </Typography>
            <Typography variant="lead" className="mb-10 mt-6 !text-gray-900">
            Unleashing academic excellence in Islamic schools with Quran memorization fosters intellectually and spiritually enriched students. By integrating advanced memorization techniques with rigorous academic curricula, these schools ensure students excel in both religious and secular studies. This holistic approach develops critical thinking, deepens understanding, 
            and instills strong moral values, preparing students to be well-rounded leaders in their communities.
            </Typography>
            <div className="mb-8 flex justify-center gap-4 lg:justify-start">
              <Button color="gray">view all courses</Button>
              <Button color="gray" variant="outlined">
                Our Schools
              </Button>
            </div>
            {/* <div className="grid grid-cols-2 lg:grid-cols-4 items-center justify-between gap-4 lg:justify-start">
              <Image
                width={144}
                height={144}
                className="w-36 grayscale opacity-60"
                src="/logos/logo-pinterest.svg"
                alt="pinterest"
              />
              <Image
                width={144}
                height={144}
                className="w-36 grayscale opacity-60"
                src="/logos/logo-netflix.svg"
                alt="netflix"
              />
              <Image
                width={144}
                height={144}
                className="w-36 grayscale opacity-60"
                src="/logos/logo-coinbase.svg"
                alt="coinbase"
              />
              <Image
                width={144}
                height={144}
                className="w-36 grayscale opacity-60"
                src="/logos/logo-google.svg"
                alt="google"
              />
            </div> */}
          </Card>
        </div>
      </div>
    </div>
  );
}
export default Hero;

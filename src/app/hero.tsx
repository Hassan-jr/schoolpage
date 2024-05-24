"use client";

import Image from "next/image";
import { Button, Typography, Card } from "@material-tailwind/react";

function Hero() {
  return (
    <div className="!flex h-[55vh] w-full items-center justify-between sm:px-0 px-0">
      <Image
        width={1200}
        height={1200}
        src="/image/image8.jpg"
        alt="bg-img"
        className="absolute hidden lg:block pt-16 inset-0 ml-auto w-[920px] h-[650px] rounded-bl-[100px] object-cover object-center"
      />
      <div className="container mx-auto lg:mt-28 mt-48 pt-28">
        <div className="grid grid-cols-12 text-center lg:text-left">
          <Card className="col-span-full rounded-xl border border-white bg-white/90 py-10 p-8 shadow-lg shadow-black/10 backdrop-blur-sm backdrop-saturate-200 xl:col-span-7">
            <Typography
              variant="h1"
              color="blue-gray"
              className="lg:text-5xl !leading-snug w-full text-2xl lg:max-w-3xl"
            >
              Unleashing Academic Excellence with Advanced Learning and
              Memorization!
            </Typography>
            <Image
              width={1200}
              height={1200}
              src="/image/image8.jpg"
              alt="bg-img"
              className="lg:hidden block pt-6 inset-0 ml-auto w-full h-auto rounded-lg object-cover object-center"
            />
            <Typography variant="lead" className="mb-10 lg:mt-6 mt-2 !text-gray-900">
              Unleashing academic excellence in Islamic schools through Quran
              memorization fosters intellectually and spiritually enriched
              students. By integrating advanced memorization techniques with
              rigorous academics, our students excel in both religious and
              secular studies.
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

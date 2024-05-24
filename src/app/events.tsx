"use client";

import React from "react";
import { Typography, Card, CardBody, CardHeader, Button } from "@material-tailwind/react";
import EventCard from "@/components/event-card";

const EVENTS = [
  {
    img: "/image/quranC.jpg",
    title: "Ramadan Quran Recitation Competition",
    desc: "Ramadan Quran Recitation Competition Will Start Soon All Schools and Their Students Must Register Before the Due Date. The Competition Will Start On First Day of Ramadan and It Will End Day 27 of the Holy Month",
    buttonLabel: "register for free",
  },
  {
    img: "/image/quranC.jpg",
    title: "Ramadan Quran Recitation Competition",
    desc: "Ramadan Quran Recitation Competition Will Start Soon All Schools and Their Students Must Register Before the Due Date. The Competition Will Start On First Day of Ramadan and It Will End Day 27 of the Holy Month",
    buttonLabel: "register for free",
  },
  {
    img: "/image/quranC.jpg",
    title: "Ramadan Quran Recitation Competition",
    desc: "Ramadan Quran Recitation Competition Will Start Soon All Schools and Their Students Must Register Before the Due Date. The Competition Will Start On First Day of Ramadan and It Will End Day 27 of the Holy Month",
    buttonLabel: "register for free",
  },
  {
    img: "/image/quranC.jpg",
    title: "Ramadan Quran Recitation Competition",
    desc: "Ramadan Quran Recitation Competition Will Start Soon All Schools and Their Students Must Register Before the Due Date. The Competition Will Start On First Day of Ramadan and It Will End Day 27 of the Holy Month",
    buttonLabel: "register for free",
  },
];

export function Events() {
  return (
    <section className="py-20 px-8">
      <div className="container mx-auto mb-20 text-center">
        <Typography variant="h2" color="blue-gray" className="mb-4">
          Upcoming Events
        </Typography>
        <Typography
          variant="lead"
          className="mx-auto w-full px-4 font-normal !text-gray-500 lg:w-6/12"
        >
          Join our events designed to share insights, trends,
          and real-world experiences.
        </Typography>
      </div>
      <div className="container mx-auto grid grid-cols-1 gap-x-10 gap-y-20 md:grid-cols-2 xl:grid-cols-4">
        {EVENTS.map((props, idx) => (
          <EventCard key={idx} {...props} />
        ))}
      </div>
    </section>
  );
}


export default Events;

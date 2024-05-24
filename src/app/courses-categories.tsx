"use client";

import React from "react";
import {
  Button,
  Typography,
  Card,
  CardBody,
} from "@material-tailwind/react";

import {
  BookOpenIcon,
  MicrophoneIcon,
  PuzzlePieceIcon,
  HeartIcon,
} from "@heroicons/react/24/solid";

import CategoryCard from "@/components/category-card";

const CATEGORIES = [
  {
    img: "/image/students.jpg",
    icon: BookOpenIcon,
    title: "Quranic Studies",
    desc: "300 Courses",
  },
  {
    img: "/image/history.jpg",
    icon: MicrophoneIcon,
    title: "Islamic History",
    desc: "200 Courses",
  },
  {
    img: "/image/quran1.jpg",
    icon: PuzzlePieceIcon,
    title: "Arabic Language",
    desc: "240 Courses",
  },
  {
    img: "/image/quran2.jpg",
    icon: HeartIcon,
    title: "Fiqh & Islamic Jurisprudence",
    desc: "100 Courses",
  },
];

export function CoursesCategories() {
  return (
    <section className="container mx-auto px-8 py-36">
      <div className="mb-20 grid place-items-center text-center">
        <Typography variant="h2" color="blue-gray" className="my-3">
          Course Categories
        </Typography>
        <Typography variant="lead" className="!text-gray-500 lg:w-6/12">
          A comprehensive selection of courses designed to empower students
          with the knowledge and skills needed to excel in both religious
          and academic pursuits, rooted in Islamic principles.
        </Typography>
      </div>
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        <Card
          color="gray"
          className="relative grid h-full w-full place-items-center overflow-hidden text-center"
        >
          <div className="absolute inset-0 h-full w-full bg-gray-900/75" />
          <CardBody className="relative w-full">
            <Typography color="white" className="text-xs font-bold opacity-50">
              Quran, Tafsir & Tajweed
            </Typography>
            <Typography variant="h4" className="mt-9" color="white">
              Introduction to Quranic Studies
            </Typography>
            <Typography
              color="white"
              className="mt-4 mb-14 font-normal opacity-50"
            >
              Ready to deepen your understanding of the Quran?
            </Typography>
            <Button size="sm" color="white">
              Enroll Now
            </Button>
          </CardBody>
        </Card>
        <div className="col-span-1 flex flex-col gap-6">
          {CATEGORIES.slice(0, 2).map((props, key) => (
            <CategoryCard key={key} {...props} />
          ))}
        </div>
        <div className="col-span-1 flex flex-col gap-6">
          {CATEGORIES.slice(2, 4).map((props, key) => (
            <CategoryCard key={key} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default CoursesCategories;

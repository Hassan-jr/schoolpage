"use client";

import { Typography } from "@material-tailwind/react";
import CourseCard from "@/components/course-card";

const COURSES = [
  {
    img: "/image/quran2.jpg",
    tag: "Beginner • 25 Classes • 200 Students",
    title: "Quran Memorization",
    label: "from $99",
    desc: "Begin your journey of Quran memorization with our comprehensive course. Designed for beginners, this course will guide you through the steps of memorizing the Quran with proper Tajweed, preparing you for participation in recitation competitions and deepening your spiritual connection.",
  },
  {
    img: "/image/history.jpg",
    tag: "Medium • 10 Classes • 150 Students",
    title: "Islamic History",
    label: "from $199",
    desc: "Explore the rich history of Islamic civilization, from the time of the Prophet Muhammad (PBUH) to the present day. Understand the contributions of Muslims to various fields of knowledge.",
  },
  {
    img: "/image/quran1.jpg",
    tag: "Medium • 23 Classes • 590 Students",
    title: "Arabic Language Mastery",
    label: "from $499",
    desc: "Master the Arabic language, the key to accessing the Quran and classical Islamic texts. This course covers reading, writing, and conversational skills for all levels.",
  },
];


export function ExploreCourses() {
  return (
    <section className="px-8">
      <div className="container mx-auto mb-24 text-center">
        <Typography variant="h2" color="blue-gray">
          Explore Courses
        </Typography>
        <Typography
          variant="lead"
          className="mt-2 mx-auto w-full px-4 !text-gray-500 lg:w-6/12 lg:px-8"
        >
          Browse through 1,000+ islamic courses and find the one that
          fits your needs.
        </Typography>
      </div>
      <div className="container mx-auto grid grid-cols-1 gap-x-10 gap-y-24 md:grid-cols-2 lg:grid-cols-3 lg:gap-x-14">
        {COURSES.map((props, idx) => (
          <CourseCard key={idx} {...props} />
        ))}
      </div>
    </section>
  );
}

export default ExploreCourses;

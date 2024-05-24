"use client";
import React from "react";
import FeedbackCard from "@/components/feedback-card";
import { Typography } from "@material-tailwind/react";


const FEEDBACKS = [
  {
    feedback:
      "The School Management System has been a game-changer for our administrative team. It has streamlined our processes, from enrollment and attendance tracking to fee management and reporting. The system's efficiency has significantly reduced our workload and minimized errors, allowing us to focus more on strategic planning and improving the overall educational experience.",
    client: "Administrators",
    title: "",
    img: "/image/icon.png",
  },
  {
    feedback:
      "This system has made it so much easier for me to stay involved in my child's education. I can quickly check their attendance, grades, and even communicate with teachers directly through the portal. The real-time updates and notifications keep me informed about school events and important deadlines, making sure I never miss anything important.",
    client: "Parents",
    title: "",
    img: "/image/icon.png",
  },
  {
    feedback:
      "As a teacher, the School Management System has been incredibly beneficial. The gradebook feature allows me to enter and update grades easily, and the lesson planning tools help me organize my curriculum more effectively. Additionally, the communication platform has improved my ability to connect with both students and parents",
    client: "Teachers",
    title: "",
    img: "/image/icon.png",
  },
];

export function StudentsFeedback() {
  return (
    <section className="px-8 py-36">
      <div className="container mx-auto">
        <div className="mb-16 flex flex-col items-center w-full">
          <Typography variant="h2" color="blue-gray" className="mb-2">
            What Our School Members Are Saying
          </Typography>
          <Typography
            variant="lead"
            className="mb-10 max-w-3xl lg:text-center !text-gray-500"
          >
            Our mission is to empower individuals with the knowledge and skills
            they need to succeed in the world. But don&apos;t
            just take our word for it.
          </Typography>
        </div>
        <div className="grid gap-x-8 gap-y-12 lg:px-32 grid-cols-1 md:grid-cols-3">
          {FEEDBACKS.map((props, key) => (
            <FeedbackCard key={key} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}


export default StudentsFeedback;

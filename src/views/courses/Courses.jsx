"use client";

import CourseCard from "@/components/basic/CourseCard";
import { TypographyH1 } from "@/components/ui/typography";
import CardRender from "@/components/utils/CardRender";
import SearchBar from "@/components/utils/SearchBar";
import getCourses from "@/lib/utils/course/getCourses";
import getEnrolledUsersInCourse from "@/lib/utils/course/getEnrolledUsersInCourse";
import getUserFromId from "@/lib/utils/user/getUserFromId";
import { useEffect, useState } from "react";

export default function Courses({ search }) {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (typeof window != "undefined") {
      getCourses(search)
        .then(async (courses) => {
          for (let i in courses) {
            courses[i].data = JSON.parse(courses[i].data);
            courses[i].instructor = await getUserFromId(courses[i].userId);
            courses[i].students = (
              await getEnrolledUsersInCourse(courses[i]._id)
            ).length;
            // TODO
            courses[i].stars = 2;
          }
          setCourses(courses);
          setLoading(false);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, []);

  return (
    <div className="min-h-[calc(100vh-20rem)]">
      <TypographyH1 className="capitalize text-center my-8">
        Courses
      </TypographyH1>
      <SearchBar defaultValue={search} />
      <CardRender
        data={courses}
        ItemRender={CourseCard}
        className="my-16"
        placeholder={loading ? "Loading..." : "No Course Found"}
      />
    </div>
  );
}

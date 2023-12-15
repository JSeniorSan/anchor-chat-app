import React from "react";
import { coursesRepository } from "../courses.repository";
import CourseItem from "../ui/course-item";
import { handleDeleteAction } from "../actions";

const CoursesList = async ({
  revalidatePagePath,
}: {
  revalidatePagePath: string;
}) => {
  const coursesList = await coursesRepository.getCoursesList();

  return (
    <div className="flex flex-col gap-3">
      {coursesList.map((course) => {
        return (
          <CourseItem
            course={course}
            onDelete={handleDeleteAction.bind(
              null,
              course.id,
              revalidatePagePath
            )}
            key={course.id}
          />
        );
      })}
    </div>
  );
};

export default CoursesList;

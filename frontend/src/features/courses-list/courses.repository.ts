import { clientDb } from "@/shared/lib/db";
import { cache } from "react";

class CoursesRepository {
  getCoursesList = cache(
    (): Promise<CourseListElement[]> => clientDb.course.findMany()
  );

  createCourseElement = (
    command: CreateCourseCommand
  ): Promise<CourseListElement> => {
    return clientDb.course.create({
      data: command,
    });
  };

  deleteCourseElement = (
    command: DeleteCourseCommand
  ): Promise<CourseListElement> => {
    return clientDb.course.delete({
      where: { id: command.id },
    });
  };
}

export const coursesRepository = new CoursesRepository();

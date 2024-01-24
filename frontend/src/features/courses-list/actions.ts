// "use server";

// import { coursesRepository } from "./courses.repository";
// import { revalidatePath } from "next/cache";

// export const createCourseAction = async (
//   revalidatePagePath: string,
//   data: CreateCourseCommand
// ) => {
//   await coursesRepository.createCourseElement(data);
//   revalidatePath(revalidatePagePath);
// };

// export const handleDeleteAction = async (
//   courseId: string,
//   revalidatePagePath: string
// ) => {
//   await coursesRepository.deleteCourseElement({ id: courseId });
//   revalidatePath(revalidatePagePath);
// };

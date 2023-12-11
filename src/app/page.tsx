import CoursesList from "@/features/courses-list/pub/courses-list";
import CreateCourseForm from "@/features/courses-list/pub/create-course-form";
export default async function Home() {
  return (
    <main className="flex min-h-screen flex-col p-10">
      <CreateCourseForm revalidatePagePath="/" className="mb-5 w-[300px]" />
      <CoursesList revalidatePagePath="/" />
    </main>
  );
}

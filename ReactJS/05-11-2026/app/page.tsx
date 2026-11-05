import StudentForm from "@/components/StudentForm";

export default function Home() {
  return (
    <>
      <div className="flex flex-col items-center justify-center min-h-screen py-2 bg-amber-50">
      <h1 className="text-2xl font-bold mb-4">Welcome to the Home Page</h1>
      <StudentForm/>
      </div>
    </>
  );
}

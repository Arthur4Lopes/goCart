import Image from "next/image";
import Header from "@/components/header";

export default function Home() {
  return (
    <main className="min-h-screen bg-teal-100 w-full flex-col justify-center items-center py-2">
      <div className="text-gray-700 w-4/5 bg-red-200">
        <Header/>
      </div>
      <div className="bg-blue-200 w-4/5">
        Hello, welcome to dev class
        </div>
    </main>
  );
}

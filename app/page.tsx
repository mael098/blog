import Image from "next/image";
import Targetas from "./components/targetas";
import Link from "next/link";

export default async function Home() {

  return (
    <div className="bg-gray-100 h-screen w-full text-black">
      <header className="h-20 flex items-center justify-center bg-slate-600">
        <Link href={'./new'} className="text-4xl text-white">Task Manager</Link>
      </header>
      <main className="h-52 flex  items-center ">
      <Targetas/>
      </main>
    </div>
  );
}

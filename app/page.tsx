import Image from "next/image";
import Targetas from "./components/targetas";

export default async function Home() {

  return (
    <div className="h-screen w-full bg-white text-black">
      <main className="h-52 flex  items-center ">
      <Targetas/>
      </main>
    </div>
  );
}

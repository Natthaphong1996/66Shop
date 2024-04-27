import Image from "next/image";
import Header from "./components/Header";
import GamesData from "./components/GamesData";

export default function Home() {
  return (
    <div className="bg-gray-600">
      <Header/>
      <GamesData/>
    </div>
  );
}


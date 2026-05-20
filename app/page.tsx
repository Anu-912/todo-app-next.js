import Image from "next/image";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";

export default function Home() {
  return (
    <div className='bg-[#71717A] w-full h-screen '>
      <Header />
      <img
        className='w-full '
        src='./icons/Image÷.png'
        alt=''
      />
      <Footer />
    </div>
  );
}

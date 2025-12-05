import { ChatHero } from "./ChatHero";
import Footer from "./Footer";
import InputSection from "./InputSection";
import PhotoGallery from "./PhotoGallery";
import Sidebar from "./SideBar";

export default function Page() {
  return (
    <div className="flex w-full">
      <Sidebar />
      <ChatHero />

    </div>
  );
}

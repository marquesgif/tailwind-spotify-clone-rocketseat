import { Footer } from "@/components/Footer";
import { MainContainer } from "@/components/Main-Container";
import { Sidebar } from "@/components/Sidebar";

export default function Home() {
  return (
    <div className="h-screen flex flex-col">
      <div className="flex flex-1">
        <Sidebar />
        <MainContainer />
      </div>
      <Footer />
    </div>
  );
}

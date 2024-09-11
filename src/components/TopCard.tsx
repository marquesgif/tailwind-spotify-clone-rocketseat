import { Play } from "lucide-react";
import Image from "next/image";

export function TopCard({image,title}:{
    image: string;
    title: string;
}) {
  return (
      <a
        href=""
        className="group bg-white/5 flex items-center gap-4 rounded-md overflow-hidden hover:bg-white/10 transition-colors"
      >
        <Image
          src={image}
          alt="Album westing Light da banda Foo Fighters"
          width={104}
          height={104}
        />
        <strong>{title}</strong>
        <button className="p-2 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible">
          <Play />
        </button>
      </a>
  );
}

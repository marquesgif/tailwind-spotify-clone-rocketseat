import Image from "next/image";

export function MadeForCard({image, titulo, desc}:{image:string, titulo:string, desc:string}) {
  return (
    <a
      href=""
      className="bg-white/5 p-3 rounded-md flex flex-col hover:bg-white/10"
    >
      <Image
        src={image}
        alt="Album westing Light da banda Foo Fighters"
        width={120}
        height={120}
        className="w-full"
      />
      <strong className="font-semibold">{titulo}</strong>
      <span className="text-sm text-zinc-500">
        {desc}
      </span>
    </a>
  );
}

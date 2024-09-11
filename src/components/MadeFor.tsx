import React from "react";
import { MadeForCard } from "./MadeForCard";
const musicas = [
  {
    id: 1,
    image: "/album.jpg",
    titulo: "Música 1",
    desc: "Wallows, COIN, girld in red and more",
  },
  {
    id: 1,
    image: "/album.jpg",
    titulo: "Música 1",
    desc: "Wallows, COIN, girld in red and more",
  },
  {
    id: 1,
    image: "/album.jpg",
    titulo: "Música 1",
    desc: "Wallows, COIN, girld in red and more",
  },
  {
    id: 1,
    image: "/album.jpg",
    titulo: "Música 1",
    desc: "Wallows, COIN, girld in red and more",
  },
  {
    id: 1,
    image: "/album.jpg",
    titulo: "Música 1",
    desc: "Wallows, COIN, girld in red and more",
  },
];
export function MadeFor() {
  return (
    <div className="grid grid-cols-5 mb-24 gap-4 mt-4">
      {musicas.map((musica) => (
        <MadeForCard
          image={musica.image}
          titulo={musica.titulo}
          desc={musica.desc}
          key={musica.id}
        />
      ))}
    </div>
  );
}

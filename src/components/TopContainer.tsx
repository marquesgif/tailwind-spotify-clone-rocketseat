import { TopCard } from "./TopCard";

const albuns = [
  {
    id: 1,
    title: "Wasting Light",
    image: "/album.jpg",
  },
  {
    id: 2,
    title: "Além da Cruz",
    image: "/album.jpg",
  },
  {
    id: 3,
    title: "Recomeço",
    image: "/album.jpg",
  },
  {
    id: 4,
    title: "Nova História",
    image: "/album.jpg",
  },
  {
    id: 5,
    title: "Geração de Samuel",
    image: "/album.jpg",
  },
  {
    id: 6,
    title: "Thunder Light",
    image: "/album.jpg",
  },
];
export function TopContainer() {
  return (
    <div className="grid grid-cols-3 gap-6 mt-4">
      {albuns.map((album) => (
        <TopCard image={album.image} title={album.title} key={album.id} />
      ))}
    </div>
  );
}

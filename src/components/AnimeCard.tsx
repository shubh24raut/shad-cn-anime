import { Anime } from "@/types/types";
import { Badge } from "./ui/badge";

type Props = {
  anime: Anime; // Expect a single Anime object
};

const AnimeCard = ({ anime }: Props) => {
  console.log({ anime });

  return (
    <div className="flex flex-col relative w-full cursor-pointer transform transition hover:scale-105 ease-out duration-300">
      <img
        src={anime.image}
        alt={anime.title}
        className="object-cover object-center h-56 w-screen rounded-md"
      />
      <span className="absolute w-1/2 leading-none z-10 top-4 text-lg font-bold px-4">
        {anime.title}
      </span>
      <span className="flex z-10 items-center  w-full space-x-1 absolute bottom-4 px-2">
        <Badge variant={"outline"} className="border border-white">
          {anime.ranking}
        </Badge>
        <span className="flex z-10 items-center left-10  w-full space-x-1 absolute  px-2">
          {anime.genres &&
            anime.genres.slice(0, 3).map((key, i) => {
              return <Badge key={i}>{key}</Badge>;
            })}
        </span>
      </span>
      <div className="absolute inset-0 bg-gradient-to-l from-gray-200/0 via-gray-900/25 to-gray-900 dark:to-gray-950" />
    </div>
  );
};

export default AnimeCard;

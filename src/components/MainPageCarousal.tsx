import { Anime } from "@/types/types";
import Autoplay from "embla-carousel-autoplay";
import useEmblaCarousel from "embla-carousel-react";

Autoplay.globalOptions = { delay: 8000 };

const MainPageCarousel = () => {
  const [emblaRef] = useEmblaCarousel({ loop: true, duration: 100 }, [
    Autoplay(),
  ]);

  const fakeObject: Anime[] = [
    {
      id: 1,
      title: "title 1",
      image: "https://4kwallpapers.com/images/walls/thumbs_3t/14684.png",
      description:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Qui eligendi quos, fugit tempore nisi tempora? Voluptate recusandae assumenda similique vitae!",
    },
    {
      id: 2,
      title: "title 2",
      image: "https://4kwallpapers.com/images/walls/thumbs_3t/14673.jpg",
      description:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Qui eligendi quos, fugit tempore nisi tempora? Voluptate recusandae assumenda similique vitae!",
    },
    {
      id: 3,
      title: "title 3",
      image: "https://4kwallpapers.com/images/walls/thumbs_3t/14672.jpg",
      description:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Qui eligendi quos, fugit tempore nisi tempora? Voluptate recusandae assumenda similique vitae!",
    },
  ];

  return (
    <div className="overflow-hidden relative cursor-pointer">
      <div className="flex" ref={emblaRef}>
        {fakeObject.map((data) => (
          <div key={data.id} className="flex-[0_0_100%] min-w-0 relative">
            <img
              className="w-full object-cover"
              src={data.image} // Correctly referencing data.image
              alt={data.title} // Adding alt text for accessibility
              width={1920}
              height={1080}
            />
            <div className="absolute z-20 text-white">{data.title}</div>
          </div>
        ))}
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-gray-200/0 via-gray-900/25 to-gray-900 dark:to-gray-950" />
    </div>
  );
};

export default MainPageCarousel;

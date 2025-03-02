import Carousel from "@/components/Carousel";
import image1 from "../../public/1.jpg"
import image2 from "../../public/2.jpg"
import image3 from "../../public/3.jpg"
import image4 from "../../public/4.jpg"
import image5 from "../../public/5.jpg"
import image6 from "../../public/6.jpg"

const filmGallery = [
  {
    image: image1.src,
    title: "Office Shoot",
  },
  {
    image: image6.src,
    title: "Podcast Shoot",
  },
  {
    image: image5.src,
    title: "Ad Film",
  },
  {
    image: image3.src,
    title: "TVC",
  },
  {
    image: image2.src,
    title: "Corporate Film Shoot",
  },
  {
    image: image4.src,
    title: "Ad Film",
  },
];

export default function FilmGallery() {
  return (
    <div className="w-full text-white py-10">
      <h2 className="text-center text-xl md:text-4xl lg:text-5xl font-bold">
        Our Gallery of Making
      </h2>
      <p className="text-center text-sm md:text-lg lg:text-xl text-blue-400 mb-6 mt-2">
        Featured Works
      </p>
      <Carousel items={filmGallery} />
    </div>
  );
}

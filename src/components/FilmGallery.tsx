import Carousel from "@/components/Carousel";

const filmGallery = [
  {
    image: "https://res.cloudinary.com/travelee/image/upload/v1737467062/ml4ntxhl3jqb20n4yvha.jpg",
    title: "TVC",
  },
  {
    image: "https://res.cloudinary.com/travelee/image/upload/v1739787800/cam1_v5pfzy.jpg",
    title: "Corporate Film Shoot",
  },
  {
    image: "https://res.cloudinary.com/travelee/image/upload/v1739787800/cam2_shg13r.jpg",
    title: "Ad Film",
  },
  {
    image: "https://res.cloudinary.com/travelee/image/upload/v1739787800/cam3_f2ytsi.jpg",
    title: "TVC",
  },
  {
    image: "https://res.cloudinary.com/travelee/image/upload/v1739787889/photo-1598488035139-bdbb2231ce04_xjryv9.avif",
    title: "Corporate Film Shoot",
  },
  {
    image: "https://res.cloudinary.com/travelee/image/upload/v1739787919/photo-1557860855-159a8c0d18f7_oncpur.avif",
    title: "Ad Film",
  },
];

export default function FilmGallery() {
  return (
    <div className="w-full text-white py-10">
      <h2 className="text-center text-xl md:text-4xl lg:text-5xl font-bold">
        Our Gallery of Film Making
      </h2>
      <p className="text-center text-sm md:text-lg lg:text-xl text-blue-400 mb-6 mt-2">
        Featured Works
      </p>
      <Carousel items={filmGallery} />
    </div>
  );
}

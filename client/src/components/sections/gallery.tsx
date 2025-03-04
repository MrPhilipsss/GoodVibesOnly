import { useState } from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";

const images = [
  "/images/brwi1s.jpg",
  "/images/brwi2s.jpg",
  "/images/brwi3s.jpg",
  "/images/brwi4s.jpg",
  "/images/rzesy1s.jpg",
  "/images/rzesy2s.jpg",
  "/images/rzesy3s.jpg",
  "/images/rzesy4s.jpg",
];

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <section id="gallery" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-[#4A4036]">
          Our Gallery
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {images.map((image, index) => (
            <div
              key={index}
              className="aspect-square cursor-pointer overflow-hidden rounded-lg"
              onClick={() => setSelectedImage(image)}
            >
              <img
                src={image}
                alt={`Gallery image ${index + 1}`}
                className="object-cover w-full h-full hover:scale-110 transition-transform duration-300"
              />
            </div>
          ))}
        </div>

        <Dialog open={!!selectedImage} onOpenChange={() => setSelectedImage(null)}>
          <DialogContent className="max-w-4xl">
            {selectedImage && (
              <img
                src={selectedImage}
                alt="Selected gallery image"
                className="w-full h-auto"
              />
            )}
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
}

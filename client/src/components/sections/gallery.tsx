import { useState } from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";

const images = [
  "https://images.unsplash.com/photo-1500051638674-ff996a0ec29e",
  "https://images.unsplash.com/photo-1518707598572-8cf7dabd8f66",
  "https://images.unsplash.com/photo-1513519245088-0e12902e5a38",
  "https://images.unsplash.com/photo-1518998053901-5348d3961a04",
  "https://images.unsplash.com/photo-1507643179773-3e975d7ac515",
  "https://images.unsplash.com/photo-1658314756268-3552b9ba2784",
  "https://images.unsplash.com/photo-1534103704502-96e3a4ed093b",
  "https://images.unsplash.com/photo-1502078889459-923ef351c722",
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

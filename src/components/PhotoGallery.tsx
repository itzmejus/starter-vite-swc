import { useState } from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Card } from "@/components/ui/card";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { motion } from "framer-motion";
import profile from "./assets/justin.JPEG"
import JustinOffice from "./assets/JustinOffice.JPEG"
import JustinTeamOut from "./assets/JustinTeamOut.JPEG"
import justinFormal from "./assets/justinFormal.JPEG"
import TeamOut1 from "./assets/TeamOut1.JPEG"
import TeamOut2 from "./assets/TeamOut2.JPEG"
import TeamOut3 from "./assets/TeamOut3.JPEG"
import TeamOut4 from "./assets/TeamOut4.JPEG"
import WorkDesk from "./assets/WorkDesk.JPEG"

interface Photo {
  id: number;
  src: string;
  alt: string;
  caption?: string;
}

interface PhotoGalleryProps {
  photos?: Photo[];
  title?: string;
  subtitle?: string;
}

const PhotoGallery = ({
  photos = [
    {
      id: 1,
      src: profile,
      alt: "Professional workspace with modern development setup",
      caption: "Development Environment",
    },
    {
      id: 2,
      src: JustinOffice,
      alt: "Office Space",
      caption: "Office Space",
    },
    {
      id: 3,
      src: JustinTeamOut,
      alt: "Team Outing - Le meridien",
      caption: "Team Outing - Le meridien",
    },
    {
      id: 4,
      src: justinFormal,
      alt: "Team Outing - Novotel",
      caption: "Team Outing - Novotel",
    },
    {
      id: 5,
      src: TeamOut1,
      alt: "Team Outing - 1947 Hotel",
      caption: "Team Outing - 1947 Hotel",
    },
    {
      id: 6,
      src: TeamOut2,
      alt: "Team Outing - Le meridien",
      caption: "Team Outing - Le meridien",
    },
    {
      id: 7,
      src: TeamOut3,
      alt: "Team Outing - Marriot",
      caption: "Team Outing - Marriot",
    },
    {
      id: 7,
      src: TeamOut4,
      alt: "With Nicki Brook",
      caption: "With Nicki Brook",
    },
    {
      id: 8,
      src: WorkDesk,
      alt: "Modern office space",
      caption: "Work Desk",
    },
  ],
  title = "Photo Gallery",
  subtitle = "A glimpse into my professional journey",
}: PhotoGalleryProps) => {
  const [selectedPhoto, setSelectedPhoto] = useState<Photo | null>(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const openLightbox = (photo: Photo) => {
    setSelectedPhoto(photo);
    setIsDialogOpen(true);
  };


  return (
    <section className="w-full py-12 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold tracking-tight mb-2">{title}</h2>
          <p className="text-muted-foreground">{subtitle}</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {photos.map((photo) => (
            <motion.div
              key={photo.id}
              whileHover={{ y: -5 }}
              transition={{ duration: 0.3 }}
            >
              <Card
                className="overflow-hidden cursor-pointer hover:shadow-lg transition-shadow duration-300"
                onClick={() => openLightbox(photo)}
              >
                <div className="relative">
                  <AspectRatio ratio={4 / 3}>
                    <img
                      src={photo.src}
                      alt={photo.alt}
                      className="object-cover w-full h-full transition-transform duration-300 hover:scale-105"
                    />
                  </AspectRatio>
                  {photo.caption && (
                    <div className="absolute bottom-0 left-0 right-0 bg-black/60 text-white p-2 text-sm">
                      {photo.caption}
                    </div>
                  )}
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
          <DialogContent className="max-w-4xl p-0 overflow-hidden bg-black/90">
            {selectedPhoto && (
              <div className="relative">
                <img
                  src={selectedPhoto.src}
                  alt={selectedPhoto.alt}
                  className="w-full h-auto max-h-[80vh] object-contain"
                />
                {selectedPhoto.caption && (
                  <div className="absolute bottom-0 left-0 right-0 bg-black/60 text-white p-4">
                    <p>{selectedPhoto.caption}</p>
                  </div>
                )}
              </div>
            )}
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
};

export default PhotoGallery;

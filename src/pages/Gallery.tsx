import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { useState } from "react";
import chessImage from "@/assets/chess-activity.jpg";
import innovationImage from "@/assets/innovation-activity.jpg";
import roboticsImage from "@/assets/robotics-activity.jpg";
const Gallery = () => {
  const [selectedAlbum, setSelectedAlbum] = useState<number | null>(null);
  const albums = [{
    title: "Tournoi d'Échecs 2024",
    category: "Échecs",
    image: chessImage,
    date: "Mars 2024",
    photos: 12,
    images: Array(12).fill(chessImage)
  }, {
    title: "Hackathon Innovation",
    category: "Prix du meilleur TIPE",
    image: innovationImage,
    date: "Février 2024",
    photos: 15,
    images: Array(15).fill(innovationImage)
  }, {
    title: "Compétition de Robotique",
    category: "Robotique",
    image: roboticsImage,
    date: "Janvier 2024",
    photos: 18,
    images: Array(18).fill(roboticsImage)
  }, {
    title: "Workshop Rubik's Cube",
    category: "Échecs",
    image: chessImage,
    date: "Décembre 2023",
    photos: 8,
    images: Array(8).fill(chessImage)
  }, {
    title: "Expo Projets Innovants",
    category: "Prix du meilleur TIPE",
    image: innovationImage,
    date: "Novembre 2023",
    photos: 14,
    images: Array(14).fill(innovationImage)
  }, {
    title: "Formation Robotique Débutants",
    category: "Robotique",
    image: roboticsImage,
    date: "Octobre 2023",
    photos: 10,
    images: Array(10).fill(roboticsImage)
  }];
  const getCategoryColor = (category: string) => {
    switch (category) {
      case "Échecs":
        return "bg-primary";
      case "Prix du meilleur TIPE":
        return "bg-accent";
      case "Robotique":
        return "bg-primary-glow";
      default:
        return "bg-primary";
    }
  };
  return <div className="min-h-screen py-12">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-6">Notre Galerie</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Revivez les moments forts de nos événements, compétitions et ateliers
          </p>
        </div>

        {/* Gallery Grid */}
        

        {/* Coming Soon Message */}
        <Card className="mt-12 shadow-medium">
          <div className="p-8 text-center">
            <h3 className="text-2xl font-semibold mb-2">Plus de contenu bientôt !</h3>
            <p className="text-muted-foreground">
              Nous ajoutons régulièrement de nouvelles photos et vidéos de nos activités. 
              Revenez prochainement pour découvrir plus de moments mémorables.
            </p>
          </div>
        </Card>
      </div>

      {/* Image Gallery Modal */}
      <Dialog open={selectedAlbum !== null} onOpenChange={() => setSelectedAlbum(null)}>
        <DialogContent className="max-w-6xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="text-2xl">
              {selectedAlbum !== null && albums[selectedAlbum].title}
            </DialogTitle>
            <p className="text-muted-foreground">
              {selectedAlbum !== null && `${albums[selectedAlbum].date} • ${albums[selectedAlbum].photos} photos`}
            </p>
          </DialogHeader>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-4">
            {selectedAlbum !== null && albums[selectedAlbum].images.map((img, idx) => <div key={idx} className="relative aspect-square overflow-hidden rounded-lg">
                <img src={img} alt={`${albums[selectedAlbum].title} - Photo ${idx + 1}`} className="w-full h-full object-cover hover:scale-110 transition-transform duration-300" />
              </div>)}
          </div>
        </DialogContent>
      </Dialog>
    </div>;
};
export default Gallery;
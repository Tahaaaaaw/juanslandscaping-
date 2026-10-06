import { useState, useMemo } from "react";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { ChevronLeft, ChevronRight, X, ZoomIn, Sparkles, Filter } from "lucide-react";
import { Button } from "@/components/ui/button";
import galleryData from "@/lib/gallery-data.json";

export interface GalleryItem {
  id: string;
  src: string;
  category: "lawnAndLandscaping" | "walkwaysAndHardscape" | "treeAndPalms";
}

// Build list of all real images
const ALL_IMAGES: GalleryItem[] = [
  ...galleryData.lawnAndLandscaping.map((src, i) => ({
    id: `l-${i + 1}`,
    src,
    category: "lawnAndLandscaping" as const,
  })),
  ...galleryData.walkwaysAndHardscape.map((src, i) => ({
    id: `w-${i + 1}`,
    src,
    category: "walkwaysAndHardscape" as const,
  })),
  ...galleryData.treeAndPalms.map((src, i) => ({
    id: `t-${i + 1}`,
    src,
    category: "treeAndPalms" as const,
  })),
];

type CategoryFilter = "all" | "lawnAndLandscaping" | "walkwaysAndHardscape" | "treeAndPalms";

export function ProjectGallery() {
  const [activeTab, setActiveTab] = useState<CategoryFilter>("all");
  const [selectedImage, setSelectedImage] = useState<GalleryItem | null>(null);
  const [showAll, setShowAll] = useState(false);

  const filtered = useMemo(() => {
    if (activeTab === "all") return ALL_IMAGES;
    return ALL_IMAGES.filter((p) => p.category === activeTab);
  }, [activeTab]);

  const displayed = showAll ? filtered : filtered.slice(0, 12);

  const currentIndex = selectedImage
    ? filtered.findIndex((p) => p.id === selectedImage.id)
    : -1;

  const handlePrev = () => {
    if (filtered.length === 0) return;
    if (currentIndex > 0) {
      setSelectedImage(filtered[currentIndex - 1] ?? null);
    } else {
      setSelectedImage(filtered[filtered.length - 1] ?? null);
    }
  };

  const handleNext = () => {
    if (filtered.length === 0) return;
    if (currentIndex < filtered.length - 1) {
      setSelectedImage(filtered[currentIndex + 1] ?? null);
    } else {
      setSelectedImage(filtered[0] ?? null);
    }
  };

  const counts = {
    all: ALL_IMAGES.length,
    lawnAndLandscaping: galleryData.lawnAndLandscaping.length,
    walkwaysAndHardscape: galleryData.walkwaysAndHardscape.length,
    treeAndPalms: galleryData.treeAndPalms.length,
  };

  // Keyboard navigation for lightbox
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowLeft") handlePrev();
    if (e.key === "ArrowRight") handleNext();
    if (e.key === "Escape") setSelectedImage(null);
  };

  return (
    <div className="w-full">
      {/* Category Tabs */}
      <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3">
        <button
          onClick={() => {
            setActiveTab("all");
            setShowAll(false);
          }}
          className={`flex items-center gap-1.5 sm:gap-2 rounded-full px-3.5 sm:px-5 py-2 sm:py-2.5 text-xs sm:text-sm font-bold tracking-tight transition-all ${
            activeTab === "all"
              ? "bg-gold text-primary-foreground shadow-md shadow-gold/20 scale-105"
              : "bg-forest-foreground/10 text-forest-foreground/90 hover:bg-forest-foreground/20"
          }`}
        >
          <Filter className="size-3.5" /> All Projects ({counts.all})
        </button>
        <button
          onClick={() => {
            setActiveTab("lawnAndLandscaping");
            setShowAll(false);
          }}
          className={`flex items-center gap-1.5 sm:gap-2 rounded-full px-3.5 sm:px-5 py-2 sm:py-2.5 text-xs sm:text-sm font-bold tracking-tight transition-all ${
            activeTab === "lawnAndLandscaping"
              ? "bg-gold text-primary-foreground shadow-md shadow-gold/20 scale-105"
              : "bg-forest-foreground/10 text-forest-foreground/90 hover:bg-forest-foreground/20"
          }`}
        >
          <Sparkles className="size-3.5 text-amber-300" /> Lawn & Landscaping ({counts.lawnAndLandscaping})
        </button>
        <button
          onClick={() => {
            setActiveTab("walkwaysAndHardscape");
            setShowAll(false);
          }}
          className={`flex items-center gap-1.5 sm:gap-2 rounded-full px-3.5 sm:px-5 py-2 sm:py-2.5 text-xs sm:text-sm font-bold tracking-tight transition-all ${
            activeTab === "walkwaysAndHardscape"
              ? "bg-gold text-primary-foreground shadow-md shadow-gold/20 scale-105"
              : "bg-forest-foreground/10 text-forest-foreground/90 hover:bg-forest-foreground/20"
          }`}
        >
          Walkways & Hardscaping ({counts.walkwaysAndHardscape})
        </button>
        <button
          onClick={() => {
            setActiveTab("treeAndPalms");
            setShowAll(false);
          }}
          className={`flex items-center gap-1.5 sm:gap-2 rounded-full px-3.5 sm:px-5 py-2 sm:py-2.5 text-xs sm:text-sm font-bold tracking-tight transition-all ${
            activeTab === "treeAndPalms"
              ? "bg-gold text-primary-foreground shadow-md shadow-gold/20 scale-105"
              : "bg-forest-foreground/10 text-forest-foreground/90 hover:bg-forest-foreground/20"
          }`}
        >
          Palm & Tree Services ({counts.treeAndPalms})
        </button>
      </div>

      {/* Pure Image Grid */}
      <div className="mt-8 sm:mt-10 grid grid-cols-2 gap-2.5 sm:gap-4 md:grid-cols-3 lg:grid-cols-4">
        {displayed.map((item, idx) => (
          <div
            key={item.id}
            onClick={() => setSelectedImage(item)}
            className="group relative aspect-[4/3] cursor-pointer overflow-hidden rounded-xl sm:rounded-2xl border border-forest-foreground/15 bg-forest-foreground/5 shadow-md transition-all duration-300 hover:-translate-y-1 hover:border-gold/60 hover:shadow-xl"
          >
            <img
              src={item.src}
              alt="Juan’s Lawn & Landscaping project work"
              loading={idx < 8 ? "eager" : "lazy"}
              className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-108"
            />
            {/* Subtle dark gradient overlay on hover */}
            <div className="absolute inset-0 bg-black/20 opacity-0 transition-opacity duration-300 group-hover:opacity-100 flex items-center justify-center">
              <span className="grid size-9 sm:size-10 place-items-center rounded-full bg-black/60 text-white backdrop-blur-sm transform scale-90 transition-transform duration-300 group-hover:scale-100">
                <ZoomIn className="size-4 sm:size-5" />
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Show More / Show Less Button */}
      {filtered.length > 12 && (
        <div className="mt-8 sm:mt-10 flex justify-center">
          <Button
            variant="outlineLight"
            size="lg"
            onClick={() => setShowAll(!showAll)}
            className="gap-2 font-bold text-xs sm:text-sm"
          >
            {showAll ? "Show Less" : `View All (${filtered.length} Images)`}
          </Button>
        </div>
      )}

      {/* Pure Image Lightbox Dialog */}
      <Dialog open={!!selectedImage} onOpenChange={(open) => !open && setSelectedImage(null)}>
        <DialogContent
          onKeyDown={handleKeyDown}
          className="max-w-5xl w-[96vw] sm:w-full border-forest-foreground/20 bg-black/95 p-0 text-white overflow-hidden shadow-2xl"
        >
          <DialogTitle className="sr-only">
            Project Image
          </DialogTitle>
          {selectedImage && (
            <div className="relative flex flex-col items-center justify-center p-2 sm:p-4 min-h-[40vh] sm:min-h-[50vh]">
              {/* Close Button */}
              <button
                onClick={() => setSelectedImage(null)}
                aria-label="Close"
                className="absolute right-2 top-2 sm:right-4 sm:top-4 z-30 grid size-8 sm:size-10 place-items-center rounded-full bg-white/15 text-white backdrop-blur-md transition-colors hover:bg-white/30"
              >
                <X className="size-4 sm:size-5" />
              </button>

              {/* Navigation Arrows */}
              <button
                onClick={handlePrev}
                aria-label="Previous"
                className="absolute left-2 sm:left-3 top-1/2 -translate-y-1/2 z-30 grid size-9 sm:size-11 place-items-center rounded-full bg-white/15 text-white backdrop-blur-md transition-all hover:scale-110 hover:bg-white/30"
              >
                <ChevronLeft className="size-5 sm:size-6" />
              </button>
              <button
                onClick={handleNext}
                aria-label="Next"
                className="absolute right-2 sm:right-3 top-1/2 -translate-y-1/2 z-30 grid size-9 sm:size-11 place-items-center rounded-full bg-white/15 text-white backdrop-blur-md transition-all hover:scale-110 hover:bg-white/30"
              >
                <ChevronRight className="size-5 sm:size-6" />
              </button>

              {/* Big Pure Image */}
              <div className="flex max-h-[85vh] w-full items-center justify-center overflow-hidden py-2 sm:py-4">
                <img
                  src={selectedImage.src}
                  alt="Juan’s Lawn & Landscaping project photo"
                  className="max-h-[75vh] sm:max-h-[80vh] w-auto max-w-full rounded-lg object-contain shadow-2xl"
                />
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}

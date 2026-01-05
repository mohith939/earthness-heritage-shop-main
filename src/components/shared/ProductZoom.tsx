import { useState } from "react";
import { ZoomIn } from "lucide-react";
import { cn } from "@/lib/utils";

interface ProductZoomProps {
  image: string;
  alt: string;
  className?: string;
}

export const ProductZoom = ({ image, alt, className }: ProductZoomProps) => {
  const [isZoomed, setIsZoomed] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    setMousePosition({ x, y });
  };

  return (
    <>
      <div
        className={cn("relative cursor-zoom-in group", className)}
        onMouseEnter={() => setIsZoomed(true)}
        onMouseLeave={() => setIsZoomed(false)}
        onMouseMove={handleMouseMove}
      >
        <img
          src={image}
          alt={alt}
          className="w-full h-full object-cover transition-transform duration-200 group-hover:scale-105"
        />

        {/* Zoom Icon */}
        <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
          <div className="bg-white/80 backdrop-blur-sm rounded-full p-2">
            <ZoomIn className="h-4 w-4 text-foreground" />
          </div>
        </div>

        {/* Zoom Lens Effect */}
        {isZoomed && (
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              backgroundImage: `url(${image})`,
              backgroundSize: '200%',
              backgroundPosition: `${mousePosition.x}% ${mousePosition.y}%`,
              backgroundRepeat: 'no-repeat',
            }}
          />
        )}
      </div>

      {/* Full Screen Zoom Modal */}
      {isZoomed && (
        <div className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4">
          <div className="relative max-w-4xl max-h-full">
            <img
              src={image}
              alt={alt}
              className="w-full h-full object-contain"
            />
            <button
              onClick={() => setIsZoomed(false)}
              className="absolute top-4 right-4 bg-white/80 backdrop-blur-sm rounded-full p-2 hover:bg-white transition-colors"
            >
              <ZoomIn className="h-4 w-4 text-foreground rotate-45" />
            </button>
          </div>
        </div>
      )}
    </>
  );
};

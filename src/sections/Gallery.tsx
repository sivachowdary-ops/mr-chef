import { useState, useRef, useEffect } from "react";
import { Camera, Play, X, Video, ChevronLeft, ChevronRight } from "lucide-react";
import { galleryItems } from "@/data/siteConfig";
import type { GalleryItem } from "@/data/siteConfig";

function VideoReelTile({
  item,
  onClick,
}: {
  item: GalleryItem;
  onClick: () => void;
}) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const handleMouseEnter = () => {
    if (videoRef.current) {
      videoRef.current.play().then(() => setIsPlaying(true)).catch(() => {});
    }
  };

  const handleMouseLeave = () => {
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
      setIsPlaying(false);
    }
  };

  // IntersectionObserver for mobile scroll-into-view autoplay
  useEffect(() => {
    const videoEl = videoRef.current;
    if (!videoEl) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          // Only autoplay on smaller viewports where hover doesn't exist
          if (window.innerWidth < 768) {
            if (entry.isIntersecting) {
              videoEl.play().then(() => setIsPlaying(true)).catch(() => {});
            } else {
              videoEl.pause();
              videoEl.currentTime = 0;
              setIsPlaying(false);
            }
          }
        });
      },
      { threshold: 0.6 }
    );

    observer.observe(videoEl);
    return () => observer.disconnect();
  }, []);

  return (
    <article
      onClick={onClick}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="group relative aspect-[9/16] w-[260px] md:w-[280px] shrink-0 rounded-3xl overflow-hidden border-2 border-brand-warm-gray/60 bg-brand-charcoal cursor-pointer transition-all duration-300 hover:border-brand-amber/80 hover:-translate-y-1 shadow-lg hover:shadow-xl snap-start"
    >
      {/* Fallback Poster Background / Visual Pattern */}
      <div className="absolute inset-0 z-0 flex flex-col items-center justify-center bg-gradient-to-t from-brand-charcoal via-brand-charcoal/80 to-brand-charcoal/40 p-4 text-center">
        <Play className="h-10 w-10 text-white/50 mb-3 transition-transform duration-300 group-hover:scale-115 fill-white/10" />
        <span className="text-white font-heading font-bold text-sm tracking-wide">
          {item.title}
        </span>
        {item.isLaunchVideo && (
          <span className="text-[10px] text-brand-amber font-semibold uppercase tracking-wider mt-1">
            Launch — {item.locationName}
          </span>
        )}
      </div>

      {/* Actual Video Tag (Lazy loaded, preload="none" to save bandwidth) */}
      <video
        ref={videoRef}
        src={item.src}
        loop
        muted
        playsInline
        preload="none"
        className={`absolute inset-0 z-10 h-full w-full object-cover transition-opacity duration-300 ${
          isPlaying ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      />

      {/* Video indicators and badges */}
      <div className="absolute top-4 left-4 z-20 flex items-center gap-1.5 rounded-lg bg-brand-amber px-2 py-1 text-[9px] font-bold uppercase tracking-wider text-white shadow-sm">
        <Video className="h-3 w-3" />
        Launch Clip
      </div>

      {/* Title overlay at the bottom */}
      <div className="absolute inset-x-0 bottom-0 z-20 bg-gradient-to-t from-black/90 to-transparent p-4 pt-10">
        <span className="text-[10px] text-brand-amber font-bold uppercase tracking-wider">
          {item.locationName ? `Location: ${item.locationName}` : "Franchise Video"}
        </span>
        <h4 className="font-heading font-bold text-white text-sm sm:text-base leading-tight">
          {item.title}
        </h4>
      </div>
    </article>
  );
}

function ImageReelTile({
  item,
  onClick,
}: {
  item: GalleryItem;
  onClick: () => void;
}) {
  return (
    <article
      onClick={onClick}
      className="group relative aspect-[9/16] w-[260px] md:w-[280px] shrink-0 rounded-3xl overflow-hidden border-2 border-brand-warm-gray/60 bg-brand-warm-gray/30 flex flex-col items-center justify-center gap-2 cursor-pointer transition-all duration-300 hover:border-brand-amber/80 hover:-translate-y-1 shadow-lg hover:shadow-xl snap-start"
    >
      {/* Background Graphic / Layout Placeholder (WebP fallback) */}
      <div className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat transition-transform duration-500 group-hover:scale-105"
           style={{ backgroundImage: `url('${item.src}')` }}
      />

      {/* Overlay Backdrop to ensure text readability */}
      <div className="absolute inset-0 z-10 bg-gradient-to-t from-black/80 via-black/30 to-transparent transition-opacity duration-300 group-hover:opacity-90" />

      {/* Camera Icon placeholder inside background */}
      <div className="relative z-20 flex flex-col items-center justify-center p-6 text-center text-white h-full justify-between py-12">
        <div className="flex h-11 w-11 items-center justify-center rounded-full bg-white/10 backdrop-blur-xs text-white">
          <Camera className="h-5 w-5" />
        </div>

        <div>
          <span className="text-[9px] text-brand-gold font-bold uppercase tracking-wider">
            Store Photo
          </span>
          <h4 className="font-heading font-bold text-white text-sm sm:text-base leading-tight mt-1">
            {item.title}
          </h4>
        </div>
      </div>
    </article>
  );
}

export default function Gallery() {
  const [activeMedia, setActiveMedia] = useState<GalleryItem | null>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -300, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 300, behavior: "smooth" });
    }
  };

  return (
    <section id="gallery" className="section-padding bg-brand-bg relative overflow-hidden">
      {/* Gradient Blob for background depth */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-32 -right-32 h-[400px] w-[400px] rounded-full bg-gradient-to-br from-brand-amber/10 via-transparent to-transparent blur-3xl"
      />

      <div className="section-container">
        {/* Header */}
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="section-heading font-heading">
            Our <span className="text-gradient">Store Reel</span>
          </h2>
          <p className="section-subheading mx-auto mt-4">
            Take a look at active Mr Chef franchise outlets, fabrication workshops, and success clips.
          </p>
        </div>

        {/* Navigation arrows for desktop row scroll */}
        <div className="hidden md:flex justify-end gap-2 mb-4 pr-4">
          <button
            onClick={scrollLeft}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-brand-warm-gray bg-white text-brand-charcoal hover:bg-brand-charcoal hover:text-white transition-all shadow-xs cursor-pointer"
            aria-label="Scroll left"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button
            onClick={scrollRight}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-brand-warm-gray bg-white text-brand-charcoal hover:bg-brand-charcoal hover:text-white transition-all shadow-xs cursor-pointer"
            aria-label="Scroll right"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>

        {/* Reels Horizontal Scroll Strip Row (No wrapping grid) */}
        <div
          ref={scrollRef}
          className="flex overflow-x-auto gap-6 snap-x snap-mandatory px-2 pb-8 scrollbar-thin scrollbar-track-brand-bg scrollbar-thumb-brand-muted/40"
        >
          {galleryItems.map((item) =>
            item.type === "video" ? (
              <VideoReelTile
                key={item.id}
                item={item}
                onClick={() => setActiveMedia(item)}
              />
            ) : (
              <ImageReelTile
                key={item.id}
                item={item}
                onClick={() => setActiveMedia(item)}
              />
            )
          )}
        </div>

        {/* Note */}
        <p className="mt-8 text-center text-sm text-brand-muted leading-relaxed max-w-xl mx-auto">
          Hover to preview launch clips (desktop) or swipe horizontally to view previous setups. Click any tile to expand.
        </p>
      </div>

      {/* ── Lightbox / Modal ───────────────────────────────── */}
      {activeMedia && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-brand-charcoal/95 p-4 backdrop-blur-md transition-opacity duration-300"
          onClick={() => setActiveMedia(null)}
        >
          {/* Close button */}
          <button
            onClick={() => setActiveMedia(null)}
            className="absolute top-4 right-4 flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20 transition-all focus:outline-none"
            aria-label="Close lightbox"
          >
            <X className="h-5 w-5" />
          </button>

          {/* Modal Container */}
          <div
            className="relative max-w-xl w-full max-h-[85vh] bg-white rounded-3xl overflow-hidden shadow-2xl transition-all duration-300"
            onClick={(e) => e.stopPropagation()}
          >
            {activeMedia.type === "video" ? (
              <div className="aspect-[9/16] w-full bg-black">
                {/* Lazy-loaded video modal, auto-playing with audio on expanded lightbox */}
                <video
                  src={activeMedia.src}
                  controls
                  autoPlay
                  playsInline
                  className="w-full h-full object-cover border-none"
                />
              </div>
            ) : (
              <div className="flex flex-col items-center justify-center aspect-[9/16] w-full bg-brand-bg text-center p-8 bg-cover bg-center"
                   style={{ backgroundImage: `url('${activeMedia.src}')` }}>
                {/* Fallback text if image asset doesn't exist yet */}
                <div className="bg-white/95 backdrop-blur-md p-6 rounded-2xl border border-brand-warm-gray/60 max-w-xs shadow-lg">
                  <Camera className="h-10 w-10 text-brand-amber/80 mb-3 mx-auto" />
                  <h3 className="font-heading text-base font-bold text-brand-charcoal mb-1">
                    {activeMedia.title}
                  </h3>
                  <p className="text-xs text-brand-muted leading-relaxed">
                    Real photo placeholder: {activeMedia.alt}. Full resolution WebP assets will load in this background container.
                  </p>
                </div>
              </div>
            )}

            {/* Bottom Details Bar */}
            <div className="bg-brand-cream/95 px-6 py-4 flex items-center justify-between border-t border-brand-warm-gray/60">
              <div>
                <span className="text-[9px] font-bold uppercase tracking-wider text-brand-amber">
                  {activeMedia.type === "video" ? `Launch Clip — ${activeMedia.locationName}` : "Store Photo"}
                </span>
                <p className="font-heading font-bold text-brand-charcoal text-sm leading-tight mt-0.5">
                  {activeMedia.title}
                </p>
              </div>
              <span className="text-xs text-brand-muted select-none font-medium">
                Mr Chef Portfolio
              </span>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

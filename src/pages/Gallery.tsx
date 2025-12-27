import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import Layout from '@/components/layout/Layout';

import heroWedding from '@/assets/hero-wedding.jpg';
import prewedding1 from '@/assets/prewedding-1.jpg';
import prewedding2 from '@/assets/prewedding-2.jpg';
import maternity1 from '@/assets/maternity-1.jpg';
import weddingCeremony from '@/assets/wedding-ceremony.jpg';
import bridalPortrait from '@/assets/bridal-portrait.jpg';
import events1 from '@/assets/maternity-1.jpg';
import events2 from '@/assets/maternity-1.jpg';
import babyShoot1 from '@/assets/maternity-1.jpg';
import babyShoot2 from '@/assets/maternity-1.jpg';
import commercial1 from '@/assets/maternity-1.jpg';
import commercial2 from '@/assets/maternity-1.jpg';

type Category = 'all' | 'wedding' | 'prewedding' | 'maternity' | 'events' | 'baby' | 'commercial';

interface GalleryImage {
  id: number;
  src: string;
  category: Exclude<Category, 'all'>;
  title: string;
  aspectRatio: 'portrait' | 'landscape' | 'square';
}

const galleryImages: GalleryImage[] = [
  // Wedding (Existing)
  { id: 1, src: heroWedding, category: 'wedding', title: 'Royal Wedding Ceremony', aspectRatio: 'landscape' },
  { id: 4, src: weddingCeremony, category: 'wedding', title: 'Sacred Vows', aspectRatio: 'portrait' },
  { id: 6, src: bridalPortrait, category: 'wedding', title: 'Bridal Elegance', aspectRatio: 'portrait' },

  // Pre-Wedding (Existing)
  { id: 2, src: prewedding1, category: 'prewedding', title: 'Garden Romance', aspectRatio: 'portrait' },
  { id: 5, src: prewedding2, category: 'prewedding', title: 'Palace Dreams', aspectRatio: 'landscape' },

  // Maternity (Existing)
  { id: 3, src: maternity1, category: 'maternity', title: 'Expecting Joy', aspectRatio: 'portrait' },

  // EVENTS - NEW
  { id: 7, src: events1, category: 'events', title: 'Corporate Gala', aspectRatio: 'landscape' },
  { id: 8, src: events2, category: 'events', title: 'Birthday Celebration', aspectRatio: 'portrait' },

  // BABY SHOOTS - NEW
  { id: 9, src: babyShoot1, category: 'baby', title: 'Newborn Bliss', aspectRatio: 'portrait' },
  { id: 10, src: babyShoot2, category: 'baby', title: 'First Month Magic', aspectRatio: 'square' },

  // COMMERCIAL - NEW
  { id: 11, src: commercial1, category: 'commercial', title: 'Product Launch', aspectRatio: 'landscape' },
  { id: 12, src: commercial2, category: 'commercial', title: 'Brand Campaign', aspectRatio: 'portrait' },
];

const categories: { value: Category; label: string }[] = [
  { value: 'all', label: 'All' },
  { value: 'wedding', label: 'Wedding' },
  { value: 'prewedding', label: 'Pre-Wedding' },
  { value: 'maternity', label: 'Maternity' },
  { value: 'events', label: 'Events' },
  { value: 'baby', label: 'Baby Shoots' },
  { value: 'commercial', label: 'Commercial' },
];

const Gallery = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [activeCategory, setActiveCategory] = useState<Category>('all');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  useEffect(() => {
    const category = searchParams.get('category') as Category | null;
    if (category && categories.some((c) => c.value === category)) {
      setActiveCategory(category);
    }
  }, [searchParams]);

  const filteredImages =
    activeCategory === 'all'
      ? galleryImages
      : galleryImages.filter((img) => img.category === activeCategory);

  const handleCategoryChange = (category: Category) => {
    setActiveCategory(category);
    if (category === 'all') {
      searchParams.delete('category');
    } else {
      searchParams.set('category', category);
    }
    setSearchParams(searchParams);
  };

  const openLightbox = (index: number) => {
    setLightboxIndex(index);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setLightboxIndex(null);
    document.body.style.overflow = 'auto';
  };

  const nextImage = () => {
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex + 1) % filteredImages.length);
    }
  };

  const prevImage = () => {
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex - 1 + filteredImages.length) % filteredImages.length);
    }
  };

  return (
    <Layout>
      <section className="pt-28 pb-20 min-h-screen mandala-pattern">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              <span className="gradient-text">Portfolio Gallery</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Explore my complete collection capturing life's most cherished moments 
              across weddings, events, baby shoots, and commercial projects.
            </p>
          </div>

          {/* Category Filters - SINGLE HORIZONTAL LINE */}
          <div className="flex flex-nowrap justify-center gap-2 mb-16 max-w-6xl mx-auto px-4 overflow-x-auto pb-4 scrollbar-hide">
            {categories.map((cat) => (
              <button
                key={cat.value}
                onClick={() => handleCategoryChange(cat.value)}
                className={`flex-shrink-0 px-6 py-3 rounded-full font-semibold text-sm md:text-base whitespace-nowrap transition-all duration-300 shadow-md hover:shadow-lg ${
                  activeCategory === cat.value
                    ? 'bg-gradient-primary text-primary-foreground shadow-xl scale-105 ring-2 ring-rose-200'
                    : 'bg-white/70 backdrop-blur-sm text-foreground hover:bg-rose/20 hover:scale-105 hover:text-rose hover:shadow-xl'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Masonry Grid */}
          <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-6 space-y-6">
            {filteredImages.map((image, index) => (
              <div
                key={image.id}
                className="break-inside-avoid group cursor-pointer"
                onClick={() => openLightbox(index)}
              >
                <div className="relative rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 bg-white/50 backdrop-blur-sm">
                  <img
                    src={image.src}
                    alt={image.title}
                    className="w-full object-cover transition-transform duration-700 group-hover:scale-110"
                    style={{
                      aspectRatio:
                        image.aspectRatio === 'portrait'
                          ? '3/4'
                          : image.aspectRatio === 'landscape'
                          ? '4/3'
                          : '1/1',
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500" />
                  <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent translate-y-full group-hover:translate-y-0 transition-all duration-500">
                    <h3 className="text-xl md:text-2xl font-bold text-white drop-shadow-lg mb-1">
                      {image.title}
                    </h3>
                    <span className="text-white/90 text-sm md:text-base font-medium capitalize drop-shadow-md">
                      {image.category === 'prewedding' ? 'Pre-Wedding' : 
                       image.category === 'baby' ? 'Baby Shoots' : 
                       image.category.charAt(0).toUpperCase() + image.category.slice(1)}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* No Images Message */}
          {filteredImages.length === 0 && (
            <div className="text-center py-20">
              <h3 className="text-2xl font-semibold text-muted-foreground mb-4">
                No photos found
              </h3>
              <p className="text-muted-foreground">
                Try selecting a different category above.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Lightbox */}
      {lightboxIndex !== null && (
        <div
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-2xl flex items-center justify-center p-4"
          onClick={closeLightbox}
        >
          <button
            onClick={closeLightbox}
            className="absolute top-6 right-6 p-3 rounded-2xl bg-white/20 hover:bg-white/40 backdrop-blur-lg transition-all duration-300"
            aria-label="Close lightbox"
          >
            <X className="w-8 h-8 text-white" />
          </button>

          <button
            onClick={(e) => {
              e.stopPropagation();
              prevImage();
            }}
            className="absolute left-6 p-4 rounded-2xl bg-white/20 hover:bg-white/40 backdrop-blur-lg transition-all duration-300 w-16 h-16 flex items-center justify-center"
            aria-label="Previous image"
          >
            <ChevronLeft className="w-10 h-10 text-white" />
          </button>

          <div
            className="max-w-6xl max-h-[90vh] w-full flex flex-col items-center"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={filteredImages[lightboxIndex].src}
              alt={filteredImages[lightboxIndex].title}
              className="max-w-full max-h-[80vh] object-contain rounded-2xl shadow-2xl"
            />
            <div className="text-center mt-8 w-full">
              <h3 className="text-2xl md:text-3xl font-bold text-white drop-shadow-2xl mb-2">
                {filteredImages[lightboxIndex].title}
              </h3>
              <span className="text-xl text-white/80 capitalize">
                {filteredImages[lightboxIndex].category === 'prewedding' ? 'Pre-Wedding' : 
                 filteredImages[lightboxIndex].category === 'baby' ? 'Baby Shoots' : 
                 filteredImages[lightboxIndex].category.charAt(0).toUpperCase() + filteredImages[lightboxIndex].category.slice(1)}
              </span>
            </div>
          </div>

          <button
            onClick={(e) => {
              e.stopPropagation();
              nextImage();
            }}
            className="absolute right-6 p-4 rounded-2xl bg-white/20 hover:bg-white/40 backdrop-blur-lg transition-all duration-300 w-16 h-16 flex items-center justify-center"
            aria-label="Next image"
          >
            <ChevronRight className="w-10 h-10 text-white" />
          </button>

          {/* Dots Navigation */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3">
            {filteredImages.map((_, index) => (
              <button
                key={index}
                onClick={(e) => {
                  e.stopPropagation();
                  setLightboxIndex(index);
                }}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === lightboxIndex
                    ? 'bg-white w-8 shadow-lg'
                    : 'bg-white/50 hover:bg-white/75 hover:w-4'
                }`}
                aria-label={`Go to image ${index + 1}`}
              />
            ))}
          </div>
        </div>
      )}
    </Layout>
  );
};

export default Gallery;

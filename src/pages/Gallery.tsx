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

type Category = 'all' | 'wedding' | 'prewedding' | 'maternity';

interface GalleryImage {
  id: number;
  src: string;
  category: Exclude<Category, 'all'>;
  title: string;
  aspectRatio: 'portrait' | 'landscape' | 'square';
}

const galleryImages: GalleryImage[] = [
  { id: 1, src: heroWedding, category: 'wedding', title: 'Royal Wedding Ceremony', aspectRatio: 'landscape' },
  { id: 2, src: prewedding1, category: 'prewedding', title: 'Garden Romance', aspectRatio: 'portrait' },
  { id: 3, src: maternity1, category: 'maternity', title: 'Expecting Joy', aspectRatio: 'portrait' },
  { id: 4, src: weddingCeremony, category: 'wedding', title: 'Sacred Vows', aspectRatio: 'portrait' },
  { id: 5, src: prewedding2, category: 'prewedding', title: 'Palace Dreams', aspectRatio: 'landscape' },
  { id: 6, src: bridalPortrait, category: 'wedding', title: 'Bridal Elegance', aspectRatio: 'portrait' },
];

const categories: { value: Category; label: string }[] = [
  { value: 'all', label: 'All' },
  { value: 'wedding', label: 'Wedding' },
  { value: 'prewedding', label: 'Pre-Wedding' },
  { value: 'maternity', label: 'Maternity' },
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
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="gradient-text">Portfolio Gallery</span>
            </h1>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Browse through my collection of beautiful moments captured across weddings,
              pre-wedding shoots, and maternity sessions.
            </p>
          </div>

          {/* Category Filters */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((cat) => (
              <button
                key={cat.value}
                onClick={() => handleCategoryChange(cat.value)}
                className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                  activeCategory === cat.value
                    ? 'bg-gradient-primary text-primary-foreground shadow-lg'
                    : 'bg-secondary text-foreground hover:bg-rose/20'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Masonry Grid */}
          <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
            {filteredImages.map((image, index) => (
              <div
                key={image.id}
                className="break-inside-avoid group cursor-pointer"
                onClick={() => openLightbox(index)}
              >
                <div className="relative rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500">
                  <img
                    src={image.src}
                    alt={image.title}
                    className="w-full object-cover transition-transform duration-500 group-hover:scale-110"
                    style={{
                      aspectRatio:
                        image.aspectRatio === 'portrait'
                          ? '3/4'
                          : image.aspectRatio === 'landscape'
                          ? '4/3'
                          : '1/1',
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-foreground/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <h3 className="text-lg font-semibold text-primary-foreground">
                      {image.title}
                    </h3>
                    <span className="text-sm text-primary-foreground/80 capitalize">
                      {image.category.replace('prewedding', 'Pre-Wedding')}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {lightboxIndex !== null && (
        <div
          className="fixed inset-0 z-50 bg-foreground/95 backdrop-blur-lg flex items-center justify-center"
          onClick={closeLightbox}
        >
          <button
            onClick={closeLightbox}
            className="absolute top-4 right-4 p-2 rounded-full bg-background/20 hover:bg-background/40 transition-colors"
            aria-label="Close lightbox"
          >
            <X className="w-6 h-6 text-primary-foreground" />
          </button>

          <button
            onClick={(e) => {
              e.stopPropagation();
              prevImage();
            }}
            className="absolute left-4 p-2 rounded-full bg-background/20 hover:bg-background/40 transition-colors"
            aria-label="Previous image"
          >
            <ChevronLeft className="w-8 h-8 text-primary-foreground" />
          </button>

          <div
            className="max-w-5xl max-h-[85vh] px-4"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={filteredImages[lightboxIndex].src}
              alt={filteredImages[lightboxIndex].title}
              className="max-w-full max-h-[85vh] object-contain rounded-lg shadow-2xl animate-zoom-in"
            />
            <div className="text-center mt-4">
              <h3 className="text-xl font-semibold text-primary-foreground">
                {filteredImages[lightboxIndex].title}
              </h3>
            </div>
          </div>

          <button
            onClick={(e) => {
              e.stopPropagation();
              nextImage();
            }}
            className="absolute right-4 p-2 rounded-full bg-background/20 hover:bg-background/40 transition-colors"
            aria-label="Next image"
          >
            <ChevronRight className="w-8 h-8 text-primary-foreground" />
          </button>

          {/* Dots */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
            {filteredImages.map((_, index) => (
              <button
                key={index}
                onClick={(e) => {
                  e.stopPropagation();
                  setLightboxIndex(index);
                }}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === lightboxIndex
                    ? 'bg-primary-foreground w-6'
                    : 'bg-primary-foreground/50 hover:bg-primary-foreground/75'
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

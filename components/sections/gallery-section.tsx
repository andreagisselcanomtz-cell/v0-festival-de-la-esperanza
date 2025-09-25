import galleryData from "@/data/gallery-section.json"

export function GallerySection() {
  const { title, titleColor, backgroundColor, description, images } = galleryData
  return (
    <section className="py-16 px-4" style={{ backgroundColor }}>
      <div className="container mx-auto">
        <h2
          className="text-6xl md:text-7xl font-bold text-center mb-12"
          style={{ color: titleColor }}
        >
          {title}
        </h2>
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-12 grid-rows-8 gap-4 h-[600px]">
            {images.map((image, index) => (
              <div key={index} className={`${image.gridClass} overflow-hidden rounded-lg ${image.shadowClass} ${image.transformClass}`}>
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
            ))}
          </div>
        </div>
        <p className="text-center text-gray-600 mt-8">
          {description}
        </p>
      </div>
    </section>
  )
}

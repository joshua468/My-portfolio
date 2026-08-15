"use client"

import Image from "next/image"

const images = Array.from({ length: 62 }, (_, i) => ({
  src: `/${i + 1}.png`,
  alt: `Design ${i + 1}`,
}))

const track = [...images, ...images]

export default function DesignSlideshow() {
  return (
    <div className="design-marquee">
      <div className="design-marquee-track">
        {track.map((img, i) => (
          <div className="design-screen" key={`${img.src}-${i}`}>
            <Image
              src={img.src}
              alt={img.alt}
              fill
              sizes="(max-width: 768px) 60vw, 220px"
              className="design-screen-img"
            />
          </div>
        ))}
      </div>
    </div>
  )
}

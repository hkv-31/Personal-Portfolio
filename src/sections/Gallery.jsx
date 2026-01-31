import React from 'react';
import Polaroid from '../components/Polaroid';
import { galleryImages } from '../data';

const Gallery = () => {
    return (
        <section id="gallery" className="py-20 px-5 flex flex-col items-center">
            <div className="max-w-6xl w-full">
                <h2 className="font-hand text-5xl text-mahogany mb-12 text-center relative inline-block left-1/2 transform -translate-x-1/2">
                    Visual Memories
                    <span className="absolute -z-10 top-1/2 left-0 w-full h-4 bg-yellow-200 opacity-60 rounded-sm transform -rotate-1"></span>
                </h2>

                <div className="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8">
                    {galleryImages.map((img, idx) => (
                        <div key={idx} className="break-inside-avoid flex justify-center">
                            <Polaroid rotate={img.rotate} className="w-full max-w-sm">
                                <img src={img.src} alt={img.caption} className="w-full h-auto object-cover grayscale-[20%] hover:grayscale-0 transition-all duration-500" />
                                <p className="font-hand text-xl text-center mt-3 text-gray-600">{img.caption}</p>
                            </Polaroid>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
export default Gallery;

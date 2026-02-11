import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { heroSlides } from '../../data/restaurantData';
import Button from '../ui/Button';

const Hero = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [isAnimating, setIsAnimating] = useState(false);

    useEffect(() => {
        const timer = setInterval(() => {
            goToNextSlide();
        }, 6000);

        return () => clearInterval(timer);
    }, [currentSlide]);

    const goToNextSlide = () => {
        if (isAnimating) return;
        setIsAnimating(true);
        setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
        setTimeout(() => setIsAnimating(false), 500);
    };

    const goToPrevSlide = () => {
        if (isAnimating) return;
        setIsAnimating(true);
        setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);
        setTimeout(() => setIsAnimating(false), 500);
    };

    const goToSlide = (index: number) => {
        if (isAnimating || index === currentSlide) return;
        setIsAnimating(true);
        setCurrentSlide(index);
        setTimeout(() => setIsAnimating(false), 500);
    };

    return (
        <section className="relative h-screen min-h-[600px] max-h-[900px] overflow-hidden">
            {/* Slides */}
            {heroSlides.map((slide, index) => (
                <div
                    key={slide.id}
                    className={`absolute inset-0 transition-opacity duration-700 ${index === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0'
                        }`}
                >
                    {/* Background Image */}
                    <div
                        className="absolute inset-0 bg-cover bg-center transform scale-105 transition-transform duration-[8000ms]"
                        style={{
                            backgroundImage: `url(${slide.image})`,
                            transform: index === currentSlide ? 'scale(1)' : 'scale(1.05)'
                        }}
                    />

                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent" />

                    {/* Content */}
                    <div className="relative h-full container mx-auto px-4 flex items-center">
                        <div className="max-w-2xl">
                            <h1
                                className={`text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-white mb-4 transition-all duration-700 ${index === currentSlide
                                        ? 'opacity-100 translate-y-0'
                                        : 'opacity-0 translate-y-8'
                                    }`}
                                style={{ transitionDelay: index === currentSlide ? '200ms' : '0ms' }}
                            >
                                {slide.title}
                            </h1>
                            <p
                                className={`text-lg md:text-xl text-white/90 mb-8 transition-all duration-700 ${index === currentSlide
                                        ? 'opacity-100 translate-y-0'
                                        : 'opacity-0 translate-y-8'
                                    }`}
                                style={{ transitionDelay: index === currentSlide ? '400ms' : '0ms' }}
                            >
                                {slide.subtitle}
                            </p>
                            {slide.ctaText && slide.ctaLink && (
                                <div
                                    className={`transition-all duration-700 ${index === currentSlide
                                            ? 'opacity-100 translate-y-0'
                                            : 'opacity-0 translate-y-8'
                                        }`}
                                    style={{ transitionDelay: index === currentSlide ? '600ms' : '0ms' }}
                                >
                                    <Button href={slide.ctaLink} size="lg">
                                        {slide.ctaText}
                                    </Button>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            ))}

            {/* Navigation Arrows */}
            <button
                onClick={goToPrevSlide}
                className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white/30 transition-colors"
                aria-label="Previous slide"
            >
                <ChevronLeft className="w-6 h-6" />
            </button>
            <button
                onClick={goToNextSlide}
                className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white/30 transition-colors"
                aria-label="Next slide"
            >
                <ChevronRight className="w-6 h-6" />
            </button>

            {/* Dots Navigation */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex items-center gap-3">
                {heroSlides.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => goToSlide(index)}
                        className={`w-3 h-3 rounded-full transition-all duration-300 ${index === currentSlide
                                ? 'bg-primary w-8'
                                : 'bg-white/50 hover:bg-white/80'
                            }`}
                        aria-label={`Go to slide ${index + 1}`}
                    />
                ))}
            </div>

            {/* Decorative Pattern */}
            <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent z-10" />
        </section>
    );
};

export default Hero;

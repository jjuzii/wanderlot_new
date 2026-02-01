"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader"; // New Component
import { motion } from "framer-motion";
import Image from "next/image";
import { useState, useEffect, useRef } from "react";

export default function AboutPage() {
  // 活动照片数组
  const activityPhotos = [
    {
      src: "/images/simon1.jpg", 
      alt: "group photo"
    },
    {
      src: "/images/simon3.jpg", 
      alt: "walk in the street"
    },
    {
      src: "/images/simon4.jpg", 
      alt: "portrait"
    },
    {
      src: "/images/simon5.jpg", 
      alt: "overlook Shanghai"
    },
    {
      src: "/images/simon2.jpeg", 
      alt: "alice"
    },
    {
      src: "/images/simon6.jpg", 
      alt: "play the zither"
    }
  ];

  const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [direction, setDirection] = useState<'left' | 'right'>('right');
  const containerRef = useRef<HTMLDivElement>(null);

  // 自动轮播功能
  useEffect(() => {
    if (!isHovered) {
      const interval = setInterval(() => {
        setDirection('right'); // 默认向右切换
        setCurrentPhotoIndex(prevIndex => 
          prevIndex === activityPhotos.length - 1 ? 0 : prevIndex + 1
        );
      }, 2500); // 每2.5秒切换一次

      return () => clearInterval(interval);
    }
  }, [isHovered, activityPhotos.length]);

  // 手动切换功能
  const goToPrevious = () => {
    setDirection('left'); // 向左切换
    setCurrentPhotoIndex(prevIndex => 
      prevIndex === 0 ? activityPhotos.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setDirection('right'); // 向右切换
    setCurrentPhotoIndex(prevIndex => 
      prevIndex === activityPhotos.length - 1 ? 0 : prevIndex + 1
    );
  };

  const goToPhoto = (index: number) => {
    setDirection(index > currentPhotoIndex ? 'right' : 'left'); // 根据索引决定方向
    setCurrentPhotoIndex(index);
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-stone-100 via-amber-50 to-stone-200">
      <Navbar />
      
      <PageHeader title="About Wanderlot" />

      {/* Story Section - Enhanced Design */}
      <section className="py-20 px-4 max-w-7xl mx-auto relative overflow-hidden">
        {/* Decorative background elements */}
        <div className="absolute top-0 left-1/4 w-64 h-64 bg-amber-100/15 rounded-full blur-3xl -z-10"></div>
        <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-amber-200/10 rounded-full blur-3xl -z-10"></div>
        
        <div className="flex flex-col md:flex-row items-center gap-12">
            <motion.div 
                className="md:w-1/2"
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
            >
                <div className="relative h-[500px] w-full rounded-3xl overflow-hidden shadow-xl">
                    <div className="absolute inset-0 bg-gradient-to-br from-amber-100/20 to-transparent z-10 pointer-events-none"></div>
                    <Image 
                        src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?q=80&w=2069&auto=format&fit=crop" 
                        alt="Our Student Team"
                        fill
                        className="object-cover"
                        priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                </div>
            </motion.div>
            
            <motion.div 
                className="md:w-1/2 relative z-10"
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.05 }}
            >
                <div className="relative bg-white/90 backdrop-blur-sm p-8 rounded-2xl shadow-lg border border-stone-200">
                  <h2 className="text-3xl font-bold font-serif mb-6 text-stone-800 relative z-10">Our Story</h2>
                  <p className="text-stone-700 text-lg leading-relaxed mb-6 relative z-10">
                      Wanderlot is a non-profit initiative started by a group of university students in Shanghai. We noticed that many visitors only see the commercial side of our city, missing the rich history and vibrant local life that makes Shanghai truly special.
                  </p>
                  <p className="text-stone-700 text-lg leading-relaxed relative z-10">
                      Driven by our love for this city, we decided to offer <strong className="text-amber-600 font-semibold">free walking tours</strong> to bridge the gap between locals and travelers. We aren't professional guides, but we are professional Shanghai enthusiasts. We want to show you the Shanghai we know and love—authentic, diverse, and full of surprises.
                  </p>
                </div>
            </motion.div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-stone-100 via-white to-stone-100">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold font-serif mb-16 text-center text-stone-800">What Our Visitors Say</h2>
          
          {/* Customer Reviews */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-16">
            {/* Review 1 */}
            <motion.div 
              className="bg-white p-8 rounded-2xl shadow-lg border border-stone-200 relative overflow-hidden"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6 }}
            >
              {/* Decorative element */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-amber-100/15 rounded-full -translate-y-16 translate-x-16"></div>
              
              <div className="relative z-10">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-stone-700 text-lg italic mb-6">
                  "Thank you very much to all the Great Guides for your support, time, smiles, emotions, knowledge... This is a precious gift of goodness."
                </p>
                <div className="flex items-center">
                  <div className="relative w-12 h-12 mr-4">
                    <Image 
                      src="/images/Maria.jpg" 
                      alt="Maria"
                      fill
                      className="rounded-full object-cover"
                    />
                  </div>
                  <div>
                    <p className="font-semibold text-stone-900">Maria</p>
                    <p className="text-stone-600 text-sm">From Poland, Sept. 2025</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Review 2 */}
            <motion.div 
              className="bg-white p-8 rounded-2xl shadow-lg border border-stone-200 relative overflow-hidden"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              {/* Decorative element */}
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-amber-100/15 rounded-full translate-y-16 -translate-x-16"></div>
              
              <div className="relative z-10">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-stone-700 text-lg italic mb-6">
                  "As someone who's all about authentic local culture, I can't recommend Wanderlot enough! Massive thanks to the whole team—special shout-outs to Alice for making the trip so memorable. Happy travels, everyone!"
                </p>
                <div className="flex items-center">
                  <div className="relative w-12 h-12 mr-4">
                    <Image 
                      src="/images/Jerzy.jpg" 
                      alt="Jerzy"
                      fill
                      className="rounded-full object-cover"
                    />
                  </div>
                  <div>
                    <p className="font-semibold text-stone-900">Jerzy</p>
                    <p className="text-stone-600 text-sm">From Canada, Dec. 2025</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Thank You Note Section with Activity Photos Carousel */}
          <div className="mt-20">
            <h3 className="text-4xl font-bold font-serif mb-12 text-center text-stone-800 relative inline-block mx-auto">
              A Special Thank You
              <span className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 w-1/3 h-1 bg-gradient-to-r from-transparent via-amber-500 to-transparent"></span>
            </h3>
            
            <div className="flex flex-col lg:flex-row gap-8 items-center justify-center">
              {/* Thank You Note */}
              <motion.div 
                className="rounded-2xl overflow-hidden shadow-xl border border-stone-200 bg-white p-4 max-w-[550px]"
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.7 }}
              >
                <div className="relative mx-auto" style={{ width: '550px', maxWidth: '95vw' }}>
                  <Image 
                    src="/images/thank you letter.png" 
                    alt="Customer Thank You Letter"
                    width={550} 
                    height={650} 
                    className="object-contain mx-auto"
                    sizes="(max-width: 550px) 95vw, 550px"
                  />
                </div>
              </motion.div>
              
              {/* Activity Photos Carousel */}
              <div 
                ref={containerRef}
                className="relative max-w-[550px] w-full"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
              >
                <div className="relative rounded-2xl overflow-hidden shadow-xl border border-stone-200 aspect-square">
                  {/* Photo container with slide animation */}
                  <div className="relative w-full h-full overflow-hidden">
                    <AnimatePresenceCustom>
                      <motion.div
                        key={currentPhotoIndex}
                        custom={direction}
                        variants={slideVariants}
                        initial="enter"
                        animate="center"
                        exit="exit"
                        transition={{
                          duration: 0.5,
                          ease: "easeInOut"
                        }}
                        className="absolute inset-0"
                      >
                        <Image 
                          src={activityPhotos[currentPhotoIndex].src}
                          alt={activityPhotos[currentPhotoIndex].alt}
                          fill
                          className="object-cover"
                          sizes="(max-width: 550px) 95vw, 550px"
                          onError={(e) => {
                            // 如果图片加载失败，显示占位图片
                            const target = e.target as HTMLImageElement;
                            target.src = "https://placehold.co/550x550/e2e8f0/64748b?text=Image+Not+Found";
                            target.alt = "Image not found";
                          }}
                        />
                      </motion.div>
                    </AnimatePresenceCustom>
                  </div>
                  
                  {/* Navigation arrows */}
                  <button 
                    onClick={goToPrevious}
                    className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-stone-700 rounded-full p-2 shadow-lg transition-all duration-300 z-20"
                    aria-label="Previous photo"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                  </button>
                  
                  <button 
                    onClick={goToNext}
                    className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-stone-700 rounded-full p-2 shadow-lg transition-all duration-300 z-20"
                    aria-label="Next photo"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                  
                  {/* Indicators */}
                  <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2 z-20">
                    {activityPhotos.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => goToPhoto(index)}
                        className={`w-3 h-3 rounded-full ${
                          currentPhotoIndex === index ? 'bg-amber-500' : 'bg-white/50'
                        }`}
                        aria-label={`Go to photo ${index + 1}`}
                      />
                    ))}
                  </div>
                  
                  {/* Photo counter */}
                  <div className="absolute top-4 right-4 bg-black/50 text-white px-3 py-1 rounded-full text-sm z-20">
                    {currentPhotoIndex + 1} / {activityPhotos.length}
                  </div>
                </div>
              </div>
            </div>
            
            <p className="mt-8 text-stone-600 italic text-lg text-center">A heartfelt note from one of our grateful visitors</p>
          </div>
        </div>
      </section>

      {/* Team Section 
      <section className="py-20 px-4 bg-gradient-to-b from-stone-100 to-stone-200">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl font-bold font-serif mb-16 text-stone-800 relative inline-block mx-auto">
            Meet The Students
            <span className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 w-1/3 h-1 bg-gradient-to-r from-transparent via-amber-500 to-transparent"></span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {[
              { 
                name: "Chen Wei", 
                role: "History Major, Fudan Univ.", 
                img: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=1887&auto=format&fit=crop",
                bio: "Specializes in Shanghai's historical sites and cultural heritage."
              },
              { 
                name: "Alice Zhang", 
                role: "English Lit., SJTU", 
                img: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1888&auto=format&fit=crop",
                bio: "Passionate about sharing local stories and literature connections."
              },
              { 
                name: "Mike Liu", 
                role: "Urban Planning, Tongji Univ.", 
                img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1887&auto=format&fit=crop",
                bio: "Expert in Shanghai's architectural evolution and city development."
              }
            ].map((member, i) => (
              <motion.div 
                key={i} 
                className="bg-white/90 backdrop-blur-sm p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 relative overflow-hidden border border-stone-200"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0 }}
                transition={{ duration: 0.5, delay: i * 0.2 }}
              >
                //Decorative element 
                <div className="absolute -top-6 -right-6 w-32 h-32 bg-amber-100/15 rounded-full"></div>
                
                <div className="relative z-10">
                  <div className="relative w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden border-4 border-stone-100 shadow-md">
                    <Image 
                      src={member.img} 
                      alt={member.name} 
                      fill 
                      className="object-cover" 
                      priority={i===0} 
                    />
                  </div>
                  <h3 className="text-2xl font-bold text-stone-900 mb-2">{member.name}</h3>
                  <p className="text-amber-600 font-medium mb-3">{member.role}</p>
                  <p className="text-stone-600">{member.bio}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      */}

      <Footer />
    </main>
  );
}

// 自定义动画组件
function AnimatePresenceCustom({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}

const slideVariants = {
  enter: (direction: 'left' | 'right') => ({
    x: direction === 'right' ? 100 : -100,
    opacity: 0,
    scale: 0.95,
  }),
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1,
    scale: 1,
  },
  exit: (direction: 'left' | 'right') => ({
    zIndex: 0,
    x: direction === 'right' ? -100 : 100,
    opacity: 0,
    scale: 0.95,
  }),
};


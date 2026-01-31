"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader"; // New Component
import { motion } from "framer-motion";
import Image from "next/image";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-amber-50 to-white">
      <Navbar />
      
      <PageHeader title="About Wanderlot" />

      {/* Story Section - Enhanced Design */}
      <section className="py-20 px-4 max-w-7xl mx-auto relative overflow-hidden">
        {/* Decorative background elements */}
        <div className="absolute top-0 left-1/4 w-64 h-64 bg-amber-100 rounded-full opacity-20 blur-3xl -z-10"></div>
        <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-amber-200 rounded-full opacity-15 blur-3xl -z-10"></div>
        
        <div className="flex flex-col md:flex-row items-center gap-12">
            <motion.div 
                className="md:w-1/2"
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
            >
                <div className="relative h-[500px] w-full rounded-2xl overflow-hidden shadow-2xl">
                    <div className="absolute inset-0 bg-gradient-to-br from-amber-100/30 to-transparent z-10 pointer-events-none"></div>
                    <Image 
                        src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?q=80&w=2069&auto=format&fit=crop" 
                        alt="Our Student Team"
                        fill
                        className="object-cover"
                        priority
                    />
                </div>
            </motion.div>
            
            <motion.div 
                className="md:w-1/2 relative z-10"
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.05 }}
            >
                <div className="relative">
                  <div className="absolute -top-6 -left-6 w-24 h-24 bg-amber-100 rounded-full opacity-30 -z-10"></div>
                  <div className="absolute -bottom-6 -right-6 w-20 h-20 bg-amber-200 rounded-full opacity-20 -z-10"></div>
                  
                  <h2 className="text-3xl font-bold font-serif mb-6 text-gray-900 relative z-10">Our Story</h2>
                  <p className="text-gray-600 text-lg leading-relaxed mb-6 relative z-10">
                      Wanderlot is a non-profit initiative started by a group of university students in Shanghai. We noticed that many visitors only see the commercial side of our city, missing the rich history and vibrant local life that makes Shanghai truly special.
                  </p>
                  <p className="text-gray-600 text-lg leading-relaxed relative z-10">
                      Driven by our love for this city, we decided to offer <strong className="text-amber-600">free walking tours</strong> to bridge the gap between locals and travelers. We aren't professional guides, but we are professional Shanghai enthusiasts. We want to show you the Shanghai we know and love—authentic, diverse, and full of surprises.
                  </p>
                </div>
            </motion.div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-amber-50 via-white to-amber-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold font-serif mb-16 text-center text-gray-900">What Our Visitors Say</h2>
          
          {/* Customer Reviews */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-16">
            {/* Review 1 */}
            <motion.div 
              className="bg-white p-8 rounded-2xl shadow-lg border border-amber-100 relative overflow-hidden"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6 }}
            >
              {/* Decorative element */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-amber-100 rounded-full -translate-y-16 translate-x-16 opacity-30"></div>
              
              <div className="relative z-10">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-gray-700 text-lg italic mb-6">
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
                    <p className="font-semibold text-gray-900">Maria</p>
                    <p className="text-gray-600 text-sm">From Poland, Sept. 2025</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Review 2 */}
            <motion.div 
              className="bg-white p-8 rounded-2xl shadow-lg border border-amber-100 relative overflow-hidden"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              {/* Decorative element */}
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-amber-100 rounded-full translate-y-16 -translate-x-16 opacity-30"></div>
              
              <div className="relative z-10">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-gray-700 text-lg italic mb-6">
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
                    <p className="font-semibold text-gray-900">Jerzy</p>
                    <p className="text-gray-600 text-sm">From Canada, Dec. 2025</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Thank You Note Section */}
          <div className="text-center mt-20 ">
            <h3 className="text-3xl font-bold font-serif mb-8 text-gray-900 relative inline-block">
              A Special Thank You
              <span className="absolute -bottom-2 left-0 w-full h-1 bg-amber-400 transform scale-x-75 origin-left"></span>
            </h3>
            <motion.div 
              className="max-w-[550px] mx-auto rounded-2xl overflow-hidden shadow-xl border-2 border-amber-200 bg-white py-6 p-2"
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
                  className="object-none mx-auto"
                  sizes="(max-width: 550px) 95vw, 550px"
                />
              </div>
            </motion.div>
            <p className="mt-6 text-gray-600 italic text-lg">A heartfelt note from one of our grateful visitors</p>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 px-4 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto text-center">
            <h2 className="text-3xl font-bold font-serif mb-12 text-gray-900">Meet The Students</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {[
                    { name: "Chen Wei", role: "History Major, Fudan Univ.", img: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=1887&auto=format&fit=crop" },
                    { name: "Alice Zhang", role: "English Lit., SJTU", img: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1888&auto=format&fit=crop" },
                    { name: "Mike Liu", role: "Urban Planning, Tongji Univ.", img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1887&auto=format&fit=crop" }
                ].map((member, i) => (
                    <motion.div 
                        key={i} 
                        className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow relative overflow-hidden"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0 }}
                        transition={{ duration: 0.5, delay: i * 0.2 }}
                    >
                        {/* Decorative element */}
                        <div className="absolute -top-6 -right-6 w-24 h-24 bg-amber-100 rounded-full opacity-20"></div>
                        
                        <div className="relative z-10">
                          <div className="relative w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden border-4 border-amber-100">
                              <Image src={member.img} alt={member.name} fill className="object-cover" priority={i===0} />
                          </div>
                          <h3 className="text-xl font-bold text-gray-900">{member.name}</h3>
                          <p className="text-amber-600 font-medium">{member.role}</p>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
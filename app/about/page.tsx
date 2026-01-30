"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader"; // New Component
import { motion } from "framer-motion";
import Image from "next/image";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      
      <PageHeader title="About Wanderlot" />

      {/* Story Section */}
      <section className="py-20 px-4 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center gap-12">
            <motion.div 
                className="md:w-1/2"
                initial={{ opacity: 0, x: -30 }}
                // 顶部大图：直接在挂载时动画，避免 whileInView 在路由切换时不触发
                animate={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
            >
                <div className="relative h-[500px] w-full rounded-2xl overflow-hidden shadow-2xl">
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
                className="md:w-1/2"
                initial={{ opacity: 0, x: 30 }}
                // 直接在挂载时动画，确保与左侧图片同时可见
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.05 }}
            >
                <h2 className="text-3xl font-bold font-serif mb-6 text-gray-900">Our Story</h2>
                <p className="text-gray-600 text-lg leading-relaxed mb-6">
                    Wanderlot is a non-profit initiative started by a group of university students in Shanghai. We noticed that many visitors only see the commercial side of our city, missing the rich history and vibrant local life that makes Shanghai truly special.
                </p>
                <p className="text-gray-600 text-lg leading-relaxed">
                    Driven by our love for this city, we decided to offer <strong>free walking tours</strong> to bridge the gap between locals and travelers. We aren't professional guides, but we are professional Shanghai enthusiasts. We want to show you the Shanghai we know and love—authentic, diverse, and full of surprises.
                </p>
            </motion.div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 px-4 bg-gray-50">
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
                        className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        // 更宽松的触发：任意部分可见即触发
                        viewport={{ once: true, amount: 0 }}
                        transition={{ duration: 0.5, delay: i * 0.2 }}
                    >
                        <div className="relative w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden">
                            <Image src={member.img} alt={member.name} fill className="object-cover" priority={i===0} />
                        </div>
                        <h3 className="text-xl font-bold text-gray-900">{member.name}</h3>
                        <p className="text-amber-600 font-medium">{member.role}</p>
                    </motion.div>
                ))}
            </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import { GraduationCap, Wallet, HeartHandshake } from "lucide-react";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      
      {/* Features Section */}
      <section className="py-24 px-4 bg-white">
        <div className="max-w-7xl mx-auto text-center">
             <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6 font-serif">Why Tour with Wanderlot?</h2>
             <p className="text-gray-600 text-lg max-w-2xl mx-auto mb-16">
               Experience Shanghai through the eyes of those who live and learn here. We offer a unique, non-commercial perspective on this magnificent city.
             </p>
             
             <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                 <div className="p-8 bg-gray-50 rounded-2xl hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group">
                     <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-amber-600 transition-colors">
                        <GraduationCap className="w-8 h-8 text-amber-600 group-hover:text-white" />
                     </div>
                     <h3 className="text-2xl font-bold mb-4 text-gray-900">Student-Led</h3>
                     <p className="text-gray-600 leading-relaxed">
                       Our guides are university students passionate about sharing their city's history, culture, and hidden stories.
                     </p>
                 </div>
                 
                 <div className="p-8 bg-gray-50 rounded-2xl hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group">
                     <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-amber-600 transition-colors">
                        <Wallet className="w-8 h-8 text-amber-600 group-hover:text-white" />
                     </div>Shanghai is a strong cocktail of cultures.
                     <h3 className="text-2xl font-bold mb-4 text-gray-900">Completely Free</h3>
                     <p className="text-gray-600 leading-relaxed">
                       We believe culture should be accessible to everyone. Our tours are free of charge (tips are appreciated but never expected).
                     </p>
                 </div>

                 <div className="p-8 bg-gray-50 rounded-2xl hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group">
                     <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-amber-600 transition-colors">
                        <HeartHandshake className="w-8 h-8 text-amber-600 group-hover:text-white" />
                     </div>
                     <h3 className="text-2xl font-bold mb-4 text-gray-900">Authentic & Local</h3>
                     <p className="text-gray-600 leading-relaxed">
                       Skip the tourist traps. We take you to the places locals love, from hole-in-the-wall eateries to quiet historic lanes.
                     </p>
                 </div>
             </div>
        </div>
      </section>

      {/* Visual Break / Quote */}
      <section className="py-20 bg-gray-900 text-white text-center px-4 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')]"></div>
        <div className="relative z-10 max-w-4xl mx-auto">
            <blockquote className="text-3xl md:text-4xl font-serif italic leading-normal">
                "Shanghai is a strong cocktail of cultures.""
            </blockquote>
            <cite className="block mt-6 text-lg text-amber-500 font-semibold not-italic">- Where the past meets future, and every street tells a story</cite>
        </div>
      </section>

      <Footer />
    </main>
  );
}

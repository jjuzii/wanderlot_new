"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import TourCard from "@/components/TourCard";
import BookingModal from "@/components/BookingModal";
import MoreModal from "@/components/MoreModal"; // 新增
import PageHeader from "@/components/PageHeader"; // New Component
import { tours } from "@/data/tours";

export default function ToursPage() {
  const [selectedTour, setSelectedTour] = useState<string | null>(null);
  const [selectedMoreTour, setSelectedMoreTour] = useState<any | null>(null); // 新增

  return (
    <main className="min-h-screen bg-gray-50">
      <Navbar />
      
      <PageHeader 
        title="Explore Shanghai" 
        subtitle="Jotouch .gitignorein our free student-led tours and discover the city's hidden gems." 
      />

      {/* Grid */}
      <section className="py-16 px-4 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {tours.map((tour, index) => (
                <TourCard 
                    key={tour.id} 
                    tour={tour} 
                    index={index}
                    onMore={(t) => setSelectedMoreTour(t)} // 改为打开 More 弹窗
                />
            ))}
        </div>
      </section>

      <Footer />
      
      <BookingModal 
        isOpen={!!selectedTour} 
        onClose={() => setSelectedTour(null)} 
        tourTitle={selectedTour || ""}
      />

      <MoreModal
        isOpen={!!selectedMoreTour}
        tour={selectedMoreTour}
        onClose={() => setSelectedMoreTour(null)}
        onBook={(t) => {
          setSelectedMoreTour(null);
          setSelectedTour(t.title);
        }}
      />
    </main>
  );
}

"use client";

import React, { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Clock, MapPin } from "lucide-react";
import Image from "next/image";

interface Tour {
  id: number;
  title: string;
  location: string;
  price: string;
  days: number;
  image: string;
  description: string;
}

interface TourCardProps {
  tour: Tour;
  onMore: (tour: Tour) => void;
  index: number;
}

export default function TourCard({ tour, onMore, index }: TourCardProps) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [mountedVisible, setMountedVisible] = useState(false);
  const [imgSrc, setImgSrc] = useState<string>(tour.image || "/images/placeholder.svg"); // 新增：可切换图片源

  useEffect(() => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    // 如果元素在视口内（任意部分可见）则立即标记为可见
    if (rect.top < window.innerHeight && rect.bottom > 0) {
      setMountedVisible(true);
    }
  }, []);

  const variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.div
      ref={ref}
      className="bg-white rounded-2xl overflow-hidden shadow-lg group"
      variants={variants}
      initial="hidden"
      // 如果挂载时已在视口内则直接触发，否则依赖 whileInView
      animate={mountedVisible ? "visible" : undefined}
      whileInView="visible"
      viewport={{ once: true, amount: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <div className="relative h-64 overflow-hidden bg-gray-50 flex items-center justify-center">
        <Image
          src={imgSrc}
          alt={tour.title}
          fill
          className="object-contain transition-transform duration-500 group-hover:scale-105"
          priority={index < 3}
          onError={() => setImgSrc("/images/placeholder.svg")} // 新增：加载失败回退
        />
        <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full font-bold text-amber-600 shadow-sm">
          {tour.price}
        </div>
      </div>

      <div className="p-6">
        <div className="flex items-center text-sm text-gray-500 mb-2 space-x-4">
          <span className="flex items-center">
            <MapPin size={16} className="mr-1 text-amber-500" /> {tour.location}
          </span>
          <span className="flex items-center">
            <Clock size={16} className="mr-1 text-amber-500" /> {tour.days} Days
          </span>
        </div>

        <h3 className="text-lg md:text-xl font-semibold tracking-tight text-gray-900 mb-2 leading-snug">
          {tour.title}
        </h3>
        <p className="text-gray-600 mb-6 text-sm md:text-base line-clamp-3 text-justify">
          {tour.description}
        </p>

        <div className="mt-4 flex items-center justify-between">
          <button
            onClick={() => onMore(tour)}
            className="w-full border-2 border-amber-600 text-amber-600 font-bold py-2 rounded-lg hover:bg-amber-600 hover:text-white transition-colors"
          >
            More
          </button>
        </div>
      </div>
    </motion.div>
  );
}

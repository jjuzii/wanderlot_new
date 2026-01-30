"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { MapPin, Clock, X, Info } from "lucide-react";

type Props = {
  isOpen: boolean;
  onClose: () => void;
  tour: any | null;
  onBook: (t: any) => void;
};

export default function MoreModal({ isOpen, onClose, tour, onBook }: Props) {
  const [paragraphs, setParagraphs] = useState<string[]>([]);
  const [highlights, setHighlights] = useState<string[]>([]);
  const [caption, setCaption] = useState<string>(""); // 图片说明

  useEffect(() => {
    if (tour) {
      // 读取优先级：longDescription -> description
      const raw = (tour.longDescription || tour.description || "").trim();

      let paras: string[] = [];
      let hl: string[] = [];

      if (!raw) {
        paras = [];
        hl = [];
      } else if (/Route Highlights:/i.test(raw)) {
        // 将 "Route Highlights:" 分离，避免重复
        const [before, ...afterParts] = raw.split(/Route Highlights:/i);
        const after = afterParts.join("Route Highlights:").trim();

        // bullets（以 - 开头）
        hl = after
            .split("\n")
            .map((line: string) => line.trim())  
            .filter(Boolean)
            .filter((line: string) => line.startsWith("-"))  
            .map((line: string) => line.replace(/^-+\s*/, "").trim()); 

        // after 中可能还有非 bullets 的段落，取出它们
        const afterParas = after
          .split("\n\n")
          .map((p) => p.trim())
          .filter(Boolean)
          .filter((p) => !p.split("\n").every((line) => line.trim().startsWith("-")));

        paras = before
          .split("\n\n")
          .map((p) => p.trim())
          .filter(Boolean);
        paras.push(...afterParas);
      } else {
        paras = raw
          .split("\n\n")
          .map((para: string) => para.trim())
          .filter(Boolean);

        hl = raw
          .split("\n")
          .map((line: string) => line.trim())
          .filter(Boolean)
          .filter((line: string) => l.startsWith("-"))
          .map((line: string) => line.replace(/^-+\s*/, "").trim());
      }

      // 若有显式 imageCaption 则使用，否则取首段作为短 caption（<=160 字符），并从段落中移除
      let imgCap = (tour as any).imageCaption || "";
      if (!imgCap && paras.length > 0 && paras[0].length <= 160) {
        imgCap = paras[0];
        paras = paras.slice(1);
      }

      setParagraphs(paras);
      setHighlights(hl);
      setCaption(imgCap);
    } else {
      setParagraphs([]);
      setHighlights([]);
      setCaption("");
    }
  }, [tour]);

  if (!isOpen || !tour) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center px-4 md:px-8" role="dialog" aria-modal="true">
      <div className="absolute inset-0 bg-black/50" onClick={onClose}></div>

      <div className="relative z-10 w-full max-w-3xl mx-auto bg-white rounded-3xl shadow-2xl overflow-hidden">
        <button
          aria-label="Close"
          onClick={onClose}
          className="absolute top-4 right-4 z-20 bg-white/90 hover:bg-white px-2 py-1 rounded-full shadow-sm"
        >
          <X size={18} />
        </button>

        <div className="overflow-y-auto max-h-[72vh]">
          {/* 图片在上，采用 object-contain 保证完整显示，跟随滚动 */}
          <div className="w-full bg-gray-100 flex items-center justify-center">
            <div className="w-full h-64 md:h-80">
              {tour.image ? (
                // 使用 img 而非 next/image 以确保 onError 回退简单直观
                // (或保留 Image 并做更复杂的 loader，如需改我可以调整)
                // 这里保持完整显示：object-contain
                // eslint-disable-next-line @next/next/no-img-element
                <img src={tour.image} alt={tour.title} className="w-full h-full object-contain" />
              ) : null}
            </div>
          </div>

          {caption && <p className="px-6 md:px-8 mt-3 text-sm italic text-gray-600">{caption}</p>}

          <div className="p-6 md:p-8">
            <div className="flex items-start justify-between">
              <div className="flex-1 pr-4">
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-extrabold tracking-tight leading-tight text-gray-900">
                  {tour.title}
                </h2>
                <p className="mt-2 text-sm md:text-base text-gray-600 flex items-center gap-4">
                  <span className="flex items-center gap-1"><MapPin size={16} className="text-amber-500" /> {tour.location}</span>
                  <span className="flex items-center gap-1"><Clock size={16} className="text-amber-500" /> {tour.days} day{tour.days > 1 ? "s" : ""}</span>
                </p>
              </div>

              <div className="text-right shrink-0">
                <div className="inline-block px-3 py-1 rounded-full bg-amber-50 text-amber-700 font-semibold shadow-sm text-sm">
                  {tour.price}
                </div>
              </div>
            </div>

            {/* 首段作为 lead，更大更醒目 */}
            <div className="mt-4">
              {paragraphs.length > 0 && (
                <p className="text-lg md:text-xl text-gray-800 font-semibold leading-snug mb-4">
                  {paragraphs[0]}
                </p>
              )}

              <div className="text-gray-700 text-base md:text-lg leading-relaxed space-y-4">
                {paragraphs.slice(1).map((para: string, i: number) => (
                  <p key={i} className="mb-2 text-justify">
                    {para}
                  </p>
                ))}

                {highlights.length > 0 && (
                  <div className="mt-3">
                    <h4 className="mb-3">
                      <span className="inline-block px-3 py-1 rounded-full bg-amber-50 text-amber-700 font-semibold text-sm">
                        Route Highlights
                      </span>
                    </h4>
                    <ul className="list-disc list-inside space-y-3 text-gray-700">
                      {highlights.map((h: string, idx: number) => {
                        const [head, rest] = h.includes(":") ? h.split(":") : [h, ""];
                        return (
                          <li key={idx} className="text-base md:text-lg leading-relaxed">
                            <span className="font-medium text-gray-900">{head.trim()}{rest ? ":" : ""}</span>
                            {rest ? <span className="ml-1 text-gray-700">{rest.trim()}</span> : null}
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                )}

                {tour.meetingPoint && (
                  <div className="mt-4 flex items-start gap-3">
                    <div className="mt-1 text-amber-600">
                      <MapPin size={18} />
                    </div>
                    <div className="bg-amber-50 border-l-4 border-amber-200 p-3 rounded w-full text-sm md:text-base">
                      <div className="font-medium text-gray-800">Meeting</div>
                      <div className="text-gray-700">{tour.meetingPoint}</div>
                    </div>
                  </div>
                )}

                {tour.notes && (
                  <div className="mt-3 flex items-start gap-3">
                    <div className="mt-1 text-amber-600">
                      <Info size={18} />
                    </div>
                    <div className="bg-gray-50 p-3 rounded w-full text-sm md:text-base italic text-gray-600">
                      {tour.notes}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        <div className="sticky bottom-0 bg-white/90 backdrop-blur-sm border-t p-4 flex items-center justify-end gap-3">
          <button onClick={onClose} className="px-4 py-2 rounded-md border bg-white text-gray-700 hover:bg-gray-50">Close</button>
          <button
            onClick={() => onBook(tour)}
            className="px-6 py-3 rounded-full bg-amber-600 text-white text-lg font-semibold hover:bg-amber-700 shadow-lg"
          >
            Book
          </button>
        </div>
      </div>
    </div>
  );
}

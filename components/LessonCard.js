"use client";
import FloatCard from "./animations/FloatCard";

export default function LessonCard({ title, excerpt, duration }) {
  return (
    <FloatCard>
      <div className="flex justify-between items-start gap-4">
        <div>
          <h3 className="text-lg font-semibold">{title}</h3>
          <p className="text-sm text-muted mt-2">{excerpt}</p>
        </div>
        <div className="text-sm text-muted">{duration}</div>
      </div>
      <div className="mt-4 flex gap-3">
        <a className="px-4 py-2 rounded-md text-sm bg-primary text-white">شاهد الدرس</a>
        <a className="px-4 py-2 rounded-md text-sm border">ابدأ الاختبار</a>
      </div>
    </FloatCard>
  );
}

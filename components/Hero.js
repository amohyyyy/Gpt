"use client";
import FadeIn from "./animations/FadeIn";

export default function Hero() {
  return (
    <section className="container grid md:grid-cols-2 items-center gap-8 py-14">
      <div>
        <FadeIn>
          <h1 className="text-4xl font-extrabold mb-4">منصة تعليمية ذكية ✨</h1>
          <p className="text-lg text-muted mb-6">دروس تفاعلية، اختبارات آلية، ومساعدة بالذكاء الاصطناعي.</p>
          <div className="flex gap-3">
            <a href="/student" className="px-5 py-3 bg-primary text-white rounded-lg shadow">ابدأ التعلم</a>
            <a href="/admin" className="px-5 py-3 border rounded-lg">لوحة الأدمن</a>
          </div>
        </FadeIn>
      </div>

      <div className="w-full">
        <FadeIn delay={0.15}>
          <div className="bg-white rounded-2xl p-5 shadow-card">
            {/* مكان لملف Lottie لاحقًا */}
            <div className="h-48 flex items-center justify-center text-primary">🎓</div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}


import Hero from "@/components/Hero";
import LessonCard from "@/components/LessonCard";

export default function Home() {
  return (
    <main>
      <Hero />
      <section className="container py-10 grid md:grid-cols-3 gap-6">
        <LessonCard title="الكسور العشرية" excerpt="تعلم كيفية التعامل مع الكسور العشرية بسهولة" duration="20 دقيقة" />
        <LessonCard title="المعادلات البسيطة" excerpt="خطوات مبسطة لفهم المعادلات" duration="30 دقيقة" />
        <LessonCard title="الأشكال الهندسية" excerpt="استكشف عالم الهندسة بطريقة ممتعة" duration="25 دقيقة" />
      </section>
    </main>
  );
}

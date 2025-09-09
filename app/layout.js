import "./globals.css";
import ThemeProvider from "@/components/ThemeProvider";
import Navbar from "@/components/Navbar";

export const metadata = {
  title: "EduMate - منصة تعليمية ذكية",
  description: "تعلم تفاعلي مع دروس واختبارات مدعومة بالذكاء الاصطناعي"
};

export default function RootLayout({ children }) {
  return (
    <html lang="ar" dir="rtl">
      <body>
        <ThemeProvider>
          {({ theme, setTheme }) => (
            <>
              <Navbar theme={theme} setTheme={setTheme} />
              {children}
            </>
          )}
        </ThemeProvider>
      </body>
    </html>
  );
}

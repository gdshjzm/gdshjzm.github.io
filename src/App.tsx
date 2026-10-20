import { useEffect, useMemo } from "react";
import { BrowserRouter as Router, Navigate, Route, Routes } from "react-router-dom";
import { siteContent, type Locale } from "@/data/siteContent";
import Home from "@/pages/Home";

function RoutePage({ locale }: { locale: Locale }) {
  const content = useMemo(() => siteContent[locale], [locale]);

  useEffect(() => {
    document.documentElement.lang = locale === "zh" ? "zh-CN" : "en";
    document.documentElement.dataset.locale = locale;
    document.title = content.meta.title;
  }, [content.meta.title, locale]);

  return <Home locale={locale} content={content} />;
}

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<RoutePage locale="en" />} />
        <Route path="/en" element={<RoutePage locale="en" />} />
        <Route path="/zh" element={<RoutePage locale="zh" />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  );
}

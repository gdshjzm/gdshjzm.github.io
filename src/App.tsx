import { useEffect, useMemo, useState } from "react";
import { BrowserRouter as Router, Navigate, Route, Routes } from "react-router-dom";
import PasswordGate from "@/components/PasswordGate";
import { siteContent, type Locale } from "@/data/siteContent";
import Home from "@/pages/Home";

type RoutePageProps = {
  locale: Locale;
  unlocked: boolean;
  onUnlock: () => void;
};

function RoutePage({ locale, unlocked, onUnlock }: RoutePageProps) {
  const content = useMemo(() => siteContent[locale], [locale]);

  useEffect(() => {
    document.documentElement.lang = locale === "zh" ? "zh-CN" : "en";
    document.documentElement.dataset.locale = locale;
    document.title = content.meta.title;
  }, [content.meta.title, locale]);

  if (!unlocked) {
    return <PasswordGate onUnlock={onUnlock} content={content.passwordGate} />;
  }

  return <Home locale={locale} content={content} />;
}

export default function App() {
  const [unlocked, setUnlocked] = useState(false);

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={<RoutePage locale="en" unlocked={unlocked} onUnlock={() => setUnlocked(true)} />}
        />
        <Route
          path="/en"
          element={<RoutePage locale="en" unlocked={unlocked} onUnlock={() => setUnlocked(true)} />}
        />
        <Route
          path="/zh"
          element={<RoutePage locale="zh" unlocked={unlocked} onUnlock={() => setUnlocked(true)} />}
        />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  );
}

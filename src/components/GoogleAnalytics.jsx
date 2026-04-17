import { useEffect } from "react";
import { useLocation } from "react-router";

export default function GoogleAnalytics() {
  const location = useLocation();

  useEffect(() => {
    if (typeof window.gtag !== "function") return;

    window.gtag("config", "G-VM0LSJSY8N", {
      page_path: location.pathname,
      page_location: window.location.href,
      page_title: document.title,
    });
  }, [location]);

  return null;
}
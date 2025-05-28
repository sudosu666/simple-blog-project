import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ChevronUp } from "lucide-react";

export default function SocialMediaHighlights() {
  const [expanded, setExpanded] = useState(false);

  useEffect(() => {
    // TikTok embed script
    const script = document.createElement("script");
    script.src = "https://www.tiktok.com/embed.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <section className="mb-10">
      {/* Логотип-кнопка */}
      <div
        className="flex items-center cursor-pointer mb-4 select-none"
        onClick={() => setExpanded(!expanded)}
      >
        {/* Можно заменить на свой SVG или компонент логотипа */}
        <img
          src="/logo.png"
          alt="Social Media"
          className="w-8 h-8 mr-2"
        />
        <h3 className="text-2xl font-semibold mr-2">
          Social Media Highlights
        </h3>
        {expanded ? <ChevronUp size={24} /> : <ChevronDown size={24} />}
      </div>

      {/* Анимация блока */}
      <AnimatePresence initial={false}>
        {expanded && (
          <motion.div
            key="content"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.4 }}
            className="overflow-hidden"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="text-xl font-bold mb-2">Instagram</h4>
                <iframe
                  src="https://www.instagram.com/p/CyT1FqXOBzZ/embed"
                  width="100%"
                  height="480"
                  frameBorder="0"
                  allowFullScreen
                  className="rounded shadow"
                ></iframe>
              </div>
              <div>
                <h4 className="text-xl font-bold mb-2">Facebook</h4>
                <iframe
                  src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fgentlemovers&tabs=timeline&width=500&height=480&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId"
                  width="100%"
                  height="480"
                  style={{ border: "none", overflow: "hidden" }}
                  scrolling="no"
                  frameBorder="0"
                  allow="encrypted-media"
                  className="rounded shadow"
                ></iframe>
              </div>
              <div className="md:col-span-2">
                <h4 className="text-xl font-bold mb-2">TikTok</h4>
                <blockquote
                  className="tiktok-embed"
                  cite="https://www.tiktok.com/@gentlemovers/video/7182925412560009221"
                  data-video-id="7182925412560009221"
                  style={{ width: "100%", height: "480px" }}
                >
                  <section>Loading TikTok...</section>
                </blockquote>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

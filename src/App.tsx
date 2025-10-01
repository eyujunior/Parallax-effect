// App.tsx
import {
  motion,
  useAnimation,
  easeOut,
  useScroll,
  useTransform,
} from "framer-motion";
import { useEffect, useRef } from "react";

import Hero from "./components/layout/Hero";
import Navbar from "./components/layout/Navbar";
import orangeBlobImg from "./assets/bottom-left-blob.webp";
import topMiddleImg from "./assets/top-middle-blob.webp";
import heroGlobeImg from "./assets/hero-globe.webp";
import StatCards from "./components/layout/StatCards";
import Partners from "./components/layout/Partners";
import CrowdSourcing from "./components/layout/CrowdSourcing";

export default function App() {
  const { scrollY } = useScroll();
  const globeY = useTransform(scrollY, [0, 2000], [0, -600]);
  const heroCtrl = useAnimation();
  const statsCtrl = useAnimation();
  const titleCtrl = useAnimation();
  const fired = useRef(false);
  const lastScrollY = useRef(0);
  const touchStartY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      if (fired.current) return;

      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY.current && currentScrollY > 10) {
        fireAnimation();
      }

      lastScrollY.current = currentScrollY;
    };

    const handleWheel = (e: WheelEvent) => {
      if (fired.current) return;

      if (e.deltaY > 0) {
        fireAnimation();
      }
    };

    const handleTouchStart = (e: TouchEvent) => {
      touchStartY.current = e.touches[0].clientY;
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (fired.current) return;

      const touchY = e.touches[0].clientY;
      const diff = touchStartY.current - touchY;

      if (diff > 10) {
        fireAnimation();
      }
    };

    const fireAnimation = () => {
      if (fired.current) return;
      fired.current = true;

      const transition = { duration: 0.7, ease: easeOut };

      heroCtrl.start({ y: -120, transition });
      statsCtrl.start({ y: -120, transition });

      titleCtrl.start({
        fontSize: "var(--hero-final)",
        ["--from" as any]: "var(--color-light-purple)",
        ["--via" as any]: "var(--color-light-orange)",
        ["--to" as any]: "var(--color-light-red)",
        transition,
      } as any);

      // remove listeners
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("wheel", handleWheel);
      window.removeEventListener("touchstart", handleTouchStart);
      window.removeEventListener("touchmove", handleTouchMove);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("wheel", handleWheel, { passive: true });
    window.addEventListener("touchstart", handleTouchStart, { passive: true });
    window.addEventListener("touchmove", handleTouchMove, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("wheel", handleWheel);
      window.removeEventListener("touchstart", handleTouchStart);
      window.removeEventListener("touchmove", handleTouchMove);
    };
  }, [heroCtrl, statsCtrl, titleCtrl]);

  return (
    <div className="font-display px-4 sm:px-6 md:px-12 xl:px-16 2xl:px-20 text-white min-h-screen relative overflow-x-hidden">
      <motion.img
        src={heroGlobeImg}
        alt="right globe"
        className="fixed bottom-0 right-0 -z-50 opacity-80 w-[800px] 4xl:w-[1000px] rotate-12 will-change-transform"
        style={{ y: globeY }}
      />
      <div className="relative h-screen">
        <img
          src={orangeBlobImg}
          alt="bottom left"
          className="absolute -bottom-[500px] 4xl:-bottom-[350px] -left-[350px] 4xl:-left-[250px] opacity-60 -z-10 hidden md:block"
        />
        <img
          src={topMiddleImg}
          alt="top middle"
          className="absolute -z-10 top-0 left-[250px] opacity-80 hidden md:block"
        />

        <Navbar />
        <motion.div animate={heroCtrl} className="will-change-transform">
          <Hero titleCtrl={titleCtrl} />
        </motion.div>

        <div className="h-8" />

        <motion.div animate={statsCtrl} className="will-change-transform">
          <div className="mt-6 xl:mt-28"></div>
          <StatCards />
        </motion.div>
      </div>

      <Partners />
      <CrowdSourcing />
    </div>
  );
}

import { useState, useEffect } from "react";

export default function useScrollDirection() {
  const [scrollDirection, setScrollDirection] = useState("up");
  const [lastScrollY, setLastScrollY] = useState(0);
  const [hasScrolled, setHasScrolled] = useState(false);

  // useEffect(() => {
  //   let lastScrollY = window.scrollY;

  //   const updateScrollDirection = () => {
  //     const currentScrollY = window.scrollY;
  //     const direction = currentScrollY > lastScrollY ? "down" : "up";
  //     if (direction !== scrollDirection && Math.abs(currentScrollY - lastScrollY) > 10) {
  //       setScrollDirection(direction);
  //     }
  //     lastScrollY = currentScrollY;
  //   };

  //   window.addEventListener("scroll", updateScrollDirection);
  //   return () => window.removeEventListener("scroll", updateScrollDirection);
  // }, [scrollDirection]);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Don't update scrollDirection until user actually scrolls
      if (!hasScrolled && currentScrollY > 0) {
        setHasScrolled(true);
      }

      if (hasScrolled) {
        const direction = currentScrollY > lastScrollY ? "down" : "up";
        if (
          direction !== scrollDirection &&
          Math.abs(currentScrollY - lastScrollY) > 10
        ) {
          setScrollDirection(direction);
        }
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY, scrollDirection, hasScrolled]);

  return scrollDirection;
}
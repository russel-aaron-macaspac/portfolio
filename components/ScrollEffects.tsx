"use client";

import { useEffect } from "react";

export function ScrollEffects() {
  useEffect(() => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const observer = reduceMotion ? null : new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer?.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -48px" },
    );

    const reveal = (root: ParentNode) => {
      root.querySelectorAll<HTMLElement>(".reveal:not(.is-visible)").forEach((element) => {
        if (reduceMotion) element.classList.add("is-visible");
        else observer?.observe(element);
      });
    };
    reveal(document);
    const mutations = new MutationObserver(() => reveal(document));
    mutations.observe(document.body, { childList: true, subtree: true });
    return () => {
      observer?.disconnect();
      mutations.disconnect();
    };
  }, []);

  return null;
}

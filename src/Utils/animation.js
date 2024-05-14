import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
gsap.registerPlugin(ScrollTrigger);

export const animateWithGsap = (target, animationPorps, scrollsProps) => {
  gsap.to(target, {
    ...animationPorps,
    scrollTrigger: {
      trigger: target,
      toggleActions: "restart reverse restart reverse",
      start: "top 85%",
      ...scrollsProps,
    },
  });
};
export const animateWithGsapTimeline = (
  timeline,
  rotationRef,
  rotationState,
  firstTraget,
  secondTarget,
  animationPros
) => {
  timeline.to(rotationRef.current.rotation, {
    y: rotationState,
    duration: 1,
    ease: "power2.inOut",
  });
  timeline.to(
    firstTraget,
    {
      ...animationPros,
      ease: "power2.inOut",
    },
    "<"
  );
  timeline.to(
    secondTarget,
    {
      ...animationPros,
      ease: "power2.inOut",
    },
    "<"
  );
};

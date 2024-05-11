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

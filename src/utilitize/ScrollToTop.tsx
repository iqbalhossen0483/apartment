import { useState } from "react";

const ScrollToTop = () => {
  const [hide, setHide] = useState(true);
  function handleHide() {
    if (window.scrollY < 600) {
      setHide(true);
    } else setHide(false);
  }
  window.addEventListener("scroll", handleHide);

  function ScrollToTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  return (
    <div className={`scroll-to-top ${hide ? "hidden" : "block"}`}>
      <p onClick={ScrollToTop}>&#8593;</p>
    </div>
  );
};

export default ScrollToTop;

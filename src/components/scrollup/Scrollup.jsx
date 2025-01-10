import React from 'react';
import './scrollup.css'

const Scrollup = () => {
    window.addEventListener("scroll", function () {
        const scrollUp = document.querySelector(".scrollup");
        // when the scroll is higher than 560 viewport height, ad  the show-scroll class to a tag with the scroll-top class
        if (this.scrollY >= 560) scrollUp.classList.add("show-scroll");
        else scrollUp.classList.remove("show-scroll")
    });
  return (
    <button
      className="scrollup"
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      aria-label="Scroll to top"
    >
      <i className="uil uil-arrow-up scrollup__icon"></i>
    </button>
  )
}

export default Scrollup

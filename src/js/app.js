import * as bootstrap from "./modules/bootstrap.bundle.min.js";

const slider = new Splide("#slider", {
  perPage: 4,
  gap: "1rem",
  flickMaxPages: 1,
  perPage: 3,
  arrows: false,
  //pagination: false,
  //gap: 40,
  breakpoints: {
    767: {
      perPage: 1,
      //pagination: true,
    },
  },
});

slider.mount();

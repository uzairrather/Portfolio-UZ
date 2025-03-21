import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Client from "../sections/Client";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
};

const TestimonialSlider = () => {
  return (
    <Carousel
      additionalTransfrom={0}
      arrows={true}
      autoPlay={true}
      autoPlaySpeed={5000}
      centerMode={false}
      infinite
      responsive={responsive}
      itemClass="item"
    >
      <Client
        image="/images/muda.jpg"
        name="Mudasir Dar"
        role="odoo developer"
        review="The React project is well-structured and visually appealing, showcasing a modern and professional design. The use of Next.js for server-side rendering and optimized performance is a great choice, ensuring fast load times and SEO benefits. The UI components are well-organized, and the Tailwind CSS styling enhances the responsiveness and aesthetics."
      />
      <Client
        image="/images/parvaiz.jpg"
        name="Parvaiz Ahmad"
        role="SalesForce Manager"
        review="The ExaltSystem website looks great! It's fast-loading, well-optimized, and responsive. The use of Next.js and Tailwind CSS ensures a smooth and modern design. Well done! Ausif"
      />
      <Client
        image="/images/finacial.jpg"
        name="Iqbal Dar"
        role="Full-Stack Developer"
        review="The eCommerce website is well-designed, fast, and user-friendly. The layout is clean, making navigation smooth, and the product pages are well-structured. Great work on optimizing performance! Adding better filtering, animations, or interactive elements could make it even more engaging. Keep it up!"
      />
    </Carousel>
  );
};

export default TestimonialSlider;

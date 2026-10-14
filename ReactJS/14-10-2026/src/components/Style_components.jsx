import { useState, useEffect } from "react";

const slides = [
  {
    title: "Learn React JS",
    description: "Build Modern and interactive web application.",
    image:
      "https://images.unsplash.com/photo-1633356122544-f134324a6cee?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D",
  },
  {
    title: "Master Css Styling",
    description: "Build Modern and interactive web application.",
    image:
      "https://images.unsplash.com/photo-1507721999472-8ed4421c4af2?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D",
  },
  {
    title: "Become a Developer",
    description: "Build Modern and interactive web application.",
    image:
      "https://images.unsplash.com/photo-1605379399642-870262d3d051?q=80&w=1206&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D",
  },
];

const Style_components = () => {

  const [currentSlide , setCurrentSlide] = useState(0)

  const slide = slides[currentSlide]

  return (
    <>

      <section id="home" className="text-white flex flex-col justify-center items-center h-screen bg-no-repeat bg-cover w-100" style={{backgroundImage:`url("${slide.image})`}}>
        <div className="">
          <h1>{slide.title}</h1>
          <p>{slide.description}</p>
        </div>
        <button className="bg-white px-4 py-2 text-black" onClick={() => setCurrentSlide((currentSlide + 1) % slides.length)}>Next Slide</button>

        <div>
          {
            slides.map((item , index) => (
              <button key={item.title} style={{marginInline:"10px" , marginTop:"20px"}} className={currentSlide === index ? "active-dot":"dot"} onClick={() => setCurrentSlide(index)}>{`${index + 1}`}</button>
            ))
          }
        </div>
      </section>
    </>
  );
};

export default Style_components;

import { useEffect, useRef, useState } from "react";
import "./About-me.css";

export default function AboutMe() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const [transitionTime, setTransitionTime] = useState("3s");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTransitionTime("3s");
            setVisible(true);
          } else {
            setTransitionTime("0.5s");
            setVisible(false);
          }
        });
      },
      { threshold: 0.3 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  return (
    <div
      ref={ref}
      className={`AboutMe ${visible ? "fade-in" : ""}`}
      style={{ transition: `opacity ${transitionTime} ease` }}
    >
      <h1>¿Quien soy?</h1>
      <p className="mt-3">
        Hola, Soy Sebastian, Analista y desarrollador de software, 
        apasionado por la tecnología y el aprendizaje continuo. 
        Me considero una persona metódica, proactiva y responsable, 
        con una sólida base técnica que me permite enfrentar desafíos en el desarrollo de software. 
        Estoy comprometido con aportar valor real desde el primer día 
        y con un fuerte enfoque en el crecimiento profesional constante.
      </p>
    </div>
  );
}

import React, { useEffect, useRef, useState, type JSX } from "react";
import "./Info-Section.css";

function useOnScreen(ref: React.RefObject<HTMLElement | null>) {
  const [isIntersecting, setIntersecting] = useState(false);

  useEffect(() => {
    if (!ref.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => setIntersecting(entry.isIntersecting),
      { threshold: 0.1 }
    );

    observer.observe(ref.current);

    return () => {
      observer.disconnect();
    };
  }, [ref]);

  return isIntersecting;
}

type AnimatedTextProps = {
  children: React.ReactNode;
  index: number;
  tag?: keyof JSX.IntrinsicElements;
  className?: string;
};

function AnimatedText({ children, index, tag = "p", className = "" }: AnimatedTextProps) {
  const ref = useRef<HTMLDivElement | null>(null);
  const visible = useOnScreen(ref);

  const directionClass = index % 2 === 0 ? "from-left" : "from-right";

  const Tag = tag;

  return (
    <div
      ref={ref}
      className={`animate-text ${directionClass} ${visible ? "visible" : ""} ${className}`}
    >
      <Tag>{children}</Tag>
    </div>
  );
}

export default function InfoSection() {
  return (
    <div className="InfoContainer">
      <div className="JobExperience">
        <AnimatedText tag="h2" index={0} className="mt-3">• Asesor comercial •</AnimatedText>
        <AnimatedText index={1}><span>Empresa:</span> OneContact S.A.S</AnimatedText>
        <AnimatedText index={2}><span>Jefe inmediato:</span> Julio Cesar Amariles Velez</AnimatedText>
        <AnimatedText index={3}><span>Teléfono:</span> 323 343 6949</AnimatedText>
        <AnimatedText index={4} className="mb-3"><span>Periodo:</span> Septiembre 2024 - Diciembre 2025</AnimatedText>
        <br />

        <AnimatedText tag="h2" index={5} className="mt-3">• Desarrollador de Software •</AnimatedText>
        <AnimatedText index={6}><span>Empresa:</span> Integral S.A Ingenieros consultores</AnimatedText>
        <AnimatedText index={7}><span>Jefe inmediato:</span> Luis Alejandro Peláez Gómez</AnimatedText>
        <AnimatedText index={8}><span>Teléfono:</span> (604) 511 54 00</AnimatedText>
        <AnimatedText index={9}><span>Periodo:</span> Diciembre 2025 - Junio 2025</AnimatedText>
      </div>

      <div className="JobExperience2">
        <AnimatedText tag="h1" index={10}>Experiencia laboral</AnimatedText>
      </div>

      <div className="Schooling2">
        <AnimatedText tag="h1" index={11}>Estudios</AnimatedText>
      </div>

      <div className="Schooling">
        <AnimatedText tag="h2" index={12}>2025 • Técnico en Análisis y desarrollo de software</AnimatedText>
        <AnimatedText index={13}>Centro de formación integral para el trabajo (CEFIT)</AnimatedText>
        <br />
        <AnimatedText tag="h2" index={14}>Nivel de Ingles</AnimatedText>
        <AnimatedText index={15}>A2 Certificado (C1 en proceso...)</AnimatedText>
      </div>

      <div className="JobExperience">
        <AnimatedText tag="h2" index={16}>Johan Sebastian Giraldo Cañas</AnimatedText>
        <AnimatedText index={17}><span>Email: </span>Agiraldojohan@gmail.com</AnimatedText>
        <AnimatedText index={18}><span>Celular: </span>301 666 7319</AnimatedText>
        <br />
        <AnimatedText tag="h2" index={19}>Astrid Montoya Perez</AnimatedText>
        <AnimatedText index={20}><span>Email: </span>Astrid_m_p@gmail.com</AnimatedText>
        <AnimatedText index={21}><span>Celular: </span>312 841 0531</AnimatedText>
        <br />
        <AnimatedText tag="h2" index={22}>Andrés Castrillon Monsalve</AnimatedText>
        <AnimatedText index={23}><span>Email: </span>andrescastrillonmonsalve@gmail.com</AnimatedText>
        <AnimatedText index={24}><span>Celular: </span>317 562 9874</AnimatedText>
      </div>

      <div className="JobExperience2">
        <AnimatedText tag="h1" index={11}>Referencias</AnimatedText>
      </div>
    </div>
  );
}

import { useEffect, useRef, useState } from "react";
import "./Perfiltecnico.css";

export default function Perfiltecnico() {
  const perfilRef = useRef<HTMLDivElement | null>(null);
  const svgRef = useRef<SVGSVGElement | null>(null);
  const textRef = useRef<HTMLDivElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [textVisible, setTextVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY * 0.4;
      if (perfilRef.current) {
        perfilRef.current.style.setProperty("--bg-offset", `${offset}px`);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (!svgRef.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => setIsVisible(entry.isIntersecting));
      },
      { threshold: 0.3 }
    );

    observer.observe(svgRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!textRef.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => setTextVisible(entry.isIntersecting));
      },
      { threshold: 0.3 }
    );

    observer.observe(textRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div className="Perfiltecnico" ref={perfilRef}>
      <div
        className={`InfoSection ${textVisible ? "text-animate" : ""}`}
        ref={textRef}
      >
        <h2>PERFIL TÉCNICO</h2>
        <p>
          Desarrollador de software especializado en la construcción de
          soluciones técnicas sólidas, donde combino principios de arquitectura
          limpia y Domain-Driven Design (DDD) para crear sistemas escalables y
          bien organizados. Mi experiencia abarca la implementación de
          mecanismos de seguridad como autenticación y autorización con JWT, así
          como el diseño de la interfaz de usuario, garantizando la mejor
          experiencia tanto de manera visual, como interactiva. Disfruto del
          proceso de modelar entidades, agregados y contratos con precisión,
          asegurando que cada componente cumpla su función. Me apasiona escribir
          código que no solo funcione, sino que también sea mantenible, seguro y
          adaptado a las necesidades reales del proyecto, entregando así, el 100% 
          en cada uno.
        </p>
      </div>

      <div className="gif">
        <svg
          ref={svgRef}
          className={isVisible ? "animate" : ""}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 400 300"
          width="400"
          height="300"
          style={{ "--dur": "4s" } as React.CSSProperties}
        >
          <style>
            {`
              svg { overflow: visible; display: block; }
              .draw-path {
                fill: none;
                stroke: currentColor;
                stroke-width: 3;
                stroke-linecap: round;
                stroke-linejoin: round;
                stroke-dasharray: 1000;
                stroke-dashoffset: 1000;
              }
              .animate .draw-path {
                animation: draw var(--dur) linear forwards;
              }
              .draw-path.short { animation-duration: calc(var(--dur) * 0.6); }
              .draw-path.long { animation-duration: calc(var(--dur) * 1.2); }

              .animate .p1 { animation-delay: 0s; }
              .animate .p2 { animation-delay: 0.4s; }
              .animate .p3 { animation-delay: 0.8s; }
              .animate .p4 { animation-delay: 1.2s; }
              .animate .p5 { animation-delay: 1.6s; }
              .animate .p6 { animation-delay: 2s; }
              .animate .p7 { animation-delay: 2.4s; }
              .animate .p8 { animation-delay: 2.8s; }
              .animate .p9 { animation-delay: 3.2s; }

              @keyframes draw {
                to { stroke-dashoffset: 0; }
              }

              .screen-fill {
                fill: currentColor;
                opacity: 0;
              }
              .animate .screen-fill {
                animation: fillIn calc(var(--dur) / 2) linear forwards;
                animation-delay: calc(var(--dur) * 0.4);
              }
              @keyframes fillIn { to { opacity: 0.08; } }

              @keyframes appear { to { opacity: 1; } }
            `}
          </style>

          <circle className="draw-path p1" cx="120" cy="80" r="28" />
          <path
            className="draw-path p2"
            d="M120 108 q12 8 28 8 h36 q10 0 18 -6"
          />
          <path
            className="draw-path long p3"
            d="M88 140 q8 -18 32 -22 h92 q14 0 22 10 l6 18 q2 8 -6 14 l-18 12 q-10 6 -28 6 h-78 q-18 0 -30 -10 z"
          />
          <path className="draw-path p4" d="M88 150 q-6 10 0 22 l22 10" />
          <path className="draw-path p5" d="M200 150 q20 -6 36 4 l10 10" />
          <line
            className="draw-path short p6"
            x1="30"
            y1="200"
            x2="370"
            y2="200"
          />
          <rect
            className="draw-path p7"
            x="150"
            y="110"
            width="160"
            height="10"
            rx="2"
            ry="2"
          />
          <rect
            className="draw-path long p8"
            x="140"
            y="50"
            width="180"
            height="90"
            rx="6"
            ry="6"
          />
          <rect
            className="screen-fill"
            x="148"
            y="58"
            width="164"
            height="74"
            rx="4"
            ry="4"
          />
          <path className="draw-path short p9" d="M160 122 h120" />
          <path
            className="draw-path short p9"
            d="M160 128 h120"
            transform="translate(0,6)"
          />
          <path
            className="draw-path short p9"
            d="M160 134 h120"
            transform="translate(0,12)"
          />

          <g className="p9" style={{ animation: "none" }}>
            <circle
              cx="112"
              cy="74"
              r="1.6"
              fill="currentColor"
              style={{
                opacity: 0,
                animation: isVisible ? "appear .4s ease forwards" : "none",
                animationDelay: "calc(var(--dur) * 0.7)",
              }}
            />
            <circle
              cx="128"
              cy="74"
              r="1.6"
              fill="currentColor"
              style={{
                opacity: 0,
                animation: isVisible ? "appear .4s ease forwards" : "none",
                animationDelay: "calc(var(--dur) * 0.75)",
              }}
            />
          </g>
        </svg>
      </div>
    </div>
  );
}

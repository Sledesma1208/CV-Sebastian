import { useState } from "react";
import './SkillCircle.css';

type SkillCircleProps = {
  name: string;
  percentage: number;
};

function SkillCircle({ name, percentage }: SkillCircleProps) {
  const [hovered, setHovered] = useState(false);

  const radius = 30;
  const stroke = 6;
  const normalizedRadius = radius - stroke * 0.5;
  const circumference = normalizedRadius * 2 * Math.PI;
  const strokeDashoffset = hovered
    ? circumference - (percentage / 100) * circumference
    : circumference;

  return (
    <div
      className="skill-circle"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <svg height={radius * 2} width={radius * 2}>
        <circle
          className="bg-circle"
          strokeWidth={stroke}
          r={normalizedRadius}
          cx={radius}
          cy={radius}
        />
        <circle
          className="progress-circle"
          strokeWidth={stroke}
          strokeDasharray={circumference}
          strokeDashoffset={strokeDashoffset}
          r={normalizedRadius}
          cx={radius}
          cy={radius}
        />
        <text
          className={`percentage-text ${hovered ? 'visible' : ''}`}
          x="50%"
          y="50%"
          textAnchor="middle"
          dy=".3em"
        >
          {percentage}%
        </text>
      </svg>
      <span className="tech-name">{name}</span>
    </div>
  );
}

export default SkillCircle;

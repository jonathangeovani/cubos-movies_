import "./style.scss";

interface Props {
  percentage: number;
  size?: number;
}

const ProgressBar = ({ percentage, size = 140 }: Props) => {
  const radius = size / 2;
  const strokeWidth = size > 100 ? 8 : 6;
  const circumference = 2 * Math.PI * (radius - strokeWidth / 2);
  const fontSize = size > 100 ? "24px" : "20px";
  const symbolSize = size > 100 ? "14px" : "12px";

  return (
    <div className="circular-progress">
      <svg
        width={size}
        height={size}
        xmlns="http://www.w3.org/2000/svg"
        style={{ transform: "rotate(-90deg)" }}
      >
        <circle
          cx={radius}
          cy={radius}
          r={radius - strokeWidth / 2}
          stroke="#FFE000"
          strokeWidth={strokeWidth}
          strokeDasharray={circumference}
          strokeDashoffset={circumference * (1 - percentage / 100)}
          fill="none"
        />
        <text
          x={radius}
          y={radius + 9}
          textAnchor="middle"
          dominantBaseline="baseline"
          fontSize={fontSize}
          fontWeight="700"
          transform={`rotate(90, ${radius}, ${radius})`}
        >
          <tspan>{percentage}</tspan>
          <tspan className="symbol" fontSize={symbolSize}>
            %
          </tspan>
        </text>
      </svg>
      <div className="blur-bg" />
    </div>
  );
};

export default ProgressBar;

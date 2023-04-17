import { tokens } from 'styles/tokens';

export default function Check() {
  return (
    <div className="success">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={115}
        height={115}
        viewBox="0 0 133 133"
      >
        <g className="success" fill="none" fillRule="evenodd">
          <circle
            className="filled-circle"
            cx={66.5}
            cy={66.5}
            r={54.5}
            fill={tokens.colors.success}
          />
          <circle
            className="white-circle"
            cx={66.5}
            cy={66.5}
            r={55.5}
            fill="#FFF"
          />
          <circle
            className="outline"
            cx={66.5}
            cy={66.5}
            r={54.5}
            stroke={tokens.colors.success}
            strokeWidth={4}
          />
          <path
            className="check"
            stroke="#FFF"
            strokeWidth={5.5}
            d="m41 70 15 15 36-36"
          />
        </g>
      </svg>
    </div>
  );
}

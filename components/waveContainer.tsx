const WaveContainer = ({ percentage }: { percentage: number }) => {
  const waveYPosition = 100 - percentage;

  return (
    <div className="flex flex-col items-center p-5 w-full">
      <div className="w-[300px] h-[300px] mt-8 relative">
        <svg width="100%" height="100%" viewBox="0 0 100 100">
          {/* Circular Outline - Always Visible */}
          <circle
            cx="50"
            cy="50"
            r="49"
            stroke="black"
            strokeWidth="2"
            fill="none"
          />

          <defs>
            <linearGradient
              id="wave-gradient"
              x1="0%"
              y1="0%"
              x2="100%"
              y2="0%"
            >
              <stop offset="0%" stopColor="#4facfe" />
              <stop offset="100%" stopColor="#00f2fe" />
            </linearGradient>

            {/* Corrected Mask (White circle reveals, Black background hides) */}
            <mask id="wave-mask">
              <rect x="0" y="0" width="100" height="100" fill="black" />
              <circle cx="50" cy="50" r="48" fill="white" />
            </mask>
          </defs>

          {/* Waves inside the correct mask */}
          <g mask="url(#wave-mask)">
            {/* First Wave */}
            <path
              d={`
                M 0,${waveYPosition}
                Q 25,${waveYPosition - 5} 50,${waveYPosition}
                T 100,${waveYPosition}
                V 100 H 0 Z
              `}
              fill="url(#wave-gradient)"
            >
              <animate
                attributeName="d"
                dur="3s"
                repeatCount="indefinite"
                values={`
                  M 0,${waveYPosition} Q 25,${
                  waveYPosition - 5
                } 50,${waveYPosition} T 100,${waveYPosition} V 100 H 0 Z;
                  M 0,${waveYPosition} Q 25,${waveYPosition + 5} 50,${
                  waveYPosition - 5
                } T 100,${waveYPosition} V 100 H 0 Z;
                  M 0,${waveYPosition} Q 25,${
                  waveYPosition - 5
                } 50,${waveYPosition} T 100,${waveYPosition} V 100 H 0 Z;
                `}
              />
            </path>

            {/* Second Wave (Offset for a realistic effect) */}
            <path
              d={`
                M 0,${waveYPosition + 3}
                Q 25,${waveYPosition - 2} 50,${waveYPosition + 3}
                T 100,${waveYPosition + 3}
                V 100 H 0 Z
              `}
              fill="url(#wave-gradient)"
              opacity="0.5"
            >
              <animate
                attributeName="d"
                dur="4s"
                repeatCount="indefinite"
                values={`
                  M 0,${waveYPosition + 3} Q 25,${waveYPosition - 2} 50,${
                  waveYPosition + 3
                } T 100,${waveYPosition + 3} V 100 H 0 Z;
                  M 0,${waveYPosition + 3} Q 25,${waveYPosition + 2} 50,${
                  waveYPosition - 3
                } T 100,${waveYPosition + 3} V 100 H 0 Z;
                  M 0,${waveYPosition + 3} Q 25,${waveYPosition - 2} 50,${
                  waveYPosition + 3
                } T 100,${waveYPosition + 3} V 100 H 0 Z;
                `}
              />
            </path>
          </g>
        </svg>
      </div>
    </div>
  );
};

export default WaveContainer;

import React from 'react';

export const PerformanceGraph = () => {
  return (
    <svg
      width="93"
      height="106"
      viewBox="0 0 93 106"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M91.8423 26.5957V79.4033L46.1099 105.807L0.377441 79.4033V26.5957L46.1099 0.192383L91.8423 26.5957Z"
        stroke="#636363"
        strokeWidth="0.333435"
      />
      <path
        d="M84.8472 30.8457V76.1533L45.6099 98.8066L6.37256 76.1533V30.8457L45.6099 8.19238L84.8472 30.8457Z"
        stroke="#636363"
        strokeWidth="0.333435"
      />
      <path
        d="M77.9194 34.8457V72.1533L45.6099 90.8066L13.3003 72.1533V34.8457L45.6099 16.1924L77.9194 34.8457Z"
        stroke="#636363"
        strokeWidth="0.333435"
      />
      <path
        d="M72.7896 38.3457V68.6533L46.1099 83.8086L19.4302 68.6533V38.3457L46.1099 23.1904L72.7896 38.3457Z"
        stroke="#636363"
        strokeWidth="0.333435"
      />
      <path
        d="M65.8618 41.5957V64.4033L46.1099 75.8066L26.3579 64.4033V41.5957L46.1099 30.1924L65.8618 41.5957Z"
        stroke="#636363"
        strokeWidth="0.333435"
      />
      <path
        d="M58.9331 45.5957V60.4033L46.1099 67.8066L33.2866 60.4033V45.5957L46.1099 38.1924L58.9331 45.5957Z"
        stroke="#636363"
        strokeWidth="0.333435"
      />
      <path
        d="M52.0054 49.8418V57.1572L46.1099 60.8037L40.2144 57.1572V49.8418L46.1099 46.1953L52.0054 49.8418Z"
        stroke="#636363"
        strokeWidth="0.333435"
      />
      <path
        d="M0.0834961 26.8314L45.8808 53.2308"
        stroke="#636363"
        strokeWidth="0.333435"
      />
      <path d="M46.1099 0V53" stroke="#636363" strokeWidth="0.333435" />
      <path
        d="M92.1099 27L46.1099 53"
        stroke="#636363"
        strokeWidth="0.333435"
      />
      <path
        d="M0.109863 80L46.1099 53"
        stroke="#636363"
        strokeWidth="0.333435"
      />
      <path d="M46.1099 106V53" stroke="#636363" strokeWidth="0.333435" />
      <path
        d="M92.1099 80L46.1099 53"
        stroke="#636363"
        strokeWidth="0.333435"
      />
      {/* Radar Chart - Single shape that morphs and grows from center */}
      <polygon
        className="radar-shape-morph"
        fill="#FD9CFF"
        fillOpacity="0.6"
        stroke="#FD9CFF"
        strokeWidth="0.8"
        strokeLinejoin="round"
      >
        <animate
          attributeName="points"
          dur="8s"
          repeatCount="indefinite"
          values="
            46,48 50,50 50,54 46,56 42,54 42,50;
            46,38 54,42 55,52 46,58 37,52 36,42;
            46,22 68,38 65,60 46,72 27,60 24,38;
            46,12 80,32 85,65 46,88 12,68 8,35;
            46,5 75,28 88,62 46,98 5,70 3,30;
            46,48 50,50 50,54 46,56 42,54 42,50
          "
          keyTimes="0; 0.2; 0.4; 0.6; 0.8; 1"
          calcMode="spline"
          keySplines="0.4 0 0.2 1; 0.4 0 0.2 1; 0.4 0 0.2 1; 0.4 0 0.2 1; 0.4 0 0.2 1"
        />
        <animate
          attributeName="fill"
          dur="8s"
          repeatCount="indefinite"
          values="#FD9CFF; #6366F1; #06B6D4; #10B981; #FD9CFF"
          keyTimes="0; 0.25; 0.5; 0.75; 1"
        />
        <animate
          attributeName="stroke"
          dur="8s"
          repeatCount="indefinite"
          values="#FD9CFF; #6366F1; #06B6D4; #10B981; #FD9CFF"
          keyTimes="0; 0.25; 0.5; 0.75; 1"
        />
      </polygon>
    </svg>
  );
};

export const PerformanceGraphMobile = () => {
  return (
    <svg
      width="59"
      height="67"
      viewBox="0 0 59 67"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M57.9893 16.792V50.1357L29.1133 66.8066L0.238281 50.1357V16.792L29.1133 0.121094L57.9893 16.792Z"
        stroke="#636363"
        strokeWidth="0.210533"
      />
      <path
        d="M53.5732 19.476V48.0835L28.7979 62.3872L4.02344 48.0835V19.476L28.7979 5.17136L53.5732 19.476Z"
        stroke="#636363"
        strokeWidth="0.210533"
      />
      <path
        d="M49.1987 22.0009V45.5585L28.7983 57.3359L8.39795 45.5585V22.0009L28.7983 10.2236L49.1987 22.0009Z"
        stroke="#636363"
        strokeWidth="0.210533"
      />
      <path
        d="M45.9604 24.2127V43.3465L29.1138 52.9159L12.2681 43.3465V24.2127L29.1138 14.6434L45.9604 24.2127Z"
        stroke="#636363"
        strokeWidth="0.210533"
      />
      <path
        d="M41.5854 26.2644V40.6638L29.1128 47.864L16.6421 40.6648V26.2634L29.1128 19.0632L41.5854 26.2644Z"
        stroke="#636363"
        strokeWidth="0.210533"
      />
      <path
        d="M37.2109 28.7893V38.1389L29.1133 42.8127L21.0166 38.1389V28.7893L29.1133 24.1145L37.2109 28.7893Z"
        stroke="#636363"
        strokeWidth="0.210533"
      />
      <path
        d="M32.8364 31.4704V36.0885L29.1138 38.3913L25.3911 36.0885V31.4704L29.1138 29.1686L32.8364 31.4704Z"
        stroke="#636363"
        strokeWidth="0.210533"
      />
      <path
        d="M0.0527344 16.9414L28.9694 33.6102"
        stroke="#636363"
        strokeWidth="0.210533"
      />
      <path d="M29.1138 0V33.4645" stroke="#636363" strokeWidth="0.210533" />
      <path
        d="M58.1584 17.0479L29.1138 33.4644"
        stroke="#636363"
        strokeWidth="0.210533"
      />
      <path
        d="M0.0693359 50.5124L29.114 33.4644"
        stroke="#636363"
        strokeWidth="0.210533"
      />
      <path
        d="M29.1138 66.9289V33.4644"
        stroke="#636363"
        strokeWidth="0.210533"
      />
      <path
        d="M58.1584 50.5124L29.1138 33.4644"
        stroke="#636363"
        strokeWidth="0.210533"
      />

      {/* Radar Chart - Single shape that morphs and grows from center */}
      <polygon
        className="radar-shape-morph"
        fill="#FD9CFF"
        fillOpacity="0.6"
        stroke="#FD9CFF"
        strokeWidth="0.5"
        strokeLinejoin="round"
      >
        <animate
          attributeName="points"
          dur="8s"
          repeatCount="indefinite"
          values="
            29,30 32,32 32,34 29,36 26,34 26,32;
            29,24 34,27 35,33 29,37 23,33 22,27;
            29,14 43,24 41,38 29,46 17,38 15,24;
            29,8 50,20 54,41 29,56 8,43 5,22;
            29,3 48,18 56,40 29,62 3,45 2,19;
            29,30 32,32 32,34 29,36 26,34 26,32
          "
          keyTimes="0; 0.2; 0.4; 0.6; 0.8; 1"
          calcMode="spline"
          keySplines="0.4 0 0.2 1; 0.4 0 0.2 1; 0.4 0 0.2 1; 0.4 0 0.2 1; 0.4 0 0.2 1"
        />
        <animate
          attributeName="fill"
          dur="8s"
          repeatCount="indefinite"
          values="#FD9CFF; #6366F1; #06B6D4; #10B981; #FD9CFF"
          keyTimes="0; 0.25; 0.5; 0.75; 1"
        />
        <animate
          attributeName="stroke"
          dur="8s"
          repeatCount="indefinite"
          values="#FD9CFF; #6366F1; #06B6D4; #10B981; #FD9CFF"
          keyTimes="0; 0.25; 0.5; 0.75; 1"
        />
      </polygon>
    </svg>
  );
};

export const IssueRadar = () => {
  return (
    <svg
      width="106"
      height="106"
      viewBox="0 0 106 106"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle
        cx="52.8349"
        cy="52.8349"
        r="52.7523"
        stroke="#636363"
        strokeWidth="0.165109"
      />
      <circle
        cx="52.6682"
        cy="52.6698"
        r="47.799"
        stroke="#636363"
        strokeWidth="0.165109"
      />
      <circle
        cx="52.67"
        cy="52.6697"
        r="42.8458"
        stroke="#636363"
        strokeWidth="0.165109"
      />
      <circle
        cx="52.6704"
        cy="52.6698"
        r="37.8925"
        stroke="#636363"
        strokeWidth="0.165109"
      />
      <circle
        cx="52.6683"
        cy="52.6696"
        r="32.9392"
        stroke="#636363"
        strokeWidth="0.165109"
      />
      <circle
        cx="52.6701"
        cy="52.6697"
        r="27.986"
        stroke="#636363"
        strokeWidth="0.165109"
      />
      <circle
        cx="52.6699"
        cy="52.6697"
        r="23.0327"
        stroke="#636363"
        strokeWidth="0.165109"
      />
      <circle
        cx="52.6693"
        cy="52.6698"
        r="18.0794"
        stroke="#636363"
        strokeWidth="0.165109"
      />
      <circle
        cx="52.6682"
        cy="52.6699"
        r="13.1262"
        stroke="#636363"
        strokeWidth="0.165109"
      />
      <circle
        cx="52.6695"
        cy="52.6692"
        r="8.17244"
        stroke="#636363"
        strokeWidth="0.165109"
      />
      <path
        className="animate-spin-slow origin-center"
        d="M99.2982 31.5638C103.61 41.089 104.901 51.7062 102.997 61.987C101.094 72.2679 96.0878 81.7192 88.6522 89.0698L52.6686 52.6697L99.2982 31.5638Z"
        fill="#D0E8FF"
        fillOpacity="0.7"
      />
      <path
        className="animate-spin-slow-reverse origin-center"
        d="M82.7558 39.0617C80.1424 33.2833 75.9203 28.3797 70.5941 24.9369C65.2679 21.4942 59.063 19.658 52.7211 19.6479L52.6683 52.6696L82.7558 39.0617Z"
        fill="#FEAEAE"
        fillOpacity="0.7"
      />
      <path
        className="animate-spin-slow origin-center"
        d="M38.3426 56.6173C38.9964 58.9901 40.2294 61.1633 41.9307 62.9417C43.632 64.7202 45.7485 66.0482 48.0899 66.8066L52.6684 52.6697L38.3426 56.6173Z"
        fill="#A9F4D0"
        fillOpacity="0.7"
      />
      <path
        className="animate-spin-slow-reverse origin-center"
        d="M46.8324 46.8321C45.7919 47.8726 45.0484 49.1723 44.679 50.5967C44.3095 52.0211 44.3275 53.5183 44.7311 54.9334L52.6695 52.6692L46.8324 46.8321Z"
        fill="#9A89FF"
        fillOpacity="0.7"
      />
      <path
        className="animate-spin-slow origin-center"
        d="M52.668 41.112C51.1502 41.112 49.6473 41.411 48.2451 41.9918C46.8428 42.5726 45.5687 43.424 44.4955 44.4972L52.668 52.6697V41.112Z"
        fill="#FDD09F"
        fillOpacity="0.7"
      />
      <path
        className="animate-spin-slow-reverse origin-center"
        d="M49.1088 63.6652C51.1217 64.317 53.2749 64.4037 55.3336 63.916C57.3924 63.4283 59.2778 62.3848 60.7843 60.8993L52.6694 52.6697L49.1088 63.6652Z"
        fill="#FBE38E"
        fillOpacity="0.7"
      />
      {/* Radar Points - synced with spinning segments */}
      {/* Point for blue segment (animate-spin-slow: 20s) */}
      <g className="radar-point-blue">
        <circle cx="10" cy="70" r="4" fill="#8C8CFF" />
        <circle cx="10" cy="70" r="2" fill="#1313F2" />
      </g>
      {/* Point for red/pink segment (animate-spin-slow-reverse: 25s) */}
      <g className="radar-point-red">
        <circle cx="68" cy="32" r="4" fill="#FF8C8C" />
        <circle cx="68" cy="32" r="2" fill="#F21313" />
      </g>
    </svg>
  );
};

export const IssueRadarMobile = () => {
  return (
    <svg
      width="67"
      height="67"
      viewBox="0 0 67 67"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle
        cx="33.3602"
        cy="33.3602"
        r="33.3081"
        stroke="#636363"
        strokeWidth="0.104251"
      />
      <path
        className="animate-spin-slow origin-center"
        d="M62.6975 19.9295C65.4198 25.9438 66.2348 32.6475 65.0331 39.1389C63.8313 45.6303 60.6704 51.5979 55.9756 56.2391L33.2554 33.256L62.6975 19.9295Z"
        fill="#D0E8FF"
        fillOpacity="0.7"
      />
      <path
        className="animate-spin-slow-reverse origin-center"
        d="M52.2523 24.6638C50.6022 21.0152 47.9363 17.9191 44.5734 15.7453C41.2104 13.5716 37.2926 12.4122 33.2883 12.4058L33.2549 33.2559L52.2523 24.6638Z"
        fill="#FEAEAE"
        fillOpacity="0.7"
      />
      <path
        className="animate-spin-slow origin-center"
        d="M24.2097 35.7484C24.6225 37.2466 25.401 38.6188 26.4753 39.7417C27.5495 40.8646 28.8858 41.7032 30.3642 42.182L33.2551 33.2559L24.2097 35.7484Z"
        fill="#A9F4D0"
        fillOpacity="0.7"
      />
      <path
        className="animate-spin-slow-reverse origin-center"
        d="M29.5701 29.57C28.9131 30.227 28.4437 31.0476 28.2104 31.947C27.9771 32.8463 27.9885 33.7917 28.2433 34.6852L33.2557 33.2556L29.5701 29.57Z"
        fill="#9A89FF"
        fillOpacity="0.7"
      />
      <path
        className="animate-spin-slow origin-center"
        d="M33.2546 25.9583C32.2962 25.9583 31.3473 26.1471 30.4619 26.5138C29.5765 26.8805 28.7721 27.4181 28.0944 28.0957L33.2546 33.2559V25.9583Z"
        fill="#FDD09F"
        fillOpacity="0.7"
      />
      <path
        className="animate-spin-slow-reverse origin-center"
        d="M31.0077 40.1985C32.2786 40.6101 33.6381 40.6648 34.938 40.3569C36.2379 40.0489 37.4284 39.3901 38.3796 38.4521L33.2558 33.2559L31.0077 40.1985Z"
        fill="#FBE38E"
        fillOpacity="0.7"
      />
      {/* Radar Points - synced with spinning segments */}
      {/* Point for blue segment (animate-spin-slow: 20s) */}
      <g className="radar-point-blue">
        <circle cx="6" cy="44" r="2.5" fill="#8C8CFF" />
        <circle cx="6" cy="44" r="1.25" fill="#1313F2" />
      </g>
      {/* Point for red/pink segment (animate-spin-slow-reverse: 25s) */}
      <g className="radar-point-red">
        <circle cx="43" cy="20" r="2.5" fill="#FF8C8C" />
        <circle cx="43" cy="20" r="1.25" fill="#F21313" />
      </g>
    </svg>
  );
};

export const RadarPoint = () => {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="6" cy="6" r="6" fill="#FF8C8C" />
      <circle cx="6" cy="6" r="3" fill="#F21313" />
    </svg>
  );
};

export const UpBalloon = () => {
  return (
    <svg
      className="animate-popup origin-bottom"
      width="76"
      height="22"
      viewBox="0 0 76 22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M0.016284 20.2897C1.96889 21.0929 3.74241 20.3614 4.38509 19.8952L4.69718 18.1515C4.11464 18.1477 2.88432 17.9936 2.62344 17.4068C2.23739 19.4968 0.457255 20.2028 0.016284 20.2897Z"
        fill="#E8EAFF"
      />
      <rect
        width="74"
        height="20"
        rx="4"
        transform="matrix(-1 0 0 1 75.8165 0)"
        fill="#E8EAFF"
      />
    </svg>
  );
};

export const UpBalloonMobile = () => {
  return (
    <svg
      className="animate-popup origin-bottom"
      width="53"
      height="15"
      viewBox="0 0 53 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M0.016284 20.2897C1.96889 21.0929 3.74241 20.3614 4.38509 19.8952L4.69718 18.1515C4.11464 18.1477 2.88432 17.9936 2.62344 17.4068C2.23739 19.4968 0.457255 20.2028 0.016284 20.2897Z"
        fill="#E8EAFF"
      />
      <rect
        width="74"
        height="20"
        rx="4"
        transform="matrix(-1 0 0 1 75.8165 0)"
        fill="#E8EAFF"
      />
    </svg>
  );
};

export const MiddleBalloon = () => {
  return (
    <svg
      className="animate-popup origin-bottom"
      style={{ animationDelay: '0.2s', opacity: 0 }}
      width="74"
      height="20"
      viewBox="0 0 74 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M75.8002 20.2897C73.8476 21.0929 72.0741 20.3614 71.4314 19.8952L71.1193 18.1515C71.7019 18.1477 72.9322 17.9936 73.1931 17.4068C73.5791 19.4968 75.3593 20.2028 75.8002 20.2897Z"
        fill="#747CC5"
      />
      <rect width="74" height="20" rx="4" fill="#747CC5" />
    </svg>
  );
};

export const MiddleBalloonMobile = () => {
  return (
    <svg
      className="animate-popup origin-bottom"
      style={{ animationDelay: '0.2s', opacity: 0 }}
      width="53"
      height="14"
      viewBox="0 0 53 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M75.8002 20.2897C73.8476 21.0929 72.0741 20.3614 71.4314 19.8952L71.1193 18.1515C71.7019 18.1477 72.9322 17.9936 73.1931 17.4068C73.5791 19.4968 75.3593 20.2028 75.8002 20.2897Z"
        fill="#747CC5"
      />
      <rect width="74" height="20" rx="4" fill="#747CC5" />
    </svg>
  );
};

export const DownBalloon = () => {
  return (
    <svg
      className="animate-popup origin-bottom"
      style={{ animationDelay: '0.4s', opacity: 0 }}
      width="77"
      height="31"
      viewBox="0 0 77 31"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M0.199756 30.2896C2.15236 31.0929 3.92588 30.3613 4.56856 29.8952L4.88065 28.1514C4.29811 28.1477 3.0678 27.9935 2.80691 27.4068C2.42086 29.4968 0.640727 30.2028 0.199756 30.2896Z"
        fill="#E8EAFF"
      />
      <rect
        width="74"
        height="30"
        rx="4"
        transform="matrix(-1 0 0 1 76.1836 0)"
        fill="#E8EAFF"
      />
    </svg>
  );
};

export const DownBalloonMobile = () => {
  return (
    <svg
      className="animate-popup origin-bottom"
      style={{ animationDelay: '0.4s', opacity: 0 }}
      width="53"
      height="20"
      viewBox="0 0 53 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M0.199756 30.2896C2.15236 31.0929 3.92588 30.3613 4.56856 29.8952L4.88065 28.1514C4.29811 28.1477 3.0678 27.9935 2.80691 27.4068C2.42086 29.4968 0.640727 30.2028 0.199756 30.2896Z"
        fill="#E8EAFF"
      />
      <rect
        width="74"
        height="30"
        rx="4"
        transform="matrix(-1 0 0 1 76.1836 0)"
        fill="#E8EAFF"
      />
    </svg>
  );
};

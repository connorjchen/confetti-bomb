type Props = {
  color: string;
  size: number;
  border?: boolean;
};

function ColorCircle({ color, size, border }: Props) {
  return (
    <svg height={size} width={size}>
      <circle
        cx={size / 2}
        cy={size / 2}
        r={size / 2 - 5}
        fill={color}
        stroke={border ? "black" : "none"}
        strokeWidth={border ? "1" : "0"}
      />
    </svg>
  );
}

export default ColorCircle;

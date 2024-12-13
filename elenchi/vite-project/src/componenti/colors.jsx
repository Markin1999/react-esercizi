import Color from "./color";

export default function Colors({ arrayColor }) {
  return (
    <ul>
      {arrayColor.map((color, index) => {
        return <Color key={index} color={color} />;
      })}
    </ul>
  );
}

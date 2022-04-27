import React, { CSSProperties, FC } from "react";

interface Props {
  type: "large" | "small";
  title: string;
}

const largeStyle: CSSProperties = {
  fontSize: "2em",
  color: "red",
};

const smallStyle: CSSProperties = {
  fontSize: "0.5em",
  color: "green",
};

const styleMapper: Record<"small" | "large", CSSProperties> = {
  small: smallStyle,
  large: largeStyle,
};

const Title: FC<Props> = (props) => {
  const { title, type } = props;

  return <p style={styleMapper[type]}>{title}</p>;
};

export default Title;

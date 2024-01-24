import { ButtonSpace } from "./ButtonStyled";

export function Button({ type, text, onclick }) {
  return (
    <ButtonSpace onClick={onclick} type={type}>
      {text}
    </ButtonSpace>
  );
}

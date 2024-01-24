import React from "react";
import loading from "../../../public/bouncing-circles.svg";
import { LoaderContainer, LoaderItem } from "./LoaderStyled";

export default function Loader() {
  return (
    <LoaderContainer>
      <LoaderItem src={loading} alt="" />
    </LoaderContainer>
  );
}

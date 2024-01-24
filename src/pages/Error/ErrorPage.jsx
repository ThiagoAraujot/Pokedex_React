import { Link, useRouteError } from "react-router-dom";
import Pikachu404 from "../../images/Pikachu-404.png";
import { ContainerError, InfoError, Space } from "./ErrorPageStyled";

export default function ErrorPage() {
  const error = useRouteError();
  console.log(error);

  return (
    <ContainerError id="error-page">
      <Space>
        <InfoError>
          <h1>Oops!</h1>
          <p>Sorry, an unexpected error has occurred</p>
          <p>
            <i>{error.statusText || error.message}</i>
          </p>
          <Link to="/">
            <button>
              Back to Home
              <i className="bi bi-box-arrow-right"></i>
            </button>
          </Link>
        </InfoError>

        <img src={Pikachu404} alt="" />
      </Space>
    </ContainerError>
  );
}

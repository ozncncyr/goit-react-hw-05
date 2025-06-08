import "./NotFoundPage.css";
import { useNavigate } from "react-router-dom";

const ErrorNavigation = () => {
  const navigation = useNavigate();

  const handleClick = () => navigation("/");
  return (
    <div className="btnWrap">
      <button onClick={handleClick} className="btn">
        {" "}
        Return to Home{" "}
      </button>
    </div>
  );
};

const NotFoundPage = () => {
  return (
    <div className="container">
      <div class="face">
        <div class="band">
          <div class="red"></div>
          <div class="white"></div>
          <div class="blue"></div>
        </div>
        <div class="eyes"></div>
        <div class="dimples"></div>
        <div class="mouth"></div>
      </div>

      <h1 className="error">Oops! Something went wrong!</h1>
      <ErrorNavigation />
    </div>
  );
};

export default NotFoundPage;

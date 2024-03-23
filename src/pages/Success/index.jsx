import "./Success.scss";
import { Button } from "../../components";
import confirmImg from "../../assets/images/confirm.png";

export const Success = () => {
  return (
    <div className="success__page__container">
      <img src={confirmImg} alt="Confirmed" />
      <h1>Success!</h1>
      <p>Your purchase is on the way.</p>
      <Button to="/" variant="black">
        Back to shop
      </Button>
    </div>
  );
};

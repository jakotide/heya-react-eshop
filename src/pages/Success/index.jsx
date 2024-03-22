import "./Success.scss";
import { Button } from "../../components";

export const Success = () =>  {
    return (
        <div className="success__page__container">
            <h1>Success!</h1>
            <p>Your purchase is on the way.</p>
            <Button to="/">Back to shop</Button>
        </div>
    )
}
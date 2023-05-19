import { useNavigate } from "react-router-dom";

export const Apple = () => {

    const Navigate = useNavigate();

    const onHomePageButtonClick = () => {
        Navigate("/");
    };


    return (
    <div>
        <div><h2>Welcome to Apple page</h2></div>

        <button onClick={onHomePageButtonClick}>Navigate to HomePage</button>
    </div>
)};
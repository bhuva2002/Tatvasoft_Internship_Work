import { useNavigate } from "react-router-dom";
import Button from '@mui/material/Button';

export const Apple = () => {

    const Navigate = useNavigate();

    const onHomePageButtonClick = () => {
        Navigate("/");
        alert("You have clicked on button")
    };


    return (
    <div>
        <div><h2>Welcome to Apple page</h2></div>
        <Button variant="contained" onClick={onHomePageButtonClick}>Navigate to HomePage</Button>
        {/* <button onClick={onHomePageButtonClick}>Navigate to HomePage</button> */}
    </div>
)};
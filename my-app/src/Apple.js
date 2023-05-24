import { useNavigate } from "react-router-dom";
import Button from '@mui/material/Button';
import { useState } from "react";
import TextField from '@mui/material/TextField';
import { Avatar } from "@mui/material";
import Popover from '@mui/material/Popover';
import LogoutIcon from '@mui/icons-material/Logout';
import { Formik } from "formik";
import * as Yup from "yup";

export const Apple = () => {
    // const [name, setName] = useState("");
    // const [email, setEmail] = useState("");
    const [open, setOpen] = useState(false);
    const [anchorEl, setAnchorEl] = useState(null);

    const Navigate = useNavigate();

    const initialValues ={
        name: "",
        email: "",
    };

    const validationSchema = Yup.object().shape({
        name: Yup.string().min(3, "Please enter atleast 3 character").required(),
        email: Yup.string().email("Please enter a valid email address").required(),
    });

    const onFormSubmit = (values) => {
        console.log("on form submit",values);
        // Navigate("/");
        alert("Form submitted");
    };

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
        setOpen(true);
    };

    const handleClose = () => {
        setAnchorEl(null);
        setOpen(false);
      };

    return (
    <div>
        <div><h2>Welcome to Apple page</h2></div>

        <div
            style={{
            display: "flex",
            justifyContent: "flex-end",
            cursor: "pointer",
            }}
        >

            <div 
                onClick={handleClick}  
                style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "flex-end",
                    columnGap: 5,
                    cursor: "pointer"
                }}
            >
                <Avatar sx={{ bgcolor: "black" }}>YB</Avatar>   
            </div>
        </div>

        <div style={{
            flexDirection: "column",
            rowGap: 10,
            display: "flex",
            padding: 5,
        }}>
            <Formik 
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={onFormSubmit}
            >

            {({value, errors, touched, isSubmitting, handleChange, handleBlur, handleSubmit}) => (
                <form onSubmit={handleSubmit}>
                
                <div
                    style={{
                    display: "flex",
                    flexDirection: "column",
                    marginBottom: 5,
                    }}
                >
                    <TextField label="Name" name="name" variant="outlined" id="name" type="text" onChange={handleChange} onBlur={handleBlur} />
                    {touched.name && (
                        <span
                            style={{
                            padding: 5,
                            color: "red",
                            fontSize: 16,
                            fontWeight: 500,
                            }}
                        >
                            {errors.name}
                        </span>
                    )}
                </div>
                
                <div
                    style={{
                    display: "flex",
                    flexDirection: "column",
                    marginBottom: 5,
                    }}
                >
                    <TextField label="Email" name="email" variant="outlined" id="email" type="email" onChange={handleChange} onBlur={handleBlur} />
                    {touched.email && (
                    <span
                        style={{
                        padding: 5,
                        color: "red",
                        fontSize: 16,
                        fontWeight: 500,
                        }}
                    >
                        {errors.email}
                    </span>
                    )}
                </div>
    
                <Button variant="contained" type="submit">Submit</Button>
                {/* <button onClick={onHomePageButtonClick}>Navigate to HomePage</button> */}
                </form>
            )}
            
            </Formik>

        </div>
        
        <Popover 
        open={open}
        anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'right',
        }}
        transformOrigin={{
            vertical: 'top',
            horizontal: 'left',
        }}
        anchorEl={anchorEl}
        onClose={handleClose}
        >
        <div style={{
            padding: 5
        }}>
        {/* <Button variant="contained" onClick={onHomePageButtonClick}> */}
             <div>Yash Bhuva</div><br/>
             {/* <LogoutIcon style={{cursor:"pointer"}} onClick={onHomePageButtonClick} /> */}
        {/* </Button> */}
        </div>
        </Popover>

    </div>
)};

import React from "react";
import "./Button.scss";
import MUIButton from '@mui/material/Button';
export interface ButtonProps {
    label: string;
}

const Button = (props: ButtonProps) => {
    return <MUIButton variant="text">{props.label}</MUIButton>;
};

export default Button;
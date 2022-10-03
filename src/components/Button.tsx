import React, { useState } from "react";

interface props {
    text: string;
    onClick: any;
    tipPercent: number;
}

const Button: React.FC<props> = ({ text, onClick, tipPercent }) => {
    return (
        <button
            onClick={(e) => {
                onClick(e, text);
            }}
            className={`w-[30%] py-2 rounded-md bg-veryDarkCyan hover:bg-opacity-60 ${
                text === tipPercent.toString() + "%" ? "bg-primary text-veryDarkCyan" : null
            }`}
        >
            {text}
        </button>
    );
};

export default Button;

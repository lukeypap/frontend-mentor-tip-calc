import React from "react";

const TipCalculator = () => {
    return (
        <div className="md:w-[60vw] md:h-[50vh] bg-white rounded-2xl flex">
            <div className="w-full flex justify-center items-center bg-gray-400 m-6 rounded-2xl mr-3">
                <div>Details</div>
            </div>
            <div className="w-full flex justify-center items-center bg-veryDarkCyan m-6 rounded-2xl ml-3">
                <div>Display</div>
            </div>
        </div>
    );
};

export default TipCalculator;

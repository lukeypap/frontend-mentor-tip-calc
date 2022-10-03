import React, { useEffect, useState } from "react";
import dollarIcon from "../assets/icon-dollar.svg";
import personIcon from "../assets/icon-person.svg";
import Button from "./Button";

const TipCalculator = () => {
    const [bill, setBill] = useState(0);
    const [tipPercent, setTipPercent] = useState(0);
    const [people, setPeople] = useState(1);
    const [total, setTotal] = useState(0);
    const [selected, setSelected] = useState("");
    const [tipAmount, setTipAmount] = useState(0);

    const handleBillChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        e.preventDefault();
        if (e.target.value === "") {
            setBill(0);
        } else {
            setBill(parseFloat(e.target.value));
        }
    };

    const handlePeopleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        e.preventDefault();
        if (e.target.value === "") {
            setPeople(0);
        } else {
            setPeople(parseInt(e.target.value));
        }
    };

    const handleOnClick = (e: React.ChangeEvent<HTMLButtonElement>, percent: string) => {
        e.preventDefault();
        setTipPercent(parseInt(percent));
    };

    const calculateTotal = (people: number, tipPercent: number, bill: number) => {
        if (tipPercent === NaN || people === NaN || bill === NaN) {
            return;
        }
        if (tipPercent === 0) {
            setTotal(bill / people);
            setTipAmount(0);
        } else {
            const totalPerPerson = bill * (tipPercent / 100);
            setTotal((bill + totalPerPerson) / people);
            setTipAmount(totalPerPerson / people);
        }
    };

    const handleReset = () => {
        setBill(0);
        setTipPercent(0);
        setPeople(1);
        setSelected(0);
    };

    useEffect(() => {
        calculateTotal(people, tipPercent, bill);
    }, [bill, people, tipPercent]);

    return (
        <div className="md:w-[60vw] md:h-[55vh] bg-white rounded-2xl flex text-darkGrayishCyan">
            <div className="w-full flex m-6 rounded-2xl text-sm">
                <form className="flex flex-col space-y-8 m-2 w-full">
                    <div className="flex flex-col space-y-1">
                        <label htmlFor="bill">Bill</label>
                        <span className="flex items-center">
                            <img src={dollarIcon} className="absolute ml-3" />
                            <input
                                type="text"
                                id="bill"
                                dir="rtl"
                                value={bill}
                                onChange={(e) => handleBillChange(e)}
                                className="pr-3 w-full text-lg bg-veryLightGrayishCyan text-veryDarkCyan p-1 focus:outline-primary rounded-md"
                            />
                        </span>
                    </div>
                    <div className="flex flex-col text-white space-y-3 w-full">
                        <h3 className="text-darkGrayishCyan">Select Tip %</h3>
                        <div className="text-xl w-full space-x-3">
                            <Button text="5%" onClick={handleOnClick} tipPercent={tipPercent} />
                            <Button text="10%" onClick={handleOnClick} tipPercent={tipPercent} />
                            <Button text="15%" onClick={handleOnClick} tipPercent={tipPercent} />
                        </div>
                        <div className="space-x-3 text-xl">
                            <Button text="25%" onClick={handleOnClick} tipPercent={tipPercent} />
                            <Button text="50%" onClick={handleOnClick} tipPercent={tipPercent} />
                            <button className="w-[30%] py-2 rounded-md bg-veryLightGrayishCyan text-darkGrayishCyan">
                                Custom
                            </button>
                        </div>
                    </div>
                    <div className="flex flex-col space-y-1">
                        <label htmlFor="bill">Number of People</label>
                        <span className="flex items-center">
                            <img src={personIcon} className="absolute ml-3" />
                            <input
                                type="text"
                                id="bill"
                                dir="rtl"
                                value={people}
                                onChange={(e) => handlePeopleChange(e)}
                                className="pr-3 w-full text-lg bg-veryLightGrayishCyan text-veryDarkCyan p-1 focus:outline-primary rounded-md"
                            />
                        </span>
                    </div>
                </form>
            </div>

            <div className="w-full flex bg-veryDarkCyan m-6 rounded-2xl ml-3">
                <div className="flex flex-col w-full p-8 space-y-8">
                    <div className="flex justify-between">
                        <div className="flex flex-col">
                            <h3 className="text-white">Tip Amount</h3>
                            <p className="text-sm">/ person</p>
                        </div>
                        <h1 className="text-3xl text-primary">
                            {" "}
                            {tipAmount.toLocaleString("en-US", {
                                style: "currency",
                                currency: "USD",
                            })}
                        </h1>
                    </div>
                    <div className="flex justify-between">
                        <div className="flex flex-col">
                            <h3 className="text-white">Total</h3>
                            <p className="text-sm">/ person</p>
                        </div>
                        <h1 className="text-3xl text-primary">
                            {total.toLocaleString("en-US", { style: "currency", currency: "USD" })}
                        </h1>
                    </div>
                    <div className="w-full h-full flex items-end">
                        <button
                            onClick={handleReset}
                            className="bg-primary px-6 py-2 rounded-md w-full text-veryDarkCyan"
                        >
                            RESET
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TipCalculator;

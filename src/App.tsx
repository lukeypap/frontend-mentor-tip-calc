import TipCalculator from "./components/TipCalculator";

function App() {
    return (
        <div className="h-screen w-screen flex flex-col justify-center items-center bg-lightGrayishCyan font-spaceMono">
            <span className="font-semibold text-veryDarkCyan">
                <h1>S P L I</h1>
                <h1>T T E R</h1>
            </span>
            <TipCalculator />
        </div>
    );
}

export default App;

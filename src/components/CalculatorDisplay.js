import '../style.css';

function CalculatorDisplay({value = ""}){
    return (
        <label>
            <input className="display" type="text" value={value} readOnly/>
        </label>
    );
}

export default CalculatorDisplay;
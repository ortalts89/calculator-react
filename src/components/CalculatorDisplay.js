
function CalculatorDisplay({value = ""}){
    return (
        <label>
            <input className="disaply" type="text" value={value} readOnly/>
        </label>
    );
}

export default CalculatorDisplay;
function CalculatorButton ({text, onSelected}){
    return (
        <button onClick={onSelected}>{text}</button>
    )
}

export default CalculatorButton;
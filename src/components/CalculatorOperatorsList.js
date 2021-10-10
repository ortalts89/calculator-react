import CalculatorButtonsList from "./CalculatorButtonsList";

function CalculatorOperatorsList ({onSelected}){
    const signs = ["+", "-", "/", "*", "=", "AC"];
    return (
        <CalculatorButtonsList onSelected={onSelected} signs={signs} className='operators' />
    )
}

export default CalculatorOperatorsList;
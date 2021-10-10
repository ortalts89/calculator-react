import CalculatorButtonsList from "./CalculatorButtonsList";

function CalculatorNumbersList ({onSelected}) {
    const signs = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "."];
    return (
        <CalculatorButtonsList onSelected={onSelected} signs={signs} className='digits' />
    )
}

export default CalculatorNumbersList;
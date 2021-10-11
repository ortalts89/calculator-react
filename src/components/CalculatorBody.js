import CalculatorOperatorsList from "./CalculatorOperatorsList";
import CalculatorNumbersList from "./CalculatorNumbersList";
import '../style.css';

function CalculatorBody({onOperatorSelected, onNumberSelected}){
    return (
        <div className="calculator-body">
            <CalculatorOperatorsList onSelected={onOperatorSelected}/>
            <CalculatorNumbersList onSelected={onNumberSelected}/>
        </div>
    );
}

export default CalculatorBody;
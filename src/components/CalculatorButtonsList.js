import CalculatorButton from "./CalculatorButton";

function CalculatorButtonsList ({onSelected, signs, className}){
    //const currentOperator = undefined;
    return (
        <div className={className}>
            {
              signs.map((sign) =><CalculatorButton key={sign} text={sign} onSelected={() => {
                  onSelected(sign);
              }}/>)
            }
        </div>
    )
}

export default CalculatorButtonsList;
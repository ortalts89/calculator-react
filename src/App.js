import CalculatorBody from "./components/CalculatorBody";
import CalculatorDisplay from "./components/CalculatorDisplay";
import {useState} from 'react';

function App() {
  const [overrideDisplay, setOverride] = useState(false);
  const [displayValue, setDisplayValue] = useState("");
  const [position, setPosition] = useState(0);
  const [inputNumbers, updateInputNumbers] = useState(["",""]);
  const [previousSign, updateSign] = useState("")

  function UpdateDisplayInput(digit){
    if(!overrideDisplay){
      setDisplayValue(displayValue + digit);
    }
    else{
      setDisplayValue(digit);
      setOverride(false);
    }
  }

  function UpdateCurrentNumber(){
    let newArr = inputNumbers;
    newArr[position] = displayValue;
    updateInputNumbers(newArr);
    setPosition(1);
  }

  function ShowResults(){
    setDisplayValue(inputNumbers[0])
  }

  function calculate(sign){
    switch(sign){
        case "+":
            inputNumbers[0] = (+inputNumbers[0] + +inputNumbers[1]).toString();
            break;
        case "-":
            inputNumbers[0] = (+inputNumbers[0] - +inputNumbers[1]).toString();
            break;
        case "*":
            inputNumbers[0] = (+inputNumbers[0] * +inputNumbers[1]).toString();
            break;
        case "/":
            inputNumbers[0] = (+inputNumbers[0] / +inputNumbers[1]).toString();
            break;
        default:
            break;
    }
    let newArr = inputNumbers;
    newArr[1] = "";
    updateInputNumbers(newArr);
}

  function Clear(){
    setOverride(false);
    setDisplayValue ("");
    setPosition(0);
    updateInputNumbers(["",""])
  }

  return (
    <div className="calculator">
      <CalculatorDisplay value={displayValue}/>
      <CalculatorBody 
        onOperatorSelected={(sign) => {
          UpdateCurrentNumber();
          if(sign === "AC"){
            Clear()
          }
          else if(sign === "="){
            if(inputNumbers[1] !== ""){
              calculate(previousSign);
              ShowResults();
            }
          }
          else if(inputNumbers[1] !== "" && sign !== undefined){
            calculate(sign);
            ShowResults()
          };
          updateSign(sign);
          setOverride(true);
        }}
        onNumberSelected={(digit) => {
          if(previousSign === "="){
            Clear();
          }
          UpdateDisplayInput(digit)}}
       />
    </div>
  );
}

export default App;

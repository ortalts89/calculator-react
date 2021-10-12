import CalculatorBody from "./components/CalculatorBody";
import CalculatorDisplay from "./components/CalculatorDisplay";
import {useState, useCallback} from 'react';

function App() {
  const [overrideDisplay, setOverride] = useState(false);
  const [displayValue, setDisplayValue] = useState("");
  const [position, setPosition] = useState(0);
  const [inputNumbers, updateInputNumbers] = useState(["",""]);
  const [previousSign, updateCurrentSign] = useState("")

  const updateDisplayInput = useCallback(function updateDisplayInput(digit){
    if(!overrideDisplay){
      setDisplayValue(displayValue + digit);
    }
    else{
      setDisplayValue(digit);
      setOverride(false);
    }
  },[displayValue,overrideDisplay]);

  const saveCurrentNumber = useCallback(function saveCurrentNumber(){
    let newArr = inputNumbers;
    newArr[position] = displayValue;
    updateInputNumbers(newArr);
    setPosition(1);
  }, [inputNumbers, displayValue])

  const showResults = useCallback(function showResults(){
    setDisplayValue(inputNumbers[0])
  }, [inputNumbers])

  const calculate = useCallback(function calculate(sign){
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
}, [inputNumbers])

  const clear = useCallback(function clear(){
    setOverride(false);
    setDisplayValue ("");
    setPosition(0);
    updateInputNumbers(["",""])
    updateCurrentSign("");
  },[])

  const onOperatorSelected = useCallback(
    (sign) => {
      saveCurrentNumber();
      if(sign === "AC"){
        clear()
      }
      else if(sign === "="){
        if(inputNumbers[1] !== ""){
          calculate(previousSign);
          showResults();
          setPosition(0);
        }
      }
      else if(inputNumbers[1] !== "" && sign !== undefined){
        calculate(sign);
        showResults()
      };
      updateCurrentSign(sign);
      setOverride(true);
    }, [inputNumbers, previousSign]
  );

  const onNumberSelected = useCallback(
    (digit) => {
      if(previousSign === "="){
        clear();
      }
      updateDisplayInput(digit)}
  );

  return (
    <div className="calculator">
      <CalculatorDisplay value={displayValue}/>
      <CalculatorBody 
        onOperatorSelected={onOperatorSelected}
        onNumberSelected={onNumberSelected}
       />
    </div>
  );
}

export default App;

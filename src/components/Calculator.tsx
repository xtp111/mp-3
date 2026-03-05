import useCalculator from '../hooks/useCalculator';

function Calculator() {
  const {
    inputA,
    inputB,
    result,
    isNegative,
    setInputA,
    setInputB,
    add,
    subtract,
    multiply,
    divide,
    power,
    clear
  } = useCalculator();

  return (
    <div className="calculator">
      <form onSubmit={(e) => e.preventDefault()}>
        <label htmlFor="a">Calculator</label>
        <input
          type="text"
          id="a"
          value={inputA}
          onChange={(e) => setInputA(e.target.value)}
        />
        <label htmlFor="b">Calculator</label>
        <input
          type="text"
          id="b"
          value={inputB}
          onChange={(e) => setInputB(e.target.value)}
        />
        <div className="buttons">
          <button type="button" onClick={add}>+</button>
          <button type="button" onClick={subtract}>-</button>
          <button type="button" onClick={multiply}>*</button>
          <button type="button" onClick={divide}>/</button>
          <button type="button" onClick={power}>**</button>
          <button type="button" onClick={clear}>Clear</button>
        </div>
        <h3 id="output" className={isNegative ? 'negative' : ''}>
          {result}
        </h3>
      </form>
    </div>
  );
}

export default Calculator;

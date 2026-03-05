import { useState, useCallback } from 'react';

function useCalculator() {
  const [inputA, setInputA] = useState('');
  const [inputB, setInputB] = useState('');
  const [result, setResult] = useState<number | string>('');
  const [isNegative, setIsNegative] = useState(false);

  const updateResult = useCallback((value: number) => {
    setResult(value);
    setIsNegative(value < 0);
  }, []);

  const getValues = useCallback(() => {
    const x = Number(inputA);
    const y = Number(inputB);
    return [x, y];
  }, [inputA, inputB]);

  const add = useCallback(() => {
    const [x, y] = getValues();
    updateResult(x + y);
  }, [getValues, updateResult]);

  const subtract = useCallback(() => {
    const [x, y] = getValues();
    updateResult(x - y);
  }, [getValues, updateResult]);

  const multiply = useCallback(() => {
    const [x, y] = getValues();
    updateResult(x * y);
  }, [getValues, updateResult]);

  const divide = useCallback(() => {
    const [x, y] = getValues();
    updateResult(x / y);
  }, [getValues, updateResult]);

  const power = useCallback(() => {
    const [x, y] = getValues();
    let r = 1;
    for (let i = 0; i < y; i++) {
      r *= x;
    }
    updateResult(r);
  }, [getValues, updateResult]);

  const clear = useCallback(() => {
    setInputA('');
    setInputB('');
    setResult('');
    setIsNegative(false);
  }, []);

  return {
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
  };
}

export default useCalculator;

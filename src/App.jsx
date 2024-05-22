import { useState } from "react";

export default function App() {
  const [result, setResult] = useState(0);
  const [amount, setAmount] = useState("");

  const handlePlus = () => {
    // input값은 string 이기 때문에 형변환 필요
    setResult((prev) => prev + Number(amount));
  };

  const handleMinus = () => {
    setResult((prev) => prev - Number(amount));
  };

  const handleReset = () => {
    setResult(0);
  };

  return (
    <div>
      <h1>덧셈과 뺄셈이 가능한 앱 만들기</h1>
      <div>
        <input
          onChange={(e) => setAmount(e.target.value)}
          type="number"
          value={amount}
        />
        만큼을
        <button onClick={handlePlus}>더할게요</button>
        <button onClick={handleMinus}>뺄게요</button>
        <button onClick={handleReset}>초기화</button>
      </div>
      <hr />
      <div>
        <h3>결과</h3>
        <p>{result}</p>
      </div>
    </div>
  );
}

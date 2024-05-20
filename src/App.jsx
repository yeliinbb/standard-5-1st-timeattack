import { useState } from "react";

export default function App() {
  const [value, setValue] = useState(0);

  const plusBtn = () => {
    setValue((prev) => prev + 5);
  };

  const minusBtn = () => {
    setValue((prev) => prev - 5);
  };

  const resetBtn = () => {
    setValue(0);
  };

  return (
    <div>
      <h1>덧셈과 뺄셈이 가능한 앱 만들기</h1>
      <div>
        <input
          onChange={(e) => setValue(e.target.value)}
          type="number"
          value={value}
        />
        만큼을
        <button onClick={plusBtn}>더할게요</button>
        <button onClick={minusBtn}>뺄게요</button>
        <button onClick={resetBtn}>초기화</button>
      </div>
      <hr />
      <div>
        <h3>결과</h3>
        <p>{0 + value}</p>
      </div>
    </div>
  );
}

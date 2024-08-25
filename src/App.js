import { useState } from "react";
import "./index.css";

export default function App() {
  return <Main />;
}

function Main() {
  const [bill, setBill] = useState("");
  const [percent1, setpercent1] = useState(0);
  const [percent2, setpercent2] = useState(0);

  const tip = (bill * (percent1 + percent2)) / 2 / 100;

  function handleReset() {
    setBill("");
    setpercent1(0);
    setpercent2(0);
  }
  return (
    <div>
      <Matninput bill={bill} setBill={setBill} />
      <Matnselect percent={percent1} onsetpercent={setpercent1}>
        How did you like the service?
      </Matnselect>
      <Matnselect percent={percent2} onsetpercent={setpercent2}>
        How did your friend like the service?
      </Matnselect>
      {bill > 0 && (
        <>
          <Pay bill={bill} tip={tip} />
          <Reset handleReset={handleReset} />
        </>
      )}
    </div>
  );
}
function Matninput({ bill, setBill }) {
  return (
    <div>
      <label>How much was the bill?</label>
      <input
        type="text"
        placeholder="Bill value"
        value={bill}
        onChange={(e) => setBill(Number(e.target.value))}
      />
    </div>
  );
}
function Matnselect({ children, percent, onsetpercent }) {
  return (
    <div>
      {/* به جای اینکه دوبار براش فاکنشن بنویسم یدونه مینویسیم و از چیلدرن کمک میگیریم */}
      <label>{children}</label>
      <select
        value={percent}
        onChange={(e) => onsetpercent(Number(e.target.value))}
      >
        <option value="0">Dissatisfied (0%)</option>
        <option value="5">It was okay (5%)</option>
        <option value="10">It was good (10%)</option>
        <option value="20">Abssolutely amazing (20%)</option>
      </select>
    </div>
  );
}
function Pay({ bill, tip }) {
  return (
    <div>
      <h3>
        You pay ${bill + tip} (${bill} + ${tip} tip)
      </h3>
    </div>
  );
}
function Reset({ handleReset }) {
  return <button onClick={handleReset}>Reset</button>;
}

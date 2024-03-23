import { useState } from "react";

export default function Counter({item,initialValue}) {
  const [count, setCount] = useState(initialValue);

  return (
      <div className="hbox space-between mt20">
        <h3 className="paragraph">{item} counter: {count}</h3>
        <button className="button" onClick={() => setCount(count + 1)}>
          add {item}
        </button>
      </div>
  );
}
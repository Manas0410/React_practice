import { useEffect, useState } from "react";

export default function Interview() {
  const [giveNum, setgiveNum] = useState(0);

  const [arr, setarr] = useState([]);
  const [sum, setsum] = useState(0);

  const addinput = (e) => {
    setgiveNum(e.target.value);
    console.log(giveNum, "inner");
  };

  const setvaluefn = (e, index) => {
    let i = index;

    let newarr = [...arr];
    newarr[i].value = Number(e.target.value);
    console.log(newarr, i, "mydata");
    setarr(newarr);
  };
  useEffect(() => {
    let newsum = 0;
    for (let i = 0; i < arr.length; i++) {
      newsum += arr[i].value;
      setsum(newsum);
    }
  }, [arr]);
  useEffect(() => {
    const newarr = [];
    for (let i = 0; i < giveNum; i++) {
      let obj = { value: 0 };
      newarr.push(obj);
    }
    setarr(newarr);
  }, [giveNum]);

  console.log(arr, sum);

  return (
    <div>
      <input type="number" value={giveNum} onChange={addinput} />
      <div>now fill the input fiels to get sum</div>
      {arr.map((elm, index) => {
        return (
          <input
            key={index}
            value={elm.value}
            onChange={(e) => {
              setvaluefn(e, index);
            }}
          />
        );
      })}
      <div>{sum}</div>
    </div>
  );
}

import { useState } from 'react'
import './App.css'
import Daikichi2 from './Daikichi2';
import Chukichi from './Chukichi';
import Kichi from './Kichi';
import Kyou from './Kyou';
import Box from './Box';





function App() {
  // 左が管理する箱、右がその箱を更新するおまじない
  // const [count, setCount] = useState(0)
  const [num, setNum] = useState(0);

  const [countA, setCountA] = useState(0);

  const [countB, setCountB] = useState(0);

  const [countC, setCountC] = useState(0);

  const [countD, setCountD] = useState(0);

  const handleClick = () => {
    const random = Math.floor(Math.random() * 4) + 1;


    // こっちの書き方もあるけど、上の方がいいみたい！
    // if (random == 1) {
    //   setCountA(countA + 1);
    // } else if (random == 2) {
    //   setCountB(countB + 1);
    // } else if (random == 3) {
    //   setCountC(countC + 1);
    // } else {
    //   setCountD(countD + 1);
    // }

    if (random == 1) {
      setCountA((prevCountA) => prevCountA + 1);
    } else if (random == 2) {
      setCountB((prevCountB) => prevCountB + 1);
    } else if (random == 3) {
      setCountC((prevCountC) => prevCountC + 1);
    } else {
      setCountD((prevCountD) => prevCountD + 1);
    }

    setNum(random);

  };
  const resetNum = () => {
    setNum(0);
    setCountA(0);
    setCountB(0);
    setCountC(0);
    setCountD(0);
  };

  return (
    <>
      <p>おみくじ</p>
      <button onClick={handleClick}>クリックしてね</button>


      <hr />


      {num === 0 && <div><Box /></div>}
      {num === 1 && <div><Daikichi2 /></div>}
      {num === 2 && <div><Chukichi /></div>}
      {num === 3 && <div><Kichi /></div>}
      {num === 4 && <div><Kyou /></div>}

      <div className='result'>
        <p>大吉:{countA}回　</p>
        <p>中吉:{countB}回　</p>
        <p>吉:  {countC}回　</p>
        <p>凶:  {countD}回　</p>
      </div>
      <hr />
      <button onClick={resetNum}>リセット</button>
    </>
  );
}

export default App

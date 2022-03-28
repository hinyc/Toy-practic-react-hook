import React, { useEffect, useMemo, useState } from 'react';

const UseMemo2 = () => {
  const [random, setRandom] = useState(0);
  const [count, setCount] = useState(0);

  const fruits = useMemo(() => ['apple', 'banana', 'melon', 'peach', 'mango'], []);

  const fruit = useMemo(
    () => ({
      fruit: fruits[random],
    }),
    [fruits, random]
  );

  const shuffleHandler = () => {
    setRandom(Math.floor(Math.random() * 5));
  };

  const countUp = () => {
    setCount(count + 1);
  };

  useEffect(() => {
    console.log(`useEffect 실행`);
  }, [fruit]);

  return (
    <div>
      <p>Current Fruit : {fruit.fruit}</p>
      <p>Count : {count}</p>
      <button onClick={shuffleHandler}>shuffle!</button>
      <button onClick={countUp}>countUp!</button>
    </div>
  );
};

export default UseMemo2;

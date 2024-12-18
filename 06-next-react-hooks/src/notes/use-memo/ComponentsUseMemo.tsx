import { useMemo, useState } from "react";

export default function ComponentsUseMemo() {
  const [score, setScore] = useState(0);
  // const [isScoreEven, setIsScoreEven] = useState(null);
  //   const useStateResult = useState(0)
  //   const score = useStateResult(0);
  //   const setScore = useStateResult(1);

  const [age, setAge] = useState(0);
  function isScoreEven() {
    let i = 0;
    while (i < 200000000) {
      i++;
    }
    return score % 2 === 0;
  }

  const scoreCheck = useMemo(isScoreEven, [score]);

  return (
    <>
      <h2>{score}</h2>
      <h2>{scoreCheck ? "Even" : "Odd"}</h2>
      <button onClick={() => setScore(score + 1)}>Increment Score</button>
      <hr />
      <h2>{age}</h2>
      <button onClick={() => setAge(age + 1)}>Increment Age</button>
    </>
  );
}

import React, { useState } from 'react';

function FizzBuzz() {
  const [n, setN] = useState(0);
  const [numbers, setNumbers] = useState([]);

  React.useEffect(() => {
    let arr = [];
    for (let i = 1; i <= n; i++) {
      if (i % 3 === 0 && i % 5 === 0) {
        arr.push('FizzBuzz');
      } else if (i % 3 === 0) {
        arr.push('Fizz');
      } else if (i % 5 === 0) {
        arr.push('Buzz');
      } else {
        arr.push(i);
      }
    }
    setNumbers(arr);
  }, [n]);

  return (
    <div>
      <p>Contoh Code FIZZ - BUZZ</p>

      <input type="number" value={n} onChange={(e) => setN(e.target.value)} />
      <ul>
        {numbers.map((number, index) => (
          <li key={index}>{number}</li>
        ))}
      </ul>
    </div>
  );
}

export default FizzBuzz;

const readline = require('readline');
const math = require('./math');

test('Somma gli interi 2 + 2 e restituisce 4', () => {
  const risultato = math.sum(2, 2);  // somma e memorizza in una variabile
  expect(risultato).toBe(4);         // verifica il risultato
});

test('Somma gli interi 3 + 5 e restituisce 8', () => {
    const risultato = math.sum(3, 5);  // somma e memorizza in una variabile
    expect(risultato).toBe(7);         // verifica il risultato
  });

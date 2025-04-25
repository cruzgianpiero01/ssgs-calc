const readline = require('readline');
const calc = require('./math');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

console.log('Benvenuto scegli una delle operazioni disponibili: sum, diff, multiply, divide, pow');

rl.question('Scegli un\'operazione: ', (operation) => {
  rl.question('Inserisci il primo numero: ', (a) => {
    rl.question('Inserisci il secondo numero: ', (b) => {
      const num1 = parseFloat(a);
      const num2 = parseFloat(b);

      try {
        let result;

        switch (operation) {
          case 'sum':
            result = calc.sum(num1, num2);
            break;
          case 'diff':
            result = calc.diff(num1, num2);
            break;
          case 'multiply':
            result = calc.multiply(num1, num2);
            break;
          case 'divide':
            result = calc.divide(num1, num2);
            break;
            case 'pow':
            result = calc.pow(num1, num2);
            break;
          default:
            console.log('Operazione non riconosciuta.');
            rl.close();
            return;
        }

        console.log(`Risultato: ${result}`);
        console.log('Grazie per aver usato il calcolatore!');
      } catch (err) {
        console.error('Errore:', err.message);
      }

      rl.close();
    });
  });
});
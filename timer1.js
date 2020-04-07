var timerValues = process.argv.slice(2);

console.log(`The beep will sound in ${timerValues} seconds`);

let timerBeep = function(values) {
  for (let value of values) {
    if (value > 0 && !isNaN(value)) {
      value = value * 1000 
      setTimeout(() => {
        process.stdout.write('\x07');
      }, value) 
    }
  }
}

timerBeep(timerValues);


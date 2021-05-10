const encodeDecode = (chunk, options) => {
  const n = 26; // alphabet letters amount
  let steps = Number(options.shift);
  if (steps > n) {
    steps = steps - Math.trunc(steps/n) * n
  }
  if (steps < 0) return encodeDecode(chunk, steps + 26);
  return chunk
    .split('')
    .map(c => {
      if (c.match(/[A-Za-z]/i)) {
        const code = c.charCodeAt();
        let shift = 0;
        if (code >= 65 && code <= 90) {
          shift = 65;
        } else if (code >= 97 && code <= 122) {
          shift = shift = 97;
        }
        if (options.action === 'encode') {
          return String.fromCharCode(((code - shift + steps) % n) + shift);
        }
        if (options.action === 'decode') {
          return String.fromCharCode(((code - shift - steps + n) % n) + shift);
        }
      }
      return c;
    })
    .join('');
};

module.exports = {
  encodeDecode
};

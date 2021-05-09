const encodeDecode = (chunk, options) => {
  const steps = Number(options.shift);
  const n = 26;  // alphabet letters amount
  if (steps < 0) return encodeDecode(chunk, steps + 26);
  return chunk
    .split('')
    .map(c => {
      if (c.match(/[A-Za-z]/i)) {
        const code = c.charCodeAt();
        const shift =
          code >= 65 && code <= 90 ? 65 : code >= 97 && code <= 122 ? 97 : 0;
        if (options.action === 'encode') {
          return String.fromCharCode(
            ((code - shift + steps) % n) + shift
          );
        }
        if (options.action === 'decode') {
          return String.fromCharCode(
            ((code - shift - steps + n) % n) + shift
          );
        }
      }
      return c;
    })
    .join('');
};

module.exports = {
  encodeDecode
};

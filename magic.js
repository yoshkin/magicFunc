const magic = (...numbers) => {
  const sum = numbers.reduce((acc, curr) => acc + curr, 0);
  const innerMagic = (...rest) => magic(sum, ...rest);
  innerMagic.valueOf = () => sum;
  return innerMagic;
};

export default magic;

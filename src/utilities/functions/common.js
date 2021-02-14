export const generateNumberCollectionsByModule = (modulo,max=255) => {
  const arr = [];
  let i = 0;
  while (i <= max) {
    if (i % modulo === 0) {
      arr.push(i);
    }
    i++;
  }
  return arr;
};

const splitArrayIntoChunks = (array,size) =>{
  const chunk = [];
  for (let i = 0; i < array.length; i++) {
    const last = chunk[chunk.length - 1];
    if (!last || last.length === size) {
      chunk.push([array[i]]);
    } else {
      last.push(array[i]);
    }
  }
  return chunk;
}

export const getAllRGBColors = () => {
  const RGB = {
    r: 0,
    g: 0,
    b: 0
  };

  const redColor = generateNumberCollectionsByModule(8,255);
  const greenColor =  generateNumberCollectionsByModule(8,255);
  const blueColor =  generateNumberCollectionsByModule(8,255);

  const rgbArr = [];
  //generate all color combinations
  redColor.forEach((r)=> {
    const newRGB_R = Object.assign({}, RGB);
    newRGB_R.r = r;
    greenColor.forEach((g) => {
      const newRGB_G = Object.assign({}, newRGB_R)
      newRGB_G.g = g;
      blueColor.forEach((b) => {
        const newRGB_B = Object.assign({}, newRGB_G)
        newRGB_B.b = b;
        rgbArr.push(newRGB_B);
      })
    });
  });

  return splitArrayIntoChunks(rgbArr,128);
}
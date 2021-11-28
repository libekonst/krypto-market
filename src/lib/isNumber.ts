export const isNumber = (input: any): input is number =>
  typeof input === 'number' && !isNaN(input);

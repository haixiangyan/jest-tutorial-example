import sum from "./sum";

const strNumSum = (strNum1: string, strNum2: string) => {
  const num1 = Number(strNum1);
  const num2 = Number(strNum2);

  const result = sum(num1, num2);

  return isNaN(result) ? 0 : result;
};

export default strNumSum;

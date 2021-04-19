export {};

let bmi: (height: number, weight: number, printable?: boolean) => number = (
  height: number,
  weight: number,
  printable?: boolean,
): number => {
  const bmi: number = weight / (height * height);
  if (printable) {
    console.log(bmi);
  }
  return bmi;
};

bmi(1.78, 86, false);

// bimi(身長, 体重, console.log出力するかどうかデフォルトはしない)

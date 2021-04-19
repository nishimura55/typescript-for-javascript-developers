export {};

function returnNothing(): void {
  console.log('i dont return anything');
}

const returnNothing2 = (): void => {
  console.log('i dont return anything');
}

console.log(returnNothing2());

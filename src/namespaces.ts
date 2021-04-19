export {};

namespace Japanese {
  export namespace Tokyo {
    export class Person {
      constructor(public name: string) {}
    }
  }
  export namespace Osaka {
    export class Person {
      constructor(public name: string) {}
    }
  }
}


namespace English {
  export class Person {
    constructor(
      public firstName: string,
      public middleName: string,
      public lastName: string
    ) {}
  }
}

let me = new Japanese.Tokyo.Person('はむ');
let meOsaka = new Japanese.Osaka.Person('はむやん');
console.log(me.name);
console.log(meOsaka.name)

let he = new English.Person('jhon', 'mechel', 'fox');
console.log(he);

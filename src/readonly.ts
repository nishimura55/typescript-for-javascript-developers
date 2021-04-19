export {};

type Profile = {
  name: string;
  age: number;
};

const me: Profile = {
  name: 'Ham',
  age: 43,
};

me.age++;

console.log(me);

type PersonalDataType = Readonly<Profile>;

const friend: PersonalDataType = {
  name: 'Shigeru',
  age: 40,
};

type YomitoriSenyo<T> = {
  readonly [P in keyof T]: T[P];
};

const friend2: YomitoriSenyo<Profile> = {
  name: 'hoge',
  age: 20,
};

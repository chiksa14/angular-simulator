interface IUser {
  id: number;
  name: string;
  age: number;
  city: string;
  jobs?: string;
  experience?: number;
}

const users: IUser[] = [
  {
    id: 1,
    name: 'Alice',
    age: 25,
    city: 'Москва',
    jobs: 'developer',
    experience: 10
  },
  {
    id: 2,
    name: 'Bob',
    age: 30,
    city: 'Астрахань',
    jobs: 'doctor',
    experience: 5
  },
  {
    id: 3,
    name: 'Charlie',
    age: 35,
    city: 'Волгоград',
    jobs: 'military',
    experience: 1
  },
  {
    id: 4,
    name: 'Diana',
    age: 28,
    city: 'Краснодар',
    jobs: 'teacher',
    experience: 3
  },
  {
    id: 5,
    name: 'Eve',
    age: 22,
    city: 'Воронеж',
    jobs: 'manager',
    experience: 2
  }
];

const eligibleUsers: IUser[] = users.filter(user => user.age > 25);
console.log('Пользователи старше 25:', eligibleUsers );

interface IKid extends IUser {
  schoolClass: number;
  schoolName: string;
}

let uploadStatus: "loading" | "success" | "error";

type TextFormat = 'uppercase' | 'lowercase' | 'capitalize';

function calc(a: number, b: number): number{
  return a + b;
}

calc(1, 2)

function formatText(text: string, format: TextFormat): string {
  switch(format) {
    case 'uppercase':
      return text.toUpperCase();
    case 'lowercase':
      return text.toLowerCase();
    case 'capitalize':
      return text.charAt(0).toUpperCase() + text.slice(1).toLowerCase();
    default:
      return text;
  }
}

function removeChar(str: string, charToRemove: string): string {
  return str.split(charToRemove).join('');
}
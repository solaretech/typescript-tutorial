// const person: {
//   name: string;
//   age: number;
//   hobbies: string[];
//   role: [number, string];
// } = {
//   name: 'Kazuki',
//   age: 33,
//   hobbies: ['Sports', 'Cooking'],
//   role: [2, 'author'],
// };

enum Role {
  ADMIN = 5,
  READ_ONLY,
  AUTHOR
}

const person = {
    name: 'Kazuki',
    age: 33,
    hobbies: ['Sports', 'Cooking'],
    role: ADMIN,
  };
  

// person.role.push('admin');
// person.role[1] = 'aaa';

let favoriteActivities: string[];
favoriteActivities = ['Sports'];

for (const hobby of person.hobbies){
  console.log(hobby.toUpperCase());
}


if (person.role === Role.ADMIN) {
  console.log('管理者ユーザー')
}
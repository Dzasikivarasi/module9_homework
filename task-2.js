// Вам дана заготовка и результат, который вы должны получить. 
// Ваша задача — написать код, который будет преобразовывать JSON в JS-объект и выводить его в консоль.

const jsonString = `
{
 "list": [
  {
   "name": "Petr",
   "age": "20",
   "prof": "mechanic"
  },
  {
   "name": "Vova",
   "age": "60",
   "prof": "pilot"
  }
 ]
}`;

const data = JSON.parse(jsonString)
const specialistNodes = data.list;
const specialists = [];

specialistNodes.forEach(specialistNode => {
    specialists.push({
        name: specialistNode.name,
        age: Number(specialistNode.age),
        prof: specialistNode.prof,
    })
})

const result = {
    list: specialists
};

console.log(result);

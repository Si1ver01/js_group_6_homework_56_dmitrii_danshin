const tasks = [
  {
    id: 234,
    title: "Create user registration API",
    timeSpent: 4,
    category: "Backend",
    type: "task"
  },

  {
    id: 235,
    title: "Create user registration UI",
    timeSpent: 8,
    category: "Frontend",
    type: "task"
  },

  {
    id: 237,
    title: "User sign-in via Google UI",
    timeSpent: 3.5,
    category: "Frontend",
    type: "task"
  },

  {
    id: 238,
    title: "User sign-in via Google API",
    timeSpent: 5,
    category: "Backend",
    type: "task"
  },

  {
    id: 241,
    title: "Fix account linking",
    timeSpent: 5,
    category: "Backend",
    type: "bug"
  },

  {
    id: 250,
    title: "Fix wrong time created on new record",
    timeSpent: 1,
    category: "Backend",
    type: "bug"
  },

  {
    id: 262,
    title: "Fix sign-in failed messages",
    timeSpent: 2,
    category: "Frontend",
    type: "bug"
  }
];

const totalTimeFront = tasks.filter(task => task.category === 'Frontend').reduce((sum,task) => sum + task.timeSpent,0);
console.log(`Общее количество времени, затраченное на работу над задачами из категории 'Frontend' - ${totalTimeFront}`);
const totalTimeBug = tasks.filter(task => task.type === 'bug').reduce((sum,task) => sum + task.timeSpent,0)
console.log(`Общее количество времени, затраченное на работу над задачами типа 'bug' - ${totalTimeBug}`);
const countUI = tasks.filter(task => task.title.includes('UI')).length;
console.log(`Количество задач, имеющих в названии слово "UI" - ${countUI}`);
const countCategoryTask = tasks.reduce((total,task) =>  Object.assign(total,total[task.category]++),{Frontend: 0, Backend: 0})
console.log(countCategoryTask);
const time = tasks.filter(elem => elem.timeSpent > 4).map(elem => ({title : elem.title,category : elem.category}))
console.log(time);
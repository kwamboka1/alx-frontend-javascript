/* director interface */
interface DirectorInterface {
  workFromHome(): string;
  getCoffeebreak(): string;
  workDirectorTasks(): string;
}
/* teacher interface */
interface TeacherInterface {
  workFromHome(): string;
  getCoffeebreak(): string;
  workTeacherTasks(): string;
}

/* director class */
class Director implements DirectorInterface {

  workFromHome(): string {
    return 'Working from home'
  }

  getToWork(): string {
    return 'Geting a coffee break'
    
  }

  workDirectorTasks(): string {
    return 'Getting to director tasks'
  }
}

/* teacher class */
class Teacher implements TeacherInterface {
  workFromHome(): string {
    return 'Cannot work from home';
  }

  getCoffeebreak(): string {
    return 'Cannot have a break';
  }

  workTeacherTasks(): string {
    return 'Getting to work';
  }
}

function createEmployee(salary: number | string): Director | Teacher {
  if (typeof(salary) === 'number' && salary < 500) {
    return new Teacher();
  }
  else {
    return new Director();
  }
}
console.log(createEmployee(200));

console.log(createEmployee(1000));

console.log(createEmployee('$500'));

/* isDirector function */
const isDirector = (employee: Teacher | Director): boolean => employee instanceof Director;

/* executeWork function */
const executeWork = (employee: Teacher | Director): string => {
  let res;
  isDirector(employee) ? res = (employee as Director).workDirectorTasks() : res = (employee as Teacher).workTeacherTasks();
  return res;
};
console.log(executeWork(createEmployee(200)));
console.log(executeWork(createEmployee(1000)));


/* string literals */
type Subjects = 'Math' | 'Chemistry';

function teachClass (todayClass: string) {
  if (todayClass === 'Math') {
    return 'Teaching Math';
  }
  else {
    return 'Teaching Chemistry';
  }    
}

console.log(teachClass('Math'));
console.log(teachClass('chemistry'));

/// <reference path="Teacher.ts" />
namespace Subjects {
  export interface Teacher {
    experienceTeachingC?: number;
  }

  class Cpp extends Subject {
    /* method */
    getRequirements(): string {
      return 'Here is the list of requirements for Cpp';
    }
    /* method */
    getAvailableTeacher(): string {
      const check = this.teacher.experienceTeachingC;
      if (typeof check === 'number' && check > 0) {
        return 'Available Teacher: ${this.teacher.firstName}';
      } else {
        return 'No available teacher';
      }
    }
  }
}

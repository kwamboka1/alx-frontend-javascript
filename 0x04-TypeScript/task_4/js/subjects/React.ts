/// <reference path="Teacher.ts" />
namespace Subjects {
  export interface Teacher {
    experienceTeachingReact?: number;
  }

  class React extends Subject {
    /* method */
    getRequirements(): string {
      return 'Here is the list of requirements for React';
    }
    /* method */
    getAvailableTeacher(): string {
      const check = this.teacher.experienceTeachingReact;
      if (typeof check === 'number' && check > 0) {
        return 'Available Teacher: ${this.teacher.firstName}';
      } else {
        return 'No available teacher';
      }
    }
  }
}

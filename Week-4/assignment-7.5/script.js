class Person {
  constructor(name, age, gender, nationality) {
    this.name = name;
    this.age = age;
    this.gender = gender;
    this.nationality = nationality;
  }

  introduce() {
    return `My name is ${this.name}, I am ${this.age} old, I am ${this.gender}, and I am ${this.nationality}`;
  }
}

class Student extends Person {
  constructor(subject, name, age, gender, nationality) {
    super(name, age, gender, nationality);
    this.subject = subject;
  }
  study() {
    return `My name is ${this.name}, I am ${this.age} old, I am ${this.gender}, and I am ${this.nationality}. I am studying ${this.subject}`;
  }
}

const personInstance1 = new Person("Abd", 23, "Male", "Indian");
const personInstance2 = new Person("Sam", 23, "Male", "American");
const personInstance3 = new Person("Altman", 23, "Male", "American");
console.log(personInstance1.introduce());

const studentInstance = new Student("JavaScript", "Abd", 23, "Male", "Indian");
console.log(studentInstance.introduce());
console.log(studentInstance.study());

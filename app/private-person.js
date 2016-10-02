var map = new WeakMap();
export class Person {

  constructor(firstName, lastName) {
    map.set(this, {
      firstName: firstName,
      lastName: lastName
    });
  }

  greet(name) {
    return "Hello " + name + ". My name is " + map.get(this).firstName + "!"
  }

  get firstName() { return map.get(this).firstName; }

  get lastName() { return map.get(this).lastName; }

  static renamePerson(person, lastName) { map.get(person).lastName = lastName; }
}

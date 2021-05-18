class Employee {

    #firstName = 'unset';
    #lastName = 'unset';

    constructor(firstName, lastName) {
        this.#firstName = firstName;
        this.#lastName = lastName;
        Employee.prototype.toString = function() { return 'Pity the Foo'; }; // Why does this not work w/o .toString()?
    }

    setFirstName(firstName) { this.#firstName = firstName; }
    setLastName(lastName) { this.#lastName = lastName; }

    getFirstName() { return this.#firstName; }
    getLastName() { return this.#lastName; }
    getFullName() { return `${this.#firstName} ${this.#lastName}`; }

    getEmail() { return `${this.#firstName}.${this.#lastName}@company.com`.toLocaleLowerCase('de-DE'); }
    toString() { return `[Fullname: ${this.getFullName()} | Email: ${this.getEmail()}]`; }
}

employee1 = new Employee('Roger', 'Rabbit');
console.log(employee1.toString());      // Should work without .toString()! Why is that?
console.log(employee1.getFirstName());
console.log(employee1.getLastName());
console.log(employee1.getFullName());
console.log(employee1.getEmail());

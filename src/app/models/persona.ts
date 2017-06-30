export class Persona {
	private name: string;
	lastName: string;
	age: number;

	constructor(name1: string, lastName1: string) {
		this.name = name1;
		this.lastName = lastName1;
	}

	getNameAndAge(): string {
		return this.name + ' ' + this.age;
	}

	getName(): string {
		return this.name;
	}

	setName(palabra: string): void {
		this.name = palabra;
	}
}
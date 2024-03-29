class Persona {
	static countPersonObject = 0; //Atributo estatico
	email = 'Default value email'; //Atributo no estatico
  
	constructor(nombre, apellido) {
		this._nombre = nombre;
		this._apellido = apellido;
	}

	get nombre() {
		return this._nombre;
	}
	//6.2 Parte Set (Modificamos el atributo)

	set nombre(nombre) {
		this._nombre = nombre;
	}
	
	get apellido() {
		return this._apellido;
	}
	set apellido(apellido) {
		this._apellido = apellido;
	}

	nombreCompleto() {
		return this._nombre + ' ' + this._apellido;
	}

	toString() {
		return this.nombreCompleto();
	}
}

class Empleado extends Persona {
	//Clase hija
	constructor(nombre, apellido, departamento) {
		super(nombre, apellido);
		this._departamento = departamento;
	}

	get departamento() {
		return this._departamento;
	}

	set departamento(departamento) {
		this._departamento = this.departamento;
	}

	// Sobreescritura:
	nombreCompleto() {
		//return this.nombre+' '+this._apellido+', departamento: '+ this.departamento;
		return super.nombreCompleto() + ', ' + this._departamento;
	}
}


//Creamos objetos y los mostramos en consola:

let persona1 = new Persona("Martín", "Perez"); //Creamos el objeto "persona1".
//console.log(persona1.nombre); //llamamos al método get sin necesidad de usar ()
persona1.nombre = 'Juan Carlos';   //modificamos el valor con el metodo set
//console.log(persona1.nombre);
persona1.apellido = 'Rodriguez';   //Modificamos el atributo "apellido" con el metodo set
//console.log(persona1.apellido);    //Mostramos los cambios  para finalizar tarea asignada.
//console.log(persona1); //Mostramos objeto persona1

let persona2 = new Persona("Carlos","Lara"); //Creamos el objeto "persona2".
//console.log(persona2.nombre);
//persona2.nombre = 'Maria Laura';   
//console.log(persona2.nombre);
//console.log(persona2); //Mostramos objeto persona2

let empleado1 = new Empleado('Maria', 'Gimenez', 'Sistemas');
//console.log(empleado1);
console.log(empleado1.nombreCompleto()); 

//Object.prototype.toString Esta es la manenera de acceder a metodos y atributos de forma dinamica
console.log(empleado1.toString());
console.log(persona1.toString()); //referencia de la clase padre

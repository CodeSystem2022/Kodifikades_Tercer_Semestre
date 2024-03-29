class Persona{ //Definimos la clase. //Clase padre
    constructor(nombre, apellido){ //Creamos el método constructor.
        this._nombre = nombre; //Declaramos el atributo "nombre".
        this._apellido = apellido; //Declaramos el atributo "apellido".
    }
  
    
    get nombre(){
        return this._nombre;
    }
    //6.2 Parte Set (Modificamos el atributo)

    set nombre(nombre){
        this._nombre = nombre;
    }
    //Tarea Asignada
    get apellido(){
        return this._apellido;
    }
    set apellido(apellido){
        this._apellido = apellido;
    }
}

class Empleado extends Persona{
    constructor(nombre, apellido, departamento){
        super(nombre, apellido);
        this.departamento = departamento;
    }

	get departamento(){
		return this._departamento;
	}

	set departamento(departamento){
		this._departamento = departamento;
	}

}
//Creamos objetos y los mostramos en consola:

let persona1 = new Persona("Martín", "Perez"); 
console.log(persona1.nombre); 
persona1.nombre = 'Juan Carlos'; 
console.log(persona1.nombre);
persona1.apellido = 'Rodriguez';  
console.log(persona1.apellido);    
//console.log(persona1); 
let persona2 = new Persona("Carlos","Lara"); 
console.log(persona2.nombre);
persona2.nombre = 'Maria Laura';   
console.log(persona2.nombre);
//console.log(persona2);

let empleado1 = new Empleado('Maria', 'Gimenez', 'Sistemas');
console.log(empleado1);
console.log(empleado1.nombre); 

let persona = {
	nombre: 'Carlos',
	apellido: 'Perez',
	email: 'pepe@gmail',
	edad: 40,
	nombreCompleto: () => {
		return `${this.nombre} + ${this.apellido}`;
	},
};
console.log(persona.nombreCompleto());

const persona2 = new Object();
persona2.nombre = 'Lucas';
persona2.apellido = 'Ruiz';
console.log(persona2.nombre);
console.log(persona2.apellido);

for (const key in persona) {
	console.log(key);
	console.log(persona[k]);
}
persona.apellido = 'Chimuelo';
delete persona.apellido;
console.log(persona);

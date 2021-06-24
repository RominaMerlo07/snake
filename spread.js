let personas = [{
    id: 1,
    nombre: 'Maite',
    edad: 5,
}, ];

const updatePersona = (id) => {

    const idx = personas.findIndex((p) => p.id === id);

    const edad = 6;
    const nombre = 'Maite';

    if (idx >= 0) {

        personas[idx] = {...personas[idx], edad, nombre };
        return personas[idx];
    } else {
        return `La persona con id ${id} no existe`;
    }
}

console.log(updatePersona(1));
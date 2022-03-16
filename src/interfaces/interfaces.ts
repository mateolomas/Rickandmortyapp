export interface JugadorInfo {
    id:                number;
    idEquipo:          number;
    nombre:            string;
    apellido:          string;
    fechaNacimiento:   string;
    fechaInscripcion: string;
    goles:             number;
    imagenURL:         string;
    tarjetasAmarillas: number;
    tarjetasRojas:     number;
}

export interface EquipoInfo {

    id: number,
    nombre: string,
    imagenURL: string,
    fechaFundacion: string,
    ciudad: string,
    pais: string,
    idJugadores: number[]


}

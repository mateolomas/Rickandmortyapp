import type { NextApiRequest, NextApiResponse } from "next"
import jugadores from '../../data/jugadores';


type Data = {
        id: number,
        idEquipo: number,
        nombre: string,
        apellido: string,
        fechaNacimiento: string,
        fechaInscripcion: string,
        goles: number,
        imagenURL: string,
        tarjetasAmarillas: number,
        tarjetasRojas: number,
}



export default function handler(req: NextApiRequest, res: NextApiResponse<Data | Data[]>) {
    if(req.method === 'GET'){
        res.status(200).json(jugadores)
    }
    else if(req.method === 'POST'){
        const {id, 
            idEquipo, 
            nombre, 
            apellido, 
            fechaNacimiento, 
            fechaInscripcion, 
            goles, 
            imagenURL, 
            tarjetasAmarillas, tarjetasRojas} = req.body;
        const jugador = {
            id,
            idEquipo,
            nombre,
            apellido,
            fechaNacimiento,
            fechaInscripcion,
            goles,
            imagenURL,
            tarjetasAmarillas,
            tarjetasRojas,
        }
        jugadores.push(jugador);
        res.status(201).json(jugador)
    }
}



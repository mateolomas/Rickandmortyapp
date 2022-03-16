import type { NextApiRequest, NextApiResponse } from "next"
import equipos from '../../data/equipos';



type Data = {
    id: Number,
    nombre: String,
    imagenURL: String,
    fechaFundacion: String,
    ciudad: String,
    pais: String,
    idJugadores: Number[]
}




export default function handler(req: NextApiRequest, res: NextApiResponse<Data[]>) {
    res.status(200).json(equipos)
}



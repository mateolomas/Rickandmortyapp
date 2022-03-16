import Link from "next/link"
import styles from "./Navbar.module.css"



const Navbar = () => {
    return (
        <div className={styles.navbar}>
            <Link href="/admin/jugadores">
                <a>Jugadores</a>
            </Link>

            <Link href="/admin/equipos">
                <a>Equipos</a>
            </Link>
            <a>Partidos</a>
            <a>Tabla de Posiciones</a>
            <a>Estadisticas</a>
            <a>Calendario</a>
        </div>



    )
}

export default Navbar
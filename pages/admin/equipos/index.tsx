import React from 'react'
import { useFetch } from '../../../src/hooks/useFetch'
import { EquipoInfo } from '../../../src/interfaces/interfaces'
import styles from '../../../styles/Jugador.module.css'
import Layout from '../../../src/components/Layout/Layout'


const Equipos = () => {

    const { data, loading, error } = useFetch<EquipoInfo>('http://localhost:3000/api/equipo')



    return (
        <>
            <Layout >
                <h1>Equipos</h1>
                <div className={styles.cardcontainer}>
                    {loading && <p>Cargando...</p>}
                    {error && <p>Error</p>}
                    {data && data.map(equipo =>
                        <div key={equipo.id} className={styles.card}>
                            <div>
                                <h2>{equipo.nombre}</h2>
                                <p>{equipo.ciudad}</p>
                                <p>{equipo.fechaFundacion}</p>
                                <p>{equipo.pais}</p>
                            </div>
                        </div>
                    )}

                </div>
            </Layout>
        </>
    )
}

export default Equipos
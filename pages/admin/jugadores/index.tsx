import React from "react";
import { useState, useEffect } from 'react';
import { useFetch } from "../../../src/hooks/useFetch"
import { JugadorInfo } from '../../../src/interfaces/interfaces';
import styles from "../../../styles/Jugador.module.css"
import Layout from "../../../src/components/Layout/Layout"
import axios from "axios"
import { Formik, Form, ErrorMessage, Field } from "formik";
import usePost from "../../../src/hooks/usePost"

const defaultJugador: JugadorInfo = {
  id: new Date().getTime(),
  idEquipo: 0,
  nombre: "",
  apellido: "",
  goles: 0,
  fechaNacimiento: "",
  fechaInscripcion: "",
  imagenURL: "",
  tarjetasAmarillas: 0,
  tarjetasRojas: 0,
}

const Jugadores = () => {

  const { data, loading, error } = useFetch<JugadorInfo>(`http://localhost:3000/api/jugador`)
  const [jugador, setJugador] = useState<JugadorInfo>(defaultJugador);
  const [jugadoresData, setJugadoresData] = useState<JugadorInfo[]>(data);

  const { postData } = usePost<JugadorInfo>(`http://localhost:3000/api/jugador`)
  useEffect(() => {
    setJugadoresData(data)
  }, [data])



  const submitJugador = async (jugadorAux: JugadorInfo) => {

    const response = await postData(jugadorAux)
    console.log(response, "response")
    const dataJugador = response
    const newData = [...jugadoresData]
    if (dataJugador) {
      newData.push(dataJugador)
      setJugadoresData(newData)
      console.log(dataJugador, "data jugador ")
    }

  }



  return (<>
    <Layout >
      <h1>Jugadores</h1>
      {/* 
      <input
        type="text"
        value={jugador.nombre}
        onChange={e => setJugador({ ...jugador, nombre: e.target.value })}
      />
      <button onClick={submitJugador}>Agregar Jugador</button> */}
      <Formik
        onSubmit={(values, { resetForm }) => {
          resetForm();
          alert(JSON.stringify(values, null, 2));
          submitJugador(values);
        }}
        //validationSchema={jugadorValidation}
        initialValues={defaultJugador}
      >
        {({
          values, errors, touched, handleChange, handleBlur, handleSubmit,
        }) => (
          <Form>
            <div className={styles.field}>
              <label htmlFor="nombre">Nombre</label>
              <Field type="text" name="nombre" id="nombre" placeholder="Mateo Sebastian Lomas" />
              <ErrorMessage name="nombre" component={() => <div>{errors.nombre}</div>} />
            </div>
            <div className={styles.field}>
              <label htmlFor="apellido">Apellido</label>
              <Field type="text" name="apellido" id="apellido" placeholder="Mateo Sebastian Lomas" />
              <ErrorMessage name="apellido" component={() => <div>{errors.apellido}</div>} />
            </div>
            <div className={styles.field}>
              <label htmlFor="fechaNacimiento">Fecha de Nacimiento</label>
              <Field type="date" name="fechaNacimiento" id="fechaNacimiento" placeholder="12/12/1999" />
              <ErrorMessage name="fechaNacimiento" component={() => <div>{errors.fechaNacimiento}</div>} />
            </div>
            <div className={styles.field}>
              <label htmlFor="fechaInscripcion">Fecha de Inscripcion</label>
              <Field type="date" name="fechaInscripcion" id="fechaInscripcion" placeholder="12/12/1999" />
              <ErrorMessage name="fechaInscripcion" component={() => <div>{errors.fechaInscripcion}</div>} />
            </div>

            <div>
              <label htmlFor="goles">Goles</label>
              <Field type="number" name="goles" id="goles" placeholder="0" />
              <ErrorMessage name="goles" component={() => <div>{errors.goles}</div>} />
            </div>

            <div>
              <label htmlFor="tarjetasAmarillas">Tarjetas Amarillas</label>
              <Field type="number" name="tarjetasAmarillas" id="tarjetasAmarillas" placeholder="0" />
              <ErrorMessage name="tarjetasAmarillas" component={() => <div>{errors.tarjetasAmarillas}</div>} />
            </div>

            <div>
              <label htmlFor="tarjetasRojas">Tarjetas Rojas</label>
              <Field type="number" name="tarjetasRojas" id="tarjetasRojas" placeholder="0" />
              <ErrorMessage name="tarjetasRojas" component={() => <div>{errors.tarjetasRojas}</div>} />
            </div>

            <div>
              <label htmlFor="imagenURL">Imagen URL</label>
              <Field type="text " name="imagenURL" id="imagenURL" />
              <ErrorMessage name="imagenURL" component={() => <div>{errors.imagenURL}</div>} />
            </div>


            <button type="submit">Enviar</button>

          </Form>
        )}
      </Formik>









      <div className={styles.cardcontainer}>
        {loading && <p>Cargando...</p>}
        {error && <p>Error</p>}
        {jugadoresData && jugadoresData.map(jugador =>
          <div key={jugador.id} className={styles.card}>
            <div>
              <h2>{jugador.nombre}</h2>
              <p>{jugador.apellido}</p>
              <p>{jugador.goles}</p>
              <p>{jugador.fechaNacimiento}</p>
            </div>
          </div>
        )}

      </div>
    </Layout>
  </>

  )
}

export default Jugadores
import { useState } from 'react'

/*
NOMBRES Y APELLIDOS COMPLETOS
DOCUMENTO NACIONAL DE IDENTIDAD (DNI)
FECHA DE NACIMIENTO
CELULAR
DIRECCIÓN ACTUAL DE RESIDENCIA
CORREO ELECTRÓNICO (Para recibir sus notificaciones y resultados)
PRESTADOR (Obra social, prepaga, particular)
NUMERO DE AFILIADO

Adicionalmente: <-------------------------------------------------------------------(ESTO SE PUEDE HACER EN EL BACK TOCANDO LOS MODELOS)
FECHA DE CREACIÓN DE USUARIO (Registro automático)
NOMBRE DE QUIEN CREA EL USUARIO (Registro automático
EDAD (Calculada automáticamente)
*/

export const ClientForm = () => {
  const [userData, setUserData] = useState({
    nombres: '',
    apellidos: '',
    dni: '',
    fechaNacimiento: '',
    numCelular: '',
    direccion: '',
    correo: '',
    prestador: '',
    numAfiliado: ''
    /* fechaCreacion: new Date().toLocaleDateString(),  sino, que lo añadan desde al back a la DB usando los models. ej: usando el temp{} */
  })

  const [isRegistered, setRegister] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setUserData((prevData) => ({
      ...prevData,
      [name]: value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // dispatch al back
    setRegister(true)
    console.log(userData)
  }

  return (
    <section>
      <div>
        <h1>Formuario de creacion de usuario</h1>
        <p>
          Complete el siguiente formuario para registrarse correctamente. Todos
          los campos son obligatorios
        </p>
      </div>

      <form onSubmit={handleSubmit}>
        <label>
          Nombres:
          <input
            type='text'
            name='nombres'
            value={userData.nombres}
            onChange={handleChange}
            placeholder='Ejemplo: Fulano'
            required
          />
        </label>
        <label>
          Apellidos:
          <input
            type='text'
            name='apellidos'
            value={userData.apellidos}
            onChange={handleChange}
            placeholder='Ejemplo: DeTal'
            required
          />
        </label>
        <label>
          DNI:
          <input
            type='number'
            name='dni'
            value={userData.dni}
            onChange={handleChange}
            placeholder='Ejemplo: 12345678'
            required
          />
        </label>
        <label>
          Fecha de Nacimiento:
          <input
            type='date'
            name='fechaNacimiento'
            value={userData.fechaNacimiento}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Celular:
          <input
            type='tel'
            name='numCelular'
            value={userData.numCelular}
            onChange={handleChange}
            placeholder='Ejemplo: +541234567890'
            required
          />
        </label>
        <label>
          Dirección:
          <input
            type='text'
            name='direccion'
            value={userData.direccion}
            onChange={handleChange}
            placeholder='Ejemplo: Calle 123'
            required
          />
        </label>
        <label>
          Correo Electrónico:
          <input
            type='email'
            name='correo'
            value={userData.correo}
            onChange={handleChange}
            placeholder='Ejemplo: ejemplo@gmail.com'
            required
          />
        </label>
        <label>
          Prestador:
          <input
            type='text'
            name='prestador'
            value={userData.prestador}
            onChange={handleChange}
            placeholder='Ejemplo: Obra Social'
            required
          />
        </label>
        <label>
          Número de Afiliado:
          <input
            type='text'
            name='numAfiliado'
            value={userData.numAfiliado}
            onChange={handleChange}
            placeholder='Ejemplo: 12345'
            required
          />
        </label>

        <button type='submit'>Registrarse</button>

        {isRegistered && <h1>!USUARIO REGISTRADO¡</h1>}
      </form>
    </section>
  )
}

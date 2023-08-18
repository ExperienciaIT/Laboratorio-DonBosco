# LAC-1 - Employee Form

## <font color="#efadff">Secciones</font>

1. [🎯 Objetivos](#objetivos)
2. [📎 Pasos y Tareas a Desarrollar](#pasos-y-tareas-a-desarrollar)
3. [🧾 Casos de Prueba - Testing](#casos-de-prueba---testing)

## <font color="#efadff">Objetivos</font>

1. El formulario de creación de usuarios debe estar habilitado y solicitar la siguiente información obligatoria:

   - Nombres y apellidos completos del empleado.
   - Documento Nacional de Identidad (DNI) del empleado.
   - Cargo (rol) y área del laboratorio a la que pertenece el empleado.
   - Correo electrónico asociado al empleado.

2. La fecha de creación de usuario y el nombre del creador del usuario deben registrarse automáticamente en el sistema.

3. Después de completar el formulario, el empleado debe recibir un correo electrónico de confirmación de creación de usuario en la plataforma en la dirección de correo electrónico registrada.

4. El empleado debe poder acceder al enlace de habilitación de usuario proporcionado en el correo electrónico y asignar una clave de acceso segura que cumpla con los requisitos (mínimo 8 dígitos y no igual al DNI).

## <font color="#efadff">Pasos y Tareas a Desarrollar</font>

#### Campos obligatorios

- ✔ Nombres y apellidos
- ✔ DNI
- ✔ Cargo
- ✔ Área
- ✔ Correo electrónico

#### Adicionalmente

- ✔ Fecha de creacion de usuario (registro automatico)
- ✔ Nombre de quien crea el usuario (registro automatico)

#### Tareas

- ✔ Verificar que los campos obligatorios estén presentes en el formulario
- ✔ Validar que el campo de DNI acepte solo números y tenga un formato adecuado
- ✔ Confirmar que el campo de correo electrónico tenga un formato válido
- ✔ Mostrarle el resultado de la validación al cliente mediante mensajes
- Verificacion del formato de correo mediante regex
- ✔ Generar automaticamente un nombre de usuario y contraseña
- Enviar los datos al correo del nuevo empleado (Framework Resent - Necesidad de una API-KEY)
- Permitir la actualización de roles y detalles de usuario
- Control de inactivación de usuarios que ya no trabajan en el laboratorio

#### A tener en cuenta

- ✔ Validar la cantidad de caracteres mínima para cada campo
- ✔ Al crear el usuario mostrar mensaje de éxito o error en el mismo componente.
- Mediante un estado cambiar la funcionalidad del boton para que vuelva a cargar otro usuario

## <font color="#efadff">Casos de Prueba - Testing</font>

- ✔ Escenario de Prueba 1:

  > El sistema registra la información correctamente y muestra un mensaje de confirmación de la creación del usuario.

- ✔ Escenario de Prueba 2:

  > El sistema muestra un mensaje de error indicando los campos que faltan por completar.

- ✔ Escenario de Prueba 3:

  > El sistema muestra un mensaje de error indicando que el formato del DNI es incorrecto.

- ✔ Escenario de Prueba 4:

  > El sistema registra la información correctamente para los campos válidos, pero muestra un mensaje de advertencia indicando que el correo electrónico tiene un formato incorrecto.

- Escenario de Prueba 5:

  > El empleado recibe un correo electrónico de confirmación de creación de usuario en la plataforma, con la información de la fecha de creación y el nombre de quien realizó la creación.

- Escenario de Prueba 6:

  > El sistema muestra un mensaje de error indicando que el usuario ya ha sido creado.

- ✔ Escenario de Prueba 7:

  > Los campos de fecha de creación y nombre de quien creó el usuario están registrados automáticamente y son correctos.

- ✔ Escenario de Prueba 8:
  > El sistema registra correctamente el rol y el área del laboratorio asociados al usuario.

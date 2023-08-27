# LAC-3 - Client Form

## <font color="#efadff">Secciones</font>

1. [🎯 Objetivos](#objetivos)
2. [📎 Pasos y Tareas a Desarrollar](#pasos-y-tareas-a-desarrollar)

## <font color="#efadff">Objetivos</font>

1. Para la creación de los pacientes, se debe habilitar un formulario que solicite la siguiente información:

   - Nombres y apellidos completos.
   - Documento Nacional de Identidad (DNI).
   - Fecha de nacimiento.
   - Dirección actual de residencia.
   - Correo electrónico (Para recibir sus notificaciones y resultados).
   - Prestador (Obra social, prepaga o particular)
   - Número de afiliado

2. Adicionalmente (computo automático):

   - Fecha de creación de usuario.
   - Nombre de quien crea el usuario.
   - Edad.

## <font color="#efadff">Pasos y Tareas a Desarrollar</font>

#### Campos obligatorios

- ✔ Nombres y apellidos
- ✔ DNI
- ✔ Fecha de nacimientto
- ✔ Dirección actual de residencia
- ✔ Correo electrónico
- ✔ Prestador
- ✔ Número de afiliado

#### Adicionalmente

- ✔ Fecha de creacion de usuario (registro automatico)
- ✔ Nombre de quien crea el usuario (registro automatico)
- ✔ Edad (calculo automático)

#### Tareas

- ✔ Verificar que los campos obligatorios estén presentes en el formulario
- ✔ Validar que el campo de DNI acepte solo números y tenga un formato adecuado
- ✔ Confirmar que el campo de correo electrónico tenga un formato válido
- ✔ Mostrarle el resultado de la validación al cliente mediante mensajes
- ✔ Verificacion del formato de correo mediante regex

#### A tener en cuenta

- ✔ Validar la cantidad de caracteres mínima para cada campo
- ✔ Al crear el usuario mostrar mensaje de éxito o error en el mismo componente.
- ✔ Vaciar los campos en caso de mandar los datos exitosamente

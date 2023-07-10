# Bienvenido a mi primer readme react API



# Introduccion

El proyecto es una pagina aleatoria de banderas de países en forma de **cards** con **pop up** que contiene pequeña información del país. 

Al cargar web sale 25 banderas aleatorias ( hay posibilidad de cambiarlo mirar abajo para mas información.) 

Hay un botón **Actualizar** que cambian las a otras 25 banderas de países.

## Instalación

Clonar repositorio Github: https://github.com/recoded13/React_API.git

luego introducir en terminal

```
npm create vite@latest
npm install
npm run dev
```

## Api docs

https://restcountries.com/



## Notas y problemas

* A pesar de que trabajar con el código recta y el API. En visual code hay lineas código que dicen que es un error. Pero la web funciona bien.
* Ser ha modificado varias veces el pop up, funcionaba fatal. Así que hemos modificado a un **Pop us** con info hacia abajo. Mas fácil y intuitivo. 
* Añadido botón **cerrar** para cerrar bien los pop
* Contiene CSS para diseño de varias pantallas y dispositivos.


## Modificar número de países

```
seEffect(()  => {

fetch('https://restcountries.com/v3.1/all')

.then(response  => response.json())

.then(data  => {

setCountries(data.slice(0, 25)); // Cambiar numero de paises

})

.catch(error  => {

console.log('Ocurrió un error:', error);

});

}, []);
```

## Agradecimiento y fuentes.

* Gracias a  los revisionados videos de los profesores.
* Youtube
* Mi compañera Yue.




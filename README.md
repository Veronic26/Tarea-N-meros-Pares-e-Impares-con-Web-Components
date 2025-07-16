# Proyecto Par-Impar 

Este proyecto es una aplicación web interactiva desarrollada con **JavaScript moderno** y **Web Components (Custom Elements)** que permite al usuario ingresar un rango de números y visualizar si cada número es **par o impar**.

##  Objetivo

Aplicar conceptos de **programación modular** y uso de **componentes reutilizables** mediante el estándar de **Web Components** usando el ciclo de vida y el Shadow DOM.

##  Estructura del proyecto
├── index.html               ← Página principal del proyecto  
├── components/              ← Componentes Web  
│   ├── input-range.js       ← Componente para ingresar el rango  
│   └── par-impar-lista.js   ← Componente para mostrar resultados  
├── style/  
│   └── main.css             ← Estilos globales con diseño celeste  




## Funcionalidad

- El componente `<input-range>` permite ingresar dos números: inicio y fin del rango.
- Al hacer clic en "Enviar", se dispara un evento personalizado llamado `rango-seleccionado`.
- El componente `<par-impar-lista>` escucha ese evento, genera la lista del rango e indica si cada número es par o impar.

##  Ejemplo

Si el usuario ingresa:

Inicio: 4
Fin: 7


El resultado será:
4 - Par
5 - Impar
6 - Par
7 - Impar


##  Tecnologías utilizadas

- HTML5
- JavaScript 
- Web Components (Custom Elements + Shadow DOM)
- CSS personalizado con tonos celestes


# Enunciado de Pipes Personalizados en Angular
A continuación se describen varios **Pipes** de ejemplo para Angular.

[Enlace del proyecto desplegado aquí](https://cantero94-pipesangular.netlify.app/).

---

## 1. Ocultar parte de un texto
**Objetivo**: Ocultar parte de una cadena, por ejemplo: `{{ "miemail@google.com" | ocultaEmail }} → "m*@google.com"**`.

---

## 2. Formatear números grandes
**Objetivo**: Convertir números grandes a formatos abreviados por ejemplo: `{{ 5200 | cortaNumero }} → "5.2K"`.

---

## 3. Calcular tiempo transcurrido
**Objetivo**: Devuelve un formato de tiempo relativo, por ejemplo: `{{ '2025-05-19T12:20:00' | tiempoDesde }} → "hace 1 día"`.

---

## 4. Contar palabras en un texto
**Objetivo**: Devolver la cantidad de palabras que contiene una cadena de texto, por ejemplo `{{ "Esto es un texto de prueba" | contarPalabras }} → "6 palabras"`.

---

## 5. Reemplazar palabras específicas
**Objetivo**: Sustituir palabras ofensivas por asteriscos, por ejemplo `{{ "Eres un tonto" | censor:['tonto'] }} → **"Eres un **"`.

---

## 6. Pipe Personalizado: Dar la vuelta a la frase
**Objetivo**: Introduce un texto y lo devuelve del revés, por ejemplo `{{"Hola caracola" | textReverser}} → alocarac aloH`.

---


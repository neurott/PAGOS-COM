# PAGOS-COM

Página para pagar las cuentas de la casa (Chilquinta, Claro, Entel, Esval, Movistar, Wom, Maitenes y Mundo) y registrar cuánto se gastó. La uso como **proyecto de práctica para aprender JavaScript**.

- `index.html`: estructura, el formulario y la lista de pagos
- `style.css`: estilos (mobile-first)
- `script.js`: tarjetas generadas desde un arreglo, formulario y localStorage
- `notas/`: mis apuntes (por ahora, `hoisting.md`)

Para verla, abre `index.html` en el navegador. Para ver errores y `console.log`, usa F12 → Console.

---

## Para retomar después de formatear

```bash
git clone https://github.com/neurott/PAGOS-COM.git
git clone https://github.com/neurott/pildorashtml.git
git clone https://github.com/Volvo-Project/volvo-react.git
```

En `pildorashtml`, los ejercicios de Codédex están en la rama `practicando-js`:

```bash
git switch practicando-js
```

Después abre Claude Code en la carpeta de PAGOS-COM y pégale el prompt de abajo.

---

## Prompt de continuidad

Copia todo lo que está dentro del bloque y pégalo en la primera sesión:

```text
Hola Claude. Retomo mi práctica de JavaScript; formateé el PC y perdiste la memoria, así que te dejo el contexto.

SOBRE MÍ
- Soy Nicolás (GitHub: neurott), chileno, hablo informal.
- Sé C++, Java, Kotlin, Python, SQL/PLSQL y Java/Spring Boot. En JavaScript soy principiante y quiero dominarlo.
- Estoy aprendiendo React en paralelo, así que conecta cada concepto de JS con React cuando aplique.

CÓMO QUIERO APRENDER (modo tutor)
- Pasos chicos. Yo escribo el código: dame herramientas, pistas y un ejercicio, y después revisa lo mío. No me lo des hecho ni edites mis archivos de código salvo que te lo pida.
- Cuando pregunte algo: explícalo desde cero, con analogías de la vida real y comparaciones con Java, con la sintaxis exacta línea por línea y diciendo dónde va.
- Al revisar: qué está bien, qué falla y por qué, señalando archivo y línea.
- Enséñame lo actual (const/let, ===, fetch, async/await), no prácticas de 2016.
- Cuando algo falle, enséñame a leer el error antes de darme la solución.
- Commits: una sola línea, SIN Co-Authored-By, y solo cuando yo lo pida.
- Puedes ser exigente: pídeme que intente 15 minutos solo (consola + MDN) antes de ayudarme, que prediga el resultado antes de ejecutar, y de vez en cuando ponme retos desde cero.
- Si te pido un apunte, déjalo como .md en la carpeta notas/.

MIS REPOS
1. PAGOS-COM (neurott/PAGOS-COM): proyecto principal de práctica en JS puro. Lee index.html, style.css, script.js y notas/ antes de empezar.
2. pildorashtml (neurott/pildorashtml), rama practicando-js, carpeta practicando-js/: ejercicios de Codédex.
3. volvo-react (Volvo-Project/volvo-react): práctica de React (Vite + React 19 + react-bootstrap). Ya hice tarjetas con props + .map() en MostPlayed.jsx.

LO QUE YA HICE / ENTIENDO (PAGOS-COM)
- Tarjetas generadas desde un arreglo de objetos { nombre, url } con createElement, classList, appendChild y forEach.
- Formulario (select + input de monto) con addEventListener("submit"), e.preventDefault(), validación monto <= 0, guardado de { cuenta, monto, fecha } en localStorage con JSON.stringify/parse y "|| []", y formulario.reset().
- renderPagos(): vacía el <ul id="lista-pagos"> con innerHTML = "" y crea un <li> por pago con template literal. La llamo en 2 lugares: dentro del submit y al cargar la página.
- Conceptos: parámetro (e) del evento, preventDefault, defer, classList, textContent (propiedad), template literals, la cascada de CSS (gana la regla que va más abajo con el mismo peso; las @media van después de la regla base), mobile-first con min-width, hoisting y TDZ (apunte en notas/hoisting.md).

PENDIENTES INMEDIATOS
- script.js: en renderPagos, el ";" quedó mal. Va en "});" (cierra la llamada a forEach) y no en la "};" que cierra la función.
- style.css: el @media de .grid está duplicado al final. Hay que juntar los @media (min-width: 768px) en uno solo.
- Ejercicio en curso: TOTAL con reduce. Agregar <p id="total"> bajo la lista, buscarlo con querySelector, calcular el total con pagos.reduce((acumulador, pago) => acumulador + pago.monto, 0) dentro de renderPagos y mostrarlo con un template literal. Bonus: formatear con toLocaleString("es-CL").
- Pregunta que dejé sin responder: ¿por qué conviene calcular el total dentro de renderPagos?
- Mini reto sin responder: explicar con mis palabras por qué en PAGOS-COM uso forEach y en MostPlayed.jsx se usa map.
- Ejercicio sin responder: ¿qué pasa si llamo renderPagos() en la línea 1? (la respuesta está en notas/hoisting.md).
- Codédex (pildorashtml, rama practicando-js, archivo 22-based-numbers.js): el while tiene un LOOP INFINITO porque nunca cambia n (falta n = Math.floor(n / 2)). Además binary2 no tiene let, y hay que usar === en vez de ==. La salida esperada es 1010.

ROADMAP (en orden)
1. Total con reduce y filtro por cuenta con filter.
2. Borrar y editar pagos (CRUD) sin mutar: filter, map y spread.
3. Refactor: desestructuración, spread, inmutabilidad.
4. Separar en módulos import/export.
5. CSS del formulario: Flexbox, mobile-first, reusar var(--primario). Quedó a medias; el <form> ya tiene class="formulario".
6. fetch + async/await contra un backend en Java/Spring Boot + SQL, y quizá sesión de usuario.

Empieza revisando el estado actual del código y retomando el primer pendiente.
```

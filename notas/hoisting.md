# Hoisting en JavaScript

## La idea en una frase

**Antes de ejecutar tu archivo, JS lo lee completo una vez y "anota" todo lo que declaraste.** Recién después lo ejecuta línea por línea.

A esa lectura previa se le llama *hoisting* (en inglés, "izar", como una bandera: es como si las declaraciones subieran al principio del archivo).

## Analogía: la lista de asistencia

Antes de empezar la clase, el profe lee la lista. Ya sabe **cómo se llaman** todos, aunque no todos hayan llegado:

| Tipo | En la lista | ¿Llegó? | Si lo llamas antes de su línea |
|---|---|---|---|
| `function saludar() {}` | ✅ | ✅ Llegó y está sentado, listo | **Funciona** |
| `const` / `let` | ✅ | ❌ Todavía no llega | **Error** |
| `var` (antiguo) | ✅ | Hay un maniquí en su puesto | Te da `undefined` |

## Línea por línea, con código

### 1. `function`: funciona aunque la llames antes

```js
saludar();                  // "hola" ✅

function saludar() {
    console.log("hola");
}
```

Como en la lectura previa JS guardó la función **completa**, la puedes usar desde la línea 1.

### 2. `const` / `let`: error si la usas antes de su línea

```js
console.log(nombre);        // ❌ ReferenceError: Cannot access 'nombre' before initialization
const nombre = "Nico";
```

JS **sabe** que `nombre` existe (por eso el error dice *before initialization* y no *is not defined*), pero no te deja tocarla hasta llegar a su línea.

Ese tramo prohibido se llama **TDZ** (*Temporal Dead Zone*, "zona muerta temporal").

### 3. Función flecha guardada en `const`: se comporta como `const`, no como `function`

```js
saludar();                  // ❌ ReferenceError: Cannot access 'saludar' before initialization
const saludar = () => {
    console.log("hola");
};
```

Esto es **clave para React**: ahí muchos escriben `const MiComponente = () => { ... }`. Si lo usas antes de definirlo, se cae. Con `function MiComponente()`, que es como lo tengo en volvo-react, no pasa.

### 4. `var`: el comportamiento raro de 2015

```js
console.log(edad);          // undefined 🤨 (no da error, pero tampoco sirve)
var edad = 30;
```

Esto provocaba bugs silenciosos, y fue una de las razones para crear `let` y `const`. **No usar `var`.**

## Los dos errores que hay que distinguir

| Mensaje en consola | Qué significa |
|---|---|
| `Cannot access 'x' before initialization` | `x` existe (`const`/`let`), pero la usaste **antes de su línea** (TDZ). |
| `x is not defined` | `x` **no existe en ningún lado**: typo o nunca la declaraste. |

## Comparación con Java

- **Métodos de una clase**: en Java puedes llamar a un método que está escrito más abajo en la clase. Es como `function`.
- **Variables locales**: en Java no puedes usar una variable antes de declararla (error de compilación). Es como `const`/`let`, pero en JS el error aparece **al ejecutar**, no al compilar.

## En PAGOS-COM (script.js)

`renderPagos()` se llama dentro del `submit` y está definida **más abajo** en el archivo. Aun así funciona, pero **no por hoisting**: el código de dentro del submit recién se ejecuta cuando se hace clic en "Registrar", y para entonces ya se leyó todo el archivo (incluida la línea `const lista = ...`).

> Analogía: dejas escrito "cuando llegue el cartero, llama a Juan". No importa que Juan llegue a la casa después de que escribiste la nota. Importa que esté ahí cuando llegue el cartero.

## Ejercicio: predice antes de probar

Imagina que pones `renderPagos();` en la **línea 1** de script.js, arriba de todo.

1. ¿JS va a encontrar la función `renderPagos`? ¿Por qué?
2. ¿Va a funcionar o va a tirar error? Si tira error, ¿cuál y por qué? Pista: mira qué usa `renderPagos` por dentro y en qué línea se declara.

Responde primero, pruébalo con F12 → Console y después bórralo de la línea 1.

<details>
<summary>Ver respuesta (solo después de intentarlo)</summary>

1. **Sí.** `renderPagos` es una `function`, así que el hoisting la sube completa y existe desde la línea 1.
2. **Tira error.** Al ejecutarse, su primera línea es `lista.innerHTML = ""`, pero `lista` es un `const` que se declara más abajo. Todavía está en la TDZ:

   ```
   Uncaught ReferenceError: Cannot access 'lista' before initialization
   ```

   Moraleja: el hoisting sube la **función**, pero no las variables `const`/`let` que la función usa por dentro.

</details>

const cuentas = [
    { nombre: "Chilquinta", url: "https://www.chilquinta.cl/pagoenlinea" },
    { nombre: "Claro", url: "https://sucursalvirtual.clarochile.cl/PagoExpress/index" },
    { nombre: "Entel", url: "https://miperfil.entel.cl/CL_Web_Unified_Payment_EU/" },
    { nombre: "Esval", url: "https://www.esval.cl/personas/inicio?pago-rapido" },
    { nombre: "Movistar", url: "https://pagos.movistar.cl/publico" },
    { nombre: "Wom", url: "https://www.wom.cl/paga-aqui/" },
    { nombre: "Maitenes", url: "https://www.gestionelectronica.cl/ingreso_emp4/consulta/form-contrato.php?token=76dc611d6ebaafc66cc0879c71b5db5c" },
    { nombre: "Mundo", url: "https://pago-facil.tumundo.cl/pago" }

];

const pagos = JSON.parse(localStorage.getItem("pagos")) || [];


const grid = document.querySelector(".grid");

cuentas.forEach(cuenta => {

    const div = document.createElement("div");
    div.classList.add("pagina");   
    
    const p = document.createElement("p");
    p.textContent = cuenta.nombre;
    
    const a = document.createElement("a");

    a.href = cuenta.url;
    a.target = "_blank";

    a.classList.add("boton");
    a.textContent = "pagar ahora";


    div.appendChild(p);
    div.appendChild(a);

    
    grid.appendChild(div);
        

});

const select = document.querySelector("#cuenta");

cuentas.forEach(cuenta =>{
    const option = document.createElement("option");
    option.value = cuenta.nombre;
    option.textContent = cuenta.nombre;

    select.appendChild(option);
});

const formulario = document.querySelector("#formulario-pago");

const inputMonto = document.querySelector("#monto");

formulario.addEventListener("submit", (e) => {
    
    e.preventDefault();

    const cuenta = select.value;
    const monto = Number(inputMonto.value);

    if(monto <= 0){
        console.log("EL MONTO DEBE SER MAYOR A CERO");
        return;
    }

    const pago = {
        cuenta: cuenta,
        monto: monto,
        fecha: new Date().toLocaleDateString("es-CL")
    };


    pagos.push(pago);

    localStorage.setItem("pagos", JSON.stringify(pagos));

  
    

   
});










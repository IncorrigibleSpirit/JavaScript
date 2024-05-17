const empleado = {
  bruto: 14.5,
  hijos: 2,
  pagas: 14,
};

/* VERSION ORIGINAL (LARGA)

    if (empleado.bruto <= 12.000){

        let retencion = 0
        console.log(retencion);
        
        let totalNetoAnual= empleado.bruto - retencion;
        console.log(totalNetoAnual.toFixed(3));

        let totalNetoMensual = totalNetoAnual / empleado.pagas;
        console.log(totalNetoMensual *1000);
    }
    else if (empleado.bruto <= 24.000 && empleado.hijos > 0){
        
        let retencion = 0.06 * empleado.bruto;
        console.log (retencion *1000)

        let totalNetoAnual= empleado.bruto - retencion;
        console.log(totalNetoAnual.toFixed(3));        
        
        let totalNetoMensual = totalNetoAnual / empleado.pagas;
        console.log(totalNetoMensual *1000);
    } 
    else if (empleado.bruto <= 24.000){
        
        let retencion = 0.08 * empleado.bruto;
        console.log (retencion * 1000)
        
        let totalNetoAnual= empleado.bruto - retencion;
        console.log(totalNetoAnual.toFixed(3));
        
        let totalNetoMensual = totalNetoAnual / empleado.pagas;
        console.log(totalNetoMensual *1000);
    }
    else if (empleado.bruto <= 34.000 && empleado.hijos > 0){
        
        let retencion = 0.14 * empleado.bruto;
        console.log (retencion *1000)
        
        let totalNetoAnual= empleado.bruto - retencion;
        console.log(totalNetoAnual.toFixed(3));
        
        let totalNetoMensual = totalNetoAnual / empleado.pagas;
        console.log(totalNetoMensual *1000);
    } 
    else if (empleado.bruto <= 34.000){
        
        let retencion = 0.16 * empleado.bruto;
        console.log (retencion * 1000)
        
        let totalNetoAnual= empleado.bruto - retencion;
        console.log(totalNetoAnual.toFixed(3));
        
        let totalNetoMensual = totalNetoAnual / empleado.pagas;
        console.log(totalNetoMensual *1000);
    }
    else if (empleado.bruto >= 34.000 && empleado.hijos > 0){
        
        let retencion = 0.28 * empleado.bruto;
        console.log (retencion * 1000)
        
        let totalNetoAnual= empleado.bruto - retencion;
        console.log(totalNetoAnual.toFixed(3));
        
        let totalNetoMensual = totalNetoAnual / empleado.pagas;
        console.log(totalNetoMensual *1000);
    } 
    else{  
        (empleado.bruto >= 34.000)
        
        let retencion = 0.3 * empleado.bruto;
        console.log (retencion * 1000)
        
        let totalNetoAnual= empleado.bruto - retencion;
        console.log(totalNetoAnual.toFixed(3));
        
        let totalNetoMensual = totalNetoAnual / empleado.pagas;
        console.log(totalNetoMensual *1000);
    }

*/

//VERSION SIMPLIFICADA

let retencion;

if (empleado.bruto <= 12.0) {
  retencion = 0;
} else if (empleado.bruto <= 24.0) {
  retencion = empleado.hijos > 0 ? 0.06 : 0.08;
} else if (empleado.bruto <= 34.0) {
  retencion = empleado.hijos > 0 ? 0.14 : 0.16;
} else {
  retencion = empleado.hijos > 0 ? 0.28 : 0.3;
}

console.log(retencion);
let retencionAplicada = empleado.bruto * retencion;
console.log(retencionAplicada);

let totalNetoMensual = empleado.bruto - retencionAplicada;
console.log(totalNetoMensual.toFixed(3));

let totalNetoAnual = totalNetoMensual * empleado.pagas;
console.log(totalNetoAnual.toFixed(3));


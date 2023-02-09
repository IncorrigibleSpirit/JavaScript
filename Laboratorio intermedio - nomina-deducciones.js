const empleado = {
      bruto:14.500,
      hijos:2,
      pagas:14
    }
    
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

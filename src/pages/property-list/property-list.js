import { getPropertyList, getSaleTypeList, getProvinceList  } from './property-list.api';
import { mapPropertyListApiToVm, mapFilterToQueryParams,} from './property-list.mappers';
import { addPropertyRows, setOptions, clearPropertyRows, } from './property-list.helpers';
import {roomOptions, bathroomOptions, minPriceOptions, maxPriceOptions} from './property-list.constants';
import { onUpdateField, onSubmitForm } from '../../common/helpers';

/*Para extraer los datos definidos en el servidor usaremos el método "promise.all". 
Este permitirá realizar de forma simultánea llamadas a métodos diferentes (3):
(getPropertyList(),getSaleTypeList(),getProvinceList())

Promise.all: se le pasa un array con los métodos/promesas que deseamos llamar/resolver 
en paralelo. Luego a través del ".then", llegarán los resultados a manera de lista[0,1,2]. 
En cada índice quedará alojada la respuesta a cada llamada. 
*/

Promise.all([
    getPropertyList(),
    getSaleTypeList(),
    getProvinceList(),
    
    ]).then(([propertyList, saleTypeList, provinceList]) => { 
    // Se simplificó listado//array obtenido con destructuring - una línea

    loadPropertyList(propertyList); // Cargar lista de propiedades
    
    setOptions(saleTypeList, 'select-sale-type', '¿Qué venta?'); 
    //         (indice 2,     ID en el HTML,     nombre en select)
    //Cargamos en el objeto HTML los datos de tipo de propiedad
    
    setOptions(provinceList, 'select-province', '¿Dónde?');
    //         (indice 3,     ID en el HTML,     nombre en select)
    //Cargamos en el objeto HTML los datos de la provincia

    setOptions(roomOptions, 'select-room', '¿Habitaciones?');
    // Cargamos habitaciones

    setOptions(bathroomOptions, 'select-bathroom', '¿Cuartos de baño?');
   // Cargamos baños
    
    setOptions(minPriceOptions, 'select-min-price', 'Min (EUR)');
    // Cargamos precio minimo

    setOptions(maxPriceOptions, 'select-max-price', 'Max (EUR)');
    // Cargamos precio maximo

     }
    );
    

    const loadPropertyList = propertyList => {
    const vmPropertyList = mapPropertyListApiToVm(propertyList);
    addPropertyRows(vmPropertyList);
    };

// Se crea modelo de vista para recoger los datos seleccioandos en los "selects"

    let filter = {
        saleTypeId: '',
        provinceId: '',
        minRooms: '',
        minBathrooms: '',
        minPrice: '',
        maxPrice: '',
    };


    onUpdateField('select-sale-type', event => {
        const value = event.target.value;
        filter = {
        ...filter,
        saleTypeId: value,
       };
    });
    
    onUpdateField('select-province', event => {
        const value = event.target.value;
        filter = {
        ...filter,
        provinceId: value,
        };
    });
    
    onUpdateField('select-room', event => {
        const value = event.target.value;
        filter = {
        ...filter,
        minRooms: value,
        };
    });
    
    onUpdateField('select-bathroom', event => {
        const value = event.target.value;
        filter = {
        ...filter,
        minBathrooms: value,
        };
    });
    
    onUpdateField('select-min-price', event => {
        const value = event.target.value;
        filter = {
        ...filter,
        minPrice: value,
        };
    });
    
    onUpdateField('select-max-price', event => {
        const value = event.target.value;
        filter = {
        ...filter,
        maxPrice: value,
        };
    });
    
    onSubmitForm('search-button', () => {
        console.log({ filter });
        const queryParams = mapFilterToQueryParams(filter);
        clearPropertyRows();

        getPropertyList(queryParams).then(propertyList => {
            loadPropertyList(propertyList);
            });    
    })
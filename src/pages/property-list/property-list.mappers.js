
export const mapPropertyListApiToVm = propertyList =>
 Array.isArray(propertyList)
 ? propertyList.map(property => mapPropertyApiToVm(property))
 : [];

 const mapPropertyApiToVm = property => ({
 id: property.id,
 title: property.title,
 rooms: `${property.rooms} ${getRoomWord(property.rooms)}`,
 squareMeter: `${property.squareMeter}m2`,
 notes: `${property.notes.substring(0, 240)}...`,
 price: `${property.price.toLocaleString()} €`,
 image: Array.isArray(property.images) ? property.images[0] : '',
});

export const getRoomWord = rooms => (rooms > 1 ? 'habitaciones' : 'habitación');


/* Generamos cadena de consulta ("query params"). Con la "url" que obtenemos como 
resultado le diremos al servidor que busque propiedades acorde a las selecciones 
del usuario.*/

export const mapFilterToQueryParams = filter => {
    let queryParams = '';
    
    if (filter.saleTypeId) {
        queryParams = `${queryParams}saleTypeIds_like=${filter.saleTypeId}&`;
    }
    
    if (filter.provinceId) {
        queryParams = `${queryParams}provinceId=${filter.provinceId}&`;
    }
    
    if (filter.minRooms) {
        queryParams = `${queryParams}rooms_gte=${filter.minRooms}&rooms_lte=${filter.minRooms}&`;
    }
    
    if (filter.minBathrooms) {
        queryParams = `${queryParams}bathrooms_gte=${filter.minBathrooms}&bathrooms_lte=${filter.minBathrooms}&`;
    }
    
    if (filter.minPrice) {
        queryParams = `${queryParams}price_gte=${filter.minPrice}&`;
    }
    
    if (filter.maxPrice) {
        queryParams = `${queryParams}price_lte=${filter.maxPrice}&`;
    }
    
    return queryParams.slice(0, -1);
    // usamos slide para evitar redundacias, errores y eliminar el ultimo "&" de la url
    };



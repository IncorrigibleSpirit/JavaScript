export const onUpdateField = (id, callback) => {
  const element = document.getElementById(id);
  element.oninput = event => callback(event);

  if (element.type !== 'checkbox') {
    element.onblur = event => callback(event);
  }
};

export const onSubmitForm = (id, callback) => {
  const element = document.getElementById(id);
  element.onclick = e => {
    e.preventDefault();
    callback();
  };
};

export const onAddFile = (id, callback) => {
  const input = document.getElementById(id);
  input.onchange = () => {  // Tan pronto se genera un cambio - Selecciona un archivo...
    const file = input.files[0]; // la función obtiene el archivo seleccionado y lo almacena en la variable file
    const fileReader = new FileReader(); // Permite leer el contenido de un archivo
    fileReader.onloadend = () => {   // Tan pronto el archivo haya sido leído y cargado...haz lo siguiente
      callback(fileReader.result); //Una vez terminada la lectura del archivo, se invoca la función callback con el resultado de la lectura del archivo como su argumento.
    };
    fileReader.readAsDataURL(file); // convierte el contenido del archivo en una URL de datos codificada en base64.
  };
};

export const onSetError = (id, error) => {
  if (error.succeeded) {
    removeElementClass(id);
    setErrorMessage(id, '');
  } else {
    setElementClass(id);
    setErrorMessage(id, error.message);
  }
};

const setElementClass = id => {
  const element = document.getElementById(id);
  if (element) {
    element.classList.add('error');
  }
};

const removeElementClass = id => {
  const element = document.getElementById(id);
  if (element) {
    element.classList.remove('error');
  }
};

const setErrorMessage = (id, message) => {
  const messageElement = document.getElementById(`${id}-error`);
  if (messageElement) {
    messageElement.textContent = message;
  }
};

export const onSetFormErrors = ({ fieldErrors }) => {
  Object.entries(fieldErrors).forEach(([key, value]) => {
    onSetError(key, value);
  });
};

const setValue = (element, value) => {
  const elementType = element.tagName.toLowerCase();
  if (elementType === 'select' || elementType === 'input' || elementType === 'textarea') {
    element.value = value;
  } else {
    element.textContent = value;
  }
};

const onSetValue = (id, value) => {
  const element = document.getElementById(id);
  console.log({ element });
  if (element) {
    setValue(element, value);
  }
};

export const onSetValues = values => {
  Object.entries(values).forEach(([key, value]) => onSetValue(key, value));
};

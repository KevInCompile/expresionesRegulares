export const expresionesRegulares = {
  nombres: /^[a-zA\s]{1,40}$/, // Puede incluir letras y acentos
  clave: /^.{4,12}/, // Cualquier caracter, de 4 a 12 digitos
  correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0,9-]+\.[a-zA-Z0-9-.]+$/, // Incluye arroba
  telefono: /^d{7,10}/ // Numeros hasta 10 digitos
}

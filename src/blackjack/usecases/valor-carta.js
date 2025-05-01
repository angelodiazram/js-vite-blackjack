
/**
 * Función para extraer el numero del string de la carta y transformarlo a tipo "number"
 * @param {string} carta + tipo o especial 
 * @returns retorna el valor numerico de la carta
 */
export const valorCarta = ( carta ) => {

    const valor = carta.substring(0, carta.length - 1);
    return ( isNaN( valor ) ) ? 
            ( valor === 'A' ) ? 11 : 10
            : valor * 1;
}

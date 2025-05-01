
/**
 * Función para pedir cartas del deck
 * @param {Array<String>} deckConCartas 
 * @returns {String} retorna unaa carta
 */
export const pedirCarta = ( deckConCartas ) => {

    if ( deckConCartas.length === 0 ) {
        throw 'No hay cartas en el deck';
    }
    const carta = deckConCartas.pop();
    return carta;
}
import _ from 'underscore';

//? *********** FACTORIZACIÓN Y TIPOS DE EXPORTACIÓN (DEFAULT E INDEPENDIENTES):

//? FUNCIÓN PARA CREAR LA BARAJA:

/**
 * Esta función crea un nuevo deck
 * @param {array<string>} tiposDeCartas Ejemplo: ['C','D','H','S']
 * @param {array<string>} tiposEspeciales Ejemplo: ['A','J','Q','K']
 * @returns {array<string>} retorna un nuevo deck de cartas barajadas con 52 cartas
 */
export const crearDeck = ( tiposDeCartas, tiposEspeciales ) => { //! exportado por defecto


    if ( !tiposDeCartas || tiposDeCartas === 0 ) 
        throw new Error('tiposDeCartas es obligatorio como un arreglo de string');
    
    if ( !tiposEspeciales || tiposEspeciales === 0 ) 
        throw new Error('tiposEspeciales es obligatorio como un arreglo de string');
    

    let deck = [];

    for( let i = 2; i <= 10; i++ ) {
        for( let tipo of tiposDeCartas ) {
            deck.push( i + tipo);
        }
    }

    for( let tipo of tiposDeCartas ) {
        for( let esp of tiposEspeciales ) {
            deck.push( esp + tipo);
        }
    }
    // console.log( deck );
    deck = _.shuffle( deck );
    // console.log(deck)
    return deck;
}

// export default crearDeck;
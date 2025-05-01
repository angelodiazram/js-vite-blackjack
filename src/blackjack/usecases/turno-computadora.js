import { pedirCarta } from "./pedir-carta";
import { valorCarta } from "./valor-carta";
import { crearCartaHTML } from "./crear-carta-html";


/**
 * Función para el turno de la computadora
 * @param {Number} puntosMinimos Puntos mínimos que la computadora necesita para ganar 
 * @param {HTMLElement} puntosHTML HTML para mostrar en el puntaje de computadora
 * @param {HTMLElement} divCartasComputadora donde se insertan los puntos
 * @param {Array<String>} deck 
 */
export const turnoComputadora = ( puntosMinimos, puntosHTML, divCartasComputadora, deck = []) => {

    if ( !puntosMinimos ) throw new Error('Puntos mínimos son necesarios');
    if ( !puntosHTML ) throw new Error('Puntos HTML son necesarios');
    if ( !deck ) throw new Error('Se necesita crear el deck primero');

    let puntosComputadora = 0;

    do {
        const carta = pedirCarta( deck );

        puntosComputadora = puntosComputadora + valorCarta( carta );
        puntosHTML.innerText = puntosComputadora;
        
        const imgCarta = crearCartaHTML( carta );
        divCartasComputadora.append( imgCarta );

        if( puntosMinimos > 21 ) {
            break;
        }

    } while(  (puntosComputadora < puntosMinimos)  && (puntosMinimos <= 21 ) );

    setTimeout(() => {
        if( puntosComputadora === puntosMinimos ) {
            alert('Nadie gana :(');
        } else if ( puntosMinimos > 21 ) {
            alert('Computadora gana')
        } else if( puntosComputadora > 21 ) {
            alert('Jugador Gana');
        } else {
            alert('Computadora Gana')
        }
    }, 100 );
}
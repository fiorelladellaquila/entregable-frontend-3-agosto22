// El componente Item no tiene componentes hijos.
// ESTADO: Item debe tener un número para almacenar la cantidad de stock, la misma se la defina el padre a la hora de crearlo.
// MÉTODOS: Item debe manejar el click de su boton para restar la cantidad en stock de sí mismo y a su vez poder aumentar el estado de su "abuelo" App.
// PROPS: Item recibe todos los campos que muestra en pantalla: nombre, descripcion, stock y el métodos heredados para su uso.
// Maqueta de Item:
//    h3
//    p
//    h5 > span    (este span debe mostrar la cantidad si es mayor a 0 "agotado" si llega a 0)
//    button       (este boton debe permitir comprar, pero si la cantidad es menor a 0 debe estar deshabilitado y decir "Sin stock")

import { useState } from "react";

export default function Item(props) {

  const [stockRestante, setstockRestante] = useState(props.stock);

  function comprar(){
    const restante = stockRestante-1;
    setstockRestante(restante);
    props.carrito();
  }

  return (    
    <div className='producto'>
      <h3>{props.nombre}</h3>
      <p>{props.descripcion}</p>
      <h5>Stock: <span>{stockRestante > 0 ? stockRestante : 'agotado'}</span></h5>
      <button disabled={stockRestante === 0} onClick={comprar}>{stockRestante > 0 ? 'Comprar' : 'Sin Stock'}</button>
    </div>
  );
}


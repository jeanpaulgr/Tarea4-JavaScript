// 1. Función que me permita encontrar todas las ordenes que contengan de ingredients lechuga y palta
const filterOrdersByLechugaPalta = () => sandwichOrders.filter(
    (sandwichOrder) =>  sandwichOrder.ingredients.includes('lechuga') &&
                        sandwichOrder.ingredients.includes('palta')
  )
// 2. Función que me permita encontrar una orden a través del id y que me devuelva un string con el siguiente 
// formato de ejemplo: La orden fue realizada el 09-10-2020, la orden llevó mechada y bagette. En caso de no 
// encontrar nada a través del id, el mensaje, a modo de ejemplo, deberá ser: No se encontró la orden con id 800


const findSandwichByID = (ID) => sandwichOrders.map(
    (sandwichOrder) =>  ({
        id: sandwichOrder.id,
        bread: sandwichOrder.bread,
        protein: sandwichOrder.protein,
        ordered: sandwichOrder.ordered
      })
  ).find(
        (sandwichOrder) =>  sandwichOrder.id === ID
      )

const findSandwich = (id) => {
    
  if(findSandwichByID(id) != undefined){
        console.log('La orden fue realizada el ' + findSandwichByID(id).ordered +', la orden llevó ' + 
                                        findSandwichByID(id).protein + ' y ' + findSandwichByID(id).bread)
        return ('La orden fue realizada el ' + findSandwichByID(id).ordered +', la orden llevó ' + 
                                        findSandwichByID(id).protein + ' y ' + findSandwichByID(id).bread)
  }else{
        console.log('No se encontró la orden con id: ' + id)
        return ('No se encontró la orden con id: ' + id)
  }
                  
}
// Usar destructuración -> Documentación <-

// 3. Función que me permita encontrar una orden a través del id y que me indique si la orden incluye pepinillos 
// entre sus ingredients, debería devolver un true|false
 const someSandwichPepinillos = (ID) => sandwichOrders.some(
    (sandwichOrders) =>  sandwichOrders.ingredients.includes('cebolla') && 
                         sandwichOrders.id === ID
)

// 4. Función que me permita encontrar todas las orden que se hicieron en un día en específico, es decir, 
// si yo coloco 20-10-2020, la función me debería devolver: Se encontraron N ordenes para la fecha 20-10-2020.

const cantidadByFecha = (fecha) => sandwichOrders.filter(
    (sandwichOrder) =>  sandwichOrder.ordered === fecha
  ).length
  const filterByFecha = (fecha) => {
    console.log(`Se encontraron ${cantidadByFecha(fecha)} ordenes para la fecha ${fecha}`)
    return `Se encontraron ${cantidadByFecha(fecha)} ordenes para la fecha ${fecha}`
  }

//probar
function probar1(){
    let resultado = document.getElementById("resultados")
    resultado.innerHTML = 'Profe, mire la consola por favor, no tuve mucho tiempo xD <br/><br/>' + 
                           filterOrdersByLechugaPalta()
    console.log(filterOrdersByLechugaPalta())
}

function probar2(){
    let resultado = document.getElementById("resultados")
    let ID = document.getElementById("Param1").value
    resultado.innerText = findSandwich(parseInt(ID))
    // console.log(findSandwich(parseInt(ID)))
}

function probar3(){
    let resultado = document.getElementById("resultados")
    let ID = document.getElementById("Param2").value
    resultado.innerText = '¿Incluye pepinillos?: ' + someSandwichPepinillos(parseInt(ID))
    console.log('¿Incluye pepinillos?: ' + someSandwichPepinillos(parseInt(ID)))
}

function probar4(){
    let resultado = document.getElementById("resultados")
    let valor = document.getElementById("Param3").value
    let formateado = valor.substring(8,10) + '-' + valor.substring(5,7) + '-' + valor.substring(0,4)
    resultado.innerText = filterByFecha(formateado)
    // console.log()
}
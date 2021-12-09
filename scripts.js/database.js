/*

    This module contains all of the data, or state, for the
    application. 

*/
const database = {
    cones: [
        { id: 1, type: "kiddie", price: 1 },
        { id: 2, type: "cake", price: 2 },
        { id: 3, type: "waffle", price: 3 },
        { id: 4, type: "chocolate-dipped waffle", price: 5 } 
    ]

}

    toppings: [
        { id: 1, name: "sprinkles", price: .50},
        { id: 2, name: "nuts", price: .75},
        { id: 3, name: "shell", price: .50},
        { id: 4, name: "candy", price: .50}
    ]



    export const getToppings = () => {
    return database.toppings.map(topping => ({...topping}))
    }

    export const setToppings = (id) => {
    database.orderBuilder.toppingId = id
    }
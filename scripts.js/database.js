/*

    This module contains all of the data, or state, for the
    application. 

*/
const database = {
    orderBuilder: {},

    cones: [
        { id: 1, type: "kiddie", price: 1 },
        { id: 2, type: "cake", price: 2 },
        { id: 3, type: "waffle", price: 3 },
        { id: 4, type: "chocolate-dipped waffle", price: 5 } 
    ],
    flavors: [
        { id: 1, type: "Bacon and Olive", price: 2 },
        { id: 2, type: "Ghost Pepper", price: 4 },
        { id: 3, type: "Beer and Bar Nuts", price: 3 },
        { id: 4, type: "Cereal Milk", price: 6 } 
    ],
    size: [
        { id: 1, type: "a", price: 1 },
        { id: 2, type: "b", price: 1 },
        { id: 3, type: "c", price: 1 },
        { id: 4, type: "d", price: 1 } 
    ],
    toppings: [
        { id: 1, type: "e", price: 1 },
        { id: 2, type: "f", price: 1 },
        { id: 3, type: "g", price: 1 },
        { id: 4, type: "h", price: 1 } 
    ],
    customOrders: [
        {
            id: 1,
            conesId: 3,
            sizeId: 2,
            toppingsId: 3,
            timestamp: 1614659931693
        }
    ]

}

// export const getMetals = () => {
//     return database.metals.map(metal => ({...metal}))
// }

export const getFlavors = () => {
    return database.flavors.map(flavor => ({...flavor}))
}

// export const getStyles = () => {
//     return database.styles.map(style => ({...style}))
// }

// export const getOrders = () => {
//     return database.customOrders.map(order => ({...order}))
// }

// export const getCurentOrder = () => {
//     return database.orderBuilder.id =id
// }

export const setFlavors = (id) => {
    database.orderBuilder.flavorId = id
}

// export const setSize = (id) => {
//     database.orderBuilder.sizeId = id
// }

// export const setStyle = (id) => {
//     database.orderBuilder.styleId = id
// }


export const addCustomOrder = () => {
    // Copy the current state of user choices
    const newOrder = {...database.orderBuilder}

    // Add a new primary key to the object
    const lastIndex = database.customOrders.length - 1
    newOrder.id = database.customOrders[lastIndex].id + 1

    // Add a timestamp to the order
    newOrder.timestamp = Date.now()

    // Add the new order object to custom orders state
    database.customOrders.push(newOrder)

    // Reset the temporary state for user choices
    database.orderBuilder = {}

    // Broadcast a notification that permanent state has changed
    document.dispatchEvent(new CustomEvent("stateChanged"))
}



export const UPDATE_ADDITIONAL_PRICE = ' UPDATE_ADDITIONAL_PRICE'

export const updateAdditional = newAdditonal => {
    return {type: UPDATE_ADDITIONAL_PRICE, payload: newAdditonal }
}



export const remove = () =>  {
    return {type: "REMOVE_FEATURE"}
}

export const add = () =>  {
    return {type: "ADD_FEATURE"}
}
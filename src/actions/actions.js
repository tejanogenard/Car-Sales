

// export const UPDATE_ADDITIONAL_PRICE = ' UPDATE_ADDITIONAL_PRICE'

// export const updateAdditional = newAdditonal => {
//     return {type: UPDATE_ADDITIONAL_PRICE, payload: newAdditonal }
// }


export const REMOVE_FEATURE = "REMOVE_FEATURE"
export const ADD_FEATURE = "ADD_FEATURE"

export const remove = () =>  {
    console.log("#######")
    return {type: REMOVE_FEATURE } 
    //this isn't removing the feature 
}

export const add = newAdditonal =>  {
    console.log(newAdditonal)
    return {type: "ADD_FEATURE", payload: newAdditonal}
}
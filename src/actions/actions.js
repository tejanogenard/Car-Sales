
export const REMOVE_FEATURE = "REMOVE_FEATURE"
export const ADD_FEATURE = "ADD_FEATURE"

export const remove = item =>  {
    console.log("#######")
    return {type: REMOVE_FEATURE, payload:item } 
    
}

export const add = newAdditonal =>  {
    console.log(newAdditonal)
    return {type: "ADD_FEATURE", payload: newAdditonal}
}
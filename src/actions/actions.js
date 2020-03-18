

export const UPDATE_ADDITIONAL_PRICE = ' UPDATE_ADDITIONAL_PRICE'

export const updateAdditional = newAdditonal => {
    return {type: UPDATE_ADDITIONAL_PRICE, payload: newAdditonal }
}
const initialState = {
    cart : 0,
    produk :[]
}
const reducer = (state = initialState ,action) => {
    if (action.type === "ADD_CART") {
        return {
            ...state,
            cart : state.cart + 1,
        }
    }
    if (action.type === "ADD_PRODUK"){
        //console.log(action.value)
        return {
            produk : [...state.produk,action.value]
            
        }
    }
    return state
}
export default reducer
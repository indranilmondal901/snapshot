const reducer = (state, action) => {
    switch (action.type) {
        case "fetchData":
            return ({
                ...state,
                photoData: action.payload.data,
                loading: true
            })
        case "searchResult":
            return ({
                ...state,
                query: action.payload.query,
                loading: false
            })
        case "directSearch":
            return ({
                ...state,
                query: action.payload.query,
                loading: false
            })
        default:
            return null;
    }
}
export default reducer;
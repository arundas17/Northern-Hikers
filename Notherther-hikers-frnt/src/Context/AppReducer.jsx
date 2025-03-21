const AppReducer = (state, action) => {   // ✅ Define the function
    switch (action.type) {
        case 'DELETE_TRANSACTION':
            return {
                ...state,
                transaction: state.transaction.filter(transaction => transaction.id !== action.payload)
            }
            case 'ADD_TRANSACTION':
                return{
                    ...state,
                    transaction:[action.payload,...state.transaction]
                }
        default:
            return state;
    }
};

export default AppReducer;  // ✅ Export the function properly

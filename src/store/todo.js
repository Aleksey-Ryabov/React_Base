const initialState = {checkboxStateChange: [false], test: '123'}

const todoReduce = (state = initialState, action) => {
                    switch (action.type) {
                        case "VIEW_CHECKBOX":
                             return { ...state, checkboxStateChange: !state.checkboxStateChange}
                        default:
                            return state;
                }
            };

export default todoReduce;


export const getHeroes = (heroes) => ({
    type: 'ADD_HERO',
    payload: heroes
})

export const getError = (error) => ({
    type: 'GET_ERROR',
    payload: {flag: true, text: error}
})

export const AddHero = () => (dispatch, getState) => {
    const randomHero =  parseInt(Math.random()* 200)
        fetch(`https://swapi.dev/api/people/${randomHero}/`)
        .then(response => {
            if(!response.ok){
                throw new Error(`Request failed with status ${response.status}`);
            }
            return response.json()
        })
        .then((elem) => dispatch(getHeroes(elem)))
        .catch((error)=> dispatch(getError(error.message)))
}

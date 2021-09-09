const initialState = {
  cards: [
    {id: 1, title: 'Alex', body: 'Lorem ipsum dolor sit amet, sunt in culpa qui officia.'},
    {id: 2, title: 'Willma', body: 'Lorem ipsum dolor sit amet, sunt in culpa qui officia.'},
    {id: 3, title: 'John', body: 'Lorem ipsum dolor sit amet, sunt in culpa qui officia.'}
  ]
}

const rootReducer = (state = initialState, action) => {
  return state;
};

export default rootReducer;
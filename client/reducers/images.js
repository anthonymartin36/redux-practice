const images = (state = [], action) => {
  switch (action.type) {
    case 'ADD_IMG':
      return [
        ...state,
        {
          id: action.id,
          image: action.image
        }
      ]

    default:
      return state
  }
}

export default images

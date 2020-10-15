const initState = {
    projects: [
        {id: '1', title: 'my first project', content: 'Reactjs'},
        {id: '2', title: 'my second project', content: 'Reactjs and Redux'},
        {id: '3', title: 'my third project', content: 'using Firebase'}

    ]

}
const projectReducer = (state= initState, action) => {
    return state

}

export default projectReducer;
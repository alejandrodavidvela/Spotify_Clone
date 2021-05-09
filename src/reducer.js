export const initialState = {
    user: null,
    playlists: [],
    playing: false,
    item: null,
    // Remove after finished developing
    // token: 'BQCDb16gWxbTQ7Xu-GEXAiBLpQtrDmkYmtn-MpSseeDZUcAAUX2nRKD9CMPqhUrcG2CiC3HATbf5fYDGR7EyT5NTVa6HuMQD-_ufrAEJVRgGMF_uzKQ2LTcUV5WwA9ODQ3e5_DRsg9aeZCK8oZp0dj4JHQ'
}

const reducer = (state, action) => {
console.log(action);

switch(action.type) {
    case 'SET_USER':
        return {
            ...state,
        user: action.user
        }
    case 'SET_TOKEN':
        return {
            ...state,
            token: action.token
        }
    case 'SET_PLAYLISTS':
        return {
            ...state,
            playlists: action.playlists
        }
    case 'SET_DISCOVER_WEEKLY':
        return {
            ...state,
            discover_weekly: action.discover_weekly
        }
    default: 
    return state
}

}

export default reducer
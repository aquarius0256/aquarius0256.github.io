
let initialState = {
    postData: [
        {id: 1, message: 'How are you?', likesCount: 100},
        {id: 2, message: 'It\'s my first post', likesCount: 13},
        {id: 3, message: 'How are you?', likesCount: 12}
    ],
    newPostText: 'it-kamasutra-it'
}

const profileReducer = (state = initialState, action) => {

        if (action.type === 'ADD-POST') {
            let newPost = {
                id: 5,
                message: state.newPostText,
                likesCount: 0

            };
            state.postData.push(newPost);
            state.newPostText = '';
            // this._callSubscriber(this.state);
        } else if (action.type === 'UPDATE-NEW-POST-TEXT') {

            state.newPostText = action.newText;

        }

        return state;
}

 export const addPostActionCreator = () => ({type: 'ADD-POST'})
 export const updateNewPostTextActionCreator = (text) => ({type: 'UPDATE-NEW-POST-TEXT', newText: text})

export default profileReducer;
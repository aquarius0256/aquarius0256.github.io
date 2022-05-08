let store = {
    _state: {
        dialoguesPage: {
            dialoguesData: [
                {id: 1, name: 'Artur'},
                {id: 2, name: 'Tanyuha'},
                {id: 3, name: 'Kamila'}
            ],
            messagesData: [
                {id: 1, message: 'Hi'},
                {id: 2, message: 'How are you', likesCount: 13},
                {id: 3, message: 'How is your it-kamasutra bro?', likesCount: 14}
            ]
        },
        profilePage: {
            postData: [
                {id: 1, message: 'How are you?', likesCount: 100},
                {id: 2, message: 'It\'s my first post', likesCount: 13},
                {id: 3, message: 'How are you?', likesCount: 12}
            ],
            newPostText: 'it-kamasutra-it'

        },
        sitebar: {
            friendsData: [
                {id: 1, name: 'Artur'},
                {id: 2, name: 'Tanyuha'},
                {id: 3, name: 'Kamila'}
            ]
        }

    },
    _callSubscriber() {
        console.log('state changed');
    },

    getState() {
        return this._state;
    },
    subscribe(observer)  {
        this._callSubscriber = observer; // наблюдатель pattern
    },
    //
    // addPost() {
    //
    //     let newPost = {
    //         id: 5,
    //         message:  this._state.profilePage.newPostText,
    //         likesCount: 0
    //
    //     };
    //     this._state.profilePage.postData.push(newPost);
    //     this._state.profilePage.newPostText = '';
    //     this._callSubscriber(this.state);
    // },
    // updateNewPostText(newText) {
    //
    //     let newPost = {
    //         id: 5,
    //         message:  postMessage,
    //         likesCount: 0
    //     };
    //     this._state.profilePage.newPostText = newText;
    //     this._callSubscriber(this._state);
    // },
    dispatch(action) { // { type: 'ADD-POST' }
if (action.type === 'ADD-POST') {
    let newPost = {
        id: 5,
        message:  this._state.profilePage.newPostText,
        likesCount: 0

    };
    this._state.profilePage.postData.push(newPost);
    this._state.profilePage.newPostText = '';
    this._callSubscriber(this.state);
} else if (action.type === 'UPDATE-NEW-POST-TEXT') {
    // let newPost = {
    //     id: 5,
    //     message:  postMessage,
    //     likesCount: 0
    // };
    this._state.profilePage.newPostText = action.newText;
    this._callSubscriber(this._state);
}
    }

}








export default store;
window.store = store;
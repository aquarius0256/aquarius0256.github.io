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
    getState() {
        return this._state;
    },
    _callSubscriber() {
        console.log('state changed');
    },
    addPost() {

        let newPost = {
            id: 5,
            message:  this._state.profilePage.newPostText,
            likesCount: 0

        };
        this._state.profilePage.postData.push(newPost);
        this._state.profilePage.newPostText = '';
        this._callSubscriber(this.state);
    },
    updateNewPostText(newText) {

        let newPost = {
            id: 5,
            message:  postMessage,
            likesCount: 0
        };
        this._state.profilePage.newPostText = newText;
        this._callSubscriber(this._state);
    },
    subscribe(observer)  {
        this._callSubscriber = observer; // наблюдатель pattern
    }
}








export default store;
window.store = store;
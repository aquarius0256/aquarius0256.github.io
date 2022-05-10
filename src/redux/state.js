let store = {
    _state: {
        dialoguesPage: {
            dialoguesData: [
                {id: 1, name: 'Artur'},
                {id: 2, name: 'Tanyuha'},
                {id: 3, name: 'Kamila'},
                {id: 4, name: 'Valera'}
            ],
            messagesData: [
                {id: 1, message: 'Hi'},
                {id: 2, message: 'How are you', likesCount: 13},
                {id: 3, message: 'How is your it-kamasutra bro?', likesCount: 14}
            ],
            newMessageBody: ''
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
                {id: 3, name: 'Kamila'},
                {id: 4, name: 'Valera'}
            ]
        }

    },
    _callSubscriber() {
        console.log('state changed');
    },

    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._callSubscriber = observer; // наблюдатель pattern
    },

    dispatch(action) { // { type: 'ADD-POST' }
        if (action.type === 'ADD-POST') {
            let newPost = {
                id: 5,
                message: this._state.profilePage.newPostText,
                likesCount: 0

            };
            this._state.profilePage.postData.push(newPost);
            this._state.profilePage.newPostText = '';
            this._callSubscriber(this.state);
        } else if (action.type === 'UPDATE-NEW-POST-TEXT') {

            this._state.profilePage.newPostText = action.newText;
            this._callSubscriber(this._state);
        } else if (action.type === 'UPDATE-NEW-MESSAGE-BODY') {
            this._state.dialoguesPage.newMessageBody = action.body;
            this._callSubscriber(this._state);
        } else if (action.type === 'SEND-MESSAGE') {
            let body = this._state.dialoguesPage.newMessageBody;
            this._state.dialoguesPage.newMessageBody = '';
            this._state.dialoguesPage.messagesData.push( {id: 4, message: body});
            this._callSubscriber(this._state);

        }
    }

}

export const addPostActionCreator = () => ({type: 'ADD-POST'})
export const updateNewPostTextActionCreator = (text) => ({type: 'UPDATE-NEW-POST-TEXT', newText: text})

export const sendMessageCreator = () => ({type: 'SEND-MESSAGE'})
export const updateNewMessageBodyCreator = (body) => ({type: 'UPDATE-NEW-MESSAGE-BODY', body: body})


export default store;
window.store = store;
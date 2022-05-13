import profileReducer from "./profile-reducer";
import dialoguesReducer from "./dialogues-reducer";
import sitebarReducer from "./sitebar-reducer";

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

        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialoguesPage = dialoguesReducer(this._state.dialoguesPage, action);
        this._state.sitebar = sitebarReducer(this._state.sitebar, action);

            this._callSubscriber(this._state);

        }
    }





export default store;
window.store = store;
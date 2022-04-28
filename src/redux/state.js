import {rerenderEntireTree} from "../render";

let state = {
    profilePage: {
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
    dialoguesPage: {
        postData: [
            {id: 1, message: 'How are you?', likesCount: 100},
            {id: 2, message: 'It\'s my first post', likesCount: 13},
            {id: 3, message: 'How are you?', likesCount: 12}
        ],

    },
    sitebar: {
            friendsData: [
                {id: 1, name: 'Artur'},
                {id: 2, name: 'Tanyuha'},
                {id: 3, name: 'Kamila'}
            ]
    }

    }
export let addPost = (postMessage) => {

    let newPost = {
        id: 5,
        message:  postMessage,
        likesCount: 0
    };
    state.dialoguesPage.postData.push(newPost);
    rerenderEntireTree(state);
};



export default state;
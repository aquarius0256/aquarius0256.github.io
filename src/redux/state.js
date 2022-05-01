let rerenderEntireTree = () => {
    console.log('state changed');
}
let state = {
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

    }
export const addPost = () => {

    let newPost = {
        id: 5,
        message:  state.profilePage.newPostText,
        likesCount: 0

    };
    state.profilePage.postData.push(newPost);
    state.profilePage.newPostText = '';
    rerenderEntireTree(state);
};

export const updateNewPostText = (newText) => {

    let newPost = {
        id: 5,
        message:  postMessage,
        likesCount: 0
    };
    state.profilePage.newPostText = newText;
    rerenderEntireTree(state);
};

export const subscribe = (observer) => {
rerenderEntireTree = observer; // наблюдатель pattern
}

export default state;
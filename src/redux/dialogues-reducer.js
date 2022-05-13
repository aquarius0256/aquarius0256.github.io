
let initialState = {
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
}


const dialoguesReducer = (state = initialState, action) => {

    switch (action.type) {
        case 'UPDATE-NEW-MESSAGE-BODY':
            state.newMessageBody = action.body;
            return state;
        case 'SEND-MESSAGE':
            let body = state.newMessageBody;
            state.newMessageBody = '';
            state.messagesData.push({id: 4, message: body});
            return state;
        default:
            return state;
    }


}

export const sendMessageCreator = () => ({type: 'SEND-MESSAGE'})
export const updateNewMessageBodyCreator = (body) => ({type: 'UPDATE-NEW-MESSAGE-BODY', body: body})

export default dialoguesReducer;
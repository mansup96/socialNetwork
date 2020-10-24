const UPDATE_NEW_MESSAGE_BODY = "UPDATE_NEW_MESSAGE_BODY",
    SEND_MESSAGE = "SEND_MESSAGE";

let initialState = {
    chatData: [
        {id: 1, name: "Sveta"},
        {id: 2, name: "Sasha"},
        {id: 3, name: "Artem"},
        {id: 4, name: "Kolya"},
        {id: 5, name: "Masha"},
        {id: 6, name: "Jenya"},
        {id: 7, name: "Artur"}
    ],

    messageData: [
        {id: 1, message: "Hi"},
        {id: 2, message: "How are you?"},
        {id: 3, message: "Yo"},
        {id: 4, message: "Privet"}
    ],

    newMessageBody: ""
};

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_NEW_MESSAGE_BODY:
            return {
                ...state,
                newMessageBody: action.body
            };

        case SEND_MESSAGE:
            return {
                ...state,
                newMessageBody: '',
                messageData: [...state.messageData, {id: 6, message: state.newMessageBody}]
            };

        default:
            return state;
    }
};

export default dialogsReducer;

export const sendMessageCreator = () => ({type: SEND_MESSAGE});
export const updateNewMessageBodyCreator = body => ({
    type: UPDATE_NEW_MESSAGE_BODY,
    body
});
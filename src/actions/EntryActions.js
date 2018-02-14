export const getEntries = () => {
    return (dispatch, getState) => {
        const { firebase } = getState();
        console.log(getState());
        // firebase.ref(`entries/${firebase.auth.uid}`).then((data) => {
        //     console.log(data);
        //     dispatch({
        //         something
        //     })
        // })
    }
};
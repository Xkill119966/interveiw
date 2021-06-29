import { addData, loadBarData, loadPieData, catchError } from "../index";
import { API_HOST } from "../../apiHost";
const API_URL = `${API_HOST}`



export function apiLoadAllBarData() {
    return async (dispatch) => {
        try {
            let response = await fetch(`${API_URL}/bar`);
            let data = await response.json()
            dispatch(loadBarData(data))
        } catch (error) {
            dispatch(catchError(error))
        }
    }
}

export function apiLoadAllPieData() {
    return async (dispatch) => {
        try {
            let response = await fetch(`${API_URL}/pie`);
            let data = await response.json()
            dispatch(loadPieData(data))
        } catch (error) {
            dispatch(catchError(error))
        }
    }
}

// export function apiAddPost(title, body) {
//     let jsonReq = {
//         title,
//         body
//     };
//     let options = {
//         method: 'POST',
//         headers: {
//             'Content-Type': 'application/json'
//             // 'Content-Type': 'application/x-www-form-urlencoded',
//         },
//         body: JSON.stringify(jsonReq)
//     };
//     return (dispatch) => {
//         console.log('Run function loadAllPost');
//         fetch(API_URL, options)
//             .then(response => response.json())
//             .then(post => dispatch(addPost(post)));
//         ;
//     }
// }

// export function apiDeletePost(reqPost) {
//     let options = {
//         method: 'DELETE',
//         headers: {
//             'Content-Type': 'application/json'
//             // 'Content-Type': 'application/x-www-form-urlencoded',
//         }
//     };
//     return (dispatch) => {
//         console.log('Run function delete Post');
//         fetch(API_URL + "/" + reqPost._id, options)
//             .then(response => response.json())
//             .then(post => dispatch(deletePost(reqPost)));
//         ;
//     }
// }
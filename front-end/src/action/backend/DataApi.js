import {  loadBarData, loadPieData, catchError } from "../index";
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
            if (response.status === 200) {
                
            }
            let data = await response.json()
            dispatch(loadPieData(data))
        } catch (error) {
            dispatch(catchError(error))
        }
    }
}

export function apiAddData(data) {
    let options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    };
    return async (dispatch) => {
        try {
            let response = await fetch(`${API_URL}/chart`, options);
            if (response.status === 201) {
                dispatch(apiLoadAllPieData())
                dispatch(apiLoadAllBarData())
            }
        } catch (error) {
            dispatch(catchError(error))
        }
    }
}

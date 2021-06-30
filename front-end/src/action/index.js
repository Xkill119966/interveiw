import { LOAD_PIE, LOAD_BAR , CATCH_ERROR} from './constant/action-type';

export function loadBarData(data)
{
    return {
        type: LOAD_BAR,
        bar: data
    }
}

export function loadPieData(data)
{
    return {
        type: LOAD_PIE,
        pie: data
    }
}



export function catchError(error) {
    return {
        type : CATCH_ERROR,
        error : error
    }
}
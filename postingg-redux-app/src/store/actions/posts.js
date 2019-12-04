import * as actionTypes from './actionTypes';

export const gridView = () => {
    return {
        type : actionTypes.GRID_VIEW
    }
}

export const listView = () => {
    return {
        type : actionTypes.LIST_VIEW
    }
}

export const viewPost = (post) => {
    return {
        type : actionTypes.VIEW_POST,
        post : post
    }
}

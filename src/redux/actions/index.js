//import axios from 'axios'

export const GET_ALL_CHARACTERS = "GET_ALL_CHARACTERS";
export const GET_ALL_EPISODES = "GET_ALL_EPISODES";
export const INSERT_CHARACTER = "INSERT_CHARACTER";
export const DELETE_CHARACTER = "DELETE_CHARACTER";
export const DELETE_CHARACTER_DB = "DELETE_CHARACTER_DB";
export const DELETE_CHARACTER_STATE = "DELETE_CHARACTER_STATE";
export const INSERT_EPISODE = "INSERT_EPISODE";
export const DELETE_EPISODE = "DELETE_EPISODE";
export const DELETE_EPISODE_DB = "DELETE_EPISODE_DB";
export const DELETE_EPISODE_STATE = "DELETE_EPISODE_STATE";

const baseUrl = 'http://localhost:3001'
let idCharacter = 12,
	idEpisode = 12;

export const getAllCharacters = (page) => {
	if(page){
		return async function(dispatch) {
			return await fetch(`${baseUrl}/characters?page=${page}`).then(response => response.json()).then(res => dispatch({type: GET_ALL_CHARACTERS, payload: res}))
		}
	} else {
		return async function(dispatch) {
			return await fetch(`${baseUrl}/characters`).then(response => response.json()).then(res => dispatch({type: GET_ALL_CHARACTERS, payload: res}))
		}
	}
}

export const getAllEpisodes = (page) => {
	if(page){
		return async function(dispatch) {
			return await fetch(`${baseUrl}/episodes?page=${page}`).then(response => response.json()).then(res => dispatch({type: GET_ALL_EPISODES, payload: res}))
		}
	} else {
		return function(dispatch) {
			return fetch(`${baseUrl}/episodes`).then(response => response.json()).then(res => dispatch({type: GET_ALL_EPISODES, payload: res}))
		}
	}
};

export const insertCharacter = (info) => {
	return {
		type: INSERT_CHARACTER,
		payload: {...info, id: idCharacter++}
	}
};
export const deleteCharacter = (id) => {
	return {
		type: DELETE_CHARACTER,
		payload: id
	}
};
export const deleteCharacterDB = (id) => {
	return {
		type: DELETE_CHARACTER_DB,
		payload: id
	}
}
export const deleteCharacterState = (id) => {
	return {
		type: DELETE_CHARACTER_STATE,
		payload: id
	}
}
export const insertEpisode = (info) => {
	return {
		type: INSERT_EPISODE,
		payload: {...info, id: idEpisode++}
	}
};
export const deleteEpisode = (id) => {
	return {
		type: DELETE_EPISODE,
		payload: id
	}
};
export const deleteEpisodeDB = (id) => {
	return {
		type: DELETE_EPISODE_DB,
		payload: id
	}
}
export const deleteEpisodeState = (id) => {
	return {
		type: DELETE_EPISODE_STATE,
		payload: id
	}
}
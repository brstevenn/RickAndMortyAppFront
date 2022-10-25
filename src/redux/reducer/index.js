import { GET_ALL_CHARACTERS, GET_ALL_EPISODES, INSERT_CHARACTER, DELETE_CHARACTER, DELETE_CHARACTER_DB, DELETE_CHARACTER_STATE, INSERT_EPISODE, DELETE_EPISODE, DELETE_EPISODE_DB, DELETE_EPISODE_STATE } from '../actions/index'

const initialState = {
	episodes: {
		database: [],
		newEpisodes: [],
		info: [],
		results: []
	},
	characters: {
		database: [],
		newCharacters: [],
		info: [],
		results: []
	}
}

const rootReducer = (state = initialState, action) => {
	switch (action.type) {
		case GET_ALL_EPISODES:
			return {...state, episodes: {
				database: action.payload.database,
				newEpisodes: state.episodes.newEpisodes,
				info: action.payload.info,
				results: action.payload.results
			}}
		case GET_ALL_CHARACTERS:
			return {...state, characters: {
				database: action.payload.database,
				newCharacters: state.characters.newCharacters,
				info: action.payload.info,
				results: action.payload.results
			}}
		case INSERT_EPISODE:
			return {...state, episodes: {
				database: state.episodes.database,
				newEpisodes: [...state.episodes.newEpisodes, action.payload],
				info: state.episodes.info,
				results: state.episodes.results
			}}
		case DELETE_EPISODE:
			return {...state, episodes: {
				database: state.episodes.database,
				newEpisodes: state.episodes.newEpisodes,
				info: state.episodes.info,
				results: state.episodes.results.filter(item => item.id !== action.payload)
			}}
		case DELETE_EPISODE_DB:
			return {...state, episodes: {
				newEpisodes: state.episodes.newEpisodes,
				info: state.episodes.info,
				results: state.episodes.results,
				database: state.episodes.database.filter(item => item.id !== action.payload)
			}}
		case DELETE_EPISODE_STATE:
			return {...state, episodes: {
				database: state.episodes.database,
				newEpisodes: state.episodes.newEpisodes.filter(item => item.id !== action.payload),
				info: state.episodes.info,
				results: state.episodes.results
			}}
		case INSERT_CHARACTER:
			return {...state, characters: {
				database: state.characters.database,
				newCharacters: [...state.characters.newCharacters, action.payload],
				info: state.characters.info,
				results: state.characters.results
			}}
		case DELETE_CHARACTER:
			return {...state, characters: {
				database: state.characters.database,
				newCharacters: state.characters.newCharacters,
				info: state.characters.info,
				results: state.characters.results.filter(item => item.id !== action.payload)
			}}
		case DELETE_CHARACTER_DB:
			return {...state, characters: {
				database: state.characters.database.filter(item => item.id !== action.payload),
				newCharacters: state.characters.newCharacters,
				info: state.characters.info,
				results: state.characters.results
			}}
		case DELETE_CHARACTER_STATE:
			return {...state, characters: {
				database: state.characters.database,
				newCharacters: state.characters.newCharacters.filter(item => item.id !== action.payload),
				info: state.characters.info,
				results: state.characters.results
			}}
		default:
			return state;
	}
}

export default rootReducer
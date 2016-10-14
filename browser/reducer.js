
const initialState = { allPuppies: [
  { id: 1, name: 'Cody' },
  { id: 2, name: 'Ben' },
  { id: 3, name: 'Bubba' }
]
}

export default function reducer (state = initialState, action) {
  switch (action.type) {
  	// case RECEIVE_ALBUMS: return action.albums.map(convertAlbums);
  	default: return state;
	}
}

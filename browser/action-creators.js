export const RECEIVE_PUPS = 'RECEIVE_PUPS'

export const receivePups = puppies => ({
  type: RECEIVE_PUPS,
  puppies
});

// export const fetchPups = () =>
//   dispatch =>
//     fetch('/api/puppies')
//       .then(res => res.json())
//       .then(puppies => {
//         dispatch(receivePups(puppies));
//     });


export const fetchPups = function() {

  return function(dispatch) {
      fetch('/api/puppies')
        .then(res => res.json())
        .then(serverPuppies => {
          dispatch(receivePups(serverPuppies));
        })
        .catch(function(err){
          console.log(err)
        })

  }
}


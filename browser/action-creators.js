export const RECEIVE_PUPS = 'RECEIVE_PUPS'
export const RECEIVE_PUP = 'RECEIVE_PUP'

export const receivePups = puppies => ({
  type: RECEIVE_PUPS,
  puppies
});

export const receivePup = selectedPuppy => ({
  type: RECEIVE_PUP,
  selectedPuppy
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

export const fetchPuppy = function(puppyId) {

  return function(dispatch) {
      fetch(`/api/puppies/${puppyId}`)
        .then(res => res.json())
        .then(selectedPuppy => {
          dispatch(receivePup(selectedPuppy));
        })
        .catch(function(err){
          console.log(err)
        })

  }
}








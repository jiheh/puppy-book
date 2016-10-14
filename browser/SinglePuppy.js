import React from 'react';

export default ({selectedPuppy}) => (
  <div>
    <h2>{selectedPuppy.name}</h2>
    <div>
      <img src={selectedPuppy.image} />
    </div>
  </div>
)

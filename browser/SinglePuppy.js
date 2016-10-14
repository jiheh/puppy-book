import React from 'react';

export default ({selectedPuppy}) => (
  <div>
    <h2>{selectedPuppy.name}</h2>
    <div>
      <img src={selectedPuppy.image} />
    </div>

    {
      (function(){
        if(selectedPuppy.name) {
          var msg = new SpeechSynthesisUtterance(selectedPuppy.name);
          window.speechSynthesis.speak(msg);
        }
      })()
    }

  </div>
  )




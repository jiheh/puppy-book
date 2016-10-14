import React from 'react';


export default ({allPuppies}) => (
  <div>
    <ul className="list-unstyled">
      {
        allPuppies && allPuppies.map(puppy => (
          <li key={puppy.id}>{puppy.name}</li>
          )
        )
      }
    </ul>
  </div>
)

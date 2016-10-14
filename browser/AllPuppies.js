import React from 'react';


export default class AllPuppies extends React.Component {
  componentDidMount() {
    this.props.loadPups()
  }


  render() {
    const { allPuppies } = this.props;
    return (
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


  }


}

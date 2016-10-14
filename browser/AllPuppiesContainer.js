import { connect } from 'react-redux';
import AllPuppies from './AllPuppies';



// const hardcodedPuppies = [  { id: 1, name: 'Cody' },
//                             { id: 2, name: 'Ben' },
//                             { id: 3, name: 'Bubba' }];

const mapStateToProps = ({allPuppies}) => ({
  allPuppies
});

// const mapDispatchToProps = function(dispatch) {

//   return {
//     loadPups: function(){
//       // const action = receivePups(hardcodedPuppies)
//       dispatch(fetchPups());
//     }
//   }
// }


export default connect(mapStateToProps)(AllPuppies);

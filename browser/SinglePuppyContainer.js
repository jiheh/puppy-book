import { connect } from 'react-redux';
import SinglePuppy from './SinglePuppy';

const mapStateToProps = ({selectedPuppy}) => ({
  selectedPuppy
});

export default connect(mapStateToProps)(SinglePuppy);

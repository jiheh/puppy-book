import { connect } from 'react-redux';
import AllPuppies from './AllPuppies';

const mapStateToProps = ({allPuppies}) => ({
	allPuppies
});

export default connect(
	mapStateToProps
)(AllPuppies);
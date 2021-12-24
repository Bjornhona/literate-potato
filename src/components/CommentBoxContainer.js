import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as actions from 'actions';
import CommentBox from 'components/CommentBox';

// const mapStateToProps = (state) => {
//   const {comments} = state;
//   return comments;
// }

const mapDispatchToProps = (dispatch) => bindActionCreators(actions, dispatch);

export default connect(null, mapDispatchToProps)(CommentBox);
import 'components/App.css';
import CommentBox from 'components/CommentBoxContainer';
import CommentList from 'components/CommentList';

const App = () => {
  return (
    <div className="App">
      <CommentBox />
      <CommentList />
    </div>
  );
}

export default App;

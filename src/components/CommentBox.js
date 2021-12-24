import React, {useState} from "react";

const CommentBox = (props) => {
  const [currentValue, setCurrentValue] = useState('');

  const handleChange = (event) => {
    const newValue = event.target.value;
    setCurrentValue(newValue);
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    props.saveComment(currentValue);
    setCurrentValue('');
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h4>Add a comment</h4>
        <textarea onChange={handleChange} value={currentValue} />
        <div>
          <button>Submit comment</button>
        </div>
      </form>
      <button className="fetch-comments"onClick={props.fetchComments}>Fetch comments</button>
    </div>
  )
}

export default CommentBox;
import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'
import CommentItem from '../CommentItem'
import './index.css'

const initialContainerBackgroundClassNames = [
  'amber',
  'blue',
  'orange',
  'emerald',
  'teal',
  'red',
  'light-blue',
]

class Comments extends Component {
  state = {
    commentsList: [],
    name: '',
    comment: '',
  }

  handleNameChange = event => {
    this.setState({name: event.target.value})
  }

  handleCommentChange = event => {
    this.setState({comment: event.target.value})
  }

  handleAddComment = () => {
    const {name, comment, commentsList} = this.state
    const newComment = {
      id: uuidv4(),
      name,
      comment,
      isLiked: false,
      postedTime: new Date(),
    }
    this.setState({
      commentsList: [...commentsList, newComment],
      name: '',
      comment: '',
    })
  }

  toggleLike = id => {
    this.setState(prevState => ({
      commentsList: prevState.commentsList.map(eachComment => {
        if (eachComment.id === id) {
          return {...eachComment, isLiked: !eachComment.isLiked}
        }
        return eachComment
      }),
    }))
  }

  deleteComment = id => {
    this.setState(prevState => ({
      commentsList: prevState.commentsList.filter(
        eachComment => eachComment.id !== id,
      ),
    }))
  }

  render() {
    const {commentsList, name, comment} = this.state
    return (
      <div className="bgContainer">
        <h1 className="heading">Comments</h1>
        <div className="inputCommentSection">
          <img
            src="https://assets.ccbp.in/frontend/react-js/comments-app/comments-img.png"
            alt="comments"
            className="imageStyle"
          />
          <form className="inputSection">
            <p className="para">Say something about 4.O technologies</p>
            <input
              placeholder="Your Name"
              type="text"
              className="nameInput"
              value={name}
              onChange={this.handleNameChange}
            />
            <textarea
              placeholder="Your Comment"
              className="textAreaStyle"
              value={comment}
              onChange={this.handleCommentChange}
            />
            <button
              type="button"
              className="btnStyle"
              onClick={this.handleAddComment}
            >
              Add Comment
            </button>
          </form>
          <img
            src="https://assets.ccbp.in/frontend/react-js/comments-app/comments-img.png"
            alt="comment"
            className="imageStyle"
          />
        </div>
        <div className="commentsContainer">
          <p className="commentPara">
            <span className="commentCountStyle">{commentsList.length}</span>{' '}
            Comments
          </p>
          <ul className="commentsListStyle">
            {commentsList.map((eachComment, index) => (
              <CommentItem
                key={eachComment.id}
                backgroundClassName={
                  initialContainerBackgroundClassNames[
                    index % initialContainerBackgroundClassNames.length
                  ]
                }
                toggleLike={this.toggleLike}
                deleteComment={this.deleteComment}
                commentDetails={eachComment}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default Comments

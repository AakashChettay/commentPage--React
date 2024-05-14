import {formatDistanceToNow} from 'date-fns'

const CommentItem = ({
  backgroundClassName,
  commentDetails,
  toggleLike,
  deleteComment,
}) => {
  const {id, name, comment, isLiked, postedTime} = commentDetails

  const handleLike = () => {
    toggleLike(id)
  }

  const handleDelete = () => {
    deleteComment(id)
  }

  return (
    <li className={`commentListItem ${backgroundClassName}`}>
      <div className="dpNameAndTimeRowContainer">
        <p className="dpStyle">{name[0]}</p>
        <p className="nameStyle">{name}</p>
        <p className="timeInstance">
          {formatDistanceToNow(new Date(postedTime), {addSuffix: true})}
        </p>
      </div>
      <p className="commentPara">{comment}</p>
      <div className="likeAndDelBtnRowCon">
        <button type="button" className="likeButton" onClick={handleLike}>
          {isLiked ? (
            <div>
              <img
                className="like"
                src="https://assets.ccbp.in/frontend/react-js/comments-app/liked-img.png"
                alt="liked"
              />
              <p className="likedPara">Like</p>
            </div>
          ) : (
            <div>
              <img
                className="like"
                src="https://assets.ccbp.in/frontend/react-js/comments-app/like-img.png"
                alt="like"
              />
              <p className="notLikedPara">Like</p>
            </div>
          )}
        </button>
        <button
          className="deleteButton"
          type="button"
          onClick={handleDelete}
          data-testid="delete"
        >
          <img
            src="https://assets.ccbp.in/frontend/react-js/comments-app/delete-img.png"
            alt="delete"
            className="deleteImg"
          />
        </button>
      </div>
    </li>
  )
}

export default CommentItem

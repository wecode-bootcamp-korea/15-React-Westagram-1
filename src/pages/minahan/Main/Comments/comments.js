import React,{Component} from 'react';



class Comments extends Component{
  render(){ 
     const {comments} = this.props;
    return( 
      <ul>
        {comments.map((comment) =>{
          return(
            <li key={comment.id}>
                <div>
                    <a href="" className="bold">{comment.userName}</a>
                    <span>{comment.comment}</span>
                    <button className="comments_heart">
                      <img src="./images/minahan/heart.png" alt="좋아요" />
                    </button>
                  </div>
              </li>  
          )
        })}
      </ul> 
  )
  }
}

export default Comments;

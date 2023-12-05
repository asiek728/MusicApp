import React, { useState } from 'react'
import likeBtn from '../../assets/like.png'
import dislikeBtn from '../../assets/dislike.png'

const Like = () => {
    const [like, setLike] = useState(false)
    
    function changeLikeState() {
        like ? setLike(false) : setLike(true)
    }

    return (
        <img
        className="like"
        alt={'Like button'}
        onClick={changeLikeState}
        src={like ? likeBtn : dislikeBtn}
      />
    )
}

export default Like

// (1) 必要なパッケージのインストール
import React, { useState } from 'react';
import { IconButton, Typography } from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';

// (2) いいねボタンをuseStateを用いて作る
const LikeButton = () => {
  const [liked, setLiked] = useState(false);
  const [likesCount, setLikesCount] = useState(0);

  // (3) いいねボタンの数を表示する
  const toggleLike = () => {
    setLiked(!liked);
    setLikesCount(liked ? likesCount - 1 : likesCount + 1);
  };

  // (4) いいねボタンが表示される
  return (
    <div>
      <IconButton onClick={toggleLike} color={liked ? 'primary' : 'default'}>
        <FavoriteIcon />
      </IconButton>
      <Typography component="span">{likesCount}</Typography>
    </div>
  );
};

export default LikeButton;
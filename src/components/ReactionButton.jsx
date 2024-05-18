import React, { useState } from "react";
import { Box, IconButton, Typography } from "@mui/material";
import SentimentSatisfiedAltIcon from "@mui/icons-material/SentimentSatisfiedAlt";
import SentimentSatisfiedIcon from "@mui/icons-material/SentimentSatisfied";
import SentimentVeryDissatisfiedIcon from "@mui/icons-material/SentimentVeryDissatisfied";

const ReactionButton = ({ Icon, count, setCount, selected, setSelected }) => {
  const toggleReaction = () => {
    setSelected(!selected);
    setCount(selected ? count - 1 : count + 1);
  };

  return (
    <Box display="flex" alignItems="center" mx={1}>
      <IconButton onClick={toggleReaction} color={selected ? "primary" : "default"}>
        {Icon}
      </IconButton>
      <Typography component="span">{count}</Typography>
    </Box>
  );
};

const Reactions = () => {
  const [liked, setLiked] = useState(false);
  const [likesCount, setLikesCount] = useState(0);

  const [agreed, setAgreed] = useState(false);
  const [agreesCount, setAgreesCount] = useState(0);

  const [understood, setUnderstood] = useState(false);
  const [understandsCount, setUnderstandsCount] = useState(0);

  return (
    <Box display="flex" justifyContent="flex-end" mt={2}>
      <ReactionButton
        Icon={<SentimentSatisfiedAltIcon />}
        count={likesCount}
        setCount={setLikesCount}
        selected={liked}
        setSelected={setLiked}
      />
      <ReactionButton
        Icon={<SentimentSatisfiedIcon />}
        count={agreesCount}
        setCount={setAgreesCount}
        selected={agreed}
        setSelected={setAgreed}
      />
      <ReactionButton
        Icon={<SentimentVeryDissatisfiedIcon />}
        count={understandsCount}
        setCount={setUnderstandsCount}
        selected={understood}
        setSelected={setUnderstood}
      />
    </Box>
  );
};

export default Reactions;

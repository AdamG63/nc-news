import { useState } from "react";
import { patchArticleById } from "./Utils/Axios";
import { useParams } from "react-router-dom";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import ThumbDownIcon from "@mui/icons-material/ThumbDown";

const Votes = ({ pre_votes }) => {
  const [votes, setVotes] = useState(pre_votes);
  const [upClicked, setUpClicked] = useState(false);
  const [downClicked, setDownClicked] = useState(false);
  const [err, setErr] = useState(null);
  const { article_id } = useParams();

  const handleclick = () => {
    setVotes((currVotes) => (downClicked ? currVotes + 2 : currVotes + 1));
    setUpClicked(true);
    setDownClicked(false);
    patchArticleById(article_id).catch((err) => {
      setVotes((currVotes) => currVotes - 1);
      setErr("Something went wrong, please try again.");
    });
  };

  const HandleDownVote = () => {
    setVotes((currVotes) => (upClicked ? currVotes - 2 : currVotes - 1));
    setUpClicked(false);
    setDownClicked(true);
    patchArticleById(article_id).catch((err) => {
      setVotes((currVotes) => currVotes + 1);
      setErr("Something went wrong, please try again.");
    });
  };

  if (err) {
    return <p>{err}</p>;
  }

  return (
    <>
      <button onClick={handleclick} disabled={upClicked}>
        <ThumbUpIcon />
      </button>
      <button onClick={HandleDownVote} disabled={downClicked}>
        <ThumbDownIcon />
      </button>
      <p>{votes} votes</p>
    </>
  );
};

export default Votes;

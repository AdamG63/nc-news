import { useState } from "react";
import { patchArticleById } from "./Utils/Axios";
import { useParams } from "react-router-dom";

const Votes = ({ pre_votes }) => {
  const [votes, setVotes] = useState(pre_votes);
  const [clicked, setClicked] = useState(false);
  const { article_id } = useParams();

  const handleclick = () => {
    setVotes((currVotes) => currVotes + 1);
    setClicked(true);
    patchArticleById(article_id).catch(() => {
      setVotes((currVotes) => currVotes - 1);
    });
  };

  return (
    <>
      <button onClick={handleclick} disabled={clicked}>
        Vote
      </button>
      <p>{votes} votes</p>
    </>
  );
};

export default Votes;

import { useState } from "react";
import { patchArticleById } from "./Utils/Axios";
import { useParams } from "react-router-dom";

const Votes = ({ pre_votes }) => {
  const [votes, setVotes] = useState(pre_votes);
  const [clicked, setClicked] = useState(false);
  const [err, setErr] = useState(null);
  const { article_id } = useParams();

  const handleclick = () => {
    setVotes((currVotes) => currVotes + 1);
    setClicked(true);
    patchArticleById(article_id).catch((err) => {
      setVotes((currVotes) => currVotes - 1);
      setErr("Something went wrong, please try again.");
    });
  };

  if (err) {
    return <p>{err}</p>;
  }

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

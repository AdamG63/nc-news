import { useState } from "react";

const Topics = () => {
  const [topics, setTopics] = useState([
    {
      slug: "coding",
      description: "Code is love, code is life",
    },
    {
      slug: "football",
      descriptio: "FOOTIE!",
    },
    {
      slug: "cooking",
      description: "Hey good looking, what you got cooking?",
    },
  ]);

  return <h1 className="Topics">Topics</h1>;
};

export default Topics;

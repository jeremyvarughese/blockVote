import React, { useContext, useEffect, useState } from "react";
import axios from "../axios";
import Chart from "../components/Polls/Chart";
import Panel from "../components/Polls/Panel";
import { AuthContext } from "../contexts/Auth";
import Running from "../components/Polls/Running";
import Finished from "../components/Polls/Finished";



const Result = () => {
  const [voteState, setVoteStatus] = useState<
    "finished" | "running" | "not-started" | "checking"
  >("finished");
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState({ name: "", description: "", votes: {} });

  const authContext = useContext(AuthContext);

  useEffect(() => {
    axios.get("/polls/").then((res) => {
      setData(res.data);
      setLoading(false);
    });
  }, []);

  if (loading) return <div></div>;

  return (
    <div>
      <div>{voteState === "finished" ? 
      
      
      <Finished/> : <p></p>}</div>
        <div>
        {voteState === "running" ? <Running/> : <p></p>}

        </div>
    <Panel name={data.name} description={data.description}>
      <Chart votes={data.votes} />
    </Panel>
    
    </div>
    
  );
};

export default Result;

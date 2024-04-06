import React, { useEffect, useState } from "react";
import Panel from "../components/Polls/Panel";
import Chart from "../components/Polls/Chart";
import axios from "../axios";
import Running from "../components/Polls/Running";

const Polls = () => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState({ name: "", description: "", votes: {} });

  useEffect(() => {
    axios
      .get("/polls/")
      .then((res) => {
        setData(res.data);
        setLoading(false);
      })
      .catch((err) => console.log({ err }));
  }, []);

  if (loading) return <div></div>;

  return (
    <div>
      <Running/>
    <Panel name={data.name} description={data.description}>
      <Chart votes={data.votes} />
    </Panel>
    </div>
  );
};

export default Polls;

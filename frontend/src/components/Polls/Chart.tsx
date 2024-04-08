import { useEffect, useState } from "react";
import axios from "../../axios";
import { stat } from "fs";


interface ChartProps {
  votes: any;
  enableVote?: boolean;
  userId?: number;
  userName?: string;
}



const Chart = (props: ChartProps) => {
  
  const votes = props.votes;

  const getButtons = () => {
    const names = [];

    const vote = (candidate: string) => {
      axios
        .post("/polls/vote", {
          id: props.userId?.toString(),
          name: props.userName,
          candidate,
        })
        .then((_) => window.location.reload())
        .catch((err) => console.log({ err }));
    };

    for (const name in votes) {
      names.push(
        <button
          onClick={() => vote(name)}
          key={name}
          className="button-wrapper text-normal"
        >
          vote
        </button>
      );
    }

    return names;
  };

  const getNames = () => {
    const names = [];

    for (const name in votes) {
      names.push(
        <div key={name} className="name-wrapper text-normal">
          <b>
          {name}
          </b>
        </div>
      );
    }

    return names;
  };

  const getTotal = () => {
    let total = 0;

    for (const name in votes) {
      total += parseInt(votes[name]);
      
    }

    return total;
  };


  const getWinner = () => {
    let highestVotes = 0;
    let winners: string[] = [];
    for (const name in votes) {
      const voteCount = parseInt(votes[name]);

      if(voteCount > highestVotes  && name!="NOTA") {
        highestVotes = voteCount;
        winners = [name];
      } else if (voteCount === highestVotes) {
        winners.push(name);
      }
    }

    if(winners.length === 1) {
      return winners[0];
    } else if(winners.length > 1) {
      return "Draw";
    } else {
      return "No winner!";
    }
  };
     

  // const getWinner = () => {
  //   let winner = "";
  //   let win = 0;
  //   for (const name in votes) {
      
  //     if(votes[name] > win && votes[name]!="NOTA") {
  //       winner=name;
  //       win = parseInt(votes[name]);
  //     }

  //     else {

  //     }

  //   }
  //   return winner;
  // }

  const getBars = () => {
    const bars = [];
    const total = getTotal();

    for (const name in votes) {
      const count = votes[name];
      bars.push(
        <div key={name} className="bar-wrapper">
          <div
            style={{
              height: count != 0 ? `${(count * 100) / total}%` : "auto",
              border: "2px solid #4daaa7",
              display: "flex",
              flexDirection: "column",
              justifyContent: "flex-end",
              alignItems: "center",
              color: "white",
              backgroundColor: "#223544",
              paddingBottom: 10,
              paddingTop: 10,
      
            }}
          >
            {votes[name]}
          </div>
        </div>
      );
    }

    return bars;
  };

  const [loading, setLoading] = useState<boolean>(true);
  const [status, setStatus] = useState<"not-started" | "running" | "finished">(
    "not-started"
  );

  useEffect(() => {
    setLoading(true);
    axios
      .get("/polls/status")
      .then((res) => {
        setStatus(res.data.status);
        setLoading(false);
      })
      .catch((error) => console.log({ error }));
  }, []);


  return (
    <div className="chart">
      <div>Total votes: {getTotal()}</div>
      <div>{status === "finished" ?
      <span className="win-text">{getWinner() === "Draw"? getWinner() : <p>{getWinner()} wins!</p>}</span> : <div></div>}
      </div>
      <div className="bars-container">{getBars()}</div>
      <div className="names-wrapper">{getNames()}</div>

      {props.enableVote ? (
        <div className="buttons-wrapper">{getButtons()}</div>
      ) : null}
    </div>
  );
};

export default Chart;

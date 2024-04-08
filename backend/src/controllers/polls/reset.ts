import { Request, Response } from "express";
import ElectionContract, { web3 } from "../../web3";
import { Candidate } from "../../entity/Candidate";
import { Poll } from "../../entity/Poll";
import { del } from "memory-cache";

const deleteCandidate = new Candidate();
const deletePoll = new Poll();

export default async (_: Request, res: Response) => {
  const accounts = await web3.eth.getAccounts();
  const instance = await ElectionContract.deployed();

  const status = await instance.getStatus();

  if (status !== "finished")
    return res.status(400).send("election not finished or already reset");

    try {
      await Poll.delete(deletePoll);
      await Candidate.delete(deleteCandidate);
    } catch (error) {
      return res.status(400).send(error);
    }
  await instance.resetElection({ from: accounts[0] });


  return res.send("successful");
};

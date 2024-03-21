import React from "react";
import Feature from "../Features/Feature";
import { MdGppGood, MdLibraryAddCheck, MdLock, MdShare } from "react-icons/md";

const Features = () => {
  return (
    <div className="features-wrapper">
      <div className="title-large">Amazing Features</div>
      <div className="title-small">
        Some of the ground-breaking features:
      </div>

      <div className="mobile-wrapper">
        <div>
          <Feature title="Immutability" icon={<MdLock />} align="right">
            <p>
              Immutability means something that can’t be changed or altered.
              This is one of the top blockchain features that help to ensure
              that the technology will remain as it is, a permanent, unalterable
              network.
            </p>
          </Feature>
        </div>

        <div className="mobile-container">
          <img src="https://w7.pngwing.com/pngs/179/762/png-transparent-ballot-box-voting-election-vote-box-angle-white-rectangle.png"  width="400" height="400" />
        </div>

        <div>
          <Feature title="Enhanced Security" icon={<MdGppGood />} align="left">
            <p>
            Blockchain enhances information security by only allowing data access to authorized personnel. 
            Blockchain enables access control, ensuring that only approved individuals can view and edit the documents.
            </p>
          </Feature>
        </div>
        <div>
          <Feature title="Decentralized" icon={<MdShare />} align="right">
            <p>
            In a decentralized blockchain network, no one has to know or trust anyone else. 
            Each member in the network has a copy of the exact same data in the form of a distributed ledger. 
            If a member's ledger is altered or corrupted in any way, it will be rejected by the majority of the members in the network.
        
            </p>
          </Feature>
        </div>
        <div>
          <Feature
            title="Distributed Ledger"
            icon={<MdLibraryAddCheck />}
            align="left"
          >
            <p>
            A distributed ledger can be described as a ledger of any transactions or
             contracts maintained in decentralized form across different locations and people.
            </p>
          </Feature>
        </div>
      </div>
    </div>
  );
};

export default Features;

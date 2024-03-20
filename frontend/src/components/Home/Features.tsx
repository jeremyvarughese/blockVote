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
          <img src="data:image/jpeg;base64,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" />
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

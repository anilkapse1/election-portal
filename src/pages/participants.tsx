import React, { useEffect, useState } from "react";
import GridList from "../components/grid-list";
import { Typography } from "@mui/material";

const Listofparticipant = (props: any) => {
  const { participants, searchMember } = props;

  // STATE DECLARATION
  const [participantsMember, setParticipantsMember] = useState([]);

  // FETCH PARTICIPANTS LIST
  useEffect(() => {
    const result = participants.filter((val: any) => val.isElected !== true);
    setParticipantsMember(result);
  }, [participants]);

  return (
    <div id="list-of-participant">
      <Typography variant="h5" gutterBottom>
        Participant No.{" "}
        <span
          style={{
            width: "50px",
            height: "50px",
            borderRadius: "50%",
            backgroundColor: "grey",
            textAlign: "center",
            lineHeight: "50px",
            display: "inline-block",
            color: "white",
          }}
        >
          {participantsMember.length}
        </span>
      </Typography>
      <GridList list={participantsMember} searchMember={searchMember} />
    </div>
  );
};

export default Listofparticipant;

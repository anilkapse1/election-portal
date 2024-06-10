import React, { useEffect, useState } from "react";
import GridList from "../components/grid-list";
import { Typography } from "@mui/material";

const ElectedMember = (props: any) => {
  const { participants } = props;

  // STATE DECLARATION
  const [electedMember, setElectedMember] = useState([]);

  // FETCH ELECTED MEMBERS
  useEffect(() => {
    const result = participants.filter((val: any) => val.isElected === true);
    setElectedMember(result);
  }, [participants]);

  return (
    <div>
      <Typography variant="h5" gutterBottom>
        Elected No.{" "}
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
          {electedMember.length}
        </span>
      </Typography>
      <GridList list={electedMember} />
    </div>
  );
};

export default ElectedMember;

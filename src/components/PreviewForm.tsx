import { Close } from "@mui/icons-material";
import { Box, Dialog, DialogContent, DialogTitle, IconButton, Typography } from "@mui/material";
import React from "react";

const PreviewForm = (props: any) => {
  // PROPS
  const { data } = props;

  //STATE DECLARATION
  const [open, setOpen] = React.useState(props.open);
  const formPic = data.participant_letter;
  const imagePath = `/election-portal${formPic}`

  const handleClose = () => {
    setOpen(false);
    props.close();
  };

  return (
    <div>
      <Dialog
        maxWidth={"lg"}
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          <div style={{ paddingRight: "20px" }}>
            <Typography variant="h4">
              Hello, I am <span style={{ textTransform: "capitalize" }}>{data.name}</span>{" "}
              <span style={{ textTransform: "capitalize" }}>{data.middle_name}</span>{" "}
              <span style={{ textTransform: "capitalize" }}>{data.surname}</span> from{" "}
              <span style={{ textTransform: "capitalize" }}>{data.area}</span>
            </Typography>
            <IconButton
              aria-label="close"
              onClick={handleClose}
              sx={{
                position: "absolute",
                right: 8,
                top: 8,
                color: "black",
              }}
            >
              <Close />
            </IconButton>
          </div>
        </DialogTitle>
        <DialogContent>
          <Box sx={{ width: "100%" }}>
            <img src={imagePath} style={{ width: "100%" }} />
          </Box>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default PreviewForm;

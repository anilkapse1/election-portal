import { MoreVert } from "@mui/icons-material";
import { IconButton, ListItemText, MenuItem, MenuList, Paper, Popover, Typography } from "@mui/material";
import React, { useState } from "react";
import PreviewForm from "./PreviewForm";

const PreviewActions = (props: any) => {
  const [popoverAnchorEl, setPopoverAnchorEl] = useState<null | HTMLElement>(null);
  const [openDeletePopup, setOpenDeletePopup] = useState<boolean>(false);

  const handlePopoverOpen = (event: React.MouseEvent<HTMLElement>) => {
    setPopoverAnchorEl(event.currentTarget);
  };

  const handlePopoverClose = () => {
    setPopoverAnchorEl(null);
  };

  const handleDeletePopup = () => {
    setOpenDeletePopup(true);
    setPopoverAnchorEl(null);
  };

  const closeDeletePopup = () => {
    setOpenDeletePopup(false);
  };

  return (
    <div>
      <IconButton onClick={handlePopoverOpen}>
        <MoreVert />
      </IconButton>

      <Popover
        open={Boolean(popoverAnchorEl)}
        anchorEl={popoverAnchorEl}
        onClose={handlePopoverClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
      >
        <Paper sx={{ maxWidth: "100%" }}>
          <MenuList>
            <MenuItem onClick={handleDeletePopup}>
              <ListItemText sx={{ paddingLeft: "10px" }}>
                <Typography variant="body1" fontWeight={400}>
                  Preview form
                </Typography>
              </ListItemText>
            </MenuItem>
          </MenuList>
        </Paper>
      </Popover>

      {openDeletePopup && <PreviewForm data={props.params.data} open={openDeletePopup} close={closeDeletePopup} />}
    </div>
  );
};

export default PreviewActions;

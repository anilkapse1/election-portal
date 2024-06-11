import { IconButton } from "@mui/material";
import { useState } from "react";
import PreviewForm from "./PreviewForm";
import VisibilityIcon from "@mui/icons-material/Visibility";

const PreviewActions = (props: any) => {
  const [openDeletePopup, setOpenDeletePopup] = useState<boolean>(false);

  const handlePopoverOpen = () => {
    setOpenDeletePopup(true);
  };

  const closeDeletePopup = () => {
    setOpenDeletePopup(false);
  };

  return (
    <div>
      <IconButton onClick={handlePopoverOpen}>
        <VisibilityIcon />
      </IconButton>

      {openDeletePopup && <PreviewForm data={props.params.data} open={openDeletePopup} close={closeDeletePopup} />}
    </div>
  );
};

export default PreviewActions;

import React from "react";
import Snackbar from "@mui/material/Snackbar";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";

interface SnackbarComponentProps {
  open: boolean;
  message: string;
  isSuccess: boolean;
  onClose: () => void;
}

const SnackbarComponent: React.FC<SnackbarComponentProps> = ({
  open,
  message,
  isSuccess,
  onClose,
}) => {
  
  const action = (
    <IconButton
      size="small"
      aria-label="close"
      color="inherit"
      onClick={onClose}
    >
      <CloseIcon fontSize="small" />
    </IconButton>
  );

  return (
      <Snackbar
        open={open}
        autoHideDuration={2000}
        onClose={onClose}
        message={message}
        action={action}
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
        sx={
          isSuccess
            ? {
                backgroundColor: "green",
                "& .MuiSnackbarContent-root": {
                  backgroundColor: "green",
                  fontWeight: 700,
                },
              }
            : {
                backgroundColor: "red",
                "& .MuiSnackbarContent-root": {
                  backgroundColor: "red",
                  fontWeight: 700,
                },
              }
        }
      />
  );
};

export default SnackbarComponent;

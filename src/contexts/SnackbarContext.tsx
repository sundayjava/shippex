import React, { createContext, useContext, useState, ReactNode } from 'react';
import SnackbarComponent from '../components/SnackBarComponent';

interface SnackbarContextType {
  showSnackbar: (message: string, isSuccess: boolean) => void;
}

const SnackbarContext = createContext<SnackbarContextType | undefined>(undefined);

export const SnackbarProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [snackbarState, setSnackbarState] = useState<{ open: boolean, message: string, isSuccess: boolean }>({ open: false, message: '', isSuccess: false });

  const showSnackbar = (message: string, isSuccess: boolean) => {
    setSnackbarState({ open: true, message, isSuccess });
  };

  const handleClose = () => {
    setSnackbarState(prevState => ({ ...prevState, open: false }));
  };

  return (
    <SnackbarContext.Provider value={{ showSnackbar }}>
      {children}
      <SnackbarComponent
        open={snackbarState.open}
        message={snackbarState.message}
        isSuccess={snackbarState.isSuccess}
        onClose={handleClose}
      />
    </SnackbarContext.Provider>
  );
};

export const useSnackbar = () => {
  const context = useContext(SnackbarContext);
  if (context === undefined) {
    throw new Error('useSnackbar must be used within a SnackbarProvider');
  }
  return context;
};

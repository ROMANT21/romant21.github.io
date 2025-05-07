import React, { useState, useRef } from 'react';
import Crossword from '@jaredreisinger/react-crossword';
import { harryData } from './data.js';
import './App.css';
import { Modal, Box, Typography, Button } from '@mui/material';
import 'normalize.css';


function App() {
  const [completedCrossword, setCompletedCrossword] = useState(false);

  const crosswordRef = useRef(null);

  function resetCrossword() {
    console.log(crosswordRef)
    crosswordRef.current.reset();
    setCompletedCrossword(false);
  }

  function checkCrossword() {
    if (crosswordRef.current.isCrosswordCorrect()) {
      setCompletedCrossword(true);
    }
  }


  return (
      <Box
        sx={{
          minHeight: '100vh',
          minWidth: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          gap: 2,
          backgroundColor: '#FFF3E0'
        }}
      >
        <Typography variant="h5" align="center" 
          sx={{ fontFamily: '"Bagel Fat One", sans-serif', color: '#FF4081'}}
        >
         🍉 CROSSWORD FOR HARRY STAN 🍉
        </Typography>
        <Box>
          <Crossword 
            style={{width: '100vh'}}
            theme={{
              cellBackground: '#FFF3E0',
              numberColor: '#FF4081',
              highlightBackground: ' #76FF03', //#FFEB3B',
            }}
            ref={crosswordRef} 
            data={harryData} 
            onCrosswordCorrect={checkCrossword}
          />
        </Box>
        <Modal open={completedCrossword}>
          <Box
            sx={{
              position: 'absolute',
              justifyContent: 'center',
              alignItems: 'center',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              bgcolor: 'background.paper',
              border: '2px solid #000',
              boxShadow: 24,
              p: 4,
              textAlign: 'center',
              display: 'flex',
              flexDirection: 'column',
              gap: 2,
              backgroundColor: '#FFF3E0'
            }}
          >
            <Typography variant="h5" 
              sx={{ fontFamily: '"Bagel Fat One", sans-serif', color: '#FF4081'}}
            >
              SHES A MEGA FAN!!!
            </Typography>
            <Box component="img" src="harry.jpg" sx={{ width: 200}}/>
            <Button variant="contained" onClick={resetCrossword}>
              <Typography variant="h5" 
                sx={{ fontFamily: '"Bagel Fat One", sans-serif' }}
              >
                GET ME OUTTA HERE!
              </Typography>
            </Button>
          </Box>
        </Modal>
      </Box>
  );
}

export default App;


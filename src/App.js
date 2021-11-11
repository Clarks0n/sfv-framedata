import CharacterSelect from "./screens/CharacterSelect/CharacterSelect";
import FrameDetails from './screens/FrameDetails/FrameDetails';
import './App.css';
import { StyledEngineProvider } from '@mui/material/styles';

// React Router v6
import { BrowserRouter, Routes, Route, } from "react-router-dom";

function App() {
  return (
  <>
    <StyledEngineProvider injectFirst>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<CharacterSelect />} />
          <Route path=":detailsid" element={<FrameDetails />} />
          <Route
            path="*"
            element={
              <main style={{ padding: "1rem" }}>
                <p>There's nothing here!</p>
              </main>
            }
          />
        </Routes>
      </BrowserRouter>
    </StyledEngineProvider>
   
  </>
  );
}

export default App;

import { useState } from 'react';
import PrivacyModal from './components/PrivacyModal';
import Form from './components/Form';
import './App.css';

function App() {
  const [privacyAccepted, setPrivacyAccepted] = useState(false);

  return (
    <div className="app-container">
      {!privacyAccepted && (
        <PrivacyModal onAccept={() => setPrivacyAccepted(true)} />
      )}

      {privacyAccepted && (
        <div className="form-section">
          <h1>Bienvenido a la actividad que no se entrego a tiempo :c</h1>
          <Form />
        </div>
      )}
    </div>
  );
}

export default App;

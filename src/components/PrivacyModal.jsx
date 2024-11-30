import { useState } from 'react';
import PropTypes from 'prop-types';

const PrivacyModal = ({ onAccept }) => {
  const [showFullPrivacy, setShowFullPrivacy] = useState(false);

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        {!showFullPrivacy ? (
          <>
            <h2>Aviso de Privacidad Simplificado</h2>
            <p>
              Este sitio recopila información personal de acuerdo con la{' '}
              <strong>
                Ley General de Protección de Datos Personales en Posesión de
                Sujetos Obligados (LGPDPPSO)
              </strong>{' '}
              de México para proteger tu privacidad.
            </p>
            <p>
              ¿Para qué usamos tus datos? Los utilizamos únicamente para
              fines administrativos y estadísticos.
            </p>
            <button onClick={() => setShowFullPrivacy(true)}>
              Leer Aviso Completo
            </button>
            <button onClick={onAccept}>Aceptar y Continuar</button>
          </>
        ) : (
          <>
            <h2>Aviso de Privacidad Completo</h2>
            <p>
              De acuerdo con la LGPDPPSO, te informamos que los datos
              personales que recabemos serán protegidos y solo se usarán para:
            </p>
            <ul>
              <li>Finalidades administrativas específicas.</li>
              <li>Generar estadísticas internas para mejorar el servicio.</li>
            </ul>
            <p>
              Tienes derecho a Acceso, Rectificación, Cancelación y Oposición
              (Derechos ARCO). Si deseas más información o ejercer tus derechos,
              por favor contacta con el responsable en el{' '}
              <strong>Instituto Tecnológico de Ensenada</strong>.
            </p>
            <button onClick={() => setShowFullPrivacy(false)}>
              Regresar al Aviso Simplificado
            </button>
            <button onClick={onAccept}>Aceptar y Continuar</button>
          </>
        )}
      </div>
    </div>
  );
};

PrivacyModal.propTypes = {
  onAccept: PropTypes.func.isRequired,
};

export default PrivacyModal;

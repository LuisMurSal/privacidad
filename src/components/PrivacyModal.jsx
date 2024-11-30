import { useState } from 'react';
import PropTypes from 'prop-types';

const PrivacyModal = ({ onAccept }) => {
  const [showPrivacyType, setShowPrivacyType] = useState('simplified'); // Estado para gestionar los tipos de aviso

  const renderSimplifiedPrivacy = () => (
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
        ¿Para qué usamos tus datos? Los utilizamos únicamente para fines
        administrativos y estadísticos.
      </p>
      <button onClick={() => setShowPrivacyType('full')}>
        Leer Aviso Completo
      </button>
      <button onClick={() => setShowPrivacyType('cookies')}>
        Leer Aviso sobre Cookies
      </button>
      <button onClick={onAccept}>Aceptar y Continuar</button>
    </>
  );

  const renderFullPrivacy = () => (
    <>
      <h2>Aviso de Privacidad Completo</h2>
      <p>
        De acuerdo con la LGPDPPSO, te informamos que los datos personales
        que recabemos serán protegidos y solo se usarán para:
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
      <button onClick={() => setShowPrivacyType('simplified')}>
        Regresar al Aviso Simplificado
      </button>
      <button onClick={() => setShowPrivacyType('cookies')}>
        Leer Aviso sobre Cookies
      </button>
      <button onClick={onAccept}>Aceptar y Continuar</button>
    </>
  );

  const renderCookiePrivacy = () => (
    <>
      <h2>Aviso de Privacidad sobre Cookies</h2>
      <p>
        Este sitio web utiliza cookies para mejorar la experiencia del usuario
        y realizar análisis de tráfico. Al continuar navegando, aceptas el uso
        de estas cookies.
      </p>
      <p>
        Puedes cambiar la configuración de cookies en cualquier momento en la
        configuración de tu navegador, pero ten en cuenta que algunas
        funcionalidades podrían no estar disponibles si desactivas las cookies.
      </p>
      <button onClick={() => setShowPrivacyType('simplified')}>
        Regresar al Aviso Simplificado
      </button>
      <button onClick={() => setShowPrivacyType('full')}>
        Regresar al Aviso Completo
      </button>
      <button onClick={onAccept}>Aceptar y Continuar</button>
    </>
  );

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        {showPrivacyType === 'simplified' && renderSimplifiedPrivacy()}
        {showPrivacyType === 'full' && renderFullPrivacy()}
        {showPrivacyType === 'cookies' && renderCookiePrivacy()}
      </div>
    </div>
  );
};

PrivacyModal.propTypes = {
  onAccept: PropTypes.func.isRequired,
};

export default PrivacyModal;

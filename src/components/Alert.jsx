import React from 'react';

const Alert = ({ mensaje, tipo }) => {
  const alertClassName = `alert ${tipo === 'error' ? 'alert-error' : 'alert-success'}`;

  return (
    <div className={alertClassName}>
      {mensaje}
    </div>
  );
};

export default Alert;

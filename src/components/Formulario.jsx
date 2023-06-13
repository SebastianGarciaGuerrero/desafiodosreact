import React from 'react';
import { useState } from 'react';
import  Alert  from './Alert';


const Formulario = () => {
  const [nombre, setNombre] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [alerta, setAlerta] = useState(null);

  const handlerPassword = () => {
    if (password !== confirmPassword) {
      setAlerta({ mensaje: 'Las contraseñas no coinciden', tipo: 'error' });
    } else {
      setAlerta(null);
      alert('¡Te has registrado correctamente!');
    }
  };

  function handlerSend(event) {
    event.preventDefault();
    if (!email || !password) {
      setAlerta({ mensaje: 'Por favor, complete todos los campos', tipo: 'error' });
    } else if (password !== confirmPassword) {
      setAlerta({ mensaje: 'Las contraseñas no coinciden', tipo: 'error' });
    } else {
      setAlerta({ mensaje: '¡Te has registrado correctamente!', tipo: 'success' });
      setNombre('');
      setEmail('');
      setPassword('');
      setConfirmPassword('');
    }    
  };
  

  return (
    <>
      <form onSubmit={handlerSend}>
        <input className="input-nombre"
          value={nombre}
          onChange={(event) => setNombre(event.target.value)}
          placeholder="Nombre"
        />
        <input className="input-forms"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          placeholder="tuemail@ejemplo.com"
        />
        <input className="input-forms"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          placeholder="Contraseña"
          type="password"
        />
        <input className="input-forms"
          value={confirmPassword}
          onChange={(event) => setConfirmPassword(event.target.value)}
          type="password"
          placeholder="Confirmar Contraseña"
        />
        <button type="submit" className="btn-submit">Ingresar</button>
        {alerta && <Alert mensaje={alerta.mensaje} tipo={alerta.tipo} />}
      </form>
    </>
  );
};

export default Formulario;

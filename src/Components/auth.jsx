
import React, { useState } from 'react';
import { auth } from '../Firebase/firebaseConfig';
import { signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth';

function Auth() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const signIn = () => {
    signInWithEmailAndPassword(auth, email, password)
      .then((user) => console.log('Usuario autenticado:', user))
      .catch((error) => console.error('Error al iniciar sesión:', error));
  };

  const signUp = () => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((user) => console.log('Usuario registrado:', user))
      .catch((error) => console.error('Error al registrarse:', error));
  };

  return (
    <div>
      <input type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
      <input type="password" placeholder="Contraseña" onChange={(e) => setPassword(e.target.value)} />
      <button onClick={signIn}>Iniciar Sesión</button>
      <button onClick={signUp}>Registrarse</button>
    </div>
  );
}

export default Auth;

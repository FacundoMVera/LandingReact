
import React, { useState } from 'react';
import { auth } from '../Firebase/firebaseConfig';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { useNavigate } from 'react-router-dom'; 

function AuthPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isRegister, setIsRegister] = useState(true); 
  const navigate = useNavigate(); 

  const handleRegister = async () => {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      alert('Usuario registrado exitosamente');
      navigate('/auth'); 
    } catch (error) {
      console.error("Error al registrar usuario", error);
      alert('Error al registrar usuario');
    }
  };

  const handleLogin = async () => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      alert('Inicio de sesión exitoso');
      navigate('/'); 
    } catch (error) {
      console.error("Error al iniciar sesión", error);
      alert('Error al iniciar sesión');
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-form">
        <h2>{isRegister ? 'Registro' : 'Iniciar Sesión'}</h2>
        <input
          type="email"
          placeholder="Correo electrónico"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Contraseña"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        {isRegister ? (
          <button onClick={handleRegister}>Registrar</button>
        ) : (
          <button onClick={handleLogin}>Iniciar Sesión</button>
        )}
        <p onClick={() => setIsRegister(!isRegister)}>
          {isRegister ? '¿Ya tienes cuenta? Inicia sesión' : '¿No tienes cuenta? Regístrate'}
        </p>
      </div>
    </div>
  );
}

export default AuthPage;

import React, {useState} from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './Registro.css'; 


const Registro = () => {
  const [formData, setFormData] = useState({
      first_name: '',
      last_name: '',
      nro_documento: '',
      email: '',
      password: '',
      fecha_nacimiento: '',
      nro_telefono: ''
  });

  const handleChange = (e) => {
      setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
      e.preventDefault();
      try {
          const response = await axios.post('https://vetesoft.com.py/veteadmin/api/auth/registro/', formData);
          console.log(response.data);
          window.alert('Registro exitoso');
      } catch (error) {
          console.error(error);
          window.alert('Error al registrar. Por favor, intenta nuevamente.');
      }
  };


  return (
      <div className="registro-container">
          <div className="form-container">
          <h2>Registro</h2>
          <form onSubmit={handleSubmit}>
              <label htmlFor="first_name">Nombre:</label>
              <input type="text" id="first_name" name="first_name" value={formData.first_name} onChange={handleChange} />

              <label htmlFor="last_name">Apellido:</label>
              <input type="text" id="last_name" name="last_name" value={formData.last_name} onChange={handleChange} />

              <label htmlFor="nro_documento">Número de Documento:</label>
              <input type="text" id="nro_documento" name="nro_documento" value={formData.nro_documento} onChange={handleChange} />

              <label htmlFor="email">Email:</label>
              <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} />

              <label htmlFor="password">Password:</label>
              <input type="password" id="password" name="password" value={formData.password} onChange={handleChange} />

              <label htmlFor="fecha_nacimiento">Fecha de Nacimiento:</label>
              <input type="date" id="fecha_nacimiento" name="fecha_nacimiento" value={formData.fecha_nacimiento} onChange={handleChange} />

              <label htmlFor="nro_telefono">Número de Teléfono:</label>
              <input type="text" id="nro_telefono" name="nro_telefono" value={formData.nro_telefono} onChange={handleChange} />

              <button type="submit">Registrarse</button>
              <div className="login-link">
                 
              </div>
          </form>
      </div>
      </div>
  );
}








export default Registro;


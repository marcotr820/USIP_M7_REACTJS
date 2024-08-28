import React from 'react'
import '../home.css';

const Home = () => {
   return (
      <div className='contenedor'>
         <h1>
            Modulo 7: DESARROLLO FRONTEND CON REACTJS
         </h1>
         <h2>Bienvenido</h2>
         <hr />
         <p>Este modulo se centra en el uso de <b>React,</b> incluyendo la creación de <b>componentes,</b>
            el manejo de <b>hooks,</b> y el uso de <b>Redux.</b>
         </p>
         <h2>Temas Cubiertos</h2>
         <hr />
         <div class="grid-container">
            <div class="grid-item">Componentes funcionales y de clase.</div>
            <div class="grid-item">Uso de react hooks como useState y useEffect.</div>
            <div class="grid-item">Creacion de custom hooks como useForm.</div>
            <div class="grid-item">Gestion de variables de estado como useState</div>
            <div class="grid-item">Gestion de estado global como Redux.</div>
            <div class="grid-item">Integracion de Redux con React</div>
            <div class="grid-item">Manejo de formularios en React</div>
            <div class="grid-item">Publicacion de nuestra pagina en Github Pages</div>
         </div>
         <h2>Recursos Adicionales</h2>
         <hr />
         <p>Profundizar los temas cubiertos consultar los siguientes recursos.</p>
         <hr />
         <div className='footer-home'>
            2024 Modulo 7 USIP.
         </div>
      </div>
   )
}

export default Home

import React, { useState } from 'react';
import { changeUser } from '../store/slices/user.slice';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import '../styles/home.css'

//Actions
// 1. Crear la accion en el slice
// 2. Exportar la accion
// 3. Importarla en el componente donde se utilizara
// 4. Importar y ejecutar useDispatch
// 5. Despachamos la accion

const Home = () => {

    const [userName, setUserName] = useState("");

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const submit = (e) => {
        e.preventDefault();
        dispatch(changeUser(userName))
        navigate("/pokedex")
    }

    return (
        <div>
            <img className='img-pokedex' src="Home/pokedex.png" alt="" />
            <div className='input-container'>
                <h1>¡Hi Trainner!</h1>
                <p>Give me your name to start</p>
                <form className='form-submit' onSubmit={submit}>
                    <input className='input-name'
                        type="text"
                        value={userName}
                        placeholder="Your Name"
                        onChange={e => setUserName(e.target.value)}
                    />
                    <button className='button-startName'>Start</button>
                </form>
            </div>
            <footer className='footer'>
                <div className='footer__black'>
                    <div className='footer__circle'></div>
                </div>
            </footer>
        </div >
    );
};

export default Home;
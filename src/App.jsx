import React, {useEffect} from 'react';
import './App.css';
import {useTelegram} from './hooks/useTelegram.js';
import Header from './components/Header/Header.jsx';
import {Routes, Route} from 'react-router-dom';
import ProductList from './ProductList/ProductList.jsx';
import Form from './Form/Form.jsx';

function App() {
    const {tg, onToggleButton} = useTelegram();
    useEffect(() => {
        tg.ready();
    }, []);


    return (
        <div>
            <Header/>
            <Routes>
                <Route index element={<ProductList/>}/>
                <Route path={'form'} element={<Form/>}/>
            </Routes>
        </div>
    );
}

export default App;

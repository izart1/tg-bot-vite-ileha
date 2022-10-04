import './App.css';
import {useEffect} from '@types/react';

const tg = window.Telegram.WebApp;

function App() {
    useEffect(() => {
        tg.ready();
    }, []);

    const onClose = () => {
        tg.close();
    };
    return (
        <div>
            Vite
            <button onClick={onClose}>Close</button>
        </div>
    );
}

export default App;

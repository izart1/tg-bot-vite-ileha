import React, {useEffect, useState} from 'react';
import './Form.css';
import {useTelegram} from '../hooks/useTelegram.js';

const Form = () => {
    const [country, setCountry] = useState('');
    const [street, setStreet] = useState('');
    const [subject, setSubject] = useState('');
    const {tg} = useTelegram();

    useEffect(() => {
        tg.MainButton.setParams({
            text: 'Отправить данные'
        });
    }, []);

    useEffect(() => {
        if (!country || !street) {
            tg.MainButton.hide();
        } else {
            tg.MainButton.show();
        }
    }, [country, street]);

    const onChangeCountry = (e) => {
        setCountry(e.target.value);
    };

    const onChangeStreet = (e) => {
        setStreet(e.target.value);
    };

    const onChangeSubject = (e) => {
        setSubject(e.target.value);
    };

    return (
        <div className={'form'}>
            <h3>Введите ваши данные</h3>
            <input
                value={country}
                onChange={onChangeCountry}
                className={'input'}
                type="text"
                placeholder={'Страна'}
            />
            <input
                value={street}
                onChange={onChangeStreet}
                className={'input'}
                type="text"
                placeholder={'Улица'}
            />

            <select
                value={subject}
                onChange={onChangeSubject}
                className={'select'}
            >
                <option value="physical">Физ. лицо</option>
                <option value="legal">Юр. лицо</option>
            </select>

        </div>
    );
};

export default Form;
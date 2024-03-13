import React, { useState } from 'react';
import Layout from '../../LayoutComp/Layout';
import { connect } from 'react-redux';
import { useNavigate } from 'react-router-dom';

function RegistrationForm() {
    const navigate = useNavigate();
    const [alertMessage, setAlertMessage] = useState('');
    const [formData, setFormData] = useState({
        username: '',
        password: '',
        repeatPassword: '',
        first_name: '',
        last_name: '',
        telephone: '',
        address: '',
        city: '',
        postal_code: '',
        country: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (formData.password !== formData.repeatPassword) {
            setAlertMessage('Password and Repeat Password do not match.');
            return;
        }

        try {
            const response = await fetch('/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                console.log('Registration successful');
                setAlertMessage('Account successfully created!');
                setTimeout(() => {
                    navigate('/Login');
                }, 1500);
            } else {
                console.error('Registration failed');
                console.error('Response Status:', response.status);
                console.error('Response Text:', await response.text());
            }
        } catch (error) {
            console.error('Error:', error);
        }
    };

    return (
        <Layout alertMessage={alertMessage} setAlertMessage={setAlertMessage}>
            <div className='menu'>
                <div className='header' id='ClassicsZa'>
                    <h1>REGISTRATION</h1>
                </div>
                <div className='Types Registration'>
                    <form onSubmit={handleSubmit}>
                        <label>
                            Username:
                            <input
                                type="text"
                                name="username"
                                value={formData.username}
                                onChange={handleChange}
                                required
                                autoComplete="username"
                            />
                        </label>
                        <br />
                        <label>
                            Password:
                            <input
                                type="password"
                                name="password"
                                value={formData.password}
                                onChange={handleChange}
                                required
                                autoComplete="current-password"
                            />
                        </label>
                        <br />
                        <label>
                            Repeat Password:
                            <input
                                type="password"
                                name="repeatPassword"
                                value={formData.repeatPassword}
                                onChange={handleChange}
                                required
                                autoComplete="current-password"
                            />
                        </label>
                        <br />
                        <label>
                            First Name:
                            <input
                                type="text"
                                name="first_name"
                                value={formData.first_name}
                                onChange={handleChange}
                                required
                                autoComplete="given-name"
                            />
                        </label>
                        <br />
                        <label>
                            Last Name:
                            <input
                                type="text"
                                name="last_name"
                                value={formData.last_name}
                                onChange={handleChange}
                                required
                                autoComplete="family-name"
                            />
                        </label>
                        <br />
                        <label>
                            Telephone:
                            <input
                                type="number"
                                name="telephone"
                                value={formData.telephone}
                                onChange={handleChange}
                                autoComplete="tel"
                            />
                        </label>
                        <br />
                        <label>
                            Address:
                            <input
                                type="text"
                                name="address"
                                value={formData.address}
                                onChange={handleChange}
                                autoComplete="street-address"
                            />
                        </label>
                        <br />
                        <label>
                            City:
                            <input
                                type="text"
                                name="city"
                                value={formData.city}
                                onChange={handleChange}
                                autoComplete="address-level2"
                            />
                        </label>
                        <br />
                        <label>
                            Postal Code:
                            <input
                                type="text"
                                name="postal_code"
                                value={formData.postal_code}
                                onChange={handleChange}
                                autoComplete="postal-code"
                            />
                        </label>
                        <br />
                        <label>
                            Country:
                            <input
                                type="text"
                                name="country"
                                value={formData.country}
                                onChange={handleChange}
                                autoComplete="country"
                            />
                        </label>
                        <br />
                        <button id='checkC' type="submit">Register</button>
                    </form>
                </div>
            </div>
        </Layout>
    );
}

export default connect(null, {})(RegistrationForm);

import React, { useState } from 'react';
import Layout from '../../LayoutComp/Layout';
import { connect } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { login } from '../../../redux/actions'; // Import the login action

function LoginPage(props) {
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        username: '',
        password: '',
    });

    const [showErrorMessage, setShowErrorMessage] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleLogin = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch('http://localhost:5000/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            const data = await response.json();
            
            if (response.ok) {
                console.log('Login successful. User Info:', data.user_info);
                props.login(data.user_info); // Dispatch the login action to change the isAuthenticated state
                navigate('/Dashboard');
            } else {
                console.error('Login failed');
                setShowErrorMessage(true);
            }
        } catch (error) {
            console.error('Error:', error);
        }
    };

    return (
        <Layout>
            <div className='menu'>
                <div className='header' id='ClassicsZa'>
                    <h1>LOGIN</h1>
                </div>
                <div className='Types Registration'>
                    <form onSubmit={handleLogin}>
                        <label>
                            <strong>Username:</strong>
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
                            <strong>Password</strong>
                            <input
                                type="password"
                                name="password"
                                value={formData.password}
                                onChange={handleChange}
                                required
                                autoComplete="current-password"
                            />
                        </label>
                        {showErrorMessage && (
                            <p><strong>Incorrect username or password. Please try again.</strong></p>
                        )}
                        <button id='checkB' type='submit'>Login</button>
                    </form>
                </div>
                <div className='Types Registration'>
                    <p id='center'>Don't have an account? Sign up today!</p>
                    <button id='checkB' onClick={() => navigate('/Registration')}>Register</button>
                </div>
            </div>
        </Layout>
    );
}

export default connect(null, { login })(LoginPage);

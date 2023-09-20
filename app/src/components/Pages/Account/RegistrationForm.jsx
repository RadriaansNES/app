import React, { useState } from 'react';
import Layout from '../../LayoutComp/Layout';
import { connect } from 'react-redux';

function RegistrationForm() {

    const [formData, setFormData] = useState({
        username: '',
        password: '',
        // Add more fields as needed
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

        try {
            const response = await fetch('/api/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                // Registration successful, you can handle it here
                console.log('Registration successful');
            } else {
                // Registration failed, handle errors
                console.error('Registration failed');
            }
        } catch (error) {
            console.error('Error:', error);
        }
    };

    return (
        <Layout>
            <div>
                <h2>Registration Form</h2>
                <form onSubmit={handleSubmit}>
                    <label>
                        Username:
                        <input
                            type="text"
                            name="username"
                            value={formData.username}
                            onChange={handleChange}
                            required
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
                        />
                    </label>
                    <br />
                    <button type="submit">Register</button>
                </form>
            </div>
        </Layout>
    );
}

export default connect(null, {})(RegistrationForm);
import React, { useState } from 'react';
import Layout from '../../LayoutComp/Layout';
import { connect } from 'react-redux';

function RegistrationForm() {

    const [formData, setFormData] = useState({
        username: '',
        password: '',
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

        try {
            const response = await fetch('http://localhost:5000/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                console.log('Registration successful');
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
                    <label>
                        First Name:
                        <input
                            type="text"
                            name="first_name"
                            value={formData.first_name}
                            onChange={handleChange}
                            required
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

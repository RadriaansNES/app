import React from 'react';
import Layout from '../../LayoutComp/Layout';
import { connect } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { logout } from '../../../redux/actions'; // Import the logout action

function Dashboard(props) {
    const navigate = useNavigate();

    const handleLogout = () => {
        // Dispatch the logout action to change the isAuthenticated state
        props.logout();
        navigate('/Login');
    };

    return (
        <Layout>
            <div className='menu'>
                <div className='header' id='ClassicsZa'>
                    <h1>Hello {props.user && props.user.first_name}</h1> {/* Access first_name from Redux store */}
                    <div className='Types Registration' id='Account'>
                        <div>
                            <h3>Order History</h3>
                            <p>Orders....etc....</p>
                        </div>
                        <div>
                            <h3>Point System</h3>
                            <p>Points on account</p>
                        </div>
                        <button id='checkB' onClick={handleLogout}>Logout</button>
                    </div>
                </div>
            </div>
        </Layout>
    );
}

const mapStateToProps = (state) => ({
    isAuthenticated: state.auth.isAuthenticated,
    user: state.auth.user, // Access user_info from Redux store
});

export default connect(mapStateToProps, { logout })(Dashboard);
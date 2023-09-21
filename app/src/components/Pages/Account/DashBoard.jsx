import React, {useEffect} from 'react';
import Layout from '../../LayoutComp/Layout';
import { connect } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { logout } from '../../../redux/actions'; 
import { login } from '../../../redux/actions';

function Dashboard(props) {
    const navigate = useNavigate();

    useEffect(() => {
      const storedUser = localStorage.getItem('user');
      if (storedUser) {
        props.login(JSON.parse(storedUser));
      }
      // eslint-disable-next-line
    }, []);
  
    const handleLogout = () => {
      console.log('User object in Dashboard:', props.user);
      // Dispatch the logout action to change the isAuthenticated state
      props.logout();
      navigate('/Login');
    };

    return (
        <Layout>
            <div className='menu'>
                <div className='header' id='ClassicsZa'>
                    <h1>Hello {props.user && props.user.first_name}</h1> 
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
                <div className='ClassicsZa' id='hide'>
                    <div className='Types' id='Account'>
                        <div><h1 id='welcome'>Hello {props.user && props.user.first_name}</h1></div>
                        <div>
                            <h3>Order History</h3>
                            <p>Orders....etc....</p>
                        </div>
                        <div>
                            <h3>Point System</h3>
                            <p>Points on account</p>
                        </div>
                        <button id='checkD' onClick={handleLogout}>Logout</button>
                    </div>
                </div>
            </div>
        </Layout>
    );
}

const mapStateToProps = (state) => ({
    isAuthenticated: state.auth.isAuthenticated,
    user: state.auth.user, 
});

export default connect(mapStateToProps, { login, logout })(Dashboard);

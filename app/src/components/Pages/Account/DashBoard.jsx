import React from 'react';
import Layout from '../../LayoutComp/Layout';
import { connect } from 'react-redux';

function Dashboard() {
    
    return (
        <Layout>
            <div className='menu'>
                <div className='header' id='ClassicsZa'>
                    <h1>Hello user name </h1>
                </div>
                <div>
                    <p>Order history, points?</p>
                </div>
            </div>
        </Layout>
    );
}

export default connect(null, {})(Dashboard);

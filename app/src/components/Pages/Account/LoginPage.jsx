import React from 'react';
import Layout from '../../LayoutComp/Layout';
import { connect } from 'react-redux';

function LoginPage() {

    return (
        <Layout>
            <div className='menu'>
                <div className='header' id='ClassicsZa'>
                    <h1>LOG INTO YOUR ACCOUNT</h1>
                </div>
                <div>
                    <p>WHATEVER CONTENT YA HEAR</p>
                </div>
            </div>
        </Layout>
    );
}

export default connect(null, {})(LoginPage);

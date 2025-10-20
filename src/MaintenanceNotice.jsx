import React from 'react';


const MaintenanceNotice = () => {
    return (
        <div style={styles.container}>
            <div style={styles.box}>
                <h2>Site Under Maintenance</h2>
                <p>We are currently working on upgrading this site to a ReactJS-based application. Stay tuned!</p>
            </div>
        </div>
    );
};

const styles = {
    container: {
        fontFamily: 'Arial, sans-serif',
        backgroundColor: '#f4f4f4',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
        margin: 0,
    },
    box: {
        backgroundColor: 'white',
        padding: '30px 40px',
        borderRadius: '8px',
        boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
        textAlign: 'center',
    },
};

export default MaintenanceNotice;

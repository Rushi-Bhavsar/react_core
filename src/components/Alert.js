import React from 'react';
import PropTypes from 'prop-types';

const Alert = props => {
    const toTitle = line => {
        const lower = line.toLowerCase()
        return (lower.charAt(0).toUpperCase() + lower.slice(1))
    }
    return (
        props.alert && <div className={`alert alert-${props.alert.type}`} role="alert">
           <strong>{toTitle(props.alert.type)}</strong> : {props.alert.msg}
        </div>
    );
};

Alert.propTypes = {
    alert: PropTypes.object
};

export default Alert;

import classNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

import styles from './connection-status.css';

const ConnectionStatusComponent = function (props) {
    const {
        active,
        connected,
        className,
        onClick,
        title,
        ...componentProps
    } = props;
    return (
        <img
            className={classNames(
                className,
                styles.connection_status
            )}
            draggable={false}
            src={connected?
                'static/blocks-media/default/status-ready.svg':
                'static/blocks-media/default/status-not-ready.svg'}
            title={title}
            onClick={onClick}
            {...componentProps}
        />
    );
};
ConnectionStatusComponent.propTypes = {
    active: PropTypes.bool,
    className: PropTypes.string,
    onClick: PropTypes.func.isRequired,
    title: PropTypes.string
};
ConnectionStatusComponent.defaultProps = {
    connected: false,
    active: false,
    title: 'Connection'
};
export default ConnectionStatusComponent;

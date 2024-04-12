import classNames from 'classnames';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import React from 'react';
import { defineMessages, intlShape, injectIntl } from 'react-intl';
const setLepiIp = title => ({
    type: 'LEPI/SET_LEPI_IP',
    title: title
});

import BufferedInput from '../lepi/buffered-input.jsx';

import styles from './lepi-ip-input.css';

const messages = defineMessages({
    ipInputPlaceholder: {
        id: 'gui.gui.ipInputPlaceholder',
        defaultMessage: 'Lepi Host IP'
    }
});

const LepiIpInput = ({
    className,
    intl,
    onChange,
    projectTitle
}) => (
    <BufferedInput
        className={classNames(styles.ipField, className)}
        maxLength="100"
        placeholder={intl.formatMessage(messages.ipInputPlaceholder)}
        tabIndex="0"
        type="text"
        value={localStorage.lepi_ip ? localStorage.lepi_ip : "lepi.local"}
        onChange={onChange}
    />
);

LepiIpInput.propTypes = {
    className: PropTypes.string,
    intl: intlShape.isRequired,
    onChange: PropTypes.func,
    projectTitle: PropTypes.string
};

const mapStateToProps = state => ({
    projectTitle: state.scratchGui.projectTitle
});

const mapDispatchToProps = dispatch => ({
    onSubmit: title => dispatch(setLepiIp(title))
});

export default injectIntl(LepiIpInput);

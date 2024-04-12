import PropTypes from 'prop-types';
import React from 'react';
import keyMirror from 'keymirror';

import Box from '../box/box.jsx';
import Modal from '../../containers/modal.jsx';

import ScanningStep from '../../containers/lepi/scanning-step-lepi.jsx';
import AutoScanningStep from '../../containers/auto-scanning-step.jsx';
import ConnectingStep from '../connection-modal/connecting-step.jsx';
import ConnectedStep from '../connection-modal/connected-step.jsx';
import ErrorStep from '../connection-modal/error-step.jsx';
import UnavailableStep from '../connection-modal/unavailable-step.jsx';

import styles from '../connection-modal/connection-modal.css';

const PHASES = keyMirror({
    scanning: null,
    connecting: null,
    connected: null,
    error: null,
    unavailable: null
});

const ConnectionModalComponent = props => (
    <Modal
        className={styles.modalContent}
        contentLabel={props.name}
        headerClassName={styles.header}
        headerImage={props.connectionSmallIconURL}
        id="connectionModal"
        // onHelp={props.onHelp}
        onRequestClose={props.onCancel}
    >
        <Box className={styles.body}>
            {props.phase === PHASES.scanning && !props.useAutoScan && <ScanningStep {...props} />}
            {props.phase === PHASES.scanning && props.useAutoScan && <AutoScanningStep {...props} />}
            {props.phase === PHASES.connecting && <ConnectingStep {...props} />}
            {props.phase === PHASES.connected && <ConnectedStep {...props} />}
            {props.phase === PHASES.error && <ErrorStep {...props} />}
            {props.phase === PHASES.unavailable && <ScanningStep {...props} />}
        </Box>
    </Modal>
);

ConnectionModalComponent.propTypes = {
    connectingMessage: PropTypes.node.isRequired,
    connectionSmallIconURL: PropTypes.string,
    connectionTipIconURL: PropTypes.string,
    name: PropTypes.node,
    onCancel: PropTypes.func.isRequired,
    onHelp: PropTypes.func.isRequired,
    phase: PropTypes.oneOf(Object.keys(PHASES)).isRequired,
    title: PropTypes.string.isRequired,
    useAutoScan: PropTypes.bool.isRequired
};

ConnectionModalComponent.defaultProps = {
    connectingMessage: 'Connecting'
};

export {
    ConnectionModalComponent as default,
    PHASES
};

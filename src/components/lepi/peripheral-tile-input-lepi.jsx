import { FormattedMessage } from 'react-intl';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import React from 'react';
import bindAll from 'lodash.bindall';
import Box from '../box/box.jsx';

import styles from '../connection-modal/connection-modal.css';

import LepiIpInput from './lepi-ip-input.jsx'

class PeripheralTileInput extends React.Component {
    constructor(props) {
        super(props);
        bindAll(this, [
            'handleConnecting',
            'handleValueChanged'
        ]);
        this.state = {
            value: localStorage.lepi_ip ? localStorage.lepi_ip : "lepi.local"
        }
        /*
        if (localStorage.lepi_ip) {
            try {
                this.props.onConnecting(this.state.value);
            } catch (error) {
                console.log(error)
            }
        }
        */
    }
    handleConnecting() {
        this.props.onConnecting(this.state.value);
    }

    handleValueChanged(value) {
        console.log('handleValueChanged', value)
        this.setState({ value: value });
        localStorage.lepi_ip = value
    }

    render() {
        return (
            <Box className={styles.peripheralTile}>
                <Box className={styles.peripheralTileName}>
                    <img
                        className={styles.peripheralTileImage}
                        src={this.props.connectionSmallIconURL}
                    />
                    <Box className={styles.peripheralTileNameWrapper}>
                        {/*
                        <Box className={styles.peripheralTileNameLabel}>
                            <FormattedMessage
                                defaultMessage="Device name"
                                description="Label for field showing the device name"
                                id="gui.connection.peripheral-name-label"
                            />
                        </Box>
                         <Box className={styles.peripheralTileNameText}>
                            {this.props.name}
                        </Box> */}
                        <LepiIpInput onChange={this.handleValueChanged}></LepiIpInput>
                    </Box>
                </Box>
                <Box className={styles.peripheralTileWidgets}>
                    <Box className={styles.signalStrengthMeter}>
                        <div
                            className={classNames(styles.signalBar, {
                                [styles.greenBar]: this.props.rssi > -80
                            })}
                        />
                        <div
                            className={classNames(styles.signalBar, {
                                [styles.greenBar]: this.props.rssi > -60
                            })}
                        />
                        <div
                            className={classNames(styles.signalBar, {
                                [styles.greenBar]: this.props.rssi > -40
                            })}
                        />
                        <div
                            className={classNames(styles.signalBar, {
                                [styles.greenBar]: this.props.rssi > -20
                            })}
                        />
                    </Box>
                    <button
                        onClick={this.handleConnecting}
                    >
                        <FormattedMessage
                            defaultMessage="Connect"
                            description="Button to start connecting to a specific device"
                            id="gui.connection.connect"
                        />
                    </button>
                </Box>
            </Box>
        );
    }
}

PeripheralTileInput.propTypes = {
    connectionSmallIconURL: PropTypes.string,
    name: PropTypes.string,
    onConnecting: PropTypes.func,
    peripheralId: PropTypes.string,
    rssi: PropTypes.number
};

export default PeripheralTileInput;

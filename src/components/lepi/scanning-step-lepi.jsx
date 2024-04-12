import { FormattedMessage } from 'react-intl';
import PropTypes from 'prop-types';
import React from 'react';
import classNames from 'classnames';

import Box from '../box/box.jsx';
import PeripheralTile from '../connection-modal/peripheral-tile.jsx';
import Dots from '../connection-modal/dots.jsx';

import radarIcon from '../connection-modal/icons/searching.png';
import refreshIcon from '../connection-modal/icons/refresh.svg';

import styles from '../connection-modal/connection-modal.css';
import PeripheralTileInput from './peripheral-tile-input-lepi.jsx';

const ScanningStep = props => (
    <Box className={styles.body}>
        <Box className={styles.activityArea}>
            {props.scanning ? (
                props.peripheralList.length === 0 ? (
                    <div className={styles.activityAreaInfo}>
                        <div className={styles.centeredRow}>
                            <img
                                className={classNames(styles.radarSmall, styles.radarSpin)}
                                src={radarIcon}
                            />
                            <FormattedMessage
                                defaultMessage="Looking for devices"
                                description="Text shown while scanning for devices"
                                id="gui.connection.scanning.lookingforperipherals"
                            />
                        </div>
                    </div>
                ) : (
                    <div className={styles.peripheralTilePane}>
                        {props.peripheralList.map(peripheral =>
                        (<PeripheralTile
                            connectionSmallIconURL={props.connectionSmallIconURL}
                            key={peripheral.peripheralId}
                            name={peripheral.name}
                            peripheralId={peripheral.peripheralId}
                            rssi={peripheral.rssi}
                            onConnecting={props.onConnecting}
                        />)
                        )}
                    </div>
                )
            ) : (
                <Box className={styles.instructions}>
                    <FormattedMessage
                        defaultMessage="No devices found"
                        description="Text shown when no devices could be found"
                        id="gui.connection.scanning.noPeripheralsFound"
                    />
                </Box>
            )}
        </Box>
        <Box className={styles.bottomArea}>
            <Box className={classNames(styles.bottomAreaItem, styles.instructions)}>
                <FormattedMessage
                    defaultMessage="Select your device in the list above, or manually enter the IP below"
                    description="Prompt for choosing a device to connect to"
                    id="gui.connection.scanning.instructions"
                />
                
            </Box>
            <PeripheralTileInput
                connectionSmallIconURL={props.connectionSmallIconURL}
                key='lepi'
                name='主机'
                peripheralId='lepi'
                // rssi={40}
                onConnecting={props.onConnecting}
            />
            <Dots
                className={styles.bottomAreaItem}
                counter={0}
                total={3}
            />
            <button
                className={classNames(styles.bottomAreaItem, styles.connectionButton)}
                onClick={props.onRefresh}
            >
                <FormattedMessage
                    defaultMessage="Refresh"
                    description="Button in prompt for starting a search"
                    id="gui.connection.search"
                />
                <img
                    className={styles.buttonIconRight}
                    src={refreshIcon}
                />
            </button>
        </Box>
    </Box>
);

ScanningStep.propTypes = {
    connectionSmallIconURL: PropTypes.string,
    onConnecting: PropTypes.func,
    onRefresh: PropTypes.func,
    peripheralList: PropTypes.arrayOf(PropTypes.shape({
        name: PropTypes.string,
        rssi: PropTypes.number,
        peripheralId: PropTypes.string
    })),
    scanning: PropTypes.bool.isRequired
};

ScanningStep.defaultProps = {
    peripheralList: [],
    scanning: true
};

export default ScanningStep;

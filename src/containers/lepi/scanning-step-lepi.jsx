import PropTypes from 'prop-types';
import React from 'react';
import bindAll from 'lodash.bindall';
import ScanningStepComponent from '../../components/lepi/scanning-step-lepi.jsx';
import VM from 'scratch-vm';

class ScanningStep extends React.Component {
    constructor(props) {
        super(props);
        bindAll(this, [
            'handlePeripheralListUpdate',
            'handlePeripheralScanTimeout',
            'handleRefresh'
        ]);
        this.state = {
            scanning: true,
            peripheralList: [],
            bluetooth_scanning: false
        };
    }
    requestDevice() {
        return new Promise((resolve, reject) => {
            navigator.bluetooth.requestDevice({ filters: [{ namePrefix: "lepi" }] })
                .then(device => {
                    // Human-readable name of the device.
                    console.log(device);
                    let ipstr = device.name.split('@')
                    if (ipstr.length >= 2) {
                        for (let i = 1; i < ipstr.length; i++) {
                            const hex = ipstr[i];
                            if (hex.length == 8) {
                                let ip = []
                                for (let j = 0; j < 4; j++) {
                                    ip.push(parseInt(hex[j * 2] + hex[j * 2 + 1], 16));
                                }
                                ip = ip.join('.')
                                // console.log(ip)
                                let oldList = {}
                                this.state.peripheralList.map(e => {
                                    oldList[e.peripheralId] = e
                                })
                                if (!oldList[ip]) {
                                    this.props.vm.emit('PERIPHERAL_LIST_UPDATE', {
                                        [ip]: { peripheralId: ip, name: "LEPI:" + ip, rssi: 255 }
                                    })
                                }

                            }
                        }
                    }

                    setTimeout(() => {
                        resolve()
                    }, 50)

                })
                .catch(error => {
                    reject(error)
                })
                .then(server => {

                })
            // .catch(error => { console.error(error); });
        })

    }
    async scanForPeripheral() {
        console.log('scanForPeripheral')
        try {
            this.setState({ bluetooth_scanning: true })
            for (let i = 0; i < 20; i++) {
                await this.requestDevice()
            }
            this.setState({ bluetooth_scanning: false })
        } catch (error) {
            console.log(error)
            this.setState({ bluetooth_scanning: false })
        }
        console.log('scanForPeripheral End')
    }
    componentDidMount() {
        this.props.vm.scanForPeripheral(this.props.extensionId);
        // this.scanForPeripheral()
        this.props.vm.on(
            'PERIPHERAL_LIST_UPDATE', this.handlePeripheralListUpdate);
        this.props.vm.on(
            'PERIPHERAL_SCAN_TIMEOUT', this.handlePeripheralScanTimeout);
    }
    componentWillUnmount() {
        // @todo: stop the peripheral scan here
        this.props.vm.removeListener(
            'PERIPHERAL_LIST_UPDATE', this.handlePeripheralListUpdate);
        this.props.vm.removeListener(
            'PERIPHERAL_SCAN_TIMEOUT', this.handlePeripheralScanTimeout);
    }
    handlePeripheralScanTimeout() {
        console.log('handlePeripheralScanTimeout')
        return
        this.setState({
            scanning: false,
            peripheralList: [],
            bluetooth_scanning: false
        });
    }
    handlePeripheralListUpdate(newList) {

        let newDevice = false
        let oldList = {}
        this.state.peripheralList.map(e => {
            oldList[e.peripheralId] = e
        })

        // TODO: sort peripherals by signal strength? so they don't jump around
        let peripheralArray = this.state.peripheralList
        Object.keys(newList).map(id => {
            if (!oldList[id]) {
                newDevice = true
                peripheralArray.push(newList[id])
                console.log('new device,', newList[id])
            }
        });
        if (newDevice) {
            this.setState({ peripheralList: peripheralArray });
        }
    }
    handleRefresh() {

        if (this.state.bluetooth_scanning) {
            return
        }

        this.props.vm.scanForPeripheral(this.props.extensionId);
        this.setState({
            scanning: true,
            peripheralList: []
        });
        this.scanForPeripheral()
    }
    render() {
        return (
            <ScanningStepComponent
                connectionSmallIconURL={this.props.connectionSmallIconURL}
                peripheralList={this.state.peripheralList}
                phase={this.state.phase}
                scanning={this.state.scanning}
                title={this.props.extensionId}
                onConnected={this.props.onConnected}
                onConnecting={this.props.onConnecting}
                onRefresh={this.handleRefresh}
            />
        );
    }
}

ScanningStep.propTypes = {
    connectionSmallIconURL: PropTypes.string,
    extensionId: PropTypes.string.isRequired,
    onConnected: PropTypes.func.isRequired,
    onConnecting: PropTypes.func.isRequired,
    vm: PropTypes.instanceOf(VM).isRequired
};

export default ScanningStep;

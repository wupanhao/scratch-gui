import bindAll from 'lodash.bindall';
import PropTypes from 'prop-types';
import React from 'react';
import VM from 'scratch-vm';
import {connect} from 'react-redux';

import ControlsComponent from '../components/controls/controls.jsx';

import { closeExtensionLibrary, openConnectionModal } from '../reducers/modals';
import { setConnectionModalExtensionId } from '../reducers/connection-modal';

class Controls extends React.Component {
    constructor (props) {
        super(props);
        bindAll(this, [
            'handleConnectionClick',
            'handleGreenFlagClick',
            'handleStopAllClick'
        ]);
        this.setState({connected:props.vm.getPeripheralIsConnected('lepi')})
        props.vm.runtime.on('LEPI_CONNECTED', () => {
            console.log('connected')
            this.setState({test:'test'})
        })
        props.vm.runtime.on('PERIPHERAL_DISCONNECTED', () => {
            console.log('disconnected')
            this.setState({test:'test'})
        })
    }
    handleGreenFlagClick (e) {
        e.preventDefault();
        // tw: implement alt+click and right click to toggle FPS
        if (e.shiftKey || e.altKey || e.type === 'contextmenu') {
            if (e.shiftKey) {
                this.props.vm.setTurboMode(!this.props.turbo);
            }
            if (e.altKey || e.type === 'contextmenu') {
                if (this.props.framerate === 30) {
                    this.props.vm.setFramerate(60);
                } else {
                    this.props.vm.setFramerate(30);
                }
            }
        } else {
            if (!this.props.isStarted) {
                this.props.vm.start();
            }
            this.props.vm.greenFlag();
        }
    }
    handleStopAllClick (e) {
        e.preventDefault();
        this.props.vm.stopAll();
        if (this.props.vm.ros && this.props.vm.ros.isConnected()){
            try {
                this.props.vm.ros.motorSetPulse(0, 0)
            } catch (error) {
                console.log(error)
            }
        }
    }
    handleConnectionClick(e){
        e.preventDefault();
        if(this.props.vm.extensionManager.isExtensionLoaded('lepi')){
            this.props.onOpenConnectionModal('lepi')
        }else{
            this.props.vm.extensionManager.loadExtensionURL('lepi').then( () => {
                this.props.onOpenConnectionModal('lepi')
            })
        }
    }
    render () {
        const {
            vm, // eslint-disable-line no-unused-vars
            isStarted, // eslint-disable-line no-unused-vars
            projectRunning,
            turbo,
            ...props
        } = this.props;
        return (
            <ControlsComponent
                {...props}
                connected= {vm.getPeripheralIsConnected('lepi')}
                active={projectRunning && isStarted}
                turbo={turbo}
                onGreenFlagClick={this.handleGreenFlagClick}
                onStopAllClick={this.handleStopAllClick}
                onConnectionClick={this.handleConnectionClick}
            />
        );
    }
}

Controls.propTypes = {
    isStarted: PropTypes.bool.isRequired,
    projectRunning: PropTypes.bool.isRequired,
    turbo: PropTypes.bool.isRequired,
    framerate: PropTypes.number.isRequired,
    interpolation: PropTypes.bool.isRequired,
    isSmall: PropTypes.bool,
    vm: PropTypes.instanceOf(VM)
};

const mapStateToProps = state => ({
    isStarted: state.scratchGui.vmStatus.started,
    projectRunning: state.scratchGui.vmStatus.running,
    framerate: state.scratchGui.tw.framerate,
    interpolation: state.scratchGui.tw.interpolation,
    turbo: state.scratchGui.vmStatus.turbo
});
// no-op function to prevent dispatch prop being passed to component
const mapDispatchToProps = (dispatch) => ({
    onOpenConnectionModal: id => {
        console.log(id)
        dispatch(setConnectionModalExtensionId(id));
        dispatch(openConnectionModal());
    },
});

export default connect(mapStateToProps, mapDispatchToProps)(Controls);

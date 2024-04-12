import bindAll from 'lodash.bindall';
import PropTypes from 'prop-types';
import React from 'react';
import Input from '../forms/input.jsx';

/**
 * Higher Order Component to manage inputs that submit on blur and <enter>
 * @param {React.Component} Input text input that consumes onChange, onBlur, onKeyPress
 * @returns {React.Component} Buffered input that calls onSubmit on blur and <enter>
 */
class BufferedInput extends React.Component {
    constructor(props) {
        super(props);
        bindAll(this, [
            'handleChange',
            'handleKeyPress',
            'handleFlush'
        ]);
        this.state = {
            value: null
        };
    }
    handleKeyPress(e) {
        if (e.key === 'Enter') {
            this.handleFlush();
            e.target.blur();
        }
    }
    handleFlush() {
        const isNumeric = typeof this.props.value === 'number';
        const validatesNumeric = isNumeric ? !isNaN(this.state.value) : true;
        if (this.state.value !== null && validatesNumeric && this.props.onSubmit) {
            this.props.onSubmit(isNumeric ? Number(this.state.value) : this.state.value);
        }
        // this.setState({ value: null });
    }
    handleChange(e) {
        this.setState({ value: e.target.value });
        if (this.props.onChange) {
            this.props.onChange(e.target.value)
        }
    }
    render() {
        const bufferedValue = this.state.value === null ? this.props.value : this.state.value;
        return (
            <Input
                {...this.props}
                value={bufferedValue}
                // onBlur={this.handleFlush}
                onChange={this.handleChange}
                onKeyPress={this.handleKeyPress}
            />
        );
    }
}

BufferedInput.propTypes = {
    // onSubmit: PropTypes.func.isRequired,
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

export default BufferedInput

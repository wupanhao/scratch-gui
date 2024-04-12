import bindAll from 'lodash.bindall';
import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import Swal from 'sweetalert2';

const projectTitleInitialState = '';


/**
 * Project saver component passes a downloadProject function to its child.
 * It expects this child to be a function with the signature
 *     function (downloadProject, props) {}
 * The component can then be used to attach project saving functionality
 * to any other component:
 *
 * <DebugDownloader>{(downloadProject, props) => (
 *     <MyCoolComponent
 *         onClick={downloadProject}
 *         {...props}
 *     />
 * )}</DebugDownloader>
 */
class DebugDownloader extends React.Component {
    constructor(props) {
        super(props);
        bindAll(this, [
            'downloadProject',
            'downloadBlob',
        ]);
    }
    downloadProject() {
        this.props.saveProjectSb3().then(content => {
            if (this.props.onSaveFinished) {
                this.props.onSaveFinished();
            }
            this.downloadBlob(`debug`, content);
        });
    }

    downloadBlob(filename, blob) {

        var data = new FormData()
        // data.append('name', filename)
        data.append('upload_file', blob, filename)
        console.log(data)
        let ip = window.LEPI_IP
        if (ip) {
            var reader = new FileReader();
            reader.onload = (e) => {
                this.props.saveFileData(filename + ".sb3", e.target.result).then(data => {
                    Swal.fire('下载成功')
                    let msg = {
                        type: 0,
                        value: 1
                    }
                    console.log(data)
                    this.props.publishMsg(msg)
                }).catch(error => {
                    Swal.fire('下载失败,请检查设备与主机网络是否正常')
                    console.log('error', error)
                });
            }
            reader.readAsDataURL(blob);

        } else {
            Swal.fire('请先连接主机')
        }
    }

    render() {
        const {
            children
        } = this.props;
        return children(
            this.props.className,
            this.downloadProject
        );
    }
}

const getProjectFilename = (curTitle, defaultTitle) => {
    let filenameTitle = curTitle;
    if (!filenameTitle || filenameTitle.length === 0) {
        filenameTitle = defaultTitle;
    }
    return `${filenameTitle.substring(0, 100)}.sb3`;
};

DebugDownloader.propTypes = {
    children: PropTypes.func,
    className: PropTypes.string,
    onSaveFinished: PropTypes.func,
    projectFilename: PropTypes.string,
    saveProjectSb3: PropTypes.func
};
DebugDownloader.defaultProps = {
    className: ''
};

const mapStateToProps = state => ({
    saveProjectSb3: state.scratchGui.vm.saveProjectSb3.bind(state.scratchGui.vm),
    publishMsg: state.scratchGui.vm.publishMsg.bind(state.scratchGui.vm),
    saveFileData:state.scratchGui.vm.ros.saveFileData.bind(state.scratchGui.vm.ros),
    projectFilename: getProjectFilename(state.scratchGui.projectTitle, projectTitleInitialState)
});

export default connect(
    mapStateToProps,
    () => ({}) // omit dispatch prop
)(DebugDownloader);

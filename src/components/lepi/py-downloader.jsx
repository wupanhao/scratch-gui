import axios from 'axios';
import bindAll from 'lodash.bindall';
import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';


const projectTitleInitialState = '';

/**
 * Project saver component passes a downloadProject function to its child.
 * It expects this child to be a function with the signature
 *     function (downloadProject, props) {}
 * The component can then be used to attach project saving functionality
 * to any other component:
 *
 * <PythonDownloader>{(downloadProject, props) => (
 *     <MyCoolComponent
 *         onClick={downloadProject}
 *         {...props}
 *     />
 * )}</PythonDownloader>
 */
class PythonDownloader extends React.Component {
    constructor(props) {
        super(props);
        bindAll(this, [
            'downloadProject',
            'downloadBlob'
        ]);
    }
    downloadProject() {
        let code = this.props.saveProjectPython()
        if (this.props.onSaveFinished) {
            this.props.onSaveFinished();
        }
        let content = new Blob([code])
        this.downloadBlob(this.props.projectFilename, content);
    }

    downloadBlob(filename, blob) {

        var data = new window.FormData()
        // data.append('name', filename)
        data.append('upload_file', blob, filename)
        console.log(data)
        let ip = this.props.lepiIp
        if (ip) {
            let url = `http://${ip}:8000/upload/save`
            let config = {
                header: {
                    'Content-Type': 'multipart/form-data'
                }
            }
            axios.post(url, data, config).then(response => {
                let unsupported = ''
                if (document.Blockly && document.Blockly.unsupported.length != 0) {
                    unsupported = ",以下模块没有进行代码转换:" + document.Blockly.unsupported.join('、');
                }
                swal.fire('下载成功' + unsupported)
                console.log('response', response)
            }).catch(error => {
                swal.fire('下载失败,请检查设备与主机网络是否正常')
                console.log('error', error)
            })
        } else {
            swal.fire('请先连接主机')
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
    return `${filenameTitle.substring(0, 100)}.py`;
};

PythonDownloader.propTypes = {
    children: PropTypes.func,
    className: PropTypes.string,
    onSaveFinished: PropTypes.func,
    projectFilename: PropTypes.string,
    lepiIp: PropTypes.string,
    saveProjectPython: PropTypes.func
};
PythonDownloader.defaultProps = {
    className: ''
};

const mapStateToProps = state => ({
    saveProjectPython: state.scratchGui.vm.workspaceToCode.bind(state.scratchGui.vm),
    // saveProjectPython: document.Blockly.Python.workspaceToCode.bind(document.Blockly.Python),
    lepiIp: state.scratchGui.vm.LEPI_IP,
    projectFilename: getProjectFilename(state.scratchGui.projectTitle, projectTitleInitialState)
});

export default connect(
    mapStateToProps,
    () => ({}) // omit dispatch prop
)(PythonDownloader);

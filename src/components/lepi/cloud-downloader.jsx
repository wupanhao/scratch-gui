import bindAll from 'lodash.bindall';
import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import Swal from 'sweetalert2';
import axios from 'axios';

const projectTitleInitialState = '';


/**
 * Project saver component passes a downloadProject function to its child.
 * It expects this child to be a function with the signature
 *     function (downloadProject, props) {}
 * The component can then be used to attach project saving functionality
 * to any other component:
 *
 * <CloudDownloader>{(downloadProject, props) => (
 *     <MyCoolComponent
 *         onClick={downloadProject}
 *         {...props}
 *     />
 * )}</CloudDownloader>
 */
class CloudDownloader extends React.Component {
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
            this.downloadBlob(this.props.projectFilename, content);
        });
    }

    async downloadBlob(filename, blob) {
        
        let server = location.origin

        if(server == 'http://106.14.203.61:8000'){
            server = 'http://39.105.8.43:8080'
        }else{
            server = `${server}/mapi`
        }
        
        var data = new FormData()
        // data.append('name', filename)
        data.append('file', blob, filename)
        console.log(data)
        let res = await axios.post(`${server}/oss/upload`, data)
        console.log(res)

        const searchParams = new URLSearchParams(location.search);
        let flowNo = false
        if (searchParams.has('flowNo')) {
            flowNo = searchParams.get('flowNo');
        }

        if (res.status == 200 && res.data.code == 200 && flowNo) {
            res = await axios.post(`${server}/callback/homework`, {
                "flowNo": flowNo,
                ...res.data.data
            })
            console.log(res)
            if(res.status == 200 && res.data.code == 200 ){
                Swal.fire('保存成功')
            }else{
                Swal.fire('保存失败')
            }
        }else if(res.status == 500 ){
            if(res.data.msg.indexOf('Maximum upload size exceeded')>=0){
                Swal.fire('保存失败, 作品文件太大')
            }else{
                Swal.fire('保存失败')
            }
            console.log(res.data)
        }

        // let ip = window.LEPI_IP
        // if (ip) {
        //     var reader = new FileReader();
        //     reader.onload = (e) => {
        //         this.props.saveFileData(filename + ".sb3", e.target.result).then(data => {
        //             Swal.fire('下载成功')
        //             let msg = {
        //                 type: 0,
        //                 value: 1
        //             }
        //             console.log(data)
        //             this.props.publishMsg(msg)
        //         }).catch(error => {
        //             Swal.fire('下载失败,请检查设备与主机网络是否正常')
        //             console.log('error', error)
        //         });
        //     }
        //     reader.readAsDataURL(blob);

        // } else {
        //     Swal.fire('请先连接主机')
        // }
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

CloudDownloader.propTypes = {
    children: PropTypes.func,
    className: PropTypes.string,
    onSaveFinished: PropTypes.func,
    projectFilename: PropTypes.string,
    saveProjectSb3: PropTypes.func
};
CloudDownloader.defaultProps = {
    className: ''
};

const mapStateToProps = state => ({
    saveProjectSb3: state.scratchGui.vm.saveProjectSb3.bind(state.scratchGui.vm),
    publishMsg: state.scratchGui.vm.publishMsg.bind(state.scratchGui.vm),
    saveFileData: state.scratchGui.vm.ros.saveFileData.bind(state.scratchGui.vm.ros),
    projectFilename: getProjectFilename(state.scratchGui.projectTitle, projectTitleInitialState)
});

export default connect(
    mapStateToProps,
    () => ({}) // omit dispatch prop
)(CloudDownloader);

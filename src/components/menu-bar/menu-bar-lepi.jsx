import classNames from 'classnames';
import {connect} from 'react-redux';
import {compose} from 'redux';
import {defineMessages, FormattedMessage, injectIntl, intlShape} from 'react-intl';
import PropTypes from 'prop-types';
import bindAll from 'lodash.bindall';
import bowser from 'bowser';
import React from 'react';

import VM from 'scratch-vm';

import Box from '../box/box.jsx';
import Button from '../button/button.jsx';
import CommunityButton from './community-button.jsx';
import ShareButton from './share-button.jsx';
import {ComingSoonTooltip} from '../coming-soon/coming-soon.jsx';
import Divider from '../divider/divider.jsx';
import LanguageSelector from '../../containers/language-selector.jsx';
import ProjectWatcher from '../../containers/project-watcher.jsx';
import MenuBarMenu from './menu-bar-menu.jsx';
import {MenuItem, MenuSection} from '../menu/menu.jsx';
import ProjectTitleInput from './project-title-input.jsx';
import AuthorInfo from './author-info.jsx';
import SB3Downloader from '../../containers/sb3-downloader.jsx';
import DeletionRestorer from '../../containers/deletion-restorer.jsx';
import TurboMode from '../../containers/turbo-mode.jsx';
import MenuBarHOC from '../../containers/menu-bar-hoc.jsx';

import FramerateChanger from '../../containers/tw-framerate-changer.jsx';
import ChangeUsername from '../../containers/tw-change-username.jsx';
import CloudVariablesToggler from '../../containers/tw-cloud-toggler.jsx';
import TWRestorePointLoader from '../../containers/tw-restore-point-loader.jsx';
import TWSaveStatus from './tw-save-status.jsx';

import {openTipsLibrary, openSettingsModal} from '../../reducers/modals';
import {setPlayer} from '../../reducers/mode';
import {
    autoUpdateProject,
    getIsUpdating,
    getIsShowingProject,
    manualUpdateProject,
    requestNewProject,
    remixProject,
    saveProjectAsCopy
} from '../../reducers/project-state';
import {
    openAboutMenu,
    closeAboutMenu,
    aboutMenuOpen,
    openAccountMenu,
    closeAccountMenu,
    accountMenuOpen,
    openFileMenu,
    closeFileMenu,
    fileMenuOpen,
    openEditMenu,
    closeEditMenu,
    editMenuOpen,
    openHelpMenu,
    closeHelpMenu,
    helpMenuOpen,
    openErrorsMenu,
    closeErrorsMenu,
    errorsMenuOpen,
    openLanguageMenu,
    closeLanguageMenu,
    languageMenuOpen,
    openLoginMenu,
    closeLoginMenu,
    loginMenuOpen
} from '../../reducers/menus';
import {setFileHandle} from '../../reducers/tw.js';

import { setConnectionModalExtensionId } from '../../reducers/connection-modal';
import { closeExtensionLibrary, openConnectionModal } from '../../reducers/modals';

import collectMetadata from '../../lib/collect-metadata';

import downloadBlob from '../../lib/download-blob';

import styles from './menu-bar.css';

import helpIcon from '../../lib/assets/icon--tutorials.svg';
import mystuffIcon from './icon--mystuff.png';
import profileIcon from './icon--profile.png';
import remixIcon from './icon--remix.svg';
import dropdownCaret from './dropdown-caret.svg';
import languageIcon from '../language-selector/language-icon.svg';
import aboutIcon from './icon--about.svg';
import errorIcon from './tw-error.svg';
import themeIcon from './tw-moon.svg';

import scratchLogo from './scratch-logo.svg';

import sharedMessages from '../../lib/shared-messages';

import SeeInsideButton from './tw-see-inside.jsx';

import {
    openJobBar,
    openSaveBar,
    openReleasedBar
} from '../../reducers/modals';

import PythonDownloader from '../../components/lepi/py-downloader.jsx'
import ScratchDownloader from '../../components/lepi/sb3-downloader.jsx'
import DebugDownloader from '../lepi/debug-downloader.jsx';
import AccountNav from '../../containers/account-nav.jsx';
import catIcon from './happy-cat.png';
import fileIcon from './file.svg';
import saveIcon from './save.svg';
import uploadIcon from './upload.svg';
import Swal from 'sweetalert2'
import axios from 'axios'
import {isFileNew } from '../../reducers/user';
import MenuItemContainer from '../../containers/menu-item.jsx';


const ariaMessages = defineMessages({
    language: {
        id: 'gui.menuBar.LanguageSelector',
        defaultMessage: 'language selector',
        description: 'accessibility text for the language selection menu'
    },
    tutorials: {
        id: 'gui.menuBar.tutorialsLibrary',
        defaultMessage: 'Tutorials',
        description: 'accessibility text for the tutorials button'
    }
});

const twMessages = defineMessages({
    compileError: {
        id: 'tw.menuBar.compileError',
        defaultMessage: '{sprite}: {error}',
        description: 'Error message in error menu'
    }
});


const MenuBarItemTooltip = ({
    children,
    className,
    enable,
    id,
    place = 'bottom'
}) => {
    if (enable) {
        return (
            <React.Fragment>
                {children}
            </React.Fragment>
        );
    }
    return (
        <ComingSoonTooltip
            className={classNames(styles.comingSoon, className)}
            place={place}
            tooltipClassName={styles.comingSoonTooltip}
            tooltipId={id}
        >
            {children}
        </ComingSoonTooltip>
    );
};


MenuBarItemTooltip.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    enable: PropTypes.bool,
    id: PropTypes.string,
    place: PropTypes.oneOf(['top', 'bottom', 'left', 'right'])
};

const MenuItemTooltip = ({id, isRtl, children, className}) => (
    <ComingSoonTooltip
        className={classNames(styles.comingSoon, className)}
        isRtl={isRtl}
        place={isRtl ? 'left' : 'right'}
        tooltipClassName={styles.comingSoonTooltip}
        tooltipId={id}
    >
        {children}
    </ComingSoonTooltip>
);

MenuItemTooltip.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    id: PropTypes.string,
    isRtl: PropTypes.bool
};

const AboutButton = props => (
    <Button
        className={classNames(styles.menuBarItem, styles.hoverable)}
        iconClassName={styles.aboutIcon}
        iconSrc={aboutIcon}
        onClick={props.onClick}
    />
);

AboutButton.propTypes = {
    onClick: PropTypes.func.isRequired
};

// Unlike <MenuItem href="">, this uses an actual <a>
const MenuItemLink = props => (
    <a
        href={props.href}
        // _blank is safe because of noopener
        // eslint-disable-next-line react/jsx-no-target-blank
        target="_blank"
        rel="noopener"
        className={styles.menuItemLink}
    >
        <MenuItem>{props.children}</MenuItem>
    </a>
);

MenuItemLink.propTypes = {
    children: PropTypes.node.isRequired,
    href: PropTypes.string.isRequired
};

const SaveToComputer = 1
const LoadFromComputer = 2
const SaveToLepi = 3
const SaveToServer = 4
const LoadFromUrl = 5
const NewProject = 6
const SaveBlob = 7
const LoadBlob = 8
const FindHost = 9
const DebugDownload = 10

window.test1 = () => {
    window.postMessage({code:SaveToComputer})
}
window.test2 = () => {
    window.postMessage({code:LoadFromComputer})
}
window.test3 = () => {
    window.postMessage({code:SaveToLepi})
}
window.test4 = () => {
    window.postMessage({code:SaveToServer,url:'http://192.168.50.179:8000/upload/save'})
}
window.test5 = () => {
    window.postMessage({code:LoadFromUrl,url:'http://192.168.50.179:8000/explore/Scratch/%E4%BD%9C%E5%93%81233.sb3'})
}
window.test6 = () => {
    window.postMessage({code:NewProject})
}
window.test9 = () => {
    window.postMessage({code:FindHost})
}
window.test10 = () => {
    window.postMessage({code:DebugDownload})
}
const downloadBlob2 = async (blob,ros) => {
    let ip = window.LEPI_IP
    if (ip) {
        var inputValue = '我的作品'
        const { value: filename } = await swal.fire({
            title: '保存到主机',
            input: 'text',
            inputLabel: '请输入作品名称',
            inputValue: inputValue,
            showCancelButton: true,
            inputValidator: (value) => {
              if (!value) {
                return '需要填写文件名'
              }
            }
          })
          
        if(filename){
            var reader = new FileReader();
            reader.onload = (e) => {
                ros.saveFileData(filename + ".sb3", e.target.result).then(data => {
                    swal.fire('下载成功')
                }).catch(error => {
                    swal.fire('下载失败,请检查设备与主机网络是否正常')
                    console.log('error', error)
                });
            }
            reader.readAsDataURL(blob);
        }
    } else {
        swal.fire('请先连接主机')
    }
}

const debugDownload = async (blob,ros) => {
    let ip = window.LEPI_IP
    if (ip) {

        const filename = 'debug'
          
        if(filename){
            var reader = new FileReader();
            reader.onload = (e) => {
                ros.saveFileData(filename + ".sb3", e.target.result).then(data => {
                    swal.fire('下载成功')
                    ros.publishMsg({
                        type: 0,
                        value: 1
                    })
                }).catch(error => {
                    swal.fire('下载失败,请检查设备与主机网络是否正常')
                    console.log('error', error)
                });
            }
            reader.readAsDataURL(blob);

        }
    } else {
        swal.fire('请先连接主机')
    }
}

class MenuBar extends React.Component {
    constructor (props) {
        super(props);
        bindAll(this, [
            'handleClickSeeInside',
            'handleClickNew',
            'handleClickRemix',
            'handleClickSave',
            'handleClickSaveAsCopy',
            'handleClickSeeCommunity',
            'handleClickShare',
            'handleKeyPress',
            'handleLanguageMouseUp',
            'handleRestoreOption',
            'getSaveToComputerHandler',
            'restoreOptionMessage',
            'handleClickLogin',
            'handleClickRegister',
            'onLogOut',
            'receiveMessage',
        ]);
        // App版
        this.state = {loginbtnVisible: true, schoolMode: false, comunityMode: false, canRegister:true }
        // 线上社区版
        // this.state = {loginbtnVisible: true, schoolMode: false, comunityMode: true, canRegister: true }
        // 师大社区版
        // this.state = {loginbtnVisible: true, schoolMode: false, comunityMode: true, canRegister: false }
        // return

        // axios.get(`${api_base}/users/info/${localStorage.userId}`).then(res => {
        axios.get(`${api_base}/users/info`).then(res => {
            let data = res.data
            if (data.id && data.unreleased) {
                this.props.userinfo.filelist = data.unreleased
                this.props.userinfo.userid = data.id
                this.props.userinfo.headimg = data.headimg
                let query = getQuery()
                if (query['loadfiles'] || query['unreleased']) {
                    let fileid = null
                    if (query['loadfiles']) {
                        let arr = query['loadfiles'].split('/')
                        if (arr.length > 0) {
                            fileid = arr[arr.length - 1]
                        }
                    } else if (query['unreleased']) {
                        fileid = query['unreleased']
                    }
                    for (let i = 0; i < data.unreleased.length; i++) {
                        if (fileid == data.unreleased[i].localsname) {
                            this.props.onFilenew({
                                locals_id: data.unreleased[i]._id,
                                user_filename: data.unreleased[i].title,
                                local_filename: data.unreleased[i].localsname,
                                covers_name: data.unreleased[i].covers
                            });
                            break
                        }
                    }
                } else if (query['url']) {
                    let arr = query['url'].split('/')
                    if (arr.length > 0) {
                        let fileid = arr[arr.length - 1]
                        this.props.userinfo.isRereleased.pid = fileid
                    }
                } else if (query['released']) {
                    this.props.userinfo.isRereleased.pid = query['released']
                } else if (query['school']) {
                    this.props.userinfo.schoolMode = true
                    this.setState({schoolMode: true})
                }
                this.setState({loginbtnVisible: false})
            }
        })
    }
    componentDidMount () {
        document.addEventListener('keydown', this.handleKeyPress);
        window.addEventListener("message", this.receiveMessage, false);
    }

    receiveMessage(event){
        // console.log(event.source,event.data)
        if(event.data.code == SaveToComputer){
            this.props.vm.saveProjectSb3().then(content => {
                downloadBlob("我的作品.sb3", content);
            })
        }else if(event.data.code == LoadFromComputer){
            this.props.onStartSelectingFileUpload()
        }else if(event.data.code == SaveToLepi){
            this.props.vm.saveProjectSb3().then(content => {
                downloadBlob2(content,this.props.vm.ros);
            })
        }else if(event.data.code == NewProject){
            this.handleClickNew()
        }else if(event.data.code == SaveToServer){
            this.props.vm.saveProjectSb3().then(content => {
                // downloadBlob3(event.data.url, content);
                console.log(content)
                top.postMessage({code:SaveBlob,blob:content}, '*')
            })
        }else if(event.data.code == LoadFromUrl){
            fetch(event.data.url, {
                method: 'GET',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
            })
                .then(res => res.blob())
                .then(blob => {
                    const reader = new FileReader();
                    reader.onload = () => this.props.vm.loadProject(reader.result)
                        .then(() => {
                        })
                        .catch(error => {
                            console.log({ loadingError: true, errorMessage: error });
                        });
                    reader.readAsArrayBuffer(blob);
                })
                .catch(function (error) {
                    console.log({ loadingError: true, errorMessage: error });
                })
        }else if(event.data.code == SaveBlob){
            console.log('SaveBlob',event.data.blob)
        }else if(event.data.code == LoadBlob){
            console.log('LoadBlob',event.data.blob)
            const reader = new FileReader();
            reader.onload = () => this.props.vm.loadProject(reader.result)
                .then(() => {
                })
                .catch(error => {
                    console.log({ loadingError: true, errorMessage: error });
                });
            reader.readAsArrayBuffer(event.data.blob);
        }else if(event.data.code == FindHost){
            console.log('FindHost')
            if(this.props.vm.extensionManager.isExtensionLoaded('lepi')){
                this.props.onOpenConnectionModal('lepi')
            }else{
                this.props.vm.extensionManager.loadExtensionURL('lepi').then( () => {
                    this.props.onOpenConnectionModal('lepi')
                })
            }
        }else if(event.data.code == DebugDownload){
            this.props.vm.saveProjectSb3().then(content => {
                debugDownload(content,this.props.vm.ros);
            })
        }
    }
    componentWillUnmount () {
        document.removeEventListener('keydown', this.handleKeyPress);
        window.removeEventListener("message", this.receiveMessage);
    }
    handleClickNew () {
        // if the project is dirty, and user owns the project, we will autosave.
        // but if they are not logged in and can't save, user should consider
        // downloading or logging in first.
        // Note that if user is logged in and editing someone else's project,
        // they'll lose their work.
        const readyToReplaceProject = this.props.confirmReadyToReplaceProject(
            this.props.intl.formatMessage(sharedMessages.replaceProjectWarning)
        );
        this.props.onRequestCloseFile();
        if (readyToReplaceProject) {
            this.props.onClickNew(this.props.canSave && this.props.canCreateNew);
        }
        this.props.onRequestCloseFile();
    }
    handleClickRemix () {
        this.props.onClickRemix();
        this.props.onRequestCloseFile();
    }
    handleClickSave () {
        this.props.onClickSave();
        this.props.onRequestCloseFile();
    }
    handleClickSaveAsCopy () {
        this.props.onClickSaveAsCopy();
        this.props.onRequestCloseFile();
    }
    handleClickSeeCommunity (waitForUpdate) {
        if (this.props.shouldSaveBeforeTransition()) {
            this.props.autoUpdateProject(); // save before transitioning to project page
            waitForUpdate(true); // queue the transition to project page
        } else {
            waitForUpdate(false); // immediately transition to project page
        }
    }
    handleClickShare (waitForUpdate) {
        if (!this.props.isShared) {
            if (this.props.canShare) { // save before transitioning to project page
                this.props.onShare();
            }
            if (this.props.canSave) { // save before transitioning to project page
                this.props.autoUpdateProject();
                waitForUpdate(true); // queue the transition to project page
            } else {
                waitForUpdate(false); // immediately transition to project page
            }
        }
    }
    handleRestoreOption (restoreFun) {
        return () => {
            restoreFun();
            this.props.onRequestCloseEdit();
        };
    }
    handleKeyPress (event) {
        const modifier = bowser.mac ? event.metaKey : event.ctrlKey;
        if (modifier && event.key === 's') {
            this.props.handleSaveProject();
            event.preventDefault();
        }
    }
    getSaveToComputerHandler (downloadProjectCallback) {
        return () => {
            this.props.onRequestCloseFile();
            downloadProjectCallback();
            if (this.props.onProjectTelemetryEvent) {
                const metadata = collectMetadata(this.props.vm, this.props.projectTitle, this.props.locale);
                this.props.onProjectTelemetryEvent('projectDidSave', metadata);
            }
        };
    }
    handleLanguageMouseUp (e) {
        if (!this.props.languageMenuOpen) {
            this.props.onClickLanguage(e);
        }
    }
    restoreOptionMessage (deletedItem) {
        switch (deletedItem) {
        case 'Sprite':
            return (<FormattedMessage
                defaultMessage="Restore Sprite"
                description="Menu bar item for restoring the last deleted sprite."
                id="gui.menuBar.restoreSprite"
            />);
        case 'Sound':
            return (<FormattedMessage
                defaultMessage="Restore Sound"
                description="Menu bar item for restoring the last deleted sound."
                id="gui.menuBar.restoreSound"
            />);
        case 'Costume':
            return (<FormattedMessage
                defaultMessage="Restore Costume"
                description="Menu bar item for restoring the last deleted costume."
                id="gui.menuBar.restoreCostume"
            />);
        default: {
            return (<FormattedMessage
                defaultMessage="Restore"
                description="Menu bar item for restoring the last deleted item in its disabled state." /* eslint-disable-line max-len */
                id="gui.menuBar.restore"
            />);
        }
        }
    }
    handleClickSeeInside () {
        this.props.onClickSeeInside();
    }
    buildAboutMenu (onClickAbout) {
        if (!onClickAbout) {
            // hide the button
            return null;
        }
        if (typeof onClickAbout === 'function') {
            // make a button which calls a function
            return <AboutButton onClick={onClickAbout} />;
        }
        // assume it's an array of objects
        // each item must have a 'title' FormattedMessage and a 'handleClick' function
        // generate a menu with items for each object in the array
        return (
            <div
                className={classNames(styles.menuBarItem, styles.hoverable, {
                    [styles.active]: this.props.aboutMenuOpen
                })}
                onMouseUp={this.props.onRequestOpenAbout}
            >
                <img
                    className={styles.aboutIcon}
                    src={aboutIcon}
                />
                <MenuBarMenu
                    className={classNames(styles.menuBarMenu)}
                    open={this.props.aboutMenuOpen}
                    place={this.props.isRtl ? 'right' : 'left'}
                    onRequestClose={this.props.onRequestCloseAbout}
                >
                    {
                        onClickAbout.map(itemProps => (
                            <MenuItem
                                key={itemProps.title}
                                isRtl={this.props.isRtl}
                                onClick={this.wrapAboutMenuCallback(itemProps.onClick)}
                            >
                                {itemProps.title}
                            </MenuItem>
                        ))
                    }
                </MenuBarMenu>
            </div>
        );
    }
    wrapAboutMenuCallback (callback) {
        return () => {
            callback();
            this.props.onRequestCloseAbout();
        };
    }

    handleClickLogin () {
        console.log('login')
        Swal.fire({
            title: '登录',
            html: `<input type="text" id="username" class="swal2-input" placeholder="账号">
                <input type="password" id="password" class="swal2-input" placeholder="密码">`,
            confirmButtonText: '提交',
            focusConfirm: false,
            preConfirm: () => {
                const username = Swal.getPopup().querySelector('#username').value
                const password = Swal.getPopup().querySelector('#password').value
                if (!username || !password) {
                    Swal.showValidationMessage(`请把表单填写完整`)
                }
                return {username: username, password: password }
            }
        }).then((result) => {
            console.log(result)
            if (result.value) {
                axios.post(`${api_base}/signin`, {username: result.value.username, userpwd: result.value.password})
                    .then(response => {
                        console.log(response.data)
                        if (response.data && response.data.status == 'success') {
                            console.log('登录成功')
                            localStorage.userId = response.data.id
                            this.props.userinfo.filelist = response.data.unreleased
                            this.props.userinfo.userId = response.data.id
                            this.props.userinfo.headimg = response.data.headimg
                            this.setState({loginbtnVisible: false})
                        }else {
                            Swal.fire({title: '账号或密码错误'})
                        }
                    })
            }

            // Swal.fire(`Login: ${result.value.username}-Password: ${result.value.password}`.trim())
        })
    }

    handleClickRegister () {
        console.log('register')
        Swal.fire({
            title: '注册',
            html: `
                <input type="text" id="username" class="swal2-input" placeholder="创建账号(字母或数字组合，6位含以上)">
                <input type="text" id="nickname" class="swal2-input" placeholder="给自己创建一个昵称">
                <input type="password" id="password" class="swal2-input" placeholder="创建密码(6位含以上)">
                <input type="password" id="password2" class="swal2-input" placeholder="再次确认密码">`,
            confirmButtonText: '提交',
            focusConfirm: false,
            preConfirm: () => {
                const username = Swal.getPopup().querySelector('#username').value
                const nickname = Swal.getPopup().querySelector('#nickname').value
                const password = Swal.getPopup().querySelector('#password').value
                const password2 = Swal.getPopup().querySelector('#password2').value
                if (!username || !nickname || !password || !password2 || password != password2) {
                    if (password != password2) {
                        Swal.showValidationMessage(`前后密码不一致`)
                    }else {
                        Swal.showValidationMessage(`请把表单填写完整`)
                    }
                }
                return {username, nickname, password, password2}
            }
        }).then((result) => {
            console.log(result)
            if (result.value) {
                axios.post(`${api_base}/register`, {username: result.value.username, nickname: result.value.nickname, userpwd: result.value.password, samepwd: result.value.password2})
                    .then(response => {
                        console.log(response.data)
                        if (response.data && response.data.status == 'success') {
                            console.log('注册成功')
                        } else {
                            Swal.fire({title: response.data.msg})
                        }
                    });
            }
            // Swal.fire(`Username: ${result.value.username}-Password: ${result.value.password}`.trim())
        })
    }

    onLogOut () {
        axios.get(`${api_base}/logout`).then(res => {
            delete localStorage.userId
            this.props.userinfo.filelist = []
            this.setState({loginbtnVisible: true})
        })
    }

    onClickIndex (){
        window.location.href = `${api_base}/`
    }

    render () {
        const saveNowMessage = (
            <FormattedMessage
                defaultMessage="Save now"
                description="Menu bar item for saving now"
                id="gui.menuBar.saveNow"
            />
        );
        const createCopyMessage = (
            <FormattedMessage
                defaultMessage="Save as a copy"
                description="Menu bar item for saving as a copy"
                id="gui.menuBar.saveAsCopy"
            />
        );
        const remixMessage = (
            <FormattedMessage
                defaultMessage="Remix"
                description="Menu bar item for remixing"
                id="gui.menuBar.remix"
            />
        );
        const newProjectMessage = (
            <FormattedMessage
                defaultMessage="New"
                description="Menu bar item for creating a new project"
                id="gui.menuBar.new"
            />
        );
        const remixButton = (
            <Button
                className={classNames(
                    styles.menuBarButton,
                    styles.remixButton
                )}
                iconClassName={styles.remixButtonIcon}
                iconSrc={remixIcon}
                onClick={this.handleClickRemix}
            >
                {remixMessage}
            </Button>
        );
        // Show the About button only if we have a handler for it (like in the desktop app)
        const aboutButton = this.buildAboutMenu(this.props.onClickAbout);
        return (
            // <Box style={{display: 'none'}}
            <Box style={{}}
                className={classNames(
                    this.props.className,
                    styles.menuBar
                )}
            >
                <div className={styles.mainMenu}>
                    <div className={styles.fileGroup}>
                        {this.props.onClickLogo ? (
                            <div className={classNames(styles.menuBarItem)}>
                                <img
                                    alt="Scratch"
                                    className={classNames(styles.scratchLogo, {
                                        [styles.clickable]: typeof this.props.onClickLogo !== 'undefined'
                                    })}
                                    draggable={false}
                                    src={this.props.logo}
                                    onClick={this.props.onClickLogo}
                                />
                            </div>
                        ) : null}


                        {this.state.comunityMode && <div
                            className={classNames(styles.menuBarItem, styles.hoverable)}
                            onMouseUp={this.onClickIndex}
                        >
                            <div>
                                <FormattedMessage
                                    defaultMessage="Community Index"
                                    description="Text to link to community index"
                                    id="gui.menuBar.index"
                                />
                            </div>
                        </div>}

                        {(this.props.canChangeLanguage) && (<div
                            className={classNames(styles.menuBarItem, styles.hoverable, styles.languageMenu)}
                        >
                            <div>
                                <img
                                    className={styles.languageIcon}
                                    src={languageIcon}
                                    width="24"
                                    height="24"
                                />
                                <img
                                    className={styles.languageCaret}
                                    src={dropdownCaret}
                                    width="8"
                                    height="5"
                                />
                            </div>
                            <LanguageSelector label={this.props.intl.formatMessage(ariaMessages.language)} />
                        </div>)}
                        {/* tw: theme toggler */}
                        {this.props.onClickTheme && (
                            <div
                                className={classNames(styles.menuBarItem, styles.hoverable)}
                                onMouseUp={this.props.onClickTheme}
                            >
                                <img
                                    src={themeIcon}
                                    width="24"
                                    height="24"
                                />
                            </div>
                        )}
                        {/* tw: display compile errors */}
                        {this.props.compileErrors.length > 0 && <div>
                            <div
                                className={classNames(styles.menuBarItem, styles.hoverable, {
                                    [styles.active]: this.props.errorsMenuOpen
                                })}
                                onMouseUp={this.props.onClickErrors}
                            >
                                <div className={classNames(styles.errorsMenu)}>
                                    <img
                                        className={styles.languageIcon}
                                        src={errorIcon}
                                    />
                                    <img
                                        className={styles.languageCaret}
                                        src={dropdownCaret}
                                    />
                                </div>
                                <MenuBarMenu
                                    className={classNames(styles.menuBarMenu)}
                                    open={this.props.errorsMenuOpen}
                                    place={this.props.isRtl ? 'left' : 'right'}
                                    onRequestClose={this.props.onRequestCloseErrors}
                                >
                                    <MenuSection>
                                        <MenuItemLink href="https://scratch.mit.edu/users/GarboMuffin/#comments">
                                            <FormattedMessage
                                                defaultMessage="Some scripts could not be compiled."
                                                description="Link in error menu"
                                                id="tw.menuBar.reportError1"
                                            />
                                        </MenuItemLink>
                                        <MenuItemLink href="https://scratch.mit.edu/users/GarboMuffin/#comments">
                                            <FormattedMessage
                                                defaultMessage="This is a bug. Please report it."
                                                description="Link in error menu"
                                                id="tw.menuBar.reportError2"
                                            />
                                        </MenuItemLink>
                                    </MenuSection>
                                    <MenuSection>
                                        {this.props.compileErrors.map(({id, sprite, error}) => (
                                            <MenuItem key={id}>
                                                {this.props.intl.formatMessage(twMessages.compileError, {
                                                    sprite,
                                                    error
                                                })}
                                            </MenuItem>
                                        ))}
                                    </MenuSection>
                                </MenuBarMenu>
                            </div>
                        </div>}
                        {(this.props.canManageFiles) && (
                            <div
                                className={classNames(styles.menuBarItem, styles.hoverable, {
                                    [styles.active]: this.props.fileMenuOpen
                                })}
                                onMouseUp={this.props.onClickFile}
                            >
                                <FormattedMessage
                                    defaultMessage="File"
                                    description="Text for file dropdown menu"
                                    id="gui.menuBar.file"
                                />
                                <MenuBarMenu
                                    className={classNames(styles.menuBarMenu)}
                                    open={this.props.fileMenuOpen}
                                    place={this.props.isRtl ? 'left' : 'right'}
                                    onRequestClose={this.props.onRequestCloseFile}
                                >
                                    <MenuSection>
                                        <MenuItem
                                            isRtl={this.props.isRtl}
                                            onClick={this.handleClickNew}
                                        >
                                            {newProjectMessage}
                                        </MenuItem>
                                    </MenuSection>
                                    {(this.props.canSave || this.props.canCreateCopy || this.props.canRemix) && (
                                        <MenuSection>
                                            {this.props.canSave && (
                                                <MenuItem onClick={this.handleClickSave}>
                                                    {saveNowMessage}
                                                </MenuItem>
                                            )}
                                            {this.props.canCreateCopy && (
                                                <MenuItem onClick={this.handleClickSaveAsCopy}>
                                                    {createCopyMessage}
                                                </MenuItem>
                                            )}
                                            {this.props.canRemix && (
                                                <MenuItem onClick={this.handleClickRemix}>
                                                    {remixMessage}
                                                </MenuItem>
                                            )}
                                        </MenuSection>
                                    )}
                                    <MenuSection>
                                        <MenuItem
                                            onClick={this.props.onStartSelectingFileUpload}
                                        >
                                            {this.props.intl.formatMessage(sharedMessages.loadFromComputerTitle)}
                                        </MenuItem>
                                        <SB3Downloader>{(_className, downloadProject, extended) => (
                                            <React.Fragment>
                                                {/* {extended.available && (
                                                    <React.Fragment>
                                                        {extended.name !== null && (
                                                            <MenuItem onClick={this.getSaveToComputerHandler(extended.saveToLastFile)}>
                                                                <FormattedMessage
                                                                    defaultMessage="Save as {file}"
                                                                    description="Menu bar item to save project to an existing file on the user's computer"
                                                                    id="tw.menuBar.saveAs"
                                                                    values={{
                                                                        file: extended.name
                                                                    }}
                                                                />
                                                            </MenuItem>
                                                        )}
                                                        <MenuItem onClick={this.getSaveToComputerHandler(extended.saveAsNew)}>
                                                            <FormattedMessage
                                                                defaultMessage="Save to your computer"
                                                                description="Menu bar item for downloading a project to your computer" // eslint-disable-line max-len
                                                                id="gui.menuBar.downloadToComputer"
                                                            />
                                                        </MenuItem>
                                                    </React.Fragment>
                                                )} */}
                                                <MenuItem onClick={this.getSaveToComputerHandler(downloadProject)}>
                                                    {extended.available ? (
                                                        <FormattedMessage
                                                            defaultMessage="{saveToYourComputer} (legacy)"
                                                            description="Wrapper around 'Save to your computer' when a more modern API is available" // eslint-disable-line max-len
                                                            id="tw.menuBar.legacyDownloadToComputer"
                                                            values={{
                                                                saveToYourComputer: (
                                                                    <FormattedMessage
                                                                        defaultMessage="Save to your computer"
                                                                        description="Menu bar item for downloading a project to your computer" // eslint-disable-line max-len
                                                                        id="gui.menuBar.downloadToComputer"
                                                                    />
                                                                )
                                                            }}
                                                        />
                                                    ) : (
                                                        <FormattedMessage
                                                            defaultMessage="Save to your computer"
                                                            description="Menu bar item for downloading a project to your computer" // eslint-disable-line max-len
                                                            id="gui.menuBar.downloadToComputer"
                                                        />
                                                    )}
                                                </MenuItem>
                                            </React.Fragment>
                                        )}</SB3Downloader>
                                    </MenuSection>
                                    <MenuSection>
                                        <TWRestorePointLoader>{(className, loadRestorePoint) => (
                                            <MenuItem
                                                className={className}
                                                onClick={loadRestorePoint}
                                            >
                                                <FormattedMessage
                                                    defaultMessage="Load restore point"
                                                    description="Menu bar item for loading a restore point"
                                                    id="tw.menuBar.loadRestorePoint"
                                                />
                                            </MenuItem>
                                        )}</TWRestorePointLoader>
                                    </MenuSection>
                                </MenuBarMenu>
                            </div>
                        )}
                        <div
                            className={classNames(styles.menuBarItem, styles.hoverable, {
                                [styles.active]: this.props.editMenuOpen
                            })}
                            onMouseUp={this.props.onClickEdit}
                        >
                            <div className={classNames(styles.editMenu)}>
                                <FormattedMessage
                                    defaultMessage="Edit"
                                    description="Text for edit dropdown menu"
                                    id="gui.menuBar.edit"
                                />
                            </div>
                            <MenuBarMenu
                                className={classNames(styles.menuBarMenu)}
                                open={this.props.editMenuOpen}
                                place={this.props.isRtl ? 'left' : 'right'}
                                onRequestClose={this.props.onRequestCloseEdit}
                            >
                                {this.props.isPlayerOnly ? null : (
                                    <DeletionRestorer>{(handleRestore, {restorable, deletedItem}) => (
                                        <MenuItem
                                            className={classNames({[styles.disabled]: !restorable})}
                                            onClick={this.handleRestoreOption(handleRestore)}
                                        >
                                            {this.restoreOptionMessage(deletedItem)}
                                        </MenuItem>
                                    )}</DeletionRestorer>
                                )}
                                <MenuSection>
                                    <TurboMode>{(toggleTurboMode, {turboMode}) => (
                                        <MenuItem onClick={toggleTurboMode}>
                                            {turboMode ? (
                                                <FormattedMessage
                                                    defaultMessage="Turn off Turbo Mode"
                                                    description="Menu bar item for turning off turbo mode"
                                                    id="gui.menuBar.turboModeOff"
                                                />
                                            ) : (
                                                <FormattedMessage
                                                    defaultMessage="Turn on Turbo Mode"
                                                    description="Menu bar item for turning on turbo mode"
                                                    id="gui.menuBar.turboModeOn"
                                                />
                                            )}
                                        </MenuItem>
                                    )}</TurboMode>
                                    <FramerateChanger>{(changeFramerate, {framerate}) => (
                                        <MenuItem onClick={changeFramerate}>
                                            {framerate === 60 ? (
                                                <FormattedMessage
                                                    defaultMessage="Turn off 60 FPS Mode"
                                                    description="Menu bar item for turning off 60 FPS mode"
                                                    id="tw.menuBar.60off"
                                                />
                                            ) : (
                                                <FormattedMessage
                                                    defaultMessage="Turn on 60 FPS Mode"
                                                    description="Menu bar item for turning on 60 FPS mode"
                                                    id="tw.menuBar.60on"
                                                />
                                            )}
                                        </MenuItem>
                                    )}</FramerateChanger>
                                    <ChangeUsername>{changeUsername => (
                                        <MenuItem onClick={changeUsername}>
                                            <FormattedMessage
                                                defaultMessage="Change Username"
                                                description="Menu bar item for changing the username"
                                                id="tw.menuBar.changeUsername"
                                            />
                                        </MenuItem>
                                    )}</ChangeUsername>
                                    <CloudVariablesToggler>{(toggleCloudVariables, {enabled, canUseCloudVariables}) => (
                                        <MenuItem
                                            className={classNames({[styles.disabled]: !canUseCloudVariables})}
                                            onClick={toggleCloudVariables}
                                        >
                                            {canUseCloudVariables ? (
                                                enabled ? (
                                                    <FormattedMessage
                                                        defaultMessage="Disable Cloud Variables"
                                                        description="Menu bar item for disabling cloud variables"
                                                        id="tw.menuBar.cloudOff"
                                                    />
                                                ) : (
                                                    <FormattedMessage
                                                        defaultMessage="Enable Cloud Variables"
                                                        description="Menu bar item for enabling cloud variables"
                                                        id="tw.menuBar.cloudOn"
                                                    />
                                                )
                                            ) : (
                                                <FormattedMessage
                                                    defaultMessage="Cloud Variables are not Available"
                                                    description="Menu bar item for when cloud variables are not available"
                                                    id="tw.menuBar.cloudUnavailable"
                                                />
                                            )}
                                        </MenuItem>
                                    )}</CloudVariablesToggler>
                                </MenuSection>
                                <MenuSection>
                                    <MenuItem onClick={this.props.onClickSettings}>
                                        <FormattedMessage
                                            defaultMessage="Advanced Settings"
                                            description="Menu bar item for advanced settings"
                                            id="tw.menuBar.moreSettings"
                                        />
                                    </MenuItem>
                                </MenuSection>
                            </MenuBarMenu>
                        </div>
                        {this.props.onClickAddonSettings && (
                            <div
                                className={classNames(styles.menuBarItem, styles.hoverable)}
                                onMouseUp={this.props.onClickAddonSettings}
                            >
                                <div>
                                    <FormattedMessage
                                        defaultMessage="Addons"
                                        description="Menu bar item for addon settings"
                                        id="tw.menuBar.addons"
                                    />
                                </div>
                            </div>
                        )}
                        <div
                            className={classNames(styles.menuBarItem, styles.hoverable)}
                            onMouseUp={this.props.onClickSettings}
                        >
                            <div>
                                <FormattedMessage
                                    defaultMessage="Advanced"
                                    description="Text for advanced settings menu item"
                                    id="tw.menuBar.advanced"
                                />
                            </div>
                        </div>
                        {/*
                        <div
                            className={classNames(styles.menuBarItem, styles.hoverable, {
                                [styles.active]: this.props.helpMenuOpen
                            })}
                            onMouseUp={this.props.onClickHelp}
                        >
                            <div className={classNames(styles.helpMenu)}>
                                <FormattedMessage
                                    defaultMessage="Help"
                                    description="Text for TurboWarp Help dropdown menu"
                                    id="tw.menuBar.help"
                                />
                            </div>
                            <MenuBarMenu
                                className={classNames(styles.menuBarMenu)}
                                open={this.props.helpMenuOpen}
                                place={this.props.isRtl ? 'left' : 'right'}
                                onRequestClose={this.props.onRequestCloseHelp}
                            >
                                <MenuSection>
                                    <MenuItemLink href="https://github.com/TurboWarp">
                                        <FormattedMessage
                                            defaultMessage="Source Code"
                                            description="Link to source code"
                                            id="tw.code"
                                        />
                                    </MenuItemLink>
                                    <MenuItemLink href="/privacy.html">
                                        <FormattedMessage
                                            defaultMessage="Privacy Policy"
                                            description="Link to privacy policy"
                                            id="tw.privacy"
                                        />
                                    </MenuItemLink>
                                    <MenuItemLink href="https://desktop.turbowarp.org/">
                                        {'TurboWarp Desktop'}
                                    </MenuItemLink>
                                    <MenuItemLink href="https://packager.turbowarp.org/">
                                        {'TurboWarp Packager'}
                                    </MenuItemLink>
                                    <MenuItemLink href="https://github.com/TurboWarp/scratch-gui/wiki/Embedding">
                                        <FormattedMessage
                                            defaultMessage="Embedding"
                                            description="Menu bar item for embedding link"
                                            id="tw.menuBar.embed"
                                        />
                                    </MenuItemLink>
                                    <MenuItemLink href="https://github.com/TurboWarp/scratch-gui/wiki/URL-Parameters">
                                        <FormattedMessage
                                            defaultMessage="URL Parameters"
                                            description="Menu bar item for URL parameters link"
                                            id="tw.menuBar.parameters"
                                        />
                                    </MenuItemLink>
                                    <MenuItemLink href="https://github.com/TurboWarp/translations/blob/master/CONTRIBUTING.md#readme">
                                        <FormattedMessage
                                            defaultMessage="Help Translate TurboWarp"
                                            description="Menu bar item for translating TurboWarp link"
                                            id="tw.menuBar.translate"
                                        />
                                    </MenuItemLink>
                                </MenuSection>
                            </MenuBarMenu>
                        </div >
                        */}
                    </div >
                    <Divider className={classNames(styles.divider)} />
                    {
                        this.props.canEditTitle ? (
                            <div className={classNames(styles.menuBarItem, styles.growable)}>
                                <MenuBarItemTooltip
                                    enable
                                    id="title-field"
                                >
                                    <ProjectTitleInput
                                        className={classNames(styles.titleFieldGrowable)}
                                    />
                                </MenuBarItemTooltip>
                            </div>
                        ) : ((this.props.authorUsername && this.props.authorUsername !== this.props.username) ? (
                            <AuthorInfo
                                className={styles.authorInfo}
                                imageUrl={this.props.authorThumbnailUrl}
                                projectId={this.props.projectId}
                                projectTitle={this.props.projectTitle}
                                userId={this.props.authorId}
                                username={this.props.authorUsername}
                            />
                        ) : null)
                    }
                    {/* 
                    <div className={classNames(styles.menuBarItem)}>
                        {this.props.canShare ? (
                            (this.props.isShowingProject || this.props.isUpdating) && (
                                <ProjectWatcher onDoneUpdating={this.props.onSeeCommunity}>
                                    {
                                        waitForUpdate => (
                                            <ShareButton
                                                className={styles.menuBarButton}
                                                isShared={this.props.isShared}
                                                onClick={() => {
                                                    this.handleClickShare(waitForUpdate);
                                                }}
                                            />
                                        )
                                    }
                                </ProjectWatcher>
                            )
                        ) : (
                            this.props.showComingSoon ? (
                                <MenuBarItemTooltip id="share-button">
                                    <ShareButton className={styles.menuBarButton} />
                                </MenuBarItemTooltip>
                            ) : []
                        )}
                        {this.props.canRemix ? remixButton : []}
                    </div>
                    <div className={classNames(styles.menuBarItem, styles.communityButtonWrapper)}>
                        {this.props.enableCommunity ? (
                            (this.props.isShowingProject || this.props.isUpdating) && (
                                <ProjectWatcher onDoneUpdating={this.props.onSeeCommunity}>
                                    {
                                        waitForUpdate => (
                                            <CommunityButton
                                                className={styles.menuBarButton}
                                                onClick={() => {
                                                    this.handleClickSeeCommunity(waitForUpdate);
                                                }}
                                            />
                                        )
                                    }
                                </ProjectWatcher>
                            )
                        ) : (this.props.showComingSoon ? (
                            <MenuBarItemTooltip id="community-button">
                                <CommunityButton className={styles.menuBarButton} />
                            </MenuBarItemTooltip>
                        ) : (this.props.enableSeeInside ? (
                            <SeeInsideButton
                                className={styles.menuBarButton}
                                onClick={this.handleClickSeeInside}
                            />
                        ) : []))}
                    </div>
                     */}
                    {/* tw: add a feedback button  */}
                    {/* <div className={styles.menuBarItem}>
                        <a
                            className={styles.feedbackLink}
                            href="https://scratch.mit.edu/users/GarboMuffin/#comments"
                            rel="noopener noreferrer"
                            target="_blank"
                        >
                            <Button className={styles.feedbackButton}>
                                <FormattedMessage
                                    defaultMessage="TurboWarp Feedback"
                                    description="Button to give feedback in the menu bar"
                                    id="tw.feedbackButton"
                                />
                            </Button>
                        </a>
                    </div> */}
                   

                    <div
                        className={classNames(styles.menuBarItem, styles.hoverable, {
                            [styles.active]: this.props.helpMenuOpen
                        })}
                        onMouseUp={this.props.onClickHelp}
                    >
                        <div className={classNames(styles.editMenu)}>
                            <FormattedMessage
                                defaultMessage="Download to Host"
                                id="lepi.menuBar.download_to_host"
                            />
                        </div>
                        <MenuBarMenu
                            className={classNames(styles.menuBarMenu)}
                            open={this.props.helpMenuOpen}
                            place={this.props.isRtl ? 'left' : 'right'}
                            onRequestClose={this.props.onRequestCloseHelp}
                        >
                            <MenuSection>

                                <ScratchDownloader>{(className, downloadProjectCallback) => (
                                    <MenuItem
                                        className={className}
                                        onClick={downloadProjectCallback}
                                    >
                                        <FormattedMessage
                                            defaultMessage="Download as Scratch Works"
                                            id="lepi.menuBar.download_as_scratch"
                                        />
                                    </MenuItem>
                                )}</ScratchDownloader>
                                <DebugDownloader>{(className, downloadProjectCallback) => (
                                    <MenuItem
                                        className={className}
                                        onClick={downloadProjectCallback}
                                    ><FormattedMessage
                                            defaultMessage="Debug Run on Host"
                                            id="lepi.menuBar.debug_on_host"
                                        />
                                        
                                    </MenuItem>
                                )}</DebugDownloader>

                                {/* <PythonDownloader>{(className, downloadProjectCallback) => (
                                    <MenuItem
                                        className={className}
                                        onClick={downloadProjectCallback}
                                    >
                                        下载为Python文件
                                    </MenuItem>
                                )}</PythonDownloader> */}
                            </MenuSection>
                        </MenuBarMenu>
                    </div>
                    <Divider className={classNames(styles.divider)} />
                    {this.state.comunityMode && !this.state.loginbtnVisible && this.props.userinfo.filelist.length > 0 && !this.state.schoolMode ?
                        <Box onClick={this.props.showJobList}className={classNames(styles.menuBarItem, styles.hoverable)}>
                            <Button
                                className={styles.fileButton}
                                iconSrc={fileIcon}

                            >
                                <FormattedMessage
                                    defaultMessage="Load your job"
                                    description="Menu bar item for uploading a project from your computer"
                                    id="gui.menuBar.loadhistroyjob"
                                />
                            </Button>
                        </Box>
                        : null}
                    {this.state.comunityMode && !this.state.loginbtnVisible && !this.state.schoolMode &&
                        <Box onClick={this.props.showSaveModal}className={classNames(styles.menuBarItem, styles.hoverable)}>
                            <Button
                                className={classNames(styles.downButton)}
                                iconSrc={saveIcon}
                            >
                                <FormattedMessage
                                    defaultMessage="Save"
                                    description="Upload your Save"
                                    id="gui.menuBar.savejob"
                                />
                            </Button>
                        </Box>
                    }
                    {this.state.comunityMode && !this.state.loginbtnVisible && !this.state.schoolMode &&
                        <Box onClick={this.props.showReleasedModal}className={classNames(styles.menuBarItem, styles.hoverable)}>
                            <Button
                                className={classNames(styles.shareButton)}
                                iconSrc={uploadIcon}

                            >
                                <FormattedMessage
                                    defaultMessage="Released"
                                    description="Released your job"
                                    id="gui.menuBar.uploadjob"
                                />
                            </Button>
                        </Box>
                    }
                    {this.state.comunityMode && this.state.schoolMode && this.props.isnewfile.stuid == this.props.userinfo.userid &&
                        <Box onClick={this.props.showSaveModal}className={classNames(styles.menuBarItem, styles.hoverable)}>
                            <Button
                                className={classNames(styles.downButton)}
                                iconSrc={saveIcon}
                            >
                                <FormattedMessage
                                    defaultMessage="Save"
                                    description="Upload your Save"
                                    id="gui.menuBar.savejob"
                                />
                            </Button>
                        </Box>
                    }
                </div >

                <div className={styles.accountInfoGroup}>
                    <div className={styles.menuBarItem}>
                        <TWSaveStatus />
                    </div>
                </div>


                {this.state.comunityMode && this.state.loginbtnVisible &&
                    <Box className={classNames(styles.menuBarItem)}>
                        <div className={classNames(styles.menuBarItem, styles.feedbackButtonWrapper)}>
                            <Button
                                className={classNames(styles.loginButton, styles.loginmsg)}
                                data-toggle="modal"
                                data-target="#login"
                            >
                                请先登录，否则作品将不会被保存！！
                            </Button>
                        </div>
                        <div onClick={this.handleClickLogin}className={classNames(styles.menuBarItem, styles.feedbackButtonWrapper)}>
                            <Button
                                className={classNames(styles.loginButton, 'user-pa-btn')}
                                iconSrc={catIcon}
                                data-toggle="modal"
                                data-target="#login"
                            >
                                <FormattedMessage
                                    defaultMessage="Login"
                                    description="Login"
                                    id="gui.menuBar.login"
                                />
                            </Button>
                        </div>
                        {this.state.canRegister && <div onClick={this.handleClickRegister}className={classNames(styles.menuBarItem, styles.feedbackButtonWrapper)}>
                            <Button
                                className={classNames(styles.regButton, 'user-pa-btn')}
                                data-toggle="modal"
                                data-target="#register"

                            >
                                <FormattedMessage
                                    defaultMessage="Register"
                                    description="Reg"
                                    id="gui.menuBar.register"
                                />
                            </Button>
                        </div> }
                    </Box>}
                    
                {this.state.comunityMode &&  (!this.state.loginbtnVisible) && <div className={styles.accountInfoGroup}>
                        <React.Fragment>
                            <AccountNav
                                className={classNames(
                                    styles.menuBarItem,
                                    styles.hoverable,
                                    {[styles.active]: this.props.accountMenuOpen }
                                )}
                                isOpen={this.props.accountMenuOpen}
                                isRtl={this.props.isRtl}
                                menuBarMenuClassName={classNames(styles.menuBarMenu)}
                                onClick={this.props.onClickAccount}
                                onClose={this.props.onRequestCloseAccount}
                                onLogOut={this.onLogOut}
                            />
                        </React.Fragment>
                    </div>}

                {aboutButton}
            </Box>
        );
    }
}

MenuBar.propTypes = {
    enableSeeInside: PropTypes.bool,
    onClickSeeInside: PropTypes.func,
    aboutMenuOpen: PropTypes.bool,
    accountMenuOpen: PropTypes.bool,
    authorId: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
    authorThumbnailUrl: PropTypes.string,
    authorUsername: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
    autoUpdateProject: PropTypes.func,
    canChangeLanguage: PropTypes.bool,
    canCreateCopy: PropTypes.bool,
    canCreateNew: PropTypes.bool,
    canEditTitle: PropTypes.bool,
    canManageFiles: PropTypes.bool,
    canRemix: PropTypes.bool,
    canSave: PropTypes.bool,
    canShare: PropTypes.bool,
    className: PropTypes.string,
    compileErrors: PropTypes.arrayOf(PropTypes.shape({
        sprite: PropTypes.string,
        error: PropTypes.string,
        id: PropTypes.number
    })),
    confirmReadyToReplaceProject: PropTypes.func,
    editMenuOpen: PropTypes.bool,
    enableCommunity: PropTypes.bool,
    fileMenuOpen: PropTypes.bool,
    handleSaveProject: PropTypes.func,
    intl: intlShape,
    isPlayerOnly: PropTypes.bool,
    isRtl: PropTypes.bool,
    isShared: PropTypes.bool,
    isShowingProject: PropTypes.bool,
    isUpdating: PropTypes.bool,
    languageMenuOpen: PropTypes.bool,
    locale: PropTypes.string.isRequired,
    loginMenuOpen: PropTypes.bool,
    logo: PropTypes.string,
    onClickAbout: PropTypes.oneOfType([
        PropTypes.func, // button mode: call this callback when the About button is clicked
        PropTypes.arrayOf( // menu mode: list of items in the About menu
            PropTypes.shape({
                title: PropTypes.string, // text for the menu item
                onClick: PropTypes.func // call this callback when the menu item is clicked
            })
        )
    ]),
    onClickAccount: PropTypes.func,
    onClickAddonSettings: PropTypes.func,
    onClickTheme: PropTypes.func,
    onClickEdit: PropTypes.func,
    onClickFile: PropTypes.func,
    onClickLanguage: PropTypes.func,
    onClickLogin: PropTypes.func,
    onClickLogo: PropTypes.func,
    onClickNew: PropTypes.func,
    onClickRemix: PropTypes.func,
    onClickSave: PropTypes.func,
    onClickSaveAsCopy: PropTypes.func,
    onClickSettings: PropTypes.func,
    onClickHelp: PropTypes.func,
    onRequestCloseHelp: PropTypes.func,
    onClickErrors: PropTypes.func,
    onRequestCloseErrors: PropTypes.func,
    onLogOut: PropTypes.func,
    onOpenRegistration: PropTypes.func,
    onOpenTipLibrary: PropTypes.func,
    onProjectTelemetryEvent: PropTypes.func,
    onRequestOpenAbout: PropTypes.func,
    onRequestCloseAbout: PropTypes.func,
    onRequestCloseAccount: PropTypes.func,
    onRequestCloseEdit: PropTypes.func,
    onRequestCloseFile: PropTypes.func,
    onRequestCloseLanguage: PropTypes.func,
    onRequestCloseLogin: PropTypes.func,
    onSeeCommunity: PropTypes.func,
    onShare: PropTypes.func,
    onStartSelectingFileUpload: PropTypes.func,
    onToggleLoginOpen: PropTypes.func,
    projectId: PropTypes.string,
    projectTitle: PropTypes.string,
    renderLogin: PropTypes.func,
    sessionExists: PropTypes.bool,
    helpMenuOpen: PropTypes.bool,
    errorsMenuOpen: PropTypes.bool,
    shouldSaveBeforeTransition: PropTypes.func,
    showComingSoon: PropTypes.bool,
    userOwnsProject: PropTypes.bool,
    username: PropTypes.string,
    vm: PropTypes.instanceOf(VM).isRequired,
    showJobList: PropTypes.func,
    showSaveModal: PropTypes.func,
    showReleasedModal: PropTypes.func,
    filelist: PropTypes.array
};

MenuBar.defaultProps = {
    logo: scratchLogo,
    onShare: () => {}
};

const mapStateToProps = (state, ownProps) => {
    const loadingState = state.scratchGui.projectState.loadingState;
    const user = state.session && state.session.session && state.session.session.user;
    return {
        aboutMenuOpen: aboutMenuOpen(state),
        accountMenuOpen: accountMenuOpen(state),
        authorThumbnailUrl: state.scratchGui.tw.author.thumbnail,
        authorUsername: state.scratchGui.tw.author.username,
        compileErrors: state.scratchGui.tw.compileErrors,
        fileMenuOpen: fileMenuOpen(state),
        editMenuOpen: editMenuOpen(state),
        isPlayerOnly: state.scratchGui.mode.isPlayerOnly,
        isRtl: state.locales.isRtl,
        isUpdating: getIsUpdating(loadingState),
        isShowingProject: getIsShowingProject(loadingState),
        languageMenuOpen: languageMenuOpen(state),
        locale: state.locales.locale,
        loginMenuOpen: loginMenuOpen(state),
        projectId: state.scratchGui.projectState.projectId,
        projectTitle: state.scratchGui.projectTitle,
        sessionExists: state.session && typeof state.session.session !== 'undefined',
        helpMenuOpen: helpMenuOpen(state),
        errorsMenuOpen: errorsMenuOpen(state),
        username: user ? user.username : null,
        userOwnsProject: ownProps.authorUsername && user &&
            (ownProps.authorUsername === user.username),
        vm: state.scratchGui.vm,
        userinfo: state.scratchGui.userinfo,
        isnewfile: state.scratchGui.userinfo.newfile,
    };
};

const mapDispatchToProps = dispatch => ({
    onClickSeeInside: () => dispatch(setPlayer(false)),
    autoUpdateProject: () => dispatch(autoUpdateProject()),
    onOpenTipLibrary: () => dispatch(openTipsLibrary()),
    onClickAccount: () => dispatch(openAccountMenu()),
    onRequestCloseAccount: () => dispatch(closeAccountMenu()),
    onClickFile: () => dispatch(openFileMenu()),
    onRequestCloseFile: () => dispatch(closeFileMenu()),
    onClickEdit: () => dispatch(openEditMenu()),
    onRequestCloseEdit: () => dispatch(closeEditMenu()),
    onClickLanguage: () => dispatch(openLanguageMenu()),
    onRequestCloseLanguage: () => dispatch(closeLanguageMenu()),
    onClickLogin: () => dispatch(openLoginMenu()),
    onRequestCloseLogin: () => dispatch(closeLoginMenu()),
    onClickHelp: () => dispatch(openHelpMenu()),
    onRequestCloseHelp: () => dispatch(closeHelpMenu()),
    onClickErrors: () => dispatch(openErrorsMenu()),
    onRequestCloseErrors: () => dispatch(closeErrorsMenu()),
    onRequestOpenAbout: () => dispatch(openAboutMenu()),
    onRequestCloseAbout: () => dispatch(closeAboutMenu()),
    onClickNew: needSave => {
        dispatch(requestNewProject(needSave));
        dispatch(setFileHandle(null));
    },
    onClickRemix: () => dispatch(remixProject()),
    onClickSave: () => dispatch(manualUpdateProject()),
    onClickSaveAsCopy: () => dispatch(saveProjectAsCopy()),
    onClickSettings: () => {
        dispatch(openSettingsModal());
        dispatch(closeEditMenu());
    },
    onSeeCommunity: () => dispatch(setPlayer(true)),
    showJobList: () => dispatch(openJobBar()),
    showSaveModal: () => dispatch(openSaveBar()),
    showReleasedModal: () => dispatch(openReleasedBar()),
    onFilenew: (data) => {dispatch(isFileNew(data)) },
    onOpenConnectionModal: id => {
        console.log(id)
        dispatch(setConnectionModalExtensionId(id));
        dispatch(openConnectionModal());
    },
});

export default compose(
    injectIntl,
    MenuBarHOC,
    connect(
        mapStateToProps,
        mapDispatchToProps
    )
)(MenuBar);

import React from 'react';
import {FormattedMessage} from 'react-intl';

import musicIconURL from './music/music.png';
import musicInsetIconURL from './music/music-small.svg';

import penIconURL from './pen/pen.png';
import penInsetIconURL from './pen/pen-small.svg';

import videoSensingIconURL from './videoSensing/video-sensing.png';
import videoSensingInsetIconURL from './videoSensing/video-sensing-small.svg';

import text2speechIconURL from './text2speech/text2speech.png';
import text2speechInsetIconURL from './text2speech/text2speech-small.svg';

import translateIconURL from './translate/translate.png';
import translateInsetIconURL from './translate/translate-small.png';

import makeymakeyIconURL from './makeymakey/makeymakey.png';
import makeymakeyInsetIconURL from './makeymakey/makeymakey-small.svg';

import microbitIconURL from './microbit/microbit.png';
import microbitInsetIconURL from './microbit/microbit-small.svg';
import microbitConnectionIconURL from './microbit/microbit-illustration.svg';
import microbitConnectionSmallIconURL from './microbit/microbit-small.svg';

import ev3IconURL from './ev3/ev3.png';
import ev3InsetIconURL from './ev3/ev3-small.svg';
import ev3ConnectionIconURL from './ev3/ev3-hub-illustration.svg';
import ev3ConnectionSmallIconURL from './ev3/ev3-small.svg';

import wedo2IconURL from './wedo2/wedo.png'; // TODO: Rename file names to match variable/prop names?
import wedo2InsetIconURL from './wedo2/wedo-small.svg';
import wedo2ConnectionIconURL from './wedo2/wedo-illustration.svg';
import wedo2ConnectionSmallIconURL from './wedo2/wedo-small.svg';
import wedo2ConnectionTipIconURL from './wedo2/wedo-button-illustration.svg';

import boostIconURL from './boost/boost.png';
import boostInsetIconURL from './boost/boost-small.svg';
import boostConnectionIconURL from './boost/boost-illustration.svg';
import boostConnectionSmallIconURL from './boost/boost-small.svg';
import boostConnectionTipIconURL from './boost/boost-button-illustration.svg';

import gdxforIconURL from './gdxfor/gdxfor.png';
import gdxforInsetIconURL from './gdxfor/gdxfor-small.svg';
import gdxforConnectionIconURL from './gdxfor/gdxfor-illustration.svg';
import gdxforConnectionSmallIconURL from './gdxfor/gdxfor-small.svg';

import twIcon from './tw/tw.svg';
import customExtensionIcon from './custom/custom.svg';
import returnIcon from './custom/return.svg';
import galleryIcon from './gallery/gallery.svg';
import {APP_NAME} from '../../brand';

import lepiIconURL from './lepi-banbao-v1/big/主机.png';
import lepiInsetIconURL from './lepi-banbao-v1/small/主机.png';

import lepiConnectionIconURL from './lepi-banbao-v1/small/主机m.png';
import lepiConnectionSmallIconURL from './lepi-banbao-v1/lepi_icon_small.png';

import actuatorIconURL from './lepi-banbao-v1/big/电机.png';
import actuatorInsetIconURL from './lepi-banbao-v1/small/电机.png';

import apriltagIconURL from './lepi-banbao-v1/big/标签识别.png';
import apriltagInsetIconURL from './lepi-banbao-v1/small/标签识别.png';


import cameraIconURL from './lepi-banbao-v1/big/摄像头.png';
import cameraInsetIconURL from './lepi-banbao-v1/small/摄像头.png';

import AIAudioIconURL from './lepi-banbao-v1/big/智能语音.png';


import audioIconURL from './lepi-banbao-v1/big/音频.png';
import audioInsetIconURL from './lepi-banbao-v1/small/音频.png';

import poseEstimateIconURL from './lepi-banbao-v1/big/姿态估计.png';
import poseEstimateInsetIconURL from './lepi-banbao-v1/small/姿态估计.png';

import handDetectIconURL from './lepi-banbao-v1/big/手势识别.png';
import handDetectInsetIconURL from './lepi-banbao-v1/small/手势识别.png';

import colorDetectIconURL from './lepi-banbao-v1/big/颜色识别.png';
import colorDetectInsetIconURL from './lepi-banbao-v1/small/颜色识别.png';


import faceRecognizeIconURL from './lepi-banbao-v1/big/人脸识别.png';
import faceRecognizeInsetIconURL from './lepi-banbao-v1/small/人脸识别.png';

import rfidIconURL from './lepi-banbao-v1/big/nfc.png';
import rfidInsetIconURL from './lepi-banbao-v1/small/nfc.png';

import joystickIconURL from './lepi-banbao-v1/big/游戏.png';
import joystickInsetIconURL from './lepi-banbao-v1/small/游戏.png';

import balanceCarIconURL from './lepi-banbao-v1/big/平衡车.png';
import balanceCarInsetIconURL from './lepi-banbao-v1/small/平衡车.png';

import pupperIconURL from './lepi-banbao-v1/big/四足.jpg';
import pupperInsetIconURL from './lepi-banbao-v1/small/四足.png';

import hexapodIconURL from './lepi-banbao-v1/big/六足.png';
import hexapodInsetIconURL from './lepi-banbao-v1/small/六足.png';

import webPlottorIconURL from './lepi-banbao-v1/big/绘图.png';
import webPlottorInsetIconURL from './lepi-banbao-v1/small/绘图.png';

import imageProcessIconURL from './lepi-banbao-v1/big/图像处理.png';
import imageProcessInsetIconURL from './lepi-banbao-v1/small/图像处理.png';

import sensorIconURL from './lepi-banbao-v1/big/传感器.png';
import sensorInsetIconURL from './lepi-banbao-v1/small/传感器.png';

import scienceSensorIconURL from './lepi-banbao-v1/big/科学传感器.png';
import scienceSensorInsetIconURL from './lepi-banbao-v1/small/科学传感器.png';

import transferLearningIconURL from './lepi-banbao-v1/big/迁移.png';
import transferLearningInsetIconURL from './lepi-banbao-v1/small/迁移.png';

import serialIconURL from './lepi-banbao-v1/big/串口通信.png';
import serialInsetIconURL from './lepi-banbao-v1/small/串口通信.png';

import imageClassifyIconURL from './lepi-banbao-v1/big/图像分类.png';
import imageClassifyInsetIconURL from './lepi-banbao-v1/small/图像分类.png';


import objectDetectIconURL from './lepi-banbao-v1/big/目标检测.png';
import objectDetectInsetIconURL from './lepi-banbao-v1/small/目标检测.png';

import variableIconURL from './lepi-banbao-v1/big/变量.png';
import variableInsetIconURL from './lepi-banbao-v1/small/变量.png';

import collaborationSheetIconURL from './lepi-banbao-v1/big/协作表格.png';
import collaborationSheetInsetIconURL from './lepi-banbao-v1/small/协作表格.png';

import learningMachineImageIconURL from './lepi-banbao-v1/big/机器学习-图像.png';
import learningMachineImageInsetIconURL from './lepi-banbao-v1/small/机器学习-图像.png';

import learningMachineAudioIconURL from './lepi-banbao-v1/big/机器学习-音频.png';
import learningMachineAudioInsetIconURL from './lepi-banbao-v1/small/机器学习-音频.png';

import learningMachinePoseIconURL from './lepi-banbao-v1/big/机器学习-姿态.png';
import learningMachinePoseInsetIconURL from './lepi-banbao-v1/small/机器学习-姿态.png';

import barcodeScannerIconURL from './lepi-banbao-v1/big/二维码扫描.png';
import barcodeScannerInsetIconURL from './lepi-banbao-v1/small/二维码扫描.png';

import ultraFaceIconURL from './lepi-banbao-v1/big/人脸检测.png';
import ultraFaceInsetIconURL from './lepi-banbao-v1/small/人脸检测.png';

import textRecognizeIconURL from './lepi-banbao-v1/big/文本识别.png';
import textRecognizeInsetIconURL from './lepi-banbao-v1/small/文本识别.png';

import httpIconURL from './lepi-banbao-v1/big/http.png';
import httpInsetIconURL from './lepi-banbao-v1/small/http.png';

import hostCommunicationIconURL from './lepi-banbao-v1/big/主机通信.png';
import hostCommunicationInsetIconURL from './lepi-banbao-v1/small/主机通信.png';

import homeassistantIconURL from './lepi-banbao-v1/big/智能家居.png';
import homeassistantInsetIconURL from './lepi-banbao-v1/small/智能家居.png';

import smartClassroomIconURL from './lepi-banbao-v1/big/智慧教室.jpg';
import smartClassroomInsetIconURL from './lepi-banbao-v1/small/智慧教室.jpg';

import mqttIconURL from './lepi-banbao-v1/big/mqtt.png';
import mqttInsetIconURL from './lepi-banbao-v1/small/mqtt.png';

import onegpioArduinoImage from './onegpio/arduino-uno-big.png';
import onegpioArduinoInsetIconURL from './onegpio/arduino-small.png';

import onegpioRpiImage from './onegpio/raspberry-pi-big-with-bcm.png';
import onegpioRpiInsetIconURL from './onegpio/raspberry-pi-small.png';

import onegpioEspImage from './onegpio/nodemcu-big.png';
import onegpioEspInsetIconURL from './onegpio/nodemcu-small.png';

import onegpioPicoboardImage from './onegpio/onegpioPicoboard.jpg';
import onegpioPicoboardInsetIconURL from './onegpio/onegpioPicoboard-small.png';

import onegpioCpxImage from './onegpio/onegpioCpx.jpg';
import onegpioCpxInsetIconURL from './onegpio/onegpioCpx-small.png';

import onegpioRoboHATImage from './onegpio/onegpioRoboHAT.png';
import onegpioRoboHATInsetIconURL from './onegpio/onegpioRoboHAT-small.png';

import onegpioRpiPicoImage from './onegpio/rpi-pico-big.png';
import onegpioRpiPicoInsetIconURL from './onegpio/rpi-pico-small.png';

const collaborator = <FormattedMessage
    defaultMessage="LEPI"
    id="gui.extension.lepi.collaborator"
/>

export default [
    {
        name: (<FormattedMessage
            defaultMessage="Lepi Host"
            id="gui.extension.lepi.name"
        />),
        extensionId: 'lepi',
        collaborator: collaborator,
        iconURL: lepiIconURL,
        insetIconURL: lepiInsetIconURL,
        description: (
            <FormattedMessage
                defaultMessage="A new generation of artificial intelligence programmable host."
                id="gui.extension.lepi.description"
            />
        ),
        featured: true,
        disabled: false,
        // bluetoothRequired: true,
        internetConnectionRequired: true,
        launchPeripheralConnectionFlow: true,
        useAutoScan: false,
        connectionIconURL: lepiConnectionIconURL,
        connectionSmallIconURL: lepiConnectionSmallIconURL,
        connectingMessage: (
            <FormattedMessage
                defaultMessage="Connecting"
                description="Message to help people connect to their lepi robot."
                id="gui.extension.lepi.connectingMessage"
            />
        ),
        tags: ['lepi'],
        // helpLink: 'http://www.jslpi.com/lepi'
    },
    {
        name: (<FormattedMessage
            defaultMessage="Sensor"
            id="gui.extension.lepiSensor.name"
        />),
        extensionId: 'lepiSensor',
        collaborator: collaborator,
        iconURL: sensorIconURL,
        insetIconURL: sensorInsetIconURL,
        description: (
            <FormattedMessage
                defaultMessage="Ultrasonic, infrared, acceleration, gyroscope, geomagnetic, etc., to perceive the world."
                id="gui.extension.lepiSensor.description"
            />
        ),
        tags: ['lepi', 'robot'],
        featured: true,
    },
    {
        name: (<FormattedMessage
            defaultMessage="ScienceSensor"
            id="gui.extension.lepiScienceSensor.name"
        />),
        extensionId: 'lepiScienceSensor',
        collaborator: collaborator,
        iconURL: scienceSensorIconURL,
        insetIconURL: scienceSensorInsetIconURL,
        description: (
            <FormattedMessage
                defaultMessage="Force, spectrum, aduio, temperature, voltage, etc., to explore science."
                id="gui.extension.lepiScienceSensor.description"
            />
        ),
        tags: ['lepi', 'robot'],
        featured: true,
    },
    {
        name: (<FormattedMessage
            defaultMessage="Actuator"
            id="gui.extension.lepiActuator.name"
        />),
        extensionId: 'lepiActuator',
        collaborator: collaborator,
        iconURL: actuatorIconURL,
        insetIconURL: actuatorInsetIconURL,
        description: (
            <FormattedMessage
                defaultMessage="Large motor, medium motor, steering gear, make your work move."
                id="gui.extension.lepiActuator.description"
            />
        ),
        tags: ['lepi', 'robot'],
        featured: true,
    },

    {
        name: (<FormattedMessage
            defaultMessage="Camera"
            id="gui.extension.lepiCamera.name"
        />),
        extensionId: 'lepiCamera',
        collaborator: collaborator,
        iconURL: cameraIconURL,
        insetIconURL: cameraInsetIconURL,
        description: (
            <FormattedMessage
                defaultMessage="See the world."
                id="gui.extension.lepiCamera.description"
            />
        ),
        tags: ['lepi', 'ai'],
        featured: true,
    },
    {
        name: (<FormattedMessage
            defaultMessage="Gesture Detection"
            id="gui.extension.lepiHandDetect.name"
        />),
        extensionId: 'lepiHandDetect',
        collaborator: collaborator,
        iconURL: handDetectIconURL,
        insetIconURL: handDetectInsetIconURL,
        description: (
            <FormattedMessage
                defaultMessage="Identify 22 key points of the hand."
                id="gui.extension.lepiHandDetect.description"
            />
        ),
        tags: ['lepi', 'ai'],
        featured: true,
    },
    // {
    //     name: (<FormattedMessage
    //         defaultMessage="Face Mesh"
    //         id="gui.extension.lepiFaceMesh.name"
    //     />),
    //     extensionId: 'lepiFaceMesh',
    //     collaborator: collaborator,
    //     iconURL: faceRecognizeIconURL,
    //     insetIconURL: faceRecognizeInsetIconURL,
    //     description: (
    //         <FormattedMessage
    //             defaultMessage="Identify 478 key points of the face."
    //             id="gui.extension.lepiFaceMesh.description"
    //         />
    //     ),
    //     featured: true,
    // },
    {
        name: (<FormattedMessage
            defaultMessage="Pose Estimation"
            id="gui.extension.lepiPoseEstimate.name"
        />),
        extensionId: 'lepiPoseEstimate',
        collaborator: collaborator,
        iconURL: poseEstimateIconURL,
        insetIconURL: poseEstimateInsetIconURL,
        description: (
            <FormattedMessage
                defaultMessage="Identify 33 key points of the body."
                id="gui.extension.lepiPoseEstimate.description"
            />
        ),
        tags: ['lepi', 'ai'],
        featured: true,
    },
    // {
    //     name: (<FormattedMessage
    //         defaultMessage="MoveNet Pose"
    //         id="gui.extension.lepiMoveNetPose.name"
    //     />),
    //     extensionId: 'lepiMoveNetPose',
    //     collaborator: collaborator,
    //     iconURL: poseEstimateIconURL,
    //     insetIconURL: poseEstimateInsetIconURL,
    //     description: (
    //         <FormattedMessage
    //             defaultMessage="Identify 17 key points of the body, faster."
    //             id="gui.extension.lepiMoveNetPose.description"
    //         />
    //     ),
    //     tags: ['lepi'],
    //     featured: true,
    // },
    {
        name: (<FormattedMessage
            defaultMessage="Apriltag Detection"
            id="gui.extension.lepiApriltagDetect.name"
        />),
        extensionId: 'lepiApriltagDetect',
        collaborator: collaborator,
        iconURL: apriltagIconURL,
        insetIconURL: apriltagInsetIconURL,
        description: (
            <FormattedMessage
                defaultMessage="Accurate spatial localization combined with apriltags."
                id="gui.extension.lepiApriltagDetect.description"
            />
        ),
        tags: ['lepi', 'ai'],
        featured: true,
    },
    /*
    {
        name: '人脸检测',
        extensionId: 'lepiUltraFace',
        collaborator: collaborator,
        iconURL: ultraFaceIconURL,
        insetIconURL: ultraFaceInsetIconURL,
        description: (
            <FormattedMessage
                defaultMessage="快速检测人脸，实时追踪."
                description="Description for the 'lepi_ultra_face' extension"
                id="gui.extension.lepi_ultra_face.description"
            />
        ),
        featured: true,
    },
    */
    {
        name: (<FormattedMessage
            defaultMessage="ML-Iamge"
            id="gui.extension.lepiLearningMachineImage.name"
        />),
        extensionId: 'lepiLearningMachineImage',
        collaborator: collaborator,
        iconURL: learningMachineImageIconURL,
        insetIconURL: learningMachineImageInsetIconURL,
        description: (
            <FormattedMessage
                defaultMessage="Load image classification model trained with machine learning."
                id="gui.extension.lepiLearningMachineImage.description"
            />
        ),
        tags: ['lepi', 'ai'],
        featured: true,
    },
    {
        name: (<FormattedMessage
            defaultMessage="ML-Audio"
            id="gui.extension.lepiLearningMachineAudio.name"
        />),
        extensionId: 'lepiLearningMachineAudio',
        collaborator: collaborator,
        iconURL: learningMachineAudioIconURL,
        insetIconURL: learningMachineAudioInsetIconURL,
        description: (
            <FormattedMessage
                defaultMessage="Load audio recognition model trained with machine learning."
                id="gui.extension.lepiLearningMachineAudio.description"
            />
        ),
        tags: ['lepi', 'ai'],
        featured: true,
    },
    {
        name: (<FormattedMessage
            defaultMessage="ML-Pose"
            id="gui.extension.lepiLearningMachinePose.name"
        />),
        extensionId: 'lepiLearningMachinePose',
        collaborator: collaborator,
        iconURL: learningMachinePoseIconURL,
        insetIconURL: learningMachinePoseInsetIconURL,
        description: (
            <FormattedMessage
                defaultMessage="Load pose recognition model trained with machine learning."
                id="gui.extension.lepiLearningMachinePose.description"
            />
        ),
        tags: ['lepi', 'ai'],
        featured: true,
    },
    {
        name: (<FormattedMessage
            defaultMessage="Image Process"
            id="gui.extension.lepiImageProcess.name"
        />),
        extensionId: 'lepiImageProcess',
        collaborator: collaborator,
        iconURL: imageProcessIconURL,
        insetIconURL: imageProcessInsetIconURL,
        description: (
            <FormattedMessage
                defaultMessage="Image preprocessing."
                id="gui.extension.lepiImageProcess.description"
            />
        ),
        tags: ['lepi', 'ai'],
        featured: true,
    },
    {
        name: (<FormattedMessage
            defaultMessage="AI Audio"
            id="gui.extension.lepiSmartAudio.name"
        />),
        extensionId: 'lepiSmartAudio',
        collaborator: collaborator,
        iconURL: AIAudioIconURL,
        insetIconURL: learningMachineAudioInsetIconURL,
        description: (
            <FormattedMessage
                defaultMessage="Speech reading, speech recognition, speech synthesis."
                id="gui.extension.lepiSmartAudio.description"
            />
        ),
        tags: ['lepi', 'ai'],
        featured: true,
    },
    {
        name: (<FormattedMessage
            defaultMessage="Audio"
            id="gui.extension.lepiAudio.name"
        />),
        extensionId: 'lepiAudio',
        collaborator: collaborator,
        iconURL: audioIconURL,
        insetIconURL: audioInsetIconURL,
        description: (
            <FormattedMessage
                defaultMessage="listen, sing."
                description="Description for the 'lepiAudio' extension"
                id="gui.extension.lepiAudio.description"
            />
        ),
        tags: ['lepi'],
        featured: true,
    },


    {
        name: (<FormattedMessage
            defaultMessage="Plottor"
            id="gui.extension.lepiWebPlottor.name"
        />),
        extensionId: 'lepiWebPlottor',
        collaborator: collaborator,
        iconURL: webPlottorIconURL,
        insetIconURL: webPlottorInsetIconURL,
        description: (
            <FormattedMessage
                defaultMessage="Plot sensor data into graphs."
                id="gui.extension.lepiWebPlottor.description"
            />
        ),
        tags: ['lepi', 'iot'],
        featured: true,
    },
    {
        name: (<FormattedMessage
            defaultMessage="Face Recognize"
            id="gui.extension.lepiFaceRecognize.name"
        />),
        extensionId: 'lepiFaceRecognize',
        collaborator: collaborator,
        iconURL: faceRecognizeIconURL,
        insetIconURL: faceRecognizeInsetIconURL,
        description: (
            <FormattedMessage
                defaultMessage="Detect faces and mark them as well."
                id="gui.extension.lepiFaceRecognize.description"
            />
        ),
        tags: ['lepi', 'ai'],
        featured: true,
    },
    {
        name: (<FormattedMessage
            defaultMessage="Color Detection"
            id="gui.extension.lepiColorDetect.name"
        />),
        extensionId: 'lepiColorDetect',
        collaborator: collaborator,
        iconURL: colorDetectIconURL,
        insetIconURL: colorDetectInsetIconURL,
        description: (
            <FormattedMessage
                defaultMessage="Detect various colors in the camera picture."
                id="gui.extension.lepiColorDetect.description"
            />
        ),
        tags: ['lepi', 'ai'],
        featured: true,
    },
    {
        name: (<FormattedMessage
            defaultMessage="Object Detection"
            id="gui.extension.lepiObjectDetection.name"
        />),
        extensionId: 'lepiObjectDetection',
        collaborator: collaborator,
        iconURL: objectDetectIconURL,
        insetIconURL: objectDetectInsetIconURL,
        description: (
            <FormattedMessage
                defaultMessage="Detect nearly a hundred predefined targets."
                id="gui.extension.lepiObjectDetection.description"
            />
        ),
        tags: ['lepi', 'ai'],
        featured: true,
    },
    {
        name: '图像分类',
        extensionId: 'lepiImageClassify',
        collaborator: collaborator,
        iconURL: imageClassifyIconURL,
        insetIconURL: imageClassifyInsetIconURL,
        description: (
            <FormattedMessage
                defaultMessage="分类上千种对象."
                description="Description for the 'lepi_image_classify' extension"
                id="gui.extension.lepi_image_classify.description"
            />
        ),
        tags: ['lepi', 'ai'],
        featured: true,
    },
    {
        name: (<FormattedMessage
            defaultMessage="Barcode Scanning"
            id="gui.extension.lepiBarcodeScan.name"
        />),
        extensionId: 'lepiBarcodeScan',
        collaborator: collaborator,
        iconURL: barcodeScannerIconURL,
        insetIconURL: barcodeScannerInsetIconURL,
        description: (
            <FormattedMessage
                defaultMessage="Scan the Barcode."
                id="gui.extension.lepiBarcodeScan.description"
            />
        ),
        tags: ['lepi', 'ai'],
        featured: true,
    },
    {
        name: (<FormattedMessage
            defaultMessage="Text Recognition"
            id="gui.extension.lepiTextRecognize.name"
        />),
        extensionId: 'lepiTextRecognize',
        collaborator: collaborator,
        iconURL: textRecognizeIconURL,
        insetIconURL: textRecognizeInsetIconURL,
        description: (
            <FormattedMessage
                defaultMessage="Recognize text information."
                id="gui.extension.lepiTextRecognize.description"
            />
        ),
        tags: ['lepi', 'ai'],
        featured: true,
    },

    /*
    {
        name: '迁移学习',
        extensionId: 'lepiTransferLearning',
        collaborator: collaborator,
        iconURL: transferLearningIconURL,
        insetIconURL: transferLearningInsetIconURL,
        description: (
            <FormattedMessage
                defaultMessage="快速训练模型并进行预测."
                description="Description for the 'lepi_transfer_learning' extension"
                id="gui.extension.lepi_transfer_learning.description"
            />
        ),
        featured: true,
    },
    */
    {
        name: (<FormattedMessage
            defaultMessage="RFID"
            id="gui.extension.lepiRFID.name"
        />),
        extensionId: 'lepiRFID',
        collaborator: collaborator,
        iconURL: rfidIconURL,
        insetIconURL: rfidInsetIconURL,
        description: (
            <FormattedMessage
                defaultMessage="Read and write RFID card."
                id="gui.extension.lepiRFID.description"
            />
        ),
        tags: ['lepi', 'iot'],
        featured: true,
    },
    {
        name: (<FormattedMessage
            defaultMessage="智慧教室"
            id="gui.extension.lepiSmartClassroom.name"
        />),
        extensionId: 'lepiSmartClassroom',
        collaborator: collaborator,
        iconURL: smartClassroomIconURL,
        insetIconURL: smartClassroomInsetIconURL,
        description: (
            <FormattedMessage
                defaultMessage="控制教室里的智能设备"
                id="gui.extension.lepiSmartClassroom.description"
            />
        ),
        tags: ['lepi', 'iot'],
        featured: true,
    },
    {
        name: (<FormattedMessage
            defaultMessage="Joystick"
            id="gui.extension.lepiJoystick.name"
        />),
        extensionId: 'lepiJoystick',
        collaborator: collaborator,
        iconURL: joystickIconURL,
        insetIconURL: joystickInsetIconURL,
        description: (
            <FormattedMessage
                defaultMessage="Use a joystick as an input control."
                id="gui.extension.lepiJoystick.description"
            />
        ),
        tags: ['lepi', 'robot'],
        featured: true,
    },

    {
        name: (<FormattedMessage
            defaultMessage="Balance Car"
            id="gui.extension.lepiBalanceCar.name"
        />),
        extensionId: 'lepiBalanceCar',
        collaborator: collaborator,
        iconURL: balanceCarIconURL,
        insetIconURL: balanceCarInsetIconURL,
        description: (
            <FormattedMessage
                defaultMessage="Control the balance car."
                id="gui.extension.lepiBalanceCar.description"
            />
        ),
        tags: ['lepi', 'robot'],
        featured: true,
    },

    {
        name: (<FormattedMessage
            defaultMessage="Pupper Robot"
            id="gui.extension.lepiPupper.name"
        />),
        extensionId: 'lepiPupper',
        collaborator: collaborator,
        iconURL: pupperIconURL,
        insetIconURL: pupperInsetIconURL,
        description: (
            <FormattedMessage
                defaultMessage="Control the balance car."
                id="gui.extension.lepiPupper.description"
            />
        ),
        tags: ['lepi', 'robot'],
        featured: true,
    },

    {
        name: (<FormattedMessage
            defaultMessage="Hexapod Robot"
            id="gui.extension.lepiHexapod.name"
        />),
        extensionId: 'lepiHexapod',
        collaborator: collaborator,
        iconURL: hexapodIconURL,
        insetIconURL: hexapodInsetIconURL,
        description: (
            <FormattedMessage
                defaultMessage="Control the balance car."
                id="gui.extension.lepiHexapod.description"
            />
        ),
        tags: ['lepi', 'robot'],
        featured: true,
    },
    {
        name: (<FormattedMessage
            defaultMessage="Host Communication"
            id="gui.extension.lepiComm.name"
        />),
        extensionId: 'lepiComm',
        collaborator: collaborator,
        iconURL: hostCommunicationIconURL,
        insetIconURL: hostCommunicationInsetIconURL,
        internetConnectionRequired: true,
        description: (
            <FormattedMessage
                defaultMessage="communicate with lepi hosts in local network."
                id="gui.extension.lepiComm.description"
            />
        ),
        tags: ['lepi', 'internet'],
        featured: true,
    },
    {
        name: (<FormattedMessage
            defaultMessage="Shared Variable"
            id="gui.extension.lepiVariable.name"
        />),
        extensionId: 'lepiVariable',
        collaborator: collaborator,
        iconURL: variableIconURL,
        insetIconURL: variableInsetIconURL,
        description: (
            <FormattedMessage
                defaultMessage="Share variables across multiple works."
                id="gui.extension.lepiVariable.description"
            />
        ),
        tags: ['lepi', 'internet'],
        featured: true,
    },
    {
        name: (<FormattedMessage
            defaultMessage="Collaboration Sheet"
            id="gui.extension.lepiCollaborationSheet.name"
        />),
        extensionId: 'lepiCollaborationSheet',
        collaborator: collaborator,
        iconURL: collaborationSheetIconURL,
        insetIconURL: collaborationSheetInsetIconURL,
        description: (
            <FormattedMessage
                defaultMessage="Collaboration Sheet supports multiple editors."
                id="gui.extension.lepiCollaborationSheet.description"
            />
        ),
        tags: ['lepi', 'internet'],
        featured: true,
    },
    {
        name: (<FormattedMessage
            defaultMessage="MQTT Communication"
            id="gui.extension.lepiMQTT.name"
        />),
        extensionId: 'lepiMQTT',
        collaborator: collaborator,
        iconURL: mqttIconURL,
        insetIconURL: mqttInsetIconURL,
        internetConnectionRequired: true,
        description: (
            <FormattedMessage
                defaultMessage="Network communication using MQTT."
                id="gui.extension.lepiMQTT.description"
            />
        ),
        tags: ['lepi', 'iot'],
        featured: true,
    },
    {
        name: (<FormattedMessage
            defaultMessage="HTTP Communication"
            id="gui.extension.lepiHttp.name"
        />),
        extensionId: 'lepiHttp',
        collaborator: collaborator,
        iconURL: httpIconURL,
        insetIconURL: httpInsetIconURL,
        internetConnectionRequired: true,
        description: (
            <FormattedMessage
                defaultMessage="Network communication using HTTP/HTTPS."
                id="gui.extension.lepiHttp.description"
            />
        ),
        tags: ['lepi', 'internet'],
        featured: true,
    },
    /*
    {
        name: 'Serial',
        extensionId: 'lepiSerial',
        collaborator: collaborator,
        iconURL: serialIconURL,
        insetIconURL: serialInsetIconURL,
        description: (
            <FormattedMessage
                defaultMessage="Use Serial Port to comunicate."
                description="Description for the 'lepi_serial' extension"
                id="gui.extension.lepi_serial.description"
            />
        ),
        featured: true,
    },
    */
    {
        name: (
            <FormattedMessage
                defaultMessage="Home Assistant"
                description="Name for the 'Home Assistant' extension"
                id="gui.extension.homeassistant.name"
            />
        ),
        extensionId: 'homeassistant',
        collaborator: collaborator,
        iconURL: homeassistantIconURL,
        insetIconURL: homeassistantInsetIconURL,
        description: (
            <FormattedMessage
                defaultMessage="Home Assistant"
                description="Description for the 'Home Assistant' extension"
                id="gui.extension.homeassistant.description"
            />
        ),
        tags: ['lepi', 'iot'],
        featured: true
    },
    {
        name: 'Arduino',
        extensionId: 'onegpioArduino',
        collaborator: "Mr. Y's Lab",
        iconURL: onegpioArduinoImage,
        insetIconURL: onegpioArduinoInsetIconURL,
        description: 'Control Arduino IO Based on Firmata Protocol',
        featured: true,
        disabled: false,
        // internetConnectionRequired: true,
        bluetoothRequired: false,
        tags: ['onegpio', 'iot'],
        // helpLink: 'https://mryslab.github.io/s3-extend/'
    },
    {
        name: 'Raspberry Pi',
        extensionId: 'onegpioRpi',
        collaborator: "Mr. Y's Lab",
        iconURL: onegpioRpiImage,
        insetIconURL: onegpioRpiInsetIconURL,
        description: 'Control Raspberry Pi IO Based on Firmata Protocol',
        featured: true,
        disabled: false,
        internetConnectionRequired: true,
        bluetoothRequired: false,
        tags: ['onegpio', 'iot'],
        // helpLink: 'https://mryslab.github.io/s3-extend/'
    },
    {
        name: 'Raspberry Pi Pico',
        extensionId: 'onegpioRpiPico',
        collaborator: "Mr. Y's Lab",
        iconURL: onegpioRpiPicoImage,
        insetIconURL: onegpioRpiPicoInsetIconURL,
        description: 'Control Raspberry Pi Pico IO Based on Firmata Protocol',
        featured: true,
        disabled: false,
        // internetConnectionRequired: true,
        bluetoothRequired: false,
        tags: ['onegpio', 'iot'],
        // helpLink: 'https://mryslab.github.io/s3-extend/'
    },
    {
        name: 'ESP-8266 Series',
        extensionId: 'onegpioEsp',
        collaborator: "Mr. Y's Lab",
        iconURL: onegpioEspImage,
        insetIconURL: onegpioEspInsetIconURL,
        description: 'Control ESP-8266 IO Based on Firmata Protocol',
        featured: true,
        disabled: false,
        internetConnectionRequired: true,
        bluetoothRequired: false,
        tags: ['onegpio', 'iot'],
        // helpLink: 'https://mryslab.github.io/s3-extend/'
    },
    /*
    {
        name: 'OneGpio Picoboard',
        extensionId: 'onegpioPicoboard',
        collaborator: "Mr. Y's Lab",
        iconURL: onegpioPicoboardImage,
        insetIconURL: onegpioPicoboardInsetIconURL,
        description: 'OneGPIOPicoboard',
        featured: true,
        disabled: false,
        internetConnectionRequired: true,
        bluetoothRequired: false,
        // helpLink: 'https://mryslab.github.io/s3-extend/'
    },
    {
        name: 'OneGpio Playground Express',
        extensionId: 'onegpioCpx',
        collaborator: "Mr. Y's Lab",
        iconURL: onegpioCpxImage,
        insetIconURL: onegpioCpxInsetIconURL,
        description: 'OneGPIOCpx',
        featured: true,
        disabled: false,
        internetConnectionRequired: true,
        bluetoothRequired: false,
        // helpLink: 'https://mryslab.github.io/s3-extend/'
    },
    {
        name: 'OneGpio RoboHAT MM1',
        extensionId: 'onegpioRoboHAT',
        collaborator: "Mr. Y's Lab",
        iconURL: onegpioRoboHATImage,
        insetIconURL: onegpioRoboHATInsetIconURL,
        description: 'OneGPIORoboHAT',
        featured: true,
        disabled: false,
        internetConnectionRequired: true,
        bluetoothRequired: false,
        // helpLink: 'https://mryslab.github.io/s3-extend/'
    },

    */
    {
        name: (
            <FormattedMessage
                defaultMessage="Music"
                description="Name for the 'Music' extension"
                id="gui.extension.music.name"
            />
        ),
        extensionId: 'music',
        iconURL: musicIconURL,
        insetIconURL: musicInsetIconURL,
        description: (
            <FormattedMessage
                defaultMessage="Play instruments and drums."
                description="Description for the 'Music' extension"
                id="gui.extension.music.description"
            />
        ),
        tags: ['scratch'],
        featured: true
    },
    {
        name: (
            <FormattedMessage
                defaultMessage="Pen"
                description="Name for the 'Pen' extension"
                id="gui.extension.pen.name"
            />
        ),
        extensionId: 'pen',
        iconURL: penIconURL,
        insetIconURL: penInsetIconURL,
        description: (
            <FormattedMessage
                defaultMessage="Draw with your sprites."
                description="Description for the 'Pen' extension"
                id="gui.extension.pen.description"
            />
        ),
        tags: ['scratch'],
        featured: true
    },
    // {
    //     name: (
    //         <FormattedMessage
    //             defaultMessage="Video Sensing"
    //             description="Name for the 'Video Sensing' extension"
    //             id="gui.extension.videosensing.name"
    //         />
    //     ),
    //     extensionId: 'videoSensing',
    //     iconURL: videoSensingIconURL,
    //     insetIconURL: videoSensingInsetIconURL,
    //     description: (
    //         <FormattedMessage
    //             defaultMessage="Sense motion with the camera."
    //             description="Description for the 'Video Sensing' extension"
    //             id="gui.extension.videosensing.description"
    //         />
    //     ),
    //     tags: ['scratch'],
    //     featured: true
    // },
    // {
    //     name: (
    //         <FormattedMessage
    //             defaultMessage="Text to Speech"
    //             description="Name for the Text to Speech extension"
    //             id="gui.extension.text2speech.name"
    //         />
    //     ),
    //     extensionId: 'text2speech',
    //     collaborator: 'Amazon Web Services',
    //     iconURL: text2speechIconURL,
    //     insetIconURL: text2speechInsetIconURL,
    //     description: (
    //         <FormattedMessage
    //             defaultMessage="Make your projects talk."
    //             description="Description for the Text to speech extension"
    //             id="gui.extension.text2speech.description"
    //         />
    //     ),
    //     tags: ['scratch'],
    //     featured: true,
    //     internetConnectionRequired: true
    // },
    // {
    //     name: (
    //         <FormattedMessage
    //             defaultMessage="Translate"
    //             description="Name for the Translate extension"
    //             id="gui.extension.translate.name"
    //         />
    //     ),
    //     extensionId: 'translate',
    //     collaborator: 'Google',
    //     iconURL: translateIconURL,
    //     insetIconURL: translateInsetIconURL,
    //     description: (
    //         <FormattedMessage
    //             defaultMessage="Translate text into many languages."
    //             description="Description for the Translate extension"
    //             id="gui.extension.translate.description"
    //         />
    //     ),
    //     tags: ['scratch'],
    //     featured: true,
    //     internetConnectionRequired: true
    // },
    {
        name: 'Makey Makey',
        extensionId: 'makeymakey',
        collaborator: 'JoyLabz',
        iconURL: makeymakeyIconURL,
        insetIconURL: makeymakeyInsetIconURL,
        description: (
            <FormattedMessage
                defaultMessage="Make anything into a key."
                description="Description for the 'Makey Makey' extension"
                id="gui.extension.makeymakey.description"
            />
        ),
        tags: ['scratch'],
        featured: true
    },
    // {
    //     name: 'micro:bit',
    //     extensionId: 'microbit',
    //     collaborator: 'micro:bit',
    //     iconURL: microbitIconURL,
    //     insetIconURL: microbitInsetIconURL,
    //     description: (
    //         <FormattedMessage
    //             defaultMessage="Connect your projects with the world."
    //             description="Description for the 'micro:bit' extension"
    //             id="gui.extension.microbit.description"
    //         />
    //     ),
    //     tags: ['scratch'],
    //     featured: true,
    //     disabled: false,
    //     bluetoothRequired: true,
    //     internetConnectionRequired: true,
    //     launchPeripheralConnectionFlow: true,
    //     useAutoScan: false,
    //     connectionIconURL: microbitConnectionIconURL,
    //     connectionSmallIconURL: microbitConnectionSmallIconURL,
    //     connectingMessage: (
    //         <FormattedMessage
    //             defaultMessage="Connecting"
    //             description="Message to help people connect to their micro:bit."
    //             id="gui.extension.microbit.connectingMessage"
    //         />
    //     ),
    //     helpLink: 'https://scratch.mit.edu/microbit'
    // },
    // {
    //     name: 'LEGO MINDSTORMS EV3',
    //     extensionId: 'ev3',
    //     collaborator: 'LEGO',
    //     iconURL: ev3IconURL,
    //     insetIconURL: ev3InsetIconURL,
    //     description: (
    //         <FormattedMessage
    //             defaultMessage="Build interactive robots and more."
    //             description="Description for the 'LEGO MINDSTORMS EV3' extension"
    //             id="gui.extension.ev3.description"
    //         />
    //     ),
    //     tags: ['scratch'],
    //     featured: true,
    //     disabled: false,
    //     bluetoothRequired: true,
    //     internetConnectionRequired: true,
    //     launchPeripheralConnectionFlow: true,
    //     useAutoScan: false,
    //     connectionIconURL: ev3ConnectionIconURL,
    //     connectionSmallIconURL: ev3ConnectionSmallIconURL,
    //     connectingMessage: (
    //         <FormattedMessage
    //             defaultMessage="Connecting. Make sure the pin on your EV3 is set to 1234."
    //             description="Message to help people connect to their EV3. Must note the PIN should be 1234."
    //             id="gui.extension.ev3.connectingMessage"
    //         />
    //     ),
    //     helpLink: 'https://scratch.mit.edu/ev3'
    // },
    // {
    //     name: 'LEGO BOOST',
    //     extensionId: 'boost',
    //     collaborator: 'LEGO',
    //     iconURL: boostIconURL,
    //     insetIconURL: boostInsetIconURL,
    //     description: (
    //         <FormattedMessage
    //             defaultMessage="Bring robotic creations to life."
    //             description="Description for the 'LEGO BOOST' extension"
    //             id="gui.extension.boost.description"
    //         />
    //     ),
    //     tags: ['scratch'],
    //     featured: true,
    //     disabled: false,
    //     bluetoothRequired: true,
    //     internetConnectionRequired: true,
    //     launchPeripheralConnectionFlow: true,
    //     useAutoScan: true,
    //     connectionIconURL: boostConnectionIconURL,
    //     connectionSmallIconURL: boostConnectionSmallIconURL,
    //     connectionTipIconURL: boostConnectionTipIconURL,
    //     connectingMessage: (
    //         <FormattedMessage
    //             defaultMessage="Connecting"
    //             description="Message to help people connect to their BOOST."
    //             id="gui.extension.boost.connectingMessage"
    //         />
    //     ),
    //     helpLink: 'https://scratch.mit.edu/boost'
    // },
    // {
    //     name: 'LEGO Education WeDo 2.0',
    //     extensionId: 'wedo2',
    //     collaborator: 'LEGO',
    //     iconURL: wedo2IconURL,
    //     insetIconURL: wedo2InsetIconURL,
    //     description: (
    //         <FormattedMessage
    //             defaultMessage="Build with motors and sensors."
    //             description="Description for the 'LEGO WeDo 2.0' extension"
    //             id="gui.extension.wedo2.description"
    //         />
    //     ),
    //     tags: ['scratch'],
    //     featured: true,
    //     disabled: false,
    //     bluetoothRequired: true,
    //     internetConnectionRequired: true,
    //     launchPeripheralConnectionFlow: true,
    //     useAutoScan: true,
    //     connectionIconURL: wedo2ConnectionIconURL,
    //     connectionSmallIconURL: wedo2ConnectionSmallIconURL,
    //     connectionTipIconURL: wedo2ConnectionTipIconURL,
    //     connectingMessage: (
    //         <FormattedMessage
    //             defaultMessage="Connecting"
    //             description="Message to help people connect to their WeDo."
    //             id="gui.extension.wedo2.connectingMessage"
    //         />
    //     ),
    //     helpLink: 'https://scratch.mit.edu/wedo'
    // },
    // {
    //     name: 'Go Direct Force & Acceleration',
    //     extensionId: 'gdxfor',
    //     collaborator: 'Vernier',
    //     iconURL: gdxforIconURL,
    //     insetIconURL: gdxforInsetIconURL,
    //     description: (
    //         <FormattedMessage
    //             defaultMessage="Sense push, pull, motion, and spin."
    //             description="Description for the Vernier Go Direct Force and Acceleration sensor extension"
    //             id="gui.extension.gdxfor.description"
    //         />
    //     ),
    //     tags: ['scratch'],
    //     featured: true,
    //     disabled: false,
    //     bluetoothRequired: true,
    //     internetConnectionRequired: true,
    //     launchPeripheralConnectionFlow: true,
    //     useAutoScan: false,
    //     connectionIconURL: gdxforConnectionIconURL,
    //     connectionSmallIconURL: gdxforConnectionSmallIconURL,
    //     connectingMessage: (
    //         <FormattedMessage
    //             defaultMessage="Connecting"
    //             description="Message to help people connect to their force and acceleration sensor."
    //             id="gui.extension.gdxfor.connectingMessage"
    //         />
    //     ),
    //     helpLink: 'https://scratch.mit.edu/vernier'
    // },
    // {
    //     // not really an extension, but it's easiest to present it as one
    //     name: (
    //         <FormattedMessage
    //             defaultMessage="Custom Reporters"
    //             description="Name of custom reporters extension"
    //             id="tw.customReporters.name"
    //         />
    //     ),
    //     extensionId: 'procedures_enable_return',
    //     iconURL: returnIcon,
    //     description: (
    //         <FormattedMessage
    //             defaultMessage="Allow custom blocks to output values and be used as inputs."
    //             description="Description of custom reporters extension"
    //             id="tw.customReporters.description"
    //         />
    //     ),
    //     tags: ['tw'],
    //     incompatibleWithScratch: true,
    //     featured: true
    // },
    // {
    //     name: (
    //         <FormattedMessage
    //             defaultMessage="{APP_NAME} Blocks"
    //             description="Name of the strange 'TurboWarp Blocks' extension"
    //             id="tw.twExtension.name"
    //             values={{
    //                 APP_NAME
    //             }}
    //         />
    //     ),
    //     extensionId: 'tw',
    //     iconURL: twIcon,
    //     description: (
    //         <FormattedMessage
    //             defaultMessage="Weird new blocks."
    //             description="Description of the strange 'TurboWarp Blocks' extension"
    //             id="tw.twExtension.description"
    //         />
    //     ),
    //     incompatibleWithScratch: true,
    //     tags: ['tw'],
    //     featured: true
    // },
    {
        name: (
            <FormattedMessage
                defaultMessage="Custom Extension"
                description="Name of library item to load a custom extension from a remote source"
                id="tw.customExtension.name"
            />
        ),
        extensionId: 'custom_extension',
        iconURL: customExtensionIcon,
        description: (
            <FormattedMessage
                defaultMessage="Load custom extensions from URLs, files, or JavaScript source code."
                description="Description of library item to load a custom extension from a custom source"
                id="tw.customExtension.description"
            />
        ),
        tags: ['tw'],
        featured: true
        // Not marked as incompatible with Scratch so that clicking on it doesn't show a prompt
    }
];

export const galleryLoading = {
    name: (
        <FormattedMessage
            defaultMessage="{APP_NAME} Extension Gallery"
            description="Name of extensions.turbowarp.org in extension library"
            id="tw.extensionGallery.name"
            values={{
                APP_NAME
            }}
        />
    ),
    href: 'https://extensions.turbowarp.org/',
    extensionId: 'gallery',
    iconURL: galleryIcon,
    description: (
        <FormattedMessage
            // eslint-disable-next-line max-len
            defaultMessage="Loading extension gallery..."
            description="Appears while loading extension list from the custom extension gallery"
            id="tw.extensionGallery.loading"
        />
    ),
    tags: ['tw'],
    featured: true
};

export const galleryMore = {
    name: (
        <FormattedMessage
            defaultMessage="{APP_NAME} Extension Gallery"
            description="Name of extensions.turbowarp.org in extension library"
            id="tw.extensionGallery.name"
            values={{
                APP_NAME
            }}
        />
    ),
    href: 'https://extensions.turbowarp.org/',
    extensionId: 'gallery',
    iconURL: galleryIcon,
    description: (
        <FormattedMessage
            // eslint-disable-next-line max-len
            defaultMessage="Learn more about extensions at extensions.turbowarp.org."
            description="Appears after the extension list from the gallery was loaded successfully"
            id="tw.extensionGallery.more"
        />
    ),
    tags: ['tw'],
    featured: true
};

export const galleryError = {
    name: (
        <FormattedMessage
            defaultMessage="{APP_NAME} Extension Gallery"
            description="Name of extensions.turbowarp.org in extension library"
            id="tw.extensionGallery.name"
            values={{
                APP_NAME
            }}
        />
    ),
    href: 'https://extensions.turbowarp.org/',
    extensionId: 'gallery',
    iconURL: galleryIcon,
    description: (
        <FormattedMessage
            // eslint-disable-next-line max-len
            defaultMessage="Error loading extension gallery. Visit extensions.turbowarp.org to find more extensions."
            description="Appears when an error occurred loading extension list from the custom extension gallery"
            id="tw.extensionGallery.error"
        />
    ),
    tags: ['tw'],
    featured: true
};

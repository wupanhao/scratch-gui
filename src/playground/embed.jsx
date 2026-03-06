import './import-first';

import React from 'react';
import {compose} from 'redux';
import AppStateHOC from '../lib/app-state-hoc.jsx';
import TWEmbedFullScreenHOC from '../lib/tw-embed-fullscreen-hoc.jsx';
import TWStateManagerHOC from '../lib/tw-state-manager-hoc.jsx';
import runAddons from '../addons/entry';
import {Theme} from '../lib/themes/index.js';

import GUI from './render-gui.jsx';
import render from './app-target';

const getProjectId = () => {
    // For compatibility reasons, we first look at the hash.
    // eg. https://turbowarp.org/embed.html#1
    const hashMatch = location.hash.match(/#(\d+)/);
    if (hashMatch !== null) {
        return hashMatch[1];
    }
    // Otherwise, we'll recreate what "wildcard" routing does.
    // eg. https://turbowarp.org/1/embed
    const pathMatch = location.pathname.match(/(\d+)\/embed/);
    if (pathMatch !== null) {
        return pathMatch[pathMatch.length - 1];
    }
    return '0';
};

const projectId = getProjectId();
const urlParams = new URLSearchParams(location.search);

let vm;

const onVmInit = _vm => {
    vm = _vm;
};

const onProjectLoaded = () => {
    document.getElementById("splash-need-js").hidden = true;
    if (urlParams.has('autoplay')) {
        vm.start();
        vm.greenFlag();
    }
};

const WrappedGUI = compose(
    AppStateHOC,
    TWStateManagerHOC,
    TWEmbedFullScreenHOC
)(GUI);

render(<WrappedGUI
    isEmbedded
    projectId={projectId}
    onVmInit={onVmInit}
    onProjectLoaded={onProjectLoaded}
    routingStyle="none"
    theme={Theme.light}
/>);

if (urlParams.has('addons')) {
    runAddons();
}

// 变量初始化
let timeoutId, countdownInterval;
let countdown = 10;
let isEnabled = true;

// 隐藏鼠标指针
function hideCursor() {
    console.log('hide cursor')
    document.querySelector('#app > :first-child').classList.add('hide-cursor');
}

// 显示鼠标指针
function showCursor() {
    document.querySelector('#app > :first-child').classList.remove('hide-cursor');
    countdown = 10;
}

// 开始计时器
function startTimer() {
    // 设置10秒后隐藏指针
    timeoutId = setTimeout(hideCursor, 10000);

    // 更新倒计时显示
    countdownInterval = setInterval(() => {
        countdown--;

        if (countdown <= 0) {
            clearInterval(countdownInterval);
        }
    }, 1000);
}

// 重置计时器
function resetTimer() {
    // 清除现有计时器
    clearTimeout(timeoutId);
    clearInterval(countdownInterval);

    // 显示指针
    showCursor();

    // 如果功能启用，则开始新的计时器
    if (isEnabled) {
        startTimer();
    }
}

// 初始化
function init() {
    hideCursor()
    // 监听鼠标移动事件
    document.addEventListener('mousemove', resetTimer);

    // 开始计时器
    startTimer();
}

// 页面加载完成后初始化
// window.addEventListener('load', init);

import bindAll from 'lodash.bindall';
import PropTypes from 'prop-types';
import React from 'react';
import VM from 'scratch-vm';
import {defineMessages, injectIntl, intlShape} from 'react-intl';
import log from '../lib/log';

import extensionLibraryContent, {
    galleryError,
    galleryLoading,
    galleryMore
} from '../lib/libraries/extensions/index.jsx';
import extensionTags from '../lib/libraries/tw-extension-tags';

import LibraryComponent from '../components/library/library.jsx';
import extensionIcon from '../components/action-menu/icon--sprite.svg';

const messages = defineMessages({
    extensionTitle: {
        defaultMessage: 'Choose an Extension',
        description: 'Heading for the extension library',
        id: 'gui.extensionLibrary.chooseAnExtension'
    }
});

const toLibraryItem = extension => {
    if (typeof extension === 'object') {
        return ({
            rawURL: extension.iconURL || extensionIcon,
            ...extension
        });
    }
    return extension;
};

const translateGalleryItem = (extension, locale) => ({
    ...extension,
    name: extension.nameTranslations[locale] || extension.name,
    description: extension.descriptionTranslations[locale] || extension.description
});

let cachedGallery = null;

const fetchLibrary = async () => {
    const res = await fetch('https://extensions.turbowarp.org/generated-metadata/extensions-v0.json');
    if (!res.ok) {
        throw new Error(`HTTP status ${res.status}`);
    }
    const data = await res.json();
    return data.extensions.map(extension => ({
        name: extension.name,
        nameTranslations: extension.nameTranslations || {},
        description: extension.description,
        descriptionTranslations: extension.descriptionTranslations || {},
        extensionId: extension.id,
        extensionURL: `https://extensions.turbowarp.org/${extension.slug}.js`,
        iconURL: `https://extensions.turbowarp.org/${extension.image || 'images/unknown.svg'}`,
        tags: ['tw'],
        credits: [
            ...(extension.by || []),
            ...(extension.original || [])
        ].map(credit => {
            if (credit.link) {
                return (
                    <a
                        href={credit.link}
                        target="_blank"
                        rel="noreferrer"
                        key={credit.name}
                    >
                        {credit.name}
                    </a>
                );
            }
            return credit.name;
        }),
        docsURI: extension.docs ? `https://extensions.turbowarp.org/${extension.slug}` : null,
        samples: extension.samples ? extension.samples.map(sample => ({
            href: `${process.env.ROOT}editor?project_url=https://extensions.turbowarp.org/samples/${encodeURIComponent(sample)}.sb3`,
            text: sample
        })) : null,
        incompatibleWithScratch: true,
        featured: true
    }));
};

// eslint-disable-next-line no-unused-vars
import unknownIcon from '../lib/libraries/extensions/gallery/unknown.svg';
import galleryIcon from '../lib/libraries/extensions/gallery/gallery.svg';
import animatedTextIcon from '../lib/libraries/extensions/gallery/animated-text.svg';
import stretchIcon from '../lib/libraries/extensions/gallery/stretch.svg';
import gamepadIcon from '../lib/libraries/extensions/gallery/gamepad.svg';
import cursorIcon from '../lib/libraries/extensions/gallery/cursor.svg';
import filesIcon from '../lib/libraries/extensions/gallery/files.svg';
import pointerlockIcon from '../lib/libraries/extensions/gallery/pointerlock.svg';
import runtimeOptionsIcon from '../lib/libraries/extensions/gallery/runtime-options.svg';
import utilitiesIcon from '../lib/libraries/extensions/gallery/utilities.svg';
import sensingPlusIcon from '../lib/libraries/extensions/gallery/sensingplus.svg';
import clonesPlusIcon from '../lib/libraries/extensions/gallery/clonesplus.svg';
import looksPlusIcon from '../lib/libraries/extensions/gallery/looksplus.svg';
import clippingBlendingIcon from '../lib/libraries/extensions/gallery/clippingblending.svg';
import regexIcon from '../lib/libraries/extensions/gallery/regex.svg';
import bitwiseIcon from '../lib/libraries/extensions/gallery/bitwise.svg';
import textIcon from '../lib/libraries/extensions/gallery/text.svg';
import fetchIcon from '../lib/libraries/extensions/gallery/fetch.svg';
import box2dIcon from '../lib/libraries/extensions/gallery/box2d.svg';
import localStorageIcon from '../lib/libraries/extensions/gallery/local-storage.svg';
import baseIcon from '../lib/libraries/extensions/gallery/base.svg';
import bigIntIcon from '../lib/libraries/extensions/gallery/bigint.svg';
import jsonIcon from '../lib/libraries/extensions/gallery/json.svg';
import iframeIcon from '../lib/libraries/extensions/gallery/iframe.svg';
import encodingIcon from '../lib/libraries/extensions/gallery/encoding.svg';
import mathIcon from '../lib/libraries/extensions/gallery/math.svg';
import dictionariesIcon from '../lib/libraries/extensions/gallery/dictionaries.svg';
import httpIcon from '../lib/libraries/extensions/gallery/http.svg';
import wsIcon from '../lib/libraries/extensions/gallery/ws.png';
import returnIcon from '../lib/libraries/extensions/custom/return.svg';
import consoleIcon from '../lib/libraries/extensions/gallery/consoles.svg';
import xmlIcon from '../lib/libraries/extensions/gallery/xml.svg'

import extensionData from '../lib/libraries/extensions/extension.json'
// sync with scratch-vm/src/extension-support/tw-security-manager.js
const extensionTagsMap = {
    'files': ['tw'],
    'strings': ['tw'],
    'Bitwise': ['tw'],
    'skyhigh173JSON': ['tw'],
    'truefantomregexp': ['tw'],
    'localstorage': ['tw'],
    'truefantombase': ['tw'],
    'utilities': ['tw'],
    'iframe': ['tw', 'internet'],
    'Encoding': ['tw'],
    'truefantommath': ['tw'],
    'verctedictionaries': ['tw'],
    'gsaHTTPRequests': ['tw', 'internet'],
    'gsaWebsocket': ['tw', 'internet'],
    'mbwxml': ['tw'],
    'sipcconsole': ['tw'],
}
const extensionIconsMap = {
    'files': filesIcon,
    'strings': textIcon,
    'Bitwise': bitwiseIcon,
    'skyhigh173JSON': jsonIcon,
    'truefantomregexp': regexIcon,
    'localstorage': localStorageIcon,
    'truefantombase': baseIcon,
    'utilities': utilitiesIcon,
    'iframe': iframeIcon,
    'Encoding': encodingIcon,
    'truefantommath': mathIcon,
    'verctedictionaries': dictionariesIcon,
    'gsaHTTPRequests': httpIcon,
    'gsaWebsocket': wsIcon,
    'mbwxml': xmlIcon,
    'sipcconsole': consoleIcon,
}
const fetchLocal = async () => {
    // const res = await fetch('https://extensions.turbowarp.org/generated-metadata/extensions-v0.json');
    // if (!res.ok) {
    //     throw new Error(`HTTP status ${res.status}`);
    // }

    const data = extensionData;
    return data.extensions.map(extension => ({
        name: extension.name,
        nameTranslations: extension.nameTranslations || {},
        description: extension.description,
        descriptionTranslations: extension.descriptionTranslations || {},
        extensionId: extension.id,
        extensionURL: `https://extensions.turbowarp.org/${extension.slug}.js`,
        // iconURL: `https://extensions.turbowarp.org/${extension.image || 'images/unknown.svg'}`,
        iconURL: extensionIconsMap[extension.id] || unknownIcon,
        tags: extensionTagsMap[extension.id] || ['tw'],
        credits: [
            ...(extension.by || []),
            ...(extension.original || [])
        ].map(credit => {
            // if (credit.link) {
            //     return (
            //         <a
            //             href={credit.link}
            //             target="_blank"
            //             rel="noreferrer"
            //             key={credit.name}
            //         >
            //             {credit.name}
            //         </a>
            //     );
            // }
            return credit.name;
        }),
        docsURI: extension.docs ? `https://extensions.turbowarp.org/${extension.slug}` : null,
        samples: extension.samples ? extension.samples.map(sample => ({
            href: `${process.env.ROOT}editor.html?project_url=https://extensions.turbowarp.org/samples/${encodeURIComponent(sample)}.sb3`,
            text: sample
        })) : null,
        // incompatibleWithScratch: true,
        featured: true
    })).filter(extension => {
        return extensionTagsMap[extension.extensionId]
    });
};

class ExtensionLibrary extends React.PureComponent {
    constructor (props) {
        super(props);
        bindAll(this, [
            'handleItemSelect'
        ]);
        this.state = {
            gallery: cachedGallery,
            galleryError: null,
            galleryTimedOut: true
        };
    }
    componentDidMount () {
        if (!this.state.gallery) {
            const timeout = setTimeout(() => {
                this.setState({
                    galleryTimedOut: true
                });
            }, 750);

            fetchLocal()
                .then(gallery => {
                    cachedGallery = gallery;
                    this.setState({
                        gallery
                    });
                    clearTimeout(timeout);
                })
                .catch(error => {
                    log.error(error);
                    this.setState({
                        galleryError: error
                    });
                    clearTimeout(timeout);
                });
        }
    }
    handleItemSelect (item) {
        if (item.href) {
            return;
        }

        const extensionId = item.extensionId;

        if (extensionId === 'custom_extension') {
            this.props.onOpenCustomExtensionModal();
            return;
        }

        if (extensionId === 'procedures_enable_return') {
            this.props.onEnableProcedureReturns();
            this.props.onCategorySelected('myBlocks');
            return;
        }

        const url = item.extensionURL ? item.extensionURL : extensionId;
        if (!item.disabled) {
            if (this.props.vm.extensionManager.isExtensionLoaded(extensionId)) {
                this.props.onCategorySelected(extensionId);
            } else {
                this.props.vm.extensionManager.loadExtensionURL(url)
                    .then(() => {
                        this.props.onCategorySelected(extensionId);
                    })
                    .catch(err => {
                        log.error(err);
                        // eslint-disable-next-line no-alert
                        alert(err);
                    });
            }
        }
    }
    render () {
        let library = null;
        if (this.state.gallery || this.state.galleryError || this.state.galleryTimedOut) {
            library = extensionLibraryContent.map(toLibraryItem);
            library.push('---');
            if (this.state.gallery) {
                // library.push(toLibraryItem(galleryMore));
                const locale = this.props.intl.locale;
                library.push(
                    ...this.state.gallery
                        .map(i => translateGalleryItem(i, locale))
                        .map(toLibraryItem)
                );
            } else if (this.state.galleryError) {
                library.push(toLibraryItem(galleryError));
            } else {
                library.push(toLibraryItem(galleryLoading));
            }
        }

        return (
            <LibraryComponent
                data={library}
                filterable
                persistableKey="extensionId"
                id="extensionLibrary"
                tags={extensionTags}
                title={this.props.intl.formatMessage(messages.extensionTitle)}
                visible={this.props.visible}
                onItemSelected={this.handleItemSelect}
                onRequestClose={this.props.onRequestClose}
            />
        );
    }
}

ExtensionLibrary.propTypes = {
    intl: intlShape.isRequired,
    onCategorySelected: PropTypes.func,
    onEnableProcedureReturns: PropTypes.func,
    onOpenCustomExtensionModal: PropTypes.func,
    onRequestClose: PropTypes.func,
    visible: PropTypes.bool,
    vm: PropTypes.instanceOf(VM).isRequired // eslint-disable-line react/no-unused-prop-types
};

export default injectIntl(ExtensionLibrary);

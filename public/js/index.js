import { Calculator } from './classes/calculator.js';
import { EventManger } from './classes/event-manager.js';
import { HtmlBuilder } from './classes/html-builder.js';
import { App } from './classes/app.js';

import { AVAILABLE_TAGS } from './config/avaliable-tags.js';
import { layoutConfig } from './config/layout-config.js';

const APP_NAME = 'Simple Calculator';

/**
 * App entrypoint
 */
const bootstrap = () => {
    const rootElement = document.getElementById('app');

    const calculator = new Calculator();
    const eventManager = new EventManger();
    const htmlBuilder = new HtmlBuilder(AVAILABLE_TAGS);

    const app = new App({
        appName: APP_NAME,
        calculator,
        eventManager,
        htmlBuilder,
        rootElement,
        layoutConfig,
    });

    app.start();
}

document.addEventListener('DOMContentLoaded', bootstrap);
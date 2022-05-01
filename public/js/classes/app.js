import { ClassNames } from '../config/class-names.js'

const LAYOUT_ID = 'grid';

/**
 * Main app logic
 */
class App {
    /**
     * Options:
     * 
     * @rootElement DOMElement
     * @appName string
     * @calculator instanceof Calculator
     * @htmlBuilder instnaceof HtmlBuilder
     * @eventManager instanceof EventManager
     * @layoutConfig obj[]
     */
    constructor(options) {
        this.rootElement = options.rootElement;
        this.appName = options.appName;

        this.calculator = options.calculator;
        this.htmlBuilder = options.htmlBuilder;
        this.eventManager = options.eventManager;

        this.layoutConfig = options.layoutConfig;
    }

    start() {
        document.title = this.appName.trim();
        console.log(`App ${this.appName} started`);

        this
            .renderResult()
            .renderLayout();
    }

    /**
     * Renders provided DOM element to target DOM container
     * 
     * @element DOMElement
     * @container DOMElement
     * 
     * @returns DOMElement
     */
    render(element, container) {
        container.append(element);

        return this;
    }

    renderResult(value = 0) {
        const resultComponentId = 'result';
        const existentResultComponent = document.getElementById(resultComponentId);

        // If result component already exists on page, just update its value
        if (existentResultComponent) {
            existentResultComponent.innerHTML = value;

            return this;
        }

        // Otherwise create new result component
        const resultComponent = this.htmlBuilder.createElement('div', {
            id: 'result',
            html: value,
        });

        this.render(resultComponent, this.rootElement);

        return this;
    }

    renderLayout() {
        const layoutElements = this.getLayoutElements();

        const layoutContainer = this.htmlBuilder.createElement('div', {
            id: LAYOUT_ID,
            html: layoutElements,
        });

        this.render(layoutContainer, this.rootElement);

        return this;
    }

    getLayoutElements() {
        return this.layoutConfig.map(options => {
            const elementContainer = this.htmlBuilder.createElement('div', {
                classString: ClassNames.gridButtonContainer,
            });

            const button = this.htmlBuilder.createElement('button', {
                classString: ClassNames.actionButton,
                data: { action: options.action, },
                attr: { type: 'button', },
            });

            const buttonContent = options?.content?.iconName
                ? this.htmlBuilder.createIcon(options.content.iconName)
                : options?.content?.text ?? '--';

            button.append(buttonContent);
            elementContainer.append(button);

            if (options.size) {
                elementContainer.style.gridColumn = options.size;
            }

            return elementContainer;
        });
    }
}

export { App };
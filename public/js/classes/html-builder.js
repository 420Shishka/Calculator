import { Icons } from '../config/icons.js';

/**
 * Builder for DOM elements
 */
class HtmlBuilder {
    constructor(availableTags) {
        this.availableTags = availableTags;
    }

    /**
     * Options:
     * 
     * @id string
     * @classString string
     * @html element | array
     * @data object
     * @attr object
     * 
     * Creates HTML elements by provided config
     * @returns DOMElement
     */
    createElement(tagName, options = {}) {
        this.validateTag(tagName);

        // First, create empty DOM element
        const element = document.createElement(tagName);

        // Assign identifier
        if ('id' in options) {
            element.id = options.id;
        }

        // Assign classes from provided class string
        if ('classString' in options) {
            const classes = options.classString.split(' ');

            classes.forEach(className => {
                element.classList.add(className);
            });
        }

        // Append child elements
        if ('html' in options) {
            Array.isArray(options.html)
                ? options.html.forEach(item => element.append(item))
                : element.append(options.html);
        }

        // Assign data attributes
        if ('data' in options) {
            for (const key in options.data) {
                element.dataset[key] = options.data[key];
            }
        }

        // Assign any attributes
        if ('attr' in options) {
            for (const key in options.attr) {
                element.setAttribute(key, options.attr[key]);
            }
        }

        // Returns builded DOM Element
        return element;
    }

    createIcon(iconName) {
        if (!Object.values(Icons).includes(iconName)) {
            throw new Error(`Unknown icon name '${iconName}'`);
        }

        const icon = document.createElement('i');
        icon.classList.add(iconName);

        return icon;
    }

    validateTag(tagName) {
        if (!this.availableTags.includes(tagName)) {
            throw new Error(`Unsupported tag '${tagName}'`);
        }
    }
}

export { HtmlBuilder };
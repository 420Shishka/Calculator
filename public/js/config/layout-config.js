import { Icons } from './icons.js';

/**
 * @param action string
 * @param content obj
 * @param content.iconName instanceOf Icons
 * @param content.text string
 * @param size string
 */
const layoutConfig = [
    { action: 'delete', content: { iconName: Icons.trash }, },
    { action: 'backspace', content: { iconName: Icons.backspace }, },
    { action: 'percent', content: { iconName: Icons.percent }, },
    { action: 'divide', content: { iconName: Icons.divide }, },
    { action: '7', content: { text: '7' }, },
    { action: '8', content: { text: '8' }, },
    { action: '9', content: { text: '9' }, },
    { action: 'multiply', content: { iconName: Icons.multiply }, },
    { action: '4', content: { text: '4' }, },
    { action: '5', content: { text: '5' }, },
    { action: '6', content: { text: '6' }, },
    { action: 'minus', content: { iconName: Icons.minus }, },
    { action: '1', content: { text: '1' }, },
    { action: '2', content: { text: '2' }, },
    { action: '3', content: { text: '3' }, },
    { action: 'plus', content: { iconName: Icons.plus }, },
    { action: '0', content: { text: '0' }, size: '1 / 3' },
    { action: 'dot', content: { iconName: Icons.dot }, },
    { action: 'equals', content: { iconName: Icons.equals }, },
];

export { layoutConfig };
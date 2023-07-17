import { createApp } from 'vue';
import './style.css';
import App from './App.vue';

import { OhVueIcon, addIcons } from 'oh-vue-icons';
import {
  FaTrashAlt,
  FaBackspace,
  FaPercent,
  FaDivide,
  FaTimes,
  FaMinus,
  FaPlus,
  BiDot,
  FaEquals
} from 'oh-vue-icons/icons';

addIcons(
  FaTrashAlt,
  FaBackspace,
  FaPercent,
  FaDivide,
  FaTimes,
  FaMinus,
  FaPlus,
  BiDot,
  FaEquals
);

createApp(App).component("v-icon", OhVueIcon).mount('#app')

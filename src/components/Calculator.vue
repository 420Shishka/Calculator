<template>
  <div id="calculator-container">
    <div id="calculator__result">
      {{ preview }}
    </div>

    <div id="calculator__buttons-grid">
      <button class="action-btn" @click="onBtnClick(btn.action, btn.content.value)" v-for="btn in keyboard"
        :key="btn.action" :action="btn.action">
        <v-icon v-if="btn.content.iconName" :name="btn.content.iconName" scale="1.2"></v-icon>

        <div v-if="btn.content.value">
          {{ btn.content.value }}
        </div>
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const preview = ref('');

const keyboard = [
  { action: 'delete', content: { iconName: 'fa-trash-alt' }, },
  { action: 'backspace', content: { iconName: 'fa-backspace' }, },
  { action: 'percent', content: { iconName: 'fa-percent' }, },
  { action: 'divide', content: { iconName: 'fa-divide' }, },
  { action: '7', content: { value: '7' }, },
  { action: '8', content: { value: '8' }, },
  { action: '9', content: { value: '9' }, },
  { action: 'multiply', content: { iconName: 'fa-times' }, },
  { action: '4', content: { value: '4' }, },
  { action: '5', content: { value: '5' }, },
  { action: '6', content: { value: '6' }, },
  { action: 'minus', content: { iconName: 'fa-minus' }, },
  { action: '1', content: { value: '1' }, },
  { action: '2', content: { value: '2' }, },
  { action: '3', content: { value: '3' }, },
  { action: 'plus', content: { iconName: 'fa-plus' }, },
  { action: '0', content: { value: '0' } },
  { action: 'dot', content: { iconName: 'bi-dot' }, },
  { action: 'equals', content: { iconName: 'fa-equals' }, },
];

const operatorsMap: Record<string, string> = {
  percent: '%',
  divide: '/',
  multiply: '*',
  minus: '-',
  plus: '+',
  dot: '.',
}

const trimResult = (result: string) => {
  return Array.from(result).reduceRight((result, char) => {
    if (['0', '.'].includes(char)) {
      return result.slice(0, -1);
    }

    return result;
  }, result);
}

const countResult = () => {
  const result = String(eval(preview.value));

  if (isNaN(Number(result))) {
    preview.value = String(Infinity);
    return;
  }

  preview.value = result.includes('.')
    ? trimResult(Number(result).toFixed(6))
    : result;
}

const onBtnClick = (action: string, value?: string) => {
  if (action === 'equals') {
    return countResult();
  }

  if (action === 'delete') {
    preview.value = '';
    return;
  }

  if (action === 'backspace') {
    preview.value = preview.value.slice(0, -1);
    return;
  }

  if (value) {
    preview.value += value;
    return;
  }

  const operator = operatorsMap[action];

  if (!operator) {
    throw new Error(`Unknown action ${action}`);
  }

  if (preview.value.endsWith(operator)) {
    return;
  }

  if (preview.value.length > 1) {
    countResult();
  }

  preview.value += operator;

  return;
}

</script>

<style scoped>
#calculator-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

#calculator__result {
  width: 100%;
  height: 3.8rem;
  text-align: right;
  padding: 1.5rem 1.5rem 1rem 0;
  font-size: 3rem;
}

#calculator__buttons-grid {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 12px;
}

.action-btn {
  position: relative;
  padding: 1.9rem;
  height: 5rem;
  border: none;
  border-radius: 100%;
  background-color: #48484a;
  color: #f2f2f7;
  font-family: 'Montserrat', sans-serif;
  font-size: 1.7rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: .3s ease;
}

.action-btn:hover {
  background-color: #3a3a3c;
}

.action-btn[action="delete"],
.action-btn[action="backspace"],
.action-btn[action="percent"] {
  background-color: #8e8e93;
  color: #1c1c1e;
}

.action-btn[action="delete"]:hover,
.action-btn[action="backspace"]:hover,
.action-btn[action="percent"]:hover {
  background-color: #636366;
}

.action-btn[action="divide"],
.action-btn[action="multiply"],
.action-btn[action="minus"],
.action-btn[action="plus"],
.action-btn[action="equals"] {
  background-color: #ff9d0a;
}

.action-btn[action="divide"]:hover,
.action-btn[action="multiply"]:hover,
.action-btn[action="minus"]:hover,
.action-btn[action="plus"]:hover,
.action-btn[action="equals"]:hover {
  background-color: #bf7300;
}

.action-btn[action="0"] {
  border-radius: 4rem;
  grid-column: span 2 / span 2;
}
</style>

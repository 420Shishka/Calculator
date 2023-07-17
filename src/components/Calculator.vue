<template>
  <div id="calculator-container">
    <div id="calculator__result">
      0
    </div>

    <div id="calculator__buttons-grid">
      <div class="action-btn" v-for="btn in keyboard" :key="btn.action" :action="btn.action">
        <v-icon v-if="btn.content.iconName" :name="btn.content.iconName" scale="1.2"></v-icon>

        <div v-if="btn.content.text">
          {{ btn.content.text }}
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const keyboard = [
  { action: 'delete', content: { iconName: 'fa-trash-alt' }, },
  { action: 'backspace', content: { iconName: 'fa-backspace' }, },
  { action: 'percent', content: { iconName: 'fa-percent' }, },
  { action: 'divide', content: { iconName: 'fa-divide' }, },
  { action: '7', content: { text: '7' }, },
  { action: '8', content: { text: '8' }, },
  { action: '9', content: { text: '9' }, },
  { action: 'multiply', content: { iconName: 'fa-times' }, },
  { action: '4', content: { text: '4' }, },
  { action: '5', content: { text: '5' }, },
  { action: '6', content: { text: '6' }, },
  { action: 'minus', content: { iconName: 'fa-minus' }, },
  { action: '1', content: { text: '1' }, },
  { action: '2', content: { text: '2' }, },
  { action: '3', content: { text: '3' }, },
  { action: 'plus', content: { iconName: 'fa-plus' }, },
  { action: '0', content: { text: '0' }, size: '1 / 3' },
  { action: 'dot', content: { iconName: 'bi-dot' }, },
  { action: 'equals', content: { iconName: 'fa-equals' }, },
];
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
  min-width: 1.3rem;
  height: 1.3rem;
  border: none;
  border-radius: 100%;
  background-color: #48484a;
  color: #f2f2f7;
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

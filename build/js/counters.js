import CounterUp from './CounterUp.js';

// Initialize CounterUp
const counter = new CounterUp('h3.counter', {
  duration: 2500,
  easing: 'easeOutExpo',
  once: false,
  suffix: '+',
});

const counterPercentage = new CounterUp('h3.counter-percentage', {
    duration: 2500,
    easing: 'easeOutExpo',
    once: false,
    suffix: '%',
  });
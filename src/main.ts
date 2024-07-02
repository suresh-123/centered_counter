import { factory } from './factory';

let count = factory(0, 1);

function update_count_and_reset_counter() {
  const currentCount = count();
  current_count.textContent = currentCount.toString();
}

const start_at_control = document.getElementById(
  'start_at'
) as HTMLInputElement;

const step_control = document.getElementById('step') as HTMLInputElement;

start_at_control?.addEventListener('change', update_count);

step_control?.addEventListener('change', update_count);

const count_button = document.querySelector(
  '.count_button'
) as HTMLButtonElement;

const current_count = document.querySelector(
  '.current_count'
) as HTMLSpanElement;

function update_count() {
  const startAt = parseInt(start_at_control.value) || 0;
  const step = parseInt(step_control.value) || 1;
  count = factory(startAt, step);

  update_count_and_reset_counter();
}

count_button.addEventListener('click', update_count);

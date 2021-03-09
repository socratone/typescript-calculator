import './styles/controller.scss';

interface Prop {
  target: HTMLElement;
  onNumberButton(number: string): void;
  onPlusButton(): void;
  onMinusButton(): void;
  onMultipleButton(): void;
  onDivideButton(): void;
  onClearButton(): void;
  onBackButton(): void;
}

class Controller {
  constructor({ 
    target,
    onNumberButton,
    onPlusButton,
    onMinusButton,
    onMultipleButton,
    onDivideButton,
    onClearButton,
    onBackButton,
  }: Prop) {
    target.insertAdjacentHTML('beforeend', `
      <section class="controller">
        <button id="button-7">7</button>
        <button id="button-8">8</button>
        <button id="button-9">9</button>
        <button id="button-plus">+</button>
        <button id="button-4">4</button>
        <button id="button-5">5</button>
        <button id="button-6">6</button>
        <button id="button-minus">−</button>
        <button id="button-1">1</button>
        <button id="button-2">2</button>
        <button id="button-3">3</button>
        <button id="button-multiple">×</button>
        <button id="button-clear">C</button>
        <button id="button-0">0</button>
        <button id="button-back"><</button>
        <button id="button-divide">÷</button>
      </section>
    `);

    for (let i = 0; i <= 9; i++) {
      document.getElementById(`button-${i}`).addEventListener('click', () => {
        onNumberButton(`${i}`);
      });
    }

    document.getElementById('button-plus').addEventListener('click', onPlusButton);
    document.getElementById('button-minus').addEventListener('click', onMinusButton);
    document.getElementById('button-multiple').addEventListener('click', onMultipleButton);
    document.getElementById('button-divide').addEventListener('click', onDivideButton);
    document.getElementById('button-clear').addEventListener('click', onClearButton);
    document.getElementById('button-back').addEventListener('click', onBackButton);
  }
}

export default Controller;

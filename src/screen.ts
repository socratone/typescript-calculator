import './styles/screen.scss';

interface Prop {
  target: HTMLElement;
}

interface State {
  result: number;
  number: string;
}

class Screen {
  data: State;
  history: State[];
  
  constructor({ target }: Prop) {
    this.data = {
      result: 0,
      number: ''
    }
    this.history = [];
    target.insertAdjacentHTML('beforeend', `
      <section class="screen"></section>
    `);
    this.render();
  }

  pushHistory(data: State) {
    this.history.push(data);
  }

  popHistory() {
    this.history.pop();
  }

  getRecentHistory(): State {
    if (this.history.length === 0) {
      return {
        result: 0,
        number: ''
      };
    } else {
      return this.history[this.history.length - 1];
    }
  }

  setState({ result, number }: State) {
    this.data.number = number;
    this.data.result = result;
    this.render();
  }

  render() {
    const screen = document.querySelector('.screen');
    screen.innerHTML = `
      <p>${this.data.result}</p>
      <p>${this.data.number}</p>
    `;
  }
}

export default Screen;
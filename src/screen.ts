import './styles/screen.scss';

interface Prop {
  target: HTMLElement;
}

interface State {
  result: number;
  number: string;
}

class Screen {
  target: HTMLElement;
  data: {
    result: number;
    number: string;
  }
  
  constructor({ target }: Prop) {
    this.target = target;
    this.data = {
      result: 0,
      number: ''
    }
    target.insertAdjacentHTML('beforeend', `
      <section class="screen"></section>
    `);
    this.render();
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
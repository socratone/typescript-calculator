import './styles/app.scss';
import Screen from './screen';
import Controller from './controller';

class App {
  screen: Screen;
  controller: Controller;

  constructor(target: HTMLElement) {
    this.screen = new Screen({
      target,
    });

    this.controller = new Controller({
      target,
      onNumberButton: (number:string) => {
        const state = { 
          result: this.screen.data.result,
          number: this.screen.data.number + number
        }
        this.screen.setState(state);
        this.screen.pushHistory(state);
      },
      onPlusButton: () => {
        const state = {
          result: this.screen.data.result + Number(this.screen.data.number),
          number: ''
        }
        this.screen.setState(state);
        this.screen.pushHistory(state);
      },
      onMinusButton: () => {
        const state = {
          result: this.screen.data.result - Number(this.screen.data.number),
          number: ''
        }
        this.screen.setState(state);
        this.screen.setState(state);
        this.screen.pushHistory(state);
      },
      onMultipleButton: () => {
        const state = {
          result: this.screen.data.result * Number(this.screen.data.number),
          number: ''
        }
        this.screen.setState(state);
        this.screen.pushHistory(state);
      },
      onDivideButton: () => {
        const number = Number(this.screen.data.number);
        if (number === 0) return;
        const state = {
          result: this.screen.data.result / number,
          number: ''
        }
        this.screen.setState(state);
        this.screen.pushHistory(state);
      },
      onClearButton: () => {
        if (this.screen.data.result === 0 && this.screen.data.number === '') return;
        const state = {
          result: 0,
          number: ''
        }
        this.screen.setState(state);
        this.screen.pushHistory(state);
      },
      onBackButton: () => {
        this.screen.popHistory();
        this.screen.setState(this.screen.getRecentHistory());
      },
    });
  }
}

export default App;

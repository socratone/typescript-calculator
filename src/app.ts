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
        this.screen.setState({ 
          result: this.screen.data.result,
          number: this.screen.data.number + number
        });
      },
      onPlusButton: () => {
        this.screen.setState({
          result: this.screen.data.result + Number(this.screen.data.number),
          number: ''
        });
      },
      onMinusButton: () => {
        this.screen.setState({
          result: this.screen.data.result - Number(this.screen.data.number),
          number: ''
        });
      },
      onMultipleButton: () => {
        this.screen.setState({
          result: this.screen.data.result * Number(this.screen.data.number),
          number: ''
        });
      },
      onDivideButton: () => {
        const number = Number(this.screen.data.number);
        if (number !== 0) {
          this.screen.setState({
            result: this.screen.data.result / number,
            number: ''
          });
        }
      },
      onClearButton: () => {
        this.screen.setState({
          result: 0,
          number: ''
        });
      },
      onBackButton: () => {
        this.screen.setState({
          result: 0,
          number: ''
        });
      },
    });
  }
}

export default App;

import { Scene } from '.';
import Person from '../objects/person';
import gameMusic from '../sounds/musics/game';

export default class GameScene implements Scene {
  person: Person;

  constructor() {
    this.person = new Person();
  }

  start = () => {
    this.person.init({
      position: {
        x: 300,
        y: 300,
        z: 0,
      },
    });
  };

  update = (time: number) => {
    this.person.update(time);
  };

  end = () => {
    this.person.remove();
  };
}

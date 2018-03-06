import p5 from 'p5';
import String from './string';
import '../css/style.scss';


const sketch = p => {
  let canvas;
  let unit = 40;
  let nOfG = 100;
  let currentX = 0;
  let currentY = 0;
  let endX = 0;
  let endY = 0;

  let mousePressing = false;

  const strings = [];

  p.preload = () => {
    // logo = p.loadImage("assets/p5js.svg");
  };

  p.setup = () => {
    canvas = p.createCanvas(p.windowWidth, p.windowHeight);
  };

  p.draw = () => {
    p.background(255);

    for (let i = 0; i < nOfG; i += 1) {
      const x = i * unit;
      if (x > p.width) {
        break;
      }
      for (let j = 0; j < nOfG; j += 1) {
        const y = j * unit;
        if (y > p.height) {
          break;
        }

        if (i === currentX && j === currentY) {
          p.fill(0);
        } else {
          endX = p.round(p.mouseX / unit);
          endY = p.round(p.mouseY / unit);
          if (mousePressing && endX === i && endY === j) {
            p.fill(50);
          } else {
            p.fill(240);
          }
        }
        p.noStroke();
        p.rect(x, y, unit * 0.5, unit * 0.5);
      }
    }

    if (mousePressing) {
      p.stroke(0);
      p.line((currentX + 0.25) * unit, (currentY + 0.25) * unit, p.mouseX, p.mouseY);
    }

    strings.forEach(s => s.draw());

  };

  p.mousePressed = () => {
    currentX = p.round(p.mouseX / unit);
    currentY = p.round(p.mouseY / unit);
    mousePressing = true;
  }

  p.mouseReleased = () => {
    mousePressing = false;
    strings.push(new String(p, unit, currentX, currentY, endX, endY));
  }

  p.windowResized = () => {
    p.resizeCanvas(p.windowWidth, p.windowHeight);
  };

  p.keyPressed = () => {
  };




};

new p5(sketch);

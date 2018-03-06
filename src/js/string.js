export default class String {

  constructor(p, u, ix, iy, ex, ey) {
    this.p = p;
    this.unit = u;
    this.ix = ix;
    this.iy = iy;
    this.ex = ex;
    this.ey = ey;
  }

  draw() {
    this.update();
    this.render();
  }

  update() {

  }

  render() {
    this.p.stroke(20);
    const ix = this.ix * this.unit;
    const iy = this.iy * this.unit;
    const ex = this.ex * this.unit;
    const ey = this.ey * this.unit;
    const u = this.unit;
    this.p.line(
      ix + u * 0.25,
      iy + u * 0.25,
      ex + u * 0.25,
      ey + u * 0.25,
    );

    this.p.noStroke();
    this.p.fill(20);
    this.p.rect(
      ix, iy, u * 0.5, u * 0.5
    );
    this.p.rect(
      ex, ey, u * 0.5, u * 0.5
    );
  }


}

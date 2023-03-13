class Ghost {
  constructor() {
    this.color = this.getRandomColor();
  }

  getRandomColor() {
    let arr = ["white", "yellow", "purple", "red"];

    let rand = Math.floor(Math.random() * arr.length);

    return arr[rand];
  }
}
ghost = new Ghost();
console.log(ghost.color);
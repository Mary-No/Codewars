class Ship {
  constructor(draft, crew) {
    this.draft = draft;
    this.crew = crew;
  }
  isWorthIt() {
    if (this.draft - 1.5 * this.crew > 20) {
      return true;
    } else {
      return false;
    }
  }
}

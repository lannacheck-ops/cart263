class Beehive {
    constructor(x, y) {
        this.x = x;
        this.y = y;

        this.hive = document.createElement("img");
        this.hive.src = "/assets/images/beehive.png";
        this.hive.style.position = "absolute";
        this.hive.style.zIndex = 10;

        this.beehive.style.left = this.x + "px";
        this.beehive.style.top = this.y + "px";
    }
}
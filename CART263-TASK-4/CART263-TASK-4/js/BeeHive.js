class Beehive {
    constructor(x, y) {
        this.x = x;
        this.y = y;

        this.hiveDiv = document.createElement("div");
        // this.hive.src = "/images/beehive.png";
        // this.hive.style.position = "absolute";
        // this.hive.style.zIndex = 10;


        // this.beehive.style.left = this.x + "px";
        // this.beehive.style.top = this.y + "px";
    }

    renderHive() {
        this.hiveDiv.classList.add("bee_hive");
        this.hiveDiv.style.left = this.x + "px";
        this.hiveDiv.style.top = this.y + "px";
        // Add to the DOM
        document.querySelector(".sky").appendChild(this.hiveDiv);
    }
}


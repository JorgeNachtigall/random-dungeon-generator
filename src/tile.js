class Tile {
    constructor(x, y, w, i, j, top = "noimg", right, bottom, left) {
        this.x = x;
        this.y = y;
        this.w = w;
        this.i = i;
        this.j = j;
        this.top = top;
        this.right = right;
        this.bottom = bottom;
        this.left = left;
        this.img = this.addImage();
        this.checked = false;
    }

    show() {
        if (this.img == 150) {
            fill(this.img);
            rect(this.x, this.y, this.w, this.w);
        } else {
            image(this.img, this.x, this.y);
        }
    }

    refresh() {
        var neighbors = [];
        let top, right, bottom, left, choosen;
        if (this.top && this.top != "noimg" && (this.i - 1) > 0) {
            top = tiles[this.i - 1][this.j];
            if (!top.checked) {
                neighbors.push(top);
            }
        }
        if (this.right && (this.j + 1) < cols) {
            right = tiles[this.i][this.j + 1];
            if (!right.checked) {
                neighbors.push(right);
            }
        }
        if (this.bottom && (this.i + 1) < rows) {
            bottom = tiles[this.i + 1][this.j];
            if (!bottom.checked) {
                neighbors.push(bottom);
            }
        }
        if (this.left && (this.j - 1) > 0) {
            left = tiles[this.i][this.j - 1];
            if (!left.checked) {
                neighbors.push(left);
            }
        }

        if (neighbors.length > 0) {
            let r = floor(random(0, neighbors.length));
            return neighbors[r];
        } else {
            return undefined;
        }
    }

    newValues() {
        if (this.i - 1 > 0) {
            let neighbor = tiles[this.i - 1][this.j];
            if (neighbor.bottom == true) {
                this.top = true;
            } else if (neighbor.bottom == false) {
                this.top = false;
            } else {
                this.top = Math.random() >= 0.65;
            }
        } else {
            this.top = false;
        }

        if (this.j + 1 < cols - 1) {
            let neighbor = tiles[this.i][this.j + 1];
            if (neighbor.left == true) {
                this.right = true;
            } else if (neighbor.left == false) {
                this.right = false;
            } else {
                this.right = Math.random() >= 0.65;
            }
        } else {
            this.right = false;
        }

        if (this.i + 1 < rows - 1) {
            let neighbor = tiles[this.i + 1][this.j];
            if (neighbor.top == true && neighbor.top != "noimg") {
                this.bottom = true;
            } else if (neighbor.top == false) {
                this.bottom = false;
            } else {
                this.bottom = Math.random() >= 0.65;
            }
        } else {
            this.bottom = false;
        }

        if (this.j - 1 > 0) {
            let neighbor = tiles[this.i][this.j - 1];
            if (neighbor.right == true) {
                this.left = true;
            } else if (neighbor.right == false) {
                this.left = false;
            } else {
                this.left = Math.random() >= 0.65;
            }
        } else {
            this.left = false;
        }
        this.img = this.addImage();
    }


    addImage() {
        if (this.top == "noimg") {
            return 150;
        } else if (this.top && this.right && this.bottom && this.left) {
            return c;
        } else if (this.top && this.right && !(this.bottom) && !(this.left)) {
            return tr;
        } else if (this.top && !(this.right) && this.bottom && !(this.left)) {
            return tb;
        } else if (this.top && !(this.right) && !(this.bottom) && this.left) {
            return tl;
        } else if (!(this.top) && !(this.right) && this.bottom && this.left) {
            return lb;
        } else if (!(this.top) && this.right && !(this.bottom) && this.left) {
            return lr;
        } else if (!(this.top) && this.right && this.bottom && !(this.left)) {
            return rb;
        } else if (this.top && !(this.right) && !(this.bottom) && !(this.left)) {
            return t;
        } else if (!(this.top) && this.right && !(this.bottom) && !(this.left)) {
            return r;
        } else if (!(this.top) && !(this.right) && this.bottom && !(this.left)) {
            return b;
        } else if (!(this.top) && !(this.right) && !(this.bottom) && this.left) {
            return l;
        } else if (!(this.top) && this.right && this.bottom && this.left) {
            return rbl;
        } else if (this.top && !(this.right) && this.bottom && this.left) {
            return tlb;
        } else if (this.top && this.right && this.bottom && !(this.left)) {
            return trb;
        } else if (this.top && this.right && !(this.bottom) && this.left) {
            return trl;
        } else {
            return l;
        }

    }

}
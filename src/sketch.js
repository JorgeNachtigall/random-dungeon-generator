let rows, cols, tiles;
let w = 50;
let current;
let stack = [];
let c, tr, tb, tl, lb, lr, rb, t, r, b, l, rbl, tlb, trb, trl;

function makeArray(rows, cols) {
    var arr = new Array(rows);
    for (i = 0; i < arr.length; i++) {
        arr[i] = new Array(cols);
    }
    return arr;
}

function preload() {
    c = loadImage('/src/sprites/C.png');
    tr = loadImage('/src/sprites/TR.png');
    tb = loadImage('/src/sprites/TB.png');
    tl = loadImage('/src/sprites/TL.png');
    lb = loadImage('/src/sprites/LB.png');
    lr = loadImage('/src/sprites/LR.png');
    rb = loadImage('/src/sprites/RB.png');
    t = loadImage('/src/sprites/T.png');
    r = loadImage('/src/sprites/R.png');
    b = loadImage('/src/sprites/B.png');
    l = loadImage('/src/sprites/L.png');
    rbl = loadImage('/src/sprites/RBL.png');
    tlb = loadImage('/src/sprites/TLB.png');
    trb = loadImage('/src/sprites/TRB.png');
    trl = loadImage('/src/sprites/TRL.png');
}

function setup() {
    createCanvas(800, 800);
    rows = floor(height / w);
    cols = floor(width / w);
    tiles = makeArray(rows, cols);

    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            if (i == floor(rows / 2) && j == floor(cols / 2)) {
                tiles[i][j] = new Tile(j * w, i * w, w, i, j, true, true, true, true);
                current = tiles[i][j];
            } else {
                tiles[i][j] = new Tile(j * w, i * w, w, i, j);
            }
        }
    }
}

function draw() {
    background(0);
    noStroke();
    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            tiles[i][j].show();
        }
    }

    current.checked = true;
    let next = current.refresh();
    if (next) {
        next.checked = true;
        stack.push(current);
        next.newValues();
        current = next;
    } else if (stack.length > 0) {
        current = stack.pop();
    }
}





//
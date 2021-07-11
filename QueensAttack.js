function QueensAttack(qr, qc, or, oc) {
    // If queen and the opponent are in the same row
    if (qr == or)
        return true;

    // If queen and the opponent are in the same column
    if (qc == oc)
        return true;

    // If queen can attack diagonally
    if (Math.abs(qr - or) == Math.abs(qc - oc))
        return true;

    // Opponent is safe
    return false;
}

var qr = 4,
    qc = 5;
var or = 6,
    oc = 7;


if (QueensAttack(qr, qc, or, oc))
    console.log("Yes");
else
    console.log("No");
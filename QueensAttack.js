function QueensAttack(qr, qc, or, oc) {

    if (qr == or)
        return true;

    if (qc == oc)
        return true;

    if (Math.abs(qr - or) == Math.abs(qc - oc))
        return true;

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

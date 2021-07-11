function grain(num) {
    var sum = 0;
    var grains = 0;
    for(var i=0;i<num;i++){
        grains = Math.pow(2,i);
        sum += grains;
    }
    console.log('The ' + num + 'th chessboard index has ' + grains + ' and,it totally has '+sum+' grains');
}

grain(4);
grain(12);
grain(64);
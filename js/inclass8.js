const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})
var first = true;
var inp = 0;
var group = [];
rl.on('line',(line)=>{
    if(first){
        first = false;
        inp=parseInt(line);
        return;
    }
    let ar = line.split(' ');
    let name = ar[0];
    let course = parseInt(ar[3]);
    let ps = parseInt(ar[1].split('/')[0]);
    let db = parseInt(ar[2].split('/')[0]);
    if(ps>=2010){
        console.log(name + ' eligible');
    }
    else if(db>=1991){
        console.log(name + ' eligible');
    }
    else if(course>=41){
        console.log(name + ' ineligible');
    }
    else{
        console.log(name + ' coach petitions');
    }


    inp--;
    if(inp==0){
        rl.close();
    }

});
let ar=[]
let br=[]
for(let i=0;i<9;i++){
    let tar=[] 
    for(let j=0;j<9;j++){
        tar.push(Math.floor(Math.random()*10));
    }
    ar.push(tar);
    br.push(tar)
}
for(let i=0;i<9;i++){
    for(let j=0;j<9;j++){
       document.getElementById((i*10+(j+1))+"").innerHTML=ar[i][j];
    }
}
let m = ar.length;
let n = ar[0].length;
for (let i = 1; i < m; i++) {
    ar[i][0] += ar[i-1][0];
}
for (let j = 1; j < n; j++) {
    ar[0][j] += ar[0][j-1];
}
for (let i = 1; i < m; i++) {
    for (let j = 1; j < n; j++) {
        ar[i][j] += Math.min(ar[i-1][j], ar[i][j-1]);
    }
}
let ans=ar[8][8];
document.getElementById("an").innerHTML=ans;
let cs=ar[0][0];
document.getElementById("maahe").innerHTML=cs;
let i=0,j=0;
document.getElementById(1+"").innerHTML="<img style='height:50px;width:80%;' src='jump.gif'>"
function func1(){
    if(i+1==m && j+1==n){
        if(cs==ans){
            document.getElementById("res").innerHTML="Winner";
            alert("Winner");
        }
        else{
            document.getElementById("res").innerHTML="Loose";
            alert("Better luck next time");
        }
    }
    if(j+1>=n)
        window.alert("cannot move");
    else{
        document.getElementById((i*10+(j+1))+"").innerHTML="<img style='height:50px;width:80%;' src='arrowright.png'>"
        j++;
        
        cs+=br[i][j];
        document.getElementById((i*10+(j+1))+"").innerHTML="<img style='height:50px;width:80%;' src='jump.gif'>"
    }
    document.getElementById("maahe").innerHTML=cs;
}
function func2(){
    if(i+1==m && j+1==n){
        if(cs==ans){
            document.getElementById("res").innerHTML="Winner";
            alert("Winner");
           
        }
        else{
            document.getElementById("res").innerHTML="Loose";
            alert("Better luck next time");
        }
    }
    if(i+1>=m)
        window.alert("cannot move");
    else{
        document.getElementById((i*10+(j+1))+"").innerHTML="<img style='height:50px;width:80%;' src='downarrow.png'>"
        i++;
        cs+=br[i][j];
        document.getElementById((i*10+(j+1))+"").innerHTML="<img style='height:50px;width:80%;' src='jump.gif'>"
    }
    document.getElementById("maahe").innerHTML=cs;
}
function func3(){
    location.reload();
}

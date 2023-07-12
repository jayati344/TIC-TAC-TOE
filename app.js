console.log("its working")
function setmyvar(p,q){
    console.log(p)
    console.log(q)
    if(Number(q)%2==1){
        console.log('oddcase')
        if(p=='1')
        {
            localStorage.setItem("a", '1');
        }
        if(p=='2')
        {
            localStorage.setItem("b", '1');
        }
        if(p=='3')
        {
            localStorage.setItem("c", '1');
        }
        if(p=='4')
        {
            localStorage.setItem("d", '1');
        }
        if(p=='5')
        {
            localStorage.setItem("e", '1');
        }
        if(p=='6')
        {
            localStorage.setItem("f", '1');
        }
        if(p=='7')
        {
            localStorage.setItem("g", '1');
        }
        if(p=='8')
        {
            localStorage.setItem("h", '1');
        }
        if(p=='9')
        {
            localStorage.setItem("i", '1');
        }
    }
    if(Number(q)%2==0){
        console.log('evencase')
            if(p=='1')
            {
                localStorage.setItem("a",'2');
            }
            if(p=='2')
            {
                localStorage.setItem("b",'2');
            }
            if(p=='3')
            {
                localStorage.setItem("c",'2');
            }
            if(p=='4')
            {
                localStorage.setItem("d",'2');
            }
            if(p=='5')
            {
                localStorage.setItem("e",'2');
            }
            if(p=='6')
            {
                localStorage.setItem("f",'2');
            }
            if(p=='7')
            {
                localStorage.setItem("g",'2');
            }
            if(p=='8')
            {
                localStorage.setItem("h",'2');
            }
            if(p=='9')
            {
                localStorage.setItem("i",'2');
            }
        }

        
    }


function stop(){
    document.getElementById('1').disabled=true
    document.getElementById('2').disabled=true
    document.getElementById('3').disabled=true
    document.getElementById('4').disabled=true
    document.getElementById('5').disabled=true
    document.getElementById('6').disabled=true
    document.getElementById('7').disabled=true
    document.getElementById('8').disabled=true
    document.getElementById('9').disabled=true
}
function showResult(myvalue){
    if(myvalue=='1'){
    console.log("zerowins")
    document.getElementById('result').innerHTML="ZERO WINS"
    document.getElementById('result').className="alert alert-secondary"
stop()}
if(myvalue=='2'){
    console.log("Cross Wins")
    document.getElementById('result').innerHTML="X WINS"
    document.getElementById('result').className="alert alert-secondary"
stop()}
}

function test_result()
{
    var myresult = false
    var b1 = localStorage.getItem("a")
    var b2 = localStorage.getItem("b")
    var b3 = localStorage.getItem("c")
    var b4 = localStorage.getItem("d")
    var b5 = localStorage.getItem("e")
    var b6 = localStorage.getItem("f")
    var b7 = localStorage.getItem("g")
    var b8 = localStorage.getItem("h")
    var b9 = localStorage.getItem("i")
    var arr1 = [b1,b2,b3]
    var arr2 = [b4,b5,b6]
    var arr3 = [b7,b8,b9]
    console.log(arr1)
    console.log(arr2)
    console.log(arr3)
    if(arr1[0]==arr1[1] && arr1[1]==arr1[2] && arr1[0]!='0')
    {
        showResult(b1)
        myresult = true
    }
    if(arr2[0]==arr2[1] && arr2[1]==arr2[2] && arr2[0]!='0')
    {
        showResult(b4)
        myresult = true
    }
    if(arr3[0]==arr3[1] && arr3[1]==arr3[2] && arr3[0]!='0')
    {
        showResult(b7)
        myresult = true
    }
    if(arr1[0]==arr2[0] && arr2[0]==arr3[0] && arr1[0]!='0')
    {
        showResult(b1)
        myresult = true
    }
    if(arr1[1]==arr2[1] && arr2[1]==arr3[1] && arr1[1]!='0')
    {
        showResult(b2)
        myresult = true
    }
    if(arr1[2]==arr2[2] && arr2[2]==arr3[2] && arr1[2]!='0')
    {
        showResult(b3)

        myresult = true
    }
    if(arr1[0]==arr2[1] && arr2[1]==arr3[2] && arr1[0]!='0')
    {
        showResult(b1)
        myresult = true
    }
    if(arr1[2]==arr2[1] && arr2[1]==arr3[0] && arr1[2]!='0')
    {
        showResult(b3)
        myresult = true
    }
    if(myresult==false && localStorage.getItem("y")=='10')
    {
        document.getElementById('result').innerHTML="Match Tied"
        document.getElementById('result').className="alert alert-secondary"
        stop()
    }
}

function funct(x){
    var m = Number(localStorage.getItem("y"));
    setmyvar(x,m)
    
    if(m%2==1)
    {
        // odd wala case
        document.getElementById(x).innerHTML = '0'
        document.getElementById(x).disabled = true
        m = m+1
        localStorage.setItem("y", m);
    }
    else{
        document.getElementById(x).innerHTML = 'X'
        document.getElementById(x).disabled = true
        m = m+1
        localStorage.setItem("y", m);
        
    }
test_result()   
}



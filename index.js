document.getElementById("play").onclick=function(){
    let i=+0;
    let x=+0;
    while(x<10000)
    {
        i++;
        x=x+i;
    }
    document.getElementById("result-wrapper").style.display="block";
    document.getElementById("show").innerHTML= "số nguyên dương nhỏ nhất: " + i;
}

//bài 2
document.getElementById("click").onclick=function(){
    
    let x=+document.getElementById("x_num").value;
    let n=+document.getElementById("n_num").value; 
    let tong=+0;
        for(let i=+1;i<=n;i++)
        {
             tong=tong+ Math.pow(x,i);
        }
    document.getElementById("result-wrappe").style.display="block";
    document.getElementById("lumos").innerHTML="tổng = "+tong; 
}


//Bài 3
document.getElementById("boom").onclick=function(){
    let x=+document.getElementById("num_x").value;
    let tong=+1;
    for(let i=+1;i<=x;i++)
    {
        tong=tong*i;
    }
    document.getElementById("result-wrapp").style.display="block";
    document.getElementById("light").innerHTML="tổng = "+tong; 
} 


//Bài 4
document.getElementById("button").onclick=function(){
     const col=document.getElementsByClassName("demo");
     document.getElementById("result-wra").style.display="block";
    for(let i=+0;i<=10;i++)
    {
        if(i%2==0)
        {
            col[i].style.backgroundColor="red";
        }
        else
        {
            col[i].style.backgroundColor="blue";
        }
    }       
    
    
    document.getElementById("result-wra").style.display="block";
    
}

//bài 5
document.getElementById("played").onclick=function(){
    let x=document.getElementById("number").value;
    let gr=[];
    function soNgto(n)
    {
        let bo=true;
        if(n<2)
        {
            bo= false;
        }
        else
        {
            for(let i=+2;i<n;i++)
            {
                if(n%i==0)
                {
                    bo= false; 
                } 
            }
        }
        return bo;
    }
    for(let i=+0;i<=x;i++)
    {
      if(soNgto(i)===true)
      {
        gr.push(i);
      }
    }
     document.getElementById("result-wrap").style.display="block";
    document.getElementById("find").innerHTML="các số nguyên tố "+ gr; 
}
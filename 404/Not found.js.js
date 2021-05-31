function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function delay(){
var list="The page you requested could not be found";

for(var i=0;i<list.length;i++)
 {
     document.querySelector("p").innerHTML= list.slice(0,i+1);
     await sleep(500);
 }
}

delay();

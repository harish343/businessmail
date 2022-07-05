
let button = document.getElementById('button1');
var domain;




button.addEventListener("click", function(e) {
    let name = document.getElementById("name").value;
    let sirname = document.getElementById('sirname').value;
    let url = document.getElementById('inputAddress').value;
    let result1 = document.getElementById("result1")
    let result2 = document.getElementById("result2")
    let result3 = document.getElementById("result3")
    let result4 = document.getElementById("result4")
    let result5 = document.getElementById("result5")
    var domain = url.replace('http://www.','@').replace('https://www.','@').replace('www.','@').replace('https://','@').replace('http://','@').split(/[/?#]/)[0];
    result1.value=name+sirname+domain;
    result2.value=name.slice(0,1)+sirname+domain;
    result3.value=name+sirname.slice(0,1)+domain;
    result4.value=name+domain;
    result5.value=sirname+domain;
    
    
    
    https://verify.gmass.co/verify?email=harishnarnaware74@gmail.com&key=52D5D6DD-CD2B-4E5A-A76A-1667AEA3A6FC
   
    // url =`https://emailverification.whoisxmlapi.com/api/v2?apiKey=at_MsGBAmjNNV2647y0rIC7ULWVELTbD&emailAddress=${result1.value}`;
    url =`https://verify.gmass.co/verify?email=${result1.value}&key=52D5D6DD-CD2B-4E5A-A76A-1667AEA3A6FC`;
    

    fetch(url).then((response)=>{
       
        return response.json();
    }).then((data1)=>{
        
        console.log(data1)
        
        if(data1.Valid){
          result1.classList.add('is-valid')
        }
        else{
          result1.classList.add('is-invalid')
        }
        
    })
       
    // url =`https://emailverification.whoisxmlapi.com/api/v2?apiKey=at_MsGBAmjNNV2647y0rIC7ULWVELTbD&emailAddress=${result2.value}`;
    // url ="https://emailverification.whoisxmlapi.com/api/v2?apiKey=at_MsGBAmjNNV2647y0rIC7ULWVELTbD&emailAddress=babbalrai366@gmail.com";
    url =`https://verify.gmass.co/verify?email=${result2.value}&key=52D5D6DD-CD2B-4E5A-A76A-1667AEA3A6FC`;

    fetch(url).then((response)=>{
       
        return response.json();
    }).then((data2)=>{
        
     
        console.log(data2.Valid)
        console.log(data2)
        if(data2.Valid){
          result2.classList.add('is-valid')
        }
        else{
          result2.classList.add('is-invalid')
        }
       
 
    })
       
    // url =`https://emailverification.whoisxmlapi.com/api/v2?apiKey=at_MsGBAmjNNV2647y0rIC7ULWVELTbD&emailAddress=${result3.value}`;
    // url ="https://emailverification.whoisxmlapi.com/api/v2?apiKey=at_MsGBAmjNNV2647y0rIC7ULWVELTbD&emailAddress=babbalrai366@gmail.com";
    url =`https://verify.gmass.co/verify?email=${result3.value}&key=52D5D6DD-CD2B-4E5A-A76A-1667AEA3A6FC`;

    fetch(url).then((response)=>{
       
        return response.json();
    }).then((data3)=>{
      console.log(data3.Valid)
      console.log(data3)
      if(data3.Valid){
        result3.classList.add('is-valid')
      }
      else{
        result3.classList.add('is-invalid')
      }
    
    })
       
    // url =`https://emailverification.whoisxmlapi.com/api/v2?apiKey=at_MsGBAmjNNV2647y0rIC7ULWVELTbD&emailAddress=${result4.value}`;
    // url ="https://emailverification.whoisxmlapi.com/api/v2?apiKey=at_MsGBAmjNNV2647y0rIC7ULWVELTbD&emailAddress=babbalrai366@gmail.com";
    url =`https://verify.gmass.co/verify?email=${result4.value}&key=52D5D6DD-CD2B-4E5A-A76A-1667AEA3A6FC`;

    fetch(url).then((response)=>{
       
        return response.json();
    }).then((data4)=>{
      console.log(data4.Valid)
      console.log(data4)
      if(data4.Valid){
        result4.classList.add('is-valid')
      }
      else{
        result4.classList.add('is-invalid')
      }

    })
       
    // url =`https://emailverification.whoisxmlapi.com/api/v2?apiKey=at_MsGBAmjNNV2647y0rIC7ULWVELTbD&emailAddress=${result5.value}`;
    // url ="https://emailverification.whoisxmlapi.com/api/v2?apiKey=at_MsGBAmjNNV2647y0rIC7ULWVELTbD&emailAddress=babbalrai366@gmail.com";
    url =`https://verify.gmass.co/verify?email=${result5.value}&key=52D5D6DD-CD2B-4E5A-A76A-1667AEA3A6FC`;

    fetch(url).then((response)=>{
       
        return response.json();
    }).then((data5)=>{
        
        console.log(data5.Valid)
        console.log(data5)
        if(data5.Valid){
          result5.classList.add('is-valid')
        }
        else{
          result5.classList.add('is-invalid')
        }
      
     
    })

  });


    

  // fetch(https://emailverification.whoisxmlapi.com/api/v2?apiKey=at_MsGBAmjNNV2647y0rIC7ULWVELTbD&emailAddress=babbalrai366@gmail.com)

  //api -   at_MsGBAmjNNV2647y0rIC7ULWVELTbD
//   https://emailverification.whoisxmlapi.com/api/v2?apiKey=at_MsGBAmjNNV2647y0rIC7ULWVELTbD&emailAddress=babbalrai366@gmail.com
//   https://emailverification.whoisxmlapi.com/api/v2?apiKey=at_MsGBAmjNNV2647y0rIC7ULWVELTbD&emailAddress=admin@thepediatricdentalgroup.com
    // console.log(name+sirname+domain)
   
 


    




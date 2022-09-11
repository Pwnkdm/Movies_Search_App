




   function search(){
          var movie= document.getElementById("inputName").value;
        //   console.log(movie)
        getData(movie)
        document.getElementById("inputName").value="";
   }



  
         async function getData(m){
            //  console.log(m)
           
             try{
                let url= `https://www.omdbapi.com/?t=${m}&apikey=5910f733`;
                let res= await fetch(url);
                let data = await res.json();
                console.log(data)

                 append(data);
                
       
                        }       
             


             catch (err){
                        // console.log("err:",err);
                        document.getElementById('show').innerHTML=null;
                    let img=document.createElement("img");
                    img.src="https://static9.depositphotos.com/1431107/1135/i/600/depositphotos_11359051-stock-photo-sorry-emoticon.jpg";

             }
         };

        //  getData();

         function append (data){

           document.getElementById("show").innerHTML=null;
        var box = document.createElement("div")
        if(data.Title==undefined)
        {
          var img = document.createElement("img")
      
          img.src="https://static9.depositphotos.com/1431107/1135/i/600/depositphotos_11359051-stock-photo-sorry-emoticon.jpg";
         
          document.getElementById("show").append(img); 
        }
        else{
        if(data.imdbRating>6)
        {
          var img1 = document.createElement("img")
          img1.id="recmnd"
          img1.src="https://image.shutterstock.com/image-vector/red-vector-illustration-banner-recommended-600w-1470612767.jpg"
          box.append(img1)
        }
          var img = document.createElement("img")
          img.src=data.Poster;
          img.alt="img not avilable"
          var name = document.createElement("h2")
          name.innerText=data.Title;
          var Released = document.createElement("h3")
          Released.innerText=`Released : ${data.Released}`;
          var Actors = document.createElement("p")
          Actors.innerText=`Actors : ${data.Actors}`;
          var imdbRating = document.createElement("p")
          imdbRating.innerText=`imdbRating : ${data.imdbRating}`;
          var Country = document.createElement("p")
          Country.innerText=`Country : ${data.Country}`;
          var Director = document.createElement("p")
          Director.innerText=`Director : ${data.Director}`;
          var Language = document.createElement("p")
          Language.innerText=`Language : ${data.Language}`;
          box.append(img,name,Released,Actors,Director,Language,Country,imdbRating)
          document.getElementById("show").append(box);
            
         }
        
    }
for (let i = 1; i <= 3; i++) {
    for (let j = 1; j <= i; j++) {
        console.log("*");
    }
}


for (let i = 1 ; i<=5 ;i++){
    let row = "";
         for (let j = 1; j <= i ; j++){
        row= row +"*" + " ";
     }
     console.log(row);
}
      
         
     let count = 1;     
        for (let i = 1 ; i<=5 ;i++){         
         
        let row = "";             
                      
        for (let j = 1; j <= i ; j++){ 

            let space = "";
            for(let k = 0 ; k<=(5-i); k++){            
            space = space + " ";  
                                              
        }    
             
            row= space + row + "* ";   
            count= count-1;    
                          
        }     
               
     console.log(row);          
    }



    




 


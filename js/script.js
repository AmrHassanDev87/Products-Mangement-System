






var ProductNameInput = document.getElementById("ProductNameInput")
var  ProdutNameNumber = document.getElementById("ProdutNameNumber");
var ProductNameCategory = document.getElementById("ProductNameCategory");
var ProductNameDesc = document.getElementById("ProductNameDesc");
var ProductsContainer = []

//console.log(ProductNameInput , ProdutNameNumber , ProductNameDesc , ProductNameCategory);


// localStorage.setItem("products" , "RouteAcademy")
// window.alert(localStorage.getItem("products"))
// window.alert(localStorage.getItem("progfgfgf"))
// localStorage.clear()

// window.alert(localStorage.getItem("products"));


if(localStorage.getItem('products')!= null){
    ProductsContainer = JSON.parse(localStorage.getItem("products"));

    displayProducts()
}





function addProduct(){

    
        

        var product = {

            name:ProductNameInput.value,
            price:ProdutNameNumber.value,
            category:ProductNameCategory.value,
            Desc:ProductNameDesc.value,
            }
        
            // console.log(product);
            ProductsContainer.push(product);
            // console.log(ProductsContainer)
           localStorage.setItem("products" , JSON.stringify(ProductsContainer))
        //    clearForm()
           displayProducts()
           
           
        }
           




function clearForm(){
    ProductNameInput.value = ""
    ProdutNameNumber.value = ""
    ProductNameCategory.value = ""
    ProductNameDesc.value = ""
}


function displayProducts(){
    var cartoona = ``
    for(i=0; i<ProductsContainer.length; i++){
         cartoona += ` <tr>
            <td>${i}</td>
            <td>${ProductsContainer[i].name}</td>
            <td>${ProductsContainer[i].price}</td>
            <td>${ProductsContainer[i].category}</td>
            <td>${ProductsContainer[i].Desc}</td>
            <td><button onclick="DeleteProduct(${i})" class="btn btn-outline-danger">Delete</button></td>
            <td><button class="btn btn-outline-primary">Update</button></td>
            
         

          </tr>`
}
    document.getElementById("tableBody").innerHTML = cartoona
    }
   

    function DeleteProduct(deleteIndex){
      ProductsContainer.splice(deleteIndex , 1)
      localStorage.setItem("products" , JSON.stringify(ProductsContainer))
      displayProducts()
      
    }
    DeleteProduct(0)




  
     function ProductSearch(term){
      var cartoona = ''
      for(var i=0; i<ProductsContainer.length; i++){
        if(ProductsContainer[i].name.toLowerCase().includes(term.toLowerCase()) == true){
        
            cartoona += ` <tr>
            <td>${i}</td>
            <td>${ProductsContainer[i].name}</td>
            <td>${ProductsContainer[i].price}</td>
            <td>${ProductsContainer[i].category}</td>
            <td>${ProductsContainer[i].Desc}</td>
            <td><button onclick="DeleteProduct(${i})" class="btn btn-outline-danger">Delete</button></td>
            <td><button class="btn btn-outline-primary">Update</button></td>
            
         

          </tr>`
        }
       
      } 
     
      document.getElementById("tableBody").innerHTML = cartoona;

     }

      ProductSearch('');













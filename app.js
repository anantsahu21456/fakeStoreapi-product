// let user = fetch ("https://fakestoreapi.com/products");
// // console.log(user)
// user.then((data)=>
// {
//     console.log(user)
//     return data.json()
// })
// .then((userdata)=>
// {
//     console.log(userdata)
//     userdata.map((element,index,wh)=>
// {
//     console.log(element,index) 
// })
// })
// .catch((err)=>
// {
//     console.log(err)
// })

async function products()
{
    try
    {
        let products = await fetch("https://fakestoreapi.com/products");
        let productsdata = await products.json()
        console.log(productsdata)
        productsdata.map(({id,title,price,description,category,image})=>
        {
            document.body.innerHTML += `

            <div class="anant">
      <div class="mone">
             <h5 class="id"> id  -  ${id } </h5>
             <h5  class="title"> title - ${ title} </h5>
             <p class="desc"> desc - ${description} </p>
             <p class="cate"> cate - ${category} </p>
             <img class="photo" src=${image} alt=""> 
             <h4  class="price"> price - ${price } </h4>
      </div>
      </div>
            `
        })
    } catch(err)
    {
        console.log(err.message)
    }
}
products();



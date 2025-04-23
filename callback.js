//The below example is a Callback Hell Example

function orders(callback){
  setTimeout(()=>{
  const data = 'Pizza'
  console.log("order is received"+ data)
  callback(data);
  },2000)
}

function prePareFood(item, callback){
   setTimeout(()=>{
    const preparation = `the ${item} is being prepared`
    console.log(preparation)
    callback(preparation)
   },500)
}

function delivaryOrder(preparation, callback){
   setTimeout(()=>{
   const delivary = preparation + "will be done soon"
   console.log(delivary);
   callback(delivary)
   },500)
}

function confirmDelivary(delivary, callback){
    setTimeout(()=>{
      const confirmation = delivary + " Orders is deliverd"
      console.log(confirmation);
      callback(confirmation)
    },500)
}

orders(function(item){
  prePareFood(item, function(preparation){
  delivaryOrder(preparation,function(delivary){
    confirmDelivary(delivary,function(confirmation){
        console.log("The order is delivered" + " "+ confirmation)
    })
  })
 })
})
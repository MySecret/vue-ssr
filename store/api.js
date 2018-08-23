function fetchItem(id){
    return new Promise((resolve,reject)=>{
        resolve('item'+ id)
    })
}
export {fetchItem}
const shoppingCart = (function() {

    let basket = [];

    return {
        upsertItem: function(items) {
            for (let i = 0; i < basket.length; i++) {
                let protemp = basket[i];
                if (protemp.id === items.id) {
                    basket[i] = items;
                    return;
                }
            }
            basket.push(items);
        },
        getItemCount(){
            return basket.length;  
          },
          getTotalPrice(){
          return basket.reduce((totalsum, p) => totalsum + p.price * p.count, 0)   
          },
          removeItemById(id){
            let index=basket.findIndex(prod=>prod.id===id) 
           if(index!==-1)
              basket.splice(index,1)
          }
        };
      })();


const p1 = { id: 0, name: 'Coffee', description: 'Coffee Grounds from Ethiopia', price: 9.5, count: 1 }
const p2 = { id: 1, name: 'Black Tea', description: ' Tea from Chille', price: 8.5, count: 11 }
const p3 = { id: 2, name: 'wine', description: 'wine from califonia  US', price: 11.55, count: 24}
const p4 = { id: 3, name: 'soccer ball', description: ' ball for brazil', price: 8.5, count: 8 }
const p5 = { id: 4, name: 'wheat', description: 'wheat from iwah  US', price: 21.5, count: 96}

shoppingCart.upsertItem(p1);
shoppingCart.upsertItem(p2);
shoppingCart.upsertItem(p3);
shoppingCart.upsertItem(p4);
shoppingCart.upsertItem(p5)
console.log(shoppingCart.getTotalPrice());
console.log(shoppingCart.getItemsCount());
console.log(shoppingCart.getTotalPrice());
shoppingCart.removeItemById(1);
console.log(shoppingCart.getItemsCount());
console.log(shoppingCart.getTotalPrice());
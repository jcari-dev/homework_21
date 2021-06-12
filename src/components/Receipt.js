
import React,{useState} from 'react';



function Receipt() {
    

    
    const receipts = [{
        "person":"Karolin",
        "order":{
           "main":"Burrito",
           "protein":"Organic Tofu",
           "rice":"Purple Rice",
           "sauce":"Green Crack",
           "toppings":[
              "Baby Bok Choy",
              "Cucumber Kimchi"
           ],
           "drink":"Korchata",
           "cost":22
        },
        "paid":false},
     { 
       "person":"Jerrica",
        "order":{
           "main":"Rice Bowl",
           "protein":"Ginger Soy Chix",
           "rice":"Sticky Rice",
           "sauce":"Korilla",
           "toppings":[
              "Yuzu Pickled Sweet Pepper",
              "Kale"
           ],
           "drink":"Korchata",
           "cost":19
        },
        "paid":false
     }, {
        "person":"Matt",
        "order":{
           "main":"Salad Bowl",
           "protein":"Organic Tofu",
           "rice":"none",
           "sauce":"K'lla",
           "toppings":[
              "Blue Potato Salad",
              "Pico De Gallo",
              "Red Kimchi"
           ],
           "drink":"Sparkling Blood Orange Soda",
           "cost":20
        },
        "paid":true
     }]
     const [status, setStatus] = useState(receipts)
     const payMe = (paid, index) => {
        
        console.log(paid, index)
        status[index].paid = true;
        console.log(receipts[index].paid, receipts[index])
        
        return setStatus(receipts)
        
    }
    return (
        
        <div>
            {status.map(((receipt, index) => (
                <div>
                <h2>Name: {receipt.person}</h2>
                <p>Main: {receipt.order.main}</p>
                <p>Protein: {receipt.order.protein}</p>
                <p>Rice: {receipt.order.rice}</p>
                <p>Sauce: {receipt.order.sauce}</p>
                <p>Drink: {receipt.order.drink}</p>
                <p>Cost: {receipt.order.cost}</p>
                <p>Paid: {receipt.paid ? 'Paid' : 'Not Paid'}</p>
                <button onClick={e => payMe(receipt.paid, index)}>Paid</button>
                </div>
            )))}
        </div>
    )
}

export default Receipt

import shoe1 from '../../../image/shoes/shoes (1).png'
import shoe2 from '../../../image/shoes/shoes (2).png'
import shoe3 from '../../../image/shoes/shoes (3).png'
import shoe4 from '../../../image/shoes/shoes (4).png'
import shoe5 from '../../../image/shoes/shoes (5).png'
import shoe6 from '../../../image/shoes/shoes (6).png'

import clothe1 from '../../../image/clothes/clothes (1).jpg'
import clothe2 from '../../../image/clothes/clothes (39).jpg'
import clothe3 from '../../../image/clothes/clothes (54).jpg'
import clothe4 from '../../../image/clothes/clothes (64).jpg'
import clothe5 from '../../../image/clothes/clothes (50).jpg'
import clothe6 from '../../../image/clothes/clothes (62).jpg'



const ShoeOverview = {
    title:'Shoes Overview',
    Rtitle:'shoes',
    classes:'not',
    items:[
        {
            id:1,
            Item:shoe1,
            name:'Smart Nike',
   price:'$40.00'
           },
           {
            id:2,
            Item:shoe2,
            name:'Nike Heels',
            price:'$20.00'  
           },
           {
            id:3,
            Item:shoe3,
            name:'Nike Shoe',
            price:'$50.00'
           },
           {
            id:4,
            Item:shoe4,
            name:'Nike Shoe',
            price:'$90.00'  
           },
           {
            id:5,
            Item:shoe5,
            name:'Nike Air',
            price:'$120.00'

           },
           {
            id:6,
            Item:shoe6,
            name:'Nike Jordan',
            price:'$60.00'

           },
           
    ]
}
const ClothesOverview = {
    title:'Clothes Overview',
    Rtitle:'clothing',
    items:[
              {
            id:1,
            Item:clothe1,
            name:`Women's Sweater`,
            price:'$50.00'

           },
           {
            id:2,
            Item:clothe2,
            name:`Women's Jacket`,
            price:'$35.00'
  },
           {
            id:3,
            Item:clothe3,
            name:`Asian Wears`,
            price:'$150.00'
  },
           {
            id:4,
            Item:clothe4,
            name:`Asian Wears`,
            price:'$170.00'
        },
           {
            id:5,
            Item:clothe5,
            name:`Women's Sweater`,  
               price:'$40.00'
        },
           {
            id:6,
            Item:clothe6,
            name:`Women's Palazo`,  
            price:'$80.00'
        },
    ]
}
export {ShoeOverview,ClothesOverview};
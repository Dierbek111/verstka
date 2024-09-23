const ProductsData = [
    {
        img:'./img/ytetnetn.png',
        title:'3d Soft Curves',
        user:'⭐Nigga Surname',
        price:'100$'
    },

    {
        img:'./img/ytetnetn.png',
        title:'3d Soft Curves',
        user:'⭐Nigga Surname',
        price:'100$'
    },

    {
        img:'./img/ytetnetn.png',
        title:'3d Soft Curves',
        user:'⭐Nigga Surname',
        price:'100$'
    },

    {
        img:'./img/ytetnetn.png',
        title:'3d Soft Curves',
        user:'⭐Nigga Surname',
        price:'100$'
    },
]

const wrapper = document.querySelector('.live_wrapper1')
const cards = ProductsData.map(card => {
    return `
         <div class="live_card">
                    <img src=${card.img} alt="" class="live_card_img">
                    <div class="live_card-box">
                        <h3>${card.title}</h3>

                        <div>
                            <p>${card.user}</p>
                            <p>
                                Current Bid <br>
                                <b>0.85 ETH</b>
                            </p>
                        </div>
                    </div>
                </div>
    `
}).join('')
wrapper.innerHTML = cards


const ProductsData2 = [



    {
        img:'./img/ytetnetn.png',
        title:'3d Soft Curves',
        user:'⭐Nigga Surname',
        price:'100$'
    },


    {
        img:'./img/ytetnetn.png',
        title:'3d Soft Curves',
        user:'⭐Nigga Surname',
        price:'100$'
    },


    {
        img:'./img/ytetnetn.png',
        title:'3d Soft Curves',
        user:'⭐Nigga Surname',
        price:'100$'
    },


    {
        img:'./img/ytetnetn.png',
        title:'3d Soft Curves',
        user:'⭐Nigga Surname',
        price:'100$'
    },



    {
        img:'./img/ytetnetn.png',
        title:'3d Soft Curves',
        user:'⭐Nigga Surname',
        price:'100$'
    },




    {
        img:'./img/ytetnetn.png',
        title:'3d Soft Curves',
        user:'⭐Nigga Surname',
        price:'100$'
    },
    {
        img:'./img/ytetnetn.png',
        title:'3d Soft Curves',
        user:'⭐Nigga Surname',
        price:'100$'
    },
    
    {
        img:'./img/ytetnetn.png',
        title:'3d Soft Curves',
        user:'⭐Nigga Surname',
        price:'100$'
    },
]


const wrapper2 = document.querySelector('.live_wrapper2')
const cards2 = ProductsData2.map(card => {
    return `
         <div class="live_card">
                    <img src=${card.img} alt="" class="live_card_img">
                    <div class="live_card-box">
                        <h3>${card.title}</h3>

                        <div>
                            <p>${card.user}</p>
                            <p>
                                Current Bid <br>
                                <b>0.85 ETH</b>
                            </p>
                        </div>
                    </div>
                </div>
    `
}).join('')
wrapper2.innerHTML = cards2
const vue_002 = Vue.createApp({});

vue_002.component('item_vue_002', {
    template: 
    `<div class="item_vue_002">
        <div class="item_vue_002_title">
            <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 60 60" fill="none">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M16.9643 16.1905C16.9643 21.9764 21.6546 26.6666 27.4405 26.6666C33.2263 26.6666 37.9166 21.9764 37.9166 16.1905C37.9166 10.4047 33.2263 5.71416 27.4405 5.71416C21.6546 5.71416 16.9643 10.4047 16.9643 16.1905ZM27.4405 32.3809C18.4987 32.3809 11.25 25.1321 11.25 16.1905C11.25 7.24866 18.4987 -9.10759e-05 27.4405 -9.10759e-05C36.3822 -9.10759e-05 43.6309 7.24866 43.6309 16.1905C43.6309 25.1321 36.3822 32.3809 27.4405 32.3809Z" fill="white"/>
                <path fill-rule="evenodd" clip-rule="evenodd" d="M30.2977 29.5239V46.6667H24.5834V29.5239H30.2977Z" fill="white"/>
                <path d="M27.4405 44.7619C30.5964 44.7619 33.1548 47.3202 33.1548 50.4761C33.1548 53.632 30.5964 56.1904 27.4405 56.1904C24.2846 56.1904 21.7262 53.632 21.7262 50.4761C21.7262 47.3202 24.2846 44.7619 27.4405 44.7619Z" fill="white"/>
                <path fill-rule="evenodd" clip-rule="evenodd" d="M25.5356 50.4762C25.5356 51.5281 26.3884 52.3809 27.4404 52.3809C28.4924 52.3809 29.3452 51.5281 29.3452 50.4762C29.3452 49.4242 28.4924 48.5714 27.4404 48.5714C26.3884 48.5714 25.5356 49.4242 25.5356 50.4762ZM27.4404 60C22.1806 60 17.9166 55.7361 17.9166 50.4762C17.9166 45.2163 22.1806 40.9524 27.4404 40.9524C32.7003 40.9524 36.9642 45.2163 36.9642 50.4762C36.9642 55.7361 32.7003 60 27.4404 60Z" fill="white"/>
            </svg>
            <h2 class="white_reg">作品列表</h2>
            <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 60 60" fill="none">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M43.0357 43.8095C43.0357 38.0236 38.3454 33.3334 32.5595 33.3334C26.7737 33.3334 22.0834 38.0236 22.0834 43.8095C22.0834 49.5953 26.7737 54.2858 32.5595 54.2858C38.3454 54.2858 43.0357 49.5953 43.0357 43.8095ZM32.5595 27.6191C41.5013 27.6191 48.75 34.8679 48.75 43.8095C48.75 52.7513 41.5013 60.0001 32.5595 60.0001C23.6178 60.0001 16.3691 52.7513 16.3691 43.8095C16.3691 34.8679 23.6178 27.6191 32.5595 27.6191Z" fill="#02B57F"/>
                <path fill-rule="evenodd" clip-rule="evenodd" d="M29.7024 30.4761L29.7024 13.3333L35.4167 13.3333V30.4761H29.7024Z" fill="#02B57F"/>
                <path d="M32.5595 15.2381C29.4036 15.2381 26.8452 12.6798 26.8452 9.52386C26.8452 6.36797 29.4036 3.80957 32.5595 3.80957C35.7154 3.80957 38.2738 6.36797 38.2738 9.52386C38.2738 12.6798 35.7154 15.2381 32.5595 15.2381Z" fill="#02B57F"/>
                <path fill-rule="evenodd" clip-rule="evenodd" d="M34.4643 9.5238C34.4643 8.47185 33.6115 7.61906 32.5595 7.61906C31.5075 7.61906 30.6548 8.47185 30.6548 9.5238C30.6548 10.5758 31.5075 11.4286 32.5595 11.4286C33.6115 11.4286 34.4643 10.5758 34.4643 9.5238ZM32.5595 0C37.8194 0 42.0833 4.26394 42.0833 9.5238C42.0833 14.7837 37.8194 19.0476 32.5595 19.0476C27.2997 19.0476 23.0357 14.7837 23.0357 9.5238C23.0357 4.26394 27.2997 0 32.5595 0Z" fill="#02B57F"/>
            </svg>
        </div>
        <ul class="item_vue_002_menu">
            <li :class='{select_active: select_type_id === i.id}' v-for="i in select_menu" @click="switch_list(i.id)">
                <h4 class="Green_reg_24">{{i.menu_name}}</h4>
                <span class="white_reg_18">: {{i.select_desc}}</span>
            </li>
        </ul>
        <div class="item_vue_002_list">
            <a class="item_vue_002_item" v-for="item in select_list[select_type_id]" :key="item.canon_name" :href="item.canon_url">
                <img v-if="item.canon_img === ''" src='img/image_pic.png' :alt='item.canon_name' class="item_vue_002_img" >
                <img v-else :src='item.canon_img' :alt='item.canon_name' class="item_vue_002_img" >
                <ul class="item_vue_002_desc">
                    <li>
                        <h3 class="Green_reg_24">{{item.canon_name}}</h3>
                    </li>
                    <li>
                        <span class="Green_reg_18">需求：</span>
                        <p class="grey_reg_18">{{item.canon_desc}}</p>
                    </li>
                    <li>
                        <ul class="item_vue_002_tag_list">
                            <li class="white_reg_18" v-for='tag in item.canon_tag'>#{{tag}}</li>
                        </ul>
                    </li>
                </ul>
                <div class="item_vue_002_img_hover" :href="item.canon_url">
                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none">
                        <g clip-path="url(#clip0_125_34269)">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M8.09527 21.5179C10.9882 21.5179 13.3333 19.1727 13.3333 16.2798C13.3333 13.3868 10.9882 11.0417 8.09527 11.0417C5.20233 11.0417 2.85708 13.3868 2.85708 16.2798C2.85708 19.1727 5.20233 21.5179 8.09527 21.5179ZM16.1904 16.2798C16.1904 20.7506 12.5661 24.375 8.09527 24.375C3.62433 24.375 -4.55379e-05 20.7506 -4.55379e-05 16.2798C-4.55379e-05 11.8089 3.62433 8.18456 8.09527 8.18456C12.5661 8.18456 16.1904 11.8089 16.1904 16.2798Z" fill="white"/>
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M14.762 14.8511H23.3334V17.7083H14.762V14.8511Z" fill="white"/>
                        <path d="M22.3809 16.2798C22.3809 14.7019 23.6601 13.4227 25.2381 13.4227C26.816 13.4227 28.0952 14.7019 28.0952 16.2798C28.0952 17.8578 26.816 19.137 25.2381 19.137C23.6601 19.137 22.3809 17.8578 22.3809 16.2798Z" fill="white"/>
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M25.2381 17.2322C25.7641 17.2322 26.1905 16.8058 26.1905 16.2798C26.1905 15.7539 25.7641 15.3275 25.2381 15.3275C24.7121 15.3275 24.2857 15.7539 24.2857 16.2798C24.2857 16.8058 24.7121 17.2322 25.2381 17.2322ZM30 16.2798C30 18.9098 27.868 21.0417 25.2381 21.0417C22.6082 21.0417 20.4762 18.9098 20.4762 16.2798C20.4762 13.6499 22.6082 11.5179 25.2381 11.5179C27.868 11.5179 30 13.6499 30 16.2798Z" fill="white"/>
                        </g>
                        <defs>
                        <clipPath id="clip0_125_34269">
                            <rect width="30" height="30" fill="white" transform="matrix(-1 0 0 -1 30 30)"/>
                        </clipPath>
                        </defs>
                    </svg>
                    <h2 class="white_reg_24_bold">{{item.canon_name}}</h2>
                    <svg xmlns="http://www.w3.org/2000/svg" width="31" height="30" viewBox="0 0 31 30" fill="none">
                        <g clip-path="url(#clip0_125_34275)">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M22.5714 8.48214C19.6784 8.48214 17.3333 10.8273 17.3333 13.7202C17.3333 16.6132 19.6784 18.9583 22.5714 18.9583C25.4643 18.9583 27.8095 16.6132 27.8095 13.7202C27.8095 10.8273 25.4643 8.48214 22.5714 8.48214ZM14.4762 13.7202C14.4762 9.24936 18.1006 5.625 22.5714 5.625C27.0423 5.625 30.6667 9.24936 30.6667 13.7202C30.6667 18.1911 27.0423 21.8154 22.5714 21.8154C18.1006 21.8154 14.4762 18.1911 14.4762 13.7202Z" fill="white"/>
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M15.9047 15.1489H7.33325V12.2917H15.9047V15.1489Z" fill="white"/>
                        <path d="M8.2857 13.7202C8.2857 15.2981 7.00652 16.5773 5.42855 16.5773C3.85061 16.5773 2.57141 15.2981 2.57141 13.7202C2.57141 12.1422 3.85061 10.863 5.42855 10.863C7.00652 10.863 8.2857 12.1422 8.2857 13.7202Z" fill="white"/>
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M5.42853 12.7678C4.90255 12.7678 4.47616 13.1942 4.47616 13.7202C4.47616 14.2461 4.90255 14.6725 5.42853 14.6725C5.95452 14.6725 6.38091 14.2461 6.38091 13.7202C6.38091 13.1942 5.95452 12.7678 5.42853 12.7678ZM0.666626 13.7202C0.666626 11.0902 2.79859 8.95825 5.42853 8.95825C8.05846 8.95825 10.1904 11.0902 10.1904 13.7202C10.1904 16.3501 8.05846 18.4821 5.42853 18.4821C2.79859 18.4821 0.666626 16.3501 0.666626 13.7202Z" fill="white"/>
                        </g>
                        <defs>
                        <clipPath id="clip0_125_34275">
                            <rect width="30" height="30" fill="white" transform="translate(0.666626)"/>
                        </clipPath>
                        </defs>
                    </svg>
                </div>
            </a>
        </div>
    </div>`,

    data(){
        return{
            select_type_id:'ui_canon',
            select_menu:[
                {
                    id:'ui_canon',
                    menu_name:'UI設計',
                    select_desc:'畫面研究及規劃',
                    is_active:false,
                },
                {
                    id:'html_canon',
                    menu_name:'HTML作品',
                    select_desc:'畫面切版及CSS',
                    is_active:false,
                },
                {
                    id:'vue_canon',
                    menu_name:'vue.js作品',
                    select_desc:'簡易功能套版',
                    is_active:false,
                },
                {
                    id:'job_canon',
                    menu_name:'職場作品',
                    select_desc:'職場時期參與作品',
                    is_active:false,
                }
            ],
            select_list:{
                ui_canon:[
                    {
                        canon_name:'電商網站首頁',
                        canon_desc:'此網站需具備商品分類選單、BN、商品元件、會員中心、手機介面和置底功能選單等等',
                        canon_tag:['iopenmall','B2B2C商城'],
                        canon_img:'img/demo_img.jpg',
                        canon_url:'https://www.google.com/',
                    }
                ],
                html_canon:[
                    {
                        canon_name:'前端作品集',
                        canon_desc:'此網站需具備商品分類選單、BN、商品元件、會員中心、手機介面和置底功能選單等等',
                        canon_tag:['portfolio','UI+切版'],
                        canon_img:'img/demo_img.jpg',
                        canon_url:'https://www.google.com/',
                    }
                    
                ],
                vue_canon:[
                    {
                        canon_name:'作品列表',
                        canon_desc:'此網站需具備商品分類選單、BN、商品元件、會員中心、手機介面和置底功能選單等等',
                        canon_tag:['功能導向元件'],
                        canon_img:'img/demo_img.jpg',
                        canon_url:'https://www.google.com/',
                    },
                    {
                        canon_name:'Tag生成器',
                        canon_desc:'此網站需具備商品分類選單、BN、商品元件、會員中心、手機介面和置底功能選單等等',
                        canon_tag:['功能導向元件'],
                        canon_img:'img/demo_img.jpg',
                        canon_url:'https://www.google.com/',
                    },
                    {
                        canon_name:'Tag生成器',
                        canon_desc:'此網站需具備商品分類選單、BN、商品元件、會員中心、手機介面和置底功能選單等等',
                        canon_tag:['功能導向元件'],
                        canon_img:'',
                        canon_url:'https://www.google.com/',
                    }
                ],
                job_canon:[
                    {
                        canon_name:'iOPEN MALL 開發專案',
                        canon_desc:'B2B2C開發專案',
                        canon_tag:['功能規劃','開發測試'],
                        canon_img:'img/demo_img.jpg',
                        canon_url:'https://www.google.com/',
                    }
                    
                ],
            }
        };
    },

    methods:{
        switch_list(id){
            this.select_type_id = id;
        }
    }
});

vue_002.mount('#content_2');
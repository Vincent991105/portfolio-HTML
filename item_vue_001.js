const app = Vue.createApp({});

app.component('item_vue_001', {
    template: '#item_vue_001',
});

app.component('item_vue_002', {
    template: `
    <div class="item_vue_001">
        <div class="item_vue_001_add">
            <div class="item_vue_001_title">
                <img src="img/tag_svgrepo.com.svg" alt="tag_icon">
                <h2 class="font_grey_title">新增標籤</h2>
            </div>
            <div class="item_vue_001_note">
                <p class="white_reg_14">將下列資料填寫完畢後，可於左側查看已新增的標籤。</p>
            </div>
            <div class="item_vue_001_form">
                <div>
                    <label for="tag_name" class="grey_reg_16_bold"><span class="Green_reg_14">1 .</span>標籤名稱</label>
                    <input v-model="tag_name" name="tag_name" id="tag_name" placeholder="請協助輸入標籤內容,字數不可大於8字。" class="item_vue_001_textbox">
                </div>
                <div>
                    <label for="tag_url" class="grey_reg_16_bold"><span class="Green_reg_14">2 .</span>標籤連結</label>
                    <input v-model="tag_url" type="url" name="tag_url" id="tag_url" placeholder="請協助輸入連結(ex:http://........com)" class="item_vue_001_textbox">
                </div>
                <div>
                    <label for="tag_open" class="grey_reg_16_bold"><span class="Green_reg_14">3 .</span>點選連結後,另開一頁？</label>
                    <div class="radio_set">
                        <label class="radio_text grey_reg_16 custom-radio"><input v-model="tag_open" type="radio" name="tag_open" value="_blank"/> <span class="checkmark"></span>是</label>
                        <label class="radio_text grey_reg_16 custom-radio"><input v-model="tag_open" type="radio" name="tag_open" value="_self"/> <span class="checkmark"></span>否</label>
                    </div>
                </div>
                <div>
                    <label for="tag_display" class="grey_reg_16_bold"><span class="Green_reg_14">4 .</span>是否需要顯示‘#’標示？</label>
                    <div class="radio_set">
                        <label class="radio_text grey_reg_16 custom-radio"><input v-model="tag_display" type="radio" name="tag_display" value="yes" class="custom-radio"/> <span class="checkmark"></span>顯示</label>
                        <label class="radio_text grey_reg_16 custom-radio"><input v-model="tag_display" type="radio" name="tag_display" value="no" class="custom-radio"/> <span class="checkmark"></span>不顯示</label>
                    </div>
                </div>
                <div>
                    <label for="tag_color" class="grey_reg_16_bold"><span class="Green_reg_14">5 .</span>標籤顏色</label>
                    <input v-model="tag_color" type="text" name="tag_color" id="tag_color" placeholder="請協助輸入色票編號(#2D2D2D)" class="item_vue_001_textbox">
                </div>
                <button @click="save_tag" class="vue_js_1_submit_btn white_reg_18">送出</button>
            </div>
        </div>
        <div class="item_vue_001_display">
            <div class="item_vue_001_title">
                <img src="img/tag_svgrepo.com.svg" alt="tag_icon">
                <h2 class="font_grey_title">標籤展示</h2>
            </div>
            <div class="item_vue_001_tag_list">
                <ul>
                    <li v-for="i in tag_create">
                        <a :href="i.tag_url" :target="i.tag_open" class="item_vue_001_tag white_reg_16_bold" :style="{background: i.tag_color}">{{ i.tag_display }}{{ i.tag_name }}</a>
                    </li>
                </ul>
            </div>
        </div>
    </div>
    `,
    data() {
        return {
            tag_name: '',
            tag_url: '',
            tag_open: '_blank',
            tag_display: 'yes',
            tag_color: '',
            tag_create: [
            ],
        };
    },
    methods: {
        save_tag() {
            let display = this.tag_display === 'yes' ? '#' : '';
            const newTag = {
                tag_name: this.tag_name,
                tag_url: this.tag_url,
                tag_open: this.tag_open,
                tag_display: display,
                tag_color: '#' + this.tag_color,
            };
            if(this.tag_display === "yes"){
                this.tag_display = '#';
            }
            else{
                this.tag_display = '';       
            }
            this.tag_create.push(newTag);

            // 清空输入字段
            this.tag_name = '';
            this.tag_url = '';
            this.tag_open = '_blank';
            this.tag_display = 'yes';
            this.tag_color = '';
        },
    },
});

app.mount('#content');
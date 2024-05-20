var skill_list = [
{
    type : "Figma",
    result: "B級",
    skill:["基礎功能：","Auto-layout：","Prototype：","Component："],
    rank:[3,4,1,1],
    img:["img/profile.jpg","img/profile.jpg","img/profile.jpg","img/profile.jpg"]
},
{
    type : "Ai",
    result: "C級",
    skill:["基礎繪圖：","色彩運用：","佈局安排：","層級結構："],
    rank:[4,3,3,4],
    img:["img/profile.jpg","img/profile.jpg","img/profile.jpg","img/profile.jpg"]
}
]

function switch_catagory(evt, type) {
    var i,catagary_button,catagary_list;

    catagary_button=document.getElementsByClassName("item_002_catagory_button");
    for(i = 0 ; i<catagary_button.length ; i++){
        catagary_button[i].classList.remove("active");
    }

    evt.currentTarget.classList.add("active");
    //以上是控制按鈕，以下是控制內容

    catagary_list=document.getElementsByClassName("item_002_list");
    for(i=0 ; i<catagary_list.length ; i++){
        catagary_list[i].classList.remove("call");
    }

    document.getElementById(type).classList.add("call");

    //以下是重置點開的技能
    
    skill_active=document.getElementsByClassName("skill_active")
    for(i = 0 ; i<skill_active.length ; i++){
        skill_active[i].classList.remove("skill_active");
    }
    skill_desc=document.getElementsByClassName("item_002_skill_desc");
    for(i = 0 ; i<skill_desc.length ; i++){
        skill_desc[i].classList.remove("item_002_skill_desc");
    }

}

function switch_skill(evt,skill){
    var i,skill_active,skill_desc,skill_check;

    skill_active=document.getElementsByClassName("skill_active")
    for(i = 0 ; i<skill_active.length ; i++){
        skill_active[i].classList.remove("skill_active");
    }

    skill_desc=document.getElementsByClassName("item_002_skill_desc");
    for(i = 0 ; i<skill_desc.length ; i++){
        skill_desc[i].classList.remove("item_002_skill_desc");
    }

    skill_check=document.getElementsByClassName(evt.currentTarget);
    evt.currentTarget.classList.add("skill_active");
    document.getElementById(skill).classList.add("item_002_skill_desc");

    // 上面是按鈕控制,下面是資料控制 

    var testing = skill_list.filter(function(x){
        return x.type === skill
    }); //可以用回傳變數來呼叫他

    console.log(testing);
    console.log(testing[0].result);

    skill_result=document.getElementById("result");
    skill_result.innerHTML = testing[0].result;

    skill_rank=document.getElementById("test");
    skill_rank.innerHTML = "";

    for(i=0 ; i < testing[0].skill.length ; i++){
        var liElement = document.createElement("li");
        liElement.textContent = testing[0].skill[i];
        liElement.classList.add("main_color");

        for(x=0 ; x < testing[0].rank[i] ; x++){
            var spanElement = document.createElement("span");
            spanElement.classList.add("item_002_skill_point");
            liElement.appendChild(spanElement);
        }
        
        skill_rank.appendChild(liElement);
    };

    skill_image=document.getElementById("skill_image");
    skill_image.innerHTML = "";
    
    for(i=0 ; i < testing[0].img.length ; i++){
        var imgElement = document.createElement("img");
        imgElement.src = testing[0].img[i];
        console.log(imgElement)
        skill_image.appendChild(imgElement);
    }

}
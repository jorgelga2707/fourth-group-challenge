let opt_item = [];
let time = [];
let description_time = [];

// valores a insertar en el html
const text_li = ["Daily", "Weekly", "Monthly"];
const time_obj ={
    daily: ["5hrs", "1hr", "0hrs", "1hr", "1hr", "0hrs"],
    weekly: ["32hrs", "10hrs", "4hrs", "4hrs", "5hrs", "2hrs"],
    monthly: ["103hrs", "23hrs", "13hrs", "11hrs", "21hrs", "7hrs"]
};
const description_obj = {
    daily: ["Last Day - 7hrs",  "Last Day - 2hrs", "Last Day - 1hr",  "Last Day - 1hr",  "Last Day - 3hrs", "Last Day - 1hr"],
    weekly: ["Last Week - 36hrs", "Last Week - 8hrs", "Last Week - 7hrs", "Last Week - 7hrs", "Last Week - 7hrs", "Last Week - 2hrs"],
    monthly: ["Last Month - 128hrs", "Last Month - 29hrs", "Last Month - 19hrs", "Last Month - 18hrs", "Last Month - 23hrs", "Last Month - 11hrs"]
};

opt_item = document.getElementsByClassName("opt-item");
time = document.getElementsByClassName("time");
description_time = document.getElementsByClassName("descripcion-time");
let option_1 = document.getElementById("opt-item-1");
let option_2 = document.getElementById("opt-item-2");
let option_3 = document.getElementById("opt-item-3");

console.log(opt_item);
console.log(time);
console.log(description_time);
console.log(option_1);
console.log(option_2);
console.log(option_3);

let opt_item_arr = [option_1, option_2, option_3]

//array de opcion daily, weekly, monthly
const newopt_item = Array.from(opt_item);
newopt_item.forEach((opt_li_item, index)=>{
        console.log(opt_li_item.textContent, index);
    }
);

//array de tiempo para cada newopt_item
const newtime = Array.from(time);
newtime.forEach((time_item, index)=>{
        console.log(time_item.textContent, index);
    }
);

//array de descripcion de tiempo para cada newopt_item
const newdescription_time = Array.from(description_time);
newdescription_time.forEach((description_time_item, index)=>{
        console.log(description_time_item.textContent, index);
    }
);

console.log(opt_item_arr);

function cambiarTextoDaily(){
        if(opt_item_arr[0].textContent === text_li[0]){
            newtime.map((time_item, index) => {
                    time_item.textContent = time_obj.daily[index];
                }
            );
            newdescription_time.map((description_time_item, index) =>{
                    description_time_item.textContent = description_obj.daily[index];
                }
            );
        }
}

function cambiarTextoWeekly(){
    if(opt_item_arr[1].textContent === text_li[1]){
        newtime.map((time_item, index) => {
                time_item.textContent = time_obj.weekly[index];
            }
        );
        newdescription_time.map((description_time_item, index) =>{
                description_time_item.textContent = description_obj.weekly[index];
            }
        );
    }
}

function cambiarTextoMonthly(){
    if(opt_item_arr[2].textContent === text_li[2]){
        newtime.map((time_item, index) => {
                time_item.textContent = time_obj.monthly[index];
            }
        );
        newdescription_time.map((description_time_item, index) =>{
                description_time_item.textContent = description_obj.monthly[index];
            }
        );
    }
}

option_1.onclick = cambiarTextoDaily;
option_2.onclick = cambiarTextoWeekly;
option_3.onclick = cambiarTextoMonthly;
window.onload = function () {
    if (localStorage.getItem('data')) {
        let obj = JSON.parse(localStorage.getItem('data'))
        document.querySelector(".mileage_num").innerHTML = obj.kilometers.toFixed(2)
    }else {
        document.querySelector(".mileage_num").innerHTML = kilometers
    }
}
let mileage = document.querySelector(".mileage")
let map_top_right = document.querySelector(".map_top_right")
mileage.onclick = function () {
    window.location.href = 'days.html'
}
map_top_right.onclick = function () {
    window.location.href = 'map.html'
}

// 开始暂停按钮
let start_img = document.querySelector(".start_img")
let stop_img = document.querySelector(".stop_img")
let start_stop_btn = document.querySelector(".start_stop_btn")
let time_box1 = document.querySelector(".time_box1")
let time_box2 = document.querySelector(".time_box2")
let time_box3 = document.querySelector(".time_box3")
let list2_top = document.querySelector(".list2_top")
let list3_top = document.querySelector(".list3_top")
let list4_top = document.querySelector(".list4_top")
let list5_top = document.querySelector(".list5_top")
let save_btn = document.querySelector(".save_btn")
let ski_kl = document.querySelector(".ski_kl")
let btnState = 'start'

// 累计用时参数
let timeHour = 0;
let timeMinute = 0;
let timeSecond = 0;
let timerTime;
let timerTime2;
let timerTime3;
let kilometers = 0.00
// 定义储存参数
let timeObj = {
    storageTimeHour: 0,
    storageTimeMinute: 0,
    storageTimeSecond: 0,
    SkiingFrequency: 0,
    kilometers: 0
}


start_stop_btn.onclick = function () {
    if (btnState == 'start') {
        start_img.style.display = 'none'
        stop_img.style.display = 'block'
        start_stop_btn.style.background = '#ED1312'
        btnState = 'stop'
        timerTime = setInterval(function () {
            timeSecond = timeSecond + 1
            if (timeSecond >= 60) {
                timeMinute = timeMinute + 1
                timeSecond = 0
            }
            if (timeMinute >= 60) {
                timeHour = timeHour + 1
                timeMinute = 0
            }
            time_box1.innerHTML = (timeHour.toString()).padStart(2, '0')
            time_box2.innerHTML = (timeMinute.toString()).padStart(2, '0')
            time_box3.innerHTML = (timeSecond.toString()).padStart(2, '0')
        }, 1000)
        timerTime2 = setInterval(function () {
            list2_top.innerHTML = getRandom()
            list3_top.innerHTML = getRandom()
            list5_top.innerHTML = getRandom()
        }, 3000)
        timerTime3 = setInterval(function () {
            kilometers = kilometers + 0.01
            ski_kl.innerHTML = kilometers.toFixed(2)
        },300)
        save_btn.style.display = 'none'
    } else {
        start_img.style.display = 'block'
        stop_img.style.display = 'none'
        start_stop_btn.style.background = '#fff'
        save_btn.style.display = 'flex'
        btnState = 'start'
        clearInterval(timerTime)
        clearInterval(timerTime2)
        clearInterval(timerTime3)
        timeObj.storageTimeHour = timeHour
        timeObj.storageTimeMinute = timeMinute
        timeObj.storageTimeSecond = timeSecond
        timeObj.kilometers = kilometers
        timeObj.SkiingFrequency = timeObj.SkiingFrequency + 1
        list4_top.innerHTML = timeObj.SkiingFrequency
    }
}

// 获取随机值
function getRandom() {
    return Math.round(Math.random() * 100)
}

// 点击关闭按钮
let close_btn = document.querySelector(".close_btn")
close_btn.onclick = function () {
    document.querySelector(".ski_con").style.top='100%'

    start_img.style.display = 'block'
    stop_img.style.display = 'none'
    start_stop_btn.style.background = '#fff'
    save_btn.style.display = 'flex'
    btnState = 'start'
    clearInterval(timerTime)
    clearInterval(timerTime2)
    clearInterval(timerTime3)
    timeObj.storageTimeHour = timeHour
    timeObj.storageTimeMinute = timeMinute
    timeObj.storageTimeSecond = timeSecond
    timeObj.kilometers = kilometers
    timeObj.SkiingFrequency = timeObj.SkiingFrequency + 1
    list4_top.innerHTML = timeObj.SkiingFrequency
    if (localStorage.getItem('data')) {
        let obj = JSON.parse(localStorage.getItem('data'))
        document.querySelector(".mileage_num").innerHTML = obj.kilometers.toFixed(2)
    }else {
        document.querySelector(".mileage_num").innerHTML = kilometers
    }
}

// 点击保存
save_btn.onclick = function () {
    if (localStorage.getItem('data')) {
        let obj = JSON.parse(localStorage.getItem('data'))
        timeObj.storageTimeHour = timeObj.storageTimeHour + obj.storageTimeHour
        timeObj.storageTimeMinute = timeObj.storageTimeMinute + obj.storageTimeMinute
        timeObj.storageTimeSecond = timeObj.storageTimeSecond + obj.storageTimeSecond
        timeObj.SkiingFrequency = timeObj.SkiingFrequency + obj.SkiingFrequency
        timeObj.kilometers = timeObj.kilometers + obj.kilometers
        localStorage.setItem('data', JSON.stringify(timeObj))
    } else {
        localStorage.setItem('data', JSON.stringify(timeObj))
    }
    timeHour = 0;
    timeMinute = 0;
    timeSecond = 0;
    kilometers = 0.00;
    timeObj.SkiingFrequency = 0;
    time_box1.innerHTML = (timeHour.toString()).padStart(2, '0')
    time_box2.innerHTML = (timeMinute.toString()).padStart(2, '0')
    time_box3.innerHTML = (timeSecond.toString()).padStart(2, '0')
    ski_kl.innerHTML = kilometers.toFixed(2)
}
let go = document.querySelector(".go")
let go2 = document.querySelector(".go2")
go.onclick = function () {
    document.querySelector(".ski_con").style.top='0'
}
go2.onclick = function () {
    document.querySelector(".ski_con").style.top='0'
}


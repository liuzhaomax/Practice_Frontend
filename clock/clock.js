/****************************************************************************
 * @copyright   LIU Zhao
 * @authors     LIU Zhao (liuzhaomax@163.com)
 * @date        2021/4/30 2:54
 * @version     v1.0
 * @filename    clock.js
 * @description
 ***************************************************************************/

let delay = 10000
let container = document.getElementsByClassName("container")[0]
let datetime = new Date()
let year = datetime.getFullYear()
let month = datetime.getMonth() + 1
let date = datetime.getDate()
let day = datetime.getDay()
let hour = datetime.getHours()
let minute = datetime.getMinutes()
let second = datetime.getSeconds()
// all elements of date and time
let yearArr = [year]
let monthArr = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
let dateArr = getDateArr()
let dayArr = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]
let hourArr = generateSequence(24, "time")
let miseArr = generateSequence(60, "time")
// including delay
if (second + delay/1000 >= 60) {
    if (minute + 1 >= 60) {
        if (hour + 1 >= 24) {
            if (date + 1 > getLastDate()) {
                if (month + 1 > 12) {
                    year = year + 1
                }
                month = (month + 1) % 12
                dateArr = getDateArr()
            }
            day = (day + 1) % dayArr.length
            date = (date + 1) % dateArr.length
        }
        hour = (hour + 1) % 24
    }
    minute = (minute + 1) % 60
}
second = (second + delay/1000) % 60
// append to DOM
container.appendChild(appendUl(yearArr, "year"))
container.appendChild(appendUl(monthArr, "month"))
container.appendChild(appendUl(dateArr, "date"))
container.appendChild(appendUl(dayArr, "day"))
container.appendChild(appendUl(hourArr, "hour"))
container.appendChild(appendUl(miseArr, "minute"))
container.appendChild(appendUl(miseArr, "second"))
// Initialisation
setLiRotationDegree(monthArr, "month", 100)
setLiRotationDegree(dateArr, "date", 160)
setLiRotationDegree(dayArr, "day", 210)
setLiRotationDegree(hourArr, "hour", 270)
setLiRotationDegree(miseArr, "minute", 320)
setLiRotationDegree(miseArr, "second", 370)
// onload event
window.onload = function (){
    let promise = new Promise(function(resolve, reject){
        setOpacity(yearArr, "year", 100)
        resolve()
    })
    promise.then(async () => {
        await sleep(200)
        setOpacity(monthArr, "month", 100)
        await sleep(1200)
        setOpacity(dateArr, "date", 50)
        await sleep(1500)
        setOpacity(dayArr, "day", 100)
        await sleep(700)
        setOpacity(hourArr, "hour", 40)
        await sleep(1000)
        setOpacity(miseArr, "minute", 20)
        await sleep(1200)
        setOpacity(miseArr, "second",20)
        await sleep(1200)
    })
    promise.then(async () => {
        await sleep(7500)
        // set rotation degree anim
        setColor(yearArr, "year", year)
        setUlRotationDegree(monthArr, "month", monthArr[month-1])
        setUlRotationDegree(dateArr, "date", date <= 9 ? "0" + date : date.toString())
        setUlRotationDegree(dayArr, "day", dayArr[day])
        setUlRotationDegree(hourArr, "hour", hour <= 9 ? "0" + hour : hour.toString())
        setUlRotationDegree(miseArr, "minute", minute <= 9 ? "0" + minute : minute.toString())
        setUlRotationDegree(miseArr, "second", second <= 9 ? "0" + second : second.toString())
    })
    promise.then(async () => {
        await sleep(delay)
        while (true) {
            textSecond = tic(miseArr, "second")
            toggleColor(miseArr, "second", second)
            if (textSecond === 59) {
                textMinute = tic(miseArr, "minute")
                toggleColor(miseArr, "minute", minute)
                if (textMinute === 59) {
                    textHour = tic(hourArr, "hour")
                    toggleColor(hourArr, "hour", hour)
                    if (textHour === 23) {
                        textDay = tic(dayArr, "day")
                        toggleColor(dayArr, "day", day)
                        textDate = tic(dateArr, "date")
                        toggleColor(dateArr, "date", date)
                        if (textDate === getLastDate() - 1) {
                            textMonth = tic(monthArr, "month")
                            toggleColor(monthArr, "month", month)
                            if (textMonth === 11) {
                                year = year + 1
                                yearArr = [year]
                            }
                            month = (month + 1) % 12
                            // update dates number
                            dateArr = getDateArr()
                            setUlRotationDegree(dateArr, "date", date <= 9 ? "0" + date : date.toString())
                        }
                        date = (date + 1) % getLastDate()
                        day = (day + 1) % 7
                    }
                    hour = (hour + 1) % 24
                }
                minute = (minute + 1) % 60
            }
            second = (second + 1) % 60
            await sleep(1000)
        }
    })
}


function getLastDate() {
    let lastDate = new Date(year, month, 0)
    return lastDate.getDate()
}

function generateSequence(lastNum, type) {
    let array = []
    let element = ""
    switch (type) {
        case "date":
            for (let i = 0; i < lastNum; i++) {
                if (i < 9) {
                    element = "0" + (i + 1)
                } else {
                    element = "" + (i + 1)
                }
                array.push(element)
            }
            break
        case "time":
            for (let i = 0; i < lastNum; i++) {
                if (i <= 9) {
                    element = "0" + i
                } else {
                    element = "" + i
                }
                array.push(element)
            }
            break
    }
    return array
}

function getDateArr() {
    let lastDate = getLastDate()
    return generateSequence(lastDate, "date")
}

function appendUl(array, className) {
    let nodeUl = document.createElement("ul")
    nodeUl.className = className
    let nodeLi
    let nodeText
    for (let i = 0; i < array.length; i++) {
        nodeLi = document.createElement("li")
        nodeText = document.createTextNode(array[i])
        nodeLi.appendChild(nodeText)
        nodeUl.appendChild(nodeLi)
    }
    return nodeUl
}

function setLiRotationDegree(array, className, displacementX) {
    let nodes = document.getElementsByClassName(className)[0].getElementsByTagName("li")
    for (let i = 0; i < array.length; i++) {
        nodes[i].setAttribute("style",
            "transform: rotate(" + (-i) * 360 / array.length +"deg) translateX(" + displacementX + "px);")
    }
}

function setColor(array, className, value) {
    let nodes = document.getElementsByClassName(className)[0].getElementsByTagName("li")
    for (let i = 0; i < array.length; i++) {
        if (value === array[i]) {
            nodes[i].style.color = "red"
            break
        }
    }
}

function setUlRotationDegree(array, className, value) {
    let degree
    let displacementX
    let nodes = document.getElementsByClassName(className)[0].getElementsByTagName("li")
    for (let i = 0; i < array.length; i++) {
        if (value === array[i]) {
            degree = Number(nodes[i].style.transform.split("deg")[0].split("(")[1])
            displacementX = Number(nodes[i].style.transform.split("translateX(")[1].split("px")[0])
            break
        }
    }
    for (let i = 0; i < array.length; i++) {
        nodes[i].setAttribute("style",
            "opacity:1;transform: rotate(" + ((-i) * 360 / array.length - degree) +"deg) translateX(" + displacementX + "px);")
        setColor(array, className, value)
    }
}

async function setOpacity(array, className, timeStep) {
    let nodes = document.getElementsByClassName(className)[0].getElementsByTagName("li")
    for (let i = 0; i < array.length; i++) {
        await sleep(timeStep)
        nodes[i].style.opacity = 1
    }
}

function sleep(ms) {
    return new Promise(function(resolve, reject) {
        setTimeout(resolve, ms);
    })
}

function tic(array, className) {
    let degree
    let displacementX
    let text
    let nodes = document.getElementsByClassName(className)[0].getElementsByTagName("li")
    displacementX = Number(nodes[0].style.transform.split("translateX(")[1].split("px")[0])
    for (let i = 0; i < array.length; i++) {
        degree = Number(nodes[i].style.transform.split("deg")[0].split("(")[1])
        if (degree % 360 === 0) {
            text = nodes[i].innerText
        }
        nodes[i].setAttribute("style",
            "opacity:1;" +
            "transition: transform 1s;" +
            "transform: rotate(" + (degree + 360 / array.length) +"deg) translateX(" + displacementX + "px);")
    }
    return Number(text)
}


function toggleColor(array, className, index) {
    let nodes = document.getElementsByClassName(className)[0].getElementsByTagName("li")
    for (let i = 0; i < array.length; i++) {
        if (i === (index+1) % 60) {
            nodes[i].style.color = "red"
        } else {
            nodes[i].style.color = "white"
        }
    }
}

var data = {
    div2: {
        bool: false,
        resx: 0,
        resy: 0
    },
    div3: {
        bool: false,
        resx: 0,
        resy: 0
    },
    div4: {
        bool: false,
        resx: 0,
        resy: 0
    },
    div5: {
        bool: false,
        resx: 0,
        resy: 0
    }
};
let res = JSON.parse(localStorage.getItem("data1"));

if (!res) {
    let data1 = JSON.stringify(data);
    localStorage.setItem("data1", data1);
} else {

}
if (res.div2.bool) {
    div2.style.display = "block";
    cdiv2.style.opacity = 1;
} else {
    div2.style.display = "none";
    cdiv2.style.opacity = 0.3;
}
if (res.div3.bool) {
    div3.style.display = "block";
    cdiv3.style.opacity = 1;
} else {
    div3.style.display = "none";
    cdiv3.style.opacity = 0.3;
}

if (res.div4.bool) {
    div4.style.display = "block";
    cdiv4.style.opacity = 1;
} else {
    div4.style.display = "none";
    cdiv4.style.opacity = 0.3;
}

if (res.div5.bool) {
    div5.style.display = "block";
    cdiv3.style.opacity = 1;
} else {
    div5.style.display = "none";
    cdiv3.style.opacity = 0.3;
}


cdiv2.onclick = function() {
    if (data.div2.bool) {
        div2.style.display = "block"
        cdiv2.style.opacity = 1;
        data.div2.bool = false;
        let data1 = JSON.stringify(data);
        localStorage.setItem("data1", data1);
    } else {
        div2.style.display = "none"
        cdiv2.style.opacity = 0.3;
        data.div2.bool = true;
        let data1 = JSON.stringify(data);
        localStorage.setItem("data1", data1);
    }

}


cdiv3.onclick = function() {
    if (data.div3.bool) {
        div3.style.display = "block"
        cdiv3.style.opacity = 1;
        data.div3.bool = false;
        let data1 = JSON.stringify(data);
        localStorage.setItem("data1", data1);
    } else {
        div3.style.display = "none"
        cdiv3.style.opacity = 0.3;
        data.div3.bool = true;
        let data1 = JSON.stringify(data);
        localStorage.setItem("data1", data1);
    }
}


cdiv4.onclick = function() {
    if (data.div4.bool) {
        div4.style.display = "block"
        cdiv4.style.opacity = 1;
        data.div4.bool = false;
        let data1 = JSON.stringify(data);
        localStorage.setItem("data1", data1);
    } else {
        div4.style.display = "none"
        cdiv4.style.opacity = 0.3;
        data.div4.bool = true;
        let data1 = JSON.stringify(data);
        localStorage.setItem("data1", data1);
    }
}
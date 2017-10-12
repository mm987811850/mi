// banner
{
    let dians= document.querySelectorAll(".dianbox li");
    let imgs= document.querySelectorAll(".bannerbox li");

    dians.forEach(function (ele,index) {
        ele.onclick=function () {
            for(let i=0;i<dians.length;i++){
                dians[i].classList.remove("active");
                imgs[i].classList.remove("active");
            }
            ele.classList.add("active");
            imgs[index].classList.add("active");
            now=index;
        }

    });
    let now=0;
    let st =window.setInterval(fn,2000);
    function fn(dir="r") {
        if(dir==="r"){
            now++;
            if(now===dians.length){
            now=0;
            }
        }else if(dir==="l"){
            now--;
            if(now===-1){
                now=dians.length-1;
            }
        }
        for(let i=0;i<dians.length;i++){
            dians[i].classList.remove("active");
            imgs[i].classList.remove("active");
        }
        dians[now].classList.add("active");
        imgs[now].classList.add("active");
    }
//    clearInterval() 清除某个时间函数
    let bannerObj=document.querySelector(".banner");
    bannerObj.onmouseover=function () {
        clearInterval(st);

    };
    bannerObj.onmouseout=function () {
        st=setInterval(fn,2000);
    };
    let nextObj=document.querySelector("#next");
    let prevObj=document.querySelector("#prev");
    nextObj.onclick=function () {
        fn();
    }
    prevObj.onclick=function () {
        fn("l");
    }
}
//明星单品滑动
{
    let num = 1;
    let dpPrevObj = document.querySelector(".danpin_jiantou_zuo");
    let dpNextObj = document.querySelector(".danpin_jiantou_you");
    let dpContainer = document.querySelector(".danpinBOX");
    let dpSt = setInterval(dpFn, 2000);

    function dpArrowOut() {
        dpSt = setInterval(dpFn, 2000);
    }

    function dpArrowIn() {
        clearInterval(dpSt);
    }

    function dpNext() {
        dpNextObj.classList.remove("selected");
        dpPrevObj.classList.add("selected");
        dpContainer.style.marginLeft = "-1226px";
        num = 0;
    }

    function dpPrev() {
        dpNextObj.classList.add("selected");
        dpPrevObj.classList.remove("selected");
        dpContainer.style.marginLeft = "0";
        num = 1;
    }

    function dpFn() {
        num++;
        if (num % 2 === 0) {
            dpNext();
        } else {
            dpPrev();
        }
    };
    dpNextObj.onclick = dpNext;
    dpNextObj.onmouseover = dpArrowIn;
    dpNextObj.onmouseout = dpArrowOut;
    dpPrevObj.onclick = dpPrev;
    dpPrevObj.onmouseover = dpArrowIn;
    dpPrevObj.onmouseout = dpArrowOut;
}
// 商品分类选项卡
{
    let fenlei = document.querySelectorAll(".dapei .neikuan");

    function xuanxiangka(val) {
        let fenleiTop = val.querySelectorAll(".zhinenyou a");
        let fenleiBot = val.querySelectorAll(".zhinentuyou");
        fenleiTop.forEach(function (ele, index) {
            ele.onmouseover = function () {
                for (let i = 0; i < fenleiTop.length; i++) {
                    fenleiTop[i].classList.remove("active");
                    fenleiBot[i].style.display = "none";
                }
                ele.classList.add("active");
                fenleiBot[index].style.display = "block";
            }
        });
    }

    for (let i = 0; i < fenlei.length; i++) {
        xuanxiangka(fenlei[i]);
    }
}
// 内容滑动
{
    let neirongs = document.querySelectorAll(".stargaobox");

    function neirongFn(par) {
        let dots = par.querySelectorAll(".neirongBox2_1_lunbo");
        let container = par.querySelector("#neirong .container ");
        let nrArrowPrev = par.querySelector(".neirongBox2_1_jiantouleft");
        let nrArrowNext = par.querySelector(".neirongBox2_1_jiantouright");
        let num = 0;

        function nrFn(ele, index) {
            for (let i = 0; i < dots.length; i++) {
                dots[i].classList.remove("selected");
            }
            ele.classList.add("selected");
            container.style.marginLeft = -296 * index + "px";
        }

        function nrArrow(dir = "r") {
            if (dir === "r") {
                num++;
                if (num === dots.length) {
                    num = dots.length - 1;
                }
            } else {
                num--;
                if (num === -1) {
                    num = 0;
                }
            }
            for (let i = 0; i < dots.length; i++) {
                dots[i].classList.remove("selected");
            }
            dots[num].classList.add("selected");
            container.style.marginLeft = -296 * num + "px";
        }

        dots.forEach(function (ele, index) {
            ele.onclick = function () {
                nrFn(ele, index);
                num = index;
            };
        });
        nrArrowNext.onclick = function () {
            nrArrow();
        };
        nrArrowPrev.onclick = function () {
            nrArrow("l");
        }


    }

    for (let i = 0; i < neirongs.length; i++) {
        neirongFn(neirongs[i]);
        // console.log(neirongs[i])
    }
}
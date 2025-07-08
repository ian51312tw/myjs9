
// 排序前
let sortBefore = document.getElementById("sortBefore");
// 排序後
let sortAfter = document.getElementById("sortAfter");
// 第二區號碼
let secNo = document.getElementById("secNo");

// 威力彩
function lott1() {
    // 建立存放號碼的空陣列
    let lott = [];
    // 第一個號碼
    while (1) {
        if (lott.length == 6) {
            break;
        }
        let lottNo = Math.floor(Math.random() * 38) + 1;
        // 檢查是否重複
        if (lott.includes(lottNo) == false) {
            lott.push(lottNo);
        }
    }
    sortBefore.textContent = "排序前號碼：" + lott;
    lott.sort((a, b) => {
        return a - b;
    })
    sortAfter.textContent = "排序後號碼：" + lott;
    // 第二區：1-8取一個
    secNo.textContent = "第二區號碼：" + (Math.floor(Math.random() * 8) + 1);
}
//--------------------------------------------------------------------------
// 大樂透
function lott2() {
    // 第一區：1-49取六個
    // 建立存放號碼的空陣列
    let lott = [];

    // while

    while (1) {
        // 檢查是否已有六個號碼
        if (lott.length == 7) {
            break;
        }
        // 亂數取號碼
        let lottNo = Math.floor(Math.random() * 49) + 1;
        // 檢查是否重複
        if (lott.includes(lottNo) == false) { // 沒有重複的話
            lott.push(lottNo);  // 增加號碼到陣列中
        }
    }
    // 取出陣列最後一個值後，並移除
    secNo.textContent = "特別號：" + lott.pop();
    // 未排序
    sortBefore.textContent = "排序前號碼：" + lott;
    // 排序
    lott.sort((a, b) => {
        return a - b;
    })
    sortAfter.textContent = "排序後號碼：" + lott;
}
//----------------------------------------------------------------------------
//今彩
function lott3() {
    let lott = [];

    while (1) {
        if (lott.length == 5) {
            break;
        }
        let lottNo = Math.floor(Math.random() * 39) + 1;

        if(lott.includes(lottNo)==false){
            lott.push(lottNo);
        }
    }

    sortBefore.textContent="排序前號碼："+lott;
    lott.sort((a,b)=>{
        return a-b;
    })
    sortAfter.textContent="排序後號碼："+lott;

    secNo.textContent="";

}

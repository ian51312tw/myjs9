
// 排序前
let sortBefore = document.getElementById("sortBefore");
// 排序後
let sortAfter = document.getElementById("sortAfter");
// 第二區號碼
let secNo = document.getElementById("secNo");

function getlott(tp, firstMax, firstNum, secMax) {    /* 原函式名稱為lott，但會跟陣列名稱衝突，因此需修改 */
    // 建立存放號碼的空陣列
    let lott = [];
    if (tp === 2) {
        firstNum = firstNum + 1;
    }
    // while
    while (1) {
        // 第一區：1-38取6個
        // 檢查是已經有6個號碼
        if (lott.length == firstNum) {
            break;
        }
        // 亂數取號碼
        let lottNo = Math.floor(Math.random() * firstMax) + 1;
        // 檢查是否重覆
        if (!lott.includes(lottNo)) {   // 沒有重覆
            lott.push(lottNo);  // 增加號碼到陣列中            
        }
    }

    // 第二區：
    if(tp===1){
        // 威力彩
        secNo.textContent = "第二區號碼:" + (Math.floor(Math.random() * secMax) + 1);
    } else if(tp===2){
        secNo.textContent = "特別號：" + lott.pop();
    }else if(tp===3){
        secNo.textContent="";
    }
    // 未排序
    sortBefore.textContent = "排序前號碼:" + lott;
    // 排序
    lott.sort((a, b) => {
        return a - b;
    })
    sortAfter.textContent = "排序後號碼:" + lott;
    // 第二區：1-8取1個
    console.log(lott);
} 

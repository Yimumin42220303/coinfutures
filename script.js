function calculateTrade() {
    var entryPrice = parseFloat(document.getElementById('entryPrice').value);
    var stopLossPrice = parseFloat(document.getElementById('stopLossPrice').value);
    var seedAmount = parseFloat(document.getElementById('seedAmount').value);

    var riskAmount = seedAmount * 0.05;
    var priceDifference = entryPrice - stopLossPrice;
    var percentLoss = priceDifference / entryPrice;
    var orderAmount = Math.abs(riskAmount / percentLoss);
    var breakevenLine = entryPrice + (entryPrice - stopLossPrice) * 1.5;

    document.getElementById('result').innerHTML = `주문 값: ${orderAmount.toFixed(2)} USDT<br>반익절라인@손익비1:5(USDT): ${breakevenLine.toFixed(2)}`;
    document.getElementById('copyOrderAmount').style.display = 'block';
    document.getElementById('copyBreakevenLine').style.display = 'block';
}

function copyToClipboard(elementId) {
    var text = '';
    if (elementId === 'orderAmount') {
        text = document.getElementById('result').innerText.split('USDT')[0].split(': ')[1].trim() + ' USDT';
    } else if (elementId === 'breakevenLine') {
        text = document.getElementById('result').innerText.split('USDT')[1].split(': ')[1].trim() + ' USDT';
    }
    navigator.clipboard.writeText(text)
        .then(() => {
            showCopyConfirm();
        })
        .catch(err => {
            console.error('클립보드 복사에 실패하였습니다.', err);
        });
}

function showCopyConfirm() {
    let confirmDiv = document.getElementById('copyConfirm');
    confirmDiv.style.display = 'block';
    setTimeout(() => {
        confirmDiv.style.display = 'none';
    }, 2000);
}

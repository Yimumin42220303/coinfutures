function calculateTrade() {
    var entryPrice = parseFloat(document.getElementById('entryPrice').value);
    var stopLossPrice = parseFloat(document.getElementById('stopLossPrice').value);
    var seedAmount = parseFloat(document.getElementById('seedAmount').value);

    var riskAmount = seedAmount * 0.05;
    var priceDifference = entryPrice - stopLossPrice;
    var percentLoss = priceDifference / entryPrice;
    var orderAmount = riskAmount / percentLoss;

    document.getElementById('result').innerText = `${orderAmount.toFixed(2)} USDT`;
}

// 클립보드로 복사 기능
function copyToClipboard() {
    var content = document.getElementById('result').innerText;
    navigator.clipboard.writeText(content)
        .then(() => {
            alert('클립보드에 복사되었습니다.');
        })
        .catch(err => {
            console.error('클립보드 복사에 실패하였습니다.', err);
        });
}

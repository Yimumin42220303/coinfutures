function calculateTrade() {
    var entryPrice = parseFloat(document.getElementById('entryPrice').value);
    var stopLossPrice = parseFloat(document.getElementById('stopLossPrice').value);
    var seedAmount = parseFloat(document.getElementById('seedAmount').value);

    var riskAmount = seedAmount * 0.05; // 시드의 5%
    var priceDifference = entryPrice - stopLossPrice;
    var percentLoss = priceDifference / entryPrice;
    var orderAmount = Math.abs(riskAmount / percentLoss); // 주문량 (USDT)의 절대값

    document.getElementById('result').innerHTML = `
        주문량: ${orderAmount.toFixed(2)} USDT
    `;
}

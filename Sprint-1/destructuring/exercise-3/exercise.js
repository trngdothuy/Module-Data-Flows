let order = [
  { itemName: "Hot cakes", quantity: 1, unitPricePence: 232 },
  { itemName: "Apple Pie", quantity: 2, unitPricePence: 139 },
  { itemName: "Egg McMuffin", quantity: 1, unitPricePence: 280 },
  { itemName: "Sausage McMuffin", quantity: 1, unitPricePence: 300 },
  { itemName: "Hot Coffee", quantity: 2, unitPricePence: 100 },
  { itemName: "Hash Brown", quantity: 4, unitPricePence: 40 },
];

function printReceipt(arr) {
  let total = 0
  let table = []
  for (let item of arr) {
    total += item.unitPricePence * item.quantity / 100
    table.push({
      "QTY": item.quantity,
      "ITEM": item.itemName,
      "TOTAL":  (item.unitPricePence * item.quantity / 100).toFixed(2),
    })
  }
console.table(table)
console.log("Total: " + total.toFixed(2))
}

printReceipt(order)


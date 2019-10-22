function populateRecords(input) {
    // console.log("Input: ", input);
    const table = $("<div>").addClass("table");
    const recordHeader = $("<div>").addClass("transactionRecord");
    const typeHeader = $("<div>", {
        class: 'transactionType',
        text: 'TYPE'
    });
    const sourceHeader = $("<div>", {
        class: 'transactionLocation',
        text: 'SOURCE'
    });
    const amountHeader = $("<div>", {
        class: "transactionAmount",
        text: "AMOUNT"
    })
    recordHeader.append(typeHeader, sourceHeader, amountHeader);
    table.append(recordHeader);
    $('#testArea').append(table);
    $('#testArea *').addClass('testOutput');

    let charge = 0;
    let cashAdvance = 0;
    let newObj = {};

    for (var i = 0; i < input.length; i++) {
        let amount = parseFloat(input[i].amount)
        if (input[i].type === "charge") {
            charge += amount;
        } else if (input[i].type === "cash advance") {
            cashAdvance += amount;
        }

        const row = $("<div class='transactionRecord'>");
        const type = $("<div>", {
            class: "transactionType",
            text: input[i].type
        });
        const source = $("<div>", {
            class: "transactionLocation",
            text: input[i].source
        });
        const transAmount = $("<div>", {
            class: "transactionAmount",
            text: input[i].amount
        });

        row.append(type, source, transAmount);
        table.append(row);
    }
    newObj["charge"] = charge;
    newObj["cash advance"] = cashAdvance;
    return newObj;
}

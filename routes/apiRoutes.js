const tableData = require("../data/tableData");
const waitlistData = require("../data/waitinglistData");

module.exports = (app) => {

app.get("/api.tables", (req, res) => {
    res.json(tableData);
});

app.get("api.waitlistData", (req, res) => {
    res.json(waitlistData);
})

app.post("/api/tables", (req, res) => {
    if (tableData.length < 5) {
        tableData.push(req.body);
        res.json(true);
    }
    else {
        waitlistData.push(req.body);
        res.json(false);
    }
});

app.post("/api/clear", (req, res) => {
    tableData.length = 0;
    waitlistData.length = 0;
    res.json({ ok: true });
});
};

const express = require("express");
const app = express();
const port = 8000;

app.get("/", (req, res) => {
    res.send("new express");
});

app.listen(port, () => {
    console.log(`server running at http://localhost:${port}`);
});

// https://contents.premium.naver.com/codetree/funcoding/contents/220603011215368hw
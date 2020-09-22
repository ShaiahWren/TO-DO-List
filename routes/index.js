const express = require('express');
const router = express.Router();


const renderPage = async res => {
    const to_doData = await to_doModel.getAll();

    res.render("template", {
        locals: {
            title: "TO-DO-List",
            data: yelpData

        },
        partials: {
           partial: "partial-to=do",

        }
    })

}


router.get("/", async (req, res) => {
    res.sendStatus(200)
    console.log("OK");
});



module.exports = router;
const mongoose = require("mongoose");
const requireLogin = require("../middlewares/requireLogin");

const Draft = mongoose.model("drafts");

module.exports = (app) => {
  app.get("/api/drafts", requireLogin, async (req, res) => {
    const drafts = await Draft.find({ _user: req.user.id }).sort({
      dateLastEdit: -1
    });

    res.send(drafts);
  });

   app.get("/api/drafts/:draftId", requireLogin, async (req, res) => {
     const draftId = req.params.draftId;
     const draft = await Draft.find({ _id: draftId });
     res.send(draft);
   });

   app.delete("/api/drafts/:draftId", requireLogin, async (req, res) => {
     await Draft.deleteOne({ _id: req.params.draftId });
     const drafts = await Draft.find({ _user: req.user.id })
       .sort({ dateLastEdit: -1 });

     res.send(drafts);
   });

  app.post("/api/drafts", requireLogin, async (req, res) => {
     const { title = "", subject = "", body = "", recipients = "" } = req.body;

      const draft = new Draft({
        title,
        subject,
        body,
        recipients,
        _user: req.user.id,
        dateLastEdit: Date.now(),
      });

      await draft.save();

   res.send({});
  });
};

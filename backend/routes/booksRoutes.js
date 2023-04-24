const router = require("express").Router();
const bookModel = require("../models/booksModel");

// POST REQUEST
router.post("/add", async (req,res) => {
        try{
             const newBook = new bookModel(req.body);
             await newBook.save().then(() => {
                res.status(200).json({ message: "Book Added Sucessfully" });
             });
        }catch(error){
            console.log(error);
        }
});

//GET REQUEST
router.get("/getBooks", async (req,res) => {
    let books;
    try {
       books = await bookModel.find();
       res.status(200).json({ books });
    } catch (error) {
        console.log(error);
    }
});

//GET REQ. WITH ID
router.get("/getBooks/:id",async (req,res) => {
    let book;
    const id = req.params.id;
    try {
       book = await bookModel.findById(id);
       res.status(200).json({ book });
    } catch (error) {
        console.log(error);
    }
});

//UPDATE BOOKS BY ID
router.put("/updateBook/:id", async (req,res) => {
    console.log(res);
    const id = req.params.id;
    const {bookname, description, author, image, price} = req.body;
    let book;
    console.log(req.body);

    try{
        book = await bookModel.findByIdAndUpdate(id,{
            bookname,
            description,
            author,
            image,
            price,
        });
        await book.save().then(() => res.json({message: "Data Updated"}));
    }catch (error) {
        console.log(error);
    }
});

// DELETE BOOK BY ID
router.get("/deleteBook/:id", async (req,res) => {
    // console.log(req.params);
    const id = req.params.id;
    try{
        await bookModel
        .findByIdAndDelete(id).then(() => res.status(201).json({message: "Deleted Successfully"}));
    } catch (error) {
        console.log(error);
    }
    res.status(200).json({"message":"delete successfully"});


})

module.exports = router;
const express = require("express");
const authorsRouter = express.Router();
function router(navbar){
var authors = [
    {
        name : "Joseph Barbera",
        about: "was an American animator, director, producer, storyboard artist, and cartoon artist", 
        books : ["The Creation", "Scooby-Doo Activity Book"],
        details: "J.K. Rowling, in full Joanne Kathleen Rowling, (born July 31, 1965, Yate, near Bristol, England), British author, creator of the popular and critically acclaimed Harry Potter series, about a young sorcerer in training.",
        img: "/img/JBarbera.jpg"
    },
    {
        name : "J K Rowling",
        about : "Joanne Kathleen Rowling, (born July 31, 1965, Yate, near Bristol, England), British author",
        books : ["HARRY POTTER AND THE PHILOSOPHER’S STONE", "HARRY POTTER AND THE CHAMBER OF SECRETS", "HARRY POTTER AND THE PRISONER OF AZKABAN","HARRY POTTER AND THE GOBLET OF FIRE","HARRY POTTER AND THE ORDER OF THE PHOENIX","HARRY POTTER AND THE HALF-BLOOD PRINCE","HARRY POTTER AND THE DEATHLY HALLOWS","FANTASTIC BEASTS & WHERE TO FIND THEM"],
        details: "Joseph Roland Barbera was an American animator, director, producer, storyboard artist, and cartoon artist, whose film and television cartoon characters entertained millions of fans worldwide for much of the 20th century.",
        img: "/img/JK.jpg"
    },
    {
        name : "Basheer",
        about : "Vaikom Muhammad Basheer, also known as Beypore Sultan, was an Indian independence activist and writer of Malayalam literature",
        books : ["PREMALEKHANAM", "PATHUMMAYUDE AADU"],
        details: "In the Malayalam Literary arena, the legend Vaikom Muhammad Basheer owns a remarkable position. With his profound and simple writing, touch of satire, sarcasm and black humour, Basheer had woven a style of his own and marked his presence as a short story writer, novelist, humanist and also as a freedom fighter.",
        img: "/img/basheer.jpg"
    },
    {
        name : "Leo Tolstoy",
        about : "Leo Tolstoy is known primarily for having written the masterpieces War and Peace (1865–69) and Anna Karenina (1875–77), which are commonly regarded as among the finest novels ever written",
        books : ["War and Peace", "Anna Karenina", "The Death of Ivan Ilyich", "Childhood"],
        details: "Count Lev Nikolayevich Tolstoy, usually referred to in English as Leo Tolstoy, was a Russian writer who is regarded as one of the greatest authors of all time. He received nominations for the Nobel Prize in Literature every year from 1902 to 1906 and for the Nobel Peace Prize in 1901, 1902, and 1909.",
        img: "/img/leo.jpg"
    },
    {
        name : "William Shakespeare",
        about : "William Shakespeare (bapt. 26 April 1564 – 23 April 1616) was an English playwright, poet, and actor, widely regarded as the greatest writer in the English ",
        books : ["Hamlet", "Romeo and Juliet", "Macbeth",  "Othello"],
        details: "William Shakespeare  was an English poet and playwright and is considered a key member of the English literature canon. Shakespeare's work includes 154 sonnets and 38 plays. while his earlier plays were comedies and histories, his later work focused on tragedy. Shakespeare's reputation grew after his death and especially in the 19th century when he became the world's most celebrated dramatist. Now his work is reinterpreted and performed around the world.",
        img: "/img/william.jpg"
    },
    {
        name : "Ernest Hemingway",
        about : "Ernest Miller Hemingway (July 21, 1899 – July 2, 1961) was an American novelist, short-story writer, journalist, and sportsman.",
        books : ["The Old Man and the Sea", "A Farewell to Arms", "For Whom the Bell Tolls",  "The Sun Also Rises", "A Moveable Feast"],
        details: "Ernest Hemingway served in World War I and worked in journalism before publishing his story collection In Our Time. He was renowned for novels like The Sun Also Rises, A Farewell to Arms, For Whom the Bell Tolls and The Old Man and the Sea, which won the Pulitzer Prize in 1953. In 1954, Hemingway won the Nobel Prize. He committed suicide on July 2, 1961, in Ketchum, Idaho.",
        img: "/img/ernest.jpg"
    }

];
authorsRouter.get('/', (req,res)=>{
    res.render('authors', {title: 'Library App', navbar, heading : 'Library' , authors } )
});
authorsRouter.get('/:id', (req,res)=>{
    const id = req.params.id
    res.render('author', {title: 'Library App', navbar , heading : 'Library', author : authors[id] })
});
return authorsRouter;
}
module.exports = router;
// //createElement
// let div = document.createElement("div")
// let div1 = document.createElement("div")
// let div2 = document.createElement("div")
// //add text
// // innerHTML
// div.innerHTML = "adding text with innerHTML"
// // innerText
// div1.innerText = "adding text with innerText"
// // document.createTextNode
// let text = document.createTextNode("adding text with document.createTextNode")
// div2.appendChild(text)
// //add Element to the Dom
// //document.appendChild("newElt")
// document.body.appendChild(div)
// document.body.appendChild(div1)
// document.body.appendChild(div2)

// let section = document.createElement("section")
// let h1 = document.createElement("h1")
// let p = document.createElement("p")

// h1.innerText = "Welcome to my Website"
// p.innerText = "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolores, rem."

// section.appendChild(h1)
// section.appendChild(p)

// document.body.appendChild(section)

// let nav = ["home", "about", "services", "contact"]

// //nav> ul >li with  length array nav

// var navigation = document.createElement("nav");
// var ul = document.createElement("ul");
// for (var i = 0; i < nav.length; i++) {
//     var li = document.createElement('li');
//     ul.appendChild(li);
//     li.innerHTML = li.innerHTML + nav[i];
// }
// navigation.appendChild(ul);
// document.body.appendChild(navigation)

// //prepend

// let newList = document.createElement("li")
// newList.innerText = "prepend"
// ul.prepend(newList)


// let h2 = document.createElement("h2")
// h2.innerHTML = "prepend h2"
// section.prepend(h2)

// //before
// let newP = document.createElement("p")
// newP.innerText = "insert Before"
// ul.before(newP)

// //after
// let newP1 = document.createElement("p")
// newP1.innerText = "insert After"
// ul.after(newP1)
// let article = document.createElement("article")
// let pArticle = document.createElement("p")
// pArticle.innerText = "some text"
// //id
// pArticle.setAttribute("id", "text")
// //className
// pArticle.setAttribute("class", "class-text")

// article.appendChild(pArticle)
// document.body.appendChild(article)

// document.getElementById("text").style.color = "blue"
// document.getElementsByClassName("class-text")[0].style.fontSize = "50px"



// let a = document.createElement("a");
// let img = document.createElement("img");
// a.innerHTML = "Google";
// a.setAttribute("href", "https://www.google.com");
// img.setAttribute("src", "https://source.unsplash.com/random/300x300");
// article.appendChild(img);
// article.appendChild(a);


// //hasAttribute
// //getAttribute
// //setAttribute
// //removeAttribute

// let newImg = document.createElement("img")
// newImg.src = "https://source.unsplash.com/random/300x301"
// newImg.className = "mybild-2"
// newImg.id = "thePic"
// a.href = "https://google.fr"
// article.appendChild(newImg)

// console.log(newImg.hasAttribute("id"))
// console.log(a.getAttribute("href"))
// let input = document.createElement("input")

// //input.type = "radio"
// input.setAttribute("type", "radio")

// //input.setAttribute("checked", true)
// input.checked = true
// article.appendChild(input)

// --------------------------- CodeFlow Übung lev2_5: Create Table with JS

// function generateTable() {
//     let row = document.getElementById("zeilenFeld").value;
//     let column = document.getElementById("spaltenFeld").value;
//     let result = document.getElementById("result");
//     let table = document.createElement("table");
//     for (let i = 0; i < row; i++) {
//         let tr = document.createElement("tr");
//         table.appendChild(tr);
//         for (let j = 0; j < column; j++) {
//             let td = document.createElement("td");
//             tr.appendChild(td);
//             td.innerHTML = (i + 1) + "," + (j + 1);
//         }
//     }
//     result.appendChild(table);
// }


// // --------------------------- CodeFlow Übung lev2_7: Nummern

// let counter = 0;
// let umwickeln = document.getElementsByClassName("umwickeln")[0];
// document.getElementsByTagName("button")[1].addEventListener("click", () => {
//     umwickeln.style.width = "550px"
//     umwickeln.style.margin = "50px auto"
//     if (counter % 10 == 0) {
//         let span = document.createElement("span");
//         span.className = "weiss rechteck";
//         umwickeln.appendChild(span);
//         counter++;
//     } else {
//         let span = document.createElement("span");
//         span.className = "rechteck";
//         span.innerHTML = counter;
//         umwickeln.appendChild(span);
//         counter++;
//     }
// })


// ------------------------------ 


let data = [
    {
        url: "https://cdn.playbuzz.com/cdn//f063e8fe-ad57-485e-8211-ed2ee0d9a205/4a864049-816a-479e-8736-51740e8b724b.jpg",
        question: "Which ocean lies on the east coast of the United States?",
        choice: ["Eastern", "Pacific", "Indian", "Atlantic"],
        answer: "Atlantic"
    },
    {
        url: "https://cdn.playbuzz.com/cdn//f063e8fe-ad57-485e-8211-ed2ee0d9a205/4d101ba1-9275-4fb5-ba2c-5606e6c0274e.jpg",
        question: "Which is the world's highest mountain?",
        choice: ["K2", "Makalu", "Mount Everest", "Kilimanjaro"],
        answer: "Mount Everest"
    },
    {
        url: "https://cdn.playbuzz.com/cdn//f063e8fe-ad57-485e-8211-ed2ee0d9a205/07121a24-b34b-4711-9bfa-5287163e65ce.jpg",
        question: "Which of these cities is not in Europe?",
        choice: ["Prague", "Moscow", "Barcelona", "Reykjavik"],
        answer: "Moscow"
    },
    {
        url: "https://cdn.playbuzz.com/cdn//f063e8fe-ad57-485e-8211-ed2ee0d9a205/467a486b-be3a-4183-90ed-dd6867d5852d.jpg",
        question: "True or False: Iceland is covered in ice.",
        choice: [true, false],
        answer: false
    },
    {
        url: "https://cdn.playbuzz.com/cdn//f063e8fe-ad57-485e-8211-ed2ee0d9a205/ecf8af7b-8541-4572-b63b-ee7d7f9fc4cc.jpg",
        question: "The United Kingdom is comprised of how many countries?",
        choice: [1, 2, 3, 4],
        answer: 4
    },
    {
        url: "https://cdn.playbuzz.com/cdn//f063e8fe-ad57-485e-8211-ed2ee0d9a205/ecf8af7b-8541-4572-b63b-ee7d7f9fc4cc.jpg",
        question: "Which of the following countries do not border France?",
        choice: ["Germany", "Netherlands", "Spain", "Italy"],
        answer: "Netherlands"
    },
    {
        url: "https://cdn.playbuzz.com/cdn//f063e8fe-ad57-485e-8211-ed2ee0d9a205/6e99b817-7be7-4f8a-9146-3f602ac81fad.jpg",
        question: "Which U.S. state is the Grand Canyon located in?",
        choice: ["Wyoming", "Arizona", "New Mexico", "Nevada"],
        answer: "Arizona"
    },
    {
        url: "https://cdn.playbuzz.com/cdn//f063e8fe-ad57-485e-8211-ed2ee0d9a205/866f119d-e5e2-45ca-846c-b6d10a59d1e4.jpg",
        question: "Which is the smallest country, measured by total land area?",
        choice: ["Maldives", "Monaco", "Vatican"],
        answer: "Vatican"
    },
    {
        url: "https://cdn.playbuzz.com/cdn//f063e8fe-ad57-485e-8211-ed2ee0d9a205/13efaf72-d695-4f65-b043-2b805b6a88eb.jpg",
        question: "Which is the longest river in the world?",
        choice: ["Amazon River", "Congo River", "Yellow River", "Nile River"],
        answer: "Nile River"
    },
    {
        url: "https://cdn.playbuzz.com/cdn//f063e8fe-ad57-485e-8211-ed2ee0d9a205/1226f177-dc1a-4142-8875-bdaa177717d7.jpg",
        question: "Which is the largest body of water?",
        choice: ["indian Ocean", "Pacific Ocean", "Atlantic Ocean", "Nile River"],
        answer: "Pacific Ocean"
    }
]

let content = document.getElementById("content")
for (let i = 0; i < data.length; i++) {
    let image = document.createElement("img");
    let h2 = document.createElement("h2");
    let div = document.createElement("div");
    div.style.display = "flex";
    div.style.justifyContent = "space-around"
    image.src = data[i].url;
    h2.innerHTML = data[i].question;
    for (let j = 0; j < data[i].choice.length; j++) {
        let button = document.createElement("button");
        button.innerHTML = data[i].choice[j]
        button.style.backgroundColor = "black";
        button.style.color = "white";
        button.style.borderRadius = "5px";
        button.style.margin = "10px";
        button.name = "button"
        div.appendChild(button);
        if (data[i].answer === data[i].choice[j]) {
            button.className = "true"
        } else {
            button.className = "false"
        }
    }
    content.appendChild(image)
    content.appendChild(h2)
    content.appendChild(div)
}
let x = document.getElementsByTagName("button");
for (let m = 0; m < x.length; m++) {
    x[m].addEventListener("click", () => {
        if (x[m].className == "true") {
            x[m].style.backgroundColor = "green"
            x[m].addEventListener("mouseleave", () => {
                x[m].style.backgroundColor = "black"
            })
        } else {
            x[m].style.backgroundColor = "red"
            x[m].addEventListener("mouseleave", () => {
                x[m].style.backgroundColor = "black"
            })
        }
    })
}







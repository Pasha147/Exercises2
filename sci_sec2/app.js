import { news } from "./news.js";

function getListContent() {
  let result = [];

  for (let i = 0; i < news.length; i++) {
    let li = document.createElement("li");
    let date = document.createElement("p");
    let title = document.createElement("h2");
    let text = document.createElement("p");
    // date.append(news[i].date)
    // title.append(news[i].title)
    // text.append(news[i].text)
    // li.append(...[date, title, text]);
    li.innerHTML = `
    <p>${news[i].date}</p>
    <h2>${news[i].title}</h2>
    <p>${news[i].text}</p>
    `;
    result.push(li);
  }

  return result;
}

ul.append(...getListContent());

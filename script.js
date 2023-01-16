const textarea = document.querySelector(".textarea");

textarea.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    const text = textarea.value;
    text
      .split(",")
      .filter((txt) => txt.trim() !== "")
      .map((choice) => {
        const tagDiv = document.querySelector(".tags");
        const tag = document.createElement("li");
        tag.classList.add("tag");
        tag.innerText = choice.trim();
        tagDiv.appendChild(tag);
        setTimeout(() => {
          textarea.value = "";
        }, 10);
      });

    textarea.disabled = true;
    draw();
  }
});

function highlightTag(theTag) {
  theTag.classList.add("highlight");
}

function unHighlightTag(theTag) {
  theTag.classList.remove("highlight");
}

const randomPick = () => {
  const everyTag = document.querySelectorAll(".tag");
  return everyTag[Math.floor(Math.random() * everyTag.length)];
};

const draw = () => {
  const interval = setInterval(() => {
    const highlighted = randomPick();
    console.log(highlighted);
    if (highlighted !== undefined) {
      highlightTag(highlighted);

      setTimeout(() => {
        unHighlightTag(highlighted);
      }, 100);
    }
  }, 100);
  setTimeout(() => {
    clearInterval(interval);
    setTimeout(() => {
      const everyTag = document.querySelectorAll(".tag");
      if (everyTag.forEach((untag) => untag.classList.contains("highlight"))) {
        unHighlightTag(untag);
      }
      const number = Math.floor(Math.random() * everyTag.length);
      highlightTag(everyTag[number]);
    }, 100);
  }, 3000);
};

/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  let pronoun = ["the", "our"];
  let adj = ["intelligent", "giant"];
  let noun = ["jogger", "racoon"];
  let end = [".com", ".net", ".edu"];
  let element = document.getElementById("excuse");

  let excuse = [];
  for (let i = 0; i < pronoun.length; i++) {
    for (let j = 0; j < adj.length; j++) {
      for (let k = 0; k < noun.length; k++) {
        for (let l = 0; l < end.length; l++) {
          excuse.push(pronoun[i] + adj[j] + noun[k] + end[l]);
        }
      }
    }
  }

  element.innerHTML = excuse;
};

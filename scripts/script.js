import { tab_1 } from "../db/tab_1.js"
import { tab_2 } from "../db/tab_2.js"
import { tab_3 } from "../db/tab_3.js";

const pages = [tab_1, tab_2, tab_3];

jQuery(window).load(function () {

  const svgobject = document.getElementById("bg_image"); 
  const svgdom = jQuery(svgobject.contentDocument);
  const answerField = document.getElementById("answer_field"); 

  function init() {
    pages.forEach(page => {
      const ids = Object.keys(page);
      ids.forEach(fieldId => {
        setAttr(fieldId, page[fieldId].en);
      })
    })
  }

  function setAttr(fieldId, text) {
    if (
      svgobject.contentDocument != null &&
      svgobject.contentDocument != undefined
    ) {
      const el = jQuery(`#${fieldId}`, svgdom);
      el.attr('fill', 'blue');
      el.attr('style', 'cursor: pointer');
      el.mouseover(function(e) {
        e.target.attributes['fill'].textContent = 'red';
      })
      el.mouseout(function(e) {
        e.target.attributes['fill'].textContent = 'blue';
      })
      el.click(function() {
        answerField.innerText = text;
      });
    }
  }

  init();
});

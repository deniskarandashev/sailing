import { tab_1 } from "/db/tab_1.js"
import { tab_2 } from "/db/tab_2.js"

const pages = [tab_1, tab_2];

jQuery(window).load(function () {

  const svgobject = document.getElementById("bg_image"); 
  const svgdom = jQuery(svgobject.contentDocument);
  const answerField = document.getElementById("answer_field"); 

  function init() {
    pages.forEach(page => {
      const ids = Object.keys(page);
      ids.forEach(fieldId => {
        setText(fieldId, page[fieldId].en);
        setAttr(fieldId);
      })
    })
  }


  function setAttr(fieldId) {
    if (
      svgobject.contentDocument != null &&
      svgobject.contentDocument != undefined
    ) {
      jQuery(`#${fieldId}`, svgdom).attr('fill', 'blue');
      jQuery(`#${fieldId}`, svgdom).attr('style', 'cursor: pointer');

    }
  }

  function setText(fieldId, text) {
    if (
      svgobject.contentDocument != null &&
      svgobject.contentDocument != undefined
    ) {
      jQuery(`#${fieldId}`, svgdom).click(function () {
        answerField.innerText = text;
      });
    }
  }


  init();
});

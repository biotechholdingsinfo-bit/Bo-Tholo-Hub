/* Shared helpers used across every page of the Bo Tholo Hub. */
 
function fmtZAR(n) {
  return "R " + Number(n).toLocaleString("en-ZA");
}
 
function setActiveNav() {
  const here = location.pathname.split("/").pop() || "index.html";
  document.querySelectorAll(".reg-nav nav a").forEach(a => {
    if (a.getAttribute("href") === here) a.classList.add("active");
  });
}
 
function stampUpdated(selector) {
  const el = document.querySelector(selector);
  if (el && typeof LAST_UPDATED !== "undefined") el.textContent = LAST_UPDATED;
}
 
function el(tag, cls, html) {
  const e = document.createElement(tag);
  if (cls) e.className = cls;
  if (html !== undefined) e.innerHTML = html;
  return e;
}
 
/* Wires a text input to show/hide rows (or cards) of a container whose
   textContent matches the typed query. Used on table/card-heavy pages
   so a live query in a board meeting ("show me only pending permits")
   can just be typed instead of scrolled to. */
function wireFilter(inputSelector, rowSelector) {
  const input = document.querySelector(inputSelector);
  if (!input) return;
  input.addEventListener("input", () => {
    const q = input.value.trim().toLowerCase();
    document.querySelectorAll(rowSelector).forEach(row => {
      row.style.display = row.textContent.toLowerCase().includes(q) ? "" : "none";
    });
  });
}
 
/* Floating print/export button — lets the king's office turn any page
   (e.g. the SLP Projects table) straight into a PDF for a board pack
   via the browser's native Print > Save as PDF. */
function injectPrintButton() {
  const btn = document.createElement("button");
  btn.id = "print-export-btn";
  btn.textContent = "Print / Save as PDF";
  btn.setAttribute("aria-label", "Print this page or save it as a PDF");
  btn.style.cssText = "position:fixed;bottom:20px;right:20px;z-index:60;background:#a6552c;color:#f2ede3;border:none;padding:10px 16px;border-radius:3px;font-family:Inter,sans-serif;font-size:12.5px;font-weight:600;cursor:pointer;box-shadow:0 4px 14px rgba(0,0,0,.35);";
  btn.addEventListener("click", () => window.print());
  document.body.appendChild(btn);
}
 
document.addEventListener("DOMContentLoaded", () => {
  setActiveNav();
  injectPrintButton();
});
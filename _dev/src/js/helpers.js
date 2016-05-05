// HELPER FUNCTIONS
var containsClass = function(element, className) {
  return (" " + element.className + " ").indexOf(" " + className + " ") > -1;
};
var addClass = function(element, className) {
  return containsClass(element, className) ? false : (element.className += " " + className);
};
var removeClass = function(element, className) {
  return element.className = (" " + element.className + " ").replace(" " + className + " ", " ");
};
var toggleClass = function(element, className) {
  return (containsClass(element, className) ? removeClass : addClass)(element, className);
};



(function(window, undefined) {
  var dictionary = {
    "bf7acb23-2977-4081-bb08-e1d07381734b": "Netzwerk",
    "22bc361f-f985-4a52-9007-f4ff712ecc40": "Text",
    "0792381f-c114-489a-8da0-3cf8f0683700": "Main",
    "fa113649-c352-49fe-ad2f-158f3abb8ea3": "Tabelle",
    "d12245cc-1680-458d-89dd-4f0d7fb22724": "Dashboard",
    "cba9fd96-383b-467e-9b1b-43fc70a8bd88": "Data",
    "f39803f7-df02-4169-93eb-7547fb8c961a": "Template 1",
    "bb8abf58-f55e-472d-af05-a7d1bb0cc014": "default"
  };

  var uriRE = /^(\/#)?(screens|templates|masters|scenarios)\/(.*)(\.html)?/;
  window.lookUpURL = function(fragment) {
    var matches = uriRE.exec(fragment || "") || [],
        folder = matches[2] || "",
        canvas = matches[3] || "",
        name, url;
    if(dictionary.hasOwnProperty(canvas)) { /* search by name */
      url = folder + "/" + canvas;
    }
    return url;
  };

  window.lookUpName = function(fragment) {
    var matches = uriRE.exec(fragment || "") || [],
        folder = matches[2] || "",
        canvas = matches[3] || "",
        name, canvasName;
    if(dictionary.hasOwnProperty(canvas)) { /* search by name */
      canvasName = dictionary[canvas];
    }
    return canvasName;
  };
})(window);
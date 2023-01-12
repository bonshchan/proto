(function(window, undefined) {
  var dictionary = {
    "083cba8d-3d50-449d-a43f-24047a72cab1": "profile",
    "567eeee5-f0cc-48b1-a6ca-8ca6198ae1a7": "Login",
    "c57fe8c6-ff61-4672-be84-80f115a3326f": "qrcode",
    "832e1048-c79b-42fd-8e14-093a6644cbe7": "Verify",
    "fa4e9fb0-cb6e-4573-a2e4-c316a178e6ab": "Sign up",
    "3b816b34-2fc8-4f55-9ab0-289c22e4d6b9": "Confirm",
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
//By Nef#0571

//Version 0.0.0

function super93rio() {
  var htmlDir = "boot/super93rio.html"
  // Setup Window
  const appWindow = $window({
    url: "about:blank",
    title: "Super 93rio",
    height: 500,
    width: 500,
    center: true,
    resizable: false,
    maximisable: false,
    minimisable: true
  })
}

le._apps["super93rio"] = {
  name: "Super 93rio",
  cats: ['Accessories>Games'],
  exec: super93rio
}
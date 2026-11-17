(function(){
  var root=document.documentElement, btn=document.getElementById("theme-btn");
  if(!btn) return;
  function current(){
    return root.dataset.theme || (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
  }
  function label(){ btn.textContent = current()==="dark" ? "Light" : "Dark"; btn.setAttribute("aria-label","Switch to "+btn.textContent.toLowerCase()+" mode"); }
  btn.addEventListener("click",function(){
    var t = current()==="dark" ? "light" : "dark";
    root.dataset.theme=t;
    try{ localStorage.setItem("theme",t); }catch(e){}
    label();
  });
  label();
})();

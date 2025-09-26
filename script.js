// Logo click -> Home
function goHome(){ window.location.href = "index.html"; }

// Highlight current page
(function setActiveNav(){
  const path = location.pathname.split("/").pop() || "index.html";
  document.querySelectorAll('[data-nav]').forEach(a=>{
    if(a.getAttribute('href') === path){ a.classList.add('active'); }
  });
})();

// Dynamic year
(function setYear(){
  const y = document.getElementById('year');
  if(y){ y.textContent = new Date().getFullYear(); }
})();

// “Swap pages using JavaScript” (intercept nav clicks)
document.addEventListener('click', e=>{
  const a = e.target.closest('a[data-nav]');
  if(!a) return;
  e.preventDefault();
  window.location.href = a.getAttribute('href'); // still loads separate files
});

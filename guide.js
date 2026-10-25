document.addEventListener('click',async e=>{const b=e.target.closest('[data-copy]');if(!b)return;const t=document.getElementById(b.dataset.copy);if(!t)return;try{await navigator.clipboard.writeText(t.innerText);b.textContent='Copied ✓'}catch{const r=document.createRange();r.selectNodeContents(t);getSelection().removeAllRanges();getSelection().addRange(r);b.textContent='Select text and copy'} });
// The review checklist is a manual reminder, not automated verification.
document.addEventListener('change',e=>{
  if(!e.target.matches('#review-checklist input[type="checkbox"]')) return;
  const boxes=[...document.querySelectorAll('#review-checklist input[type="checkbox"]')];
  const checked=boxes.filter(b=>b.checked).length;
  const status=document.getElementById('review-progress');
  if(status) status.textContent=checked===boxes.length
    ? 'All five checks marked. You reviewed the answer yourself; this site has not verified the underlying data.'
    : `${checked} of ${boxes.length} checks completed. Only check items you have verified yourself.`;
});

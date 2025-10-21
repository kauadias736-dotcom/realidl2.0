// main.js - interatividade básica
function toggleMobile(){
  const nav = document.querySelector('nav.main-nav ul');
  if(!nav) return;
  nav.style.display = nav.style.display === 'flex' ? 'none' : 'flex';
}
function openLightbox(img){
  const src = img.src || img.getAttribute('data-src');
  const lb = document.getElementById('lightbox');
  const lbImg = document.getElementById('lightbox-img');
  lbImg.src = src; lbImg.alt = img.alt || '';
  lb.classList.add('active');
}
function closeLightbox(){
  const lb = document.getElementById('lightbox');
  lb.classList.remove('active');
  document.getElementById('lightbox-img').src = '';
}
document.getElementById && document.getElementById('newsletter-form')?.addEventListener('submit', function(e){
  e.preventDefault();
  const btn = this.querySelector('button'); const msg = document.getElementById('newsletter-msg');
  btn.textContent='Enviando...'; btn.disabled=true;
  setTimeout(()=>{btn.textContent='Inscrito!'; msg.textContent='Obrigado! Verifique seu e-mail.'; setTimeout(()=>{btn.textContent='Inscrever';btn.disabled=false;msg.textContent=''},3000)},1200);
});

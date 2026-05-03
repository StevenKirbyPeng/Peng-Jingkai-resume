
const root=document.documentElement;
function toggleDark(){root.classList.toggle('dark');localStorage.setItem('theme',root.classList.contains('dark')?'dark':'light')}
if(localStorage.getItem('theme')==='dark') root.classList.add('dark');
function filterCards(type){document.querySelectorAll('.filter').forEach(b=>b.classList.remove('active'));event?.target?.classList.add('active');document.querySelectorAll('[data-type]').forEach(c=>{c.style.display=(type==='all'||c.dataset.type===type)?'':'none'});}
function searchDocs(q){q=q.toLowerCase();document.querySelectorAll('.doc').forEach(d=>{d.style.display=d.innerText.toLowerCase().includes(q)?'':'none'})}
const modal=document.getElementById('modal'), modalTitle=document.getElementById('modalTitle'), modalContent=document.getElementById('modalContent');
function openImage(src,title='圖片預覽'){modalTitle.textContent=title;modalContent.innerHTML=`<img src="${src}" alt="${title}">`;modal.classList.add('show')}
function openDoc(src,title='文件預覽'){modalTitle.textContent=title;modalContent.innerHTML=`<iframe src="${src}"></iframe>`;modal.classList.add('show')}
function closeModal(){modal.classList.remove('show');modalContent.innerHTML=''}
modal?.addEventListener('click',e=>{if(e.target===modal)closeModal()});
document.querySelectorAll('[data-count]').forEach(el=>{const target=Number(el.dataset.count);let n=0;const step=Math.max(1,Math.ceil(target/40));const t=setInterval(()=>{n+=step;if(n>=target){n=target;clearInterval(t)}el.textContent=n},20)});

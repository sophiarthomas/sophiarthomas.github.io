function copyText(selector){
      const text = document.querySelector(selector).textContent.trim();
      navigator.clipboard?.writeText(text).then(() => {
        flash(`Copied: ${text}`);
      }, () => {
        alert('Copy failed — manually select and copy: ' + text);
      });
    }

function copyBoth(){
    const email = document.getElementById('emailValue').textContent.trim();
    const phone = document.getElementById('phoneValue').textContent.trim();
    const payload = `Email: ${email}\nPhone: ${phone}`;
    navigator.clipboard?.writeText(payload).then(() => {
    flash('Copied both to clipboard ✅');
    }, () => {
    alert('Copy failed — manually select and copy:\n' + payload);
    });
}

function flash(msg){
    const el = document.createElement('div');
    el.textContent = msg;
    el.style.position='fixed';
    el.style.right='18px';
    el.style.bottom='18px';
    el.style.background='rgba(2,6,23,0.8)';
    el.style.color='white';
    el.style.padding='10px 12px';
    el.style.borderRadius='8px';
    el.style.boxShadow='0 6px 18px rgba(2,6,23,0.6)';
    el.style.fontWeight=700;
    document.body.appendChild(el);
    setTimeout(()=> el.remove(), 1800);
}

function downloadVCard(){
    const name = 'Sophia';
    const email = document.getElementById('emailValue').textContent.trim();
    const phone = document.getElementById('phoneValue').textContent.trim();
    const vcard = [
    'BEGIN:VCARD',
    'VERSION:3.0',
    `FN:${name}`,
    `EMAIL;TYPE=INTERNET:${email}`,
    `TEL;TYPE=CELL:${phone}`,
    'END:VCARD'
    ].join('\\n');
    const blob = new Blob([vcard], {type:'text/vcard'});
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'sophia_contact.vcf';
    document.body.appendChild(a);
    a.click();
    a.remove();
    setTimeout(()=>URL.revokeObjectURL(url), 1000);
}
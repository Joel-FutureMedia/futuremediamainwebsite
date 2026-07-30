var e={1:`Great choice! A free media audit helps us recommend the right mix for your brand.

Please share:
• Your full name
• Company
• Email
• What you want to achieve (awareness, launch, retail, etc.)

Or visit /contact to complete our full 7-step media audit form. A media expert will follow up within 1 business day.`,2:`Which brand profile would you like?

1. 99 FM
2. Radio Omulunga
3. One Africa
4. On One Sports
5. Entryfy
6. Specials.na
7. Promobasket
8. Property News
9. Shop Beat

Reply with a number, then share your email and we'll send the profile PDF.`,3:`Current top offers:

• New Client Welcome — 20% off first radio package
• Radio + Digital Combo — digital add-on at 30% off
• Billboard Bundle — 3-for-2 Windhoek sites
• Summer Radio Blast — 100+ spots with free creative
• Podcast Pilot — complimentary branded episode

Full details: /advertise/latest-offers

Would you like to enquire about any of these? Reply YES with your name + email.`,4:`Please share your email address and we'll send you our company profile.

Your email + this WhatsApp number will be logged so our team can follow up if needed.`,5:`Happy to arrange an appointment.

1. What would you like to discuss? (Audio & Visual / Digital / Experiential / Technology / Other)
2. Preferred date
3. Morning or Afternoon
4. Full name · Company · Email

We'll confirm within 1 business day (we don't auto-book).`,6:`Sponsorship & partnership requests:

1. Sponsorship of a Future Media event
2. Partnership proposal
3. Other

Reply with the type, a short brief (max 500 characters), plus company name, your name and email. Our team will respond within 3 business days.`,7:`Subscribe to our newsletter.

Please send:
• Full name
• Email address
• Language preference (English / Afrikaans)

You'll get media insights and offers from Future Media.`,8:`Please hold — we're connecting you with a team member right now.

Business hours: Mon–Fri, 08:00–17:00.
Outside hours we'll respond first thing next business day.

For immediate help call 083 000 1000.`,menu:`Main menu:
1️⃣ Free media audit
2️⃣ Brand information
3️⃣ Latest offers
4️⃣ Company profile
5️⃣ Make an appointment
6️⃣ Sponsorship / partnership
7️⃣ Newsletter sign-up
8️⃣ Speak to someone urgently

Type 0 or menu anytime to return here.`,default:`Sorry, I didn't get that. Reply with a number from the menu (1–8), or type menu to start again.`};function t(){let e=new Date;return`${e.getHours()}:${e.getMinutes().toString().padStart(2,`0`)}`}function n(e,n){let r=document.getElementById(`chat-messages`);if(!r)return;let i=document.createElement(`div`);i.className=`whatsapp-msg ${n?`whatsapp-msg--user`:`whatsapp-msg--bot`}`,i.innerHTML=`${e.replace(/\n/g,`<br>`)}<div class="whatsapp-msg__time">${t()}</div>`,r.appendChild(i),r.scrollTop=r.scrollHeight}function r(e){let t=e.trim().toLowerCase();return t===`0`||t===`menu`?`menu`:/^[1-8]$/.test(t)?t:t.includes(`audit`)||t.includes(`media`)?`1`:t.includes(`brand`)?`2`:t.includes(`offer`)||t.includes(`deal`)?`3`:t.includes(`company`)||t.includes(`profile`)?`4`:t.includes(`appoint`)?`5`:t.includes(`sponsor`)||t.includes(`partner`)?`6`:t.includes(`news`)?`7`:t.includes(`urgent`)||t.includes(`human`)||t.includes(`agent`)?`8`:`default`}function i(t){n(t,!0);let i=r(t);setTimeout(()=>n(e[i]||e.default,!1),600)}function a(){let e=document.getElementById(`wa-popup`);e&&(e.hidden=!1)}function o(){let e=document.getElementById(`wa-popup`);e&&(e.hidden=!0)}function s(){let e=document.getElementById(`wa-open`),t=document.getElementById(`wa-close`),n=document.getElementById(`chat-input`),r=document.getElementById(`chat-send`),s=document.getElementById(`quick-replies`);e?.addEventListener(`click`,()=>{document.getElementById(`wa-popup`)?.hidden?a():o()}),t?.addEventListener(`click`,o),r?.addEventListener(`click`,()=>{n?.value.trim()&&(i(n.value.trim()),n.value=``)}),n?.addEventListener(`keydown`,e=>{e.key===`Enter`&&n.value.trim()&&(i(n.value.trim()),n.value=``)}),s?.querySelectorAll(`button`).forEach(e=>{e.addEventListener(`click`,()=>{i(e.getAttribute(`data-reply`)||``)})}),document.querySelectorAll(`[data-open-chat]`).forEach(e=>{e.addEventListener(`click`,e=>{e.preventDefault(),a()})})}s(),document.addEventListener(`astro:page-load`,s);
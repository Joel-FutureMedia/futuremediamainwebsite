Future Media Website — Development Brief 
FUTURE MEDIA 
Website Redesign 
Development Brief & Sitemap 
futuremedia.com.na 
Prepared: May 2026  |  Confidential 
Confidential  |  futuremedia.com.na  |  Page 1 of 27 
Future Media Website — Development Brief 
Confidential  |  futuremedia.com.na  |  Page 2 of 27 
Contents 
Contents ..................................................................................................................................... 2 
1. Project Overview .................................................................................................................... 4 
1.1 Business objectives.......................................................................................................... 4 
1.2 Design direction ............................................................................................................... 4 
1.3 Tech stack considerations ............................................................................................... 4 
2. Full Site Map .......................................................................................................................... 5 
2.1 Navigation structure ......................................................................................................... 7 
3. Page Specifications ............................................................................................................... 8 
3.1 Homepage ........................................................................................................................ 8 
Hero section ........................................................................................................................ 8 
Scrolling sub-banner (below hero) ..................................................................................... 8 
3 CTA blocks (below sub-banner) ...................................................................................... 8 
Below-fold sections ............................................................................................................. 9 
Open questions — Homepage ........................................................................................... 9 
3.2 About Us ........................................................................................................................... 9 
3.3 Advertise — Landing Page .............................................................................................. 9 
Page hero ........................................................................................................................... 9 
Solutions grid — 4 categories (ARN-style expandable blocks) ......................................... 9 
Latest Offers strip ............................................................................................................. 10 
Proof strip (decision pending)........................................................................................... 10 
3.4 Solutions Sub-Page ....................................................................................................... 10 
3.5 Latest Offers ................................................................................................................... 11 
CMS fields per offer .......................................................................................................... 11 
3.6 Advertising Packages (Redesigned Webstore) ............................................................. 11 
3.7 Audiences & Insights (replaces "Case Studies") ........................................................... 12 
Gating strategy — mixed approach.................................................................................. 12 
Page sections ................................................................................................................... 12 
3.8 Advertising T&Cs ........................................................................................................... 13 
3.9 Free Media Audit Form (Shared Component) ............................................................... 13 
3.10 Brands Page................................................................................................................. 14 
Brand classification — confirmed ..................................................................................... 14 
3.11 Shop Beat — Dedicated Product Page ....................................................................... 15 
3.12 Team ............................................................................................................................ 15 
3.13 Latest News.................................................................................................................. 15 
Hub page layout................................................................................................................ 16 
Article detail page ............................................................................................................. 16 
CMS approval workflow .................................................................................................... 16 
Newsletter component ...................................................................................................... 16 
Future Media Website — Development Brief 
Confidential  |  futuremedia.com.na  |  Page 3 of 27 
3.14 Vacancies ..................................................................................................................... 17 
3.15 Contact Us .................................................................................................................... 17 
4. WhatsApp Bot — New Build Specification .......................................................................... 18 
4.1 Overview ........................................................................................................................ 18 
4.2 Entry point — Welcome message & main menu ........................................................... 18 
4.3 Flow specifications ......................................................................................................... 18 
Flow 1 — Free Media Audit .............................................................................................. 18 
Flow 2 — Brand Information............................................................................................. 19 
Flow 3 — Latest Offers ..................................................................................................... 19 
Flow 4 — Company Profile ............................................................................................... 19 
Flow 5 — Make an Appointment ...................................................................................... 20 
Flow 6 — Sponsorship & Partnership Request ............................................................... 20 
Flow 7 — Newsletter Sign-Up .......................................................................................... 20 
Flow 8 — Speak to Someone Urgently ............................................................................ 21 
4.4 Global bot rules .............................................................................................................. 21 
4.5 Open questions — WhatsApp bot ................................................................................. 21 
5. Global Components ............................................................................................................. 23 
5.1 Navigation bar ................................................................................................................ 23 
5.2 Footer ............................................................................................................................. 23 
5.3 Floating WhatsApp button.............................................................................................. 23 
5.4 Lead capture backend ................................................................................................... 23 
5.5 Gated document download — shared component ........................................................ 23 
6. Consolidated Open Questions............................................................................................. 25 
7. Lead Generation Strategy Summary ................................................................................... 27 
8. Reference Sites & Inspiration .............................................................................................. 28 
 
 
Future Media Website — Development Brief 
1. Project Overview 
Future Media is Namibia's most connected media partner, operating across radio, TV, digital 
publishing, retail media, activations, and technology. This brief documents the full scope of 
the website redesign at futuremedia.com.na, including all page specifications, functional 
requirements, lead capture systems, and the new WhatsApp bot build. 
1.1 Business objectives 
• Convert website visitors into qualified leads — not just page views 
• Serve two primary audience types: local Namibian businesses (SMEs) and media 
buying agencies (Namibia and regional) 
• Establish Future Media as a credible, data-driven media partner through audience 
intelligence and thought leadership 
• Remove all free document access — every download must capture an email address 
• Introduce a multi-step contact form that feels shorter and more conversational than a 
traditional long form 
1.2 Design direction 
Look & feel 
Banner style 
Darker background palette — avoid white-heavy layouts that feel 
empty. Clean, uncluttered. Reference: Primedia homepage structure:  
https://primedia.co.za/  
Solutions layout 
Mixed: static hero image with a CMS-driven scrolling sub-banner 
below it. Reference: SABC scrolling banner (just narrower). 
https://www.sabc.co.za/sabc/  
Brand voice 
Expandable category blocks Reference: ARN solutions with drop
downs on specific products/services. https://arn.com.au/advertise
with-us/  
Professional but direct. Namibia-first. Data-led. 
1.3 Tech stack considerations 
The dev team must confirm the CMS and tech stack before build commences. The following 
requirements must be met: (1) CMS-driven content for offers, news, brands, and events — no 
hardcoded content. (2) Approval workflow for news/articles. (3) Email capture integrated with 
the chosen newsletter platform. (4) WhatsApp Business API integration. (5) POPIA-compliant 
data consent on all forms and the WhatsApp bot. 
Confidential  |  futuremedia.com.na  |  Page 4 of 27 
Future Media Website — Development Brief 
Confidential  |  futuremedia.com.na  |  Page 5 of 27 
2. Full Site Map 
The following table lists every page, sub-page, form, and functional component in the site. 
Pages marked NEW require a full build. Pages marked REDESIGN exist in some form but 
require significant rework. 
 
# Page / 
Component 
Type Key function Status 
1 Homepage Page Hero, 3 CTA blocks, 
scrolling sub-banner, 
brand logo strip, gated 
doc download 
REDESIGN 
1.1 Gated document 
download 
Form / 
Component 
Email capture → doc 
mailed to user 
NEW 
2 About Us Page Company overview, 
gated company profile 
download 
REDESIGN 
3 Advertise 
(landing) 
Page Solutions grid, offers 
strip, media audit form 
NEW 
3.1 Solutions Sub-page 4-category expandable 
grid of all 12 solutions 
NEW 
3.2 Latest Offers Sub-page 3 curated time-limited 
offers, CMS-driven 
NEW 
3.2a Offer detail page Auto-generated 
page 
Per-offer detail + Find 
out more → form 
NEW 
3.3 Advertising 
Packages 
Sub-page Redesigned webstore 
— filterable package 
cards 
REDESIGN 
3.4 Audiences & 
Insights 
Sub-page Universe data, brand 
audience cards, gated 
downloads 
NEW 
3.5 Advertising T&Cs Sub-page Terms & conditions 
document 
EXISTING 
3.6 Free Media Audit 
form 
Form (shared) 4-step form: campaign 
type, business type, 
location, contact 
details 
NEW 
Future Media Website — Development Brief 
Confidential  |  futuremedia.com.na  |  Page 6 of 27 
4 Brands Page Grid of 8–12 brand 
cards, profile request 
form 
REDESIGN 
4.1 Individual brand 
page (×8–12) 
Page Logo, blurb, gated 
profile request, visit 
website link 
NEW 
4.2 Shop Beat 
product page 
Page Dedicated Namibia
only landing page, 
demo request form 
NEW 
5 Team Page Staff profiles, photos, 
roles 
REDESIGN 
6 Latest News Hub page Featured post, 
filterable article grid, 
newsletter CTA 
NEW 
6.1 Article / post 
detail 
Auto-generated 
page 
Full article, social 
share, related posts, 
newsletter CTA 
NEW 
7 Vacancies Page Active job listings, 
apply CTA per listing 
REDESIGN 
8 Contact Us Page Address, map, multi
step enquiry form 
REDESIGN 
8.1 Multi-step 
contact form 
Form (shared) Same 4-step structure 
as media audit form, 
routes to relevant rep 
NEW 
9 WhatsApp Bot New build 8 automated flows, 
English & Afrikaans, 
human handoff 
NEW 
G1 Floating 
WhatsApp button 
Global 
component 
Persistent across all 
pages 
NEW 
G2 Navigation bar Global 
component 
All nav items, 
Advertise dropdown, 
mobile-responsive 
REDESIGN 
G3 Footer Global 
component 
Links, social, contact, 
legal, newsletter sign
up 
REDESIGN 
G4 Lead capture 
backend 
Backend All forms log to 
CRM/spreadsheet and 
email to assigned rep 
NEW 
Future Media Website — Development Brief 
2.1 Navigation structure 
Top-level nav 
Advertise dropdown 
Home | About Us  |  Advertise  |  Latest News  |  Vacancies  | Contact 
Us 
About Us dropdown 
Solutions  |  Latest Offers  |  Advertising Packages  |  Audiences & 
Insights  |  Advertising T&Cs 
Latest News 
dropdown 
Company Profile | Team | Vision & Mission 
Global CTA 
Events | Newsletter | Gallery 
Brand logo strip 
Floating WhatsApp button — persistent on all pages 
Homepage footer strip — each logo links to the relevant brand page 
Confidential  |  futuremedia.com.na  |  Page 7 of 27 
Future Media Website — Development Brief 
Confidential  |  futuremedia.com.na  |  Page 8 of 27 
3. Page Specifications 
3.1 Homepage 
The homepage must serve two audience types simultaneously — local Namibian businesses 
(want guidance) and media buying agencies (want inventory data) — without explicitly 
labelling either group. The dual CTA button approach in the hero achieves this naturally. 
 
Hero section 
Visual Full-width image with dark overlay. Assets to be provided by Design 
Dept. 
Headline On Hero banner. One sentence. Bold. Speaks to both audiences. 
Copy TBC 
Sub-headline Max 15 words. Copy TBC 
Primary CTA "Get a free media audit" — opens 7-step Media Audit form section on 
Advertise page. 
Secondary CTA "Explore our solutions" — links to Solutions page. 
Design note Hero image should be CMS-editable so the content team can update 
it seasonally without dev involvement. 
 
3 CTA blocks (below hero & sub heading) 
Explore Solutions 
Links to Solutions page 
Audiences & Insights  
Links to Audiences & Insights 
page 
Explore Deals 
Links to Latest Offers page 
 
Scrolling sub-banner (below CTA blocks) 
Content Latest offers, upcoming events, news headlines, new brand 
announcements. Auto-populated from CMS. 
Behaviour Auto-scrolls horizontally. Pauses on hover. Each item is clickable and 
links to the relevant page. 
CMS fields Title, short description (max 12 words), link URL, category tag (offer / 
event / news), active toggle. 
 
Below-fold sections 
• Media Audit form (7-step, see Section 3.6) 
Future Media Website — Development Brief 
• Brand logo strip at bottom of page — each logo links through to the individual brand 
page 
• All document downloads (company profile, brand profiles, etc.) must be gated — 
email input required, doc mailed to user 
3.2 About Us 
Content 
Download 
Company overview, team, history, values, and a gated company 
profile download. 
"Download our company profile" — triggers pop-up email capture form 
→ PDF mailed to user. Same gated download component used site
wide. 
3.3 Advertise — Landing Page 
Equal visual weight between solutions and the Media Audit form. Every section drives 
toward a lead capture action. 
Page hero 
Headline 
Sub-heading 
Short, punchy — advertising-focused. Copy TBC 
CTA 
3-5 headline numbers (Total audience, total brands, total 
engagement, etc).  Not clickable – just showcase of reach potential of 
FM. 
Single primary button: "Get a free media audit" — anchors to form 
section on same page. 
Solutions grid — 4 categories (ARN-style expandable blocks) 
Expandable/accordion layout: 
Category Headline with dropdown arrow > opens cards for each solution.  Card includes 
solution name and short description and link to relevant page. 
Only one accordion open at a time — opening a new category auto-closes the previous one. 
This keeps the page height predictable and the offer strip always visible without scrolling on 
desktop. On mobile, all categories collapse by default. 
Category 
Solutions included 
Audio & Visual 
Expanded CTA 
Radio & TV · Streaming Pre
Roll · Production ·  
Radio & TV = "See more" → 
Brands page 
Confidential  |  futuremedia.com.na  |  Page 9 of 27 
Future Media Website — Development Brief 
Confidential  |  futuremedia.com.na  |  Page 10 of 27 
Streaming Pre-Roll = “Find out 
more” → contact form pre
tagged with solution 
Production = “Find out more” 
→ contact form pre-tagged 
with solution 
 
Digital Website Advertising · 
Specials.na (links to own site) 
"Get rate card" → email 
capture 
Experiential Activations  · Sponsorships & 
Partnerships · Events ·  
"Submit a brief" → email 
capture 
Technology & Innovation Shop Beat (dedicated page on 
this site) · Entryfy (links to own 
site) 
"Request a demo" → contact 
form 
Specialist Platforms Promobasket (links to own site) 
Property News (links to own 
site) 
 
Free Media Audit CTA button below the last 
product. 
Opens Media Audit form on 
Advertise page. 
Coming Soon Influencer Marketing  
 
• Revise Categories:  Publishing; Omnichannel; Promo & Property perhaps on their 
own?; Coming Soon 
 
 Dev note: each expanded block CTA should pre-populate Step 1 of the contact form with the 
relevant solution name (where possible), so the sales rep knows exactly what the lead was 
enquiring about. 
 
Latest Offers strip 
3 current offers displayed as cards on home page — title, expiry date, "Find out more" 
button. Each ‘Find out more’ link goes to full Latest Offers page. CMS-driven. 
 
Proof strip 
 Link to Audiences & Insights 
Description "See our results" CTA block linking to the Audiences & Insights page. 
 
Future Media Website — Development Brief 
Confidential  |  futuremedia.com.na  |  Page 11 of 27 
3.5 Latest Offers 
Purpose Time-limited, curated offers only. Max 3 active at any time. Designed 
to create urgency. NOT a product catalogue.  
Layout Cards vertically stacked. Each card: offer title, short description, offer 
type tag (seasonal / bundle / new product), expiry date, "Find out 
more" button → Pop-up contact form pre-populated with offer name 
Urgency Expiry date visible on card. Auto-unpublishes when expiry date is 
reached. 
Empty state When fewer than 3 active offers exist, fallback content is shown — 
Benchmark features — so the page never looks empty. 
WhatsApp sync CMS should include a flag: "Include in WhatsApp bot top 5" — avoids 
maintaining a separate offers list for the bot. 
 
CMS fields per offer 
• Title 
• Short description (max 20 words) 
• Full description (rich text) 
• Offer type tag (seasonal / bundle / new product) 
• Expiry date 
• Featured image 
• Active / inactive toggle 
• WhatsApp bot include flag 
• Linked form tag (pre-populates Step 1 of contact form) 
 
3.6 Audiences & Insights (replaces "Case Studies") 
 Page renamed from "Case Studies" to "Audiences & Insights" — more accurate about what is 
currently available and more immediately useful to a media buyer. A "Campaign Results" 
section will be built into the page but hidden until the first case study is ready. 
 
Gating strategy — mixed approach 
Content Public (visible to all) Gated (email capture) 
Future Media Universe Headline aggregate numbers 
— total weekly reach, 
platforms, geographic spread. 
Full Universe data slide/deck. 
Radio & TV brands One-line descriptor and 2–3 
teaser stats per brand (e.g. "X 
Full audience & engagement 
data slide per brand. 
Future Media Website — Development Brief 
Confidential  |  futuremedia.com.na  |  Page 12 of 27 
weekly listeners", "Y% LSM 8
10"). 
Digital & tech platforms 
 
One-line descriptor and 
available headline stat (client 
count, monthly users, etc.). 
Detailed breakdowns where 
available. 
 
Page sections 
Section 1 — Universe Aggregate headline stat tiles — public. Large, bold visual impact. 
"Download full Universe overview" → email capture → PDF sent. 
Section 2 — Brand 
audience cards 
One card per radio/TV brand. Public teaser stats + demographic 
snapshot. "Download full audience data" → email capture → full data 
slide PDF sent. 
Section 3 — Digital & 
tech platforms 
Specials.na, Shop Beat, Entryfy, Promobasket — secondary tier 
cards. Honest about data maturity. "Find out more" CTA → contact 
form. PDFs to be created 
Section 4 — 
Campaign Results 
(hidden) 
Built into page structure now but hidden (dev toggle) until first case 
study is ready. No causality claims needed — report honestly on what 
ran and what happened. 
 
? How often is the audience data updated = every 3 months (quarterly) 
Who owns keeping this current? = Andre & Zell 
 
? Basic stats are fine to publish.  All documents gated. 
 
3.8 Advertising T&Cs 
Existing page. No structural changes required —content needs updating. Listed under the 
Advertise dropdown. 
 
3.9 Free Media Audit Form (Shared Component) 
This is a shared component used in multiple locations: Advertise landing page (hero anchor), 
Offer detail pages ("Find out more"), Contact Us page, and the WhatsApp bot (Flow 1). Each 
instance pre-tags the submission with the source page/offer so the sales rep has full context. 
Privacy Notice 
Right under headline. 
By clicking submit you acknowledge your data may be shared with a Future Media sales 
representative to fulfill your request, and agree to the Privacy Policy and Terms & 
Conditions. 
Future Media Website — Development Brief 
Confidential  |  futuremedia.com.na  |  Page 13 of 27 
 Dev note: logic needs to be built in so that certain results are given to the client based on 
what they have selected.  
 
 
Step Content Answer Options Format 
Step 1 Which of these best 
describes your 
business? 
Brand awareness 
Product Launch 
Promotions & specials 
Event promotion 
Retail / In-store 
Digital 
Not sure yet 
Clickable option tiles – 
multiple select 
available. 
Step 3 What type of 
campaign are you 
planning? 
Retail 
FMCG 
Financial Services 
Government/Parastatal 
Media Agency 
Hospitality 
Healthcare 
Professional Services 
Other 
Clickable option tiles – 
single select only 
Step 2 Where are you 
located? 
Namibia (dropdown: Windhoek · Swakopmund · 
Walvis Bay · Oshakati · Rundu · Lüderitz · Other 
town) / South Africa / Other country (text field) 
Dropdown for Namibia 
Step 4 Who are you trying 
to reach?  Pick your 
primary audience. 
Mass market consumers 
Working adults (Middle income) 
Affluent consumers (High income) 
Youth & Young Adults (18-25) 
Families & households 
Business owners & decision makers 
Not sure yet 
Single selection 
Step 5 What advertising do 
you currently do?  
Select all that apply, 
or “Nothing yet” if 
you’re just starting 
out. 
Radio 
TV 
Social media 
Influencer marketing 
Online Display or Search Ads 
Billboards / DOOH 
Print 
Nothing Yet 
 
Clickable option tiles 
Future Media Website — Development Brief 
Confidential  |  futuremedia.com.na  |  Page 14 of 27 
Step 6 When are you 
looking to advertise? 
As soon as possible 
Within 1-3 months 
3-6 months’ time 
Planning for next year 
Not sure yet 
Clickable option tiles 
 What’s your 
approximate 
advertising budget?  
This helps us 
recommend the right 
solutions.  You can 
skip this if you 
prefer. 
Under N$20,000 
N$20,000 – N$50,000 
N$50,000 – N$150,000 
N$150,000+ 
Prefer not to say 
Clickable tile options 
“Skip this step” option 
next to the ‘Next’ 
button. 
Step 7 Contact details  Full name · Email · 
Phone · Company ·  
Text area:  Anything 
else you would like us 
to know? (Optional) 
 
• Step progress indicator shown at top of form (e.g. "Step 1 of 7") 
• Each step is one screen — no scrolling within a step 
• “Next” button, "Back" button on every step 
• On submission: Top 3 recommendations with message: “One of our media experts 
will be in touch to discuss the best solutions for you.” 
• On-screen thank-you message + confirmation email to user + lead notification to 
assigned email address:  sales@futuremedia.com.na 
• Reference website: https://advertise.listnr.com/contact/advertise-with-us/  
3.10 Brands Page 
Layout Grid of 12 brand cards. Each card: logo, short blurb, brand profile 
request button (shared component – see below), visit website link. 
Profile request 
component 
Shared across all brand cards. User inputs email address and selects 
which brand profiles they want mailed to them. Email captured as 
lead. Profiles sent via email — not directly downloadable. 
Bottom of page No separate brand logo strip needed — brands are already the focus 
of this page. CTA cards to “Explore our deals | solutions |” 
 
Brand classification 
Brand Classification Web treatment 
Entryfy B2B sub-brand Brand page on this site. "Visit 
Entryfy website" button links to 
their site. 
Future Media Website — Development Brief 
Confidential  |  futuremedia.com.na  |  Page 15 of 27 
Specials.na B2C sub-brand Brand page on this site. "Visit 
Specials.na" button links to their 
site — helps advertisers evaluate 
the consumer audience. 
Promobasket Full brand Brand page on this site. "Visit 
Promobasket website" button links 
to their site. 
Property News Full brand Brand page on this site. "Visit 
Property News website" button 
links to their site.  
Shop Beat Exclusive local partner Brand page + dedicated product 
page on this site (see 3.11). NO 
redirect to SA site. Future Media's 
site is the only Namibian web 
home for Shop Beat. 
 
3.11 Shop Beat — Dedicated Product Page 
 Shop Beat has no other Namibian web presence. Future Media's site becomes the default 
destination for all Namibian searches for in-store retail media. This page should be built with 
SEO in mind from day one — target keywords: "in-store audio Namibia", "retail media 
Namibia", "Shop Beat Namibia." 
Reference site: https://shopbeat.co.za  
 
Content required What is Shop Beat · how it works · who it's for (retailers, malls, 
supermarkets) · features · benefits · Namibia-specific context 
CTA "Request a demo" → contact form that send email notification to 
shopbeatnam@futuremedia.com.na  
Content ownership Future Media team writes Namibia-specific copy. Can reference SA 
website for product facts, but page must feel local and be entirely 
managed on futuremedia.com.na. 
SEO Unique meta title, description, and on-page headings targeting 
Namibia-specific search terms. 
 
3.12 Team 
Standard team page. Staff profiles, photos, names, and roles. No structural complexity 
required. 
 
Future Media Website — Development Brief 
3.13 Latest News 
Purpose 
Content types 
Build credibility and brand personality through active, well-written 
content. Every post should demonstrate Future Media's expertise in 
the Namibian media market. 
Partnership announcements · Event highlights (photo-forward) · 
Opinion pieces (CEO/Director bylines) · Company news · Brand 
spotlights 
Hub page layout 
• Featured post: most recent or manually pinned post displayed large at the top — full
width card with image, title, category tag, author, date, excerpt. 
• Inline newsletter sign-up banner between featured post and grid. 
• Post grid: 3-column card grid, filterable by content type. "Load more" button — not 
pagination. 
Article detail page 
• Featured image · category tag · title · author (name, photo, title) · date · rich text 
body (supports images, pull quotes, embedded video) 
• Social share buttons: LinkedIn, Facebook, WhatsApp 
• End of article: newsletter sign-up block + event + gallery 
• Opinion pieces: soft CTA at end — "Want to discuss your media strategy? Get a free 
audit." → links to media audit form 
• URL structure: futuremedia.com.na/news/[article-slug] and 
futuremedia.com.na/news/opinion/[slug] 
Approval workflow 
Draft 
In Review 
Author writes post 
Author submits to Editor 
(confirm who this is).  
Approved / Scheduled 
Editor approves and publishes 
through CMS. Scheduled 
publishing supported. 
Newsletter component 
Sign-up locations 
Fields 
News hub (inline banner) · Article pages (end of article) · WhatsApp 
bot Flow 7 · Footer (site-wide) 
Integration 
First & Last name · Email address · Organisation Name 
Must connect to the team's chosen newsletter platform via API.  
Confidential  |  futuremedia.com.na  |  Page 16 of 27 
Future Media Website — Development Brief 
3.14 Vacancies 
Standard vacancies listing page. Active job listings displayed as cards — role title, 
department, location, brief description, "Apply" or "Enquire" CTA per listing. CMS-driven — 
HR team publishes/unpublishes listings without dev involvement. 
3.15 Contact Us 
Contact page with address, map embed, and the shared multi-step enquiry form. Same 7
step structure as the Media Audit form. Routes submission to the 
sales@futuremedia.com.na email address. 
Confidential  |  futuremedia.com.na  |  Page 17 of 27 
Future Media Website — Development Brief 
4. WhatsApp Bot — New Build Specification 
4.1 Overview 
Number 
Existing WhatsApp Business number — number to be identified and 
set up on BSP. 
Languages 
Number of flows 
English. 
POPIA compliance 
8 automated flows from a single number. 
Consent message required on first interaction: "By continuing, you 
agree to Future Media collecting and using your information to 
respond to your enquiry, in accordance with our privacy policy." 
4.2 Entry point — Welcome message & main menu 
On first contact: 
• Greeting: "Welcome to Future Media!” 
• POPIA consent message: (displayed once per new contact) 
Main menu (after language selection): 
• 1️⃣  Get a free media audit 
• 2️⃣  Brand information 
• 3️⃣  Latest offers 
• 4️⃣  Company profile 
• 5️⃣  Make an appointment 
• 6️⃣  Sponsorship or partnership request 
• 7️⃣  Subscribe to our newsletter 
• 8️⃣  Speak to someone urgently 
4.3 Flow specifications 
Flow 1 — Free Media Audit 
Mirror the Free Media Audit in 3.9 Free Media Audit Form (Shared Component)  
Flow 2 — Brand Information 
Step 1 
Step 2 
Numbered list of all brands. User selects one or more. 
Please share your email address so we can send you the profile(s). 
Confidential  |  futuremedia.com.na  |  Page 18 of 27 
Future Media Website — Development Brief 
Confidential  |  futuremedia.com.na  |  Page 19 of 27 
Output Selected brand profile PDF(s) emailed to user. Email captured as 
lead. Bot confirms delivery → returns to main menu. 
Dev note Confirm with chosen BSP platform whether multi-select is supported 
natively. 
 
Flow 3 — Latest Offers 
Output Summary of current top 5 active offers (title + one line each) + link to 
full Latest Offers page on website. 
Follow-up "Would you like to enquire about any of these offers?" Yes → 
captures name + email → lead emailed to sales. No → returns to 
main menu. 
 
Flow 4 — Company Profile 
Step 1 Please share your email address and we'll send you our company 
profile. 
Output Company profile PDF emailed to user. Email + WhatsApp number 
captured as lead → returns to main menu. 
 
Flow 5 — Make an Appointment 
Step 1 What would you like to discuss? (numbered options matching solution 
categories, plus Other) Solution categories: See “Solutions grid — 4 
categories (ARN-style expandable blocks)” 
Step 2 Preferred date (free text or date picker if platform supports it) + 
Preferred time: Morning / Afternoon 
Step 3 Full name · Company · Email address 
Output Appointment request emailed to sales@futuremedia.com.na  
Bot confirms: "We'll confirm your appointment within 1 business day." 
NOTE: bot does NOT auto-book — rep confirms manually and sends 
calendar invite. 
 
Flow 6 — Sponsorship & Partnership Request 
Step 1 What type of request? Sponsorship of a Future Media event / 
Partnership proposal / Other 
Future Media Website — Development Brief 
Confidential  |  futuremedia.com.na  |  Page 20 of 27 
Step 2 Brief description of your proposal (free text, max 500 characters) 
Step 3 Company name · Full name · Email 
Output Full brief emailed to events/partnerships team. Email address TBC 
Bot confirms: "Thank you! Our team will review your proposal and be 
in touch within 3 business days." 
 
Flow 7 — Newsletter Sign-Up 
Steps Full name · Email address · Language preference (English / 
Afrikaans) 
Output Email added to mailing list via integration with newsletter platform. Bot 
confirms subscription → returns to main menu. 
 
Flow 8 — Speak to Someone Urgently 
Action Immediately flags the conversation to a live agent. Bot message: 
"Please hold — we're connecting you with a team member right now." 
Escalation Conversation escalated to human agent in platform inbox. Push 
notification sent to Sales Manager phone. 
Out of hours Outside business hours: bot sends out-of-hours message with 
expected response time.  Push notification sent to Sales Manager 
Phone. 
Business hours Monday to Friday, 08h00 – 17h00 
 
4.4 Global bot rules 
• Main menu accessible at any time — user types "menu" or "0" to return without 
completing a flow. 
• Unrecognised input: "Sorry, I didn't get that. Reply with a number from the menu, or 
type 'menu' to start again." 
• Session timeout: nudge after 24 hours of no response. Conversation closed and 
archived after 48 hours. 
• All leads logged: every completed flow capturing a name/email/number writes to a 
lead log. WhatsApp number is always auto-captured by the platform. 
• POPIA consent shown once per new contact on first interaction. 
4.5 Open questions — WhatsApp bot 
 
Future Media Website — Development Brief 
? 
CMS sync for offers — should Flow 3 pull automatically from the website CMS, or will the 
content team maintain a separate offers list for WhatsApp? Auto-sync is better long-term but 
requires additional dev effort upfront. 
Confidential  |  futuremedia.com.na  |  Page 21 of 27 
Future Media Website — Development Brief 
5. Global Components 
5.1 Navigation bar 
• Top-level items: About Us · Advertise · Solutions · Brands · Team · Latest News · 
Vacancies · Contact Us 
• "Advertise" is clickable as a page AND opens a dropdown with visual blocks (not 
plain text links): Solutions · Latest Offers · Advertising Packages · Audiences & 
Insights · Advertising T&Cs 
• Must be fully mobile-responsive — hamburger menu on mobile 
• "Advertise with Us" must be visible and prominent — this was a key gap on the 
current site 
5.2 Footer 
• Navigation links (all main pages) 
• Social media links 
• Contact details 
• Legal: Privacy policy · Terms of use · POPIA statement 
• Newsletter sign-up inline (name + email + language preference) 
• Brand logo strip linking to each brand page 
5.3 Floating WhatsApp button 
• Persistent on every page — bottom right corner 
• Tapping opens the WhatsApp bot main menu 
• Should not obstruct page content on mobile — test on common screen sizes 
5.4 Lead capture backend 
• Every form on the site emails a lead summary to the assigned email address. 
• All submissions must also write to a centralised lead log (spreadsheet or CRM) — 
field: source page, campaign type, business type, location, name, email, phone, 
company, timestamp 
• Dev team to confirm CRM or lead log tool before building forms — this affects the 
integration approach 
• WhatsApp bot captures leads independently via the bot platform— confirm whether 
these need to merge into the same lead log 
5.5 Gated document download — shared component 
Used in multiple locations: homepage ("Namibia Media Landscape"), About Us (company 
profile), Audiences & Insights (brand data), brand pages (brand profiles). Single reusable 
component: 
• Trigger: button or CTA block 
• Modal or inline form: "Enter your email to receive this document" 
Confidential  |  futuremedia.com.na  |  Page 22 of 27 
Future Media Website — Development Brief 
• Optional: name field + which document(s) to receive (used on brand profile requests) 
• On submit: automated email sends the requested PDF · lead email to assigned rep 
• All gated downloads must log to the centralised lead log 
Confidential  |  futuremedia.com.na  |  Page 23 of 27 
Future Media Website — Development Brief 
Confidential  |  futuremedia.com.na  |  Page 24 of 27 
6. Consolidated Open Questions 
The following must be resolved by the Future Media team before or during the dev briefing 
session. They are listed in priority order. 
 
# Question Affects Answer Received? 
1 Should the WhatsApp bot 
Latest Offers flow sync 
automatically with the website 
CMS, or be maintained 
separately? 
CMS data model, 
WhatsApp bot  
2 Who is the designated 
editor/approver for the Latest 
News approval workflow? 
Latest News page  
3 Who is responsible for writing 
new Latest News content, and 
how often should new content 
be published? 
Latest News page  
4 How often is audience data 
updated, and who owns 
keeping it current? 
Audiences & Insights 
page maintenance  
5 Are there any audience stats 
that are competitively 
sensitive and should not be 
published publicly? 
Audiences & Insights 
gating strategy  
6 What is the expected 
publishing frequency for 
Latest News? 
Hub layout and empty 
state design 
 
7 Copy for all pages, headlines 
and sub-headers to be 
confirmed 
All pages  
8 Terms & Conditions review & 
update 
Terms & Conditions 
page 
 
9 Identify the WhatsApp number WhatsApp  
10  Who receives the WhatsApp 
notification when a request is 
submitted to ‘Urgently Speak 
To Someone’? 
WhatsApp  
Future Media Website — Development Brief 
11 
12 
Confirm email address where 
Sponsorship & Partnership 
submission notification is sent. 
Contact Form – 
Sponsorship & 
Partnership requests 
Does Zoho CRM offer 
integration for leads capturing 
be automated? 
Document email 
requests; contact form 
submissions 
Confidential  |  futuremedia.com.na  |  Page 25 of 27 
Future Media Website — Development Brief 
Confidential  |  futuremedia.com.na  |  Page 26 of 27 
7. Lead Generation Strategy Summary 
Every page and component in this specification is designed around one principle: no 
anonymous interactions. A visitor who reads, downloads, or enquires must leave a contact 
detail. Below is a summary of all lead capture touchpoints across the site. 
 
Touchpoint Lead captured Routed to Location 
Media Audit form 
(4-step) 
Name, email, 
phone, company, 
campaign type, 
location 
Email:  
sales@futuremedia.com.na  
+ Lead log 
Homepage, 
Advertise, Contact 
Us, Offer pages 
Gated document 
download 
Email address (+ 
name optional) 
Lead log Homepage, About 
Us, Audiences & 
Insights, Brand 
pages 
Brand profile 
request 
Email address Lead log  Brands page, 
individual brand 
pages 
Newsletter sign-up Name, email, 
language 
preference 
Newsletter platform mailing list Latest News, 
article pages, 
footer 
WhatsApp bot — 
all flows 
WhatsApp number 
(auto) + 
email/name per 
flow 
Bot platform log + lead log (if 
kept separately) 
Floating button, all 
pages 
Sponsorship 
request form 
Company, name, 
email, budget 
range, brief 
Events/partnerships team. 
Email address TBC 
Events section, 
WhatsApp bot 
Latest Offers 
enquiry 
Name, email pre
tagged with offer 
name 
Email:  
sales@futuremedia.com.na  
+ Lead log 
Offer detail pages, 
WhatsApp bot 
Advertising 
Packages enquiry 
Name, email pre
tagged with 
package name 
Email:  
sales@futuremedia.com.na  
+ Lead log 
Advertising 
Packages page 
 
 
Future Media Website — Development Brief 
8. Reference Sites & Inspiration 
Reference 
What to borrow 
Primedia (primedia.co.za) 
Where applied 
SABC (sabc.co.za) 
Clean homepage with less 
clutter. Strong visual hierarchy. 
Clear primary CTA. 
Homepage overall structure 
and hero design. 
ARN (arn.com.au) 
Scrolling banner with events, 
music submissions, 
announcements. 
Homepage scrolling sub
banner component. 
Listnr Advertise 
(advertise.listnr.com) 
Solutions with drop-downs on 
specific products/services. 
Clean expandable layout. 
Solutions section on 
Advertise page. Solutions 
sub-page. 
Multi-step "Advertise with us" 
contact form concept. 
Free Media Audit 4-step 
form structure. 
End of Development Brief 
Future Media  ·  futuremedia.com.na  ·  Confidential 
Confidential  |  futuremedia.com.na  |  Page 27 of 27 
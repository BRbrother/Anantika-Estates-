const properties=[
{name:"Royal Greens Plot",type:"Plot",location:"Ajmer Road",price:"₹38 Lakh",area:"120 Gaj",img:"https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1000&q=80",tag:"FEATURED"},
{name:"Anantika Villa",type:"Villa",location:"Vaishali Nagar",price:"₹1.45 Cr",area:"2,400 Sq.Ft.",img:"https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1000&q=80",tag:"PREMIUM"},
{name:"Jagatpura Residence",type:"House",location:"Jagatpura",price:"₹72 Lakh",area:"1,650 Sq.Ft.",img:"https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1000&q=80",tag:"FEATURED"},
{name:"Tonk Road Commercial",type:"Commercial",location:"Tonk Road",price:"₹95 Lakh",area:"1,100 Sq.Ft.",img:"https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=1000&q=80",tag:"COMMERCIAL"},
{name:"Malviya Urban Flat",type:"Flat",location:"Malviya Nagar",price:"₹68 Lakh",area:"1,350 Sq.Ft.",img:"https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=1000&q=80",tag:"NEW"},
{name:"Jaipur Land Parcel",type:"Land",location:"Ajmer Road",price:"₹1.10 Cr",area:"2,000 Sq.Yd.",img:"https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=1000&q=80",tag:"LAND"}];

const grid=document.getElementById("propertyGrid");
function renderProperties(list=properties){
  grid.innerHTML=list.length?list.map((p,i)=>`<article class="property-card reveal visible"><div class="property-image" style="background-image:url('${p.img}')"><span class="badge">${p.tag}</span></div><div class="property-info"><h3>${p.name}</h3><div class="location">📍 ${p.location}, Jaipur</div><div class="meta"><span>${p.type}</span><span>${p.area}</span></div><div class="price">${p.price}</div><a class="card-btn" href="#contact" onclick="selectProperty('${p.name}')">VIEW & ENQUIRE →</a></div></article>`).join(""):`<p>No demo properties match your filters. Try another search.</p>`;
}
function filterProperties(){
 const type=document.getElementById("typeFilter").value, loc=document.getElementById("locationFilter").value;
 renderProperties(properties.filter(p=>(type==="all"||p.type===type)&&(loc==="all"||p.location===loc)));
 document.getElementById("properties").scrollIntoView({behavior:"smooth"});
}
document.getElementById("searchBtn").addEventListener("click",filterProperties);
function selectProperty(name){setTimeout(()=>{document.querySelector('[name="message"]').value=`I am interested in ${name}. Please share more details and arrange a site visit.`},100)}
const menuBtn=document.getElementById("menuBtn"),menu=document.getElementById("mainMenu");
menuBtn.addEventListener("click",()=>menu.classList.toggle("open"));
menu.querySelectorAll("a").forEach(a=>a.addEventListener("click",()=>menu.classList.remove("open")));
window.addEventListener("scroll",()=>document.getElementById("nav").classList.toggle("scrolled",scrollY>30));
const observer=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting)e.target.classList.add("visible")}),{threshold:.12});
document.querySelectorAll(".reveal").forEach(e=>observer.observe(e));
function openWhatsApp(){
 const number="919999999999"; // CHANGE THIS TO YOUR WHATSAPP NUMBER
 const msg=encodeURIComponent("Hello Anantika Estates, I am interested in a property. Please help me.");
 window.open(`https://wa.me/${number}?text=${msg}`,"_blank");
}
document.getElementById("leadForm").addEventListener("submit",e=>{
 e.preventDefault();
 const f=new FormData(e.target);
 const message=`Hello Anantika Estates, I am ${f.get("name")}. Requirement: ${f.get("requirement")}, Property: ${f.get("property")}, Location: ${f.get("location")||"Any"}, Budget: ${f.get("budget")||"Not specified"}. ${f.get("message")||""}`;
 const number="919999999999"; // CHANGE THIS TO YOUR WHATSAPP NUMBER
 window.open(`https://wa.me/${number}?text=${encodeURIComponent(message)}`,"_blank");
 document.getElementById("formNote").textContent="Your enquiry is ready to send on WhatsApp.";
});
renderProperties();

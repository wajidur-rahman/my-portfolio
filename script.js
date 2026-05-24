// ১. স্ক্রল করলে নেভিগেশন বার ব্যাকগ্রাউন্ড চেঞ্জ হওয়া
window.addEventListener("scroll", function(){
    let navbar = document.getElementById("navbar");
    if(window.scrollY > 50){
        navbar.classList.add("active");
    } else {
        navbar.classList.remove("active");
    }
});

// ২. Scroll Down বাটনে ক্লিক লজিক
const scrollBtn = document.getElementById("scroll-down-btn");
if(scrollBtn) {
    scrollBtn.addEventListener("click", () => {
        const nextSection = document.getElementById("projects-section");
        if(nextSection) {
            nextSection.scrollIntoView({ behavior: "smooth" });
        }
    });
}

// ৩. মোবাইল হ্যামবার্গার মেনু টগল ও আইকন অ্যানিমেশন লজিক
const toggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");

toggle.addEventListener("click", () => {
    navLinks.classList.toggle("active");
    toggle.classList.toggle("toggle-active");
});

document.querySelectorAll('.nav-links li a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
        toggle.classList.remove('toggle-active');
    });
});

// ৪. ইন্টারঅ্যাক্টিভ স্কিলস ক্যাটাগরি ক্লিকের লজিক (Accordion Script)
document.addEventListener("DOMContentLoaded", () => {
    const accordionHeaders = document.querySelectorAll(".accordion-header");

    accordionHeaders.forEach(header => {
        header.addEventListener("click", function() {
            const currentItem = this.parentElement;
            
            document.querySelectorAll(".accordion-item").forEach(item => {
                if (item !== currentItem) item.classList.remove("active");
            });

            currentItem.classList.toggle("active");
        });
    });
});

// ৫. স্ক্রল অ্যানিমেশন (নিচের সেকশনগুলো ভেসে ওঠার লজিক)
const elements = document.querySelectorAll(".hidden");

const showOnScroll = () => {
    elements.forEach((el) => {
        const elementTop = el.getBoundingClientRect().top;
        if (elementTop < window.innerHeight - 100) {
            el.classList.add("show");
        } else {
            el.classList.remove("show");
        }
    });
};

window.addEventListener("scroll", showOnScroll);
window.addEventListener("load", showOnScroll);


// ৬. অটোমেটিক টাইপিং অ্যানিমেশন স্কিল লজিক
const skills = ["Web Development", "Microsoft Office", "Video Editing"];
let skillIndex = 0;
let charIndex = 0;
let isDeleting = false;
const typingTextElement = document.getElementById("typing-text");

function typeEffect() {
    if (!typingTextElement) return;

    const currentSkill = skills[skillIndex];
    
    if (isDeleting) {
        typingTextElement.textContent = currentSkill.substring(0, charIndex - 1);
        charIndex--;
    } else {
        typingTextElement.textContent = currentSkill.substring(0, charIndex + 1);
        charIndex++;
    }

    let typeSpeed = isDeleting ? 50 : 100;

    if (!isDeleting && charIndex === currentSkill.length) {
        typeSpeed = 1500; 
        isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        skillIndex = (skillIndex + 1) % skills.length; 
        typeSpeed = 500; 
    }

    setTimeout(typeEffect, typeSpeed);
}

document.addEventListener("DOMContentLoaded", () => {
    typeEffect();
});

// পেজ রিফ্রেশ করলে বা লোড হলে একদম উপরে (Hero Section) নিয়ে যাওয়ার লজিক
window.addEventListener("load", () => {
    // ব্রাউজারের ডিফল্ট স্ক্রল রিস্টোরেশন বন্ধ করা
    if ('scrollRestoration' in history) {
        history.scrollRestoration = 'manual';
    }
    // স্ক্রল পজিশন একদম উপরে নিয়ে যাওয়া
    window.scrollTo(0, 0);
});
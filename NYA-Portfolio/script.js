/* NYA CREATIVE STUDIOS - MAIN GALLERY LOGIC
   Updated: January 2026
*/

// --- IMAGE DATABASE ---
const portfolioData = [
    // --- WEDDINGS & ENGAGEMENTS ---
    { src: "Wedding2025-78_websize.jpg", category: "weddings" },
    { src: "Wedding2025-24_websize.jpg", category: "weddings" },
    { src: "Wedding2025-96_websize.jpg", category: "weddings" },
    { src: "Wedding2025-82_websize.jpg", category: "weddings" },
    { src: "Wedding2025-22_websize.jpg", category: "weddings" },
    { src: "Wedding2025-35_websize.jpg", category: "weddings" },
    { src: "Wedding2025-118_websize.jpg", category: "weddings" },
    { src: "Wedding2025-84_websize.jpg", category: "weddings" },
    { src: "Wedding2025-48_websize.jpg", category: "weddings" },
    { src: "Wedding2025-107_websize.jpg", category: "weddings" },
    { src: "EngagementShoot1-33_websize.jpg", category: "weddings" },
    { src: "EngagementShoot1-52_websize.jpg", category: "weddings" },
    { src: "EngagementShoot1-31_websize.jpg", category: "weddings" },
    { src: "Wedding2025-18_websize.jpg", category: "weddings" },
    { src: "EngagementShoot1-47_websize.jpg", category: "weddings" },
    { src: "Wedding2025-12_websize.jpg", category: "weddings" },
    { src: "Wedding2025-8_websize.jpg", category: "weddings" },
    { src: "EngagementShoot1-51_websize.jpg", category: "weddings" },
    { src: "Wedding2025-10_websize.jpg", category: "weddings" },
    { src: "EngagementShoot1-25_websize.jpg", category: "weddings" },
    { src: "EngagementShoot1-6_websize.jpg", category: "weddings" },
    { src: "EngagementShoot1-5_websize.jpg", category: "weddings" },
    { src: "EngagementShoot1-20_websize.jpg", category: "weddings" },
    { src: "Wedding4_websize.jpg", category: "weddings" },
    { src: "Wedding7_websize.jpg", category: "weddings" },
    { src: "EngagementShoot1-16_websize.jpg", category: "weddings" },
    { src: "Wedding48_websize.jpg", category: "weddings" },
    { src: "Wedding20_websize.jpg", category: "weddings" },
    { src: "Wedding3_websize.jpg", category: "weddings" },
    { src: "Wedding52_websize.jpg", category: "weddings" },
    { src: "Wedding81_websize.jpg", category: "weddings" },
    { src: "Wedding92_websize.jpg", category: "weddings" },
    { src: "Wedding93_websize.jpg", category: "weddings" },
    { src: "Wedding79_websize.jpg", category: "weddings" },
    { src: "Wedding67_websize.jpg", category: "weddings" },
    { src: "Wedding57_websize.jpg", category: "weddings" },
    { src: "Wedding103_websize.jpg", category: "weddings" },
    { src: "Wedding54_websize.jpg", category: "weddings" },
    { src: "Wedding102_websize.jpg", category: "weddings" },

    // --- SENIORS ---
    { src: "SeniorPics2025-27_websize.jpg", category: "seniors" },
    { src: "SeniorPics2025-73_websize.jpg", category: "seniors" },
    { src: "SeniorPics2025-19_websize.jpg", category: "seniors" },
    { src: "SeniorPics2025-31_websize.jpg", category: "seniors" },
    { src: "SeniorPics2025-32_websize.jpg", category: "seniors" },
    { src: "SeniorPics2025-54_websize.jpg", category: "seniors" },
    { src: "SeniorPics2025-40_websize.jpg", category: "seniors" },
    { src: "SeniorPics2025-62_websize.jpg", category: "seniors" },
    { src: "SeniorPics2025-64_websize.jpg", category: "seniors" },
    { src: "SeniorPics2025-53_websize.jpg", category: "seniors" },
    { src: "SeniorPics2025-17_websize.jpg", category: "seniors" },
    { src: "SeniorPics2025-6_websize.jpg", category: "seniors" },
    { src: "Grayce-70_websize.jpg", category: "seniors" },
    { src: "Grayce-66_websize.jpg", category: "seniors" },
    { src: "SeniorPics2025-9_websize.jpg", category: "seniors" },
    { src: "Grayce-39_websize.jpg", category: "seniors" },
    { src: "SeniorPics2025-15_websize.jpg", category: "seniors" },
    { src: "Grayce-52_websize.jpg", category: "seniors" },
    { src: "Grayce-78_websize.jpg", category: "seniors" },
    { src: "Grayce-51_websize.jpg", category: "seniors" },
    { src: "2025-18_websize.jpg", category: "seniors" },
    { src: "2025-25_websize.jpg", category: "seniors" },
    { src: "2025-11_websize.jpg", category: "seniors" },
    { src: "2025-69_websize.jpg", category: "seniors" },
    { src: "2025-54_websize.jpg", category: "seniors" },
    { src: "2025-35_websize.jpg", category: "seniors" },
    { src: "2025-74_websize.jpg", category: "seniors" },
    { src: "2025-70_websize.jpg", category: "seniors" },
    { src: "2025-45_websize.jpg", category: "seniors" },

    // --- MATERNITY & NEWBORN ---
    { src: "Maternity Session 2025-11_websize.jpg", category: "maternity" },
    { src: "Newborn2025-24_websize.jpg", category: "maternity" },
    { src: "Newborn2025-9_websize.jpg", category: "maternity" },
    { src: "Newborn2025-19_websize.jpg", category: "maternity" },
    { src: "Maternity Session 2025-8_websize.jpg", category: "maternity" },
    { src: "Newborn2025-21_websize.jpg", category: "maternity" },
    { src: "Newborn2025-16_websize.jpg", category: "maternity" },
    { src: "Newborn2025-17_websize.jpg", category: "maternity" },
    { src: "Maternity Session 2025-14_websize.jpg", category: "maternity" },

    // --- FAMILY ---
    { src: "Shyanne's Session-33_websize.jpg", category: "family" },
    { src: "Christmas-10_websize.jpg", category: "family" },
    { src: "Christmas2-2_websize.jpg", category: "family" },
    { src: "Christmas2-12_websize.jpg", category: "family" },
    { src: "Christmas2-16_websize.jpg", category: "family" },
    { src: "Shyanne's Session-A_websize.jpg", category: "family" },
    { src: "Christmas2-6_websize.jpg", category: "family" },
    { src: "Christmas-34_websize.jpg", category: "family" },
    { src: "Shyanne's Session-55_websize.jpg", category: "family" },
    { src: "Shyanne's Session-52_websize.jpg", category: "family" },
    { src: "Christmas-21_websize.jpg", category: "family" },
    { src: "Shyanne's Session-3_websize.jpg", category: "family" },
    { src: "Christmas-9_websize.jpg", category: "family" },
    { src: "Christmas-41_websize.jpg", category: "family" },
    { src: "Shyanne's Session-20_websize.jpg", category: "family" },

    // --- BRANDING ---
    { src: "DogChristmas-46_websize.jpg", category: "branding" },
    { src: "DogChristmas-26_websize.jpg", category: "branding" },
    { src: "DogChristmas-94_websize.jpg", category: "branding" },
    { src: "DogChristmas-4_websize.jpg", category: "branding" },
    { src: "DogChristmas-8_websize.jpg", category: "branding" },
    { src: "Birthday-29_websize.jpg", category: "branding" },
    { src: "Birthday-21_websize.jpg", category: "branding" },
    { src: "Birthday-8_websize.jpg", category: "branding" },
    { src: "Birthday-19_websize.jpg", category: "branding" },
    { src: "Birthday-48_websize.jpg", category: "branding" },
    { src: "40thBday-23_websize.jpg", category: "branding" },
    { src: "40thBday-226_websize.jpg", category: "branding" },
    { src: "40thBday-16_websize.jpg", category: "branding" },
    { src: "40thBday-13_websize.jpg", category: "branding" },
    { src: "40thBday-207_websize.jpg", category: "branding" },
    { src: "40thBday-57_websize.jpg", category: "branding" },
    { src: "40thBday-229_websize.jpg", category: "branding" },
    { src: "40thBday-137_websize.jpg", category: "branding" },

    // --- SCHOOL & SPORTS (Merged) ---
    { src: "Sports2025-18_websize.jpg", category: "school" },
    { src: "Sports2025-27_websize.jpg", category: "school" },
    { src: "Sports2025-103_websize.jpg", category: "school" },
    { src: "Sports2025-70_websize.jpg", category: "school" },
    { src: "Sports2025-14_websize.jpg", category: "school" },
    { src: "QuakerValleyHighSchoolFootball-277_websize.jpg", category: "school" },
    { src: "QuakerValleyHighSchoolFootball-275_websize.jpg", category: "school" },
    { src: "QuakerValleyHighSchoolFootball-206_websize.jpg", category: "school" },
    { src: "QuakerValleyHighSchoolFootball-158_websize.jpg", category: "school" },
    { src: "QuakerValleyHighSchoolFootball-307_websize.jpg", category: "school" },
    { src: "QuakerValleyHighSchoolFootball-203_websize.jpg", category: "school" },
    { src: "QuakerValleyHighSchoolFootball-122_websize.jpg", category: "school" },
    { src: "QuakerValleyHighSchoolFootball-109_websize.jpg", category: "school" },
    { src: "QuakerValleyHighSchoolFootball-253_websize.jpg", category: "school" },
    { src: "QuakerValleyHighSchoolFootball-299_websize.jpg", category: "school" },
    { src: "QuakerValleyHighSchoolFootball-65_websize.jpg", category: "school" },
    { src: "QuakerValleyHighSchoolFootball-19_websize.jpg", category: "school" },
    { src: "QuakerValleyHighSchoolFootball-160_websize.jpg", category: "school" },
    { src: "QuakerValleyHighSchoolFootball-197_websize.jpg", category: "school" },
    { src: "QuakerValleyHighSchoolFootball-244_websize.jpg", category: "school" },
    { src: "QuakerValleyHighSchoolFootball-167_websize.jpg", category: "school" },
    { src: "QuakerValleyHighSchoolFootball-71_websize.jpg", category: "school" },
    { src: "QuakerValleyHighSchoolFootball-25_websize.jpg", category: "school" },
    { src: "QuakerValleyHighSchoolFootball-226_websize.jpg", category: "school" },
    { src: "QuakerValleyHighSchoolFootball-233_websize.jpg", category: "school" }
];

// --- GALLERY INITIALIZATION ---
document.addEventListener('DOMContentLoaded', () => {
    const galleryGrid = document.getElementById('gallery-grid');
    const filterButtons = document.querySelectorAll('.filter-btn');

    // 1. Function to create the HTML for a single image
    function createImageCard(image) {
        const div = document.createElement('div');
        div.className = 'gallery-item break-inside-avoid mb-6 opacity-0 translate-y-4 transition-all duration-700 ease-out';
        
        div.innerHTML = `
            <div class="relative group overflow-hidden border border-gray-200 hover:border-[#D4AF37] transition-colors duration-300">
                <img src="${image.src}" 
                     alt="${image.category} photography" 
                     class="w-full h-auto object-cover transform transition-transform duration-700 group-hover:scale-105"
                     loading="lazy"
                     onload="this.parentElement.parentElement.classList.remove('opacity-0', 'translate-y-4')"
                >
                <div class="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300"></div>
            </div>
        `;
        return div;
    }

    // 2. Function to Render Images
    function renderGallery(filter = 'all') {
        if(galleryGrid) {
            // Fade out current content
            galleryGrid.style.opacity = '0';
            
            setTimeout(() => {
                galleryGrid.innerHTML = '';
                
                // Filter the data
                const filteredData = filter === 'all' 
                    ? portfolioData 
                    : portfolioData.filter(img => img.category === filter);
                
                // Append new images
                filteredData.forEach(img => {
                    const card = createImageCard(img);
                    galleryGrid.appendChild(card);
                });

                // Fade in new content
                galleryGrid.style.opacity = '1';
                
            }, 300); // Wait for fade out
        }
    }

    // 3. Setup Filter Button Clicks
    if(filterButtons) {
        filterButtons.forEach(btn => {
            btn.addEventListener('click', (e) => {
                // Remove active class from all
                filterButtons.forEach(b => {
                    b.classList.remove('bg-[#1A1A1A]', 'text-white', 'border-[#1A1A1A]');
                    b.classList.add('bg-white', 'text-gray-600', 'border-gray-200');
                });
                
                // Add active class to clicked
                e.target.classList.remove('bg-white', 'text-gray-600', 'border-gray-200');
                e.target.classList.add('bg-[#1A1A1A]', 'text-white', 'border-[#1A1A1A]');

                const filterValue = e.target.getAttribute('data-filter');
                renderGallery(filterValue);
            });
        });
    }

    // 4. Initial Load
    renderGallery('all');
});

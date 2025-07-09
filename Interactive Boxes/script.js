// Handle bundle option selection and expansion
const bundleOptions = document.querySelectorAll('.bundle-option');
const totalSpan = document.querySelector('.total');
const prices = { 1: 195, 2: 345, 3: 528 };

bundleOptions.forEach(option => {
    option.addEventListener('click', function(e) {
        // Don't trigger selection if clicking on dropdown
        if (e.target.closest('.dropdown')) return;
        
        const optionNumber = this.dataset.option;
        const details = this.querySelector('.bundle-details');
        const radioButton = this.querySelector('.radio-button');
        
        // Clear all selections and expansions first
        bundleOptions.forEach(opt => {
            opt.classList.remove('selected', 'expanded');
            const optDetails = opt.querySelector('.bundle-details');
            if (optDetails) {
                optDetails.classList.remove('show');
            }
            opt.querySelector('.radio-button').classList.remove('selected');
        });
        
        // Select and expand this option
        this.classList.add('selected', 'expanded');
        if (details) {
            details.classList.add('show');
        }
        radioButton.classList.add('selected');
        
        // Update total
        const price = prices[optionNumber];
        totalSpan.textContent = `Total: DKK ${price}.00`;
    });
});

// Handle dropdown functionality
const dropdownButtons = document.querySelectorAll('.dropdown-button');

dropdownButtons.forEach(button => {
    button.addEventListener('click', function(e) {
        e.stopPropagation();
        
        const dropdownId = this.dataset.dropdown;
        const menu = document.getElementById(dropdownId + '-menu');
        
        // Close all other dropdowns
        document.querySelectorAll('.dropdown-menu').forEach(m => {
            if (m !== menu) m.classList.remove('show');
        });
        
        // Toggle this dropdown
        menu.classList.toggle('show');
    });
});

// Handle dropdown item selection
const dropdownItems = document.querySelectorAll('.dropdown-item');

dropdownItems.forEach(item => {
    item.addEventListener('click', function(e) {
        e.stopPropagation();
        
        const button = this.closest('.dropdown').querySelector('.dropdown-button');
        const menu = this.closest('.dropdown-menu');
        
        // Update button text
        button.textContent = this.textContent;
        
        // Close dropdown
        menu.classList.remove('show');
    });
});

// Close dropdowns when clicking outside
document.addEventListener('click', function(e) {
    if (!e.target.closest('.dropdown')) {
        document.querySelectorAll('.dropdown-menu').forEach(menu => {
            menu.classList.remove('show');
        });
    }
});
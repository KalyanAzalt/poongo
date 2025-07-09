const bundleOptions = document.querySelectorAll('.bundle-option');
const totalSpan = document.querySelector('.total');
const prices = { 1: 195, 2: 345, 3: 528 };

bundleOptions.forEach(option => {
    option.addEventListener('click', function(e) {
      
        if (e.target.closest('.dropdown')) return;
        
        const optionNumber = this.dataset.option;
        const details = this.querySelector('.bundle-details');
        const radioButton = this.querySelector('.radio-button');    

        bundleOptions.forEach(opt => {
            opt.classList.remove('selected', 'expanded');
            const optDetails = opt.querySelector('.bundle-details');
            if (optDetails) {
                optDetails.classList.remove('show');
            }
            opt.querySelector('.radio-button').classList.remove('selected');
        });
        
        this.classList.add('selected', 'expanded');
        if (details) {
            details.classList.add('show');
        }
        radioButton.classList.add('selected');
        
        const price = prices[optionNumber];
        totalSpan.textContent = `Total: DKK ${price}.00`;
    });
});

const dropdownButtons = document.querySelectorAll('.dropdown-button');

dropdownButtons.forEach(button => {
    button.addEventListener('click', function(e) {
        e.stopPropagation();
        
        const dropdownId = this.dataset.dropdown;
        const menu = document.getElementById(dropdownId + '-menu');
        
        document.querySelectorAll('.dropdown-menu').forEach(m => {
            if (m !== menu) m.classList.remove('show');
        });
        
        menu.classList.toggle('show');
    });
});

const dropdownItems = document.querySelectorAll('.dropdown-item');

dropdownItems.forEach(item => {
    item.addEventListener('click', function(e) {
        e.stopPropagation();
        
        const button = this.closest('.dropdown').querySelector('.dropdown-button');
        const menu = this.closest('.dropdown-menu');
     
        button.textContent = this.textContent;
   
        menu.classList.remove('show');
    });
});

document.addEventListener('click', function(e) {
    if (!e.target.closest('.dropdown')) {
        document.querySelectorAll('.dropdown-menu').forEach(menu => {
            menu.classList.remove('show');
        });
    }
});
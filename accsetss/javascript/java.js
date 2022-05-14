const showSuccess = document.querySelector('.btn--success');
const showInfo = document.querySelector('.btn--info');
const showWarn = document.querySelector('.btn--warn');
const showDanger = document.querySelector('.btn--danger');


function toast( { 
                title = '', 
                message = '', 
                type = '', 
                duration = 1000
}) {
    const main = document.getElementById('toast');


    if (main) {
        const toast = document.createElement('div')

        const autoRemove = setTimeout(function(){
            main.removeChild(toast);
            
        }, duration + 500);

        toast.onclick = function(e) {
        if (e.target.closest('.toast__close')) {
            main.removeChild(toast);
            clearTimeout(autoRemove)
        }
    }
        const icons = {
            success: 'fa-solid fa-circle-check',
            info: 'fa-solid fa-circle-info',
            warning: 'fa-solid fa-circle-exclamation',
            error: 'fa-solid fa-circle-exclamation'
        }
        const icon = icons[type]
        const delay = (duration / 1000).toFixed(1);
        toast.classList.add('toast', `toast--${type}`);
        toast.style.animation = `slideInLeft linear 0.3s, fadeOut linear 1s ${delay}s`;
        toast.innerHTML = `
        
            <div class="toast__icon">
                <i class="${icon}"></i>
            
            </div>
            <div class="toast__body">
                <h3 class="toast__title">${title}</h3>
                <p class="toast__msg">${message}</p>
            </div>
            <div class="toast__close">
                <i class="fa-solid fa-xmark"></i>
            </div>
        
        `;
        main.appendChild(toast);

        
    }
}


showSuccess.onclick = function() {
    toast(
    {
    title: 'Success',
    message: 'Kết nối thành công',
    type: 'success',
    duration: 4000
    })
},
showWarn.onclick = function() {
    toast(
        {
        title: 'Warnning',
        message: 'Không hợp lệ, thử lại',
        type: 'warning',
        duration: 4000
        },
    )
},
showDanger.onclick = function() {
    toast(
        {
        title: 'Thất bại',
        message: 'Không thành công',
        type: 'error',
        duration: 4000
        }
    )
}
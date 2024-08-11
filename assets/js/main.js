document.addEventListener("DOMContentLoaded", function () {
    var faqItems = document.querySelectorAll('.faq-item');

    faqItems.forEach(function (item) {
        item.querySelector('.question-div').addEventListener('click', function () {
            var answer = item.querySelector('.faq-answer');

            if (answer.classList.contains('collapsing')) return;

            if (!answer.style.display || answer.style.display === "none") {
                closeAllAnswers();
                answer.style.display = "block";
                answer.style.height = "0px";
                answer.classList.add('collapsing');
                let height = answer.scrollHeight;
                answer.style.height = height + "px";
                window.setTimeout(() => {
                    answer.classList.remove('collapsing');
                    answer.style.height = "auto";
                }, 300);
            } else {
                answer.style.height = answer.scrollHeight + "px";
                window.setTimeout(() => {
                    answer.classList.add('collapsing');
                    answer.style.height = "0px";
                }, 10);
                window.setTimeout(() => {
                    answer.classList.remove('collapsing');
                    answer.style.display = "none";
                }, 300);
            }
        });
    });

    function closeAllAnswers() {
        faqItems.forEach(function (item) {
            var answer = item.querySelector('.faq-answer');
            if (answer.style.display === "block") {
                answer.style.height = answer.scrollHeight + "px";
                window.setTimeout(() => {
                    answer.classList.add('collapsing');
                    answer.style.height = "0px";
                }, 10);
                window.setTimeout(() => {
                    answer.classList.remove('collapsing');
                    answer.style.display = "none";
                }, 300);
            }
        });
    }
});

const hamburguerButton = document.querySelector('.menu-toggle');
const itensNavDiv = document.querySelector('.itens-nav-div');

hamburguerButton.addEventListener('click', () => {
    itensNavDiv.classList.toggle('active');
    hamburguerButton.classList.toggle('active');
});
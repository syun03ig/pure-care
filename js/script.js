/* =================================================
   Pure Care 共通スクリプト
================================================= */
document.addEventListener('DOMContentLoaded', function() {
  
  // 1. スムーススクロール（リンクをクリックした時に滑らかに動く）
  const links = document.querySelectorAll('a[href^="#"]');
  links.forEach(link => {
    link.addEventListener('click', e => {
      const href = link.getAttribute('href');
      if (href !== '#') {
        e.preventDefault();
        const target = document.querySelector(href);
        if (target) {
          target.scrollIntoView({ behavior: 'smooth' });
        }
      }
    });
  });

  // 2. お知らせやカードのふわっとした表示（必要であれば）
  // 今は余計な動きを入れず、まずは表示を安定させます
  console.log("Pure Care script loaded.");

});
// 画面内の特定の要素を自動で見つけて動かす魔法
document.addEventListener("DOMContentLoaded", () => {
  const targets = document.querySelectorAll('.news, .features, .feature-card, .faq, .interview-section, .profile-block, .contact-form-wrapper, .section-block');
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-show');
      }
    });
  }, { threshold: 0.1 });

  targets.forEach(target => {
    target.classList.add('fade-up'); // 動きの準備クラスを自動付与
    observer.observe(target);
  });
});
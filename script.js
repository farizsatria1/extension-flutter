// Read More functionality
function setReadMore(buttonId, codeBoxId, overlayClass) {
  const readMoreBtn = document.getElementById(buttonId);
  const codeBox = document.getElementById(codeBoxId);
  const overlay = codeBox.querySelector(overlayClass);

  readMoreBtn.addEventListener('click', function () {
      if (codeBox.classList.contains('expanded')) {
          codeBox.classList.remove('expanded');
          overlay.style.display = 'block';
          readMoreBtn.textContent = 'Read More';
      } else {
          codeBox.classList.add('expanded');
          overlay.style.display = 'none';
          readMoreBtn.textContent = 'Read Less';
      }
  });
}

// Copy button functionality
function setCopyButton(buttonId, codeContentId) {
  const copyBtn = document.getElementById(buttonId);
  const codeContent = document.getElementById(codeContentId);

  copyBtn.addEventListener('click', function () {
      const code = codeContent.textContent;
      navigator.clipboard.writeText(code).then(() => {
          alert('Code copied to clipboard!');
      }).catch(err => {
          alert('Failed to copy code.');
      });
  });
}

// Initialize Read More functionality
setReadMore('readMoreBtn1', 'codeBox1', '.overlay');
setReadMore('readMoreBtn2', 'codeBox2', '.overlay');
setReadMore('readMoreBtn3', 'codeBox3', '.overlay');
setReadMore('readMoreBtn4', 'codeBox4', '.overlay');
setReadMore('readMoreBtn5', 'codeBox5', '.overlay');

// Initialize Copy functionality
setCopyButton('copyBtn1', 'codeContent1');
setCopyButton('copyBtn2', 'codeContent2');
setCopyButton('copyBtn3', 'codeContent3');
setCopyButton('copyBtn4', 'codeContent4');
setCopyButton('copyBtn5', 'codeContent5');

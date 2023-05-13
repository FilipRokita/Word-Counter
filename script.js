const textInput = document.getElementById('text');
const charCount = document.getElementById('charCount');
const wordCount = document.getElementById('wordCount');

textInput.addEventListener('input', () => {
  const text = textInput.value;
  charCount.textContent = text.length;
  wordCount.textContent = text.trim().split(/\s+/).length;
});

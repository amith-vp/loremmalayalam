
  const copyButton = document.querySelector('.copy-btn');
  const textArea = document.querySelector('#output');
  const copyMsg = document.querySelector('.copy-msg');
  
  copyButton.addEventListener('click', () => {
    textArea.select();
    document.execCommand('copy');
    copyMsg.innerText = 'Copied!';
    setTimeout(() => {
      copyMsg.innerText = '';
    }, 3000);
  });
  
  const buttons = document.querySelectorAll('.btn-medium');

  buttons.forEach(button => {
    button.addEventListener('click', () => {
      // Remove the 'active' class from all buttons
      buttons.forEach(btn => {
        btn.classList.remove('active');
      });
      
      // Add the 'active' class to the clicked button
      button.classList.add('active');
    });
  });

  // function generate(source) {
  //   const numWords = document.getElementById('num-words').value;
  //   fetch(`/generate?source=${source}&numWords=${numWords}`)
  //     .then(response => response.text())
  //     .then(result => {
  //       const output = document.getElementById('output');
  //       output.value = result;
  //     });
  // }
  function generate(type) {
    // Disable all buttons
    // Change the name of the clicked button to "Generating"
    var clickedButton = document.getElementById(type);
    var numWords = document.getElementById('num-words').value;
    if(type=='random' && numWords>10000 || type=='lorem' && numWords>10000){
      document.getElementById('output').value = "Looks like we need to call in some 'Drishyam' level problem solving here.Request for less than 10000 words?";
      return;
    }
    if(type=='wikipedia'&& numWords>2000 ){
      document.getElementById('output').value = "Looks like we need to call in some 'Drishyam' level problem solving here.Request for less than 2000 words?Use random/lorem for more words";
      return;
    }
    
    var buttons = document.querySelectorAll('.btn');
    buttons.forEach(function(button) {
      button.disabled = true;
    });

    clickedButton.innerHTML = 'Generating...';
  
    // Call the API to generate the text
    var url = '/generate?source=' + type + '&numWords=' + numWords;
    fetch(url)
      .then(response => response.text())
      .then(data => {
        document.getElementById('output').value = data;
        clickedButton.innerHTML = type.charAt(0).toUpperCase() + type.slice(1); // Revert back to the original name
        buttons.forEach(function(button) {
          button.disabled = false; // Enable all buttons
        });
      })
      .catch(error => {
        console.error(error);
        clickedButton.innerHTML = type.charAt(0).toUpperCase() + type.slice(1); // Revert back to the original name
        buttons.forEach(function(button) {
          button.disabled = false; // Enable all buttons
        });
        document.getElementById('output').value = "An error occurred. Please try again.";

      });
  }
  
  
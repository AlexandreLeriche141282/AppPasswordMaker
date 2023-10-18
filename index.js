const dataLowercase = "azertyuiopqsdfghjklmwxcvbn";
const dataUppercase = dataLowercase.toUpperCase();
const dataNumbers = "0123456789";
const dataSymbols = "$!:;,&*-+]";
const rangeValue=document.getElementById('password-length')
const passwordOutput=document.getElementById('password-output')

function generatePassword() {
    let data = [];
    let password = "";
    if (lowercase.checked) data.push(...dataLowercase);
    if (uppercase.checked) data.push(...dataUppercase);
    if (numbers.checked) data.push(...dataNumbers);
    if (symbols.checked) data.push(...dataSymbols);

    if (data.length === 0) {
        alert("veuillez sélectionner des critères");
        return;
    }
    // return pour arrêter la fonction
    
    for (i = 0; i < rangeValue.value; i++){
        password += data[Math.floor(Math.random() * data.length)];  
      
    }
    passwordOutput.value = password;
    // .value pour aller chercher la valeur dans un input

    passwordOutput.select();
    navigator.clipboard.writeText(passwordOutput.value);
    // Copier-Coller

    generateButton.textContent = "Copié!"
    setTimeout(() => {
        generateButton.textContent="Générer mot de passe"
    },2000)
}

generateButton.addEventListener("click", generatePassword);
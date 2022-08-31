const minhaString = "Eu não sou supersticioso, mas sou um pouco ________.      "
minhaString2=minhaString.replace("________","sticioso")
console.log (minhaString)
console.log ("Antes da remoção dos espaços, tinham "+minhaString.length+" caracteres. \nDepois da remoção dos espaços, ficaram " +minhaString.trim().length+" caracteres.\n" +minhaString2)
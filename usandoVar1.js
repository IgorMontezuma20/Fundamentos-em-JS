{
    {
        {
            {
                var sera = 'será???'
                console.log(sera)
            }
        }
    }
}

console.log(sera)

function teste(){
    var local = 123
    console.log(local)
}

teste()

console.log(local) // Essa sentença irá dar erro, pois a variável está declarada dentro do escopo de uma função. Ela não é GLOBAL.
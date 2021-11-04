function operadores(){
    // console.log('-------------- true/false');
    // console.log(!true); // false
    // console.log(!false); // true
    // console.log(!!false); // false
    // console.log(!!true); // true
    
    // console.log('-------------- 0/1');
    // console.log(!1); // false
    // console.log(!!1); // true
    // console.log(!0); // true
    // console.log(!!0); // false
    // // 0 false
    // // !0 true
    // // ! !0 false
    // console.log(!!""); // string vazia? false

    console.log('-------------- variaveis');
    let x = 5;
    let y = 9;
    
    // console.log(x < 10);
    // console.log(x !== 5); // não-igual
    // console.log(x != 5); // diferente

    // AND operador lógico
    // E 
    // &&

    // console.log(x < 10 && x !== 5); // TRUE && FALSE = FALSE

    // console.log(x > 9); // false
    // console.log(x === 5); // true

    // console.log(x > 9 || x === 5); // FALSE || TRUE = TRUE

    // comparação ESTRITA
    console.log( x===y ); // FALSE
    console.log( !(x===y) ); // TRUE

}

function teste(){
    let x=10;
    let y ="a";
    // console.log( y==="b")
    // console.log(x >= 10);
    console.log( y==="b" || x >= 10);


    x=3;
    y=8;
    // console.log(x == "3");
    // console.log(x === y);
    // console.log((x == "3" || x === y));
    console.log(! (x == "3" || x === y));

    // console.log(y !== 8);
    // console.log(x <= y);
    // console.log((y !== 8 && x <= y));
    console.log(! ((y !== 8 && x <= y)));

    console.log(!(x == "3" || x === y) && !(y !== 8 && x <= y));
    
    let str = ""
    let msg = "haha!"
    let eBonito = "false"
    
    // console.log(str || msg);
    // console.log(eBonito);
    // console.log((str || msg) && eBonito);
    console.log(!( (str || msg) && eBonito));
}

operadores();
teste();
var a = 22
var b = 12
a>b == true
a<b == false

5==5 //São iguais
5=='5'// São iguais também
5==='5'//Não são iguais
5!='5' //Não são considerados diferentes
5!=='5' //São considerados diferentes
/*  ! -> Negação
    && -> Conjunção (E)
    || -> Disjunção (Ou) */
    //Conjunção na prática:
true && false == false
true && true == true
false  && true == false
false  && false == false
    //Disjunção na prática:
false || false == false
true || false == true
true || true == true
false || true == true
/* Ordem:
    !->&&->|| */
//Operador ternário: ?: em uma expressão
n%2==1?'Ímpar':'Par'
//(teste lógico)?(Resultado verdadeiro):(resultado falso)

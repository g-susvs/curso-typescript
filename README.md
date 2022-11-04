
## Typescript

Typescript es un superset de javascript, lo que quiere decir que podemos hacer lo mismo que hacemos con javascript, pero tiene funcionalidades adicionales.

Es usado generalmente en proyectos grandes y medianos o también en proyectos pequeños que pueden escalar a uno más grande.

Typescript nos ayuda a reducir errores que podemos cometer con js, ya que cuenta con tipado estricto. También ayuda a realizar un código más legible permitiendo entender mejor la funcionalidad que implemento el programador encargado.

## Tipos primitivos vs de referencia
**Primitivos:** string, number, null, undefine boolean

Los datos primitivos se almacenan en ubicaciones unicas en la memoria.

 

```js
let x = 1;
let y = x;
x = 2;

console.log(x); // 2
console.log(y); // 1

```

**Referencia:** object, array

Los tipos de referencia hacen referencia ocupan un mismo espacio en la memoria.
 ```js
 let person1 ={
    name: 'Luis',
    age: 19
 };
 let person2 = person1;
 person1.name = 'Alex';

 console.log(person1); // {name: Alex, age: 19}
 console.log(person2); // {name: Alex, age: 19}
 ```


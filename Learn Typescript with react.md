# Apprendre Typescript avec React.js

## Généralité

## Déclaration de Type

**_Syntaxe_**:

```raw
type <nom-de-type> = {
    <props>: <type>,
    ....
}
```

**_Exemple_**:

```ts
type GreetingType = {
  name: string;
};

const Greeting = (props: GreetingType) => {
  return <p>Hello {props.name} </p>;
};

export default function App() {
  return <Greeting name="Ranto" />;
}
```

Le **props** name resoit une valeur de type string qui est déclaré dans la section GreetingType (c'est un nom de type) résultat affiché sur le navigateur est **Hello Ranto**

On peut aussi rendre un **props optionnel** c'est-à-dire le composant peut être utilisé même sans ces props. Pour les props optionnelles,il suffit d'ajouter une **?** après le nom du props

**_Syntaxe_**:

```raw
type <nom-de-type> = {
    <props>?: <type>,
    ....
}
```

**_Exemple_**:

```ts
type Greeting = {
  name?: string;
};

function Greeting(props: Greeting) {
  return <span>Hello {props.name ?? "everyone"} </span>;
}

export default function App() {
  return <Greeting />;
}
```

Dans ce code, le composant **Greeting** a une props **name** qui est de type **string** et aussi, **optionnel**. Alors le message affiché dans le navigateur est **Hello everyone** si on n'utilise pas le props **name** sinon on obtient **Hello Ranto** si la valeur du props est égale à Ranto comme par exemple.

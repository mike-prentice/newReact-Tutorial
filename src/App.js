const Pet = (props) => {
    return (
        React.createElement("div", {}, [
            React.createElement("h1", {}, props.name),
            React.createElement("h2", {}, props.animal),
            React.createElement("h2", {}, props.breed),
        ])
    )
}


const App = () => {
    return React.createElement(
        "div",
        {}, [
        React.createElement("h1", {}, "Adopt Me!"), 
            React.createElement(Pet, {
                name: "Freya",
                animal: "Dog",
                breed: "American Bulldog"
        }),
            React.createElement(Pet, {
                name: "Lizzie",
                animal: "Leopard Gecko",
                breed: "Regular"
        }),
            React.createElement(Pet, {
                name: "Max",
                animal: "Cat",
                breed: "Tabby"
        }),
        //Brackets above can be "null", or a class name / id
    ]);
}
    ReactDOM.render(React.createElement(App), document.getElementById("root"));
import React, { Component } from "react";
import Box from "./Box";

class MainC extends Component {
    state = {
        persons: [
            { id: 1, name: "Margit", age: 25, title: "CEO" },
            { id: 2, name: "Kati", age: 35, title: "Designer" },
            { id: 3, name: "Mari", age: 40, title: "Developer" },
        ],
    };

    // changeNameHandler = () => {
    //     console.log("WOW");
    // };

    render() {
        return (
            <>
            <main>
                {this.state.persons.map((item) => (<Box key={item.id} name={item.name} age={item.age} title={item.title} />
                ))}
            </main>
            </>
        );
    }
}

export default MainC;
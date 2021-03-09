import React, { Component } from 'react'

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            index: 1,
            image: null,
        }
    }

    fetchImage() {
        const url = `https://jsonplaceholder.typicode.com/photos/${this.state.index}`
        return new Promise((resolve) => {
            setTimeout(() => {
                fetch(url)
                    .then(resp => resp.json())
                    .then(resp => resolve(resp))
            }, 200)
        })
    }

    componentDidMount() {
        this.fetchImage().then(res => {
            this.setState(() => ({image: res}))
        });
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.state.index === prevState.index) return;
        this.fetchImage().then(res => {
            this.setState(() => ({image: res}))
        });
    }

    render() {
        return (
            <div className="container">
                <button
                    className="btn" type="button"
                    onClick={() => this.setState(state => ({index: state.index - 1}))}>
                    Prev
                </button>
                <div className="image-holder">
                    { this.state.image && <img src={this.state.image.url} /> }
                </div>
                <button
                    className="btn"
                    type="button"
                    onClick={() => this.setState(state => ({ index: state.index + 1 }))}>
                    Next
                </button>
            </div>
        )
    }
}

export default App;
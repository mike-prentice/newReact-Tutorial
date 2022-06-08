import {Component} from 'react';

class Carousel extends Component {
    state = {
        active: 0
    }

    static defaultProps = {
        images: ["http://pets-images.dev-apis.com/pets/non.jpg"],
    };

    handleIndexClick = (event) => { //dont have to use bind for events if using class properties instead of constructor
        this.setState({active: +event.target.dataset.index,}) //+ converts index to a number, like parseInt()  (javascript function)
    }

    render() {
        const { active } = this.state;
        const { images } = this.props;

        return (
            <div className="carousel">
                <img src={images[active]} alt="animal" />
                <div className="carousel-smaller">
                    {images.map((photo, index) => (
                        <img
                            onClick={this.handleIndexClick}
                            key={photo}
                            src={photo}
                            data-index={index}
                            className={index === active ? "active" : ""}
                            alt="animal thumbnail"
                        />
                    ))}
                </div>
            </div>
        );
    }

}
export default Carousel;
import { Component } from "react";
import { useParams } from "react-router-dom";
import Carousel from "./Carousel";
import ErrorBoundary from "./ErrorBoundary";
import ThemeContext from "./ThemeContext";
import Modal from "./Modal";

class Details extends Component {
  // constructor(props) { //always create constructor first when  creating a class component. Props come from parent (App)
  //     super(props); //always call super props first in constructor. Passes props from parent component to react

  //     this.state = {loading: true}; //set state
  // }

  state = { loading: true, showModal: false }; //after babel classs properties proposal

  async componentDidMount() {
    const res = await fetch(
      `http://pets-v2.dev-apis.com/pets?id=${this.props.params.id}`
    );

    const json = await res.json();

    this.setState({ loading: false, ...json.pets[0] });
    }
    
    toggleModal = () => {this.setState({showModal: !this.state.showModal})}

  render() {
    //render statement must be present in a class component
    if (this.state.loading) {
      return <h2>loading...</h2>;
    }

    const { animal, breed, city, state, description, name, images, showModal } =
      this.state;

    return (
      <div className="details">
        <Carousel images={images} />
        <div>
          <h1>{name}</h1>
          <h2>{`${animal} - ${breed} - ${city}, ${state}`}</h2>
          <ThemeContext.Consumer>
            {([theme]) => (
                        <button onClick= {this.toggleModal} style={{ backgroundColor: theme } }>
                Adopt {name}
              </button>
            )}
          </ThemeContext.Consumer>

                <p>{description}</p>
                {
                    showModal ? (<Modal>
                        <div>
                            <h1>Would you like to adopt {name}?</h1>
                            <div className="buttons">
                            <a href="https://bit.ly/pet-adopt">Yes</a>
                                <button onClick={this.toggleModal}>No</button>
                                </div>
                        </div>
                    </Modal>
                    ) : null  //react will render nothing if passed null
                }
        </div>
      </div>
    );
  }
}

const WrappedDetails = () => {
  const params = useParams();
  return (
    <ErrorBoundary>
      <Details params={params} />
    </ErrorBoundary>
  );
};

export default WrappedDetails;

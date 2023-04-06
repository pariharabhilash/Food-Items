import React from "react";
import { v4 as uuid } from "uuid";
import "./style.css";

const initialState = {
  name: "",
  description: "",
  type: "veg",
  status: "inActive",
  price: "",
  category: "breakFast",
};
export default class Form extends React.Component {
  constructor(props) {
    super(props);
    this.props = props;
    this.state = { ...initialState };
    this.onChangeHandler = this.onChangeHandler.bind(this);
    this.submitHandler = this.submitHandler.bind(this);
    this.resetHandler = this.resetHandler.bind(this);
  }
  UNSAFE_componentWillReceiveProps(nextProps) {
    const { actionType, ...editItem } = nextProps.editItem;
    if (actionType === "edit") {
      this.setState({ ...editItem });
    }
    if (actionType === "delete") {
      this.setState({ ...initialState, id: null });
    }
  }
  onChangeHandler(e) {
    const { name, value } = e.target;
    this.setState({
      ...this.state,
      [name]: value,
    });
  }
  submitHandler(e) {
    if (this.state.id) {
      this.props.onUpdateItem({ ...this.state });
    } else {
      this.props.onSubmit({ ...this.state, id: uuid() });
    }
    e.preventDefault();
  }
  resetHandler(e) {
    this.setState({ ...initialState, id: null });
    e.preventDefault();
  }
  render() {
    const { name, description, type, status, price, category } = this.state;
    return (
      <div className="form-wrapper">
        <form className="food-item-form">
          <div className="item-input-wrapper">
            <label>Item Name :</label>
            <input
              type="text"
              name="name"
              value={name}
              onChange={this.onChangeHandler}
            />
          </div>
          <div className="item-input-wrapper">
            <label> Description :</label>
            <textarea
              id="foodItemDescription"
              name="description"
              className="item-description-input"
              rows="4"
              cols="50"
              value={description}
              onChange={this.onChangeHandler}
            />
          </div>
          <div className="item-input-wrapper">
            <label>Type :</label>
            <span>
              <input
                type="radio"
                value="veg"
                id="veg"
                name="type"
                onChange={this.onChangeHandler}
                checked={type === "veg"}
              />
              <label htmlFor="veg">veg</label>

              <input
                type="radio"
                value="nonVeg"
                id="nonVeg"
                name="type"
                onChange={this.onChangeHandler}
                checked={type === "nonVeg"}
              />
              <label htmlFor="nonVeg">non-veg</label>
            </span>
          </div>
          <div className="item-input-wrapper">
            <label>Status :</label>
            <span>
              <input
                type="radio"
                value="active"
                id="active"
                name="status"
                onChange={this.onChangeHandler}
                checked={status === "active"}
              />
              <label htmlFor="active">Active</label>
              <input
                type="radio"
                value="inActive"
                id="inActive"
                name="status"
                onChange={this.onChangeHandler}
                checked={status === "inActive"}
              />
              <label htmlFor="inActive">Inactive</label>
            </span>
          </div>
          <div className="item-input-wrapper">
            <label>Price :</label>
            <input
              type="number"
              name="price"
              value={price}
              onChange={this.onChangeHandler}
            />
          </div>
          <div className="item-input-wrapper">
            <label>Category :</label>
            <select
              name="category"
              onChange={this.onChangeHandler}
              defaultValue={category}
            >
              <option value="breakFast">Break Fast</option>
              <option value="lunch">Lunch</option>
              <option value="dinner">Dinner</option>
            </select>
          </div>
          <div className="item-button-wrapper">
            <button type="submit" onClick={this.submitHandler}>
              {this.state.id ? "Update" : "Submit"}
            </button>
            <button type="submit" onClick={this.resetHandler}>
              Reset
            </button>
          </div>
        </form>
      </div>
    );
  }
}

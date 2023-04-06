import React from "react";
import "./style.css";
import Form from "../../components/Form";
import Table from "../../components/Table";

const AddFoodItem = () => {
  const [foodList, setFoodList] = React.useState([]);
  const [editItem, setEditItem] = React.useState({});
  const onSubmitHandler = (newFoodItem) => {
    setFoodList([...foodList, newFoodItem]);
  };
  const onDeleteHandler = (itemId) => {
    const filteredList = foodList.filter((item) => item.id !== itemId);
    setFoodList([...filteredList]);
	setEditItem({actionType: "delete"});
  };
  const onEditHandler = (payload) => {
    setEditItem({ ...payload, actionType: "edit" });
  };
  const onUpdateItem = (updatedItem) => {
    const updatedList = foodList.map((item) =>
      item.id === updatedItem.id ? { ...updatedItem } : item
    );
    setFoodList([...updatedList]);
  };
  return (
    <div>
      <main>
        <header className="header-section">
          <h1>React Form</h1>
        </header>
        <div className="create-section">
          <h5>Create Item</h5>
        </div>
        <section className="create-item-section">
          <Form
            onSubmit={onSubmitHandler}
            editItem={editItem}
            onUpdateItem={onUpdateItem}
          />
          {foodList.length > 0 && (
            <Table
              foodList={foodList}
              onDelete={onDeleteHandler}
              onEdit={onEditHandler}
            />
          )}
        </section>
      </main>
    </div>
  );
};

export default AddFoodItem;

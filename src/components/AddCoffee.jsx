import React from "react";
import Swal from "sweetalert2";

const AddCoffee = () => {
  const handleAddCoffee = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const newCoffee = Object.fromEntries(formData.entries());

    console.log("Data to be sent:", newCoffee);

    // Send coffee data to the database
    fetch("https://coffee-store-server-three-sable.vercel.app/coffees", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newCoffee),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          console.log("added the successfully.");
          Swal.fire({
            title: "Coffee added successfully!",
            icon: "success",
            draggable: true,
          });
          // form.React()
        }
      })
      .catch((err) => console.error("Error while adding coffee:", err));
  };
  return (
    <div className="p-24">
      <div className="p-12 text-center space-y-4">
        <h1 className="text-6xl">Add Coffee</h1>
        <p>
          It is a long established fact that a reader will be distraceted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsum is that it has a more-or-less normal distribution of
          letters, as opposed to using Content here.
        </p>
      </div>
      <form onSubmit={handleAddCoffee}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <fieldset className="fieldset bg-base-200 border-base-300 rounded-box  border p-4">
            <label className="label">Name</label>
            <input
              type="text"
              className="input w-full"
              name="name"
              placeholder="Coffee Name"
            />
          </fieldset>
          <fieldset className="fieldset bg-base-200 border-base-300 rounded-box  border p-4">
            <label className="label">Quantity</label>
            <input
              type="text"
              className="input w-full"
              name="quantity"
              placeholder="Coffee Quantity"
            />
          </fieldset>
          <fieldset className="fieldset bg-base-200 border-base-300 rounded-box  border p-4">
            <label className="label">Supplier</label>
            <input
              type="text"
              className="input w-full"
              name="supplier"
              placeholder="Coffee Supplier"
            />
          </fieldset>
          <fieldset className="fieldset bg-base-200 border-base-300 rounded-box  border p-4">
            <label className="label">Taste</label>
            <input
              type="text"
              className="input w-full"
              name="taste"
              placeholder="Coffee Taste"
            />
          </fieldset>
          <fieldset className="fieldset bg-base-200 border-base-300 rounded-box  border p-4">
            <label className="label">Price</label>
            <input
              type="text"
              className="input w-full"
              name="price"
              placeholder="Price per cup"
            />
          </fieldset>
          <fieldset className="fieldset bg-base-200 border-base-300 rounded-box  border p-4">
            <label className="label">Details</label>
            <input
              type="text"
              className="input w-full"
              name="details"
              placeholder="Coffee Details"
            />
          </fieldset>
        </div>
        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box  border my-6 p-4">
          <label className="label">Photo</label>
          <input
            type="text"
            className="input w-full"
            name="photo"
            placeholder="Photo URL"
          />
        </fieldset>
        <input type="submit" className="btn w-full" value="Add Coffee" />
      </form>
    </div>
  );
};

export default AddCoffee;

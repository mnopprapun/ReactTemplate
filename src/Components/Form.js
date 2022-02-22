import React from "react";
import "/Users/mathawudnopprapun/Development/react/template/src/Components/Form.css";

const Form = () => {
  return (
    <div class="form-box">
      <form class="card">
        <div class="img-container">
          <img src="#" alt="Avatar" class="avatar" />
        </div>
        <div class="input-container">
        <h2>Title</h2>
        <p>First Name</p>
        <input placeholder="First Name" />
        <p> Name </p>
        <input placeholder="Last Name" />
        <p> E-Mail </p>
        <input placeholder="E-Mail" />
        </div>
      </form>
      <div>
        <button>Submit</button>
        <label>
          <input type="checkbox" checked="checked" name="remember" /> Remember
          me
        </label>
      </div>
    </div>
  );
};

export default Form;

import React, { useState } from "react";

/**
 * Displays the form to create a new post, which can be either an image or a text post.
 *
 * When the form is submitted, a new post is created and the form contents cleared.
 */
function PostCreate() {
  const initialFormState = {
    type: "Text",
    content: "",
  };
  const [formState, setFormState] = useState({ ...initialFormState });
  const handleChange = ({target}) => {
    // console.log(formState, target.name, target.value);
    // console.log(formState);
    // console.log(event);
    setFormState({ ...formState, [target.name]: target.value });
  };
  // TODO: When the form is submitted, a new post should be created, and the form contents cleared.
  const handleSubmit = (event) => {
    event.preventDefault();
    setFormState({ ...initialFormState });
  };
  // For the tests to pass, the form below must have:
  // - a `name="create"` attribute
  // - one child `<button>` with a `type="submit"` attribute
  // - one child `<select>` with a `name="type"` attribute
  // - one child `<textarea>` or `<input>` (not both at the same time) with a `name="content"`

  return (
    <form name="create" onSubmit={handleSubmit}>
      <fieldset>
        <legend>Create</legend>
        <div>
          <label htmlFor="type">Type: </label>
          <select
            id="type"
            name="type"
            required={true}
            onChange={handleChange}
            value={formState.type}
          >
            <option>Text</option>
            <option>Image</option>
          </select>
        </div>
        <div>
          <label htmlFor="content">Content: </label>
          {formState.type === "Text" ? (
            <textarea
              id="content"
              name="content"
              required={true}
              rows={3}
              onChange={handleChange}
              value={formState.content}
            />
          ) : (
            <input
              id="content"
              name="content"
              type="url"
              required={true}
              onChange={handleChange}
              value={formState.content}
            />
          )}
        </div>
        <div>
          <button type="submit">Submit</button>
        </div>
      </fieldset>
    </form>
  );
}

export default PostCreate;

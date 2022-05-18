import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

// Selectors
import { selectIdeas } from "@/redux/reducers/idea/selectors";

// Actions
import { CREATE_IDEA, LOAD_IDEAS } from "../../redux/reducers/idea/actions";

// Components
import Button from "@/components/ui/button/Button";
import Input from "@/components/ui/input/Input";

// Icons
import { FiPlusCircle } from "react-icons/fi";

// Styles
import "./IdeaForm.scss";

const IdeaForm = () => {
  // States
  const [editMode, setEditMode]     = useState(false);
  const [titleValue, setTitleValue] = useState('');

  const ideas    = useSelector(selectIdeas);
  const dispatch = useDispatch();

  /**
   * On edit record
   *
   * @returns {Void}
   */
   const onEdit = () => {
    setEditMode(true);
  }

  /**
   * On change title value
   *
   * @param {SyntheticBaseEvent} event
   * @returns {Void}
   */
  const onChange = (event) => {
    const value = event.target.value;
    setTitleValue(value);
  }

  /**
   * On update record
   *
   * @param {SyntheticBaseEvent} event
   * @returns {Void}
   */
  const onCreate = (event) => {
    event.preventDefault();
    dispatch({
      type: CREATE_IDEA,
      payload: {
        title: titleValue,
      }
    });

    setTitleValue('');
    setEditMode(false);

    dispatch({
      type: LOAD_IDEAS,
      payload: {
        page: ideas.pagination.current_page
      }
    });
  }

  /**
   * On cancel editing
   *
   * @returns {Void}
   */
  const onCancel = () => {
    setTitleValue("");
    setEditMode(false);
  }

  return (
    <div className="idea-form-wrapper">
      {editMode ? (
        <form className="idea-form" onSubmit={onCreate}>
          <div className="pb-4">
            <Input
              type="text"
              value={titleValue}
              placeholder="Enter idea title"
              onChange={onChange}
              className="mr-2"
            />
            <Button
              variant="primary"
              type="submit"
            >
              Save
            </Button>
            <Button onClick={onCancel}>
              Cancel
            </Button>
          </div>
        </form>
      ) : (
        <div className="pb-4">
          <Button
            variant="primary"
            className="add-idea"
            onClick={onEdit}
          >
            <FiPlusCircle size="1em" /> Add new idea
          </Button>
        </div>
    )}
    {ideas.error}
    <div></div>
    </div>
  );
};

export default IdeaForm;

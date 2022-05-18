import React, { useState } from "react";

import { useDispatch, useSelector } from "react-redux";
import { selectIdeas } from "@/redux/reducers/idea/selectors";

// Components
import Input from "@/components/ui/input/Input";

// Icons
import { FiPenTool, FiTrash2, FiRotateCcw, FiSave } from "react-icons/fi";

// Actions
import { DELETE_IDEA, UPDATE_IDEA, RESTORE_IDEA } from "@/redux/reducers/idea/actions";

// Styles
import "./IdeaItem.scss";

/**
 * Idea item component
 */
const IdeaItem = (
  {
    id,
    author  = {id: 1, name: "Cyber Johny", email: "mnemonic@mail.io"},
    title,
    created_at = "2022-05-11 02:44:57",
    updated_at = null,
    deleted_at = null,
  }
) => {
  const avatarId  = Math.ceil(Math.random() * 70);
  const avatarUrl = `https://i.pravatar.cc/200?img=${author.id}`;

  // States
  const [editMode, setEditMode]     = useState(false);
  const [titleValue, setTitleValue] = useState(title);

  const ideas    = useSelector(selectIdeas);
  const dispatch = useDispatch();

  const _className = [
    "idea-item",
    deleted_at ? "idea-item-deleted" : "",
  ].join(" ");

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
   * @returns {Void}
   */
  const onChange = (e) => {
    const value = e.target.value;
    setTitleValue(value);
  }

  /**
   * On update record
   *
   * @returns {Void}
   */
  const onUpdate = () => {
    dispatch({
      type: UPDATE_IDEA,
      payload: {
        id,
        title: titleValue,
      }
    });
    setEditMode(false);
  }

  /**
   * On key down
   *
   * @param {*} event
   * @returns {Void}
   */
  const onKeyDown = (event) => {
    if (event.key === 'Enter') {
      onUpdate();
    }
  }

  /**
   * On cancel editing
   *
   * @returns {Void}
   */
  const onCancel = () => {
    setTitleValue(title);
    setEditMode(false);
  }

  /**
   * On delete record
   *
   * @returns {Void}
   */
  const onDelete = () => {
    dispatch({
      type: DELETE_IDEA,
      payload: {
        id
      }
    });
  }

  /**
   * On restore record
   *
   * @returns {Void}
   */
  const onRestore = () => {
    dispatch({
      type: RESTORE_IDEA,
      payload: {
        id
      }
    });
  }

  return (
    <div className={_className}>
      <div className="author-avatar" title={author.name}>
        <img src={avatarUrl} alt="" className="author-avatar" />
      </div>
      <div className="entry">
        <h3 className="author-name">
          {author.name} <span className="author-email">{author.email}</span>
        </h3>
        <div className="content">
          {editMode
            ? (
              <div>
                <Input
                  type="text"
                  className="full-width"
                  value={titleValue}
                  onChange={onChange}
                  onKeyDown={onKeyDown}
                />
              </div>
            )
            : (
              <>{title}</>
            )
          }
        </div>
        <div className="details">
          {(updated_at && !deleted_at) && <span className="details-item details-last-update">Last update: {updated_at}</span>}
          {deleted_at && <span className="details-item details-last-update">Deleted at: {deleted_at}</span>}
        </div>

        <div className="tools">
          {editMode ? (
            <>
              <FiSave
                className="act act-update"
                title="Update"
                onClick={onUpdate}
              />
              <FiRotateCcw
                className="act act-cancel"
                title="Cancel"
                onClick={onCancel}
              />
            </>
            ) : (
              deleted_at ? (
                <FiRotateCcw
                  className="act act-restore"
                  title="Restore record"
                  onClick={onRestore}
                />
              ) : (
                <>
                  <FiPenTool
                    className="act act-edit"
                    title="Edit record"
                    onClick={onEdit}
                  />
                  <FiTrash2
                    className="act act-remove"
                    title="Trash record"
                    onClick={onDelete}
                  />
                </>
              )
            )
          }
        </div>
      </div>
    </div>
  );
}

export default IdeaItem;

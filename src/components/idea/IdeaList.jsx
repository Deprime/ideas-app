import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectIdeas } from "@/redux/reducers/idea/selectors";

// Components
import IdeaItem from "./IdeaItem";

// Styles
import "./IdeaList.scss";
import Pagination from "@/components/ui/pagination/Pagination";

// Actions
import { LOAD_IDEAS } from "../../redux/reducers/idea/actions";

/**
 *  Idea list component
 */
const IdeaList = () => {
  const ideas    = useSelector(selectIdeas);
  const dispatch = useDispatch();

  /**
   * On change page
   *
   * @param {Number} newPage
   * @returns
   */
  const onChangePage = (newPage) => dispatch({
    type: LOAD_IDEAS,
    payload: {
      page: newPage
    }
  });

  return (
    <>
      <section className="idea-list">
        {/* {!ideas.loading && <div className="loader">loader</div>} */}
        {ideas.data.map(idea =>
          <IdeaItem
            key={idea.id}
            id={idea.id}
            title={idea.title}
            author_id={idea.author_id}
            author={idea.author}
            created_at={idea.created_at}
            updated_at={idea.updated_at}
            deleted_at={idea.deleted_at}
          />
        )}
      </section>
      <Pagination
        currentPage={ideas.pagination.current_page}
        prevPage={ideas.pagination.prev_page}
        nextPage={ideas.pagination.next_page}
        lastPage={ideas.pagination.last_page}
        onChange={onChangePage}
      />
    </>
  );
}

export default IdeaList;

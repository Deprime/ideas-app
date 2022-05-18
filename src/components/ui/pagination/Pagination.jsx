import React, { useState } from "react";

// Components
import PageItem from "./PageItem";
import Input from "@/components/ui/input/Input";

// Icons
import { FiChevronLeft, FiChevronRight, FiChevronsLeft, FiChevronsRight } from "react-icons/fi";

// Styles
import './Pagination.scss';

const Pagination = (
  {
    currentPage = 1,
    prevPage = null,
    nextPage = 2,
    lastPage = 2,
    total,
    onChange = () => {},
  }
) => {
  const [pageValue, setPageValue] = useState("");

  /**
   * Generate pagination list
   *
   * @returns {Array}
   */
  const generatePaginationList = () => {
    const pages = [];

    pages.push({
      disabled: currentPage === 1,
      sign: <FiChevronsLeft />,
      number: 1,
    });

    pages.push({
      disabled: prevPage ? false : true,
      sign: <FiChevronLeft />,
      number: prevPage,
    });

    pages.push({
      disabled: false,
      sign: currentPage,
      number: currentPage,
    });

    pages.push({
      disabled: nextPage ? false : true,
      sign: <FiChevronRight />,
      number: nextPage,
    });

    pages.push({
      disabled: currentPage === lastPage,
      sign: <FiChevronsRight />,
      number: lastPage,
    });

    return pages;
  }

  /**
   * On paginate method
   *
   * @param {Number} pageNumber
   */
  const onPaginate = (pageNumber) => {
    if (pageNumber !== currentPage) {
      onChange(pageNumber);
    }
  }

  /**
   * On change
   *
   * @param {SyntheticBaseEvent} event
   */
  const onCustomPageEnter = (event) => {
    const page = event.target.value;
    setPageValue(page);
  }

  /**
   * On key down
   *
   * @param {*} event
   */
  const onKeyDown = (event) => {
    if (event.key === 'Enter') {
      const newPage = parseInt(event.target.value, 10);
      setPageValue("");
      onPaginate(newPage);
    }
  }

  const pageList = generatePaginationList();

  return (
    <div className="pagination">
      <ul className="page-list">
        {pageList.map((page, index) =>
          <PageItem
            key={`${index}-${page.number}`}
            number={page.number}
            sign={page.sign}
            active={page.number === currentPage}
            disabled={page.disabled}
            onChange={() => onPaginate(page.number)}
          />

        )}
        <li className="page-item">
          <Input
            min="1"
            max={lastPage}
            type="number"
            placeholder="Go to page"
            value={pageValue}
            onChange={onCustomPageEnter}
            onKeyDown={onKeyDown}
          />
        </li>
      </ul>
    </div>
  );
}

export default Pagination;

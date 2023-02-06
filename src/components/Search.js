import { Fragment, useState } from "react";
import styles from "./Search.module.css";

import ReactPaginate from "react-paginate";

const Search = () => {
  const [apiData, setApiData] = useState([]);
  const [search, setSearch] = useState("");
  const [isLoading, setIsLoding] = useState(false);

  //states for pages...
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(10);

  const fetchHanlder = async () => {
    setIsLoding(true);
    const response = await fetch(
      `https://openlibrary.org/search.json?q=${search}`
    );
    if (!response.ok) {
      console.log("api not fetched");
    }
    const data = await response.json();
    console.log(data.docs);
    setApiData(data.docs);
    setIsLoding(false);
  };

  const clearHandler = () => {
    setSearch("");
  };

  //get current post..

  const indexOfLastPost = currentPage * postsPerPage;
  const indexofFistPost = indexOfLastPost - postsPerPage;
  const currentPost = apiData.slice(indexofFistPost, indexOfLastPost);

  const pageCount = Math.ceil(apiData.length / postsPerPage);
  const changePage = ({ selected }) => {
    setCurrentPage(selected);
  };

  return (
    <Fragment>
      <div className={styles.container}>
        <div>
          <input
            type="text"
            placeholder="Search"
            className={styles.input}
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
        <div>
          <button onClick={fetchHanlder} className={styles.Btn}>
            Search
          </button>
        </div>
        <div>
          <button onClick={clearHandler} className={styles.Btn}>
            Clear
          </button>
        </div>
      </div>
      {isLoading && (
        <p
          style={{
            textAlign: "center",
            fontSize: "34px",
            fontFamily: "monospace",
          }}
        >
          Data is Loading...
        </p>
      )}
      <table className={styles.table}>
        <thead>
          <tr>
            <th className={styles.head}>Title and SubTitle</th>
            <th className={styles.head}>Author</th>
            <th className={styles.head}>First Publish Year</th>
            <th
              className={styles.head}
              style={{ borderRight: "2px solid black" }}
            >
              Edition Count
            </th>
          </tr>
        </thead>
        <tbody>
          {currentPost.length === 0 ? (
            <p
              style={{
                textAlign: "center",
                fontSize: "34px",
                fontFamily: "monospace",
              }}
            >
              No data to show{" "}
            </p>
          ) : (
            ""
          )}
          {currentPost.map((data) => {
            return (
              <tr key={data.key}>
                <td className={styles.head}>{data.title}</td>
                <td className={styles.head}>{data.author_name[0]}</td>
                <td className={styles.head}>{data.first_publish_year}</td>
                <td
                  className={styles.head}
                  style={{ borderRight: "2px solid black" }}
                >
                  {data.edition_count}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      {apiData.length > 0 ? (
        <ReactPaginate
          previousLabel={"Previous"}
          nextLabel={"Next"}
          pageCount={pageCount}
          onPageChange={changePage}
          containerClassName={"paginationBttns"}
          previousLinkClassName={"previousBttn"}
          nextLinkClassName={"nextBttn"}
          disabledClassName={"paginationDisabled"}
          activeClassName={"paginationActive"}
        />
      ) : (
        ""
      )}
    </Fragment>
  );
};

export default Search;

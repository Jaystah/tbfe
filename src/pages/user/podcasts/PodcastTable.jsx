import { useState, useRef } from "react";
import useOnClickOutside from "@/hooks/useOnClickOutside/useOnClickOutside";

const PodcastTable = ({ data }) => {
  const [activeDropdown, setActiveDropdown] = useState(null);

  const [isActive, setIsActive] = useState(false);
  const ref = useRef();

  useOnClickOutside(ref, () => {
    setActiveDropdown(null); // Reset activeDropdown when clicking outside
    setIsActive(false);
  });

  // console.log(activeDropdown, isActive);
  return (
    <div className="table-responsive">
      <table className="table podcast-list-table mb-lg-0">
        <thead>
          <tr>
            <th className="py-lg-4 py-2 px-lg-4 px-2">#SL</th>
            <th className="py-lg-4 py-2 px-lg-4 px-2">Title</th>
            <th className="py-lg-4 py-2 px-lg-4 px-2">Category</th>
            <th className="py-lg-4 py-2 px-lg-4 px-2">Total Episodes</th>
            <th className="py-lg-4 py-2 px-lg-4 px-2">Action</th>
          </tr>
        </thead>
        <tbody>
          {data?.map((item, index) => (
            <tr key={index}>
              <td className="py-lg-4 py-2 px-lg-4 px-2">
                {index < 9 ? `0${index + 1}` : index + 1}
              </td>
              <td className="py-lg-4 py-2 px-lg-4 px-2">
                {item?.podcast?.title?.substring(0, 35) + "..."}
              </td>
              <td className="py-lg-4 py-2 px-lg-4 px-2">
                {item?.category?.name}
              </td>
              <td className="py-lg-4 py-2 px-lg-4 px-2">
                {item?.totalEpisodes}
              </td>
              <td className="py-lg-4 py-2 px-lg-4 px-2 position-relative">
                <button
                  className="fs-xl"
                  type="button"
                  onClick={() => {
                    setActiveDropdown(activeDropdown === index ? null : index);
                    setIsActive(!isActive);
                  }}
                >
                  <i className="ti ti-dots-vertical"></i>
                </button>
                <div
                  className={`dropdown-box bgc-3 p-3 rounded ${
                    isActive && activeDropdown === index ? "show" : ""
                  } ${index >= data?.length / 2 ? "dropdown-box-up" : " "}`}
                  ref={ref}
                >
                  <ul className="d-grid gap-2">
                    <li>
                      <button className="action-item-btn py-2 px-3 rounded">
                        Play Episode
                      </button>
                    </li>
                    <li>
                      <button className="action-item-btn py-2 px-3 rounded">
                        Edit
                      </button>
                    </li>
                    <li>
                      <button className="action-item-btn py-2 px-3 rounded">
                        Delete
                      </button>
                    </li>
                  </ul>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PodcastTable;

import axios from "axios";
import { useEffect, useState } from "react";
const options = [
  {
    id: 1,
    extension: "jpg",
    mimetypes: ["image/jpeg", "image/pjpeg"],
    enabled: true,
  },
  {
    id: 2,
    extension: "jpeg",
    mimetypes: ["image/jpeg", "image/pjpeg"],
    enabled: false,
  },
  {
    id: 3,
    extension: "png",
    mimetypes: ["image/png", "image/x-png"],
    enabled: true,
  },
  {
    id: 4,
    extension: "gif",
    mimetypes: ["image/gif"],
    enabled: true,
  },
  {
    id: 5,
    extension: "pdf",
    mimetypes: ["application/pdf"],
    enabled: true,
  },
  {
    id: 6,
    extension: "doc",
    mimetypes: ["application/msword", "application/vnd.ms-office"],
    enabled: true,
  },
  {
    id: 7,
    extension: "docx",
    mimetypes: [
      "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
    ],
    enabled: true,
  },
  {
    id: 8,
    extension: "xls",
    mimetypes: ["application/vnd.ms-excel", "application/vnd.ms-office"],
    enabled: true,
  },
  {
    id: 9,
    extension: "xlsx",
    mimetypes: [
      "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
    ],
    enabled: true,
  },
  {
    id: 10,
    extension: "txt",
    mimetypes: ["text/plain", "text/x-wstext", "text/x-setext"],
    enabled: true,
  },
  {
    id: 11,
    extension: "csv",
    mimetypes: ["text/csv", "application/vnd.ms-excel"],
    enabled: true,
  },
  {
    id: 12,
    extension: "mp3",
    mimetypes: ["audio/mpeg", "audio/mpg", "audio/mpeg3", "audio/mp3"],
    enabled: true,
  },
  {
    id: 13,
    extension: "mp4",
    mimetypes: ["video/mp4", "audio/mp4"],
    enabled: true,
  },
  {
    id: 14,
    extension: "ppt",
    mimetypes: ["application/vnd.ms-powerpoint"],
    enabled: true,
  },
  {
    id: 15,
    extension: "pptx",
    mimetypes: [
      "application/vnd.openxmlformats-officedocument.presentationml.presentation",
    ],
    enabled: true,
  },
  {
    id: 16,
    extension: "zip",
    mimetypes: [
      "application/zip",
      "application/x-zip",
      "application/x-zip-compressed",
    ],
    enabled: true,
  },
  {
    id: 17,
    extension: "dwg",
    mimetypes: ["image/x-dwg", "image/vnd.dwg"],
    enabled: true,
  },
  {
    id: 18,
    extension: "tif",
    mimetypes: ["image/tif"],
    enabled: true,
  },
  {
    id: 19,
    extension: "tiff",
    mimetypes: ["image/tiff"],
    enabled: false,
  },
];
function MyForm() {
  // const [checkedItems, setCheckedItems] = useState([]);
  const [items, setItems] = useState(options);

  // useEffect(() => {
  //   axios.get("#").then((res) => {
  //     setItems(res);
  //   });
  // }, []);

  const handleCheckboxChange = (item, event) => {
    const { checked } = event.target;
    setItems(items.map((i) => (i == item ? { ...item, enabled: checked } : i)));
    console.log(item);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Process the selected items (checkedItems) here
    // console.log("Selected items:", checkedItems);

    // Example: Send data to a server using fetch or axios
    // fetch('/api/submit-data', {
    //   method: 'POST',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify({ selectedItems }),
    // })
    // .then(response => response.json())
    // .then(data => {
    //   console.log('Server response:', data);
    //   // Handle successful submission (e.g., clear form, display success message)
    // })
    // .catch(error => {
    //   console.error('Error submitting data:', error);
    //   // Handle submission error
    // });
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-2">
      {items.map((item) => (
        <div key={item.id} className="flex flex-row bg-slate-500">
          <span className="bg-slate-500">
            <label className="flex items-center">{item.extension}</label>
          </span>
          <span>
            <input
              type="checkbox"
              name={item.extension}
              checked={item.enabled}
              onChange={(e) => handleCheckboxChange(item, e)}
              className=""
            />
          </span>
        </div>
      ))}
      <button className="" type="submit">
        Post
      </button>
    </form>
  );
}

export default MyForm;

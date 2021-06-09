import axios from "axios";
import { Alert } from "antd";

let key = {
  API_BASE_URL: "http://www.omdbapi.com/?apikey=faf7e5bb&s=",
};

export function POST(url, body, header, type) {
  return axios({
    method: "post",
    url: url,
    timeout: 60000 * 60, // Wait for 5 Minutes
    headers: header,
    data: body,
  })
    .then((res) => {
      if (res.status === 200 || res.status === 201) {
        return res.data;
      } else if (res.status === 401) {
      } else {
        return res;
      }
    })
    .catch((err) => {
      console.log("err POST : ", err);
      if (err.response !== undefined) {
        if (err.response.status === 401) {
        } else if (err.response.status === 500) {
          return err;
        } else if (err.response.status === 400) {
        } else if (err.response.status === 412) {
        } else {
        }
        alert("error", err.response.message);
        return err.response;
      } else {
        alert("error", err.message);
        return err;
      }
    });
}

export function GET(url, header) {
  return axios({
    method: "get",
    url: url,
    timeout: 60000 * 60,
    headers: header,
  })
    .then((res) => {
      if (res.status === 200 || res.status === 201) {
        return res.data;
      } else if (res.status === 401) {
      } else {
        return res;
      }
    })
    .catch((err) => {
      console.log("err GET : ", err);
      if (err.response !== undefined) {
        if (err.response.status === 401) {
        } else if (err.response.status === 500) {
        } else if (err.response.status === 400) {
        } else if (err.response.status === 412) {
        } else {
        }
        alert("error", err.response.message);
        return err.response;
      } else {
        alert("error", err.message);
        return err;
      }
    });
}

export function PUT(url, body, header) {
  return axios({
    method: "put",
    url: url,
    timeout: 60000 * 60, // Wait for 5 Minutes
    headers: header,
    data: body,
  })
    .then((res) => {
      if (res.status === 200 || res.status === 201) {
        return res.data;
      } else if (res.status === 401) {
      } else {
        return res;
      }
    })
    .catch((err) => {
      console.log("err PUT : ", err);
      if (err.response !== undefined) {
        if (err.response.status === 401) {
        } else if (err.response.status === 500) {
        } else if (err.response.status === 400) {
        } else if (err.response.status === 412) {
        } else {
        }
        alert("error", err.response.message);
        return err.response;
      } else {
        alert("error", err.message);
        return err;
      }
    });
}

export function DELETE(url, header) {
  return axios({
    method: "delete",
    url: url,
    timeout: 60000 * 60,
    headers: header,
  })
    .then((res) => {
      alert("success", "Data success deleted");
      if (res.status === 200 || res.status === 201) {
        return res.data;
      } else if (res.status === 401) {
      } else {
        return res;
      }
    })
    .catch((err) => {
      console.log("err delete : ", err);
      if (err.response !== undefined) {
        if (err.response.status === 401) {
        } else if (err.response.status === 500) {
        } else if (err.response.status === 400) {
        } else if (err.response.status === 412) {
        } else {
        }
        alert("error", err.response.message);
        return err.response;
      } else {
        alert("error", err.message);
        return err;
      }
    });
}

export function alert(type, message) {
  if (type === "error") {
    <Alert message={message} type={type} showIcon />;
  } else if (type === "success") {
    <Alert message={message} type={type} showIcon />;
  }
}

// HEADER
export function Header() {
  return {
    "Content-Type": "application/json, text/plain, */*",
  };
}

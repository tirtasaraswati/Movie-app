import React, { useState, useCallback } from "react";
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
  Row,
  Col,
  Card,
  Modal,
  Input,
  Form,
  Select,
  DatePicker,
  Button,
  Empty,
} from "antd";
import { AudioOutlined } from "@ant-design/icons";
import allFunctionApp, { getPoster } from "../redux/App/action";
import "antd/dist/antd.css";
import "../assets/index.scss";

const { getMovie, handleState, getDetail } = allFunctionApp;

export default function () {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.App);
  let history = useHistory();
  const [isShowModal, setShowModal] = useState(false);
  const showModal = () => setShowModal(!isShowModal);

  const { Meta } = Card;
  const [form] = Form.useForm();

  let onSearch = useCallback(() => {
    dispatch(getMovie());
  }, [dispatch]);

  const showPoster = (id, row) => {
    dispatch(getPoster(row));
    if (state.isLoading === false) {
      setShowModal(!isShowModal);
    }
  };

  const handleDetail = (id, row) => {
    dispatch(getDetail(row));
    history.push("/moviedetail/" + row.imdbID);
  };
  return (
    <div className="margin">
      <Row gutter={16}>
        <Col span={18}>
          <div className="topbar-title">BillionViews</div>
        </Col>
        <Col span={6} xl={6} lg={6} md={4} s={4}>
          <Form form={form} onFinish={onSearch}>
            <Form.Item
              name="title"
              rules={[{ required: true, message: "Required to fill!" }]}
            >
              <Input.Search
                className="input"
                placeholder="Search keyword"
                value={state.search.title}
                size="large"
                enterButton
                onChange={(e) => {
                  dispatch(handleState("title", e.target.value));
                }}
                onSearch={onSearch}
              />
            </Form.Item>
          </Form>
        </Col>
      </Row>
      {state.isResponse === "false" ? (
        <Row>
          <div style={{ textAlign: "center" }}>
            <Empty description={false} />
          </div>
        </Row>
      ) : (
        <Row gutter={24} className="mt-25 mb-20">
          {state.listMovie.map((list, idx) => (
            <Col span={4}>
              <Card
                hoverable
                style={{ width: 240, marginBottom: "30px" }}
                cover={
                  <img
                    className="img-list"
                    alt={list.Title}
                    src={list.Poster}
                    onClick={(e) => showPoster(e, list)}
                  />
                }
              >
                <Meta
                  className="text-center"
                  title={
                    <a
                      // href="#"
                      onClick={(e) => handleDetail(e, list)}
                    >
                      {list.Title}
                    </a>
                  }
                />
              </Card>
            </Col>
          ))}
        </Row>
      )}

      <Modal
        className="modal"
        visible={isShowModal}
        onCancel={showModal}
        footer={null}
      >
        <img
          className="img-poster"
          // src={"data:image/jpg;base64" + state.poster}
          src={state.poster}
          width="400"
        />
      </Modal>
      {/* </Row> */}
    </div>
  );
}

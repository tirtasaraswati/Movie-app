import React, { useEffect, useState } from "react";
import { Redirect, useHistory, useLocation } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { Row, Col, Card, Modal, Input, Form } from "antd";
import { AudioOutlined } from "@ant-design/icons";
import allFunctionApp from "../redux/App/action";
import "antd/dist/antd.css";
import "../assets/index.scss";

const { getMovie, handleState } = allFunctionApp;

export default function () {
  let history = useHistory();
  const dispatch = useDispatch();
  const state = useSelector((state) => state.App);
  const [isShowModal, setShowModal] = useState(false);
  const showModal = () => setShowModal(!isShowModal);

  const { Meta } = Card;
  const [form] = Form.useForm();

  useEffect(() => {
    dispatch(getMovie());
  }, [dispatch]);

  const handleDetail = (row, id) => {
    // dispatch(getDetailServiceUnit(row));
    history.push("/moviedetail");
  };
  return (
    <div className="margin">
      <div className="topbar-title">BillionViews</div>
      <div>
        <h2>Search</h2>
        {state.listMovie.length === 0 ? (
          <Form>
            <Row gutter={24} className="mt-25 mb-20">
              <Col span={24} md={8}>
                <Form.Item
                  name="title"
                  rules={[{ required: true, message: "Required to fill!" }]}
                >
                  <Input
                    className="input"
                    placeholder="Keyword"
                    value={state.search.title}
                    onChange={(e) => {
                      dispatch(handleState("title", e.target.value));
                    }}
                  />
                </Form.Item>
              </Col>
            </Row>
          </Form>
        ) : (
          <Row gutter={16}>
            {state.listMovie.map((list, idx) => (
              <Col span={4}>
                <Card
                  hoverable
                  style={{ width: 240, marginBottom: "10px" }}
                  cover={
                    <img
                      className="img-list"
                      alt="example"
                      src={list.Poster}
                      onClick={showModal}
                    />
                  }
                >
                  <Meta
                    title={
                      <a href="#" onClick={handleDetail.bind()}>
                        {list.Title}
                      </a>
                    }
                    description={list.Year}
                  />
                </Card>
              </Col>
            ))}
          </Row>
        )}

        <Modal visible={isShowModal} onCancel={showModal} footer={null}>
          <img
            className="img-poster"
            alt="example"
            src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
            width="400"
          />
        </Modal>
      </div>
    </div>
  );
}

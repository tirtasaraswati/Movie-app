import React, { useState, useCallback, useEffect, useRef } from "react";
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { Row, Col, Card, Modal, Input, Form, Empty } from "antd";
import allFunctionApp, { getPoster } from "../redux/App/action";
import "antd/dist/antd.css";
import "../assets/index.scss";

const { getMovie, handleState, getDetail } = allFunctionApp;

export default function () {
  const dispatch = useDispatch();
  const observer = useRef();
  const history = useHistory();
  const state = useSelector((state) => state.App);
  const [page, setPage] = useState(1);
  const [isShowModal, setShowModal] = useState(false);
  const showModal = () => setShowModal(!isShowModal);

  const { Meta } = Card;
  const [form] = Form.useForm();

  let onSearch = useCallback(() => {
    dispatch(getMovie(page));
    setPage(2);
  }, [dispatch]);

  useEffect(() => {
    state.listMovie = [];
  }, [state.search.title]);

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

  const lastMovieRef = useCallback(
    (lastData) => {
      if (state.isLoading) return;
      if (observer.current) observer.current.disconnect();
      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && state.isMore) {
          setPage((prevPage) => prevPage + 1);
          dispatch(getMovie(page));
        }
      });
      if (lastData) observer.current.observe(lastData);
    },
    [dispatch, state.isLoading, state.isMore]
  );

  return (
    <div className="margin">
      <Row gutter={16}>
        <Col span={18} xl={18} lg={18} md={24} s={24} xs={24}>
          <div className="topbar-title">BillionViews</div>
        </Col>
        <Col span={6} xl={6} lg={6} md={24} s={24} xs={24}>
          <Form form={form} onFinish={onSearch}>
            <Form.Item name="title">
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
      {state.isResponse === false ? (
        <Row>
          <Col span={24}>
            <Empty description={state.isError} />
          </Col>
        </Row>
      ) : (
        <Row gutter={24}>
          {state.listMovie.map((list, idx) => {
            if (state.listMovie.length === idx + 1) {
              return (
                <Col span={8} xl={8} lg={12} md={12} s={24} xs={24}>
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
                        <div
                          ref={lastMovieRef}
                          key={list}
                          onClick={(e) => handleDetail(e, list)}
                        >
                          {list.Title}
                        </div>
                      }
                    />
                  </Card>
                </Col>
              );
            } else {
              return (
                <Col span={4} xl={4} lg={4} md={12} s={24} xs={24}>
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
              );
            }
          })}
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

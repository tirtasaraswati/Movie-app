import React, { useEffect, useState } from "react";
import { Redirect, useHistory, useLocation } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { Card, Modal } from "antd";
import "antd/dist/antd.css";
import "../assets/index.scss";

const { Meta } = Card;
export default function () {
  let history = useHistory();
  const dispatch = useDispatch();
  // const reducer = useSelector(state => state.home);
  const [isShowModal, setShowModal] = useState(false);
  const showModal = () => setShowModal(!isShowModal);

  const handleDetail = (row, id) => {
    // dispatch(getDetailServiceUnit(row));
    history.push("/moviedetail");
  };
  return (
    <div className="margin">
      <div className="topbar-title">BillionViews</div>
      <div>
        <Card
          hoverable
          style={{ width: 200 }}
          cover={
            <img
              className="img-list"
              alt="example"
              src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
              onClick={showModal}
            />
          }
        >
          <Meta
            title={
              <a href="#" onClick={handleDetail.bind()}>
                "Europe Street beat"
              </a>
            }
            description="www.instagram.com"
          />
        </Card>
      </div>
      <Modal visible={isShowModal} onCancel={showModal} footer={null}>
        <img
          className="img-poster"
          alt="example"
          src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
          width="400"
        />
      </Modal>
    </div>
  );
}

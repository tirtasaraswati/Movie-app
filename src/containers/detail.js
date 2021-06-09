import React, { useEffect, useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Card } from "antd";
import "antd/dist/antd.css";
import "../assets/index.scss";

const { Meta } = Card;
export default function () {
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
            />
          }
        >
          <Meta title="Europe Street beat" description="www.instagram.com" />
        </Card>
      </div>
    </div>
  );
}

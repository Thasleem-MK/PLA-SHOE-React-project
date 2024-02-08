import React from "react";

function Copyrightfooter() {
  return (
    <div className="col-12">
      <div className="col-12 d-flex p-4 bg-secondary ">
        <div className="col-6 text-white">
          © 2024 Recycled Shoe Store. Powered by Recycled Shoe Store.
        </div>
        <div className="col-6" style={{ cursor: "pointer" }}>
          <img
            src="https://websitedemos.net/recycled-shoe-store/wp-content/uploads/sites/983/2021/11/payment-icons.png"
            alt=""
          />
        </div>
      </div>
    </div>
  );
}

export default Copyrightfooter;

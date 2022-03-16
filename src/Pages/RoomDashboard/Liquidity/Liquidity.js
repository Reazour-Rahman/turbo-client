import React from "react";
import "../../Dashboard/Default/Default.css";
import { useSelector } from "react-redux";
import NewSubscriber from "./NewSubscriber.tsx";
import MyTransaction from "./MyTransaction.tsx";

const Liquidity = () => {
  const user = useSelector((state) => state.firebase.user);

  return (
    <div>
      <main className="default-bottom-container">
        {/* :::::::::::::::::
        New Members (Left)
        ::::::::::::::::::*/}
        <section>
          <NewSubscriber user={user} />
        </section>

        {/* :::::::::::::::::
        Transaction (right)
        ::::::::::::::::::*/}
        <section>
          <MyTransaction user={user} />
        </section>
      </main>
    </div>
  );
};

export default Liquidity;

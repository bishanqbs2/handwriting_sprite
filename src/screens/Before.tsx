import { useEffect, useState } from "react";
import Layout from "../components/Layout";

const Before = ({ data }: any) => {
  const [selectedTab, setSelectedTab] = useState<any>(null);
  const handleSelect = (tab: any) => setSelectedTab(tab);

  useEffect(() => {
    if (data) setSelectedTab(data[0]);
  }, [data]);

  return (
    <Layout>
      <div className="screen_1">
        <ul className="navTab">
          {data &&
            data.map((tab: any, i: number) => {
              return (
                <li
                  key={i}
                  className={selectedTab == tab ? "active" : ""}
                  onClick={() => handleSelect(tab)}
                >
                  <span>{tab.text}</span>
                </li>
              );
            })}
        </ul>
        <div className="navTabContent">
          <img
            src={process.env.PUBLIC_URL + selectedTab?.source}
            alt={selectedTab?.text}
          />
        </div>
      </div>
    </Layout>
  );
};

export default Before;
